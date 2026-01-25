
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  define: {
    // Vercel에서 제공하는 process.env.API_KEY를 브라우저 환경에 주입
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
});
