import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="fitur" className="py-24 relative z-10">
      <div className="text-center mb-20 relative px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold text-sm border border-blue-100 dark:border-blue-500/20 mb-8"
        >
          <span className="material-icons-round text-sm">star</span>
          Fitur Unggulan
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black font-['Plus_Jakarta_Sans'] tracking-tight text-slate-900 dark:text-white mb-6"
        >
          Belajar Sesuai <span className="text-blue-600 dark:text-blue-400">Tipe VARK-mu</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Setelah tes VARK, AI akan merekomendasikan fitur terbaik sesuai tipe belajarmu — tapi keputusan tetap di tanganmu.
        </motion.p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Feature 1: Visual */}
        <motion.article variants={item} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col hover:shadow-[0_8px_24px_rgba(234,179,8,0.12)] hover:-translate-y-1 transition-all duration-200 group">
          <div className="w-14 h-14 rounded-xl bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 flex items-center justify-center mb-6 text-3xl">
            👁️
          </div>
          
          <div className="text-xs font-bold uppercase tracking-widest text-yellow-600 dark:text-yellow-400 mb-2">Tipe Visual</div>
          <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Infografis AI</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
            Materi pembelajaran diubah menjadi visual yang menarik dan mudah dipahami melalui diagram, ilustrasi, dan rangkuman visual.
          </p>
          
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1">
            <li className="flex items-start gap-2"><span className="material-icons-round text-yellow-500 dark:text-yellow-400 text-base shrink-0">check_circle</span> Visualisasi konsep otomatis</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-yellow-500 dark:text-yellow-400 text-base shrink-0">check_circle</span> Diagram &amp; ilustrasi informatif</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-yellow-500 dark:text-yellow-400 text-base shrink-0">check_circle</span> Mempermudah pemahaman konsep kompleks</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-yellow-500 dark:text-yellow-400 text-base shrink-0">check_circle</span> Cocok untuk pembelajar visual</li>
          </ul>
          
          <div className="inline-flex items-center gap-2 mt-auto text-xs font-bold px-4 py-2 rounded-full bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-500/20 self-start">
            <span className="material-icons-round text-sm">visibility</span> Visual
          </div>
        </motion.article>

        {/* Feature 2: Auditory */}
        <motion.article variants={item} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col hover:shadow-[0_8px_24px_rgba(14,165,233,0.12)] hover:-translate-y-1 transition-all duration-200 group">
          <div className="w-14 h-14 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-6 text-3xl">
            🎧
          </div>
          
          <div className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">Tipe Auditory</div>
          <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Ringkasan Audio AI</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
            Materi panjang diubah menjadi audio singkat yang mudah dipahami dan dapat didengarkan kapan saja.
          </p>
          
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1">
            <li className="flex items-start gap-2"><span className="material-icons-round text-sky-600 dark:text-sky-400 text-base shrink-0">check_circle</span> Suara AI yang natural</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-sky-600 dark:text-sky-400 text-base shrink-0">check_circle</span> Ringkasan materi otomatis</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-sky-600 dark:text-sky-400 text-base shrink-0">check_circle</span> Atur kecepatan audio</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-sky-600 dark:text-sky-400 text-base shrink-0">check_circle</span> Cocok untuk pembelajar auditori</li>
          </ul>
          
          <div className="inline-flex items-center gap-2 mt-auto text-xs font-bold px-4 py-2 rounded-full bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-500/20 self-start">
            <span className="material-icons-round text-sm">hearing</span> Auditory
          </div>
        </motion.article>

        {/* Feature 3: Read/Write */}
        <motion.article variants={item} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-200 group">
          <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 text-3xl">
            📝
          </div>
          
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">Tipe Read/Write</div>
          <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Kartu Belajar Pintar</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
            Materi pembelajaran diubah menjadi catatan terstruktur dan flashcard yang membantu proses membaca, menulis, dan mengingat informasi.
          </p>
          
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1">
            <li className="flex items-start gap-2"><span className="material-icons-round text-blue-600 dark:text-blue-400 text-base shrink-0">check_circle</span> Poin penting dibuat otomatis</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-blue-600 dark:text-blue-400 text-base shrink-0">check_circle</span> Flashcard interaktif</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-blue-600 dark:text-blue-400 text-base shrink-0">check_circle</span> Ringkasan teks yang terstruktur</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-blue-600 dark:text-blue-400 text-base shrink-0">check_circle</span> Cocok untuk pembelajar Read/Write</li>
          </ul>
          
          <div className="inline-flex items-center gap-2 mt-auto text-xs font-bold px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 self-start">
            <span className="material-icons-round text-sm">menu_book</span> Read/Write
          </div>
        </motion.article>

        {/* Feature 4: Kinesthetic */}
        <motion.article variants={item} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col hover:shadow-[0_8px_24px_rgba(139,92,246,0.12)] hover:-translate-y-1 transition-all duration-200 group">
          <div className="w-14 h-14 rounded-xl bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-6 text-3xl">
            🎯
          </div>
          
          <div className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-2">Tipe Kinesthetic</div>
          <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Kuis Interaktif</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
            Belajar melalui praktik langsung dengan kuis dan latihan yang dibuat otomatis dari materi yang dipelajari.
          </p>
          
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1">
            <li className="flex items-start gap-2"><span className="material-icons-round text-violet-600 dark:text-violet-400 text-base shrink-0">check_circle</span> Soal dibuat otomatis</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-violet-600 dark:text-violet-400 text-base shrink-0">check_circle</span> Umpan balik instan</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-violet-600 dark:text-violet-400 text-base shrink-0">check_circle</span> Identifikasi materi yang belum dikuasai</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-violet-600 dark:text-violet-400 text-base shrink-0">check_circle</span> Cocok untuk pembelajar kinestetik</li>
          </ul>
          
          <div className="inline-flex items-center gap-2 mt-auto text-xs font-bold px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-500/20 self-start">
            <span className="material-icons-round text-sm">directions_run</span> Kinesthetic
          </div>
        </motion.article>

      </motion.div>
    </section>
  );
};

export default Features;
