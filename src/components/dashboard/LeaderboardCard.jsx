import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { datasets, PROMOTION_ZONE_LIMIT, DEMOTION_ZONE_START } from '../../pages/Leaderboard';

const formatTimeCard = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}j ${minutes}m`;
};

const getStatusInfo = (rank) => {
  if (rank <= PROMOTION_ZONE_LIMIT) {
    return {
      text: '▲ KENAIKAN',
      color: 'text-emerald-500',
      badge: rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : null
    };
  }
  if (rank >= DEMOTION_ZONE_START) {
    return { text: '▼ PENURUNAN', color: 'text-rose-500', badge: null };
  }
  return { text: '• AMAN', color: 'text-blue-500 dark:text-blue-400', badge: null };
};

const LeaderboardCard = () => {
  const [activeTab, setActiveTab] = useState('weekly');
  const [countdown, setCountdown] = useState('');

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
      setCountdown(`${d}h ${h}j ${m}m ${s}s`);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const data = [...datasets[activeTab]].sort((a, b) => b.timeInMinutes - a.timeInMinutes).slice(0, 12);
  const currentUser = datasets[activeTab].find(u => u.isCurrentUser);
  const currentUserStatus = currentUser ? getStatusInfo(currentUser.rank) : null;

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* My Rank Banner */}
      {currentUser && (
        <div className="glass-card p-6 bg-gradient-to-br from-emerald-400 to-blue-500 dark:from-emerald-500 dark:to-blue-600 text-white relative overflow-hidden border-none shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex justify-between items-start relative z-10 mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl shadow-inner backdrop-blur-sm">
              🏆
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-white/80 uppercase tracking-widest mb-1">
                Peringkat {activeTab === 'weekly' ? 'Mingguan' : 'Bulanan'}
              </div>
              <div className="text-4xl font-extrabold text-white">#{currentUser.rank}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div className="bg-black/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">Status</div>
              <div className="text-sm font-bold flex items-center gap-1">
                <span>{currentUserStatus.text.split(' ')[0]}</span> {currentUserStatus.text.split(' ')[1]}
              </div>
            </div>
            <div className="bg-black/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">Waktu</div>
              <div className="text-sm font-bold">{formatTimeCard(currentUser.timeInMinutes)}</div>
            </div>
          </div>
        </div>
      )}

      {/* Leaderboard */}
      <div className="glass-card flex-1 flex flex-col overflow-hidden">
        <div className="p-6 pb-4 border-b border-slate-200 dark:border-white/10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Liga Obsidian</h3>
            <span className="text-xl">💎</span>
          </div>
          <div className="bg-slate-50 dark:bg-black/30 rounded-lg p-2 flex justify-between items-center text-xs font-semibold text-slate-500 border border-slate-200 dark:border-white/5">
            <span>Reset:</span>
            <span>{countdown}</span>
          </div>
        </div>
        
        <div className="flex border-b border-slate-200 dark:border-white/10">
          <button 
            onClick={() => setActiveTab('weekly')}
            className={`flex-1 py-3 text-sm font-bold transition-colors ${activeTab === 'weekly' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
          >
            Mingguan
          </button>
          <button 
            onClick={() => setActiveTab('monthly')}
            className={`flex-1 py-3 text-sm font-bold transition-colors ${activeTab === 'monthly' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
          >
            Bulanan
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 no-scrollbar space-y-2">
          {data.map((user) => {
            const statusInfo = getStatusInfo(user.rank);
            return (
              <div 
                key={user.rank} 
                className={`flex items-center gap-4 p-3 rounded-2xl transition-colors ${user.isCurrentUser ? 'bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30' : 'hover:bg-slate-50 dark:hover:bg-white/5'}`}
              >
                <div className="w-6 text-center text-sm font-bold text-slate-500 flex justify-center">
                  {statusInfo.badge ? <span className="text-lg">{statusInfo.badge}</span> : user.rank}
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${user.isCurrentUser ? 'bg-blue-500' : 'bg-slate-400 dark:bg-slate-600'}`}>
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className={`font-bold text-sm truncate ${user.isCurrentUser ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-200'}`}>
                    {user.name}
                  </div>
                  <div className={`text-[10px] font-bold mt-0.5 flex items-center gap-1 ${statusInfo.color}`}>
                    {statusInfo.text.replace(' ', ' ')}
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {formatTimeCard(user.timeInMinutes)}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-slate-200 dark:border-white/10 text-center">
          <Link to="/leaderboard" className="text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center justify-center w-full gap-1">
            Lihat Papan Peringkat Lengkap <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCard;
