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
    <section id="fitur">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold orbitron">Tiga Fitur Belajar Favoritmu</h2>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Feature 1 */}
        <motion.article variants={item} className="glass-card p-8 flex flex-col group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
          
          <div className="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <span className="material-icons-round text-3xl">headset</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-3">🎧 Ringkasan Audio AI</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1">
            Materi panjang diubah menjadi audio singkat yang mudah dipahami dan bisa didengarkan kapan saja.
          </p>
          
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1">
            <li className="flex items-center gap-2"><span className="text-cyan-500">•</span> Suara AI yang Natural</li>
            <li className="flex items-center gap-2"><span className="text-cyan-500">•</span> Bisa Tanya Jawab Langsung</li>
            <li className="flex items-center gap-2"><span className="text-cyan-500">•</span> Atur Kecepatan Audio</li>
            <li className="font-semibold text-slate-800 dark:text-slate-200 mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">Cocok untuk yang suka belajar sambil mendengar</li>
          </ul>
          
          <div className="inline-block mt-auto text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 self-start">
            Tipe: Pembelajar Auditori
          </div>
        </motion.article>

        {/* Feature 2 */}
        <motion.article variants={item} className="glass-card p-8 flex flex-col group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
          
          <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <span className="material-icons-round text-3xl">psychology</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-3">🧠 Kartu Belajar Pintar</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1">
            Poin-poin penting dari materimu dibuat otomatis menjadi kartu belajar yang lebih mudah diingat.
          </p>
          
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1">
            <li className="flex items-center gap-2"><span className="text-purple-500">•</span> Poin Penting Dibuat Otomatis</li>
            <li className="flex items-center gap-2"><span className="text-purple-500">•</span> Membantu Menghafal Lebih Cepat</li>
            <li className="flex items-center gap-2"><span className="text-purple-500">•</span> Progress Belajar Bisa Dipantau</li>
            <li className="font-semibold text-slate-800 dark:text-slate-200 mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">Cocok untuk yang suka belajar visual</li>
          </ul>
          
          <div className="inline-block mt-auto text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 self-start">
            Tipe: Pembelajar Visual
          </div>
        </motion.article>

        {/* Feature 3 */}
        <motion.article variants={item} className="glass-card p-8 flex flex-col group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 dark:bg-lime-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
          
          <div className="w-14 h-14 rounded-2xl bg-lime-100 dark:bg-lime-900/40 text-lime-600 dark:text-lime-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(132,204,22,0.5)]">
            <span className="material-icons-round text-3xl">edit_note</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-3">✍️ Kuis Interaktif</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1">
            Latih pemahamanmu dengan soal yang dibuat langsung dari materi pembelajaranmu.
          </p>
          
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1">
            <li className="flex items-center gap-2"><span className="text-lime-500">•</span> Soal Dibuat Otomatis</li>
            <li className="flex items-center gap-2"><span className="text-lime-500">•</span> Langsung Tahu Jawaban Benar</li>
            <li className="flex items-center gap-2"><span className="text-lime-500">•</span> Ketahui Materi Belum Paham</li>
            <li className="font-semibold text-slate-800 dark:text-slate-200 mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">Cocok untuk yang suka belajar sambil latihan</li>
          </ul>
          
          <div className="inline-block mt-auto text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 self-start">
            Tipe: Pembelajar Kinestetik
          </div>
        </motion.article>

      </motion.div>
    </section>
  );
};

export default Features;
