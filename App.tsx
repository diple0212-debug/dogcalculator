
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import AgeCalculator from './pages/AgeCalculator.tsx';
import ObesityCalculator from './pages/ObesityCalculator.tsx';
import FoodCalculator from './pages/FoodCalculator.tsx';
import HealthAdvisor from './pages/HealthAdvisor.tsx';
import About from './pages/About.tsx';
import Terms from './pages/Terms.tsx';
import Privacy from './pages/Privacy.tsx';

// 현재 환경의 경로를 파악하여 basename 설정 (Vercel 미리보기 및 서브디렉토리 대응)
const getBasename = () => {
  const path = window.location.pathname;
  // 파일명(index.html 등)으로 끝나는 경우 제외하고 경로만 추출
  if (path.endsWith('.html')) {
    return path.split('/').slice(0, -1).join('/');
  }
  return path === '/' ? '' : path;
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AgeCalculator />} />
          <Route path="/obesity" element={<ObesityCalculator />} />
          <Route path="/food" element={<FoodCalculator />} />
          <Route path="/health-advisor" element={<HealthAdvisor />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          
          {/* 404 에러 방지 및 유연한 라우팅을 위해 모든 알 수 없는 경로는 홈으로 */}
          <Route path="*" element={<AgeCalculator />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
