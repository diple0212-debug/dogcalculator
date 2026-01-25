
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import AgeCalculator from './pages/AgeCalculator.tsx';
import ObesityCalculator from './pages/ObesityCalculator.tsx';
import FoodCalculator from './pages/FoodCalculator.tsx';
import HealthAdvisor from './pages/HealthAdvisor.tsx';
import About from './pages/About.tsx';
import Terms from './pages/Terms.tsx';
import Privacy from './pages/Privacy.tsx';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AgeCalculator />} />
          <Route path="/obesity" element={<ObesityCalculator />} />
          <Route path="/food" element={<FoodCalculator />} />
          <Route path="/health-advisor" element={<HealthAdvisor />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
