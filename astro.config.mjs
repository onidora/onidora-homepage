import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  devToolbar: { enabled: false },
  site: process.env.SITE_URL,
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'always',
});
