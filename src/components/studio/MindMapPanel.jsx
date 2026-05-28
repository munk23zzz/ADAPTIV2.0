import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mindMaps } from '../../data/chatMockData';

const MindMapPanel = ({ sessionKey, title, closeStudio }) => {
  const activeMindMap = mindMaps[sessionKey] || null;
  const [mmSelected, setMmSelected] = useState(null);

  if (!activeMindMap) {
    return (
      <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117] items-center justify-center text-slate-400 gap-3 relative">
        <button onClick={closeStudio} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-slate-500 dark:text-slate-400 transition-colors z-10">
          <span className="material-icons-round text-[18px]">close</span>
        </button>
        <span className="material-icons-round text-4xl">account_tree</span>
        <p className="text-sm font-bold text-center px-4">Belum ada peta pikiran untuk sesi ini.</p>
      </div>
    );
  }

  const mmData = activeMindMap;
  const CX = 200, CY = 200, BRANCH_R = 115;
  const toRad = (deg) => (deg * Math.PI) / 180;

  const branches = mmData.branches.map((branch, i) => {
    const angle = toRad((i * 360) / mmData.branches.length - 90);
    return {
      ...branch,
      x: CX + BRANCH_R * Math.cos(angle),
      y: CY + BRANCH_R * Math.sin(angle),
      angle
    };
  });

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117]">
      {/* Gradient Header */}
      <div className="shrink-0 bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="material-icons-round text-white text-[16px]">account_tree</span>
          </div>
          <div>
            <p className="text-white/70 text-[9px] font-bold uppercase tracking-widest">Studio · Peta Pikiran</p>
            <p className="text-white font-extrabold text-xs leading-tight">{title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white/20 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest">{mmData.branches.length} TOPIK</span>
          <button onClick={closeStudio} className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <span className="material-icons-round text-[15px]">close</span>
          </button>
        </div>
      </div>

      {/* SVG Mind Map */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 flex items-center justify-center p-2">
          <svg
            viewBox="0 0 400 400"
            className="w-full max-w-[360px]"
            style={{ maxHeight: '340px' }}
          >
            <defs>
              <radialGradient id="mmCenterGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f97316" />
              </radialGradient>
            </defs>

            {/* Branch connections */}
            {branches.map((b, i) => (
              <path
                key={`path-${i}`}
                d={`M ${CX} ${CY} Q ${CX + (b.x - CX) * 0.5} ${CY + (b.y - CY) * 0.1} ${b.x} ${b.y}`}
                stroke={b.color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            ))}

            {/* Branch nodes */}
            {branches.map((b, i) => {
              const isSelected = mmSelected === i;
              const r = 32;
              return (
                <g key={`node-${i}`} onClick={() => setMmSelected(isSelected ? null : i)} style={{ cursor: 'pointer' }}>
                  <circle
                    cx={b.x} cy={b.y} r={r}
                    fill={isSelected ? b.color : `${b.color}22`}
                    stroke={b.color}
                    strokeWidth={isSelected ? 2.5 : 1.5}
                    className="transition-all duration-200"
                  />
                  {/* Icon area */}
                  <text
                    x={b.x} y={b.y - 10}
                    textAnchor="middle"
                    fontSize="12"
                    fill={isSelected ? 'white' : b.color}
                    fontFamily="Material Icons Round"
                    dominantBaseline="middle"
                  >
                    {b.icon === 'lightbulb' ? '\uE0F0' :
                     b.icon === 'people' ? '\uE7FB' :
                     b.icon === 'diamond' ? '\uEAD5' :
                     b.icon === 'leaderboard' ? '\uF20E' :
                     b.icon === 'account_balance' ? '\uE84F' :
                     '\uEA3C'}
                  </text>
                  {/* Label lines */}
                  {b.label.split('\n').map((line, li) => (
                    <text
                      key={li}
                      x={b.x}
                      y={b.y + 4 + (li * 10)}
                      textAnchor="middle"
                      fontSize="7.5"
                      fontWeight="700"
                      fill={isSelected ? 'white' : b.color}
                      fontFamily="Inter, sans-serif"
                    >{line}</text>
                  ))}
                </g>
              );
            })}

            {/* Center node */}
            <circle cx={CX} cy={CY} r="38" fill="url(#mmCenterGrad)" filter="url(#shadow)" />
            <circle cx={CX} cy={CY} r="38" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
            <text x={CX} y={CY - 6} textAnchor="middle" fontSize="8.5" fontWeight="800" fill="white" fontFamily="Inter, sans-serif">Creativity &amp;</text>
            <text x={CX} y={CY + 6} textAnchor="middle" fontSize="8.5" fontWeight="800" fill="white" fontFamily="Inter, sans-serif">Innovation</text>
          </svg>
        </div>

        {/* Detail Card */}
        <div className="shrink-0 px-4 pb-3" style={{ minHeight: '140px' }}>
          <AnimatePresence mode="wait">
            {mmSelected !== null ? (
              <motion.div
                key={mmSelected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.18 }}
                className="rounded-2xl border overflow-hidden"
                style={{
                  borderColor: `${branches[mmSelected].color}40`,
                  background: `${branches[mmSelected].color}0a`
                }}
              >
                {/* Card Header */}
                <div className="px-4 py-3 flex items-center gap-3" style={{ background: `${branches[mmSelected].color}18` }}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: branches[mmSelected].color }}>
                    <span className="material-icons-round text-white text-[16px]">{branches[mmSelected].icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-extrabold text-[13px] text-slate-900 dark:text-white leading-tight">{branches[mmSelected].labelShort}</p>
                    <p className="text-[10px] font-bold opacity-60" style={{ color: branches[mmSelected].color }}>{branches[mmSelected].session}</p>
                  </div>
                  <button onClick={() => setMmSelected(null)} className="ml-auto w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                    <span className="material-icons-round text-[14px]">close</span>
                  </button>
                </div>

                {/* Description */}
                <div className="px-4 py-2">
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mb-2">{branches[mmSelected].desc}</p>
                  {/* Sub-topics */}
                  <div className="flex flex-wrap gap-1.5">
                    {branches[mmSelected].children.map((child, ci) => (
                      <span
                        key={ci}
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                        style={{ background: `${branches[mmSelected].color}18`, color: branches[mmSelected].color }}
                      >
                        {child}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-4 text-center"
              >
                <span className="material-icons-round text-2xl text-slate-300 dark:text-slate-600 mb-1">touch_app</span>
                <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500">Klik node untuk melihat detail topik</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MindMapPanel;
