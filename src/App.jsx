import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import Leaderboard from './pages/Leaderboard';
import Chat from './pages/Chat';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('edumentor-theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('edumentor-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('edumentor-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Landing isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/documents" element={<Documents isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/leaderboard" element={<Leaderboard isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/chat" element={<Chat isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/pricing" element={<PricingPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/features" element={<FeaturesPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/how-it-works" element={<HowItWorksPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/testimonials" element={<TestimonialsPage isDark={isDark} toggleTheme={toggleTheme} />} />
      </Routes>
    </div>
  );
}

export default App;
