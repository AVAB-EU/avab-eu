// @ts-check
import { defineConfig } from 'astro/config';
import { reviewEnvironmentNoindex } from './scripts/review-environment-noindex.mjs';

const deploymentUrl = process.env.DEPLOYMENT_URL ?? 'https://test2.avab.eu';

// https://astro.build/config
export default defineConfig({
  site: deploymentUrl,
  integrations: [reviewEnvironmentNoindex({ deploymentUrl })],
  redirects: {
    '/miljo/sporthall': '/miljo/sporthall-arena',
  },
  build: {
    format: 'directory',
  },
});
