import React, { useState } from 'react';
import { datasets } from '../../pages/Leaderboard';
import LevelModal, { gems, calculateLevelIndex } from './LevelModal';
import BadgeModal, { badgesList } from './BadgeModal';

const BadgesCard = () => {
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false);
  
  // Dynamic Level Calculation
  const currentUser = datasets.monthly.find(u => u.isCurrentUser);
  const currentMinutes = currentUser ? currentUser.timeInMinutes : 0;
  const currentLevel = calculateLevelIndex(currentMinutes);

  const nextLevelGem = gems[currentLevel + 1];
  let remainingText = "Level Maksimal!";
  if (nextLevelGem) {
    const minutesLeft = nextLevelGem.minMinutes - currentMinutes;
    const hoursLeft = Math.floor(minutesLeft / 60);
    const minsLeft = minutesLeft % 60;
    if (hoursLeft > 0) {
      remainingText = `${hoursLeft}j ${minsLeft}m belajar lagi menuju Level ${nextLevelGem.name.split(' ')[0]}`;
    } else {
      remainingText = `${minsLeft}m belajar lagi menuju Level ${nextLevelGem.name.split(' ')[0]}`;
    }
  }

  const unlockedBadges = badgesList.filter(b => b.unlocked);
  const previewBadges = unlockedBadges.slice(0, 5);
  const remainingBadges = unlockedBadges.length - previewBadges.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      {/* Level Bulanan */}
      <div 
        onClick={() => setIsLevelModalOpen(true)}
        className="glass-card p-6 cursor-pointer hover:-translate-y-1 transition-transform duration-300"
      >
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-between">
          Level Bulanan
          <span className="material-icons-round text-slate-400 text-sm">info</span>
        </h3>
        <div className="flex flex-wrap gap-3 mt-2">
          {gems.map((gem, i) => {
            const isCompleted = i < currentLevel;
            const isCurrent = i === currentLevel;
            const isLocked = i > currentLevel;

            return (
              <div 
                key={i} 
                title={gem.name}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isCurrent 
                    ? 'bg-white dark:bg-[#1a1f2e] ring-2 ring-primary-light/50 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 shadow-lg shadow-primary-light/30 scale-110' 
                    : isCompleted
                    ? 'bg-white dark:bg-white/5 opacity-80'
                    : 'bg-slate-100 dark:bg-white/5 opacity-30 grayscale'
                }`}
              >
                <span className={`material-icons-round text-[22px] ${!isLocked ? gem.color : 'text-slate-400'}`}>
                  {gem.icon}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-xs font-medium text-slate-500 text-center">
          {remainingText}
        </div>
      </div>

      {/* Lencana */}
      <div 
        onClick={() => setIsBadgeModalOpen(true)}
        className="glass-card p-6 cursor-pointer hover:-translate-y-1 transition-transform duration-300"
      >
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-between">
          Lencana
          <span className="material-icons-round text-slate-400 text-sm">info</span>
        </h3>
        <div className="flex flex-wrap gap-3 mt-2">
          {previewBadges.map((badge) => (
            <div 
              key={badge.id}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center ${badge.bg} shadow-sm`}
            >
              <span className={`material-icons-round text-2xl ${badge.color}`}>
                alarm_on
              </span>
            </div>
          ))}
          {remainingBadges > 0 && (
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-200 dark:border-white/10">
              +{remainingBadges}
            </div>
          )}
        </div>
      </div>

      <LevelModal isOpen={isLevelModalOpen} onClose={() => setIsLevelModalOpen(false)} />
      <BadgeModal isOpen={isBadgeModalOpen} onClose={() => setIsBadgeModalOpen(false)} />
    </div>
  );
};

export default BadgesCard;
