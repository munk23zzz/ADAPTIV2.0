import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  { id: 'akun', label: 'Akun', icon: 'person' },
  { id: 'preferensi', label: 'Preferensi', icon: 'tune' },
  { id: 'notifikasi', label: 'Notifikasi', icon: 'notifications' },
  { id: 'langganan', label: 'Langganan', icon: 'workspace_premium' },
];

const AVATAR_COLORS = [
  'from-primary-light to-secondary-light',
  'from-blue-500 to-cyan-400',
  'from-violet-500 to-purple-400',
  'from-rose-500 to-pink-400',
  'from-amber-500 to-orange-400',
  'from-emerald-500 to-teal-400',
  'from-indigo-500 to-blue-400',
  'from-fuchsia-500 to-pink-400',
];

// ─── Toast Component ──────────────────────────────────────────────────
const Toast = ({ message, type = 'success', visible, onDone }) => {
  useEffect(() => {
    if (visible) {
      const t = setTimeout(onDone, 3000);
      return () => clearTimeout(t);
    }
  }, [visible, onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-sm border backdrop-blur-md ${
            type === 'success'
              ? 'bg-emerald-50/90 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30 shadow-emerald-500/20'
              : type === 'error'
              ? 'bg-rose-50/90 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-500/30 shadow-rose-500/20'
              : 'bg-blue-50/90 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/30 shadow-blue-500/20'
          }`}
        >
          <span className="material-icons-round text-lg">
            {type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info'}
          </span>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Toggle Switch Component ──────────────────────────────────────────
const ToggleSwitch = ({ enabled, onToggle }) => (
  <div
    onClick={onToggle}
    className={`w-10 h-6 rounded-full flex items-center p-1 cursor-pointer transition-colors shrink-0 ${
      enabled ? 'bg-primary-light dark:bg-primary-dark' : 'bg-slate-300 dark:bg-slate-700'
    }`}
  >
    <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${enabled ? 'translate-x-4' : 'translate-x-0'}`}></div>
  </div>
);

// ─── Setting Row Component ────────────────────────────────────────────
const SettingRow = ({ icon, title, desc, children }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#1a1f2e] border border-slate-200 dark:border-white/10 rounded-2xl">
    <div className="flex items-center gap-3 flex-1 min-w-0">
      {icon && <span className="material-icons-round text-slate-400 dark:text-slate-500 text-lg shrink-0">{icon}</span>}
      <div className="min-w-0">
        <div className="font-bold text-slate-800 dark:text-white text-sm">{title}</div>
        {desc && <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{desc}</div>}
      </div>
    </div>
    <div className="ml-4 shrink-0">{children}</div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════
const SettingsModal = ({ isOpen, onClose, isDark, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState('akun');

  // ── Akun State ────────────────────────────────────
  const [fullName, setFullName] = useState('Lloyd');
  const [email, setEmail] = useState('lloyd@adaptiv.id');
  const [savedName, setSavedName] = useState('Lloyd');
  const [savedEmail, setSavedEmail] = useState('lloyd@adaptiv.id');
  const [avatarColor, setAvatarColor] = useState(0);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);

  // ── Password State ────────────────────────────────
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPw, setShowCurrentPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  // ── Security State ────────────────────────────────
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [sessions] = useState([
    { device: 'Windows PC', browser: 'Chrome', location: 'Jakarta, ID', current: true, lastActive: 'Sekarang' },
    { device: 'iPhone 14', browser: 'Safari', location: 'Jakarta, ID', current: false, lastActive: '2 jam lalu' },
  ]);

  // ── Delete Account State ──────────────────────────
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');

  // ── Preferensi State ──────────────────────────────
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [language, setLanguage] = useState('id');
  const [fontSize, setFontSize] = useState('sedang');
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // ── Notifikasi State ──────────────────────────────
  const [notifications, setNotifications] = useState({
    pengingat: true,
    liga: true,
    email: false,
    promo: false,
  });

  // ── Langganan State ───────────────────────────────
  const [showPlanComparison, setShowPlanComparison] = useState(false);
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);

  // ── Logout State ──────────────────────────────────
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // ── Toast State ───────────────────────────────────
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  const showToast = useCallback((message, type = 'success') => {
    setToast({ visible: true, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, visible: false }));
  }, []);

  // ── Derived ───────────────────────────────────────
  const profileDirty = fullName !== savedName || email !== savedEmail;
  const initials = fullName.trim() ? fullName.trim().charAt(0).toUpperCase() : 'U';

  // ── Handlers ──────────────────────────────────────
  const handleSaveProfile = () => {
    if (!fullName.trim()) {
      showToast('Nama tidak boleh kosong', 'error');
      return;
    }
    if (!email.includes('@')) {
      showToast('Format email tidak valid', 'error');
      return;
    }
    setSavedName(fullName);
    setSavedEmail(email);
    showToast('Profil berhasil diperbarui');
  };

  const handleChangePassword = () => {
    setPasswordError('');
    if (!currentPassword) {
      setPasswordError('Masukkan password saat ini');
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError('Password baru minimal 8 karakter');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('Konfirmasi password tidak cocok');
      return;
    }
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setShowPasswordSection(false);
    showToast('Kata sandi berhasil diubah');
  };

  const handleDeleteAccount = () => {
    if (deleteConfirmText === savedName) {
      setShowDeleteConfirm(false);
      onClose();
      showToast('Akun telah dihapus (simulasi)', 'info');
    }
  };

  const handleLogout = () => {
    setShowLogoutConfirm(false);
    onClose();
    window.location.hash = '#/login';
  };

  const toggleNotification = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // ── Password Input Component ──────────────────────
  const PasswordInput = ({ label, value, onChange, show, onToggle, placeholder }) => (
    <div className="grid gap-1.5">
      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">{label}</label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-slate-50 dark:bg-[#1a1f2e] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 pr-10 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-primary-light dark:focus:border-primary-dark transition-colors"
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <span className="material-icons-round text-lg">{show ? 'visibility_off' : 'visibility'}</span>
        </button>
      </div>
    </div>
  );

  // ═════════════════════════════════════════════════════════════════════
  // RENDER
  // ═════════════════════════════════════════════════════════════════════
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-4xl max-h-[85vh] bg-white dark:bg-[#121620] rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row border border-slate-200 dark:border-white/10"
            >
              {/* Close Button Mobile */}
              <button
                onClick={onClose}
                className="md:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 rounded-full z-10"
              >
                <span className="material-icons-round text-sm">close</span>
              </button>

              {/* ─── Sidebar Tabs ─────────────────────────────── */}
              <div className="w-full md:w-64 bg-slate-50/50 dark:bg-[#0a0a0f]/50 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/5 flex flex-col shrink-0">
                <div className="p-6 pb-2 hidden md:block">
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Pengaturan</h2>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">Kelola preferensi akun Anda</p>
                </div>

                <div className="flex md:flex-col overflow-x-auto md:overflow-visible p-4 md:p-3 gap-2 scrollbar-hide shrink-0 md:flex-1">
                  {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap md:whitespace-normal text-left font-medium text-sm group relative ${
                          isActive
                            ? 'text-primary-light dark:text-primary-dark bg-white dark:bg-[#1a1f2e] shadow-sm border border-slate-200/50 dark:border-white/5'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTabIndicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-primary-light dark:bg-primary-dark rounded-r-full hidden md:block"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
                        <span className={`material-icons-round text-[18px] transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>{tab.icon}</span>
                        {tab.label}
                      </button>
                    );
                  })}

                  <div className="hidden md:block flex-1"></div>

                  <button
                    onClick={() => setShowLogoutConfirm(true)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap md:whitespace-normal text-left font-medium text-sm text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 mt-auto shrink-0 group"
                  >
                    <span className="material-icons-round text-[18px] group-hover:-translate-x-1 transition-transform">logout</span>
                    Keluar
                  </button>
                </div>
              </div>

              {/* ─── Content Area ─────────────────────────────── */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 relative custom-scrollbar">
                <button
                  onClick={onClose}
                  className="hidden md:flex absolute top-6 right-6 w-8 h-8 items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 rounded-full transition-colors z-10"
                >
                  <span className="material-icons-round text-sm">close</span>
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="max-w-xl"
                  >

                    {/* ═══════════ TAB: AKUN ═══════════ */}
                    {activeTab === 'akun' && (
                      <div className="space-y-8">
                        {/* Header */}
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Profil Saya</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Informasi pribadi dan keamanan akun Anda.</p>
                        </div>

                        {/* Avatar Section */}
                        <div className="flex items-center gap-6">
                          <div className="relative group cursor-pointer" onClick={() => setShowAvatarPicker(!showAvatarPicker)}>
                            <div className={`w-20 h-20 rounded-full bg-gradient-to-tr ${AVATAR_COLORS[avatarColor]} flex items-center justify-center text-white text-3xl font-extrabold shadow-md transition-transform group-hover:scale-105`}>
                              {initials}
                            </div>
                            <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="material-icons-round text-white text-xl">photo_camera</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <button onClick={() => setShowAvatarPicker(!showAvatarPicker)} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-bold text-sm rounded-xl transition-colors">
                              Ubah Avatar
                            </button>
                          </div>
                        </div>

                        {/* Avatar Picker */}
                        <AnimatePresence>
                          {showAvatarPicker && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 bg-slate-50 dark:bg-[#1a1f2e] border border-slate-200 dark:border-white/10 rounded-2xl">
                                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Pilih Warna Avatar</div>
                                <div className="flex flex-wrap gap-3">
                                  {AVATAR_COLORS.map((color, i) => (
                                    <button
                                      key={i}
                                      onClick={() => { setAvatarColor(i); setShowAvatarPicker(false); showToast('Avatar berhasil diubah'); }}
                                      className={`w-12 h-12 rounded-full bg-gradient-to-tr ${color} flex items-center justify-center text-white font-extrabold text-lg shadow-md hover:scale-110 transition-transform ${avatarColor === i ? 'ring-2 ring-offset-2 ring-primary-light dark:ring-primary-dark dark:ring-offset-[#121620]' : ''}`}
                                    >
                                      {initials}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Profile Fields */}
                        <div className="space-y-4">
                          <div className="grid gap-1.5">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Nama Lengkap</label>
                            <input
                              type="text"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              className="w-full bg-slate-50 dark:bg-[#1a1f2e] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-primary-light dark:focus:border-primary-dark transition-colors"
                            />
                          </div>
                          <div className="grid gap-1.5">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Email</label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full bg-slate-50 dark:bg-[#1a1f2e] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-primary-light dark:focus:border-primary-dark transition-colors"
                            />
                          </div>
                        </div>

                        {/* Save Profile Button */}
                        <AnimatePresence>
                          {profileDirty && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                            >
                              <button
                                onClick={handleSaveProfile}
                                className="w-full py-2.5 bg-primary-light hover:bg-blue-600 dark:bg-primary-dark dark:hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-light/25 dark:shadow-primary-dark/25 hover:-translate-y-0.5 text-sm"
                              >
                                Simpan Perubahan
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* ── Security Section ──────────────── */}
                        <div className="pt-6 border-t border-slate-200 dark:border-white/10">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                            <span className="material-icons-round text-lg text-primary-light dark:text-primary-dark">shield</span>
                            Keamanan
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">Kata sandi dan pengaturan keamanan akun.</p>

                          <div className="space-y-4">
                            {/* Change Password Toggle */}
                            <div className="bg-slate-50 dark:bg-[#1a1f2e] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
                              <button
                                onClick={() => setShowPasswordSection(!showPasswordSection)}
                                className="w-full flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="material-icons-round text-slate-400 dark:text-slate-500 text-lg">lock</span>
                                  <div className="text-left">
                                    <div className="font-bold text-slate-800 dark:text-white text-sm">Ubah Kata Sandi</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Terakhir diubah 30 hari yang lalu</div>
                                  </div>
                                </div>
                                <span className={`material-icons-round text-slate-400 transition-transform ${showPasswordSection ? 'rotate-180' : ''}`}>expand_more</span>
                              </button>

                              <AnimatePresence>
                                {showPasswordSection && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-4 pb-4 space-y-3">
                                      <PasswordInput
                                        label="Password Saat Ini"
                                        value={currentPassword}
                                        onChange={setCurrentPassword}
                                        show={showCurrentPw}
                                        onToggle={() => setShowCurrentPw(!showCurrentPw)}
                                        placeholder="Masukkan password saat ini"
                                      />
                                      <PasswordInput
                                        label="Password Baru"
                                        value={newPassword}
                                        onChange={setNewPassword}
                                        show={showNewPw}
                                        onToggle={() => setShowNewPw(!showNewPw)}
                                        placeholder="Minimal 8 karakter"
                                      />
                                      <PasswordInput
                                        label="Konfirmasi Password Baru"
                                        value={confirmPassword}
                                        onChange={setConfirmPassword}
                                        show={showConfirmPw}
                                        onToggle={() => setShowConfirmPw(!showConfirmPw)}
                                        placeholder="Ulangi password baru"
                                      />

                                      {/* Password strength indicator */}
                                      {newPassword && (
                                        <div className="flex items-center gap-2">
                                          <div className="flex-1 flex gap-1">
                                            {[1, 2, 3, 4].map(i => (
                                              <div
                                                key={i}
                                                className={`h-1 flex-1 rounded-full transition-colors ${
                                                  newPassword.length >= i * 3
                                                    ? newPassword.length >= 12 ? 'bg-emerald-500' : newPassword.length >= 8 ? 'bg-amber-500' : 'bg-rose-500'
                                                    : 'bg-slate-200 dark:bg-slate-700'
                                                }`}
                                              />
                                            ))}
                                          </div>
                                          <span className={`text-[10px] font-bold uppercase tracking-wider ${
                                            newPassword.length >= 12 ? 'text-emerald-500' : newPassword.length >= 8 ? 'text-amber-500' : 'text-rose-500'
                                          }`}>
                                            {newPassword.length >= 12 ? 'Kuat' : newPassword.length >= 8 ? 'Sedang' : 'Lemah'}
                                          </span>
                                        </div>
                                      )}

                                      {passwordError && (
                                        <p className="text-xs font-bold text-rose-500 flex items-center gap-1">
                                          <span className="material-icons-round text-sm">error</span> {passwordError}
                                        </p>
                                      )}

                                      <button
                                        onClick={handleChangePassword}
                                        className="w-full py-2.5 bg-primary-light hover:bg-blue-600 dark:bg-primary-dark dark:hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-light/25 dark:shadow-primary-dark/25 text-sm mt-2"
                                      >
                                        Perbarui Kata Sandi
                                      </button>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>

                            {/* 2FA */}
                            <SettingRow icon="verified_user" title="Autentikasi 2 Langkah (2FA)" desc="Tambahkan lapisan keamanan ekstra saat login">
                              <ToggleSwitch enabled={twoFAEnabled} onToggle={() => { setTwoFAEnabled(!twoFAEnabled); showToast(twoFAEnabled ? '2FA dinonaktifkan' : '2FA diaktifkan (simulasi)'); }} />
                            </SettingRow>

                            {/* Active Sessions */}
                            <div className="bg-slate-50 dark:bg-[#1a1f2e] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
                              <div className="p-4 flex items-center gap-3 border-b border-slate-200/50 dark:border-white/5">
                                <span className="material-icons-round text-slate-400 dark:text-slate-500 text-lg">devices</span>
                                <div>
                                  <div className="font-bold text-slate-800 dark:text-white text-sm">Sesi Aktif</div>
                                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Perangkat yang saat ini login ke akun Anda</div>
                                </div>
                              </div>

                              <div className="divide-y divide-slate-200/50 dark:divide-white/5">
                                {sessions.map((s, i) => (
                                  <div key={i} className="p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.current ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'}`}>
                                        <span className="material-icons-round text-sm">{s.device.includes('iPhone') ? 'phone_iphone' : 'computer'}</span>
                                      </div>
                                      <div>
                                        <div className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                          {s.device} · {s.browser}
                                          {s.current && <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20 px-1.5 py-0.5 rounded-md uppercase">Ini</span>}
                                        </div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400">{s.location} · {s.lastActive}</div>
                                      </div>
                                    </div>
                                    {!s.current && (
                                      <button
                                        onClick={() => showToast('Sesi berhasil diakhiri')}
                                        className="text-xs font-bold text-rose-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                                      >
                                        Akhiri
                                      </button>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Delete Account */}
                        <div className="pt-6 border-t border-slate-200 dark:border-white/10">
                          <h3 className="text-sm font-bold text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-1.5">
                            <span className="material-icons-round text-sm">warning</span> Zona Bahaya
                          </h3>
                          {!showDeleteConfirm ? (
                            <button
                              onClick={() => setShowDeleteConfirm(true)}
                              className="text-rose-600 dark:text-rose-400 font-bold text-sm hover:underline"
                            >
                              Hapus Akun Saya
                            </button>
                          ) : (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-4 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 rounded-2xl space-y-3"
                            >
                              <p className="text-sm text-rose-700 dark:text-rose-300 font-medium">
                                Tindakan ini <strong>tidak dapat dibatalkan</strong>. Ketik <strong className="text-rose-900 dark:text-white">"{savedName}"</strong> untuk mengonfirmasi.
                              </p>
                              <input
                                type="text"
                                value={deleteConfirmText}
                                onChange={(e) => setDeleteConfirmText(e.target.value)}
                                placeholder={`Ketik "${savedName}" di sini`}
                                className="w-full bg-white dark:bg-[#1a1f2e] border border-rose-300 dark:border-rose-500/30 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-rose-500 transition-colors"
                              />
                              <div className="flex gap-2">
                                <button onClick={() => { setShowDeleteConfirm(false); setDeleteConfirmText(''); }} className="flex-1 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors">Batal</button>
                                <button
                                  onClick={handleDeleteAccount}
                                  disabled={deleteConfirmText !== savedName}
                                  className="flex-1 py-2 text-sm font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                  Hapus Permanen
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* ═══════════ TAB: PREFERENSI ═══════════ */}
                    {activeTab === 'preferensi' && (
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Preferensi Aplikasi</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Sesuaikan pengalaman belajar Anda di ADAPTIV.</p>
                        </div>

                        <div className="space-y-4">
                          {/* Dark Mode */}
                          <SettingRow icon="dark_mode" title="Mode Gelap (Dark Mode)" desc="Ubah antarmuka menjadi tema gelap">
                            <ToggleSwitch enabled={isDark} onToggle={toggleTheme} />
                          </SettingRow>

                          {/* Sound */}
                          <SettingRow icon="volume_up" title="Efek Suara" desc="Bunyikan efek saat menyelesaikan tugas">
                            <ToggleSwitch enabled={soundEnabled} onToggle={() => setSoundEnabled(!soundEnabled)} />
                          </SettingRow>

                          {/* Animations */}
                          <SettingRow icon="animation" title="Animasi Antarmuka" desc="Kurangi animasi untuk aksesibilitas">
                            <ToggleSwitch enabled={animationsEnabled} onToggle={() => setAnimationsEnabled(!animationsEnabled)} />
                          </SettingRow>

                          {/* Font Size */}
                          <div className="p-4 bg-slate-50 dark:bg-[#1a1f2e] border border-slate-200 dark:border-white/10 rounded-2xl">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="material-icons-round text-slate-400 dark:text-slate-500 text-lg">text_fields</span>
                              <div>
                                <div className="font-bold text-slate-800 dark:text-white text-sm">Ukuran Font Chat</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Sesuaikan ukuran teks pada balon chat</div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              {[
                                { id: 'kecil', label: 'Kecil', size: 'text-xs' },
                                { id: 'sedang', label: 'Sedang', size: 'text-sm' },
                                { id: 'besar', label: 'Besar', size: 'text-base' },
                              ].map(opt => (
                                <button
                                  key={opt.id}
                                  onClick={() => setFontSize(opt.id)}
                                  className={`flex-1 py-2 rounded-xl font-bold text-sm transition-all ${
                                    fontSize === opt.id
                                      ? 'bg-primary-light dark:bg-primary-dark text-white shadow-md'
                                      : 'bg-white dark:bg-[#121620] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-primary-light dark:hover:border-primary-dark'
                                  }`}
                                >
                                  <span className={opt.size}>{opt.label}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Language */}
                          <div className="p-4 bg-slate-50 dark:bg-[#1a1f2e] border border-slate-200 dark:border-white/10 rounded-2xl">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="material-icons-round text-slate-400 dark:text-slate-500 text-lg">translate</span>
                              <div>
                                <div className="font-bold text-slate-800 dark:text-white text-sm">Bahasa Utama</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Bahasa yang digunakan di antarmuka</div>
                              </div>
                            </div>
                            <select
                              value={language}
                              onChange={(e) => setLanguage(e.target.value)}
                              className="w-full bg-white dark:bg-[#121620] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-primary-light dark:focus:border-primary-dark appearance-none cursor-pointer"
                            >
                              <option value="id">🇮🇩 Bahasa Indonesia</option>
                              <option value="en">🇺🇸 English</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ═══════════ TAB: NOTIFIKASI ═══════════ */}
                    {activeTab === 'notifikasi' && (
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Pengaturan Notifikasi</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Pilih pembaruan yang ingin Anda terima.</p>
                        </div>

                        <div className="space-y-3">
                          {[
                            { key: 'pengingat', title: 'Pengingat Belajar', desc: 'Notifikasi jadwal dan pengingat kuis', icon: 'alarm' },
                            { key: 'liga', title: 'Pembaruan Liga', desc: 'Informasi naik/turun klasemen leaderboard', icon: 'leaderboard' },
                            { key: 'email', title: 'Email Mingguan', desc: 'Laporan progres belajar mingguan', icon: 'mail' },
                            { key: 'promo', title: 'Promo & Penawaran', desc: 'Diskon khusus untuk paket Pro', icon: 'local_offer' },
                          ].map((item) => (
                            <SettingRow key={item.key} icon={item.icon} title={item.title} desc={item.desc}>
                              <ToggleSwitch enabled={notifications[item.key]} onToggle={() => toggleNotification(item.key)} />
                            </SettingRow>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ═══════════ TAB: LANGGANAN ═══════════ */}
                    {activeTab === 'langganan' && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Paket Berlangganan</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Kelola status keanggotaan ADAPTIV Anda.</p>
                        </div>

                        {/* Current Plan Card */}
                        <div className="p-6 bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark rounded-3xl text-white shadow-xl shadow-primary-light/20 dark:shadow-primary-dark/20 relative overflow-hidden">
                          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>

                          <div className="flex justify-between items-start relative z-10">
                            <div>
                              <div className="text-white/70 text-xs font-bold tracking-widest uppercase mb-1">Paket Saat Ini</div>
                              <div className="text-3xl font-extrabold flex items-center gap-2">ADAPTIV Pro <span className="material-icons-round text-yellow-300">verified</span></div>
                            </div>
                            <span className="px-3 py-1 bg-white/20 rounded-lg text-xs font-bold backdrop-blur-sm">Aktif</span>
                          </div>

                          <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between relative z-10">
                            <div>
                              <div className="text-xs text-white/70 font-medium">Diperbarui pada</div>
                              <div className="font-bold text-sm">28 Mei 2026</div>
                            </div>
                            <button
                              onClick={() => setShowPlanComparison(!showPlanComparison)}
                              className="px-5 py-2 bg-white text-primary-light font-bold text-sm rounded-xl hover:bg-blue-50 transition-colors shadow-sm"
                            >
                              Kelola Paket
                            </button>
                          </div>
                        </div>

                        {/* Plan Comparison */}
                        <AnimatePresence>
                          {showPlanComparison && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
                                <div className="p-4 bg-slate-50 dark:bg-[#0a0a0f] border-b border-slate-200 dark:border-white/5">
                                  <div className="font-bold text-sm text-slate-800 dark:text-white">Perbandingan Paket</div>
                                </div>
                                <div className="divide-y divide-slate-200 dark:divide-white/5">
                                  {[
                                    { name: 'Gratis', price: 'Rp 0', features: ['50 File Upload', 'Basic AI Tutor', 'Kartu Belajar Standar'], current: false },
                                    { name: 'Pro', price: 'Rp 119k/bln', features: ['File Tanpa Batas', 'AI Gemini Lanjutan', 'Ringkasan Audio 20 Jam', 'Peta Pikiran Cerdas', 'Kuis Adaptif'], current: true },
                                    { name: 'Master', price: 'Rp 239k/bln', features: ['Semua fitur Pro', 'Akses Prioritas Server', 'Custom AI Persona', 'Pembuatan Konten Video'], current: false },
                                  ].map((plan) => (
                                    <div key={plan.name} className={`p-4 ${plan.current ? 'bg-primary-light/5 dark:bg-primary-dark/10' : ''}`}>
                                      <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                          <span className="font-bold text-sm text-slate-800 dark:text-white">{plan.name}</span>
                                          {plan.current && <span className="text-[10px] font-bold text-primary-light dark:text-primary-dark bg-primary-light/10 dark:bg-primary-dark/20 px-2 py-0.5 rounded-md uppercase">Aktif</span>}
                                        </div>
                                        <span className="font-bold text-sm text-slate-600 dark:text-slate-300">{plan.price}</span>
                                      </div>
                                      <div className="flex flex-wrap gap-1.5">
                                        {plan.features.map((f, i) => (
                                          <span key={i} className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-md">{f}</span>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Transaction History */}
                        <div className="bg-slate-50 dark:bg-[#1a1f2e] border border-slate-200 dark:border-white/10 p-5 rounded-2xl">
                          <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0">
                              <span className="material-icons-round">receipt_long</span>
                            </div>
                            <div className="flex-1">
                              <div className="font-bold text-sm text-slate-800 dark:text-white">Riwayat Transaksi</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">Unduh faktur dan struk pembayaran Anda sebelumnya.</div>
                              <button
                                onClick={() => setShowTransactionHistory(!showTransactionHistory)}
                                className="text-xs font-bold text-primary-light dark:text-primary-dark hover:underline"
                              >
                                {showTransactionHistory ? 'Sembunyikan' : 'Lihat Riwayat'}
                              </button>
                            </div>
                          </div>

                          <AnimatePresence>
                            {showTransactionHistory && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-4 border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
                                  <table className="w-full text-xs">
                                    <thead>
                                      <tr className="bg-slate-100 dark:bg-[#121620]">
                                        <th className="text-left p-3 font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Tanggal</th>
                                        <th className="text-left p-3 font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Deskripsi</th>
                                        <th className="text-right p-3 font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Jumlah</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                                      {[
                                        { date: '28 Mei 2026', desc: 'ADAPTIV Pro - Bulanan', amount: 'Rp 149.000', status: 'Berhasil' },
                                        { date: '28 Apr 2026', desc: 'ADAPTIV Pro - Bulanan', amount: 'Rp 149.000', status: 'Berhasil' },
                                        { date: '28 Mar 2026', desc: 'ADAPTIV Pro - Bulanan', amount: 'Rp 149.000', status: 'Berhasil' },
                                      ].map((tx, i) => (
                                        <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                          <td className="p-3 font-medium text-slate-700 dark:text-slate-300">{tx.date}</td>
                                          <td className="p-3">
                                            <div className="font-medium text-slate-700 dark:text-slate-300">{tx.desc}</div>
                                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">{tx.status}</span>
                                          </td>
                                          <td className="p-3 text-right font-bold text-slate-800 dark:text-white">{tx.amount}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* ─── Logout Confirmation Dialog ─── */}
          <AnimatePresence>
            {showLogoutConfirm && (
              <>
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm"
                  onClick={() => setShowLogoutConfirm(false)}
                />
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-white dark:bg-[#121620] rounded-3xl shadow-2xl p-8 max-w-sm w-full pointer-events-auto border border-slate-200 dark:border-white/10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-500 flex items-center justify-center mx-auto mb-5">
                      <span className="material-icons-round text-3xl">logout</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">Keluar dari ADAPTIV?</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Anda akan diarahkan ke halaman masuk. Progres belajar Anda tetap tersimpan.</p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowLogoutConfirm(false)}
                        className="flex-1 py-2.5 font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors text-sm"
                      >
                        Batal
                      </button>
                      <button
                        onClick={handleLogout}
                        className="flex-1 py-2.5 font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition-colors shadow-lg shadow-rose-500/30 text-sm"
                      >
                        Ya, Keluar
                      </button>
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>

          {/* Toast */}
          <Toast message={toast.message} type={toast.type} visible={toast.visible} onDone={hideToast} />
        </>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalContent, document.body)
    : modalContent;
};

export default SettingsModal;
