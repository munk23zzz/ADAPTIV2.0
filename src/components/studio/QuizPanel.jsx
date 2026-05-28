import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizzes } from '../../data/chatMockData';

const QuizPanel = ({ sessionKey, title, closeStudio }) => {
  const activeQuizList = quizzes[sessionKey] || [];
  
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizResults, setQuizResults] = useState(() => new Array(activeQuizList.length).fill(null));
  const [quizDone, setQuizDone] = useState(false);

  const startQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizResults(new Array(activeQuizList.length).fill(null));
    setQuizDone(false);
  };

  const handleQuizSelect = (option, idx) => {
    if (quizResults[quizIndex] !== null) return;

    const newResults = [...quizResults];
    newResults[quizIndex] = {
      isCorrect: option.isCorrect,
      choice: option.letter,
      rationale: option.rationale
    };

    setQuizResults(newResults);
    if (option.isCorrect) setQuizScore(prev => prev + 1);
  };

  if (!activeQuizList.length) {
    return (
      <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117] items-center justify-center">
        <p className="text-slate-400">Belum ada kuis untuk sesi ini.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117]">
      {/* Gradient Header */}
      <div className="shrink-0 bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="material-icons-round text-white text-[16px]">quiz</span>
          </div>
          <div>
            <p className="text-white/70 text-[9px] font-bold uppercase tracking-widest">Studio · Kuis Interaktif</p>
            <p className="text-white font-extrabold text-xs leading-tight">{title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white/20 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest">{activeQuizList.length} SOAL</span>
          <button onClick={closeStudio} className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <span className="material-icons-round text-[15px]">close</span>
          </button>
        </div>
      </div>

      {!quizDone ? (
        <>
          {/* Progress Bar */}
          <div className="shrink-0 bg-white dark:bg-[#121620] border-b border-slate-100 dark:border-white/5 px-4 py-2.5 flex items-center gap-3">
            <div className="flex-1 flex gap-0.5 h-1.5 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              {activeQuizList.map((_, idx) => {
                const r = quizResults[idx];
                const isActive = idx === quizIndex;
                const bg = isActive
                  ? 'bg-cyan-400'
                  : r?.isCorrect
                    ? 'bg-emerald-500'
                    : r?.isCorrect === false
                      ? 'bg-rose-500'
                      : 'bg-slate-200 dark:bg-slate-700';
                return (
                  <div
                    key={idx}
                    className={`flex-1 rounded-full transition-all duration-500 ${bg} ${isActive ? 'animate-pulse' : ''}`}
                  />
                );
              })}
            </div>
            <span className="text-xs font-extrabold text-slate-500 font-mono shrink-0">
              {quizIndex + 1}<span className="text-slate-300 dark:text-slate-600">/{activeQuizList.length}</span>
            </span>
          </div>

          {/* Question Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={quizIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
              className="flex-1 overflow-y-auto p-4 flex flex-col gap-4"
            >
              {activeQuizList[quizIndex] && (
                <>
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-[9px] font-extrabold tracking-widest uppercase mb-2 inline-block border border-cyan-200 dark:border-cyan-500/20">
                      {activeQuizList[quizIndex].badge}
                    </span>
                    <h3 className="text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                      <span className="text-cyan-500 font-extrabold mr-1">Q{quizIndex + 1}.</span>
                      {activeQuizList[quizIndex].question}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {activeQuizList[quizIndex].options.map((opt, i) => {
                      const result = quizResults[quizIndex];
                      const isSelected = result?.choice === opt.letter;
                      let btnStyle = 'bg-white dark:bg-[#1a2030] border border-slate-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:bg-cyan-50/50 dark:hover:bg-cyan-500/5 cursor-pointer';

                      if (result) {
                        if (opt.isCorrect) btnStyle = 'bg-emerald-50 dark:bg-emerald-500/10 border-2 border-emerald-500 cursor-default';
                        else if (isSelected && !opt.isCorrect) btnStyle = 'bg-rose-50 dark:bg-rose-500/10 border-2 border-rose-500 cursor-default';
                        else btnStyle = 'bg-slate-50 dark:bg-[#121620] border border-slate-100 dark:border-white/5 opacity-40 cursor-default';
                      }

                      return (
                        <motion.button
                          key={i}
                          whileTap={!result ? { scale: 0.98 } : {}}
                          disabled={result !== null}
                          onClick={() => handleQuizSelect(opt, i)}
                          className={`w-full text-left p-2.5 rounded-xl flex items-center gap-2.5 transition-all ${btnStyle}`}
                        >
                          <span className={`w-6 h-6 rounded-lg shrink-0 flex items-center justify-center text-[11px] font-extrabold ${
                            result?.isCorrect !== undefined && opt.isCorrect
                              ? 'bg-emerald-500 text-white'
                              : isSelected && !opt.isCorrect
                                ? 'bg-rose-500 text-white'
                                : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                          }`}>{opt.letter}</span>
                          <span className={`font-medium text-xs leading-snug ${
                            result && opt.isCorrect ? 'text-emerald-700 dark:text-emerald-400'
                              : result && isSelected ? 'text-rose-700 dark:text-rose-400'
                                : 'text-slate-700 dark:text-slate-300'
                          }`}>{opt.text}</span>
                          {result && opt.isCorrect && <span className="material-icons-round text-emerald-500 text-[15px] ml-auto shrink-0">check_circle</span>}
                          {result && isSelected && !opt.isCorrect && <span className="material-icons-round text-rose-500 text-[15px] ml-auto shrink-0">cancel</span>}
                        </motion.button>
                      );
                    })}
                  </div>

                  {quizResults[quizIndex] && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`p-3 rounded-xl border-l-4 ${
                        quizResults[quizIndex].isCorrect
                          ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500'
                          : 'bg-rose-50 dark:bg-rose-500/10 border-rose-500'
                      }`}
                    >
                      <div className={`flex items-center gap-1.5 font-extrabold mb-1 text-xs ${
                        quizResults[quizIndex].isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'
                      }`}>
                        <span className="material-icons-round text-[15px]">
                          {quizResults[quizIndex].isCorrect ? 'check_circle' : 'cancel'}
                        </span>
                        {quizResults[quizIndex].isCorrect ? '🎉 Jawaban Benar!' : 'Jawaban Kurang Tepat'}
                      </div>
                      <p className={`text-[11px] leading-relaxed ${
                        quizResults[quizIndex].isCorrect ? 'text-emerald-700/80 dark:text-emerald-300/80' : 'text-rose-700/80 dark:text-rose-300/80'
                      }`}>{quizResults[quizIndex].rationale}</p>
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <div className="shrink-0 p-4 bg-white dark:bg-[#121620] border-t border-slate-100 dark:border-white/5 flex justify-between items-center">
            <button
              onClick={() => setQuizIndex(i => Math.max(0, i - 1))}
              disabled={quizIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-500 disabled:opacity-25 hover:text-slate-800 dark:hover:text-white transition-colors"
            >
              <span className="material-icons-round text-[16px]">arrow_back</span> Kembali
            </button>
            <button
              onClick={() => {
                if (quizIndex < activeQuizList.length - 1) setQuizIndex(i => i + 1);
                else setQuizDone(true);
              }}
              disabled={!quizResults[quizIndex]}
              className="flex items-center gap-1.5 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white rounded-full font-bold text-sm transition-all shadow-lg shadow-cyan-500/30 disabled:opacity-40 disabled:shadow-none"
            >
              {quizIndex < activeQuizList.length - 1 ? (
                <> Lanjut <span className="material-icons-round text-[16px]">arrow_forward</span> </>
              ) : (
                <> Selesai <span className="material-icons-round text-[16px]">flag</span> </>
              )}
            </button>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 overflow-y-auto flex flex-col"
        >
          {/* Score Summary */}
          <div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-6 flex flex-col items-center text-white text-center">
            {/* Donut Chart SVG */}
            <div className="relative w-28 h-28 mb-3">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15.9" fill="none"
                  stroke="white" strokeWidth="3.5"
                  strokeDasharray={`${(quizScore / activeQuizList.length) * 100} 100`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-extrabold">{Math.round((quizScore / activeQuizList.length) * 100)}%</span>
                <span className="text-white/70 text-[10px] font-bold">SKOR</span>
              </div>
            </div>
            <p className="text-white/80 text-sm font-bold mb-1">
              {quizScore} benar dari {activeQuizList.length} soal
            </p>
            <div className="bg-white/20 rounded-xl px-4 py-2 mt-2 text-sm font-bold">
              {quizScore === activeQuizList.length
                ? '🔥 Perfect Score! Kamu siap presentasi besok!'
                : quizScore >= Math.ceil(activeQuizList.length * 0.5)
                  ? '💪 Hampir sempurna! Review soal yang salah ya!'
                  : '📚 Semangat! Baca ulang materinya dan coba lagi!'}
            </div>
          </div>

          {/* Review List */}
          <div className="flex-1 p-4 space-y-3">
            <p className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Review Semua Soal</p>
            {activeQuizList.map((q, idx) => {
              const r = quizResults[idx];
              return (
                <div key={idx} className={`rounded-xl border p-3.5 ${
                  r?.isCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-500/5 border-emerald-200 dark:border-emerald-500/20'
                    : 'bg-rose-50 dark:bg-rose-500/5 border-rose-200 dark:border-rose-500/20'
                }`}>
                  <div className="flex items-start gap-2 mb-1.5">
                    <span className={`material-icons-round text-[16px] shrink-0 mt-0.5 ${
                      r?.isCorrect ? 'text-emerald-500' : 'text-rose-500'
                    }`}>{r?.isCorrect ? 'check_circle' : 'cancel'}</span>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-snug line-clamp-2">
                      Q{idx + 1}. {q.question}
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-6 leading-relaxed">
                    {q.options.find(o => o.isCorrect)?.rationale}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Result Actions */}
          <div className="shrink-0 p-4 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#121620] flex gap-3">
            <button
              onClick={startQuiz}
              className="flex-1 py-2.5 rounded-full border-2 border-slate-200 dark:border-white/10 font-bold text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-1.5"
            >
              <span className="material-icons-round text-[16px]">refresh</span> Coba Lagi
            </button>
            <button
              onClick={closeStudio}
              className="flex-1 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-bold text-sm shadow-lg shadow-cyan-500/30 hover:from-cyan-600 hover:to-teal-600 transition-all flex items-center justify-center gap-1.5"
            >
              <span className="material-icons-round text-[16px]">chat</span> Kembali ke Chat
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QuizPanel;
