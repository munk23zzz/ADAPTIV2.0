import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const UploadModal = ({ isOpen, onClose, onUploadComplete }) => {
  const [uploadFiles, setUploadFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});

  const handleFileUpload = (e) => {
    const selected = Array.from(e.target.files).filter(f => {
      const ext = f.name.split('.').pop().toLowerCase();
      return ['pdf', 'docx', 'pptx', 'txt'].includes(ext);
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
            setTimeout(() => {
              // Return processed file data to parent
              const formattedFiles = uploadFiles.map(f => ({
                name: f.name,
                size: (f.size / (1024 * 1024)).toFixed(1) + ' MB',
                date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
                type: f.name.split('.').pop().toLowerCase(),
                status: 'ready'
              }));
              
              if (onUploadComplete) onUploadComplete(formattedFiles);
              
              setUploadFiles([]);
              setIsUploading(false);
              setUploadProgress({});
              onClose();
            }, 500);
          }
        } else {
          setUploadProgress(prev => ({ ...prev, [idx]: progress }));
        }
      }, 200);
    });
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            style={{ opacity: 1 }}
            onClick={() => !isUploading && onClose()}
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
                <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
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
                          <span className="font-semibold text-sm text-slate-900 dark:text-white truncate pr-4">{file.name}</span>
                          {!isUploading && (
                            <button onClick={() => handleRemoveUploadFile(idx)} className="text-slate-400 hover:text-rose-500 transition-colors">
                              <span className="material-icons-round text-sm">close</span>
                            </button>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                          <span>{(file.size / (1024 * 1024)).toFixed(1)} MB</span>
                          {isUploading && <span className="font-bold text-blue-600 dark:text-blue-400">{Math.round(uploadProgress[idx] || 0)}%</span>}
                        </div>
                        
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 transition-all duration-200 ease-out"
                            style={{ width: `${uploadProgress[idx] || 0}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="p-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-700/50 flex gap-3">
              <button onClick={onClose} disabled={isUploading} className="flex-1 py-2.5 font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors text-sm disabled:opacity-50">Batal</button>
              <button 
                onClick={startUpload}
                disabled={uploadFiles.length === 0 || isUploading} 
                className="flex-[2] py-2.5 font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-sm disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {isUploading ? 'Mengunggah...' : 'Unggah Sekarang'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
};

export default UploadModal;
