import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative pt-10 flex flex-col lg:flex-row items-center gap-12 z-10">

      {/* Decorative Background Elements (Floating Math/Icons) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-[10%] left-[5%] text-5xl text-blue-500/20 dark:text-blue-400/20 font-serif blur-[1px]"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          ∫
        </motion.div>
        <motion.div
          className="absolute top-[20%] right-[10%] text-4xl text-cyan-400/20 dark:text-cyan-300/20 font-serif blur-[1px]"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          ∑
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] left-[15%] text-5xl text-indigo-500/20 dark:text-indigo-400/20 font-bold blur-[2px]"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          E = mc²
        </motion.div>
        <motion.div
          className="absolute bottom-[10%] right-[20%] text-6xl text-blue-400/20 dark:text-blue-300/20 font-serif blur-[1px]"
          animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          π
        </motion.div>
        <motion.div
          className="absolute top-[40%] left-[45%] text-6xl text-cyan-500/10 dark:text-cyan-400/10 font-bold blur-[2px]"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          √x
        </motion.div>
        <motion.div
          className="absolute top-[60%] right-[40%] text-4xl text-indigo-400/15 dark:text-indigo-300/15 font-serif blur-[1px]"
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        >
          ∆
        </motion.div>
      </div>

      {/* Hero Text */}
      <motion.div
        className="flex-1 space-y-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold text-sm border border-blue-500/20 dark:border-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] backdrop-blur-md">
          <span className="text-lg">🧠</span> Asisten Belajar AI
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-['Plus_Jakarta_Sans'] font-black leading-[1.2] tracking-tight text-slate-900 dark:text-white">
          Belajar Lebih Cerdas.{' '}
          <span className="text-blue-600 dark:text-blue-400">
            Bukan Lebih Keras.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
          Unggah materi pembelajaranmu. ADAPTIV mengubahnya menjadi berbagai format belajar interaktif yang disesuaikan dengan kebutuhanmu.
        </p>

        <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span className="px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-2 backdrop-blur-sm shadow-sm"><span className="material-icons-round text-blue-500 text-sm">fact_check</span> Jawaban Akurat</span>
          <span className="px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-2 backdrop-blur-sm shadow-sm"><span className="material-icons-round text-cyan-500 text-sm">menu_book</span> Referensi Materi</span>
          <span className="px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-2 backdrop-blur-sm shadow-sm"><span className="material-icons-round text-indigo-500 text-sm">school</span> Sesuai Kurikulum</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Link to="/register" className="relative group px-8 py-4 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">Coba Gratis Sekarang <span className="material-icons-round">arrow_forward</span></span>
          </Link>
          <a href="#carakerja" className="px-8 py-4 rounded-xl font-bold text-slate-700 dark:text-slate-200 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
            Lihat Demo <span className="material-icons-round text-sm">play_arrow</span>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-200 dark:border-slate-800/50 mt-8">
          <div>
            <div className="text-3xl font-black font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white">1,200<span className="text-blue-500">+</span></div>
            <div className="text-sm text-slate-500 mt-1 font-medium">Pengguna Aktif</div>
          </div>
          <div>
            <div className="text-3xl font-black font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white">8,700<span className="text-cyan-500">+</span></div>
            <div className="text-sm text-slate-500 mt-1 font-medium">Dokumen Diproses</div>
          </div>
          <div>
            <div className="text-3xl font-black font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white">98<span className="text-indigo-500">%</span></div>
            <div className="text-sm text-slate-500 mt-1 font-medium">Keakuratan Info</div>
          </div>
        </div>
      </motion.div>

      {/* Hero Visual */}
      <motion.div
        className="flex-1 w-full max-w-lg lg:max-w-none relative mt-10 lg:mt-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative z-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="text-xs font-['Plus_Jakarta_Sans'] font-bold text-slate-500 tracking-widest">ADAPTIV WORKSPACE</div>
            <div className="text-xs text-emerald-500 font-bold flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live
            </div>
          </div>

          {/* Body */}
          <div className="p-4 md:p-5 space-y-5">

            {/* Upload Dropzone */}
            <div className="border-2 border-dashed border-blue-300 dark:border-blue-500/30 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 bg-blue-50/50 dark:bg-blue-500/5 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 cursor-pointer group">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-full text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                <span className="material-icons-round text-2xl">cloud_upload</span>
              </div>
              <div className="text-center">
                <span className="font-bold text-slate-800 dark:text-slate-200 block text-base">Seret & Lepas Dokumen</span>
                <p className="text-xs text-slate-500 mt-1">Mendukung PDF, PPTX, DOCX</p>
              </div>
            </div>

            {/* Tool Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5 shadow-sm">
                <span className="material-icons-round text-[14px]">headset</span> Audio
              </span>
              <span className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 flex items-center gap-1.5 shadow-sm">
                <span className="material-icons-round text-[14px]">psychology</span> Flashcard
              </span>
              <span className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20 flex items-center gap-1.5 shadow-sm">
                <span className="material-icons-round text-[14px]">edit_note</span> Kuis
              </span>
            </div>

            {/* Chat Mockup */}
            <div className="space-y-3 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex gap-2 justify-end">
                <div className="bg-blue-600 text-white p-2.5 rounded-2xl rounded-tr-none text-[13px] max-w-[90%] shadow-sm">
                  Jelaskan konsep buffer overflow secara sederhana
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-sm shrink-0 border border-slate-300 dark:border-slate-700 shadow-sm">👨‍🎓</div>
              </div>

              <div className="flex gap-2">
                <div className="w-9 h-9 flex items-center justify-center shrink-0">
                  <img src={`${import.meta.env.BASE_URL}assets/images/lightmode.png`} alt="AI" className="w-full h-full object-contain block dark:hidden" />
                  <img src={`${import.meta.env.BASE_URL}assets/images/darkmode.png`} alt="AI" className="w-full h-full object-contain hidden dark:block" />
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none text-[13px] max-w-[90%] shadow-lg border border-slate-100 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">Berdasarkan modulmu, buffer overflow terjadi ketika memori dipaksa menampung data yang ukurannya melebihi kapasitas (<strong className="text-blue-600 dark:text-blue-400">kapasitas buffer</strong>), sehingga data tersebut "meluber" dan menimpa memori penting lainnya.</p>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 p-2 rounded-lg border border-blue-100 dark:border-blue-500/20 w-fit">
                    <span className="material-icons-round text-[14px]">description</span>
                    <span>Modul_Sistem_Keamanan.pdf (Hlm. 12)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
