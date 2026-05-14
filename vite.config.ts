import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',

  root: 'client',

  plugins: [react(), tailwindcss()],

  publicDir: 'public',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },

  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});