import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickStats = ({ isDark }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/chat')}
      className="glass-card p-6 cursor-pointer group relative overflow-hidden border border-blue-200/50 dark:border-blue-500/20 hover:border-blue-400/70 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />

      <div className="relative z-10 flex flex-col gap-5">
        {/* Icon + label */}
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img 
              src={isDark ? "/assets/images/darkmode.png" : "/assets/images/lightmode.png"} 
              alt="Tutor Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
            <span className="material-icons-round text-blue-500 text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">arrow_outward</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
            Chat dengan Tutor AI
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
            Tanya apa saja — ADAPTIV siap membantu anda belajar kapan saja.
          </p>
        </div>

        {/* CTA pill */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-bold w-fit shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 group-hover:bg-blue-600 transition-all duration-200">
          <span className="material-icons-round text-base">chat</span>
          Mulai Sesi Belajar
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
