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
          Tiga Fitur <span className="text-blue-600 dark:text-blue-400">Favoritmu</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Sesuaikan gaya belajarmu dengan fitur cerdas yang siap membantu kapan saja.
        </motion.p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Feature 1: Audio (Sky Focus) */}
        <motion.article variants={item} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col hover:shadow-[0_8px_24px_rgba(37,99,235,0.10)] hover:-translate-y-1 transition-all duration-200 group">
          <div className="w-14 h-14 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-6">
            <span className="material-icons-round text-3xl">headset</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Ringkasan Audio AI</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
            Materi panjang diubah menjadi audio singkat yang mudah dipahami dan bisa didengarkan kapan saja.
          </p>
          
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1">
            <li className="flex items-start gap-2"><span className="material-icons-round text-sky-600 dark:text-sky-400 text-lg shrink-0">check_circle</span> Suara AI yang Natural</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-sky-600 dark:text-sky-400 text-lg shrink-0">check_circle</span> Bisa Tanya Jawab Langsung</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-sky-600 dark:text-sky-400 text-lg shrink-0">check_circle</span> Atur Kecepatan Audio</li>
            <li className="font-semibold text-slate-800 dark:text-slate-200 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">Cocok untuk yang suka belajar sambil mendengar</li>
          </ul>
          
          <div className="inline-flex items-center gap-2 mt-auto text-xs font-bold px-4 py-2 rounded-full bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-500/20 self-start">
            <span className="material-icons-round text-sm">hearing</span> Tipe Auditori
          </div>
        </motion.article>

        {/* Feature 2: Flashcards (Blue Focus) */}
        <motion.article variants={item} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col hover:shadow-[0_8px_24px_rgba(37,99,235,0.10)] hover:-translate-y-1 transition-all duration-200 group">
          <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
            <span className="material-icons-round text-3xl">psychology</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Kartu Belajar Pintar</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
            Poin-poin penting dari materimu dibuat otomatis menjadi kartu belajar yang lebih mudah diingat.
          </p>
          
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1">
            <li className="flex items-start gap-2"><span className="material-icons-round text-blue-600 dark:text-blue-400 text-lg shrink-0">check_circle</span> Poin Penting Dibuat Otomatis</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-blue-600 dark:text-blue-400 text-lg shrink-0">check_circle</span> Membantu Menghafal Cepat</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-blue-600 dark:text-blue-400 text-lg shrink-0">check_circle</span> Pantau Progress Belajar</li>
            <li className="font-semibold text-slate-800 dark:text-slate-200 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">Cocok untuk yang suka belajar visual</li>
          </ul>
          
          <div className="inline-flex items-center gap-2 mt-auto text-xs font-bold px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 self-start">
            <span className="material-icons-round text-sm">visibility</span> Tipe Visual
          </div>
        </motion.article>

        {/* Feature 3: Quiz (Violet Focus) */}
        <motion.article variants={item} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col hover:shadow-[0_8px_24px_rgba(37,99,235,0.10)] hover:-translate-y-1 transition-all duration-200 group">
          <div className="w-14 h-14 rounded-xl bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-6">
            <span className="material-icons-round text-3xl">edit_note</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Kuis Interaktif</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
            Latih pemahamanmu dengan soal yang dibuat langsung dari materi pembelajaranmu.
          </p>
          
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1">
            <li className="flex items-start gap-2"><span className="material-icons-round text-violet-600 dark:text-violet-400 text-lg shrink-0">check_circle</span> Soal Dibuat Otomatis</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-violet-600 dark:text-violet-400 text-lg shrink-0">check_circle</span> Tahu Jawaban Benar Langsung</li>
            <li className="flex items-start gap-2"><span className="material-icons-round text-violet-600 dark:text-violet-400 text-lg shrink-0">check_circle</span> Ketahui Materi Lemah</li>
            <li className="font-semibold text-slate-800 dark:text-slate-200 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">Cocok untuk yang suka belajar aktif</li>
          </ul>
          
          <div className="inline-flex items-center gap-2 mt-auto text-xs font-bold px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-500/20 self-start">
            <span className="material-icons-round text-sm">directions_run</span> Tipe Kinestetik
          </div>
        </motion.article>

      </motion.div>
    </section>
  );
};

export default Features;
