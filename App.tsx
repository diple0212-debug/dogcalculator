
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import AgeCalculator from './pages/AgeCalculator.tsx';
import ObesityCalculator from './pages/ObesityCalculator.tsx';
import FoodCalculator from './pages/FoodCalculator.tsx';
import AnxietyTest from './pages/AnxietyTest.tsx';
import DogMBTI from './pages/DogMBTI.tsx';
import FAQ from './pages/FAQ.tsx';
import About from './pages/About.tsx';
import Terms from './pages/Terms.tsx';
import Privacy from './pages/Privacy.tsx';
import HealthAdvisor from './pages/HealthAdvisor.tsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/age" element={<AgeCalculator />} />
          <Route path="/obesity" element={<ObesityCalculator />} />
          <Route path="/food" element={<FoodCalculator />} />
          <Route path="/anxiety-test" element={<AnxietyTest />} />
          <Route path="/dog-mbti" element={<DogMBTI />} />
          <Route path="/health-advisor" element={<HealthAdvisor />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
