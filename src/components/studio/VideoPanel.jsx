import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { studyVideos } from '../../data/chatMockData';

const VideoPanel = ({ sessionKey, title, closeStudio }) => {
  const activeVideoList = studyVideos[sessionKey] || [];
  
  const [videoSelected, setVideoSelected] = useState(null);
  const [videoFilter, setVideoFilter] = useState('Semua');

  if (!activeVideoList.length) {
    return (
      <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117] items-center justify-center text-slate-400 gap-3 relative">
        <button onClick={closeStudio} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-slate-500 dark:text-slate-400 transition-colors z-10">
          <span className="material-icons-round text-[18px]">close</span>
        </button>
        <span className="material-icons-round text-4xl">video_file</span>
        <p className="text-sm font-bold text-center px-4">Belum ada video untuk sesi ini.</p>
      </div>
    );
  }

  const filteredVids = videoFilter === 'Semua'
    ? activeVideoList
    : activeVideoList.filter(v => v.topic === videoFilter);
  const allTopics = ['Semua', ...new Set(activeVideoList.map(v => v.topic))];

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0f1117]">
      {/* Gradient Header */}
      <div className="shrink-0 bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="material-icons-round text-white text-[16px]">play_circle</span>
          </div>
          <div>
            <p className="text-white/70 text-[9px] font-bold uppercase tracking-widest">Studio · Video Belajar</p>
            <p className="text-white font-extrabold text-xs leading-tight">{title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {videoSelected && (
            <button
              onClick={() => setVideoSelected(null)}
              className="bg-white/20 hover:bg-white/30 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest flex items-center gap-1 transition-colors"
            >
              <span className="material-icons-round text-[11px]">arrow_back</span> Daftar
            </button>
          )}
          {!videoSelected && (
            <span className="bg-white/20 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest">{activeVideoList.length} VIDEO</span>
          )}
          <button onClick={closeStudio} className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <span className="material-icons-round text-[15px]">close</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* VIDEO PLAYER VIEW */}
        {videoSelected ? (
          <motion.div
            key="player"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex-1 overflow-y-auto flex flex-col"
          >
            {/* Thumbnail Player */}
            <div
              className="relative w-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${videoSelected.gradient[0]}, ${videoSelected.gradient[1]})`,
                aspectRatio: '16/9'
              }}
            >
              {/* Noise overlay */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />
              {/* Channel watermark */}
              <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-sm text-white/80 text-[9px] font-bold px-2 py-1 rounded-md">
                {videoSelected.channel}
              </div>
              {/* Duration badge */}
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                {videoSelected.duration}
              </div>
              {/* Play Button */}
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                <span className="material-icons-round text-white text-[30px] ml-1">play_arrow</span>
              </div>
              {/* Topic badge */}
              <div
                className="absolute top-3 right-3 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
              >
                {videoSelected.topic}
              </div>
            </div>

            {/* Video Info */}
            <div className="p-4 flex flex-col gap-3">
              <div>
                <h3 className="font-extrabold text-[13px] text-slate-900 dark:text-white leading-snug mb-1">{videoSelected.title}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    <span className="material-icons-round text-[12px]">subscriptions</span>
                    {videoSelected.channel}
                  </span>
                  <span className="text-slate-300 dark:text-slate-600 text-xs">·</span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    <span className="material-icons-round text-[12px]">visibility</span>
                    {videoSelected.views}
                  </span>
                  <span className="text-slate-300 dark:text-slate-600 text-xs">·</span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    <span className="material-icons-round text-[12px]">schedule</span>
                    {videoSelected.duration}
                  </span>
                </div>
              </div>

              <div
                className="rounded-xl p-3 border"
                style={{ background: `${videoSelected.topicColor}08`, borderColor: `${videoSelected.topicColor}25` }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="material-icons-round text-[14px]" style={{ color: videoSelected.topicColor }}>info</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: videoSelected.topicColor }}>Tentang Video</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{videoSelected.desc}</p>
              </div>

              {/* Related Action */}
              <button
                onClick={() => setVideoSelected(null)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-[11px] font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                <span className="material-icons-round text-[15px]">video_library</span>
                Lihat Video Lainnya
              </button>
            </div>
          </motion.div>
        ) : (
          /* VIDEO LIST VIEW */
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
                  onClick={() => setVideoFilter(topic)}
                  className={`shrink-0 px-2.5 py-1 rounded-full text-[9px] font-extrabold transition-all tracking-wide ${
                    videoFilter === topic
                      ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/30'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Video Cards */}
            <div className="flex-1 p-3 space-y-2.5">
              {filteredVids.map((vid, idx) => (
                <motion.button
                  key={vid.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setVideoSelected(vid)}
                  className="w-full text-left rounded-2xl overflow-hidden border border-slate-200 dark:border-white/8 bg-white dark:bg-[#1a2030] hover:border-emerald-300 dark:hover:border-emerald-500/40 transition-all hover:shadow-md hover:shadow-emerald-500/10 group"
                >
                  {/* Thumbnail */}
                  <div
                    className="relative w-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${vid.gradient[0]}, ${vid.gradient[1]})`,
                      height: '80px'
                    }}
                  >
                    <div className="w-9 h-9 bg-white/20 border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-icons-round text-white text-[18px] ml-0.5">play_arrow</span>
                    </div>
                    <div className="absolute bottom-1.5 right-2 bg-black/60 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                      {vid.duration}
                    </div>
                    <div className="absolute top-1.5 left-2">
                      <span className="material-icons-round text-white/70 text-[16px]">{vid.icon}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-3 py-2.5">
                    <p className="font-bold text-[11px] text-slate-800 dark:text-slate-200 leading-snug mb-1.5 line-clamp-2">{vid.title}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">{vid.channel}</span>
                      <span
                        className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full"
                        style={{ background: `${vid.topicColor}15`, color: vid.topicColor }}
                      >
                        {vid.topic}
                      </span>
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

export default VideoPanel;
