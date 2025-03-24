import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@data': path.resolve(__dirname, 'src/data')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/colors.scss" as *;
        @use "@/styles/work.scss" as *;  `
      }
    }
  }
})
