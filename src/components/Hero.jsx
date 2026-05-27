import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="pt-10 flex flex-col lg:flex-row items-center gap-12">
      
      {/* Hero Text */}
      <motion.div 
        className="flex-1 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark font-medium text-sm border border-primary-light/20 dark:border-primary-dark/20">
          🧠 Asisten Belajar AI
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Belajar Lebih Cerdas.<br />
          <span className="relative inline-block mt-2">
            Bukan Lebih Keras.
            <svg className="absolute w-full h-4 -bottom-1 left-0 text-primary-light dark:text-primary-dark" viewBox="0 0 300 20" preserveAspectRatio="none">
              <path d="M0,15 Q150,0 300,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
          Unggah materi pembelajaranmu. ADAPTIV mengubahnya menjadi berbagai format belajar interaktif yang disesuaikan dengan kebutuhanmu.
        </p>
        
        <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">✦ Jawaban Lebih Akurat</span>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">✦ Menggunakan Referensi Materi</span>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">✦ Sesuai Kurikulum</span>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Link to="/register" className="neon-btn px-8 py-3.5 text-lg">
            Coba Gratis Sekarang →
          </Link>
          <a href="#carakerja" className="ghost-btn px-8 py-3.5 text-lg">
            Lihat Demo ▶
          </a>
        </div>
        
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">1,200+</div>
            <div className="text-sm text-slate-500">Pengguna Aktif</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">8,700+</div>
            <div className="text-sm text-slate-500">Dokumen Diproses</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">98%</div>
            <div className="text-sm text-slate-500">Keakuratan Informasi</div>
          </div>
        </div>
      </motion.div>
      
      {/* Hero Visual */}
      <motion.div 
        className="flex-1 w-full max-w-lg lg:max-w-none relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-light/30 dark:bg-primary-dark/20 blur-[100px] rounded-full z-0"></div>
        
        {/* Mockup Window */}
        <div className="relative z-10 glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 bg-white/40 dark:bg-[#0a0a0f]/80">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-black/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="text-xs font-orbitron font-medium text-slate-500">ADAPTIV WORKSPACE</div>
            <div className="text-xs text-emerald-500 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Live
            </div>
          </div>
          
          {/* Body */}
          <div className="p-6 space-y-6">
            
            {/* Upload Dropzone */}
            <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center gap-2 bg-slate-50/50 dark:bg-white/5 transition-colors hover:border-primary-light dark:hover:border-primary-dark cursor-pointer">
              <div className="p-3 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full text-primary-light dark:text-primary-dark">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 18H6V4h7v5h5v11zM11 19v-4.17l-1.59 1.59L8 15l4-4 4 4-1.41 1.41L13 14.83V19h-2z" />
                </svg>
              </div>
              <span className="font-medium text-slate-700 dark:text-slate-200">Seret & Lepas</span>
              <p className="text-sm text-slate-500">PDF, PPT, atau catatan</p>
            </div>
            
            {/* Tool Pills */}
            <div className="flex justify-center gap-3">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 flex items-center gap-1">🎧 Ringkasan Audio</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800 flex items-center gap-1">🧠 Kartu Belajar</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300 border border-lime-200 dark:border-lime-800 flex items-center gap-1">✍️ Kuis Adaptif</span>
            </div>
            
            {/* Chat Mockup */}
            <div className="space-y-4">
              <div className="flex gap-3 justify-end">
                <div className="bg-primary-light dark:bg-primary-dark text-white dark:text-black p-3 rounded-2xl rounded-tr-none text-sm max-w-[80%] shadow-md">
                  Jelaskan konsep buffer overflow dalam C
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-lg shrink-0">👨‍🎓</div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center shrink-0 p-1">
                  <img src="assets/icons/lightIcon.png" alt="AI" className="w-full h-full object-contain" />
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm max-w-[90%] shadow-md border border-slate-100 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-300">Berdasarkan modul <strong>Sistem_Keamanan_C.pdf</strong> halaman 12, buffer overflow terjadi ketika data melebihi alokasi memori buffer, menimpa alamat return pointer.</p>
                  <div className="mt-2 flex items-center gap-1 text-xs text-slate-500 bg-slate-50 dark:bg-slate-900 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                    <span className="material-icons-round text-[14px]">description</span>
                    <span>Sumber: Sistem_Keamanan_C.pdf (Hlm. 12)</span>
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
