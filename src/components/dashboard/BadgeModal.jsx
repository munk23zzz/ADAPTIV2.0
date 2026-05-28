import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const badgesList = [
  { id: 1, color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-500/20', unlocked: true },
  { id: 2, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-500/20', unlocked: true },
  { id: 3, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-500/20', unlocked: true },
  { id: 4, color: 'text-cyan-500', bg: 'bg-cyan-100 dark:bg-cyan-500/20', unlocked: true },
  { id: 5, color: 'text-teal-500', bg: 'bg-teal-100 dark:bg-teal-500/20', unlocked: true },
  { id: 6, color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-500/20', unlocked: true },
  { id: 7, color: 'text-lime-500', bg: 'bg-lime-100 dark:bg-lime-500/20', unlocked: true },
  { id: 8, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-500/20', unlocked: true },
  { id: 9, color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-500/20', unlocked: true },
  { id: 10, unlocked: false },
  { id: 11, unlocked: false },
  { id: 12, unlocked: false },
  { id: 13, unlocked: false },
];

const BadgeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
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
            className="bg-white dark:bg-[#0a0a0f] rounded-3xl shadow-2xl w-full max-w-xl relative overflow-hidden z-10 border border-slate-200/50 dark:border-white/10"
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
                Lencana
              </h2>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Cara kerjanya</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Meskipun peran belajar Anda di-reset di setiap akhir bulan, lencana akan tetap tersimpan selamanya. Semakin banyak Anda belajar, semakin banyak lencana yang akan Anda kumpulkan - dan akan ada beberapa kejutan di sepanjang jalan.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Lencana saya</h3>
                <div className="flex flex-wrap gap-3">
                  {badgesList.map((badge) => (
                    <div 
                      key={badge.id}
                      className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        badge.unlocked 
                          ? `${badge.bg} shadow-sm hover:scale-105` 
                          : 'bg-transparent border-2 border-dashed border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      {badge.unlocked ? (
                        <span className={`material-icons-round text-3xl ${badge.color} drop-shadow-sm`}>
                          alarm_on
                        </span>
                      ) : (
                        <span className="material-icons-round text-slate-200 dark:text-slate-800 opacity-50">
                          lock
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={onClose}
                  className="px-6 py-2.5 bg-primary-light hover:bg-blue-600 dark:bg-primary-dark dark:hover:bg-blue-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-primary-light/30 dark:shadow-primary-dark/30"
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

export default BadgeModal;
