import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const steps = [
  { text: "Membaca dokumen PDF...", status: "process" },
  { text: "Ekstraksi konsep kunci selesai.", status: "success" },
  { text: "Membuat kartu belajar adaptif...", status: "process" },
  { text: "Kartu siap: 24 item dibuat.", status: "success" },
  { text: "Menyiapkan kuis personal...", status: "process" },
  { text: "Sistem siap. Mari belajar! 🚀", status: "done" }
];

const TerminalTypewriter = () => {
  const [displayedSteps, setDisplayedSteps] = useState([]);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !inView) {
        setInView(true);
      }
    }, { threshold: 0.3 });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [inView]);

  useEffect(() => {
    if (!inView) return;

    if (currentStepIdx >= steps.length) {
      const timer = setTimeout(() => {
        setDisplayedSteps([]);
        setCurrentStepIdx(0);
        setShowProgressBar(false);
      }, 5000);
      return () => clearTimeout(timer);
    }

    const step = steps[currentStepIdx];
    setIsTyping(true);

    let charIdx = 0;
    const typeInterval = setInterval(() => {
      setCurrentText(step.text.substring(0, charIdx + 1));
      charIdx++;
      if (charIdx === step.text.length) {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        setDisplayedSteps(prev => [...prev, { ...step, complete: true }]);
        setCurrentText("");
        
        if (step.status === "done") {
          setTimeout(() => setShowProgressBar(true), 300);
        }

        setTimeout(() => {
          setCurrentStepIdx(prev => prev + 1);
        }, step.status === "process" ? 400 : 800);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [currentStepIdx, inView]);

  const getColor = (status) => {
    if (status === 'process') return 'text-slate-600 dark:text-slate-400';
    if (status === 'success') return 'text-emerald-600 dark:text-emerald-400';
    if (status === 'done') return 'text-blue-600 dark:text-cyan-400';
    return 'text-slate-600 dark:text-slate-400';
  };

  return (
    <div className="relative group">
      <div ref={containerRef} className="relative bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 w-full font-mono text-sm">
        
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-slate-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          </div>
          <div className="ml-2 text-xs text-slate-500 dark:text-slate-400 font-sans tracking-widest uppercase">terminal — adaptiv-core</div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 space-y-2 min-h-[260px] text-sm md:text-base">
          {displayedSteps.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-2 items-start"
            >
              <span className="text-blue-600 dark:text-blue-500 shrink-0">adaptiv@ai:~$</span>
              <span className={getColor(s.status)}>
                {s.text}
                {s.status === 'success' && <span className="font-bold ml-2 text-emerald-600 dark:text-emerald-400">✓</span>}
                {s.status === 'done' && <span className="font-bold ml-2 text-blue-600 dark:text-cyan-400">✓ DONE</span>}
              </span>
            </motion.div>
          ))}
          
          {currentStepIdx < steps.length && (
            <div className="flex gap-2 items-start">
              <span className="text-blue-600 dark:text-blue-500 shrink-0">adaptiv@ai:~$</span>
              <span className={getColor(steps[currentStepIdx].status)}>
                {currentText}
                <span className="inline-block w-2 h-4 bg-slate-400 dark:bg-slate-500 ml-1 align-middle animate-blink"></span>
              </span>
            </div>
          )}

          {/* Progress Bar */}
          {showProgressBar && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <motion.div 
                className="h-full bg-blue-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="carakerja" className="py-24 relative z-10">
      <div className="text-center mb-20 relative px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold text-sm border border-blue-100 dark:border-blue-500/20 mb-8"
        >
          <span className="material-icons-round text-sm">route</span>
          Cara Kerja
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black font-['Plus_Jakarta_Sans'] tracking-tight text-slate-900 dark:text-white mb-6"
        >
          Hanya <span className="text-blue-600 dark:text-blue-400">3 Langkah</span> Mudah
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Dari dokumen mentah menjadi pemahaman utuh dalam hitungan detik. ADAPTIV melakukan semua kerja kerasnya untukmu.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Steps */}
        <div className="relative space-y-8 pl-4 md:pl-0">

          
          {/* Step 1 */}
          <motion.div 
            className="relative flex items-start gap-6 group cursor-default"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute left-[22px] top-12 -bottom-8 w-1 bg-slate-200 dark:bg-slate-700 -z-10"></div>
            <div className="w-12 h-12 shrink-0 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm z-10 transition-transform duration-300 group-hover:scale-110">
              1
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 w-full shadow-sm group-hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Unggah Dokumen</h3>
              <p className="text-slate-600 dark:text-slate-400">Pilih materi pembelajaranmu (PDF, DOCX, TXT) dan biarkan sistem RAG kami memindai, menganalisis, dan memecah isi dokumen secara presisi.</p>
            </div>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div 
            className="relative flex items-start gap-6 group cursor-default"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute left-[22px] top-12 -bottom-8 w-1 bg-slate-200 dark:bg-slate-700 -z-10"></div>
            <div className="w-12 h-12 shrink-0 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold shadow-sm z-10 transition-transform duration-300 group-hover:scale-110">
              2
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 w-full shadow-sm group-hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">AI Mengolah Materi</h3>
              <p className="text-slate-600 dark:text-slate-400">Sistem akan mengekstraksi konsep kunci dan menyiapkannya menjadi ringkasan, kartu belajar otomatis, atau kuis adaptif.</p>
            </div>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div 
            className="relative flex items-start gap-6 group cursor-default"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold shadow-sm z-10 transition-transform duration-300 group-hover:scale-110">
              3
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 w-full shadow-sm group-hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Mulai Belajar</h3>
              <p className="text-slate-600 dark:text-slate-400">Berinteraksi dengan AI Tutormu! Tanya bagian yang sulit dimengerti, semuanya akan dijawab dengan rujukan halaman dokumenmu sendiri.</p>
            </div>
          </motion.div>
        </div>

        {/* Terminal Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-2 md:px-0 relative z-20"
        >
          {/* Decorative accents for terminal */}
          <div className="absolute -top-6 -right-6 text-slate-200 dark:text-white/5">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <TerminalTypewriter />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
