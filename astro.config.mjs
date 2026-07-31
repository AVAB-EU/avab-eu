// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://test2.avab.eu',
  redirects: {
    '/miljo/sporthall': '/miljo/sporthall-arena',
  },
  build: {
    format: 'directory',
  },
});
