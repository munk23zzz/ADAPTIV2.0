import React from 'react';

const StreakCard = () => {
  return (
    <div className="glass-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
          Runtutan
        </h3>
        <p className="text-xs text-slate-500 mt-1">Belajar 10 menit setiap hari untuk menjaga runtutan</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Circle Progress */}
        <div className="relative w-32 h-32 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            <circle cx="50" cy="50" r="45" fill="none" className="stroke-slate-100 dark:stroke-white/5" strokeWidth="8" />
            <circle 
              cx="50" cy="50" r="45" fill="none" 
              className="stroke-rose-500" 
              strokeWidth="8" 
              strokeDasharray="283" 
              strokeDashoffset="60" 
              strokeLinecap="round" 
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl mb-[-4px]">🔥</div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white leading-none">40</div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Hari</div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-4 w-full md:w-auto">
          <div className="flex-1 md:w-24 bg-slate-50 dark:bg-black/30 p-4 rounded-2xl border border-slate-200 dark:border-white/5 text-center">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">7</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Minggu Ini</div>
          </div>
          <div className="flex-1 md:w-24 bg-slate-50 dark:bg-black/30 p-4 rounded-2xl border border-slate-200 dark:border-white/5 text-center">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">40</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Terbaik</div>
          </div>
        </div>
      </div>
      
      {/* Days grid */}
      <div className="mt-8 flex justify-between gap-1 overflow-x-auto pb-2 no-scrollbar">
        {['S', 'S', 'R', 'K', 'J', 'S', 'M'].map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-2 min-w-[32px]">
            <div className="text-xs font-semibold text-slate-400">{day}</div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              i < 5 ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30' : 'bg-slate-100 dark:bg-white/5 text-slate-300 dark:text-slate-600'
            }`}>
              {i < 5 ? '✓' : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreakCard;
