import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, setIsOpen]);

  const navItems = [
    { name: 'Beranda', path: '/dashboard', icon: 'dashboard' },
    { name: 'Dokumen Saya', path: '/documents', icon: 'folder' },
    { name: 'Papan Peringkat', path: '/leaderboard', icon: 'emoji_events' },
    { name: 'Tutor AI', path: '/chat', icon: 'chat' },
  ];

  return (
    <aside className={`fixed top-0 left-0 h-full w-[260px] bg-white/90 dark:bg-[#0a0a0f]/90 backdrop-blur-2xl border-r border-slate-200 dark:border-white/10 z-40 transform transition-transform duration-300 ease-out shadow-2xl lg:shadow-none flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

      <div className="h-[72px] shrink-0 flex items-center px-5 border-b border-slate-200/50 dark:border-white/5">
        <Link to="/dashboard" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="relative w-8 h-8 overflow-hidden rounded-lg shadow-sm">
            <img src="/assets/icons/darkIcon.png" alt="ADAPTIV" className="absolute inset-0 w-full h-full object-cover dark:opacity-100 opacity-0 transition-opacity" />
            <img src="/assets/icons/lightIcon.png" alt="ADAPTIV" className="absolute inset-0 w-full h-full object-cover dark:opacity-0 opacity-100 transition-opacity" />
          </div>
          <span className="font-orbitron font-bold text-lg tracking-widest text-slate-900 dark:text-white group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
            ADAPTIV
          </span>
        </Link>
        <button
          className="lg:hidden ml-auto w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-white/5 hover:bg-rose-100 dark:hover:bg-rose-500/20 text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-500 rounded-full transition-all hover:rotate-90 hover:scale-110"
          onClick={() => setIsOpen(false)}
          title="Tutup Menu"
        >
          <span className="material-icons-round text-[18px]">close</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
        <nav className="space-y-1.5 mb-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all font-medium group relative overflow-hidden ${isActive ? 'bg-primary-light dark:bg-primary-dark text-white font-bold shadow-md shadow-primary-light/20 dark:shadow-primary-dark/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'}`}
              >
                {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-white/40 dark:bg-white/60 rounded-r-full" />}
                <span className={`material-icons-round text-[20px] transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110 group-hover:text-primary-light dark:group-hover:text-primary-dark'}`}>
                  {item.icon}
                </span>
                <span className="tracking-wide text-sm">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="mb-4">
          <div className="flex items-center gap-2.5 px-3 py-2 mb-2 bg-slate-100/80 dark:bg-black/30 rounded-full border border-slate-200/50 dark:border-white/5 focus-within:border-primary-light dark:focus-within:border-primary-dark focus-within:ring-2 focus-within:ring-primary-light/20 focus-within:bg-white dark:focus-within:bg-[#121620] transition-all shadow-inner">
            <span className="material-icons-round text-slate-400 text-[18px]">search</span>
            <input type="text" placeholder="Pencarian cepat..." className="bg-transparent border-none outline-none text-xs text-slate-700 dark:text-slate-300 w-full placeholder:text-slate-400" />
          </div>

          <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2 mt-6 mb-2">Terkini</div>
          <div className="space-y-1">
            {['Kalkulus', 'PPKn', 'Algoritma & Pemrograman'].map((subject, idx) => (
              <a href="#" key={idx} className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white rounded-xl transition-colors group">
                <div className="w-7 h-7 rounded-lg bg-orange-50 dark:bg-orange-500/10 text-orange-500 dark:text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                  <span className="material-icons-round text-[14px]">folder</span>
                </div>
                <span className="truncate group-hover:font-semibold transition-all text-[13px]">{subject}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="shrink-0 p-4 border-t border-slate-200/50 dark:border-white/5 bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-xl">
        <button className="flex items-center gap-3 w-full p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-left group border border-transparent hover:border-slate-200 dark:hover:border-white/10 hover:shadow-md">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary-light to-secondary-light flex items-center justify-center text-white font-extrabold shrink-0 shadow-md group-hover:scale-105 transition-transform text-sm">
              L
            </div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-[#0a0a0f] rounded-full"></div>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-[13px] font-bold text-slate-900 dark:text-white truncate group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">Lloyd</div>
            <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Pro Plan</div>
          </div>
          <span className="material-icons-round text-slate-400 group-hover:text-slate-700 dark:group-hover:text-white transition-colors text-[18px]">unfold_more</span>
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;
