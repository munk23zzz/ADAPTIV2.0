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
      // Loop after some time
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
    if (status === 'process') return 'text-slate-400 dark:text-slate-300';
    if (status === 'success') return 'text-emerald-500';
    if (status === 'done') return 'text-primary-light dark:text-primary-dark';
    return 'text-slate-400';
  };

  return (
    <div ref={containerRef} className="glass-card bg-slate-900/90 dark:bg-black/90 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 dark:border-white/10 w-full font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 dark:bg-white/5 border-b border-slate-700 dark:border-white/5">
        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
        <div className="ml-2 text-xs text-slate-400 font-sans">terminal — adaptiv-core</div>
      </div>
      <div className="p-6 space-y-2 min-h-[240px]">
        {displayedSteps.map((s, i) => (
          <div key={i} className="flex gap-2 items-start">
            <span className="text-primary-light dark:text-primary-dark shrink-0">adaptiv@ai:~$</span>
            <span className={getColor(s.status)}>
              {s.text}
              {s.status === 'success' && <span className="font-bold ml-1">✓</span>}
              {s.status === 'done' && <span className="font-bold ml-2">✓ DONE</span>}
            </span>
          </div>
        ))}
        
        {currentStepIdx < steps.length && (
          <div className="flex gap-2 items-start">
            <span className="text-primary-light dark:text-primary-dark shrink-0">adaptiv@ai:~$</span>
            <span className={getColor(steps[currentStepIdx].status)}>
              {currentText}
              <span className="inline-block w-2 h-4 bg-primary-light dark:bg-primary-dark ml-1 align-middle animate-blink"></span>
            </span>
          </div>
        )}

        {showProgressBar && (
          <div className="mt-4 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="carakerja" className="py-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold orbitron">Dari PDF ke Pemahaman: 3 Langkah</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Steps */}
        <div className="relative space-y-12 pl-4 md:pl-0">
          <div className="absolute left-10 md:left-8 top-8 bottom-12 w-0.5 bg-slate-200 dark:bg-slate-800 -z-10"></div>
          
          <motion.div 
            className="relative flex items-start gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-cyan-100 dark:bg-cyan-900/50 border border-cyan-300 dark:border-cyan-700 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold z-10">1</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Unggah</h3>
              <p className="text-slate-600 dark:text-slate-400">Unggah materi pembelajaranmu dan biarkan sistem kami memproses isi dokumen secara otomatis.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative flex items-start gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-purple-100 dark:bg-purple-900/50 border border-purple-300 dark:border-purple-700 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold z-10">2</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Pilih Format</h3>
              <p className="text-slate-600 dark:text-slate-400">Pilih Ringkasan Audio, Kartu Belajar, atau Kuis. Atau biarkan AI mendeteksi gaya belajarmu secara otomatis.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative flex items-start gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-lime-100 dark:bg-lime-900/50 border border-lime-300 dark:border-lime-700 flex items-center justify-center text-lime-600 dark:text-lime-400 font-bold z-10">3</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Belajar</h3>
              <p className="text-slate-600 dark:text-slate-400">Buka sesi chat dengan AI tutormu. Tanya apa saja — dijawab dari materimu sendiri tanpa risiko halusinasi.</p>
            </div>
          </motion.div>
        </div>

        {/* Terminal Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <TerminalTypewriter />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
