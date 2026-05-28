import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '../layouts/DashboardLayout';

// Mock Data
const initialFolders = [
  { id: 1, name: "Scientific Computing", icon: "🔢", color: "#6366f1", fileCount: 6, updated: "27 Mei 2025" }, // indigo-500
  { id: 2, name: "Creativity & Innovation", icon: "💡", color: "#fbbf24", fileCount: 10, updated: "27 Mei 2025" }, // amber-400
  { id: 3, name: "Algoritma & Pemrograman", icon: "💻", color: "#2dd4bf", fileCount: 5, updated: "10 Jan 2025" }, // teal-400
];

const initialFiles = {
  1: [
    { name: "Sistem_Persamaan_Linier.pdf", size: "3.4 MB", date: "27 Mei 2025", type: "pdf", status: "ready" },
    { name: "System_of_Linear_Equations_part_I_2024.pptx", size: "2.8 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "System_of_Linear_Equations_part_II_2024.pptx", size: "2.5 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "Taylor_Series_2024.pptx", size: "1.9 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "Numerical_Differentiation_part_I_2024.pptx", size: "2.2 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "Ordinary_Differential_Equations_part_I_2024.pptx", size: "2.6 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
  ],
  2: [
    { name: "Session_2_-_Design_Thinking_for_SDGs.pptx", size: "2.1 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "Session_3_-_Customer_Insights.pptx", size: "1.8 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "Session_5_-_Value_Creation.pptx", size: "2.0 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "Session_6_-_Business_Idea_Discussion.pptx", size: "1.9 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "Session_7_-_Market_Positioning.pptx", size: "2.3 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "Session_8_-_Revenue_Streams_and_Cost_Structure.pptx", size: "2.5 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "Session_9_-_Business_Analysis.pptx", size: "2.2 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "Session_10_-_Prototype_Creation.pptx", size: "2.4 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "Session_11_-_Prototype_Testing.pptx", size: "2.6 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
    { name: "Session_13_-_Product_Service_Reporting.pptx", size: "2.1 MB", date: "27 Mei 2025", type: "pptx", status: "ready" },
  ],
  3: [
    { name: "Sorting_Algorithm.pdf", size: "1.5 MB", date: "10 Jan 2025", type: "pdf", status: "ready" },
    { name: "Graph_Theory.pdf", size: "2.0 MB", date: "9 Jan 2025", type: "pdf", status: "ready" },
    { name: "Slide_Dynamic_Programming.pptx", size: "3.8 MB", date: "8 Jan 2025", type: "pptx", status: "ready" },
    { name: "Tugas_Rekursi.docx", size: "0.3 MB", date: "7 Jan 2025", type: "docx", status: "ready" },
    { name: "Latihan_Struktur_Data.pdf", size: "1.2 MB", date: "6 Jan 2025", type: "pdf", status: "ready" },
  ],
};

const COLORS = [
  // Palette Accents (400 & 500 variants of the 6 core Icon Colors)
  '#a78bfa', '#8b5cf6', // Violet
  '#818cf8', '#6366f1', // Indigo
  '#3b82f6', '#2563eb', // Blue
  '#38bdf8', '#0ea5e9', // Sky
  '#2dd4bf', '#14b8a6', // Teal
  '#34d399', '#10b981', // Emerald
  '#fbbf24', '#f59e0b', // Amber
  '#fb923c', '#f97316', // Orange
  '#fb7185', '#f43f5e', // Rose
  '#f472b6', '#ec4899', // Pink
  '#94a3b8', '#64748b', // Slate
  '#cbd5e1', '#475569'  // Slate Light/Dark
];

const ICONS = [
  '', 
  '💻', '📐', '⚡', '🧪', '📝', '📚', '📖', '🎓', '✏️', '🔬', 
  '🧮', '🌍', '🎨', '🎵', '⚽', '💡', '🏛️', '🧬', '🪐', '🧩', 
  '📎', '📅', '🎯', '🏆', '🔥', '✨'
];

const Documents = ({ isDark, toggleTheme }) => {
  const [folders, setFolders] = useState(initialFolders);
  const [files, setFiles] = useState(initialFiles);
  
  const [currentFolderId, setCurrentFolderId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  
  // Modals
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Folder Modal State
  const [newFolderName, setNewFolderName] = useState('');
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedIcon, setSelectedIcon] = useState('');
  const [folderTab, setFolderTab] = useState('icon'); // 'color' | 'icon'

  // Upload Modal State
  const [uploadFiles, setUploadFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});

  const currentFolder = currentFolderId ? folders.find(f => f.id === currentFolderId) : null;

  // Render Helpers
  const filteredFolders = folders.filter(f => f.name.toLowerCase().includes(searchQuery.toLowerCase()));
  
  const folderFiles = currentFolderId ? (files[currentFolderId] || []) : [];
  let filteredFiles = folderFiles.filter(f => f.name.toLowerCase().includes(searchQuery.toLowerCase()));
  if (filterType !== 'all') {
    filteredFiles = filteredFiles.filter(f => f.type === filterType);
  }

  // Action Handlers
  const handleCreateFolder = () => {
    const name = newFolderName.trim() || 'Tanpa Judul';
    const newId = Date.now();
    const newFolder = {
      id: newId,
      name,
      icon: selectedIcon,
      color: selectedColor,
      fileCount: 0,
      updated: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    };
    
    setFolders([...folders, newFolder]);
    setFiles({ ...files, [newId]: [] });
    
    // Reset modal
    setIsFolderModalOpen(false);
    setNewFolderName('');
    setSelectedColor(COLORS[0]);
    setSelectedIcon('');
  };

  const handleFileUpload = (e) => {
    const selected = Array.from(e.target.files).filter(f => {
      const ext = f.name.split('.').pop().toLowerCase();
      return ['pdf', 'docx', 'pptx'].includes(ext);
    });
    
    if (selected.length > 0) {
      setUploadFiles([...uploadFiles, ...selected]);
    }
  };

  const handleRemoveUploadFile = (index) => {
    const newUploads = [...uploadFiles];
    newUploads.splice(index, 1);
    setUploadFiles(newUploads);
  };

  const startUpload = () => {
    setIsUploading(true);
    let completed = 0;
    
    uploadFiles.forEach((file, idx) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          completed++;
          
          setUploadProgress(prev => ({ ...prev, [idx]: 100 }));
          
          if (completed === uploadFiles.length) {
            // Finish all
            const newFilesEntries = uploadFiles.map(f => ({
              name: f.name,
              size: (f.size / (1024 * 1024)).toFixed(1) + ' MB',
              date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
              type: f.name.split('.').pop().toLowerCase(),
              status: 'ready'
            }));

            setFiles(prev => ({
              ...prev,
              [currentFolderId]: [...(prev[currentFolderId] || []), ...newFilesEntries]
            }));

            setFolders(prev => prev.map(f => 
              f.id === currentFolderId 
                ? { ...f, fileCount: (f.fileCount || 0) + newFilesEntries.length }
                : f
            ));

            setTimeout(() => {
              setIsUploadModalOpen(false);
              setUploadFiles([]);
              setIsUploading(false);
              setUploadProgress({});
            }, 500);
          }
        } else {
          setUploadProgress(prev => ({ ...prev, [idx]: progress }));
        }
      }, 200);
    });
  };

  const handleDeleteFile = (fileName) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus dokumen ini?')) {
      setFiles(prev => ({
        ...prev,
        [currentFolderId]: prev[currentFolderId].filter(f => f.name !== fileName)
      }));
      setFolders(prev => prev.map(f => 
        f.id === currentFolderId ? { ...f, fileCount: Math.max(0, f.fileCount - 1) } : f
      ));
    }
  };

  const handleDeleteFolder = (folderId, e) => {
    e.stopPropagation();
    if (window.confirm('Apakah Anda yakin ingin menghapus folder ini beserta seluruh isinya?')) {
      setFolders(prev => prev.filter(f => f.id !== folderId));
      const newFiles = { ...files };
      delete newFiles[folderId];
      setFiles(newFiles);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <DashboardLayout isDark={isDark} toggleTheme={toggleTheme}>
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm font-medium mb-8 text-slate-500 dark:text-slate-400">
          <button 
            onClick={() => { setCurrentFolderId(null); setSearchQuery(''); setFilterType('all'); }}
            className={`flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${!currentFolderId ? 'text-slate-900 dark:text-slate-50' : ''}`}
          >
            <span className="material-icons-round text-lg">folder</span> Dokumen Saya
          </button>
          
          {currentFolderId && (
            <>
              <span className="material-icons-round mx-2 text-slate-400 dark:text-slate-500">chevron_right</span>
              <span className="text-slate-900 dark:text-slate-50 truncate max-w-[200px]">{currentFolder?.name}</span>
            </>
          )}
        </nav>

        {/* Header & Main Action */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
              {currentFolderId ? currentFolder?.name : 'Dokumen Saya'}
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              {currentFolderId ? `${currentFolder?.fileCount} file dalam folder ini` : 'Kelola mata kuliah dan materi belajarmu dengan mudah.'}
            </p>
          </div>
          
          <button 
            onClick={() => currentFolderId ? setIsUploadModalOpen(true) : setIsFolderModalOpen(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20 hover:-translate-y-1 hover:bg-blue-700 dark:hover:bg-blue-400 hover:shadow-blue-500/40 transition-all duration-300 ease-out"
          >
            <span className="material-icons-round">
              {currentFolderId ? 'upload_file' : 'create_new_folder'}
            </span>
            {currentFolderId ? 'Unggah Dokumen' : 'Buat Folder Baru'}
          </button>
        </header>

        {/* Toolbar */}
        <section className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 group">
            <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">search</span>
            <input 
              type="text" 
              placeholder={currentFolderId ? "Cari file..." : "Cari folder..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-50 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 transition-all shadow-sm"
            />
          </div>
          
          <div className="flex items-center gap-3">
            {currentFolderId && (
              <select 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer shadow-sm"
                style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto', paddingRight: '2.5rem' }}
              >
                <option value="all">Semua Format</option>
                <option value="pdf">PDF</option>
                <option value="pptx">PowerPoint</option>
                <option value="docx">Word</option>
              </select>
            )}

            <div className="flex bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-1 shrink-0 shadow-sm">
              <button 
                onClick={() => setViewMode('grid')}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
              >
                <span className="material-icons-round">grid_view</span>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
              >
                <span className="material-icons-round">view_list</span>
              </button>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {!currentFolderId ? (
            // FOLDERS VIEW
            filteredFolders.length > 0 ? (
              <motion.div 
                key="folders"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={viewMode === 'grid' ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4" : "flex flex-col gap-4"}
              >
                {filteredFolders.map(folder => (
                  <motion.div 
                    variants={itemVariants}
                    key={folder.id} 
                    onClick={() => { setCurrentFolderId(folder.id); setSearchQuery(''); }}
                    className={`glass-card relative p-4 cursor-pointer group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 ${viewMode === 'list' ? 'flex items-center gap-5' : 'flex flex-col'}`}
                  >
                    <div 
                      className={`relative overflow-hidden rounded-xl flex items-center justify-center shrink-0 border border-white/50 dark:border-white/5 ${viewMode === 'list' ? 'w-14 h-14' : 'w-full h-24 mb-4'}`}
                      style={{ background: `linear-gradient(135deg, ${folder.color}25, ${folder.color}05)` }}
                    >
                      <span className="material-icons-round absolute mix-blend-overlay" style={{ fontSize: viewMode === 'list' ? '40px' : '80px', color: folder.color, opacity: 0.15 }}>folder</span>
                      <span className="relative z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-300" style={{ fontSize: viewMode === 'list' ? '24px' : '36px' }}>{folder.icon}</span>
                    </div>
                    
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <h3 className="font-bold text-slate-900 dark:text-slate-50 text-base truncate mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{folder.name}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1"><span className="material-icons-round text-[14px]">description</span> {folder.fileCount} file</span>
                          <span>•</span>
                          <span className="truncate">{folder.updated}</span>
                        </div>
                        <button 
                          onClick={(e) => handleDeleteFolder(folder.id, e)}
                          className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-rose-500 transition-all z-10 -mr-1"
                          title="Hapus Folder"
                        >
                          <span className="material-icons-round text-[16px]">delete_outline</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div key="empty-folders" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-inner animate-pulse">
                  <span className="material-icons-round text-5xl text-slate-300 dark:text-slate-600">folder_open</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Belum ada folder</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm">Buat folder baru untuk mulai mengorganisir materi belajarmu.</p>
              </motion.div>
            )
          ) : (
            // FILES VIEW
            filteredFiles.length > 0 ? (
              <motion.div 
                key="files"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={viewMode === 'grid' ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4" : "flex flex-col gap-3"}
              >
                {filteredFiles.map((file, idx) => {
                  let badgeColor = "bg-rose-500/10 text-rose-600 dark:text-rose-400";
                  if (file.type === 'docx') badgeColor = "bg-blue-500/10 text-blue-600 dark:text-blue-400";
                  if (file.type === 'pptx') badgeColor = "bg-orange-500/10 text-orange-600 dark:text-orange-400";
                  
                  return (
                    <motion.div 
                      variants={itemVariants}
                      key={idx}
                      className={`glass-card p-4 group hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-500/5 dark:hover:shadow-black/20 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 ${viewMode === 'list' ? 'flex items-center gap-4' : 'flex flex-col'}`}
                    >
                      <div className={`relative overflow-hidden rounded-xl flex items-center justify-center shrink-0 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 ${viewMode === 'list' ? 'w-14 h-14' : 'w-full h-24 mb-4'}`}>
                        <div className={`font-bold text-[11px] tracking-wider uppercase px-2.5 py-1 rounded-lg ${badgeColor} shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                          {file.type}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-slate-50 text-sm leading-tight truncate mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" title={file.name}>{file.name}</h3>
                          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-2">
                            <span>{file.size}</span>
                            <span>•</span>
                            <span>{file.date}</span>
                          </div>
                        </div>
                        
                        <div className={`flex items-center justify-between mt-auto ${viewMode === 'list' ? 'w-[200px] shrink-0 ml-4' : ''}`}>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/50 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                            <span className="material-icons-round text-[14px]">check_circle</span> Ready
                          </span>
                          
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="w-8 h-8 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-500/10 flex items-center justify-center text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                              <span className="material-icons-round text-lg">chat_bubble_outline</span>
                            </button>
                            <button onClick={() => handleDeleteFile(file.name)} className="w-8 h-8 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-500/10 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors">
                              <span className="material-icons-round text-lg">delete_outline</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div key="empty-files" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-inner animate-pulse">
                  <span className="material-icons-round text-5xl text-slate-300 dark:text-slate-600">note_add</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Belum ada file</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm">Unggah dokumen pertamamu ke folder ini untuk mulai belajar.</p>
              </motion.div>
            )
          )}
        </AnimatePresence>

      </div>

      {/* NEW FOLDER MODAL */}
      <AnimatePresence>
        {isFolderModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              onClick={() => setIsFolderModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Folder Baru</h2>
                  <button onClick={() => setIsFolderModalOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    <span className="material-icons-round text-sm">close</span>
                  </button>
                </div>
                
                {/* Modern Preview & Input */}
                <div className="flex items-center gap-4 mb-6 bg-slate-50 dark:bg-slate-900/50 p-2.5 pr-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 focus-within:border-blue-500/50 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                  <div className="relative w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-inner" style={{ background: `linear-gradient(135deg, ${selectedColor}20, ${selectedColor}05)` }}>
                    <span className="material-icons-round absolute drop-shadow-sm" style={{ fontSize: '40px', color: selectedColor, opacity: 0.9 }}>folder</span>
                    <span className="relative z-10 text-xl drop-shadow-md">{selectedIcon}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <input 
                      type="text" 
                      placeholder="Nama folder..."
                      value={newFolderName}
                      onChange={(e) => setNewFolderName(e.target.value)}
                      className="w-full bg-transparent border-none text-slate-900 dark:text-slate-50 font-bold text-base placeholder:text-slate-400 focus:outline-none focus:ring-0 p-0"
                      autoFocus
                    />
                  </div>
                </div>

                {/* Sleek Segmented Control for Tabs */}
                <div className="flex p-1 bg-slate-100 dark:bg-slate-900/50 rounded-xl mb-4">
                  <button onClick={() => setFolderTab('icon')} className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all duration-300 ${folderTab === 'icon' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}>Pilih Ikon</button>
                  <button onClick={() => setFolderTab('color')} className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all duration-300 ${folderTab === 'color' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}>Pilih Warna</button>
                </div>

                <div className="h-48 overflow-y-auto custom-scrollbar -mx-2 px-2">
                  {folderTab === 'icon' ? (
                    <div className="grid grid-cols-6 gap-2 py-1">
                      {ICONS.map((icon, i) => (
                        <button 
                          key={i} 
                          onClick={() => setSelectedIcon(icon)}
                          className={`aspect-square rounded-xl flex items-center justify-center text-xl transition-all ${selectedIcon === icon ? 'bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 scale-110 shadow-sm' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:scale-105 border border-transparent'}`}
                        >
                          {icon === '' ? <span className="material-icons-round text-slate-300 dark:text-slate-600 text-lg">block</span> : icon}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-6 gap-3 py-2 px-1">
                      {COLORS.map(color => (
                        <button 
                          key={color} 
                          onClick={() => setSelectedColor(color)}
                          className={`aspect-square rounded-full transition-all relative flex items-center justify-center ${selectedColor === color ? 'scale-110 shadow-md ring-2 ring-offset-2 dark:ring-offset-slate-800' : 'hover:scale-105'}`}
                          style={{ backgroundColor: color, '--tw-ring-color': color }}
                        >
                          {selectedColor === color && (
                            <span className="material-icons-round text-white text-sm drop-shadow-md">check</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-700/50 flex gap-3">
                <button onClick={() => setIsFolderModalOpen(false)} className="flex-1 py-2.5 font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors text-sm">Batal</button>
                <button onClick={handleCreateFolder} className="flex-[2] py-2.5 font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-sm">Buat Folder</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* UPLOAD DOCUMENT MODAL */}
      <AnimatePresence>
        {isUploadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              onClick={() => !isUploading && setIsUploadModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 pb-3 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Upload Dokumen Baru</h2>
                {!isUploading && (
                  <button onClick={() => setIsUploadModalOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    <span className="material-icons-round text-base">close</span>
                  </button>
                )}
              </div>
              
              <div className="p-6 pt-3 overflow-y-auto custom-scrollbar">
                {!isUploading && uploadFiles.length === 0 && (
                  <div className="flex flex-col items-center">
                    <label className="w-full border-2 border-dashed border-slate-200 dark:border-slate-700/70 rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group bg-slate-50/30 dark:bg-slate-900/20 mb-6">
                      <input type="file" multiple accept=".pdf,.docx,.pptx,.txt" className="hidden" onChange={handleFileUpload} />
                      
                      <div className="w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 dark:from-amber-400 dark:to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300 transform -rotate-3 group-hover:rotate-0">
                        <span className="material-icons-round text-white text-4xl">folder</span>
                      </div>
                      
                      <h3 className="text-slate-900 dark:text-white font-extrabold text-lg mb-2 tracking-tight">Seret file ke sini atau klik untuk pilih</h3>
                      <p className="text-sm font-medium text-slate-400 dark:text-slate-500">PDF, PPT, PPTX, DOC, DOCX, TXT didukung</p>
                    </label>

                    <div className="flex flex-wrap justify-center gap-2.5 w-full">
                      <button 
                        onClick={() => document.querySelector('input[type="file"]').click()}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 rounded-full font-semibold text-xs text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow transition-all group"
                      >
                        <span className="material-icons-round text-base group-hover:-translate-y-0.5 transition-transform">upload</span> Upload Files
                      </button>
                      <button 
                        onClick={() => alert('Fitur tautan website segera hadir')}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 rounded-full font-semibold text-xs text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow transition-all group"
                      >
                        <span className="material-icons-round text-base group-hover:rotate-12 transition-transform">link</span> Websites
                      </button>
                      <button 
                        onClick={() => alert('Integrasi Google Drive segera hadir')}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 rounded-full font-semibold text-xs text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow transition-all group"
                      >
                        <span className="material-icons-round text-base group-hover:scale-110 transition-transform">add_to_drive</span> Drive
                      </button>
                      <button 
                        onClick={() => alert('Fitur paste teks segera hadir')}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 rounded-full font-semibold text-xs text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow transition-all group"
                      >
                        <span className="material-icons-round text-base group-hover:scale-110 transition-transform">content_paste</span> Teks
                      </button>
                    </div>
                  </div>
                )}

                {uploadFiles.length > 0 && (
                  <div className="space-y-3">
                    {uploadFiles.map((file, idx) => (
                      <div key={idx} className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-sm border border-slate-200 dark:border-slate-700">
                          <span className="material-icons-round text-slate-400">insert_drive_file</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-sm text-slate-900 dark:text-slate-50 truncate">{file.name}</span>
                            {!isUploading && (
                              <button onClick={() => handleRemoveUploadFile(idx)} className="text-slate-400 hover:text-rose-500 transition-colors shrink-0 ml-2">
                                <span className="material-icons-round text-sm">close</span>
                              </button>
                            )}
                          </div>
                          {isUploading ? (
                            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-2">
                              <div className="h-full bg-blue-500 dark:bg-blue-400 transition-all duration-200 ease-out" style={{ width: `${uploadProgress[idx] || 0}%` }}></div>
                            </div>
                          ) : (
                            <div className="text-xs font-medium text-slate-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {!isUploading && uploadFiles.length > 0 && (
                  <label className="mt-4 block border border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-3 text-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <input type="file" multiple accept=".pdf,.docx,.pptx" className="hidden" onChange={handleFileUpload} />
                    + Tambah File Lain
                  </label>
                )}
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 flex gap-3">
                <button 
                  onClick={() => setIsUploadModalOpen(false)} 
                  disabled={isUploading}
                  className="flex-1 py-2.5 font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors disabled:opacity-50"
                >
                  Batal
                </button>
                <button 
                  onClick={startUpload}
                  disabled={uploadFiles.length === 0 || isUploading}
                  className="flex-1 py-2.5 font-bold text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-50 disabled:shadow-none hover:-translate-y-0.5 relative"
                >
                  {isUploading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Mengunggah...
                    </span>
                  ) : 'Unggah Sekarang'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </DashboardLayout>
  );
};

export default Documents;
