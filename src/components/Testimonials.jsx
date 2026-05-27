import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Data Testimoni
const testimonials = [
  {
    id: 1,
    quote: "ADAPTIV ngubah 200 halaman tesis jadi 40 kartu belajar dalam 2 menit. Saya lulus sidang TA dengan nilai A.",
    author: "Rizky A.",
    role: "Teknik Informatika UI",
    initials: "RA",
    color: "from-blue-500 to-indigo-400",
    shadow: "shadow-blue-500/30"
  },
  {
    id: 2,
    quote: "Gue bisa tanya materi spesifik dari buku guru sambil di kereta. AI-nya gak pernah jawab ngawur karena kunci sama PDF gue.",
    author: "Sarah N.",
    role: "SMA 8 Jakarta, UTBK 780",
    initials: "SN",
    color: "from-rose-500 to-rose-400",
    shadow: "shadow-rose-500/30"
  },
  {
    id: 3,
    quote: "Mode ringkasan audio sangat luar biasa. Saya bisa memahami 3 jurnal penelitian sambil lari pagi.",
    author: "Dimas R.",
    role: "S2 Manajemen, FEUI",
    initials: "DR",
    color: "from-teal-500 to-teal-400",
    shadow: "shadow-teal-500/30"
  },
  {
    id: 4,
    quote: "Kuis otomatisnya membantu banget buat uji pemahaman sebelum ujian semester. Nilai kalkulus naik dari C ke A!",
    author: "Aditya K.",
    role: "Teknik Elektro, ITB",
    initials: "AK",
    color: "from-amber-500 to-amber-400",
    shadow: "shadow-amber-500/30"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play: Bergerak ke kanan lebih cepat (2.5 detik)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      // Logic bergerak ke KANAN: index berkurang. Kalau udah mentok 0, balik ke ujung.
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }, 2500);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    // Responsive Background (Light/Dark Mode)
    <section id="testimoni" className="py-24 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-50 min-h-[80vh] flex flex-col justify-center overflow-hidden relative transition-colors duration-500">

      {/* Premium Background Glows (Adjusted for Light/Dark) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-300/30 dark:bg-blue-600/20 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-300/30 dark:bg-purple-600/20 blur-[150px] rounded-full pointer-events-none translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-300/30 dark:bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/50 text-blue-600 dark:text-blue-400 font-semibold text-sm border border-blue-200 dark:border-blue-500/20 mb-6 backdrop-blur-md shadow-sm dark:shadow-lg"
        >
          <span className="material-icons-round text-sm">auto_awesome</span>
          Kisah Sukses
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4"
        >
          Kata Mereka yang <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Sudah Lulus</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
        >
          Bergabunglah dengan ribuan pelajar lain yang telah membuktikan efektivitas belajar bersama ADAPTIV.
        </motion.p>
      </div>

      {/* Area Carousel */}
      <div
        className="relative w-full max-w-6xl mx-auto h-[450px] md:h-[400px] flex justify-center items-center px-4 perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {testimonials.map((testimonial, index) => {
          // --- LOGIKA MENGHITUNG POSISI (OFFSET) ---
          const total = testimonials.length;
          let offset = (index - currentIndex) % total;

          // Membuat sirkulasi (loop) tanpa ujung
          if (offset > Math.floor(total / 2)) offset -= total;
          if (offset < -Math.floor(total / 2)) offset += total;

          const isActive = offset === 0;

          return (
            <motion.div
              key={testimonial.id}
              className="absolute w-full max-w-[320px] md:max-w-xl cursor-grab active:cursor-grabbing"
              // State awal agar tidak berkedip
              initial={false}
              // Animasikan properti berdasarkan nilai offset
              animate={{
                x: `calc(${offset * 105}%)`,
                scale: isActive ? 1 : 0.85,
                filter: isActive ? 'blur(0px)' : 'blur(4px) brightness(0.9)',
                opacity: isActive ? 1 : Math.abs(offset) === 1 ? 0.6 : 0,
                zIndex: isActive ? 10 : 5 - Math.abs(offset),
                // Menambahkan efek 3D rotasi
                rotateY: offset * -15
              }}
              // Durasi dan kehalusan animasi
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}

              // Memungkinkan user mengklik kartu di samping untuk membawanya ke tengah
              onClick={() => setCurrentIndex(index)}
            >
              {/* Desain Kartu Testimoni */}
              <div className={`relative bg-white/80 dark:bg-slate-900/60 backdrop-blur-2xl border ${isActive ? 'border-blue-400 dark:border-blue-500/40 shadow-[0_15px_40px_-10px_rgba(59,130,246,0.3)] dark:shadow-2xl' : 'border-slate-200 dark:border-slate-700/50 shadow-xl dark:shadow-none'} p-8 md:p-10 rounded-3xl transition-colors duration-500 overflow-hidden group`}>

                {/* Highlight garis atas */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color} ${isActive ? 'opacity-100' : 'opacity-40 dark:opacity-70'} transition-opacity`}></div>

                {/* Background ambient glow dalam kartu aktif */}
                {isActive && (
                  <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${testimonial.color} opacity-10 dark:opacity-20 blur-3xl rounded-full`}></div>
                )}

                <div className="flex gap-1.5 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={false}
                      animate={{ scale: isActive ? [1, 1.2, 1] : 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      <svg className="w-5 h-5 fill-current drop-shadow-[0_0_4px_rgba(251,191,36,0.3)] dark:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </motion.div>
                  ))}
                </div>

                <p className={`text-lg md:text-xl ${isActive ? 'text-slate-800 dark:text-white' : 'text-slate-500 dark:text-slate-300'} mb-8 leading-relaxed font-medium min-h-[120px] md:min-h-[100px] transition-colors duration-500 relative z-10`}>
                  <span className="text-4xl font-serif text-blue-300 dark:text-blue-500/30 absolute -top-4 -left-4">"</span>
                  {testimonial.quote}
                  <span className="text-4xl font-serif text-blue-300 dark:text-blue-500/30 absolute -bottom-6 ml-1">"</span>
                </p>

                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-xl shadow-lg ${testimonial.shadow} ring-2 ring-white/50 dark:ring-white/10`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-lg">{testimonial.author}</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Carousel Dots Indicators */}
      <div className="flex justify-center gap-3 mt-8 relative z-10">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-500 ease-out ${idx === currentIndex
              ? 'w-10 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:shadow-[0_0_12px_rgba(59,130,246,0.8)]'
              : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-500'
              }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
