import React from 'react';
import { motion } from 'framer-motion';

const TrustBlock = () => {
  return (
    <section className="py-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Table */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold text-sm border border-blue-100 dark:border-blue-500/20 mb-6">
              <span className="material-icons-round text-sm">security</span>
              Keamanan Data
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-['Plus_Jakarta_Sans'] mb-6 leading-tight text-slate-900 dark:text-white">
              AI yang <span className="text-blue-600 dark:text-blue-400">Tahu Batasnya</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Dengan teknologi pencarian materi pintar (RAG), ADAPTIV memberikan jawaban yang 100% terkunci pada dokumenmu sendiri. Tidak ada ruang untuk halusinasi.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                  <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Aspek</th>
                  <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">AI Umum</th>
                  <th className="p-4 font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-t-2 border-blue-600 dark:border-blue-400">
                    ADAPTIV
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="p-4 font-medium text-slate-700 dark:text-slate-300">Akurasi Kurikulum</td>
                  <td className="p-4 text-rose-500 flex items-center gap-1.5"><span className="material-icons-round text-base">warning</span> Tidak Terjamin</td>
                  <td className="p-4 text-emerald-500 font-bold bg-blue-50/30 dark:bg-blue-500/5"><div className="flex items-center gap-1.5"><span className="material-icons-round text-base">check_circle</span> 100% Terkunci</div></td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="p-4 font-medium text-slate-700 dark:text-slate-300">Risiko Halusinasi</td>
                  <td className="p-4 text-rose-500 flex items-center gap-1.5"><span className="material-icons-round text-base">error</span> Tinggi</td>
                  <td className="p-4 text-emerald-500 font-bold bg-blue-50/30 dark:bg-blue-500/5"><div className="flex items-center gap-1.5"><span className="material-icons-round text-base">gpp_good</span> Nol</div></td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="p-4 font-medium text-slate-700 dark:text-slate-300">Sumber Jawaban</td>
                  <td className="p-4 text-amber-500 flex items-center gap-1.5"><span className="material-icons-round text-base">public</span> Internet Random</td>
                  <td className="p-4 text-blue-500 dark:text-blue-400 font-bold bg-blue-50/30 dark:bg-blue-500/5"><div className="flex items-center gap-1.5"><span className="material-icons-round text-base">folder_special</span> Dokumen Pribadi</div></td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="p-4 font-medium text-slate-700 dark:text-slate-300">Kecocokan Ujian</td>
                  <td className="p-4 text-rose-500 flex items-center gap-1.5"><span className="material-icons-round text-base">close</span> Berisiko</td>
                  <td className="p-4 text-emerald-500 font-bold bg-blue-50/30 dark:bg-blue-500/5"><div className="flex items-center gap-1.5"><span className="material-icons-round text-base">verified</span> Sangat Aman</div></td>
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
          className="relative h-[400px] md:h-[450px] w-full flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl flex flex-col justify-center items-center gap-8 md:gap-10 p-6 z-10 shadow-md">
            
            {/* RAG Nodes */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full">
              <motion.div 
                className="flex-1 w-full md:w-auto p-4 text-center font-bold text-slate-800 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm rounded-xl relative"
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1, 0.98] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="material-icons-round block text-3xl mb-2 text-indigo-500">description</span>
                Dokumenmu
              </motion.div>
              
              <div className="text-slate-400 animate-pulse rotate-90 md:rotate-0">
                <span className="material-icons-round text-3xl">arrow_forward</span>
              </div>
              
              <motion.div 
                className="flex-1 w-full md:w-auto p-4 text-center font-bold text-slate-800 dark:text-slate-200 border-2 border-blue-500 bg-white dark:bg-slate-800 shadow-sm rounded-xl relative"
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1, 0.98] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <span className="material-icons-round block text-3xl mb-2 text-blue-500">memory</span>
                Mesin RAG
              </motion.div>
              
              <div className="text-slate-400 animate-pulse rotate-90 md:rotate-0">
                <span className="material-icons-round text-3xl">arrow_forward</span>
              </div>
              
              <motion.div 
                className="flex-1 w-full md:w-auto p-4 text-center font-bold text-slate-800 dark:text-slate-200 border-2 border-cyan-500 bg-white dark:bg-slate-800 shadow-sm rounded-xl relative overflow-hidden"
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1, 0.98] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <span className="material-icons-round block text-3xl mb-2 text-cyan-500">auto_awesome</span>
                Respon Akurat
              </motion.div>
            </div>
            
            <div className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 w-full shadow-sm">
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono text-center flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                System: Retrieval-Augmented Generation (RAG) Active
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustBlock;
