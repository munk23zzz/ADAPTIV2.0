import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '../layouts/DashboardLayout';

export const datasets = {
  weekly: [
    { rank: 1, name: "Sarah", timeInMinutes: 785 },
    { rank: 2, name: "Budi", timeInMinutes: 742 },
    { rank: 3, name: "Reza", timeInMinutes: 695 },
    { rank: 4, name: "Lloyd", timeInMinutes: 630, isCurrentUser: true },
    { rank: 5, name: "Alex", timeInMinutes: 580 },
    { rank: 6, name: "Dina", timeInMinutes: 540 },
    { rank: 7, name: "Ahmad", timeInMinutes: 510 },
    { rank: 8, name: "Rina", timeInMinutes: 480 },
    { rank: 9, name: "Jessica", timeInMinutes: 420 },
    { rank: 10, name: "Kevin", timeInMinutes: 380 },
    { rank: 11, name: "Putri", timeInMinutes: 350 },
    { rank: 12, name: "Doni", timeInMinutes: 320 },
    { rank: 13, name: "Siska", timeInMinutes: 300 },
    { rank: 14, name: "Galih", timeInMinutes: 280 },
    { rank: 15, name: "Toni", timeInMinutes: 250 },
    { rank: 16, name: "Bruce", timeInMinutes: 220 },
    { rank: 17, name: "Clark", timeInMinutes: 200 },
    { rank: 18, name: "Diana", timeInMinutes: 180 },
    { rank: 19, name: "Peter", timeInMinutes: 150 },
    { rank: 20, name: "Barry", timeInMinutes: 120 }
  ],
  monthly: [
    { rank: 1, name: "Alex", timeInMinutes: 2850 },
    { rank: 2, name: "Sarah", timeInMinutes: 2740 },
    { rank: 3, name: "Budi", timeInMinutes: 2610 },
    { rank: 4, name: "Jessica", timeInMinutes: 2450 },
    { rank: 5, name: "Lloyd", timeInMinutes: 2310, isCurrentUser: true },
    { rank: 6, name: "Kevin", timeInMinutes: 2180 },
    { rank: 7, name: "Dina", timeInMinutes: 2050 },
    { rank: 8, name: "Rina", timeInMinutes: 1920 },
    { rank: 9, name: "Ahmad", timeInMinutes: 1840 },
    { rank: 10, name: "Reza", timeInMinutes: 1760 },
    { rank: 11, name: "Putri", timeInMinutes: 1650 },
    { rank: 12, name: "Doni", timeInMinutes: 1540 },
    { rank: 13, name: "Siska", timeInMinutes: 1430 },
    { rank: 14, name: "Galih", timeInMinutes: 1320 },
    { rank: 15, name: "Toni", timeInMinutes: 1210 },
    { rank: 16, name: "Bruce", timeInMinutes: 1100 },
    { rank: 17, name: "Clark", timeInMinutes: 980 },
    { rank: 18, name: "Diana", timeInMinutes: 850 },
    { rank: 19, name: "Peter", timeInMinutes: 700 },
    { rank: 20, name: "Barry", timeInMinutes: 550 }
  ],
  all: [
    { rank: 1, name: "Budi", timeInMinutes: 14200 },
    { rank: 2, name: "Sarah", timeInMinutes: 13800 },
    { rank: 3, name: "Alex", timeInMinutes: 12900 },
    { rank: 4, name: "Reza", timeInMinutes: 11500 },
    { rank: 5, name: "Jessica", timeInMinutes: 10800 },
    { rank: 6, name: "Dina", timeInMinutes: 9800 },
    { rank: 7, name: "Lloyd", timeInMinutes: 9240, isCurrentUser: true },
    { rank: 8, name: "Kevin", timeInMinutes: 8700 },
    { rank: 9, name: "Ahmad", timeInMinutes: 8100 },
    { rank: 10, name: "Rina", timeInMinutes: 7500 },
    { rank: 11, name: "Putri", timeInMinutes: 6900 },
    { rank: 12, name: "Doni", timeInMinutes: 6300 },
    { rank: 13, name: "Siska", timeInMinutes: 5700 },
    { rank: 14, name: "Galih", timeInMinutes: 5100 },
    { rank: 15, name: "Toni", timeInMinutes: 4500 },
    { rank: 16, name: "Bruce", timeInMinutes: 4100 },
    { rank: 17, name: "Clark", timeInMinutes: 3800 },
    { rank: 18, name: "Diana", timeInMinutes: 3200 },
    { rank: 19, name: "Peter", timeInMinutes: 2800 },
    { rank: 20, name: "Barry", timeInMinutes: 2100 }
  ]
};

const formatTime = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return (
    <>
      {hours}j <span className="text-sm font-medium opacity-70">{minutes}m</span>
    </>
  );
};

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
};

export const PROMOTION_ZONE_LIMIT = 5;
export const DEMOTION_ZONE_START = 16;

const Leaderboard = ({ isDark, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState('weekly');
  const [countdown, setCountdown] = useState('');
  const [showStickyBar, setShowStickyBar] = useState(false);
  const userRowRef = useRef(null);
  
  const data = [...datasets[activeTab]].sort((a, b) => b.timeInMinutes - a.timeInMinutes);
  const top3 = data.slice(0, 3);
  const remaining = data.slice(3);
  const maxTime = data[0].timeInMinutes;
  const isWeekly = activeTab === 'weekly';

  // Timer logic
  useEffect(() => {
    const now = new Date();
    // Simulate end time 2 days + 14 hours + 30 mins from now
    const end = new Date(now.getTime() + (2 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000));
    
    const tick = () => {
      const diff = end - new Date();
      if (diff <= 0) {
        setCountdown("Liga Berakhir!");
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setCountdown(`${d}h ${h}j ${m}m ${s}d`);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for Sticky Bar
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShowStickyBar(false);
        } else {
          if (entry.boundingClientRect.top < 0 || entry.boundingClientRect.bottom > window.innerHeight) {
            setShowStickyBar(true);
          } else {
            setShowStickyBar(false);
          }
        }
      });
    }, { threshold: 0 });

    if (userRowRef.current) {
      observer.observe(userRowRef.current);
    }

    return () => observer.disconnect();
  }, [activeTab]);

  const currentUser = data.find(u => u.isCurrentUser);
  const currentUserRank = currentUser ? data.indexOf(currentUser) + 1 : 0;

  return (
    <DashboardLayout isDark={isDark} toggleTheme={toggleTheme}>
      <div className="max-w-6xl mx-auto pb-24 relative px-4 sm:px-6">
        
        {/* SPLIT LAYOUT CONTAINER */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-4">
          
          {/* KOLOM KIRI: Sticky Dashboard (Header, Tabs, Podium) */}
          <div className="w-full lg:w-[40%] xl:w-[45%] lg:sticky lg:top-8 flex flex-col gap-5">
            
            {/* Header / Nama Liga */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 rounded-full font-bold mb-2 border border-purple-200 dark:border-purple-500/20 shadow-sm text-sm">
                <span className="text-base leading-none">💎</span>
                Liga Obsidian
              </div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mb-1 tracking-tight">
                Papan Peringkat
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Berakhir dalam: <span className="text-blue-600 dark:text-blue-400 font-bold">{countdown}</span>
              </p>
            </div>
            
            {/* Jenis Leaderboard (Tabs) - Dikecilkan ukurannya */}
            <div className="flex justify-center lg:justify-start w-full">
              <div className="flex p-1 bg-slate-100 dark:bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-sm w-full sm:w-auto">
                {[
                  { id: 'weekly', label: 'Minggu Ini' },
                  { id: 'monthly', label: 'Bulan Ini' },
                  { id: 'all', label: 'Semua Waktu' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 rounded-lg font-bold text-xs transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200 dark:border-slate-700' 
                        : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Podium Top 3 */}
            <div className="flex items-end justify-center gap-2 sm:gap-4 lg:gap-2 mb-8 px-2">
          {/* Rank 2 */}
          {top3[1] && (
            <div className="flex flex-col items-center w-28 md:w-32 relative z-10 group">
              <div className="relative mb-3 group-hover:-translate-y-2 transition-transform duration-300 ease-out">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-slate-300 to-slate-100 dark:from-slate-600 dark:to-slate-400 p-1 shadow-lg shadow-slate-400/20 dark:shadow-white/5 border-4 border-white dark:border-slate-800">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-xl md:text-2xl font-bold text-white uppercase">
                    {getInitials(top3[1].name)}
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 bg-slate-300 dark:bg-slate-500 text-slate-800 dark:text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white dark:border-slate-800 shadow-sm">2</div>
              </div>
              <div className="font-bold text-slate-900 dark:text-slate-50 truncate w-full text-center group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">{top3[1].name}</div>
              <div className="text-xs font-semibold text-slate-500">{formatTime(top3[1].timeInMinutes)}</div>
              <div className="w-full h-32 md:h-40 bg-gradient-to-t from-slate-200 to-transparent dark:from-slate-700/50 dark:to-transparent rounded-t-3xl mt-4 flex justify-center backdrop-blur-md border-t-[6px] border-x border-slate-300 dark:border-slate-600 relative overflow-hidden transition-all duration-300">
                 <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/5"></div>
                 <span className="text-5xl font-extrabold text-slate-400/50 dark:text-slate-500/30 mt-6 relative z-10 drop-shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">2</span>
              </div>
            </div>
          )}

          {/* Rank 1 */}
          {top3[0] && (
            <div className="flex flex-col items-center w-32 md:w-40 relative z-20 group">
              <div className="absolute -top-6 text-4xl animate-bounce drop-shadow-lg z-30">👑</div>
              <div className="relative mb-3 group-hover:-translate-y-2 transition-transform duration-300 ease-out">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-200 dark:from-yellow-600 dark:to-amber-400 p-1 shadow-xl shadow-yellow-500/40 dark:shadow-yellow-500/20 border-4 border-white dark:border-slate-800">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-2xl md:text-3xl font-bold text-white uppercase">
                    {getInitials(top3[0].name)}
                  </div>
                </div>
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-9 h-9 bg-gradient-to-tr from-yellow-500 to-amber-400 text-white rounded-full flex items-center justify-center font-black border-2 border-white dark:border-slate-800 shadow-md">1</div>
              </div>
              <div className="font-extrabold text-lg text-slate-900 dark:text-slate-50 truncate w-full text-center group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">{top3[0].name}</div>
              <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{formatTime(top3[0].timeInMinutes)}</div>
              <div className="w-full h-40 md:h-48 bg-gradient-to-t from-yellow-300/60 to-transparent dark:from-yellow-500/20 dark:to-transparent rounded-t-3xl mt-4 flex justify-center backdrop-blur-md border-t-[8px] border-x border-yellow-400 dark:border-yellow-500/50 relative overflow-hidden transition-all duration-300 shadow-[0_-10px_40px_rgba(250,204,21,0.2)] dark:shadow-[0_-10px_40px_rgba(250,204,21,0.1)]">
                 <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent dark:from-white/10"></div>
                 <span className="text-6xl font-extrabold text-yellow-600/60 dark:text-yellow-500/40 mt-6 relative z-10 drop-shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">1</span>
              </div>
            </div>
          )}

          {/* Rank 3 */}
          {top3[2] && (
            <div className="flex flex-col items-center w-28 md:w-32 relative z-10 group">
              <div className="relative mb-3 group-hover:-translate-y-2 transition-transform duration-300 ease-out">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-orange-400 to-amber-600 dark:from-orange-700 dark:to-amber-900 p-1 shadow-lg shadow-orange-500/20 dark:shadow-orange-500/10 border-4 border-white dark:border-slate-800">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-xl md:text-2xl font-bold text-white uppercase">
                    {getInitials(top3[2].name)}
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white dark:border-slate-800 shadow-sm">3</div>
              </div>
              <div className="font-bold text-slate-900 dark:text-slate-50 truncate w-full text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{top3[2].name}</div>
              <div className="text-xs font-semibold text-slate-500">{formatTime(top3[2].timeInMinutes)}</div>
              <div className="w-full h-24 md:h-32 bg-gradient-to-t from-orange-300/60 to-transparent dark:from-orange-500/20 dark:to-transparent rounded-t-3xl mt-4 flex justify-center backdrop-blur-md border-t-[6px] border-x border-orange-400 dark:border-orange-500/50 relative overflow-hidden transition-all duration-300 shadow-[0_-10px_30px_rgba(249,115,22,0.1)]">
                 <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/5"></div>
                 <span className="text-5xl font-extrabold text-orange-500/50 dark:text-orange-500/30 mt-6 relative z-10 drop-shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">3</span>
              </div>
            </div>
          )}
        </div>
      </div>

          {/* KOLOM KANAN: Daftar Sisa & Banner */}
          <div className="w-full lg:w-[60%] xl:w-[55%] flex flex-col gap-6">
            
            {/* Banner Promosi (Hanya Mingguan) */}
            {isWeekly && (
              <div className="flex items-center gap-2 bg-emerald-50/80 dark:bg-emerald-500/10 backdrop-blur-md border border-emerald-200/50 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 py-2.5 px-4 rounded-xl shadow-sm shadow-emerald-500/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-emerald-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                <span className="material-icons-round text-emerald-500 text-base">arrow_upward</span>
                <span className="font-bold text-xs">Posisi 5 besar akan naik ke Liga Diamond</span>
              </div>
            )}

            {/* List Peringkat Sisa */}
            <div className="flex flex-col gap-3">
            {remaining.map((user, idx) => {
              const rank = idx + 4;
              const progress = (user.timeInMinutes / maxTime) * 100;
              const isCurrentUser = user.isCurrentUser;
              
              let zoneIcon = null;
              
              if (isWeekly) {
                if (rank <= PROMOTION_ZONE_LIMIT) {
                  zoneIcon = <span className="material-icons-round text-emerald-500 text-sm ml-1" title="Zona Promosi">arrow_upward</span>;
                } else if (rank >= DEMOTION_ZONE_START) {
                  zoneIcon = <span className="material-icons-round text-rose-500 text-sm ml-1" title="Zona Degradasi">arrow_downward</span>;
                } else {
                  zoneIcon = <span className="material-icons-round text-slate-300 dark:text-slate-600 text-sm ml-1" title="Zona Aman">remove</span>;
                }
              }

              return (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={user.name} 
                  ref={isCurrentUser ? userRowRef : null}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${isCurrentUser ? 'bg-blue-50/80 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 shadow-blue-500/10 z-10 relative' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'}`}
                >
                  <div className="w-12 text-center flex items-center justify-center font-bold text-slate-500 dark:text-slate-400">
                    {rank} {zoneIcon}
                  </div>
                  
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 uppercase transition-colors ${isCurrentUser ? 'bg-blue-600 text-white dark:bg-blue-500' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 group-hover:bg-blue-100 dark:group-hover:bg-slate-600 group-hover:text-blue-700 dark:group-hover:text-white'}`}>
                    {getInitials(user.name)}
                  </div>
                  
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`font-bold truncate transition-colors ${isCurrentUser ? 'text-blue-700 dark:text-blue-400' : 'text-slate-900 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-blue-400'}`}>
                        {user.name}
                      </span>
                      {isCurrentUser && (
                        <span className="px-2 py-0.5 bg-blue-600 dark:bg-blue-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">Kamu</span>
                      )}
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-900 h-2 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${isCurrentUser ? 'bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-400' : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-blue-400 dark:group-hover:bg-blue-500'}`} 
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div className="font-extrabold text-slate-700 dark:text-slate-300 w-24 text-right tabular-nums text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {formatTime(user.timeInMinutes)}
                  </div>
                </motion.div>
              );
            })}
            </div>

            {/* Banner Degradasi (Hanya Mingguan) */}
            {isWeekly && (
              <div className="flex items-center gap-2 bg-rose-50/80 dark:bg-rose-500/10 backdrop-blur-md border border-rose-200/50 dark:border-rose-500/20 text-rose-700 dark:text-rose-400 py-2.5 px-4 rounded-xl shadow-sm shadow-rose-500/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400/0 via-rose-400/10 to-rose-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                <span className="material-icons-round text-rose-500 text-base">arrow_downward</span>
                <span className="font-bold text-xs">Posisi 5 terbawah akan turun ke Liga Platinum</span>
              </div>
            )}

          </div> {/* End of Kolom Kanan */}
        </div> {/* End of Split Layout Container */}

      </div>

      {/* Sticky User Bar (Centered inside Right Column using layout mimic) */}
      <div className="fixed bottom-6 left-0 right-0 w-full pointer-events-none z-50 flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Empty Left Column to mimic the main layout */}
          <div className="hidden lg:block lg:w-[40%] xl:w-[45%]"></div>
          
          {/* Right Column where the User Bar lives */}
          <div className="w-full lg:w-[60%] xl:w-[55%] flex justify-center">
            <AnimatePresence>
              {showStickyBar && currentUser && (
                <motion.div 
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  className="w-full max-w-2xl bg-white dark:bg-slate-800 border border-blue-500/80 dark:border-blue-400/80 rounded-full p-2 pr-6 flex items-center justify-between shadow-xl shadow-blue-500/20 pointer-events-auto"
                >
                  <div className="w-full flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-500 flex items-center justify-center font-bold text-sm uppercase shrink-0">
                      {getInitials(currentUser.name)}
                    </div>
                    <div className="font-extrabold text-blue-600 dark:text-blue-400 text-lg">
                      #{currentUserRank}
                    </div>
                    <div className="flex-1 font-bold text-slate-900 dark:text-slate-50 truncate">
                      {currentUser.name}
                    </div>
                    <div className="font-bold text-blue-600 dark:text-blue-400 tabular-nums text-right whitespace-nowrap">
                      {formatTime(currentUser.timeInMinutes)}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
};

export default Leaderboard;
