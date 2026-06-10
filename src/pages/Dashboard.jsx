import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import QuickStats from '../components/dashboard/QuickStats';
import SubjectProgress from '../components/dashboard/SubjectProgress';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import BadgesCard from '../components/dashboard/BadgesCard';

const Dashboard = ({ isDark, toggleTheme }) => {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(location.state?.showWelcome || false);
  const [triggerSidebar, setTriggerSidebar] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return { text: 'Selamat Pagi', emoji: '☀️' };
    if (hour >= 12 && hour < 15) return { text: 'Selamat Siang', emoji: '🌤️' };
    if (hour >= 15 && hour < 19) return { text: 'Selamat Sore', emoji: '🌅' };
    return { text: 'Selamat Malam', emoji: '🌙' };
  };
  const greeting = getGreeting();

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setTriggerSidebar(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <motion.div 
              initial={{ y: 20, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-center px-4 max-w-2xl"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans'] font-black text-slate-900 dark:text-white mb-4 flex justify-center items-center gap-2 sm:gap-3 whitespace-nowrap tracking-tight">
                Selamat datang, Lloyd <span className="inline-block origin-bottom-right animate-wave text-3xl sm:text-4xl lg:text-5xl" style={{ WebkitTextFillColor: 'initial' }}>👋</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-xl mx-auto">
                AI telah menyesuaikan profil belajarmu. Mari jelajahi pengalaman belajar baru di ADAPTIV.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <DashboardLayout isDark={isDark} toggleTheme={toggleTheme} triggerOpenSidebar={triggerSidebar}>
        {/* Greeting Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            {greeting.text}, Lloyd <span className="text-2xl">{greeting.emoji}</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Yuk lanjutkan sesi belajarmu hari ini!</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 pb-12"
        >
          {/* Left Column: Stats */}
          <motion.div variants={item} className="xl:col-span-4 space-y-6">
            <SubjectProgress />
            <QuickStats isDark={isDark} />
          </motion.div>

          {/* Right Column: Performance & Actions */}
          <motion.div variants={item} className="xl:col-span-8 space-y-6">
            <PerformanceChart />
            <BadgesCard />
          </motion.div>
          
        </motion.div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
