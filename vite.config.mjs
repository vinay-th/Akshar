import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: ['@tldraw/tldraw'],
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
