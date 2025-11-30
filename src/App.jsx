import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CustomBottlesPage from '@/pages/CustomBottlesPage';
import { Toaster } from '@/components/ui/toaster';

// Wrapper component to handle AnimatePresence based on location
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/custom-bottles" element={<CustomBottlesPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F3E8FF] flex flex-col relative overflow-x-hidden">
        {/* Updated noise overlay to be softer */}
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0 mix-blend-soft-light"></div>
        <Header />
        <div className="flex-grow relative z-10">
          <AnimatedRoutes />
        </div>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;