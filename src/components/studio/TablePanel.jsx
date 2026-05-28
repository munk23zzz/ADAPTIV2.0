import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tables } from '../../data/chatMockData';

const TablePanel = ({ sessionKey, title, closeStudio }) => {
  const activeList = tables[sessionKey] || [];
  
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('Semua');

  if (!activeList.length) {
    return (
      <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117] items-center justify-center text-slate-400 gap-3">
        <span className="material-icons-round text-4xl">table_view</span>
        <p className="text-sm font-bold">Belum ada tabel data untuk sesi ini.</p>
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
      <div className="shrink-0 bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="material-icons-round text-white text-[16px]">table_view</span>
          </div>
          <div>
            <p className="text-white/70 text-[9px] font-bold uppercase tracking-widest">Studio · Tabel Data</p>
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
            <span className="bg-white/20 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest">{activeList.length} TABEL</span>
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
            {/* Table Viewer Container */}
            <div className="p-4 bg-slate-100 dark:bg-[#121620] border-b border-slate-200 dark:border-white/5 flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-full bg-white dark:bg-[#1a2030] rounded-xl shadow-lg border border-slate-200 dark:border-white/10 overflow-hidden">
                {/* Table Header Details */}
                <div 
                  className="px-4 py-3 border-b border-slate-100 dark:border-white/10 flex items-center gap-3"
                  style={{ backgroundColor: `${selected.topicColor}10` }}
                >
                   <span className="material-icons-round text-[24px]" style={{ color: selected.topicColor }}>{selected.icon}</span>
                   <h2 className="font-bold text-sm text-slate-800 dark:text-slate-100">{selected.title}</h2>
                </div>
                
                {/* Actual Table Render */}
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-left text-xs whitespace-nowrap">
                    <thead className="bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 font-bold">
                      <tr>
                        {selected.columns.map((col, i) => (
                          <th key={i} className="px-4 py-2 border-b border-slate-100 dark:border-white/5 uppercase tracking-wider text-[10px]">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300 font-medium">
                      {selected.rows.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                          {row.map((cell, j) => (
                            <td key={j} className="px-4 py-2.5">
                              {/* Simple styling trick if cell contains green check or red cross */}
                              {cell.includes('✅') ? (
                                <span className="text-emerald-600 dark:text-emerald-400 font-bold">{cell}</span>
                              ) : cell.includes('❌') ? (
                                <span className="text-rose-600 dark:text-rose-400">{cell}</span>
                              ) : (
                                cell
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Footer status */}
                <div className="px-4 py-2 bg-slate-50 dark:bg-black/20 text-right border-t border-slate-100 dark:border-white/5">
                   <p className="text-slate-400 dark:text-slate-500 text-[9px] font-extrabold uppercase tracking-widest">{selected.rows.length} Baris Data</p>
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
                    <span className="material-icons-round text-[14px]">person</span>
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
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-[11px] font-bold transition-colors shadow-sm shadow-blue-500/20">
                  <span className="material-icons-round text-[15px]">file_download</span> Unduh CSV
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#1a2030] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors text-[11px] font-bold">
                  <span className="material-icons-round text-[15px]">content_copy</span> Salin Data
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
                      ? 'bg-blue-500 text-white shadow-sm shadow-blue-500/30'
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
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelected(item)}
                  className="w-full text-left rounded-xl overflow-hidden border border-slate-200 dark:border-white/8 bg-white dark:bg-[#1a2030] hover:border-blue-300 dark:hover:border-blue-500/40 transition-all hover:shadow-md hover:shadow-blue-500/10 group flex items-stretch"
                >
                  {/* Thumbnail Icon */}
                  <div
                    className="w-20 shrink-0 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.topicColor}, ${item.topicColor}aa)`
                    }}
                  >
                    <span className="material-icons-round text-white/90 text-[28px] group-hover:scale-110 transition-transform">{item.icon}</span>
                  </div>

                  {/* Info */}
                  <div className="p-3 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="text-[8px] font-extrabold px-1.5 py-0.5 rounded-sm uppercase tracking-wider"
                        style={{ background: `${item.topicColor}15`, color: item.topicColor }}
                      >
                        {item.topic}
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 flex items-center gap-1">
                        <span className="material-icons-round text-[11px]">view_list</span>
                        {item.rows.length}
                      </span>
                    </div>
                    <p className="font-bold text-xs text-slate-800 dark:text-slate-200 leading-snug line-clamp-1">{item.title}</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">{item.desc}</p>
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

export default TablePanel;
