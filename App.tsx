
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AgeCalculator from './pages/AgeCalculator';
import ObesityCalculator from './pages/ObesityCalculator';
import FoodCalculator from './pages/FoodCalculator';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AgeCalculator />} />
          <Route path="/obesity" element={<ObesityCalculator />} />
          <Route path="/food" element={<FoodCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
