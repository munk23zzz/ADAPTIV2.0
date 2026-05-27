import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="pricing" className="py-20 relative">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary-light/10 dark:bg-primary-dark/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100/80 dark:bg-white/5 text-primary-light dark:text-primary-dark font-semibold text-sm border border-primary-light/20 dark:border-primary-dark/20 shadow-sm mb-6 backdrop-blur-sm"
        >
          <span className="material-icons-round text-sm">diamond</span>
          Pilihan Paket
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black orbitron mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent"
        >
          Pilih Paket Belajarmu
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Investasi kecil untuk masa depan yang lebih cerdas. Bebaskan potensimu dengan AI.
        </motion.p>
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
          whileHover={{ y: -10, scale: 1.02 }}
          className="glass-card p-8 flex flex-col relative group overflow-hidden border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)] transition-all duration-300 rounded-3xl"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-icons-round text-8xl text-emerald-500">eco</span>
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2">Gratis</h3>
            <div className="text-5xl font-black mb-4 flex items-end gap-1">
              Rp 0<span className="text-lg text-slate-500 font-medium mb-1">/bln</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8 h-12 text-sm">Cocok untuk mencoba fitur dasar ADAPTIV.</p>
            
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3"><span className="material-icons-round text-emerald-500 text-xl shrink-0">check_circle</span> <span>50 File Upload</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-emerald-500 text-xl shrink-0">check_circle</span> <span>Basic AI Tutor</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-emerald-500 text-xl shrink-0">check_circle</span> <span>Kartu Belajar Standar</span></li>
              <li className="flex items-start gap-3 text-slate-400 dark:text-slate-600"><span className="material-icons-round text-xl shrink-0">remove_circle_outline</span> <span>Mode Ringkasan Audio</span></li>
              <li className="flex items-start gap-3 text-slate-400 dark:text-slate-600"><span className="material-icons-round text-xl shrink-0">remove_circle_outline</span> <span>Peta Pikiran Cerdas</span></li>
            </ul>
            
            <Link to="/register" className="block text-center w-full py-4 rounded-xl font-bold border-2 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors mt-auto">
              Mulai Gratis
            </Link>
          </div>
        </motion.article>

        {/* Pro Plan */}
        <motion.article 
          variants={item} 
          whileHover={{ y: -10, scale: 1.05 }}
          className="glass-card p-8 flex flex-col relative scale-100 md:scale-105 border-primary-light/50 dark:border-primary-dark/50 shadow-[0_0_30px_rgba(14,165,233,0.15)] dark:shadow-[0_0_30px_rgba(0,245,255,0.1)] hover:shadow-[0_20px_50px_rgba(14,165,233,0.3)] z-10 bg-white/80 dark:bg-slate-900/80 rounded-3xl overflow-visible transition-all duration-300"
        >
          {/* Glowing orb background */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-primary-light/30 dark:bg-primary-dark/20 blur-3xl rounded-full pointer-events-none"></div>

          <div className="absolute top-0 inset-x-0 mx-auto w-max -translate-y-1/2 px-5 py-1.5 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white text-xs font-bold rounded-full shadow-lg shadow-primary-light/30 uppercase tracking-wider">
            Paling Populer
          </div>
          
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2 text-primary-light dark:text-primary-dark">Pro</h3>
            <div className="text-5xl font-black mb-4 text-slate-900 dark:text-white flex items-end gap-1">
              Rp 149k<span className="text-lg text-slate-500 font-medium mb-1">/bln</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8 h-12 text-sm">Untuk pelajar yang haus akan efisiensi maksimal.</p>
            
            <ul className="space-y-4 mb-10 flex-1 font-medium">
              <li className="flex items-start gap-3"><span className="material-icons-round text-primary-light dark:text-primary-dark text-xl shrink-0">stars</span> <span>File Tanpa Batas</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-primary-light dark:text-primary-dark text-xl shrink-0">psychology</span> <span>AI Gemini Lanjutan (Pro)</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-primary-light dark:text-primary-dark text-xl shrink-0">audio_file</span> <span>Ringkasan Audio</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-primary-light dark:text-primary-dark text-xl shrink-0">account_tree</span> <span>Pembuatan Peta Pikiran Cerdas</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-primary-light dark:text-primary-dark text-xl shrink-0">quiz</span> <span>Kuis Adaptif Tanpa Batas</span></li>
            </ul>
            
            <Link to="/register" className="neon-btn w-full py-4 rounded-xl font-bold text-center mt-auto block relative overflow-hidden group">
              <span className="relative z-10">Pilih Pro Sekarang</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>
        </motion.article>

        {/* Master Plan */}
        <motion.article 
          variants={item} 
          whileHover={{ y: -10, scale: 1.02 }}
          className="glass-card p-8 flex flex-col relative group overflow-hidden border border-amber-500/30 hover:border-amber-500/60 hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.2)] transition-all duration-300 rounded-3xl"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-icons-round text-8xl text-amber-500">workspace_premium</span>
          </div>
          
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2 text-amber-600 dark:text-amber-500">Master</h3>
            <div className="text-5xl font-black mb-4 flex items-end gap-1">
              Rp 299k<span className="text-lg text-slate-500 font-medium mb-1">/bln</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8 h-12 text-sm">Level tertinggi untuk performa akademik elite.</p>
            
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3"><span className="material-icons-round text-amber-500 text-xl shrink-0">check_circle</span> <span>Semua fitur Pro</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-amber-500 text-xl shrink-0">bolt</span> <span>Akses Prioritas AI</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-amber-500 text-xl shrink-0">tune</span> <span>Custom AI Study Persona</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-amber-500 text-xl shrink-0">video_camera_front</span> <span>Pembuatan Konten Video</span></li>
              <li className="flex items-start gap-3"><span className="material-icons-round text-amber-500 text-xl shrink-0">new_releases</span> <span>Akses Awal Fitur Baru</span></li>
            </ul>
            
            <Link to="/register" className="block text-center w-full py-4 rounded-xl font-bold border-2 border-amber-500/50 hover:bg-amber-50 dark:hover:bg-amber-500/10 text-amber-700 dark:text-amber-400 transition-colors mt-auto">
              Jadi Master
            </Link>
          </div>
        </motion.article>

      </motion.div>
    </section>
  );
};

export default Pricing;
