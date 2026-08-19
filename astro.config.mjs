// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { reviewEnvironmentNoindex } from './scripts/review-environment-noindex.mjs';

const deploymentUrl = process.env.DEPLOYMENT_URL ?? 'https://test2.avab.eu';

// https://astro.build/config
export default defineConfig({
  site: deploymentUrl,
  integrations: [reviewEnvironmentNoindex({ deploymentUrl }), sitemap()],
  redirects: {
    '/miljo/sporthall': '/miljo/sporthall-arena',
    // Gamla WordPress-URL:er -> nya Astro-routes. Se docs/architecture/wordpress-redirects.md.
    '/om-2': '/om-oss',
    '/skola': '/miljo/skola',
    '/simhall': '/miljo/simhall',
    '/sporthall': '/miljo/sporthall-arena',
    '/horslingor': '/tjanster/horslinga',
    '/sakerhetskameror': '/tjanster/kameraovervakning',
    '/minnebergsskolan-arvika': '/referenser/minnebergsskolan-arvika',
    '/saffle-simhall': '/referenser/saffle-simhall',
    '/ljudprojektering': '/tjanster/projektering',
    '/taluppfattbarhet-i-publika-lokaler': '/tjanster/taluppfattbarhet',
    '/akustik': '/tjanster/taluppfattbarhet',
    '/bakgrundsljud': '/tjanster/bakgrundsmusik',
  },
  build: {
    format: 'directory',
  },
});
