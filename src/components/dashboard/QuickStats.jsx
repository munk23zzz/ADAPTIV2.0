import React from 'react';

const QuickStats = () => {
  const stats = [
    { icon: 'description', val: '12', label: 'Dokumen', trend: '+3 minggu ini', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { icon: 'style', val: '248', label: 'Kartu Belajar', trend: '+47 minggu ini', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { icon: 'quiz', val: '78%', label: 'Rata-rata Kuis', trend: '+5% minggu ini', color: 'text-lime-500', bg: 'bg-lime-500/10' },
    { icon: 'schedule', val: '14j', label: 'Jam Belajar', trend: '+2j minggu ini', color: 'text-amber-500', bg: 'bg-amber-500/10' },
  ];

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Statistik Kamu</h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col gap-3 p-4 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <span className="material-icons-round text-xl">{stat.icon}</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white leading-none">{stat.val}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium mt-1">{stat.label}</div>
              <div className="text-xs text-emerald-500 font-semibold mt-2">{stat.trend}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;
