import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNested from 'postcss-nested';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssNested
      ],
    },
  },
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@entities': path.resolve(__dirname, 'src', 'entities'),
      '@features': path.resolve(__dirname, 'src', 'features'),
      '@shared': path.resolve(__dirname, 'src', 'shared'),
      '@widgets': path.resolve(__dirname, 'src', 'widgets'),
      '@store': path.resolve(__dirname, 'src', 'app', 'store'),
      '@types': path.resolve(__dirname, 'src', 'shared', 'types'),
      '@public': path.resolve(__dirname, 'public'),
    },
  },
})
