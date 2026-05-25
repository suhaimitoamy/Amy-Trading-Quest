import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Useful for GitHub Pages
  server: {
    port: 3000,
  },
});
