import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNested from 'postcss-nested';
import createSvgSpritePlugin from 'vite-plugin-svg-spriter'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSvgSpritePlugin({ svgFolder: path.resolve(__dirname, 'src', 'assets', 'icons') }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssNested
      ],
    },
  },
  resolve: {
    alias: {
      '@routes': path.resolve(__dirname, 'src', 'routes'),
      '@entities': path.resolve(__dirname, 'src', 'entities'),
      '@features': path.resolve(__dirname, 'src', 'features'),
      '@shared': path.resolve(__dirname, 'src', 'shared'),
      '@widgets': path.resolve(__dirname, 'src', 'widgets'),
      '@store': path.resolve(__dirname, 'src', 'app', 'store'),
      '@types': path.resolve(__dirname, 'src', 'shared', 'types'),
      '@assets': path.resolve(__dirname, 'src', "assets"),
      '@public': path.resolve(__dirname, 'public'),
    },
  },
})
