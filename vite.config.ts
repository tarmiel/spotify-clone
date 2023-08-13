import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr({ exportAsDefault: true }),
    react(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  css: {
    modules: {
      generateScopedName: '[local]_[hash:base64:3]',
    },
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
    __PROJECT__: JSON.stringify('frontend'),
  },
});
