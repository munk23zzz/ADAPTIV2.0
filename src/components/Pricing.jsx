import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="text-center mb-20 relative z-10 px-4">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold text-sm border border-blue-100 dark:border-blue-500/20 mb-8"
        >
          <span className="material-icons-round text-sm">workspace_premium</span>
          Pilihan Paket
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black font-['Plus_Jakarta_Sans'] tracking-tight text-slate-900 dark:text-white mb-6"
        >
          Investasi <span className="text-blue-600 dark:text-blue-400">Masa Depan</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10"
        >
          Bebaskan potensimu dengan AI. Pilih paket yang sesuai dengan kebutuhan belajarmu.
        </motion.p>

        {/* Premium Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center justify-center p-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 relative shadow-inner"
        >
          <button
            onClick={() => setIsAnnual(false)}
            className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 z-10 flex items-center justify-center ${!isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
          >
            {!isAnnual && (
              <motion.div
                layoutId="pricing-pill"
                className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">Bulanan</span>
          </button>

          <button
            onClick={() => setIsAnnual(true)}
            className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 z-10 flex items-center justify-center gap-2 ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
          >
            {isAnnual && (
              <motion.div
                layoutId="pricing-pill"
                className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">Tahunan</span>
            <span className={`relative z-10 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-colors ${isAnnual ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400' : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400'}`}>
              -20%
            </span>
          </button>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Free Plan */}
        <motion.article
          variants={item}
          whileHover={{ y: -4 }}
          className="bg-white dark:bg-slate-800 p-8 flex flex-col relative group border border-slate-200 dark:border-slate-700 transition-all duration-300 rounded-3xl shadow-sm hover:shadow-md"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform duration-300 transform group-hover:scale-110">
            <span className="material-icons-round text-8xl text-slate-500">eco</span>
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">Gratis</h3>
            <div className="text-4xl font-black mb-4 flex items-end gap-1 text-slate-900 dark:text-white">
              Rp 0<span className="text-base text-slate-500 font-medium mb-1">/bln</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8 h-12 text-sm">Cicipi kecerdasan AI untuk tugas ringanmu.</p>

            <ul className="space-y-4 mb-10 flex-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3"><span className="material-icons-round text-blue-500 text-lg shrink-0">check_circle</span> <span>50 File Upload</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-blue-500 text-lg shrink-0">check_circle</span> <span>Basic AI Tutor</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-blue-500 text-lg shrink-0">check_circle</span> <span>Kartu Belajar Standar</span></li>
              <li className="flex items-start gap-3 text-slate-400 dark:text-slate-600"><span className="material-icons-round text-lg shrink-0 opacity-50">remove_circle_outline</span> <span>Mode Ringkasan Audio</span></li>
              <li className="flex items-start gap-3 text-slate-400 dark:text-slate-600"><span className="material-icons-round text-lg shrink-0 opacity-50">remove_circle_outline</span> <span>Peta Pikiran Cerdas</span></li>
            </ul>

            <Link to="/register" className="block text-center w-full py-3.5 rounded-xl font-semibold border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mt-auto relative z-10">
              Mulai Gratis
            </Link>
          </div>
        </motion.article>

        {/* Pro Plan (The Star) */}
        <motion.div
          variants={item}
          whileHover={{ y: -8 }}
          className="relative scale-100 md:scale-105 z-20 transition-all duration-300 rounded-3xl group"
        >
          <article className="relative h-full p-8 flex flex-col bg-white dark:bg-slate-800 border-2 border-blue-600 dark:border-blue-500 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">

            <div className="absolute top-0 inset-x-0 mx-auto w-max -translate-y-px px-4 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-b-xl shadow-sm uppercase tracking-widest">
              Paling Populer
            </div>

            <div className="relative z-10 flex flex-col h-full mt-2">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Pro</h3>
              <div className="text-4xl font-black mb-1 text-slate-900 dark:text-white flex items-end gap-1">
                Rp {isAnnual ? '119' : '149'}k<span className="text-base text-slate-500 font-medium mb-1">/bln</span>
              </div>
              <div className="h-4 mb-4 text-xs font-semibold text-emerald-500">
                {isAnnual ? 'Ditagih Rp 1.428.000 per tahun' : ''}
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-8 h-12 text-sm">Untuk pelajar yang haus akan efisiensi maksimal.</p>

              <ul className="space-y-4 mb-10 flex-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <li className="flex items-start gap-3"><span className="material-icons-round text-blue-500 text-lg shrink-0">stars</span> <span>File Tanpa Batas</span></li>
                <li className="flex items-start gap-3"><span className="material-icons-round text-blue-500 text-lg shrink-0">psychology</span> <span>AI Adaptiv Lanjutan (Pro)</span></li>
                <li className="flex items-start gap-3"><span className="material-icons-round text-blue-500 text-lg shrink-0">audio_file</span> <span>Ringkasan Audio (20 Jam/bln)</span></li>
                <li className="flex items-start gap-3"><span className="material-icons-round text-blue-500 text-lg shrink-0">account_tree</span> <span>Peta Pikiran Cerdas</span></li>
                <li className="flex items-start gap-3"><span className="material-icons-round text-blue-500 text-lg shrink-0">quiz</span> <span>Kuis Adaptif Tanpa Batas</span></li>
              </ul>

              <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full py-3.5 rounded-xl text-center mt-auto block transition-colors shadow-sm">
                Pilih Pro Sekarang
              </Link>
            </div>
          </article>
        </motion.div>

        {/* Master Plan */}
        <motion.article
          variants={item}
          whileHover={{ y: -4 }}
          className="bg-white dark:bg-slate-800 p-8 flex flex-col relative group border border-slate-200 dark:border-slate-700 transition-all duration-300 rounded-3xl shadow-sm hover:shadow-md"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform duration-300 transform group-hover:scale-110">
            <span className="material-icons-round text-8xl text-purple-500">workspace_premium</span>
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Master</h3>
            <div className="text-4xl font-black mb-1 flex items-end gap-1 text-slate-900 dark:text-white">
              Rp {isAnnual ? '239' : '299'}k<span className="text-base text-slate-500 font-medium mb-1">/bln</span>
            </div>
            <div className="h-4 mb-4 text-xs font-semibold text-emerald-500">
              {isAnnual ? 'Ditagih Rp 2.868.000 per tahun' : ''}
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-8 h-12 text-sm">Level tertinggi untuk performa akademik elite.</p>

            <ul className="space-y-4 mb-10 flex-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3"><span className="material-icons-round text-purple-500 text-lg shrink-0">check_circle</span> <span>Semua fitur Pro</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-purple-500 text-lg shrink-0">bolt</span> <span>Akses Prioritas Server AI</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-purple-500 text-lg shrink-0">tune</span> <span>Custom AI Study Persona</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-purple-500 text-lg shrink-0">video_camera_front</span> <span>Pembuatan Konten Video</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-purple-500 text-lg shrink-0">new_releases</span> <span>Akses Awal Fitur Baru</span></li>
            </ul>

            <Link to="/register" className="block text-center w-full py-3.5 rounded-xl font-semibold border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mt-auto relative z-10">
              Jadi Master
            </Link>
          </div>
        </motion.article>

      </motion.div>
    </section>
  );
};

export default Pricing;
