import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TopNav from '../components/dashboard/TopNav';
import Sidebar from '../components/dashboard/Sidebar';

const DashboardLayout = ({ children, isDark, toggleTheme, noPadding = false, isTempChat, toggleTempChat, headerTitle, triggerOpenSidebar }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (triggerOpenSidebar) {
      setSidebarOpen(true);
    }
  }, [triggerOpenSidebar]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black/95 text-slate-900 dark:text-slate-100 flex transition-colors duration-300 relative z-10 overflow-hidden">
      {/* Background gradients if needed */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-light/5 dark:bg-primary-dark/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-light/5 dark:bg-secondary-dark/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      {/* Sidebar Navigation */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen relative z-10 transition-all duration-300 w-full">
        <TopNav isDark={isDark} toggleTheme={toggleTheme} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} isTempChat={isTempChat} toggleTempChat={toggleTempChat} headerTitle={headerTitle} />

        <main className={`flex-1 ${noPadding ? 'overflow-hidden flex flex-col' : 'p-4 md:p-8 overflow-y-auto overflow-x-hidden'}`}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`${noPadding ? 'w-full h-full flex flex-col relative' : 'max-w-7xl mx-auto'}`}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Overlay Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
