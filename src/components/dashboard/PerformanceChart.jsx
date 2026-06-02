import React, { useState, useRef, useEffect } from 'react';

const chartData = {
  weekly: {
    id: 'weekly',
    label: 'Minggu ini',
    data: [3.2, 4.5, 2.1, 6.4, 5.0, 7.2, 4.1],
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
    total: '32j 30m',
    avg: '4.6j / hari',
    yMax: 10
  },
  monthly: {
    id: 'monthly',
    label: 'Bulan ini',
    data: [
      3.5, 4.2, 2.0, 0, 5.1, 6.4, 3.2,
      7.0, 8.5, 9.1, 4.0, 2.1, 3.5, 5.0,
      6.5, 7.2, 8.0, 4.5, 3.0, 0, 2.5,
      6.0, 8.5, 10.5, 7.5, 6.5, 5.0, 4.5,
      3.5, 5.0, 6.2
    ],
    labels: Array.from({length: 31}, (_, i) => `${i + 1}/5`),
    total: '154j 30m',
    avg: '5.0j / hari',
    yMax: 12
  },
  all_time: {
    id: 'all_time',
    label: 'Semua waktu',
    data: [45.2, 52.1, 38.4, 60.5, 75.2, 88.0, 64.5, 92.1, 85.0, 95.5, 105.2, 110.0],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
    total: '890j 45m',
    avg: '74.2j / bln',
    yMax: 120
  }
};

const PerformanceChart = () => {
  const [period, setPeriod] = useState('monthly');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectPeriod = (key) => {
    setPeriod(key);
    setDropdownOpen(false);
  };

  const current = chartData[period];

  return (
    <div className="glass-card p-6 flex flex-col bg-white dark:bg-slate-800/50 rounded-[2rem] border border-slate-200 dark:border-slate-700/50 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Performa Belajar</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Waktu belajar berdasarkan {current.label.toLowerCase()}</p>
        </div>
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 shadow-sm"
          >
            <span className="material-icons-round text-sm">today</span>
            <span>{current.label}</span>
            <span className="material-icons-round text-sm">expand_more</span>
          </button>
          
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-20 py-2 overflow-hidden">
              {Object.values(chartData).map((p) => (
                <button 
                  key={p.id}
                  onClick={() => handleSelectPeriod(p.id)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${period === p.id ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'}`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 mt-4 relative">
        {/* Y-Axis */}
        <div className="flex flex-col justify-between text-[10px] text-slate-400 font-medium pb-6 pr-4 h-[140px]">
          <span>{current.yMax.toFixed(1)}</span>
          <span>{(current.yMax * 0.75).toFixed(1)}</span>
          <span>{(current.yMax * 0.5).toFixed(1)}</span>
          <span>{(current.yMax * 0.25).toFixed(1)}</span>
          <span>0</span>
        </div>
        
        {/* Chart Area */}
        <div className="flex-1 border-b border-slate-200 dark:border-slate-700 border-dashed h-[140px] relative">
          {/* Horizontal Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            <div className="w-full border-t border-slate-200 dark:border-slate-700 border-dashed"></div>
            <div className="w-full border-t border-slate-200 dark:border-slate-700 border-dashed"></div>
            <div className="w-full border-t border-slate-200 dark:border-slate-700 border-dashed"></div>
            <div className="w-full border-t border-slate-200 dark:border-slate-700 border-dashed"></div>
            <div className="w-full border-t border-slate-200 dark:border-slate-700 border-dashed"></div>
          </div>

          <div className="h-full flex items-end justify-between gap-1 pb-[1px] relative z-10 px-2">
            {current.data.map((val, i) => (
              <div key={i} className="w-full relative group flex flex-col items-center justify-end h-full">
                <div 
                  className="w-full max-w-[20px] bg-blue-500 dark:bg-blue-500 rounded-t-sm transition-all duration-500 ease-out hover:bg-blue-600 dark:hover:bg-blue-400 shadow-sm"
                  style={{ height: `${(val / current.yMax) * 100}%` }}
                ></div>
                
                {/* X-Axis Label below (Optimized for long data) */}
                {(current.data.length <= 15 || i % 5 === 0 || i === current.data.length - 1) && (
                  <div className="absolute -bottom-6 text-[10px] text-slate-400 font-medium whitespace-nowrap">
                    {current.labels[i]}
                  </div>
                )}

                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold px-2.5 py-1 rounded-lg transition-opacity whitespace-nowrap z-20 shadow-lg pointer-events-none">
                  {val.toFixed(1)} jam
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/50 shadow-sm rounded-xl p-4 transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-500 flex items-center justify-center text-xl shrink-0">🏆</div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white leading-tight">#4</div>
            <div className="text-xs text-slate-500 font-medium">Peringkat Liga</div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/50 shadow-sm rounded-xl p-4 transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="w-10 h-10 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-xl shrink-0">📚</div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white leading-tight">{current.total}</div>
            <div className="text-xs text-slate-500 font-medium">Total Belajar</div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/50 shadow-sm rounded-xl p-4 transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-500 flex items-center justify-center text-xl shrink-0">📊</div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white leading-tight">{current.avg}</div>
            <div className="text-xs text-slate-500 font-medium">Rata-rata</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
