import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#0c0c1e',
        theme_color: '#00a8cc',
        icons: [
          {
            src: '/favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,avif}']
      }
    })
  ],
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 800,
  }
});
