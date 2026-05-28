import React from 'react';
import { Link } from 'react-router-dom';

const ResumeCard = () => {
  return (
    <div className="glass-card p-6 border-l-4 border-l-primary-light dark:border-l-primary-dark">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark flex items-center justify-center shrink-0">
          <span className="material-icons-round text-2xl">play_arrow</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Lanjutkan Sesi</div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white truncate">Kartu Belajar — Scientific Computing</h4>
        </div>
        <Link to="/chat?session=scientific_computing" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-colors flex items-center justify-center shrink-0">
          <span className="material-icons-round">arrow_forward</span>
        </Link>
      </div>
      
      <div className="mt-5 pt-5 border-t border-slate-200 dark:border-white/5">
        <div className="flex justify-between items-end mb-2 text-sm font-medium">
          <span className="text-slate-600 dark:text-slate-400">Kartu 23 dari 47</span>
          <span className="text-primary-light dark:text-primary-dark font-bold">48%</span>
        </div>
        <div className="h-2 w-full bg-slate-100 dark:bg-black/50 rounded-full overflow-hidden">
          <div className="h-full bg-primary-light dark:bg-primary-dark rounded-full" style={{ width: '48%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
