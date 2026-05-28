import React from 'react';
import { datasets } from '../../pages/Leaderboard';
import { gems, calculateLevelIndex } from './LevelModal';

const ProfileCard = () => {
  // Get all-time learning stats for current user
  const currentUser = datasets.all.find(u => u.isCurrentUser);
  const totalMinutes = currentUser ? currentUser.timeInMinutes : 9240;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  
  // Get current monthly level badge dynamically
  const currentMonthlyUser = datasets.monthly.find(u => u.isCurrentUser);
  const currentLevelIndex = calculateLevelIndex(currentMonthlyUser ? currentMonthlyUser.timeInMinutes : 0); 
  const currentGem = gems[currentLevelIndex];

  return (
    <div className="glass-card p-6 flex flex-col items-center text-center relative overflow-hidden group">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/10 dark:bg-primary-dark/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative mb-4 group-hover:scale-105 transition-transform duration-300">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark p-1">
          <div className="w-full h-full rounded-full bg-white dark:bg-[#0a0a0f] flex items-center justify-center text-2xl font-bold text-slate-800 dark:text-white">
            L
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-white dark:border-[#0a0a0f] flex items-center justify-center shadow-md">
          <span className={`material-icons-round text-[18px] ${currentGem.color}`}>
            {currentGem.icon}
          </span>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Lloyd</h2>
      <div className="text-4xl font-extrabold text-primary-light dark:text-primary-dark mt-2 tracking-tight font-orbitron flex items-baseline justify-center gap-1">
        {hours}<span className="text-lg font-sans text-slate-500 font-bold">j</span>
        <span className="ml-1">{minutes}</span><span className="text-lg font-sans text-slate-500 font-bold">m</span>
      </div>
      
      <div className="mt-3 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-semibold flex items-center gap-2">
        <span>💎</span> Liga Obsidian
      </div>
      
      <div className="w-full flex justify-around mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold text-slate-800 dark:text-white">24</div>
          <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider mt-1">Kudos</div>
        </div>
        <div className="w-px bg-slate-200 dark:bg-white/10"></div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold text-rose-500">40🔥</div>
          <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider mt-1">Runtutan</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
