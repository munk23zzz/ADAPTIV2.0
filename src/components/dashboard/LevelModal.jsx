import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const gems = [
  { name: 'Anggota (0-10m)', color: 'text-[#B39DFF]', icon: 'diamond', minMinutes: 0 },
  { name: 'Pemula (10m-60m)', color: 'text-[#8A9CFF]', icon: 'pentagon', minMinutes: 10 },
  { name: 'Pembelajar (1-3j)', color: 'text-[#3E82FF]', icon: 'hexagon', minMinutes: 60 },
  { name: 'Menengah (3-6j)', color: 'text-[#5E9BFF]', icon: 'stop_circle', minMinutes: 180 },
  { name: 'Cakap (6-10j)', color: 'text-[#20CBE2]', icon: 'workspace_premium', minMinutes: 360 },
  { name: 'Mahir (10-20j)', color: 'text-[#48D597]', icon: 'track_changes', minMinutes: 600 },
  { name: 'Ahli (20-40j)', color: 'text-[#FFC327]', icon: 'stars', minMinutes: 1200 },
  { name: 'Siswa A+ (40-60j)', color: 'text-[#FF841A]', icon: 'brightness_7', minMinutes: 2400 },
  { name: 'Master (60-80j)', color: 'text-[#FF4A55]', icon: 'star', minMinutes: 3600 },
  { name: 'Grandmaster (80-140j)', color: 'text-[#FF5BA4]', icon: 'hotel_class', minMinutes: 4800 },
  { name: 'Mesin Belajar (140-200j)', color: 'text-[#F5A9B8]', icon: 'psychology', minMinutes: 8400 },
  { name: 'Master Belajar (200+j)', color: 'text-[#D98787]', icon: 'emoji_events', minMinutes: 12000 },
];

export const calculateLevelIndex = (minutes) => {
  let levelIndex = 0;
  for (let i = 0; i < gems.length; i++) {
    if (minutes >= gems[i].minMinutes) {
      levelIndex = i;
    } else {
      break;
    }
  }
  return levelIndex;
};

const LevelModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white dark:bg-[#0a0a0f] rounded-3xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto relative z-10 border border-slate-200/50 dark:border-white/10 no-scrollbar"
          >
            <div className="p-6 sm:p-8">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <span className="material-icons-round">close</span>
              </button>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                <span className="material-icons-round text-emerald-500 text-[20px]">info</span>
                Level belajar bulanan
              </h2>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Cara kerjanya</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Setelah 10 menit bergabung dengan sesi belajar pertama Anda, Anda akan mulai mengumpulkan permata dan meningkatkan level belajar bulanan Anda. Anda juga dapat membandingkan pencapaian Anda dengan teman-teman Anda di papan peringkat. Untuk mendorong Anda menjaga keseimbangan yang sehat, kami berhenti menghitung jam belajar Anda setelah 8 jam setiap harinya.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Peran & Permata</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 p-4 rounded-2xl border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5">
                  {gems.map((gem, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-6 h-6 flex items-center justify-center ${gem.color}`}>
                        <span className="material-icons-round text-[22px]">
                          {gem.icon}
                        </span>
                      </div>
                      <span className={`text-sm font-bold ${gem.color}`}>{gem.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Reset setiap bulan</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Setiap orang berhak mendapatkan awal yang baru, jadi kami mereset peran, permata, dan papan peringkat di setiap akhir bulan. Namun, Anda tetap dapat melihat dan dengan bangga memamerkan pencapaian masa lalu Anda karena pencapaian tersebut akan terus ditampilkan di profil Anda. Waktu mingguan di-reset setiap hari Senin pukul 17.00 UTC, sedangkan waktu bulanan dan peran di-reset pada akhir bulan.
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={onClose}
                  className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-rose-500/30"
                >
                  Mengerti
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LevelModal;
