import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { flashcards } from '../../data/chatMockData';

const FlashcardPanel = ({ sessionKey, title, closeStudio }) => {
  const activeFcDeck = flashcards[sessionKey] || [];
  
  const [fcIndex, setFcIndex] = useState(0);
  const [fcFilter, setFcFilter] = useState('Semua');
  const [fcFlipped, setFcFlipped] = useState(false);

  const filteredFc = fcFilter === 'Semua' ? activeFcDeck : activeFcDeck.filter(c => c.category === fcFilter);

  if (!activeFcDeck.length) {
    return (
      <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117] items-center justify-center relative">
        <button onClick={closeStudio} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-slate-500 dark:text-slate-400 transition-colors z-10">
          <span className="material-icons-round text-[18px]">close</span>
        </button>
        <p className="text-slate-400 text-center px-4">Belum ada kartu belajar untuk sesi ini.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117]">
      {/* Gradient Header */}
      <div className="shrink-0 bg-gradient-to-r from-rose-500 to-orange-500 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="material-icons-round text-white text-[16px]">style</span>
          </div>
          <div>
            <p className="text-white/70 text-[9px] font-bold uppercase tracking-widest">Studio · Kartu Belajar</p>
            <p className="text-white font-extrabold text-xs leading-tight">{title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white/20 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest">{activeFcDeck.length} KARTU</span>
          <button onClick={closeStudio} className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <span className="material-icons-round text-[15px]">close</span>
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="shrink-0 bg-white dark:bg-[#121620] border-b border-slate-100 dark:border-white/5 px-4 py-2.5 flex items-center gap-2 overflow-x-auto">
        {['Semua', ...new Set(activeFcDeck.map(c => c.category))].map(cat => (
          <button
            key={cat}
            onClick={() => { setFcFilter(cat); setFcIndex(0); setFcFlipped(false); }}
            className={`shrink-0 px-3 py-1 rounded-full text-[10px] font-bold transition-all ${fcFilter === cat
              ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
              : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="shrink-0 px-4 pt-3 pb-1 flex items-center justify-center gap-1.5">
        {filteredFc.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setFcIndex(idx); setFcFlipped(false); }}
            className={`rounded-full transition-all duration-300 ${idx === fcIndex
              ? 'w-5 h-2 bg-rose-500'
              : 'w-2 h-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'
            }`}
          />
        ))}
      </div>

      {/* Flip Card */}
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col items-center justify-center gap-3">
        {filteredFc.length > 0 ? (
          <>
            {/* Card */}
            <div
              className="w-full max-w-sm cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => setFcFlipped(!fcFlipped)}
            >
              <motion.div
                className="w-full relative"
                style={{ transformStyle: 'preserve-3d', minHeight: '260px' }}
                animate={{ rotateY: fcFlipped ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 bg-white dark:bg-[#1a2030] rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg p-5 flex flex-col justify-center text-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="flex items-center justify-center gap-1.5 mb-3">
                    <span className="bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 px-2.5 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider">
                      {filteredFc[fcIndex].category}
                    </span>
                  </div>
                  <h3 className="text-[13px] font-bold text-slate-900 dark:text-white leading-snug mb-4">
                    {filteredFc[fcIndex].question}
                  </h3>
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 dark:text-slate-500 text-[11px] font-medium mt-auto">
                    <span className="material-icons-round text-[14px]">touch_app</span>
                    Klik untuk lihat jawaban
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-[#1a2030] dark:to-[#0f1420] rounded-2xl border border-indigo-100 dark:border-white/10 shadow-lg p-5 flex flex-col justify-center text-center text-slate-800 dark:text-white"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="flex items-center justify-center gap-1.5 mb-3">
                    <span className="bg-indigo-100 dark:bg-white/10 text-indigo-700 dark:text-white/80 px-2.5 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <span className="material-icons-round text-[11px]">lightbulb</span> Jawaban
                    </span>
                  </div>
                  <p className="text-[12px] font-medium leading-relaxed text-slate-700 dark:text-slate-200 mb-3">
                    {filteredFc[fcIndex].answer}
                  </p>
                  {filteredFc[fcIndex].formula && (
                    <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-2 px-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-[11px] mb-3">
                      {filteredFc[fcIndex].formula}
                    </div>
                  )}
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-black/20 px-3 py-2 rounded-lg border border-slate-100 dark:border-white/5 leading-relaxed">
                    {filteredFc[fcIndex].subtext}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Rating Buttons */}
            {fcFlipped && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-sm flex items-center gap-2"
              >
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 mr-1 shrink-0">Sudah paham?</p>
                <button
                  onClick={() => { setFcIndex(i => Math.min(filteredFc.length - 1, i + 1)); setFcFlipped(false); }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-200 dark:border-emerald-500/20 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors"
                >
                  <span className="material-icons-round text-[14px]">thumb_up</span> Paham!
                </button>
                <button
                  onClick={() => { setFcFlipped(false); }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[11px] font-bold border border-rose-200 dark:border-rose-500/20 hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-colors"
                >
                  <span className="material-icons-round text-[14px]">thumb_down</span> Ulangi
                </button>
              </motion.div>
            )}
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-400 text-sm">Tidak ada kartu.</div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="shrink-0 p-3 bg-white dark:bg-[#121620] border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
        <button
          disabled={fcIndex === 0}
          onClick={() => { setFcIndex(i => i - 1); setFcFlipped(false); }}
          className="w-10 h-10 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 disabled:opacity-30 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors"
        >
          <span className="material-icons-round text-[18px]">arrow_back</span>
        </button>
        <button
          onClick={() => setFcFlipped(!fcFlipped)}
          className="flex-1 font-bold text-xs text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1.5 hover:bg-slate-50 dark:hover:bg-white/5 h-10 rounded-xl transition-colors border border-slate-200 dark:border-white/5"
        >
          <span className="material-icons-round text-[16px]">flip</span>
          {fcFlipped ? 'Lihat Soal' : 'Lihat Jawaban'}
        </button>
        <button
          disabled={fcIndex === filteredFc.length - 1}
          onClick={() => { setFcIndex(i => i + 1); setFcFlipped(false); }}
          className="w-10 h-10 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 disabled:opacity-30 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors"
        >
          <span className="material-icons-round text-[18px]">arrow_forward</span>
        </button>
      </div>

    </div>
  );
};

export default FlashcardPanel;
