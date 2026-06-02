import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import TrustBlock from '../components/TrustBlock';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Landing = ({ isDark, toggleTheme }) => {
  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main id="main" className="pt-24 pb-16 relative z-10 overflow-hidden w-full">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <Hero />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <Features />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <HowItWorks />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <TrustBlock />
        </div>
        <div className="w-full">
          <Pricing />
        </div>
        
        {/* Testimonials spans full width */}
        <div className="w-full">
          <Testimonials />
        </div>
        
        {/* Final CTA */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <section className="text-center py-20 relative rounded-3xl overflow-hidden bg-blue-600 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 z-0"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-['Plus_Jakarta_Sans'] font-bold text-white">Mulai Belajar Lebih Cerdas Hari Ini.</h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Mulai perjalanan belajarmu dengan kekuatan AI. Gratis untuk 50 file pertama.
              </p>
              <div className="pt-4">
                <Link to="/register" className="inline-block bg-white text-blue-600 hover:bg-slate-50 font-bold px-8 py-4 rounded-xl shadow-sm transition-colors text-lg">
                  Daftar Gratis — Mulai Sekarang
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <span className="material-icons-round text-white">verified_user</span>
                  <span>Data Aman & Enkripsi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons-round text-white">credit_card_off</span>
                  <span>Tanpa Kartu Kredit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons-round text-white">bolt</span>
                  <span>Setup &lt; 2 Menit</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Landing;
