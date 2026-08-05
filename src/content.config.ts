import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE_URL } from "./config/site";

const requiredText = z.string().trim().min(1);

const imageSourceSchema = z.string().refine(
  (src) => src.startsWith("/") || src.startsWith(`${SITE_URL}/`),
  `Bildkällan måste vara relativ eller ligga på ${SITE_URL}/.`,
);

const imageSchema = z.object({
  src: imageSourceSchema,
  alt: requiredText,
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  objectPosition: z.string().optional(),
});

const evidenceSchema = z
  .object({
    type: z.enum([
      "delivered",
      "commissioned",
      "measured",
      "customerConfirmed",
      "estimated",
    ]),
    source: z.string().optional(),
    verifiedAt: z.coerce.date().optional(),
    internalNote: z.string().optional(),
  })
  .superRefine((evidence, context) => {
    if (
      evidence.type === "measured" &&
      !evidence.source &&
      !evidence.internalNote
    ) {
      context.addIssue({
        code: "custom",
        message: "Mätvärden kräver intern källa eller notering.",
      });
    }

    if (evidence.type === "estimated" && !evidence.internalNote) {
      context.addIssue({
        code: "custom",
        message: "Uppskattningar kräver en intern notering.",
      });
    }
  });

const ctaSchema = z
  .object({
    enabled: z.boolean(),
    variant: z.enum(["page", "legacy", "none"]),
    eyebrow: requiredText.optional(),
    title: requiredText.optional(),
    text: requiredText.optional(),
    primaryLabel: requiredText.optional(),
    primaryHref: requiredText.optional(),
    secondaryLabel: requiredText.optional(),
    secondaryHref: requiredText.optional(),
    points: z.array(requiredText).min(1).optional(),
  })
  .superRefine((cta, context) => {
    if (
      cta.enabled &&
      cta.variant === "page" &&
      (!cta.title || !cta.primaryLabel || !cta.primaryHref)
    ) {
      context.addIssue({
        code: "custom",
        message: "En aktiverad PageCTA kräver titel, primäretikett och primärlänk.",
      });
    }

    if (Boolean(cta.secondaryLabel) !== Boolean(cta.secondaryHref)) {
      context.addIssue({
        code: "custom",
        message: "Sekundär CTA-etikett och länk måste anges tillsammans.",
      });
    }
  });

const references = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/references" }),
  schema: z.object({
    draft: z.boolean().default(false),
    slug: z.string().startsWith("/referenser/").endsWith("/"),
    layout: z.enum(["compact", "standard", "extended"]),
    title: requiredText,
    shortTitle: requiredText,
    heroTitle: requiredText,
    heroSubtitle: requiredText,
    summary: requiredText,
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    seo: z.object({
      title: requiredText,
      description: requiredText,
      ogTitle: z.string().optional(),
      ogDescription: z.string().optional(),
      twitterTitle: z.string().optional(),
      twitterDescription: z.string().optional(),
      noindex: z.boolean().default(false),
    }),
    archive: z.object({
      title: z.string(),
      image: imageSchema,
      excerpt: z.string(),
      environments: z.array(z.string()).min(1),
      technologies: z.array(z.string()).min(1),
      featured: z.boolean().optional(),
    }),
    category: z.string(),
    environment: z.string(),
    location: z.string(),
    customer: z.object({
      name: requiredText,
      publicDisplay: requiredText,
      showName: z.boolean(),
      publicationApproved: z.boolean().nullable(),
      referenceAvailableOnRequest: z.boolean().default(false),
    }),
    heroImage: imageSchema,
    facts: z.array(z.object({ label: z.string(), value: z.string() })).min(1),
    brief: z.object({
      eyebrow: z.string(),
      title: z.string(),
      need: z.string(),
      responsibility: z.string(),
      result: z.string(),
    }),
    scope: z.object({
      eyebrow: z.string(),
      title: z.string(),
      lead: z.string(),
      items: z.array(z.string()).min(1),
      projectFacts: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .min(1)
        .optional(),
      serviceLabel: z.string().optional(),
      serviceHref: z.string().optional(),
    }),
    variants: z
      .object({
        eyebrow: z.string(),
        title: z.string(),
        lead: z.string(),
        items: z
          .array(
            z.object({
              title: z.string(),
              text: z.string(),
              details: z.array(z.string()).min(1),
            }),
          )
          .min(1),
      })
      .optional(),
    scale: z
      .object({
        eyebrow: z.string(),
        title: z.string(),
        items: z.array(z.object({ value: z.string(), label: z.string() })).min(1),
      })
      .optional(),
    results: z
      .object({
        eyebrow: z.string(),
        title: z.string(),
        lead: z.string().optional(),
        items: z
          .array(
            z.object({
              label: z.string().optional(),
              title: z.string(),
              text: z.string(),
              evidence: evidenceSchema,
            }),
          )
          .min(1),
      })
      .optional(),
    gallery: z
      .object({
        eyebrow: z.string(),
        title: z.string(),
        lead: z.string().optional(),
        images: z.array(imageSchema.extend({ caption: z.string() })).min(1),
      })
      .optional(),
    technicalDetails: z
      .object({
        eyebrow: z.string(),
        title: z.string(),
        lead: z.string().optional(),
        summaryLabel: z.string(),
        items: z.array(z.string()).min(1),
        relatedCompetence: z
          .array(z.object({ label: z.string(), title: z.string(), href: z.string() }))
          .min(1)
          .optional(),
      })
      .optional(),
    relevance: z
      .object({
        eyebrow: z.string(),
        title: z.string(),
        lead: z.string().optional(),
        items: z.array(z.string()).min(1),
      })
      .optional(),
    relatedReferences: z
      .object({
        eyebrow: z.string(),
        title: z.string(),
        items: z
          .array(
            z.object({
              href: z.string(),
              title: z.string(),
              text: z.string(),
              image: imageSchema,
            }),
          )
          .min(1),
      })
      .optional(),
    cta: ctaSchema.optional(),
  }),
});

export const collections = { references };
