import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 1,
    title: 'Saat mempelajari materi baru yang rumit, kamu lebih mudah paham jika…',
    options: [
      { id: 'A', icon: '🖼️', text: 'Melihat diagram, grafik, atau ilustrasi visual' },
      { id: 'B', icon: '🎧', text: 'Mendengarkan penjelasan guru atau rekaman audio' },
      { id: 'C', icon: '📖', text: 'Membaca buku teks, artikel, atau modul tertulis' },
      { id: 'D', icon: '🛠️', text: 'Melakukan eksperimen, studi kasus, atau praktik langsung' }
    ]
  },
  {
    id: 2,
    title: 'Saat bersiap menghadapi ujian, metode belajar yang paling sering kamu lakukan adalah…',
    options: [
      { id: 'A', icon: '🎨', text: 'Membuat mind map (peta konsep) dengan warna-warni' },
      { id: 'B', icon: '🗣️', text: 'Berdiskusi dengan teman atau menjelaskan ulang bersuara' },
      { id: 'C', icon: '📝', text: 'Menulis ulang catatan dan membaca rangkuman berulang kali' },
      { id: 'D', icon: '🚶', text: 'Membuat simulasi ujian sendiri atau belajar sambil bergerak' }
    ]
  },
  {
    id: 3,
    title: 'Kalau kamu membeli gadget atau aplikasi baru, cara kamu mempelajarinya adalah…',
    options: [
      { id: 'A', icon: '👀', text: 'Melihat gambar dan diagram di buku panduan/tutorial' },
      { id: 'B', icon: '💬', text: 'Bertanya kepada teman yang sudah pernah memakainya' },
      { id: 'C', icon: '📑', text: 'Membaca buku petunjuk manualnya dari awal sampai akhir' },
      { id: 'D', icon: '🎮', text: 'Langsung menekan tombol-tombolnya dan mencoba sendiri' }
    ]
  },
  {
    id: 4,
    title: 'Jika kamu harus mempresentasikan sebuah tugas kelompok, kamu akan…',
    options: [
      { id: 'A', icon: '📊', text: 'Membuat slide presentasi yang penuh grafik dan gambar' },
      { id: 'B', icon: '🎙️', text: 'Menyiapkan poin singkat lalu fokus pada intonasi suara' },
      { id: 'C', icon: '📜', text: 'Menulis naskah presentasi yang sangat detail untuk dibaca' },
      { id: 'D', icon: '🤸', text: 'Membawa alat peraga atau mengajak audiens berinteraksi' }
    ]
  },
  {
    id: 5,
    title: 'Saat kamu ingin pergi ke tempat baru yang belum pernah dikunjungi, kamu biasanya…',
    options: [
      { id: 'A', icon: '🗺️', text: 'Melihat peta digital (Maps) dan memperhatikan garis rutenya' },
      { id: 'B', icon: '👂', text: 'Bertanya arah kepada orang lain secara lisan' },
      { id: 'C', icon: '🗒️', text: 'Menuliskan atau membaca instruksi arah jalan secara tertulis' },
      { id: 'D', icon: '🧭', text: 'Langsung berangkat dan mencari jalannya sambil menyetir' }
    ]
  },
  {
    id: 6,
    title: 'Hal yang paling mudah melekat di ingatanmu setelah mengikuti kelas adalah…',
    options: [
      { id: 'A', icon: '👁️', text: 'Penampilan ruangan, pakaian guru, atau slide visualnya' },
      { id: 'B', icon: '🎵', text: 'Obrolan, diskusi, atau lelucon yang dilontarkan' },
      { id: 'C', icon: '📋', text: 'Catatan, handout, atau materi tertulis yang dibagikan' },
      { id: 'D', icon: '🌟', text: 'Aktivitas, tugas, atau permainan yang dilakukan langsung' }
    ]
  },
  {
    id: 7,
    title: 'Di waktu luang, kalau kamu ingin mencari tahu tentang topik baru di internet, kamu akan…',
    options: [
      { id: 'A', icon: '📺', text: 'Menonton video penjelas animasi (seperti YouTube)' },
      { id: 'B', icon: '📻', text: 'Mendengarkan podcast atau rekaman wawancara' },
      { id: 'C', icon: '📰', text: 'Membaca artikel blog, Wikipedia, atau jurnal online' },
      { id: 'D', icon: '⚙️', text: 'Mencari tutorial yang bisa langsung dipraktikkan saat itu juga' }
    ]
  }
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showTerms, setShowTerms] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const navigate = useNavigate();



  const handleSelectOption = (questionId, optionId) => {
    setAnswers({ ...answers, [questionId]: optionId });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      finishOnboarding();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const finishOnboarding = () => {
    setShowTerms(true);
  };

  const skipOnboarding = () => {
    setShowTerms(true);
  };

  const handleAcceptTerms = () => {
    setShowTerms(false);
    setIsAnalyzing(true);
    // Simulate API call for analyzing
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate('/dashboard', { state: { showWelcome: true } });
    }, 2500);
  };

  const progressPercentage = ((currentStep + 1) / questions.length) * 100;
  
  const currentQuestion = questions[currentStep];
  const isOptionSelected = !!answers[currentQuestion.id];



  if (showTerms) {
    return (
      <div className="min-h-screen bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-2xl rounded-2xl overflow-hidden flex flex-col shadow-2xl max-h-[90vh]"
        >
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Syarat & Ketentuan</h2>
          </div>
          
          <div className="p-6 overflow-y-auto flex-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-6 custom-scrollbar">
            <p>
              Dengan menggunakan aplikasi <strong>ADAPTIV</strong>, pengguna dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku pada platform ini. ADAPTIV merupakan aplikasi pembelajaran berbasis AI yang dirancang untuk membantu pengguna dalam mencatat, merangkum materi, menyesuaikan metode belajar, serta meningkatkan efektivitas pembelajaran secara personal.
            </p>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <span className="w-1 h-5 bg-blue-600 dark:bg-blue-500 rounded-full inline-block"></span>
                Kebijakan Privasi & Penggunaan Data AI
              </h3>
              <ul className="space-y-3">
                <li><strong>Privasi Data Pengguna:</strong> ADAPTIV berkomitmen untuk menjaga keamanan dan kerahasiaan seluruh data pengguna. Dokumen, catatan, file, maupun percakapan yang diunggah ke dalam sistem hanya digunakan untuk mendukung pengalaman belajar pengguna di dalam aplikasi.</li>
                <li><strong>Penggunaan Data AI:</strong> Data dan materi yang diunggah pengguna tidak akan digunakan untuk melatih model AI publik tanpa izin pengguna. Sistem AI ADAPTIV hanya memproses data untuk memberikan rekomendasi pembelajaran yang lebih personal dan relevan.</li>
                <li><strong>Akses dan Keamanan:</strong> Riwayat pembelajaran dan dokumen pengguna bersifat pribadi dan tidak akan ditinjau secara manual oleh pihak internal, kecuali jika pengguna memberikan laporan, umpan balik, atau izin tertentu untuk keperluan evaluasi layanan.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <span className="w-1 h-5 bg-blue-600 dark:bg-blue-500 rounded-full inline-block"></span>
                Hak Cipta & Tanggung Jawab Pengguna
              </h3>
              <ul className="space-y-3">
                <li><strong>Kepemilikan Konten:</strong> Pengguna bertanggung jawab penuh atas seluruh dokumen, gambar, maupun materi yang diunggah ke dalam aplikasi. Pengguna dilarang mengunggah konten yang melanggar hak cipta, hak kekayaan intelektual, atau hukum yang berlaku.</li>
                <li><strong>Penggunaan yang Bertanggung Jawab:</strong> Pengguna wajib menggunakan ADAPTIV untuk tujuan pendidikan, pengembangan diri, dan aktivitas yang tidak melanggar hukum maupun merugikan pihak lain.</li>
                <li><strong>Konten Sensitif:</strong> Pengguna tidak diperkenankan mengunggah data yang bersifat sangat rahasia atau sensitif tanpa perlindungan tambahan, termasuk informasi medis, finansial, maupun data pribadi tertentu.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <span className="w-1 h-5 bg-blue-600 dark:bg-blue-500 rounded-full inline-block"></span>
                Batasan Penggunaan Layanan
              </h3>
              <ul className="space-y-3">
                <li><strong>Kapasitas Sistem:</strong> ADAPTIV dapat menerapkan batas ukuran file, jumlah dokumen, maupun kapasitas penyimpanan tertentu untuk menjaga stabilitas dan performa layanan.</li>
                <li><strong>Persyaratan Akun:</strong> Pengguna wajib menggunakan akun yang valid dan menjaga keamanan informasi login masing-masing. Segala aktivitas yang dilakukan melalui akun pengguna menjadi tanggung jawab pemilik akun.</li>
                <li><strong>Kebijakan Penggunaan:</strong> ADAPTIV berhak membatasi atau menghentikan akses pengguna apabila ditemukan pelanggaran terhadap syarat penggunaan, penyalahgunaan sistem, atau aktivitas yang membahayakan platform dan pengguna lain.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <span className="w-1 h-5 bg-blue-600 dark:bg-blue-500 rounded-full inline-block"></span>
                Pembaruan Layanan
              </h3>
              <p>
                ADAPTIV dapat memperbarui fitur, kebijakan, dan aturan penggunaan dari waktu ke waktu demi meningkatkan kualitas layanan dan keamanan pengguna. Pengguna disarankan untuk membaca Syarat dan Ketentuan secara berkala.
              </p>
            </div>
          </div>

          <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <label className="flex items-start gap-3 cursor-pointer group flex-1">
              <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                <input 
                  type="checkbox" 
                  className="peer appearance-none w-5 h-5 border-2 border-slate-300 dark:border-slate-600 rounded-sm checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <span className="material-icons-round text-white text-[14px] absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">check</span>
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                Saya telah membaca dan menyetujui seluruh syarat dan ketentuan aplikasi ADAPTIV.
              </span>
            </label>
            
            <button
              onClick={handleAcceptTerms}
              disabled={!termsAccepted}
              className={`shrink-0 px-6 py-3 rounded-lg font-bold transition-all ${termsAccepted ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20' : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed'}`}
            >
              Mulai Belajar
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-black flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary-light/30 dark:border-primary-dark/30 border-t-primary-light dark:border-t-primary-dark rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Menganalisis Profil Belajarmu...</h2>
          <p className="text-slate-500 dark:text-slate-400">Menyiapkan Tutor AI dan algoritma penyortiran fitur.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0f] text-slate-800 dark:text-slate-200 transition-colors duration-300 overflow-hidden flex flex-col relative z-10">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-light/10 dark:bg-primary-dark/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-light/10 dark:bg-secondary-dark/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none z-0"></div>

      <header className="w-full max-w-4xl mx-auto p-4 md:p-6 flex items-center justify-between relative z-10">
        <div className="font-orbitron font-bold text-xl tracking-widest text-primary-light dark:text-primary-dark">
          ADAPTIV
        </div>
        
        <div className="flex-1 max-w-xs mx-4">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              Langkah {currentStep + 1} dari {questions.length}
            </span>
          </div>
          <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark rounded-full transition-all duration-500" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        <button 
          onClick={skipOnboarding}
          className="text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
        >
          Lewati
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 md:p-10"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center leading-tight">
                {currentQuestion.title}
              </h1>

              <div className="space-y-4">
                {currentQuestion.options.map(option => {
                  const isSelected = answers[currentQuestion.id] === option.id;
                  return (
                    <label 
                      key={option.id}
                      className={`flex items-center p-4 md:p-5 rounded-2xl cursor-pointer transition-all border-2 ${isSelected ? 'border-primary-light dark:border-primary-dark bg-primary-light/5 dark:bg-primary-dark/10 shadow-lg shadow-primary-light/10 transform scale-[1.02]' : 'border-slate-200 dark:border-white/10 hover:border-primary-light/50 dark:hover:border-primary-dark/50 hover:bg-slate-50 dark:hover:bg-white/5'}`}
                    >
                      <input 
                        type="radio" 
                        name={`q${currentQuestion.id}`} 
                        value={option.id} 
                        className="hidden"
                        onChange={() => handleSelectOption(currentQuestion.id, option.id)}
                        checked={isSelected}
                      />
                      <span className="text-3xl mr-4 shrink-0">{option.icon}</span>
                      <span className="text-base md:text-lg font-medium text-slate-800 dark:text-slate-200">
                        <span className="font-bold mr-2 text-primary-light dark:text-primary-dark">{option.id}.</span> 
                        {option.text}
                      </span>
                      {isSelected && (
                        <div className="ml-auto w-6 h-6 rounded-full bg-primary-light dark:bg-primary-dark text-white flex items-center justify-center">
                          <span className="material-icons-round text-sm">check</span>
                        </div>
                      )}
                    </label>
                  );
                })}
              </div>

              <div className="mt-10 flex items-center justify-between">
                <button
                  onClick={handleBack}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10'}`}
                >
                  Kembali
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={!isOptionSelected}
                  className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${isOptionSelected ? 'bg-primary-light dark:bg-primary-dark text-white shadow-lg shadow-primary-light/30 hover:-translate-y-1' : 'bg-slate-200 dark:bg-white/10 text-slate-400 cursor-not-allowed'}`}
                >
                  {currentStep === questions.length - 1 ? 'Selesai & Analisis' : 'Lanjut'}
                  {currentStep !== questions.length - 1 && <span className="material-icons-round text-sm">arrow_forward</span>}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      
    </div>
  );
};

export default Onboarding;
