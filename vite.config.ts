import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Ensure proper JSX transformation
      jsxRuntime: 'automatic',
    }),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Ensure proper chunking
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Ensure proper module resolution
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
