import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.detail || 'Gagal masuk. Periksa kembali email dan kata sandi Anda.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 relative z-10 py-12">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card w-full max-w-md p-8 md:p-10"
      >
        <h1 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
          Masuk ke <span className="text-primary-light dark:text-primary-dark">ADAPTIV</span>
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all"
              placeholder="nama@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="password">Kata sandi</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors p-1"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-icons-round text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <a href="#" className="text-sm text-primary-light dark:text-primary-dark hover:underline font-medium">Lupa kata sandi?</a>
          </div>

          <button type="submit" disabled={isLoading} className="w-full neon-btn py-3 mt-2 text-lg disabled:opacity-50">
            {isLoading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>

        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/10"></div>
          <span className="text-sm text-slate-400">atau</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/10"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 transition-colors font-medium">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z" />
          </svg>
          Masuk dengan Google
        </button>

        <p className="text-center mt-8 text-slate-600 dark:text-slate-400 text-sm">
          Baru di ADAPTIV? <Link to="/register" className="text-primary-light dark:text-primary-dark hover:underline font-medium">Buat akun →</Link>
        </p>
      </motion.main>

      <footer className="mt-12 text-center text-sm text-slate-500">
        <p>Copyright © 2026 ADAPTIV.</p>
        <p className="mt-1">All Rights Reserved. <a href="#" className="hover:underline">Perjanjian Pengguna</a>, <a href="#" className="hover:underline">Kebijakan Privasi</a></p>
      </footer>
    </div>
  );
};

export default Login;
