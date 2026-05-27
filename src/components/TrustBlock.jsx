import React from 'react';
import { motion } from 'framer-motion';

const TrustBlock = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Table */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold orbitron mb-4">AI yang Tahu Batasnya.</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Dengan teknologi pencarian materi pintar (RAG), ADAPTIV memberikan jawaban berdasarkan sumber yang jelas dari dokumenmu.
            </p>
          </div>

          <div className="glass-card overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
                  <th className="p-4 font-semibold">Aspek</th>
                  <th className="p-4 font-semibold">AI Umum</th>
                  <th className="p-4 font-semibold text-primary-light dark:text-primary-dark">ADAPTIV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/10">
                <tr>
                  <td className="p-4">Akurasi Kurikulum</td>
                  <td className="p-4 text-rose-500">⚠ Tidak Terjamin</td>
                  <td className="p-4 text-emerald-500 font-medium">✓ 100% Terkunci</td>
                </tr>
                <tr>
                  <td className="p-4">Risiko Halusinasi</td>
                  <td className="p-4 text-rose-500">✗ Tinggi</td>
                  <td className="p-4 text-emerald-500 font-medium">✓ Nol</td>
                </tr>
                <tr>
                  <td className="p-4">Sumber Jawaban</td>
                  <td className="p-4 text-amber-500">Internet Random</td>
                  <td className="p-4 text-emerald-500 font-medium">Dokumenmu sendiri</td>
                </tr>
                <tr>
                  <td className="p-4">Cocok untuk Ujian</td>
                  <td className="p-4 text-rose-500">✗ Berisiko</td>
                  <td className="p-4 text-emerald-500 font-medium">✓ Aman</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Right Side: RAG Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-64 md:h-80 w-full flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-primary-light/5 dark:bg-primary-dark/5 rounded-3xl border border-primary-light/20 dark:border-primary-dark/20 flex flex-col justify-center items-center gap-8">
            
            {/* RAG Nodes */}
            <div className="flex items-center gap-2 md:gap-4 w-full px-4 md:px-10">
              <motion.div 
                className="flex-1 glass-card p-3 md:p-4 text-center text-sm md:text-base font-semibold border-cyan-500/30"
                animate={{ borderColor: ['rgba(6,182,212,0.3)', 'rgba(6,182,212,1)', 'rgba(6,182,212,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Dokumen
              </motion.div>
              
              <div className="text-slate-400">→</div>
              
              <motion.div 
                className="flex-1 glass-card p-3 md:p-4 text-center text-sm md:text-base font-semibold border-purple-500/30"
                animate={{ borderColor: ['rgba(168,85,247,0.3)', 'rgba(168,85,247,1)', 'rgba(168,85,247,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                Pemrosesan
              </motion.div>
              
              <div className="text-slate-400">→</div>
              
              <motion.div 
                className="flex-1 glass-card p-3 md:p-4 text-center text-sm md:text-base font-semibold border-lime-500/30"
                animate={{ borderColor: ['rgba(132,204,22,0.3)', 'rgba(132,204,22,1)', 'rgba(132,204,22,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                Respon AI
              </motion.div>
            </div>
            
            <p className="text-xs text-slate-500 font-mono text-center px-8">
              System Architecture: Retrieval-Augmented Generation (RAG) Ensures 100% Truthfulness to source context.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustBlock;
