import React from 'react';

const SubjectProgress = () => {
  const subjects = [
    { name: 'Scientific Computing', icon: '🔢', pct: 72, color: 'bg-indigo-500' },
    { name: 'Creativity & Innovation', icon: '💡', pct: 35, color: 'bg-amber-500' },
    { name: 'Algoritma & Pemrograman', icon: '💻', pct: 89, color: 'bg-lime-500' },
  ];

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Progres Mata Pelajaran</h3>
      <div className="space-y-6">
        {subjects.map((sub, idx) => (
          <div key={idx} className="flex gap-4 items-center group">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
              {sub.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-end mb-2">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{sub.name}</span>
                <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{sub.pct}%</span>
              </div>
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full ${sub.color} rounded-full`} style={{ width: `${sub.pct}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectProgress;
