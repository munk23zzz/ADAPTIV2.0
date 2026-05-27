import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#030305] border-t border-slate-200 dark:border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-orbitron font-bold text-2xl tracking-widest text-slate-900 dark:text-white">
                ADAPTIV
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">
              Belajar Lebih Cerdas.<br/>
              Bukan Lebih Keras.<br/>
              Dibuat untuk pelajar Indonesia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Navigasi</h4>
            <ul className="space-y-3">
              <li><a href="#fitur" className="text-slate-600 dark:text-slate-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors">Fitur</a></li>
              <li><a href="#pricing" className="text-slate-600 dark:text-slate-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors">Harga</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors">Tentang</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors">Syarat &amp; Ketentuan</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-black transition-all">
                <span className="font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-black transition-all">
                <span className="font-bold">X</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-black transition-all">
                <span className="font-bold">IN</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 ADAPTIV by ADAPTIV Corporation.</p>
          <div className="flex gap-4 items-center">
            <span>Powered by: Google Cloud Run | Gemini API | RAG Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
