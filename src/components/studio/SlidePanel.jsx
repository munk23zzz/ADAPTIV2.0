import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { studySlides } from '../../data/chatMockData';

const SlidePanel = ({ sessionKey, title, closeStudio }) => {
  const activeSlideList = studySlides[sessionKey] || [];
  
  const [slideSelected, setSlideSelected] = useState(null);
  const [slideFilter, setSlideFilter] = useState('Semua');

  if (!activeSlideList.length) {
    return (
      <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117] items-center justify-center text-slate-400 gap-3 relative">
        <button onClick={closeStudio} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-slate-500 dark:text-slate-400 transition-colors z-10">
          <span className="material-icons-round text-[18px]">close</span>
        </button>
        <span className="material-icons-round text-4xl">slideshow</span>
        <p className="text-sm font-bold text-center px-4">Belum ada slide untuk sesi ini.</p>
      </div>
    );
  }

  const filteredSlides = slideFilter === 'Semua'
    ? activeSlideList
    : activeSlideList.filter(s => s.topic === slideFilter);
  const allTopics = ['Semua', ...new Set(activeSlideList.map(s => s.topic))];

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117]">
      {/* Gradient Header */}
      <div className="shrink-0 bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="material-icons-round text-white text-[16px]">slideshow</span>
          </div>
          <div>
            <p className="text-white/70 text-[9px] font-bold uppercase tracking-widest">Studio · Slide Presentasi</p>
            <p className="text-white font-extrabold text-xs leading-tight">{title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {slideSelected && (
            <button
              onClick={() => setSlideSelected(null)}
              className="bg-white/20 hover:bg-white/30 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest flex items-center gap-1 transition-colors"
            >
              <span className="material-icons-round text-[11px]">arrow_back</span> Daftar
            </button>
          )}
          {!slideSelected && (
            <span className="bg-white/20 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest">{activeSlideList.length} DECK</span>
          )}
          <button onClick={closeStudio} className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <span className="material-icons-round text-[15px]">close</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* SLIDES VIEWER */}
        {slideSelected ? (
          <motion.div
            key="viewer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex-1 overflow-y-auto flex flex-col"
          >
            {/* Slide Thumbnail Preview */}
            <div className="p-4 bg-slate-100 dark:bg-[#121620] border-b border-slate-200 dark:border-white/5 flex items-center justify-center">
              <div
                className="relative w-full max-w-[280px] rounded-lg shadow-xl overflow-hidden border border-slate-200 dark:border-white/10"
                style={{
                  background: `linear-gradient(135deg, ${slideSelected.gradient[0]}, ${slideSelected.gradient[1]})`,
                  aspectRatio: '16/9'
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <span className="material-icons-round text-white/80 text-[40px] mb-2">{slideSelected.icon}</span>
                  <h4 className="text-white font-extrabold text-sm leading-snug">{slideSelected.title}</h4>
                  <div className="w-8 h-1 bg-white/30 rounded-full mt-3 mb-2"></div>
                  <p className="text-white/80 text-[10px] font-bold">{slideSelected.presenter}</p>
                </div>
                
                {/* Control overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-md px-3 py-2 flex items-center justify-between">
                  <button className="text-white/70 hover:text-white transition-colors"><span className="material-icons-round text-[18px]">navigate_before</span></button>
                  <span className="text-white text-[10px] font-bold font-mono">1 / {slideSelected.slidesCount}</span>
                  <button className="text-white/70 hover:text-white transition-colors"><span className="material-icons-round text-[18px]">navigate_next</span></button>
                </div>
              </div>
            </div>

            {/* Slide Info */}
            <div className="p-4 flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider"
                    style={{ background: `${slideSelected.topicColor}15`, color: slideSelected.topicColor }}
                  >
                    {slideSelected.topic}
                  </span>
                </div>
                <h3 className="font-extrabold text-[14px] text-slate-900 dark:text-white leading-snug mb-1.5">{slideSelected.title}</h3>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <span className="material-icons-round text-[14px]">person</span>
                    {slideSelected.presenter}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <span className="material-icons-round text-[14px]">visibility</span>
                    {slideSelected.views}
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl p-3">
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">{slideSelected.desc}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-[11px] font-bold transition-colors shadow-sm shadow-amber-500/20">
                  <span className="material-icons-round text-[15px]">fullscreen</span> Buka Penuh
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-[#1a2030] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors">
                  <span className="material-icons-round text-[16px]">download</span>
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* SLIDES LIST VIEW */
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex-1 overflow-y-auto flex flex-col"
          >
            {/* Topic Filter */}
            <div className="shrink-0 bg-white dark:bg-[#121620] border-b border-slate-100 dark:border-white/5 px-3 py-2 flex items-center gap-1.5 overflow-x-auto">
              {allTopics.map(topic => (
                <button
                  key={topic}
                  onClick={() => setSlideFilter(topic)}
                  className={`shrink-0 px-2.5 py-1 rounded-full text-[9px] font-extrabold transition-all tracking-wide ${
                    slideFilter === topic
                      ? 'bg-amber-500 text-white shadow-sm shadow-amber-500/30'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Slide Cards */}
            <div className="flex-1 p-3 grid grid-cols-2 gap-3 content-start">
              {filteredSlides.map((slide, idx) => (
                <motion.button
                  key={slide.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSlideSelected(slide)}
                  className="text-left rounded-xl overflow-hidden border border-slate-200 dark:border-white/8 bg-white dark:bg-[#1a2030] hover:border-amber-300 dark:hover:border-amber-500/40 transition-all hover:shadow-md hover:shadow-amber-500/10 group flex flex-col h-full"
                >
                  {/* Thumbnail */}
                  <div
                    className="relative w-full aspect-video flex items-center justify-center p-2"
                    style={{
                      background: `linear-gradient(135deg, ${slide.gradient[0]}, ${slide.gradient[1]})`
                    }}
                  >
                    <span className="material-icons-round text-white/60 text-[24px] group-hover:scale-110 transition-transform">{slide.icon}</span>
                    <div className="absolute bottom-1.5 right-1.5 bg-black/60 text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <span className="material-icons-round text-[10px]">layers</span> {slide.slidesCount}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-2.5 py-2 flex-1 flex flex-col">
                    <p className="font-bold text-[10px] text-slate-800 dark:text-slate-200 leading-snug mb-1.5 line-clamp-2">{slide.title}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 line-clamp-1">{slide.presenter}</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SlidePanel;
