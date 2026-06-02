import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const isNavbarBlurred = scrolled || !isHomePage;

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (mobileMenuOpen) setMobileMenuOpen(false);

    if (isHomePage) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isNavbarBlurred ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">

          <span className="font-['Plus_Jakarta_Sans'] font-black text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            ADAPTIV
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#fitur" onClick={(e) => handleNavClick(e, 'fitur')} className="text-sm font-medium hover:text-primary-dark transition-colors cursor-pointer">Fitur</a>
          <a href="#carakerja" onClick={(e) => handleNavClick(e, 'carakerja')} className="text-sm font-medium hover:text-primary-dark transition-colors cursor-pointer">Cara Kerja</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-sm font-medium hover:text-primary-dark transition-colors cursor-pointer">Harga</a>
          <a href="#testimoni" onClick={(e) => handleNavClick(e, 'testimoni')} className="text-sm font-medium hover:text-primary-dark transition-colors cursor-pointer">Testimoni</a>

          <div className="w-px h-6 bg-slate-300 dark:bg-slate-700"></div>

          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors" aria-label="Toggle Theme">
            <span className="material-icons-round">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>

          <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl py-4 px-4 flex flex-col gap-4">
          <a href="#fitur" onClick={(e) => handleNavClick(e, 'fitur')} className="block py-2 font-medium cursor-pointer">Fitur</a>
          <a href="#carakerja" onClick={(e) => handleNavClick(e, 'carakerja')} className="block py-2 font-medium cursor-pointer">Cara Kerja</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="block py-2 font-medium cursor-pointer">Harga</a>
          <a href="#testimoni" onClick={(e) => handleNavClick(e, 'testimoni')} className="block py-2 font-medium cursor-pointer">Testimoni</a>
          <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm text-center mt-2">Mulai Gratis</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
