import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '../layouts/DashboardLayout';
import {
  suggestedPrompts,
  aiReplies,
  sessionHistory,
  quizzes,
  flashcards
} from '../data/chatMockData';

// Markdown-like HTML formatter
const formatMsgHtml = (text) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n• /g, '</p><ul><li>')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');
};

const Chat = ({ isDark, toggleTheme }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sessionKey = searchParams.get('session');

  const [title, setTitle] = useState('Notebook Penelitian Saya');
  const [sources, setSources] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');

  // Layout State
  const [showSources, setShowSources] = useState(true);
  const [useExternal, setUseExternal] = useState(false);
  const [isTempChat, setIsTempChat] = useState(false);

  // Studio State
  const [studioMode, setStudioMode] = useState(null); // 'quiz', 'flashcards', null
  const [quizScore, setQuizScore] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizResults, setQuizResults] = useState([]);
  const [quizDone, setQuizDone] = useState(false);

  const [fcIndex, setFcIndex] = useState(0);
  const [fcFilter, setFcFilter] = useState('Semua');
  const [fcFlipped, setFcFlipped] = useState(false);

  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Pro');
  const chatBottomRef = useRef(null);

  // Initialize session
  useEffect(() => {
    if (sessionKey && sessionHistory[sessionKey]) {
      const history = sessionHistory[sessionKey];
      setTitle(history.title);
      setSources(history.sources);
      setMessages(history.messages);
    }
  }, [sessionKey]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const toggleSource = (id) => {
    setSources(sources.map(s => s.id === id ? { ...s, checked: !s.checked } : s));
  };

  const handleSend = (text = inputText) => {
    if (!text.trim() || isTyping) return;

    const newMessages = [...messages, { role: 'user', text: text.trim() }];
    setMessages(newMessages);
    setInputText('');
    setIsTyping(true);

    const lowercaseText = text.toLowerCase();

    setTimeout(() => {
      setIsTyping(false);

      const isQuiz = lowercaseText.includes('kuis') || lowercaseText.includes('quiz');
      const isFlashcards = lowercaseText.includes('kartu belajar') || lowercaseText.includes('flashcards') || lowercaseText.includes('flashcard');

      if (isQuiz && quizzes[sessionKey]) {
        setMessages([...newMessages, { role: 'ai', text: `Tentu! Saya telah menyiapkan kuis interaktif **Kuis ${title}** yang memuat soal menantang di panel kanan Anda. Selamat mengerjakan! ✨` }]);
        startQuiz();
      } else if (isFlashcards && flashcards[sessionKey]) {
        setMessages([...newMessages, { role: 'ai', text: `Tentu! Saya telah menyiapkan **Kartu Belajar (Flashcards) ${title}** interaktif di panel kanan Anda. Silakan pelajari dan uji pemahaman Anda! ✨` }]);
        startFlashcards();
      } else {
        const reply = aiReplies[messages.length % aiReplies.length];
        setMessages([...newMessages, { role: 'ai', text: reply }]);
      }
    }, 1500);
  };

  // ---------------- QUIZ LOGIC ----------------
  const activeQuizList = quizzes[sessionKey] || [];

  const startQuiz = () => {
    setStudioMode('quiz');
    setQuizIndex(0);
    setQuizScore(0);
    setQuizResults(new Array(activeQuizList.length).fill(null));
    setQuizDone(false);
  };

  const handleQuizSelect = (option, idx) => {
    if (quizResults[quizIndex] !== null) return;

    const newResults = [...quizResults];
    newResults[quizIndex] = {
      isCorrect: option.isCorrect,
      choice: option.letter,
      rationale: option.rationale
    };

    setQuizResults(newResults);
    if (option.isCorrect) setQuizScore(prev => prev + 1);
  };

  const closeStudio = () => setStudioMode(null);

  // ---------------- FLASHCARD LOGIC ----------------
  const activeFcDeck = flashcards[sessionKey] || [];
  const filteredFc = fcFilter === 'Semua' ? activeFcDeck : activeFcDeck.filter(c => c.category === fcFilter);

  const startFlashcards = () => {
    setStudioMode('flashcards');
    setFcIndex(0);
    setFcFilter('Semua');
    setFcFlipped(false);
  };

  return (
    <DashboardLayout isDark={isDark} toggleTheme={toggleTheme} headerTitle={title} noPadding={true} isTempChat={isTempChat} toggleTempChat={() => setIsTempChat(!isTempChat)}>
      <div className="flex h-full w-full bg-[#f0f2f5] dark:bg-[#0a0a0f] overflow-hidden relative pt-4 pb-2 pl-4 pr-0 gap-4">

        {/* Left Sidebar (Sources) */}
        <AnimatePresence>
          {showSources && (
            <motion.aside
              initial={{ width: 0, opacity: 0, marginLeft: -16 }}
              animate={{ width: 280, opacity: 1, marginLeft: 0 }}
              exit={{ width: 0, opacity: 0, marginLeft: -16 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white dark:bg-[#121620] rounded-3xl border border-slate-200 dark:border-white/5 flex flex-col z-30 shadow-sm overflow-hidden shrink-0"
            >
              <div className="flex items-center justify-between p-5 pb-2">
                <span className="font-bold text-slate-800 dark:text-white">Sumber</span>
                <button
                  onClick={() => setShowSources(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-all hover:scale-105"
                  title="Tutup Panel"
                >
                  <span className="material-icons-round text-[18px]">chevron_left</span>
                </button>
              </div>

              <div className="p-4">
                <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-xl font-semibold text-slate-700 dark:text-slate-300 transition-colors border border-dashed border-slate-300 dark:border-white/20">
                  <span className="material-icons-round text-sm">add</span> Tambah sumber
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2">
                {sources.length === 0 ? (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-500">
                    <span className="material-icons-round text-4xl mb-2 opacity-50">description</span>
                    <p className="text-sm font-semibold">Belum ada sumber</p>
                    <p className="text-xs mt-1">Tambahkan dokumen untuk memulai belajar</p>
                  </div>
                ) : (
                  sources.map(s => (
                    <div
                      key={s.id}
                      onClick={() => toggleSource(s.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors border ${s.checked ? 'bg-primary-light/5 border-primary-light/30 dark:bg-primary-dark/10 dark:border-primary-dark/30' : 'bg-white border-slate-100 hover:border-slate-300 dark:bg-[#1a1f2e] dark:border-white/5 dark:hover:border-white/20'}`}
                    >
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors ${s.checked ? 'bg-primary-light dark:bg-primary-dark text-white' : 'border-2 border-slate-300 dark:border-slate-600'}`}>
                        {s.checked && <span className="material-icons-round text-[14px]">check</span>}
                      </div>
                      <span className="text-xl shrink-0">{s.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-slate-800 dark:text-white truncate">{s.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{s.type}</div>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" onClick={(e) => e.stopPropagation()}>
                        <span className="material-icons-round text-sm">more_vert</span>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Floating toggle for sources if collapsed */}
        {!showSources && (
          <button
            onClick={() => setShowSources(true)}
            className="absolute top-6 left-6 z-20 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-[#1a1f2e]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-black/50 flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300 hover:text-primary-light dark:hover:text-primary-dark hover:scale-105 transition-all group"
          >
            <span className="material-icons-round text-[20px] group-hover:-rotate-12 transition-transform">menu_open</span>
            <span className="text-sm font-bold">Sumber</span>
          </button>
        )}

        {/* Main Chat Area */}
        <main className="flex-1 h-full flex flex-col relative z-0 bg-transparent min-w-0">
          <div className="flex-1 overflow-y-auto px-4 md:px-8 scroll-smooth pr-[100px] pb-4">
            <div className="max-w-3xl mx-auto w-full">

              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center py-20 mt-10">
                  <div className="w-24 h-24 bg-white dark:bg-[#1a1f2e] rounded-3xl p-4 shadow-xl shadow-primary-light/10 dark:shadow-black/50 mb-8 border border-slate-100 dark:border-white/5 flex items-center justify-center">
                    {isTempChat ? (
                      <span className="material-icons-round text-6xl text-slate-400 dark:text-slate-500 opacity-50">chat_bubble_outline</span>
                    ) : (
                      <img src={isDark ? "/assets/icons/darkIcon.png" : "/assets/icons/lightIcon.png"} alt="AI" className="w-full h-full object-contain" />
                    )}
                  </div>
                  
                  {isTempChat ? (
                    <>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-3">Obrolan Sementara</h2>
                      <p className="text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-md">Sesi ini tidak akan disimpan dalam riwayat Anda. Tanyakan apa saja tanpa meninggalkan jejak.</p>
                    </>
                  ) : (
                    <>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-3">Tanyakan apa saja</h2>
                      <p className="text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-md">Mulai percakapan tentang sumber Anda. ADAPTIV akan menjawab berdasarkan materi yang telah Anda tambahkan.</p>

                      <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
                        {(() => {
                          const checkedSources = sources.filter(s => s.checked);
                          const dynamicPrompts = checkedSources.length > 0 ? [
                            `Apa temuan utama dari ${checkedSources.length === 1 ? checkedSources[0].name : `${checkedSources.length} dokumen ini`}?`,
                            `Ringkaskan poin-poin kritis dalam ${checkedSources.length === 1 ? checkedSources[0].name : 'sumber tersebut'}`,
                            `Jelaskan konsep penting yang ada di ${checkedSources.length === 1 ? checkedSources[0].name : 'materi ini'}`,
                            `Buat soal latihan atau kuis berdasarkan materi ini`
                          ] : suggestedPrompts;
                          
                          return dynamicPrompts.map((p, i) => (
                            <button
                              key={i}
                              onClick={() => handleSend(p)}
                              className="px-4 py-2 bg-white dark:bg-[#1a1f2e] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:border-primary-light dark:hover:border-primary-dark hover:text-primary-light dark:hover:text-primary-dark transition-all shadow-sm"
                            >
                              {p}
                            </button>
                          ));
                        })()}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="space-y-8 pb-10">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex gap-4 ${m.role === 'user' ? 'justify-end' : ''}`}>
                      {m.role === 'ai' && (
                        <div className="w-8 h-8 rounded-full bg-primary-light dark:bg-primary-dark flex-shrink-0 flex items-center justify-center border-2 border-white dark:border-[#0a0a0f] shadow-sm">
                          <img src="/assets/icons/lightIcon.png" className="w-4 h-4 object-contain brightness-0 invert" alt="AI" />
                        </div>
                      )}

                      <div className={`max-w-[85%] rounded-2xl p-4 md:p-5 ${m.role === 'user' ? 'bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 rounded-tr-sm' : 'bg-white dark:bg-[#1a1f2e] border border-slate-100 dark:border-white/5 text-slate-800 dark:text-slate-300 shadow-sm rounded-tl-sm'}`}>
                        {m.role === 'user' ? (
                          <div className="font-medium whitespace-pre-wrap">{m.text}</div>
                        ) : (
                          <div className="prose dark:prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-li:my-1" dangerouslySetInnerHTML={{ __html: formatMsgHtml(m.text) }} />
                        )}
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary-light dark:bg-primary-dark flex-shrink-0 flex items-center justify-center border-2 border-white dark:border-[#0a0a0f] shadow-sm">
                        <img src="/assets/icons/lightIcon.png" className="w-4 h-4 object-contain brightness-0 invert" alt="AI" />
                      </div>
                      <div className="bg-white dark:bg-[#1a1f2e] border border-slate-100 dark:border-white/5 rounded-2xl rounded-tl-sm p-4 md:p-5 flex items-center gap-1.5 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                      </div>
                    </div>
                  )}
                  <div ref={chatBottomRef} />
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="px-4 pb-0 mt-auto pr-[100px]">
            <div className="max-w-3xl mx-auto relative">
              <div className="bg-white dark:bg-[#1a1f2e] rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm p-2 pl-4 flex flex-col relative focus-within:border-primary-light dark:focus-within:border-primary-dark transition-colors">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Tanya ADAPTIV"
                  className="w-full bg-transparent border-none outline-none resize-none max-h-40 min-h-[40px] py-2.5 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 font-medium text-[15px]"
                  rows={1}
                />

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3 px-1">
                    <button 
                      onClick={() => setUseExternal(!useExternal)}
                      className={`transition-colors flex items-center gap-1.5 ${useExternal ? 'text-primary-light dark:text-primary-dark' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'}`} 
                      title="Web Search"
                    >
                      <span className="material-icons-round text-[18px]">language</span>
                    </button>
                    {/* Toggle Switch */}
                    <div 
                      onClick={() => setUseExternal(!useExternal)}
                      className={`w-7 h-4 rounded-full flex items-center p-0.5 cursor-pointer transition-colors ${useExternal ? 'bg-primary-light dark:bg-primary-dark' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'}`}
                      title={useExternal ? "Pencarian Web (Eksternal)" : "Dokumen Saya (Internal)"}
                    >
                      <div className={`w-3 h-3 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${useExternal ? 'translate-x-3' : 'translate-x-0'}`}></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <button
                        onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                        className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 px-3 py-1.5 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors uppercase tracking-wider"
                      >
                        {selectedModel} <span className="material-icons-round text-[14px]">expand_more</span>
                      </button>

                      <AnimatePresence>
                        {modelDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                            className="absolute bottom-full right-0 mb-2 w-64 bg-white dark:bg-[#1a1f2e] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-1.5 z-50 overflow-hidden"
                          >
                            <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 px-3 py-1.5 uppercase tracking-wider">ADAPTIV AI</div>
                            {['Flash', 'Pro', 'Master'].map(m => (
                              <button
                                key={m}
                                onClick={() => { setSelectedModel(m); setModelDropdownOpen(false); }}
                                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-colors ${selectedModel === m ? 'bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark' : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'}`}
                              >
                                <div>
                                  <div className="font-bold text-sm">{m}</div>
                                  <div className="text-[11px] opacity-70">{m === 'Flash' ? 'Cepat & Ringan' : m === 'Pro' ? 'Akurat & Pintar' : 'Akses Teratas'}</div>
                                </div>
                                {selectedModel === m && <span className="material-icons-round text-[18px]">check</span>}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      onClick={() => handleSend()}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-105 ${inputText.trim() ? 'bg-primary-light dark:bg-primary-dark text-white shadow-md' : 'bg-slate-100 dark:bg-white/5 text-slate-500'}`}
                    >
                      <span className="material-icons-round text-[16px]">{inputText.trim() ? 'send' : 'mic'}</span>
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-center text-[10px] font-medium text-slate-400 dark:text-slate-500 mt-2 mb-1">ADAPTIV dapat membuat kesalahan. Verifikasi jawaban dengan sumber asli Anda.</p>
            </div>
          </div>
        </main>

        {/* Right Sidebar (Studio / Tools) */}
        <aside className={`absolute right-4 transition-all duration-300 z-30 shadow-sm bg-white/95 dark:bg-[#121620]/95 backdrop-blur-xl border border-slate-200 dark:border-white/5 flex flex-col ${studioMode ? 'top-4 bottom-4 w-[calc(100%-2rem)] md:w-[450px] rounded-3xl overflow-hidden' : 'top-1/2 -translate-y-1/2 h-fit py-4 w-[72px] rounded-[36px] overflow-visible'}`}>

          {/* Collapsed Mode (Tools Icons) */}
          {!studioMode && (
            <div className="px-2 space-y-3 flex flex-col items-center w-full overflow-visible">
              {[
                { id: 'audio', icon: 'graphic_eq', label: 'Audio', color: 'text-blue-500', bg: 'bg-[#f0f5ff] dark:bg-blue-500/10' },
                { id: 'podcast', icon: 'podcasts', label: 'Podcast', color: 'text-purple-500', bg: 'bg-[#fcf0ff] dark:bg-purple-500/10' },
                { id: 'slides', icon: 'slideshow', label: 'Slide Presentasi', color: 'text-amber-500', bg: 'bg-[#fff8e6] dark:bg-amber-500/10' },
                { id: 'video', icon: 'play_arrow', label: 'Video', color: 'text-emerald-500', bg: 'bg-[#e6fff0] dark:bg-emerald-500/10' },
                { id: 'map', icon: 'account_tree', label: 'Peta Pikiran', color: 'text-indigo-500', bg: 'bg-[#f0edff] dark:bg-indigo-500/10' },
                { id: 'flashcards', icon: 'style', label: 'Kartu Belajar', color: 'text-rose-500', bg: 'bg-[#ffefe6] dark:bg-rose-500/10' },
                { id: 'quiz', icon: 'quiz', label: 'Kuis', color: 'text-cyan-500', bg: 'bg-[#e6fbff] dark:bg-cyan-500/10' },
                { id: 'infographic', icon: 'insert_chart', label: 'Infografis', color: 'text-fuchsia-500', bg: 'bg-[#f8e6ff] dark:bg-fuchsia-500/10' },
                { id: 'table', icon: 'table_view', label: 'Tabel Data', color: 'text-blue-400', bg: 'bg-[#f0f7ff] dark:bg-blue-400/10' },
              ].map(t => (
                <div key={t.id} className="relative w-12 h-12 group z-10 flex justify-center">
                  {/* Base Icon */}
                  <button
                    onClick={() => {
                      if (t.id === 'flashcards') startFlashcards();
                      else if (t.id === 'quiz') startQuiz();
                      else alert('Fitur belum dibuat');
                    }}
                    className={`w-12 h-12 rounded-[16px] flex items-center justify-center transition-all duration-300 ${t.bg} ${t.color} group-hover:opacity-0 group-hover:scale-90`}
                  >
                    <span className="material-icons-round text-[22px]">{t.icon}</span>
                  </button>

                  {/* Hover Popup Pill */}
                  <button
                    onClick={() => {
                      if (t.id === 'flashcards') startFlashcards();
                      else if (t.id === 'quiz') startQuiz();
                      else alert('Fitur belum dibuat');
                    }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3 pr-5 pl-3 py-0 h-12 rounded-full bg-white dark:bg-slate-800 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-2 group-hover:translate-x-0 z-50 whitespace-nowrap border border-slate-100 dark:border-slate-700 pointer-events-none group-hover:pointer-events-auto"
                  >
                    <span className={`material-icons-round text-[24px] drop-shadow-sm ${t.color}`}>{t.icon}</span>
                    <span className="font-bold text-[14px] text-slate-800 dark:text-slate-100">{t.label}</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* QUIZ MODE */}
          {studioMode === 'quiz' && (
            <div className="flex flex-col h-full bg-slate-50 dark:bg-[#1a1f2e]">
              <div className="flex items-center justify-between p-4 bg-white dark:bg-[#121620] border-b border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-icons-round text-emerald-500">quiz</span>
                  <span className="font-bold text-slate-800 dark:text-white">Kuis {title}</span>
                </div>
                <button onClick={closeStudio} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500">
                  <span className="material-icons-round text-sm">close</span>
                </button>
              </div>

              {!quizDone ? (
                <>
                  <div className="bg-white dark:bg-[#121620] border-b border-slate-200 dark:border-white/5 px-6 py-4 flex items-center gap-4">
                    <div className="flex-1 flex gap-1.5 h-1.5">
                      {activeQuizList.map((_, idx) => {
                        const r = quizResults[idx];
                        const bg = idx === quizIndex ? 'bg-slate-800 dark:bg-white' : r?.isCorrect ? 'bg-emerald-500' : r?.isCorrect === false ? 'bg-rose-500' : 'bg-slate-200 dark:bg-slate-700';
                        return <div key={idx} className={`flex-1 rounded-full ${bg} transition-colors`} />
                      })}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500">{quizIndex + 1} / {activeQuizList.length}</span>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    {activeQuizList[quizIndex] && (
                      <>
                        <div>
                          <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-bold tracking-wider uppercase mb-3 inline-block">{activeQuizList[quizIndex].badge}</span>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug"><span className="text-emerald-500 mr-1">Q{quizIndex + 1}.</span> {activeQuizList[quizIndex].question}</h3>
                        </div>

                        <div className="space-y-3">
                          {activeQuizList[quizIndex].options.map((opt, i) => {
                            const result = quizResults[quizIndex];
                            const isSelected = result?.choice === opt.letter;
                            let btnStyle = "bg-white dark:bg-[#121620] border border-slate-200 dark:border-white/10 hover:border-emerald-300 dark:hover:border-emerald-500/50";

                            if (result) {
                              if (opt.isCorrect) btnStyle = "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500 text-emerald-800 dark:text-emerald-400";
                              else if (isSelected && !opt.isCorrect) btnStyle = "bg-rose-50 dark:bg-rose-500/10 border-rose-500 text-rose-800 dark:text-rose-400";
                              else btnStyle = "bg-slate-50 dark:bg-[#121620] border-slate-200 dark:border-white/5 opacity-50";
                            }

                            return (
                              <button
                                key={i}
                                disabled={result !== null}
                                onClick={() => handleQuizSelect(opt, i)}
                                className={`w-full text-left p-4 rounded-xl flex gap-3 transition-all ${btnStyle}`}
                              >
                                <span className="font-bold text-emerald-500 shrink-0">{opt.letter}</span>
                                <span className={`font-semibold ${result && (opt.isCorrect || isSelected) ? '' : 'text-slate-700 dark:text-slate-300'}`}>{opt.text}</span>
                              </button>
                            );
                          })}
                        </div>

                        {quizResults[quizIndex] && (
                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`p-4 rounded-xl border-l-4 text-sm font-medium ${quizResults[quizIndex].isCorrect ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500 text-emerald-800 dark:text-emerald-300' : 'bg-rose-50 dark:bg-rose-500/10 border-rose-500 text-rose-800 dark:text-rose-300'}`}>
                            <div className="flex items-center gap-1.5 font-bold mb-1">
                              <span className="material-icons-round text-base">{quizResults[quizIndex].isCorrect ? 'check_circle' : 'cancel'}</span>
                              {quizResults[quizIndex].isCorrect ? 'Jawaban Benar!' : 'Jawaban Kurang Tepat'}
                            </div>
                            <p className="opacity-90">{quizResults[quizIndex].rationale}</p>
                          </motion.div>
                        )}
                      </>
                    )}
                  </div>

                  <div className="p-4 bg-white dark:bg-[#121620] border-t border-slate-200 dark:border-white/5 flex justify-between">
                    <button
                      onClick={() => setQuizIndex(i => Math.max(0, i - 1))}
                      disabled={quizIndex === 0}
                      className="px-4 py-2 text-sm font-bold text-slate-500 disabled:opacity-30"
                    >Kembali</button>
                    <button
                      onClick={() => {
                        if (quizIndex < activeQuizList.length - 1) setQuizIndex(i => i + 1);
                        else setQuizDone(true);
                      }}
                      disabled={!quizResults[quizIndex]}
                      className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-sm transition-colors shadow-lg shadow-emerald-500/30 disabled:opacity-50 disabled:shadow-none"
                    >
                      {quizIndex < activeQuizList.length - 1 ? 'Lanjut' : 'Selesai'}
                    </button>
                  </div>
                </>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-6xl mb-6 animate-bounce">🏆</div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">Kuis Selesai!</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">Latihan yang bagus untuk mempertajam ingatanmu.</p>

                  <div className="bg-white dark:bg-[#121620] border-2 border-dashed border-emerald-400 dark:border-emerald-500/50 rounded-2xl p-6 w-full max-w-xs mb-8 shadow-xl shadow-emerald-500/10">
                    <div className="text-xs font-extrabold text-emerald-500 tracking-widest uppercase mb-1">Skor Akhir</div>
                    <div className="text-5xl font-mono font-black text-slate-900 dark:text-white">{quizScore} <span className="text-2xl text-slate-400">/ {activeQuizList.length}</span></div>
                  </div>

                  <button onClick={closeStudio} className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold transition-colors shadow-lg shadow-emerald-500/30">Selesai & Tutup</button>
                </motion.div>
              )}
            </div>
          )}

          {/* FLASHCARDS MODE */}
          {studioMode === 'flashcards' && (
            <div className="flex flex-col h-full bg-slate-50 dark:bg-[#1a1f2e]">
              <div className="flex items-center justify-between p-4 bg-white dark:bg-[#121620] border-b border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-icons-round text-orange-500">style</span>
                  <span className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-sm">Kartu Belajar · {title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-slate-500">{fcIndex + 1} / {filteredFc.length}</span>
                  <button onClick={closeStudio} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500">
                    <span className="material-icons-round text-sm">close</span>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center">

                {/* Categories */}
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {['Semua', ...new Set(activeFcDeck.map(c => c.category))].map(cat => (
                    <button
                      key={cat} onClick={() => { setFcFilter(cat); setFcIndex(0); setFcFlipped(false); }}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${fcFilter === cat ? 'bg-slate-800 text-white dark:bg-white dark:text-[#0a0a0f]' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 dark:bg-[#121620] dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/5'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Flip Card 3D Effect */}
                {filteredFc.length > 0 ? (
                  <div className="w-full max-w-sm aspect-[3/4] perspective-1000 cursor-pointer mb-8" onClick={() => setFcFlipped(!fcFlipped)}>
                    <motion.div
                      className="w-full h-full relative preserve-3d duration-500"
                      animate={{ rotateY: fcFlipped ? 180 : 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                      {/* FRONT */}
                      <div className="absolute inset-0 backface-hidden bg-white dark:bg-[#121620] rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl p-8 flex flex-col justify-center text-center">
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-md text-[10px] font-bold uppercase flex items-center gap-1">
                          <span className="material-icons-round text-[12px]">help_outline</span> Pertanyaan
                        </div>
                        <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">{filteredFc[fcIndex].category}</div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-relaxed">{filteredFc[fcIndex].question}</h3>
                        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-1.5 text-slate-400 text-xs font-medium">
                          <span className="material-icons-round text-sm">cached</span> Klik untuk balik
                        </div>
                      </div>

                      {/* BACK */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-800 dark:bg-[#1a1f2e] rounded-3xl border border-slate-700 dark:border-white/10 shadow-xl p-8 flex flex-col justify-center text-center text-white">
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/10 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase flex items-center gap-1">
                          <span className="material-icons-round text-[12px]">lightbulb</span> Jawaban
                        </div>
                        <p className="text-lg font-medium leading-relaxed mb-6">{filteredFc[fcIndex].answer}</p>
                        {filteredFc[fcIndex].formula && (
                          <div className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 font-mono font-bold text-emerald-400 mb-6">
                            {filteredFc[fcIndex].formula}
                          </div>
                        )}
                        <p className="text-xs text-slate-400 bg-black/20 p-3 rounded-lg border border-white/5">{filteredFc[fcIndex].subtext}</p>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-slate-500">Tidak ada kartu.</div>
                )}

                {/* Controls */}
                <div className="w-full max-w-sm flex flex-col gap-4">
                  <div className="flex justify-between items-center bg-white dark:bg-[#121620] border border-slate-200 dark:border-white/5 p-2 rounded-2xl shadow-sm">
                    <button disabled={fcIndex === 0} onClick={() => { setFcIndex(i => i - 1); setFcFlipped(false); }} className="w-12 h-12 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 disabled:opacity-30 text-slate-700 dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">arrow_back</span></button>
                    <button onClick={() => setFcFlipped(!fcFlipped)} className="flex-1 font-bold text-sm text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/5 h-12 rounded-xl transition-colors"><span className="material-icons-round text-lg">history</span> Balik</button>
                    <button disabled={fcIndex === filteredFc.length - 1} onClick={() => { setFcIndex(i => i + 1); setFcFlipped(false); }} className="w-12 h-12 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 disabled:opacity-30 text-slate-700 dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">arrow_forward</span></button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </aside>

      </div>
    </DashboardLayout>
  );
};

export default Chat;
