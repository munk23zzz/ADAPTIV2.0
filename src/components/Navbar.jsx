import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 dark:bg-black/50 backdrop-blur-lg border-b border-white/10 shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl">
            <img 
              src="assets/icons/darkIcon.png" 
              alt="ADAPTIV Logo" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`} 
            />
            <img 
              src="assets/icons/lightIcon.png" 
              alt="ADAPTIV Logo" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${!isDark ? 'opacity-100' : 'opacity-0'}`} 
            />
          </div>
          <span className="font-orbitron font-bold text-xl tracking-widest text-slate-900 dark:text-white group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
            ADAPTIV
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#fitur" className="text-sm font-medium hover:text-primary-dark transition-colors">Fitur</a>
          <a href="#carakerja" className="text-sm font-medium hover:text-primary-dark transition-colors">Cara Kerja</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary-dark transition-colors">Harga</a>
          <a href="#testimoni" className="text-sm font-medium hover:text-primary-dark transition-colors">Testimoni</a>
          
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
          
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors" aria-label="Toggle Theme">
            <span className="material-icons-round">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>
          
          <Link to="/register" className="neon-btn">
            Mulai Gratis
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
            <span className="material-icons-round">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-800 dark:text-white">
            <span className="material-icons-round">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0f] border-b border-slate-200 dark:border-white/10 shadow-xl py-4 px-4 flex flex-col gap-4">
          <a href="#fitur" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">Fitur</a>
          <a href="#carakerja" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">Cara Kerja</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">Harga</a>
          <a href="#testimoni" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">Testimoni</a>
          <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="neon-btn text-center mt-2">Mulai Gratis</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
