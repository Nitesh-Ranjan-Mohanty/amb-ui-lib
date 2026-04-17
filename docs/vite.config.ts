import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname),
  plugins: [react()],
  resolve: {
    alias: {
      '@amb-ui': path.resolve(__dirname, '../src')
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  server: {
    port: 4173
  }
});
