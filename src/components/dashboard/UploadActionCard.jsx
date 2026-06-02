import React from 'react';

const UploadActionCard = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[200px]">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark z-0"></div>
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-0"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-4 right-8 text-2xl opacity-50 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 delay-100">📄</div>
      <div className="absolute top-12 right-20 text-xl opacity-30 group-hover:-translate-y-4 group-hover:opacity-80 transition-all duration-500 delay-200">📊</div>
      <div className="absolute bottom-6 right-10 text-2xl opacity-40 group-hover:-translate-y-3 group-hover:opacity-90 transition-all duration-500 delay-300">💡</div>

      <div className="relative z-10 p-6 flex flex-col h-full justify-between">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-lg border border-white/30">
            <span className="material-icons-round text-3xl">cloud_upload</span>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold leading-tight">Upload Materi Baru</h3>
            <p className="text-sm text-white/80 mt-1 line-clamp-2">PDF, PPT, atau DOCX. AI akan merangkumnya untukmu.</p>
          </div>
        </div>

        <button className="w-full py-3 px-4 rounded-xl bg-white text-primary-light dark:text-primary-dark font-bold flex items-center justify-between group-hover:shadow-xl transition-all">
          <span>Mulai Belajar</span>
          <span className="material-icons-round group-hover:translate-x-1 transition-transform">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default UploadActionCard;
