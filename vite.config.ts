
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // BrowserRouter 환경에서는 절대 경로 설정이 필수입니다.
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          genai: ['@google/genai'],
        },
      },
    },
  },
  define: {
    // Vercel/환경 변수에서 제공하는 API_KEY를 브라우저 환경에 안전하게 주입
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
  },
});
