export const suggestedPrompts = [
  'Apa temuan utama dari laporan ini?',
  'Ringkaskan poin-poin kritis dalam sumber',
  'Buat daftar tindakan berdasarkan isi dokumen',
  'Bandingkan data dari berbagai sumber',
  'Jelaskan istilah teknis yang ada dalam sumber',
];

export const aiReplies = [
  `Berdasarkan sumber yang Anda berikan, berikut adalah **temuan utama**:\n\n• Pertumbuhan pendapatan sebesar **23%** dibandingkan tahun sebelumnya <span class="citation">1</span>\n• Ekspansi ke 3 pasar baru di Asia Tenggara <span class="citation">2</span>\n• Efisiensi biaya operasional meningkat **15%** melalui otomatisasi proses <span class="citation">1</span>\n\nSumber-sumber ini secara konsisten menunjukkan tren positif dalam kinerja bisnis.`,
  `Saya telah menganalisis sumber aktif Anda. **Poin-poin kritis** yang ditemukan:\n\n1. **Strategi pertumbuhan** difokuskan pada segmen B2B enterprise\n2. **Risiko utama** mencakup fluktuasi mata uang dan regulasi baru <span class="citation">2</span>\n3. **Peluang** terbesar ada di digitalisasi layanan pelanggan\n\nApakah Anda ingin saya elaborasi lebih lanjut tentang salah satu poin ini?`,
  `Berdasarkan dokumen yang tersedia, berikut adalah **rekomendasi tindakan** yang dapat diambil:\n\n• Prioritaskan investasi di infrastruktur digital Q3 2026\n• Rekrut 50 tenaga ahli untuk divisi teknologi <span class="citation">3</span>\n• Review ulang kontrak vendor utama sebelum akhir semester\n• Implementasikan dashboard real-time untuk monitoring KPI`,
];

export const sessionHistory = {
  kalkulus: {
    title: 'Kalkulus',
    sources: [
      { id: 101, name: 'Limit_dan_Turunan.pdf', type: 'PDF', icon: '📄', checked: true },
      { id: 102, name: 'Integral_Tentu.pdf', type: 'PDF', icon: '📄', checked: true }
    ],
    messages: [
      { role: 'user', text: 'Jelaskan konsep dasar tentang limit fungsi.' },
      { role: 'ai', text: 'Berdasarkan sumber **Limit dan Turunan**, konsep dasar **limit** menjelaskan perilaku suatu fungsi mendekati nilai input tertentu.\n\n• **Limit Kiri & Kanan**: Fungsi $f(x)$ dikatakan memiliki limit $L$ di $c$ jika dan hanya jika limit dari kiri mendekati limit dari kanan <span class="citation">1</span>.\n• **Aplikasi**: Konsep ini mendasari definisi turunan dan kontinuitas fungsi.' }
    ]
  },
  ppkn: {
    title: 'PPKn',
    sources: [
      { id: 201, name: 'Pancasila_dan_UUD1945.pdf', type: 'PDF', icon: '📄', checked: true },
      { id: 202, name: 'Hak_dan_Kewajiban_Warga_Negara.pdf', type: 'PDF', icon: '📄', checked: true }
    ],
    messages: [
      { role: 'user', text: 'Sebutkan hak dan kewajiban warga negara berdasarkan UUD 1945.' },
      { role: 'ai', text: 'Berdasarkan sumber **Pancasila dan UUD 1945**, berikut adalah poin-poin penting hak dan kewajiban warga negara:\n\n• **Hak**: Mendapatkan pekerjaan & penghidupan yang layak (Pasal 27 ayat 2), berserikat dan berkumpul (Pasal 28) <span class="citation">1</span>.\n• **Kewajiban**: Menjunjung tinggi hukum dan pemerintahan (Pasal 27 ayat 1), ikut serta dalam pembelaan negara (Pasal 27 ayat 3) <span class="citation">2</span>.' }
    ]
  },
  algoritma: {
    title: 'Algoritma & Pemrograman',
    sources: [
      { id: 301, name: 'Sorting_Algorithm.pdf', type: 'PDF', icon: '📄', checked: true },
      { id: 302, name: 'Graph_Theory.pdf', type: 'PDF', icon: '📄', checked: true }
    ],
    messages: [
      { role: 'user', text: 'Jelaskan perbedaan mendasar antara Bubble Sort dan QuickSort.' },
      { role: 'ai', text: 'Berdasarkan sumber **Sorting Algorithm**, perbedaan utamanya terletak pada efisiensi:\n\n• **Bubble Sort** memiliki kompleksitas O(n²) dan bekerja dengan menukar elemen tetangga secara berulang.\n• **QuickSort** menggunakan pendekatan *divide and conquer* dengan kompleksitas rata-rata O(n log n), yang jauh lebih cepat untuk data besar <span class="citation">1</span>.' }
    ]
  }
};

export const quizzes = {
  kalkulus: [
    {
        question: "Berapakah nilai dari lim (x→2) (x² - 4) / (x - 2) ?",
        badge: "LIMIT",
        options: [
            { letter: 'A', text: '2', isCorrect: false, rationale: "Faktorisasi salah atau subtitusi nilai x yang salah." },
            { letter: 'B', text: '4', isCorrect: true, rationale: "Tepat sekali! Faktorkan pembilang: (x² - 4) = (x - 2)(x + 2). Setelah membagi dengan (x - 2), diperoleh lim (x→2) (x + 2) = 2 + 2 = 4. Jawaban yang tepat adalah B." },
            { letter: 'C', text: '0', isCorrect: false, rationale: "Hasil 0 diperoleh jika salah melakukan operasi pembagian." },
            { letter: 'D', text: 'Tidak ada (DNE)', isCorrect: false, rationale: "Limit ini ada karena bentuk tak tentu 0/0 dapat disederhanakan." }
        ]
    },
    {
        question: "Berapakah nilai dari lim (x→0) sin(x) / x ?",
        badge: "LIMIT TRIGONOMETRI",
        options: [
            { letter: 'A', text: '0', isCorrect: false, rationale: "Ini bukan limit nilai 0." },
            { letter: 'B', text: '1', isCorrect: true, rationale: "Benar! Ini adalah limit trigonometri dasar yang sangat terkenal di mana lim (x→0) sin(x)/x = 1." },
            { letter: 'C', text: 'Tidak terdefinisi', isCorrect: false, rationale: "Limit ini terdefinisi dengan baik menggunakan Teorema Apit." },
            { letter: 'D', text: 'π', isCorrect: false, rationale: "Tidak ada hubungan dengan nilai π secara langsung." }
        ]
    },
    {
        question: "Tentukan turunan pertama dari f(x) = 3x² + 5x - 2.",
        badge: "TURUNAN",
        options: [
            { letter: 'A', text: '6x + 5', isCorrect: true, rationale: "Tepat! Menggunakan aturan pangkat: d/dx(3x²) = 6x, d/dx(5x) = 5, dan d/dx(-2) = 0. Jadi f'(x) = 6x + 5." },
            { letter: 'B', text: '3x + 5', isCorrect: false, rationale: "Koefisien x² belum dikalikan dengan pangkatnya." },
            { letter: 'C', text: '6x² + 5', isCorrect: false, rationale: "Pangkat x pada turunan 3x² seharusnya berkurang 1 menjadi x¹." },
            { letter: 'D', text: '6x', isCorrect: false, rationale: "Anda melupakan turunan dari 5x." }
        ]
    }
  ],
  ppkn: [
    {
        question: "Apa dasar negara Republik Indonesia?",
        badge: "PANCASILA",
        options: [
            { letter: 'A', text: 'UUD 1945', isCorrect: false, rationale: "UUD 1945 adalah konstitusi tertulis negara, bukan dasar negara." },
            { letter: 'B', text: 'Pancasila', isCorrect: true, rationale: "Tepat sekali! Pancasila adalah dasar negara sekaligus ideologi nasional Republik Indonesia." },
            { letter: 'C', text: 'Bhinneka Tunggal Ika', isCorrect: false, rationale: "Bhinneka Tunggal Ika adalah semboyan negara." },
            { letter: 'D', text: 'Proklamasi', isCorrect: false, rationale: "Proklamasi adalah peristiwa kemerdekaan." }
        ]
    },
    {
        question: "Pasal UUD 1945 manakah yang mengatur tentang hak atas pekerjaan dan penghidupan yang layak?",
        badge: "KONSTITUSI",
        options: [
            { letter: 'A', text: 'Pasal 27 ayat 1', isCorrect: false, rationale: "Pasal 27 ayat 1 mengatur tentang kedudukan yang sama di dalam hukum." },
            { letter: 'B', text: 'Pasal 27 ayat 2', isCorrect: true, rationale: "Benar! Pasal 27 ayat 2 menyatakan bahwa tiap-tiap warga negara berhak atas pekerjaan dan penghidupan yang layak bagi kemanusiaan." },
            { letter: 'C', text: 'Pasal 28', isCorrect: false, rationale: "Pasal 28 mengatur tentang kemerdekaan berserikat dan berkumpul." },
            { letter: 'D', text: 'Pasal 30 ayat 1', isCorrect: false, rationale: "Pasal 30 ayat 1 mengatur tentang pertahanan dan keamanan negara." }
        ]
    }
  ],
  algoritma: [
    {
        question: "Manakah algoritma sorting yang memiliki kompleksitas rata-rata O(n log n)?",
        badge: "SORTING ALGORITHM",
        options: [
            { letter: 'A', text: 'Bubble Sort', isCorrect: false, rationale: "Bubble Sort memiliki kompleksitas rata-rata O(n²)." },
            { letter: 'B', text: 'Selection Sort', isCorrect: false, rationale: "Selection Sort memiliki kompleksitas rata-rata O(n²)." },
            { letter: 'C', text: 'QuickSort', isCorrect: true, rationale: "Tepat! QuickSort menggunakan pembagian divide and conquer sehingga memiliki kompleksitas rata-rata O(n log n)." },
            { letter: 'D', text: 'Insertion Sort', isCorrect: false, rationale: "Insertion Sort memiliki kompleksitas rata-rata O(n²)." }
        ]
    },
    {
        question: "Manakah algoritma yang bekerja dengan menukar elemen tetangga yang berurutan secara berulang jika urutannya salah?",
        badge: "SORTING ALGORITHM",
        options: [
            { letter: 'A', text: 'QuickSort', isCorrect: false, rationale: "QuickSort bekerja dengan mempartisi data di sekitar pivot." },
            { letter: 'B', text: 'Bubble Sort', isCorrect: true, rationale: "Benar! Bubble Sort secara berulang membandingkan dan menukar elemen yang bertetangga jika urutannya tidak sesuai." },
            { letter: 'C', text: 'Merge Sort', isCorrect: false, rationale: "Merge Sort bekerja dengan membagi array menjadi dua lalu menggabungkannya." },
            { letter: 'D', text: 'Binary Search', isCorrect: false, rationale: "Binary Search adalah algoritma pencarian, bukan pengurutan." }
        ]
    }
  ]
};

export const flashcards = {
  kalkulus: [
    {
        category: "Limit",
        question: "Apa yang dimaksud dengan limit suatu fungsi f(x) saat x mendekati a?",
        answer: "Limit adalah nilai yang didekati f(x) ketika x semakin dekat ke nilai a, tanpa harus tepat di a.",
        formula: "lim(x→a) f(x) = L",
        subtext: "Penting: f(a) belum tentu sama dengan L. Limit membahas perilaku fungsi di sekitar titik, bukan di titiknya.",
        rated: null
    },
    {
        category: "Limit",
        question: "Apa bunyi Teorema Apit (Squeeze Theorem) dalam penentuan limit?",
        answer: "Jika f(x) ≤ g(x) ≤ h(x) untuk semua x dekat a, dan limit f(x) serta h(x) saat x→a adalah L, maka limit g(x) juga L.",
        formula: "lim f(x) = lim h(x) = L ⇒ lim g(x) = L",
        subtext: "Sangat berguna untuk mencari limit fungsi trigonometri kompleks seperti x² sin(1/x).",
        rated: null
    },
    {
        category: "Turunan",
        question: "Apa definisi formal dari turunan f'(x) menggunakan limit?",
        answer: "Turunan adalah limit dari perubahan rata-rata fungsi saat perubahan input (h) mendekati nol.",
        formula: "f'(x) = lim(h→0) [f(x+h) - f(x)] / h",
        subtext: "Definisi ini merepresentasikan kemiringan garis singgung kurva f(x) pada titik x.",
        rated: null
    }
  ],
  ppkn: [
    {
        category: "Pancasila",
        question: "Apa makna lambang sila ke-1 Pancasila, yaitu Bintang Emas?",
        answer: "Bintang emas melambangkan cahaya rohani bagi setiap manusia, dipancarkan oleh Tuhan Yang Maha Esa.",
        formula: "Ketuhanan Yang Maha Esa",
        subtext: "Lambang ini terletak di bagian tengah perisai Garuda Pancasila.",
        rated: null
    },
    {
        category: "Konstitusi",
        question: "Pasal berapa di UUD 1945 yang menjamin kemerdekaan tiap penduduk untuk memeluk agamanya masing-masing?",
        answer: "Pasal 29 ayat 2 UUD 1945 menjamin kemerdekaan beragama bagi seluruh masyarakat.",
        formula: "Pasal 29 Ayat 2 UUD 1945",
        subtext: "Negara menjamin kemerdekaan tiap-tiap penduduk untuk memeluk agamanya masing-masing.",
        rated: null
    }
  ],
  algoritma: [
    {
        category: "Sorting",
        question: "Apa karakteristik utama dari algoritma Insertion Sort?",
        answer: "Mengurutkan data dengan cara mengambil satu per satu elemen lalu menyisipkannya pada posisi yang tepat dalam array terurut.",
        formula: "Time Complexity: O(n²)",
        subtext: "Sangat efisien untuk dataset kecil atau data yang hampir terurut.",
        rated: null
    },
    {
        category: "Searching",
        question: "Bagaimana pembagian ruang pencarian pada Binary Search?",
        answer: "Binary Search membagi ruang pencarian menjadi setengah di setiap iterasi dengan membandingkan nilai tengah.",
        formula: "Time Complexity: O(log n)",
        subtext: "Syarat wajib agar Binary Search bekerja adalah data harus dalam kondisi terurut.",
        rated: null
    }
  ]
};
