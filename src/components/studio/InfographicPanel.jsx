import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { infographics } from '../../data/chatMockData';

const InfographicPanel = ({ sessionKey, title, closeStudio }) => {
  const activeList = infographics[sessionKey] || [];
  
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('Semua');

  if (!activeList.length) {
    return (
      <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117] items-center justify-center text-slate-400 gap-3 relative">
        <button onClick={closeStudio} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-slate-500 dark:text-slate-400 transition-colors z-10">
          <span className="material-icons-round text-[18px]">close</span>
        </button>
        <span className="material-icons-round text-4xl">insert_chart</span>
        <p className="text-sm font-bold text-center px-4">Belum ada infografis untuk sesi ini.</p>
      </div>
    );
  }

  const filtered = filter === 'Semua'
    ? activeList
    : activeList.filter(item => item.topic === filter);
  const allTopics = ['Semua', ...new Set(activeList.map(item => item.topic))];

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117]">
      {/* Gradient Header */}
      <div className="shrink-0 bg-gradient-to-r from-fuchsia-500 to-purple-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="material-icons-round text-white text-[16px]">insert_chart</span>
          </div>
          <div>
            <p className="text-white/70 text-[9px] font-bold uppercase tracking-widest">Studio · Infografis</p>
            <p className="text-white font-extrabold text-xs leading-tight">{title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {selected && (
            <button
              onClick={() => setSelected(null)}
              className="bg-white/20 hover:bg-white/30 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest flex items-center gap-1 transition-colors"
            >
              <span className="material-icons-round text-[11px]">arrow_back</span> Daftar
            </button>
          )}
          {!selected && (
            <span className="bg-white/20 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest">{activeList.length} GRAFIS</span>
          )}
          <button onClick={closeStudio} className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <span className="material-icons-round text-[15px]">close</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selected ? (
          /* VIEWER MODE */
          <motion.div
            key="viewer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex-1 overflow-y-auto flex flex-col"
          >
            {/* Infographic Mockup Container */}
            <div className="p-4 bg-slate-100 dark:bg-[#121620] border-b border-slate-200 dark:border-white/5 flex flex-col items-center justify-center min-h-[300px]">
              {/* Dummy Infographic Image / Canvas */}
              <div 
                className="w-full max-w-sm rounded-xl shadow-lg border border-slate-200 dark:border-white/10 overflow-hidden relative"
                style={{
                  background: `linear-gradient(180deg, ${selected.gradient[0]}, ${selected.gradient[1]})`,
                  minHeight: '400px'
                }}
              >
                {/* Decorative headers */}
                <div className="p-4 flex flex-col items-center text-center">
                   <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                     <span className="material-icons-round text-white text-2xl">{selected.icon}</span>
                   </div>
                   <h2 className="text-white font-black text-xl leading-tight mb-2">{selected.title}</h2>
                   <div className="w-12 h-1 bg-white/30 rounded-full mb-6"></div>
                   
                   {/* Dummy Content Blocks */}
                   <div className="w-full space-y-3 px-2">
                     <div className="h-16 bg-white/10 rounded-lg flex items-center px-3 border border-white/5">
                        <div className="w-8 h-8 rounded bg-white/20 shrink-0"></div>
                        <div className="ml-3 flex-1 space-y-1.5">
                           <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
                           <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                        </div>
                     </div>
                     <div className="h-24 bg-white/10 rounded-lg flex flex-col justify-center px-3 border border-white/5">
                        <div className="h-2 w-full bg-white/20 rounded-full mb-2"></div>
                        <div className="h-2 w-5/6 bg-white/20 rounded-full mb-2"></div>
                        <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
                     </div>
                     <div className="flex gap-2">
                       <div className="h-20 flex-1 bg-white/10 rounded-lg border border-white/5 flex items-center justify-center">
                         <div className="w-10 h-10 rounded-full border-4 border-white/20"></div>
                       </div>
                       <div className="h-20 flex-1 bg-white/10 rounded-lg border border-white/5 flex flex-col justify-center items-center gap-1.5">
                         <div className="h-1.5 w-1/2 bg-white/20 rounded-full"></div>
                         <div className="h-1.5 w-2/3 bg-white/20 rounded-full"></div>
                         <div className="h-1.5 w-1/3 bg-white/10 rounded-full"></div>
                       </div>
                     </div>
                   </div>
                </div>
                
                {/* Footer credit */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-black/20 text-center">
                   <p className="text-white/60 text-[8px] font-extrabold uppercase tracking-widest">ADAPTIV INFOGRAPHICS · {selected.topic}</p>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-4 flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider"
                    style={{ background: `${selected.topicColor}15`, color: selected.topicColor }}
                  >
                    {selected.topic}
                  </span>
                </div>
                <h3 className="font-extrabold text-[15px] text-slate-900 dark:text-white leading-snug mb-1.5">{selected.title}</h3>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <span className="material-icons-round text-[14px]">brush</span>
                    {selected.author}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <span className="material-icons-round text-[14px]">visibility</span>
                    {selected.views}
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl p-3">
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">{selected.desc}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-[11px] font-bold transition-colors shadow-sm shadow-fuchsia-500/20">
                  <span className="material-icons-round text-[15px]">zoom_in</span> Perbesar Detail
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-[#1a2030] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors">
                  <span className="material-icons-round text-[16px]">download</span>
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* LIST MODE */
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex-1 overflow-y-auto flex flex-col"
          >
            {/* Filter */}
            <div className="shrink-0 bg-white dark:bg-[#121620] border-b border-slate-100 dark:border-white/5 px-3 py-2 flex items-center gap-1.5 overflow-x-auto">
              {allTopics.map(topic => (
                <button
                  key={topic}
                  onClick={() => setFilter(topic)}
                  className={`shrink-0 px-2.5 py-1 rounded-full text-[9px] font-extrabold transition-all tracking-wide ${
                    filter === topic
                      ? 'bg-fuchsia-500 text-white shadow-sm shadow-fuchsia-500/30'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="flex-1 p-3 grid grid-cols-2 gap-3 content-start">
              {filtered.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelected(item)}
                  className="text-left rounded-xl overflow-hidden border border-slate-200 dark:border-white/8 bg-white dark:bg-[#1a2030] hover:border-fuchsia-300 dark:hover:border-fuchsia-500/40 transition-all hover:shadow-md hover:shadow-fuchsia-500/10 group flex flex-col h-full"
                >
                  {/* Thumbnail */}
                  <div
                    className="relative w-full aspect-[3/4] flex flex-col items-center justify-center p-3"
                    style={{
                      background: `linear-gradient(135deg, ${item.gradient[0]}, ${item.gradient[1]})`
                    }}
                  >
                    <span className="material-icons-round text-white/50 text-[32px] group-hover:scale-110 group-hover:text-white/80 transition-all">{item.icon}</span>
                    <div className="mt-4 w-full space-y-1.5 opacity-40">
                       <div className="h-1.5 w-3/4 bg-white rounded-full mx-auto"></div>
                       <div className="h-1.5 w-1/2 bg-white rounded-full mx-auto"></div>
                       <div className="h-1.5 w-full bg-white rounded-full mx-auto mt-3"></div>
                       <div className="h-1.5 w-5/6 bg-white rounded-full mx-auto"></div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-2.5 py-2 flex-1 flex flex-col">
                    <p className="font-bold text-[10px] text-slate-800 dark:text-slate-200 leading-snug mb-1.5 line-clamp-2">{item.title}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 line-clamp-1">{item.author}</span>
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

export default InfographicPanel;
