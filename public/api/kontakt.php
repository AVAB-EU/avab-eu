<?php
/**
 * AVAB kontaktformulär – tar emot förfrågan från /kontakt/ och mejlar den till info@avab.eu.
 *
 * - Endast POST med JSON från avab.eu (Origin/Referer kontrolleras).
 * - Honeypot-fält och minsta ifyllnadstid stoppar enkla botar.
 * - Enkel hastighetsbegränsning per IP (hashad, ingen klartext-IP sparas).
 * - Inga personuppgifter loggas. Endast fält på vitlistan används.
 */

declare(strict_types=1);

const AVAB_TO = 'info@avab.eu';
const AVAB_FROM = 'webb@avab.eu';
const AVAB_FROM_NAME = 'AVAB webbformulär';
const RATE_LIMIT = 5;          // förfrågningar
const RATE_WINDOW = 3600;      // per sekunder
const MIN_FILL_SECONDS = 3;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'method']);
}

// Endast anrop från vår egen webbplats.
$allowedHosts = ['avab.eu', 'www.avab.eu', 'test2.avab.eu'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
$originHost = strtolower((string) parse_url($origin, PHP_URL_HOST));
if (!in_array($originHost, $allowedHosts, true)) {
    respond(403, ['ok' => false, 'error' => 'origin']);
}

$raw = file_get_contents('php://input', false, null, 0, 32768);
$data = json_decode((string) $raw, true);
if (!is_array($data)) {
    respond(400, ['ok' => false, 'error' => 'format']);
}

// Honeypot och tidskontroll: svara "ok" så att botar inte lär sig något, men skicka inget.
$honeypot = trim((string) ($data['website'] ?? ''));
$startedAt = (int) ($data['startedAt'] ?? 0);
$elapsed = $startedAt > 0 ? (int) floor(microtime(true)) - (int) floor($startedAt / 1000) : 0;
if ($honeypot !== '' || $elapsed < MIN_FILL_SECONDS) {
    respond(200, ['ok' => true]);
}

// Hastighetsbegränsning per IP (hashad).
$ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rateFile = rtrim(sys_get_temp_dir(), '/') . '/avab-kontakt-' . hash('sha256', 'avab|' . $ip);
$now = time();
$hits = [];
if (is_file($rateFile)) {
    $stored = json_decode((string) @file_get_contents($rateFile), true);
    if (is_array($stored)) {
        $hits = array_values(array_filter($stored, static fn($t) => is_int($t) && $t > $now - RATE_WINDOW));
    }
}
if (count($hits) >= RATE_LIMIT) {
    respond(429, ['ok' => false, 'error' => 'rate']);
}

/** Rensar text: tar bort styrtecken, normaliserar radbrytningar och begränsar längden. */
function clean($value, int $max, bool $multiline = false): string
{
    $text = is_scalar($value) ? (string) $value : '';
    $text = str_replace(["\r\n", "\r"], "\n", $text);
    $text = $multiline
        ? preg_replace('/[^\P{C}\n\t]/u', '', $text)
        : preg_replace('/\p{C}/u', ' ', $text);
    $text = trim((string) $text);
    if (function_exists('mb_substr')) {
        return mb_substr($text, 0, $max);
    }
    return substr($text, 0, $max);
}

$intentLabels = [
    'project' => 'Projekt eller nybyggnation',
    'service' => 'Service eller felanmälan',
    'advice' => 'Rådgivning',
    'other' => 'Övrigt',
];
$intent = clean($data['intent'] ?? '', 20);
$intentLabel = $intentLabels[$intent] ?? 'Förfrågan';

$fields = [
    'name' => clean($data['name'] ?? '', 100),
    'company' => clean($data['company'] ?? '', 150),
    'email' => clean($data['email'] ?? '', 200),
    'phone' => clean($data['phone'] ?? '', 50),
    'replyMethod' => clean($data['replyMethod'] ?? '', 40),
    'areas' => clean($data['areas'] ?? '', 400),
    'environment' => clean($data['environment'] ?? '', 120),
    'stage' => clean($data['stage'] ?? '', 120),
    'location' => clean($data['location'] ?? '', 180),
    'timeline' => clean($data['timeline'] ?? '', 120),
    'urgency' => clean($data['urgency'] ?? '', 120),
    'system' => clean($data['system'] ?? '', 250),
    'description' => clean($data['description'] ?? '', 1800, true),
];

$emailValid = $fields['email'] !== '' && filter_var($fields['email'], FILTER_VALIDATE_EMAIL) !== false;
if ($fields['email'] !== '' && !$emailValid) {
    respond(422, ['ok' => false, 'error' => 'email']);
}
if ($fields['name'] === '' || ($fields['email'] === '' && $fields['phone'] === '') || $fields['description'] === '') {
    respond(422, ['ok' => false, 'error' => 'required']);
}

$rows = [
    ['Ärende', $intentLabel],
    ['Område', $fields['areas'] ?: 'Inte angivet'],
];
foreach ([
    ['Miljö', 'environment'],
    ['Projektläge', 'stage'],
    ['Plats', 'location'],
    ['Tidplan', 'timeline'],
    ['Prioritet', 'urgency'],
    ['Anläggning/system', 'system'],
] as [$label, $key]) {
    if ($fields[$key] !== '') {
        $rows[] = [$label, $fields[$key]];
    }
}
$rows[] = ['Namn', $fields['name']];
$rows[] = ['Företag/organisation', $fields['company'] ?: 'Inte angivet'];
$rows[] = ['E-post', $fields['email'] ?: 'Inte angivet'];
$rows[] = ['Telefon', $fields['phone'] ?: 'Inte angivet'];
$rows[] = ['Önskad kontaktväg', $fields['replyMethod'] ?: 'Telefon eller e-post'];

$body = "Ny förfrågan via kontaktformuläret på avab.eu\n\n";
foreach ($rows as [$label, $value]) {
    $body .= $label . ': ' . $value . "\n";
}
$body .= "\nBeskrivning:\n" . $fields['description'] . "\n\n";
$body .= "Skickat " . date('Y-m-d H:i') . ". Svara på detta mejl för att svara direkt till kunden"
    . ($emailValid ? '.' : ' (ingen e-post angiven, ring kunden).') . "\n";

function encodeHeader(string $text): string
{
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

function sendMail(string $to, string $subject, string $body, ?string $replyTo): bool
{
    $headers = [
        'From: ' . encodeHeader(AVAB_FROM_NAME) . ' <' . AVAB_FROM . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'X-Mailer: avab.eu',
    ];
    if ($replyTo !== null) {
        $headers[] = 'Reply-To: ' . $replyTo;
    }
    return mail($to, encodeHeader($subject), $body, implode("\r\n", $headers), '-f' . AVAB_FROM);
}

$subjectParts = [$intentLabel, $fields['company'] ?: $fields['name']];
$subject = 'Webbförfrågan: ' . implode(' – ', array_filter($subjectParts));

$sent = sendMail(AVAB_TO, $subject, $body, $emailValid ? $fields['email'] : null);
if (!$sent) {
    respond(502, ['ok' => false, 'error' => 'send']);
}

// Räkna förfrågan först när den faktiskt skickats.
$hits[] = $now;
@file_put_contents($rateFile, json_encode($hits), LOCK_EX);

// Bekräftelse till kunden: fast text, inget av kundens fritext återges.
if ($emailValid) {
    $confirmation = "Hej!\n\n"
        . "Tack för er förfrågan till AVAB. Vi har tagit emot den och återkommer så snart vi kan, normalt inom en arbetsdag.\n\n"
        . "Har ni ritningar, bilder eller annat underlag kan ni svara på detta mejl och bifoga dem.\n\n"
        . "Brådskande felanmälan? Ring oss på 054 820 20 80 (vardagar 08–17).\n\n"
        . "Vänliga hälsningar,\nAVAB\nhttps://avab.eu\n";
    sendMail($fields['email'], 'Vi har tagit emot er förfrågan – AVAB', $confirmation, AVAB_TO);
}

respond(200, ['ok' => true]);
