import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Amy-Trading-Quest/',
  server: {
    port: 3000,
  },
});
