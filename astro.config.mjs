import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [mdx(), react(), icon()],
  site: 'https://MiraiTee.github.io',
  base: '/ARCH2---VET-G6-S05-/',
});
