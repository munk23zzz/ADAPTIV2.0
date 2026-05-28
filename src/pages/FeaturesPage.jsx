import React from 'react';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const FeaturesPage = ({ isDark, toggleTheme }) => {
  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32 relative z-10">
        <div className="pt-10"></div> {/* Spacer so it's not right under navbar */}
        <Features />
        
        {/* Final CTA */}
        <section className="text-center py-20 relative rounded-3xl overflow-hidden glass-card">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-secondary-light/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 z-0"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl orbitron font-bold">Cobain Semua Fitur ADAPTIV</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Tingkatkan efisiensi belajarmu dengan fitur-fitur pintar berbasis AI.
            </p>
            <div className="pt-4">
              <Link to="/register" className="neon-btn text-lg px-8 py-4">
                Daftar Gratis — Mulai Sekarang
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FeaturesPage;
