// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://adnan070.me',
  // Accept /ru and /ru/ (and the same for nested routes). Links omit the slash.
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
