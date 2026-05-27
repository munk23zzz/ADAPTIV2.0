import React, { useState } from 'react';

const TopNav = ({ isDark, toggleTheme, toggleSidebar, isTempChat, toggleTempChat }) => {

  return (
    <header className="h-20 flex items-center justify-between px-4 md:px-8 border-b border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="w-10 h-10 flex items-center justify-center text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:text-primary-light dark:hover:text-primary-dark rounded-xl transition-all shadow-sm border border-slate-200/50 dark:border-white/5 hover:scale-105"
        >
          <span className="material-icons-round text-lg">menu</span>
        </button>
        
        {/* Page Title or Breadcrumb could go here */}
        <h1 className="text-xl font-bold text-slate-900 dark:text-white hidden sm:block">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        
        {/* Temporary Chat Button - Only show if toggle function is provided */}
        {toggleTempChat && (
          <button 
            onClick={toggleTempChat}
            className={`p-2 rounded-xl transition-colors flex items-center justify-center ${isTempChat ? 'text-amber-500 bg-amber-50 dark:bg-amber-500/10' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10'}`}
            title={isTempChat ? "Temporary Chat Aktif" : "Aktifkan Temporary Chat"}
          >
            <span className="material-icons-round">{isTempChat ? 'chat_bubble_outline' : 'chat'}</span>
          </button>
        )}

        <button 
          onClick={toggleTheme}
          className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          title="Ganti Tema"
        >
          <span className="material-icons-round">{isDark ? 'light_mode' : 'dark_mode'}</span>
        </button>
      </div>
    </header>
  );
};

export default TopNav;
