import React, { useState, useEffect, useRef } from 'react';
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
  const reversedBadges = [...unlockedBadges].reverse();

  const unlockedLevels = gems.slice(0, currentLevel + 1).reverse();

  // Resize measurement for dynamic fitting
  const levelRef = useRef(null);
  const badgeRef = useRef(null);
  const [levelLimit, setLevelLimit] = useState(unlockedLevels.length);
  const [badgeLimit, setBadgeLimit] = useState(reversedBadges.length);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        if (entry.target === levelRef.current) {
          const count = unlockedLevels.length;
          // Each item is w-8 (32px) + gap-2 (8px) = 40px. Last one has no gap but let's be conservative.
          if (count * 40 - 8 <= width) {
            setLevelLimit(count);
          } else {
            const calculatedLimit = Math.floor((width - 32) / 40);
            setLevelLimit(Math.max(1, calculatedLimit));
          }
        } else if (entry.target === badgeRef.current) {
          const count = reversedBadges.length;
          // Each item is w-9 (36px) + gap-2 (8px) = 44px.
          if (count * 44 - 8 <= width) {
            setBadgeLimit(count);
          } else {
            const calculatedLimit = Math.floor((width - 36) / 44);
            setBadgeLimit(Math.max(1, calculatedLimit));
          }
        }
      }
    });

    if (levelRef.current) observer.observe(levelRef.current);
    if (badgeRef.current) observer.observe(badgeRef.current);

    return () => observer.disconnect();
  }, [unlockedLevels.length, reversedBadges.length]);

  const previewLevels = unlockedLevels.slice(0, levelLimit);
  const remainingLevels = unlockedLevels.length - previewLevels.length;

  const previewBadges = reversedBadges.slice(0, badgeLimit);
  const remainingBadges = reversedBadges.length - previewBadges.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
      {/* Level Bulanan */}
      <div 
        onClick={() => setIsLevelModalOpen(true)}
        className="glass-card p-4 cursor-pointer hover:-translate-y-1 transition-transform duration-300"
      >
        <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-3 flex items-center justify-between">
          Level Bulanan
          <span className="material-icons-round text-slate-400 text-sm">info</span>
        </h3>
        <div ref={levelRef} className="flex items-center gap-2 mt-1 flex-nowrap overflow-hidden">
          {previewLevels.map((gem) => {
            const originalIndex = gems.indexOf(gem);
            const isCurrent = originalIndex === currentLevel;

            return (
              <div 
                key={originalIndex} 
                title={gem.name}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${
                  isCurrent 
                    ? 'bg-white dark:bg-[#1a1f2e] ring-2 ring-primary-light/50 ring-offset-1 ring-offset-slate-50 dark:ring-offset-slate-900 shadow-md shadow-primary-light/30 scale-110' 
                    : 'bg-white dark:bg-white/5 opacity-80'
                }`}
              >
                <span className={`material-icons-round text-[16px] ${gem.color}`}>
                  {gem.icon}
                </span>
              </div>
            );
          })}
          {remainingLevels > 0 && (
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 flex items-center justify-center text-xs font-bold border border-slate-200 dark:border-white/10 flex-shrink-0">
              +{remainingLevels}
            </div>
          )}
        </div>
        <div className="mt-4 text-[10px] font-medium text-slate-500 text-center">
          {remainingText}
        </div>
      </div>

      {/* Lencana */}
      <div 
        onClick={() => setIsBadgeModalOpen(true)}
        className="glass-card p-4 cursor-pointer hover:-translate-y-1 transition-transform duration-300"
      >
        <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-3 flex items-center justify-between">
          Lencana
          <span className="material-icons-round text-slate-400 text-sm">info</span>
        </h3>
        <div ref={badgeRef} className="flex items-center gap-2 mt-1 flex-nowrap overflow-hidden">
          {previewBadges.map((badge) => (
            <div 
              key={badge.id}
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${badge.bg} shadow-sm flex-shrink-0`}
            >
              <span className={`material-icons-round text-lg ${badge.color}`}>
                alarm_on
              </span>
            </div>
          ))}
          {remainingBadges > 0 && (
            <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 flex items-center justify-center text-xs font-bold border border-slate-200 dark:border-white/10 flex-shrink-0">
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
