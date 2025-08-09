import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
     vite: {
    server: {
      host: true, // allow external connections
      allowedHosts: ['devserver-preview--captainsadistic.netlify.app']
    },
    preview: {
      host: true,
      allowedHosts: ['devserver-preview--captainsadistic.netlify.app']
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    adapter: netlify()
});
