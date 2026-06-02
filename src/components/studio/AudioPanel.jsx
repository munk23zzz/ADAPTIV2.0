import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { audios } from '../../data/chatMockData';

const AudioPanel = ({ sessionKey, title, closeStudio }) => {
  const activeList = audios[sessionKey] || [];
  
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('Semua');
  const [isPlaying, setIsPlaying] = useState(false);

  if (!activeList.length) {
    return (
      <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117] items-center justify-center text-slate-400 gap-3 relative">
        <button onClick={closeStudio} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-slate-500 dark:text-slate-400 transition-colors z-10">
          <span className="material-icons-round text-[18px]">close</span>
        </button>
        <span className="material-icons-round text-4xl">audio_file</span>
        <p className="text-sm font-bold text-center px-4">Belum ada ringkasan audio untuk sesi ini.</p>
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
      <div className="shrink-0 bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="material-icons-round text-white text-[16px]">headphones</span>
          </div>
          <div>
            <p className="text-white/70 text-[9px] font-bold uppercase tracking-widest">Studio · Audio & Suara</p>
            <p className="text-white font-extrabold text-xs leading-tight">{title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {selected && (
            <button
              onClick={() => {
                setSelected(null);
                setIsPlaying(false);
              }}
              className="bg-white/20 hover:bg-white/30 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest flex items-center gap-1 transition-colors"
            >
              <span className="material-icons-round text-[11px]">arrow_back</span> Daftar
            </button>
          )}
          {!selected && (
            <span className="bg-white/20 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest">{activeList.length} AUDIO</span>
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
            {/* Audio Player Compact Visualizer */}
            <div className="p-6 bg-slate-100 dark:bg-[#121620] border-b border-slate-200 dark:border-white/5 flex flex-col items-center justify-center">
              
              {/* Spinning Disc / Audio Icon */}
              <div 
                className="w-32 h-32 rounded-full shadow-xl overflow-hidden relative mb-6 border-4 border-white dark:border-slate-800 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${selected.gradient[0]}, ${selected.gradient[1]})`
                }}
              >
                 <motion.span 
                   animate={{ rotate: isPlaying ? 360 : 0 }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                   className="material-icons-round text-white/50 text-[64px]"
                 >
                   {selected.icon}
                 </motion.span>
                 
                 {/* Center hole for disc effect */}
                 <div className="absolute w-8 h-8 bg-slate-100 dark:bg-[#121620] rounded-full border-2 border-white/20"></div>
              </div>

              {/* Player Controls */}
              <div className="w-full max-w-sm px-4 bg-white dark:bg-[#1a2030] p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10">
                 <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-2 font-bold">
                    <span>{isPlaying ? '00:15' : '00:00'}</span>
                    <span>{selected.duration}</span>
                 </div>
                 
                 {/* Waveform Mockup */}
                 <div className="w-full h-8 flex items-center gap-1 mb-4">
                    {[...Array(30)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-full ${i < 5 ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-700'}`}
                        style={{ height: `${Math.max(20, Math.random() * 100)}%` }}
                      ></div>
                    ))}
                 </div>

                 <div className="flex items-center justify-between">
                    <button className="text-slate-400 hover:text-emerald-500 transition-colors">
                       <span className="material-icons-round text-[20px]">volume_up</span>
                    </button>
                    
                    <div className="flex items-center gap-4">
                      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                         <span className="material-icons-round text-[24px]">replay_5</span>
                      </button>
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-md shadow-emerald-500/20 transition-transform hover:scale-105"
                      >
                         <span className="material-icons-round text-[28px]">{isPlaying ? 'pause' : 'play_arrow'}</span>
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                         <span className="material-icons-round text-[24px]">forward_5</span>
                      </button>
                    </div>

                    <button className="text-slate-400 hover:text-emerald-500 transition-colors">
                       <span className="material-icons-round text-[20px]">speed</span>
                    </button>
                 </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-4 flex flex-col gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span
                    className="text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider"
                    style={{ background: `${selected.topicColor}15`, color: selected.topicColor }}
                  >
                    {selected.topic}
                  </span>
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white leading-snug mb-1">{selected.title}</h3>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                  <span className="material-icons-round text-[14px]">record_voice_over</span>
                  {selected.narrator}
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl p-4 text-center">
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">{selected.desc}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 justify-center mt-2">
                <button className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#1a2030] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors text-[11px] font-bold">
                  <span className="material-icons-round text-[15px]">closed_caption</span> Lihat Teks Singkat
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
                      ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/30'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="flex-1 p-3 space-y-2.5">
              {filtered.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelected(item)}
                  className="w-full text-left rounded-xl overflow-hidden border border-slate-200 dark:border-white/8 bg-white dark:bg-[#1a2030] hover:border-emerald-300 dark:hover:border-emerald-500/40 transition-all hover:shadow-md hover:shadow-emerald-500/10 group flex items-center p-3"
                >
                  {/* Play Button Icon */}
                  <div
                    className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center relative shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${item.gradient[0]}, ${item.gradient[1]})`
                    }}
                  >
                    <span className="material-icons-round text-white text-[24px] ml-0.5">play_arrow</span>
                  </div>

                  {/* Info */}
                  <div className="ml-4 flex-1 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-bold text-[12px] text-slate-800 dark:text-slate-200 leading-snug line-clamp-1 group-hover:text-emerald-500 transition-colors">{item.title}</span>
                      <span className="text-[10px] font-mono font-bold text-slate-400">{item.duration}</span>
                    </div>
                    <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 flex items-center gap-1">
                      <span className="material-icons-round text-[12px]">record_voice_over</span>
                      {item.narrator}
                    </p>
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

export default AudioPanel;
