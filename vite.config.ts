import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Use root path for username.github.io repository
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
