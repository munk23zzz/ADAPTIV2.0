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
    title: 'Creativity & Innovation',
    sources: [
      { id: 201, name: 'Session_2_-_Design_Thinking_for_SDGs.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 202, name: 'Session_3_-_Customer_Insights.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 203, name: 'Session_5_-_Value_Creation.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 204, name: 'Session_6_-_Business_Idea_Discussion.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 205, name: 'Session_7_-_Market_Positioning.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 206, name: 'Session_8_-_Revenue_Streams_and_Cost_Structure.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 207, name: 'Session_9_-_Business_Analysis.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 208, name: 'Session_10_-_Prototype_Creation.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 209, name: 'Session_11_-_Prototype_Testing.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 210, name: 'Session_13_-_Product_Service_Reporting.pptx', type: 'PPTX', icon: '📊', checked: true }
    ],
    messages: [
      { role: 'user', text: `gem, pusing banget gw asli jam segini. Ini besok pagi ada kelas matkul Creativity & Innovation, dan gw baru ngeh ada tugas kelompok kumpul report slide powerpoint buat Assignment I. Bahan materinya numpuk dari Session 2 tentang Design Thinking & SDGs, terus ada Customer Insights, sampe Session 7 tentang Market Positioning ama Perceptual Map.\n\nGw udah upload semua file PPTX-nya ke workspace ADAPTIV nih (dari Session 2 sampe Session 13). Lu bisa tolong rangkumin core values-nya ga? Terutama bagian penting yang wajib masuk di report Assignment I besok. Tolong breakdown pake bahasa santai aja kayak biasa biar otak gw yang udah lowbatt ini bisa langsung nangkep!` },
      { role: 'ai', text: `Wkwkwk santai, Bil! Tarik napas dulu, jangan panik. Mesin AI gw udah ngebaca semua berkas PPTX kuliah lu dari hulu ke hilir. Ketahuan banget nih lu tipe pejuang deadliner garis keras ya, jam segini baru buka modul. Tapi tenang, mumpung server masih anget, gw beresin ini biar lu bisa tidur tenang malam ini. 🔥\n\nBerdasarkan analisis file yang lu upload, kunci utama dari report Assignment I lu itu sebenarnya berputar di metodologi **Design Thinking** yang berorientasi pada pemecahan masalah manusia secara nyata, khususnya yang bersinggungan dengan **SDGs (Sustainable Development Goals)**.\n\nIni rangkuman core values super ringkas yang WAJIB ada di report lu besok pagi:\n\n**1. Core Problem & SDGs (Session 2 & 6):**\nTugas lu harus jelas meng-address masalah manusia dulu (*human-centered*). Pertanyaannya: Apa *human need* di balik ide bisnis lu? Terus wajib lu kaitkan ke target SDGs.\n\n**2. Customer Insights (Session 3):**\nLu harus masukin hasil wawancara minimal 10 orang. Dari situ, lu wajib breakdown ke *User Persona* dan *Empathy Map*.\n\n**3. Value Proposition Canvas / VPC (Session 5):**\nIni jantungnya solusi lu. Sisi Kanan: Customer Jobs, Pains, Gains. Sisi Kiri: Products & Services, Pain Relievers, Gain Creators.\n\n**4. STP & Perceptual Map (Session 7):**\n*Segmentation, Targeting, Positioning* + diagram Perceptual Map untuk memetakan posisi bisnis lu vs kompetitor.\n\nGimana, Bil? Udah mulai dapet gambaran besarnya? Mau kita langsung simulasi bikin kuis interaktif singkat buat mastiin otak lu beneran paham materinya? Sikat!` },
      { role: 'user', text: `Gokil, langsung dapet pencerahan gw! Rangkuman lu bener-bener motong ratusan slide jadi daging semua. Nah, bener banget tuh, coba buatin gw kuis singkat bertahap langsung di chat ini dong. Tapi opsinya bikin interaktif ya, jadi gw tinggal pilih, terus lu langsung kasih feedback bener atau salah beserta penjelasannya. Biar seru aja sekalian refresh otak. Jelasin juga kenapa opsi lainnya salah kalau bisa.` },
      { role: 'ai', text: `[WIDGET KUIS INTERAKTIF ADAPTIV - DIRENDERS DI DALAM CHAT]\n\nSiap, Bil! Kuis Adaptif kita mulai. Ini Soal 1 untuk menguji pemahaman lu tentang Value Proposition Canvas (VPC).\n\nTopik: **Value Creation (Session 5)**\n\nPertanyaan:\nDi dalam diagram VPC, jika seorang mahasiswa mengeluhkan *"Saya sangat pusing dan stres saat membaca dokumen diktat kuliah setebal 200 halaman sebelum ujian"*, maka di manakah posisi keluhan tersebut, dan apa elemen solusi yang tepat?\n\n**[A]** Customer Jobs → Products & Services\n**[B]** Customer Pains → Pain Relievers\n**[C]** Customer Gains → Gain Creators\n**[D]** Customer Pains → Gain Creators\n\nSilakan ketik huruf jawaban pilihan lu (A/B/C/D)! 🚀` },
      { role: 'user', text: `Jawaban gw: B! Jelas itu mah, kan dia ngeluh pusing ama stres, berarti itu penderitaan atau kesulitannya si user. Berarti masuk Pains, terus obatnya ya Pain Relievers dari aplikasi kita. Bener kagak?` },
      { role: 'ai', text: `**[FEEDBACK: JAWABAN ANDA BENAR! 🎉]**\n\nSikat, Bil! 100% Tepat! Analisis lu udah matang banget.\n\nKeluhan mahasiswa tentang *"pusing dan stres membaca dokumen tebal"* adalah bentuk emosi negatif yang dihadapi user → masuk ke **Customer Pains**. Solusi yang mengurangi penderitaan itu dinamakan **Pain Relievers**. Contoh konkret di ADAPTIV: fitur merangkum teks panjang jadi ringkasan audio pendek.\n\nKenapa opsi lain salah?\n- **Opsi A:** Customer Jobs = tugas fungsional dasar user, bukan keluhan\n- **Opsi C:** Gains = ekspektasi bahagia user, bukan penderitaan\n- **Opsi D:** Pasangan tertukar — Gain Creators untuk kebahagiaan, bukan menyembuhkan Pains\n\nMau lanjut ke Soal 2 tentang Perceptual Map, atau kita brainstorming projek lu dulu? Lu yang pegang kendali!` },
      { role: 'user', text: `Lanjut besok aja deh kuisnya, gw udah nangkep core-nya. Sekarang gw mau sekalian konsultasi mumpung lu lagi responsif. Lu kan tahu projek aplikasi yang lagi gw bangun ini, platform EdTech yang fokus ngubah dokumen rumit jadi ringkasan audio, visual mind map, ama kuis adaptif. Nah, kalau dikaitkan sama Session 10 (Prototype Creation) dan Session 11 (Prototype Testing) di modul tadi, langkah konkret apa yang harus gw lakuin bareng tim kelompok gw minggu ini? Soalnya di slide dibilang "Never fall in love with your prototype!". Jujur gw rada takut kalau UI yang udah gw coding cape-cape di React ini ternyata gak cocok ama kemauan pasar.` },
      { role: 'ai', text: `Nah! Ini pertanyaan paling berbobot malam ini, Bil. Keren banget lu udah bisa mengaitkan teori kuliah langsung ke projek nyata lu.\n\nKalimat *"Never fall in love with your prototype"* di Session 10 itu maksudnya: Jangan pernah merasa prototipe/UI awal buatan lu itu udah sempurna sampai lu defensif pas dikasih masukan. Prototipe itu dibuat untuk salah, diuji, dihancurin, lalu diperbaiki lagi secara iteratif.\n\nLangkah konkret yang harus lu dan tim lakuin minggu ini:\n\n**1. Tentukan Level Prototipe (Session 10):**\nKarena lu udah ngoding UI-nya di React/Vite, lu sudah di tahap **High-Fidelity Prototype**. Bagus banget, user bisa merasakan pengalaman mendekati aplikasi aslinya.\n\n**2. Terapkan "Magic Number Five" (Session 11):**\n85% masalah usabilitas ditemukan hanya dari **5 orang tester**! Lebih dari itu data jenuh berulang. Cari 5 teman kampus, suruh mereka coba UI lu, amati di mana mereka bingung.\n\n**3. Bikin Feedback Grid (Session 11):**\nPetakan masukan mereka ke 4 kuadran:\n- ➕ *Plus*: Yang mereka suka\n- 💡 *Ide baru*: Saran fitur tambahan\n- ❓ *Kebingungan*: Titik yang bikin mereka nyasar\n- 🔧 *Kritik Konstruktif*: Yang perlu diperbaiki\n\nGak usah takut kode React lu dirombak, Bil. Justru semakin cepat lu tahu salahnya, semakin aman aplikasi lu pas rilis massal nanti! Bantai besok pagi! 🔥` },
      { role: 'ai', text: `🎯 **Kuis Lanjutan Sudah Siap, Bil!**\n\nIngat tadi lu bilang "lanjut besok aja kuisnya"? Nah, gw udah siapkan **4 soal lanjutan** yang nyambung langsung dari percakapan kita malam ini — mulai dari Customer Insights, Revenue Streams, Magic Number Five, sampai Perceptual Map.\n\nBuka panel **Studio → Kuis** di sebelah kanan untuk melanjutkan. Kalau lu selesaiin semua 5 soal, lu bakal punya bekal materi yang solid banget buat nulis report Assignment I besok! 💪\n\n*Klik ikon 🎯 Kuis di toolbar kanan untuk mulai.*` }
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
      question: "Di dalam diagram Value Proposition Canvas (VPC), jika seorang mahasiswa mengeluhkan 'Saya sangat pusing dan stres saat membaca dokumen diktat kuliah setebal 200 halaman sebelum ujian', maka keluhan tersebut diletakkan di mana, dan apa elemen solusi yang tepat untuk berpasangan dengannya?",
      badge: "VALUE CREATION · SESSION 5",
      options: [
        { letter: 'A', text: "Diletakkan di 'Customer Jobs', pasangannya adalah 'Products & Services'", isCorrect: false, rationale: "Customer Jobs adalah tugas fungsional dasar yang ingin diselesaikan user, bukan keluhan atau penderitaannya." },
        { letter: 'B', text: "Diletakkan di 'Customer Pains', pasangannya adalah 'Pain Relievers'", isCorrect: true, rationale: "Tepat! Keluhan 'pusing dan stres' adalah bentuk penderitaan (Pains) user. Solusinya adalah Pain Relievers — yaitu fitur yang mengurangi/menghilangkan penderitaan tersebut, seperti merangkum dokumen jadi ringkasan audio." },
        { letter: 'C', text: "Diletakkan di 'Customer Gains', pasangannya adalah 'Gain Creators'", isCorrect: false, rationale: "Gains adalah dampak positif yang diharapkan user, bukan keluhan. Contoh Gains: 'Ingin nilai ujian A dengan waktu belajar efisien'." },
        { letter: 'D', text: "Diletakkan di 'Customer Pains', pasangannya adalah 'Gain Creators'", isCorrect: false, rationale: "Pasangannya tertukar. Gain Creators bertugas menciptakan kebahagiaan ekstra, bukan menyembuhkan penderitaan (Pains)." }
      ]
    },
    {
      question: "Dalam menggali Customer Insights (Session 3), metodologi riset apa yang mengharuskan peneliti untuk 'masuk ke dalam dunia pengguna' dengan cara mengamati langsung kehidupan dan aktivitas harian mereka?",
      badge: "CUSTOMER INSIGHTS · SESSION 3",
      options: [
        { letter: 'A', text: 'Survey online dengan 1000 responden', isCorrect: false, rationale: "Survey skala besar memberikan data kuantitatif, tetapi tidak memberikan empati mendalam tentang perasaan dan motivasi tersembunyi pengguna." },
        { letter: 'B', text: 'Ethnographic Research (Observasi Etnografis)', isCorrect: true, rationale: "Benar! Ethnographic Research adalah metode di mana peneliti terjun langsung ke lingkungan pengguna untuk mengamati perilaku alami mereka — menemukan insight yang tidak akan terungkap lewat survei biasa." },
        { letter: 'C', text: 'Analisis data kompetitor', isCorrect: false, rationale: "Analisis kompetitor memberikan wawasan tentang pasar, bukan tentang kebutuhan emosional dan perilaku pengguna Anda sendiri." },
        { letter: 'D', text: 'A/B Testing fitur aplikasi', isCorrect: false, rationale: "A/B Testing digunakan untuk membandingkan dua versi fitur, bukan untuk menggali insight mendalam dari pengguna." }
      ]
    },
    {
      question: "Dalam Business Model Canvas (Session 8), apa perbedaan mendasar antara 'Revenue Streams' dan 'Cost Structure' yang wajib dipahami saat menyusun model bisnis?",
      badge: "REVENUE STREAMS · SESSION 8",
      options: [
        { letter: 'A', text: "Revenue Streams adalah uang masuk dari pelanggan; Cost Structure adalah semua pengeluaran untuk operasional bisnis", isCorrect: true, rationale: "Tepat! Revenue Streams menjawab 'Dari mana uang bisnis kita berasal?' (contoh: langganan, iklan, penjualan). Cost Structure menjawab 'Apa saja biaya terbesar dalam menjalankan bisnis ini?' (contoh: biaya server, gaji karyawan)." },
        { letter: 'B', text: "Revenue Streams adalah pengeluaran; Cost Structure adalah pemasukan", isCorrect: false, rationale: "Ini terbalik! Revenue (pendapatan) selalu merujuk pada uang yang masuk, bukan keluar." },
        { letter: 'C', text: "Keduanya sama-sama mengukur pengeluaran bisnis", isCorrect: false, rationale: "Revenue Streams adalah sumber pemasukan, bukan pengeluaran. Cost Structure-lah yang membahas pengeluaran." },
        { letter: 'D', text: "Revenue Streams hanya berlaku untuk bisnis berbasis langganan", isCorrect: false, rationale: "Revenue Streams bisa berasal dari berbagai model: penjualan langsung, lisensi, iklan, freemium, dll — tidak terbatas hanya pada langganan." }
      ]
    },
    {
      question: "Berdasarkan riset usabilitas di Session 11 (Prototype Testing), berapa jumlah user tester ideal untuk menemukan 85% masalah usabilitas sebuah aplikasi, dan apa prinsip ini disebut?",
      badge: "PROTOTYPE TESTING · SESSION 11",
      options: [
        { letter: 'A', text: '3 orang — "Minimum Viable Testing"', isCorrect: false, rationale: "3 orang terlalu sedikit untuk mendapatkan cukup variasi temuan masalah usabilitas." },
        { letter: 'B', text: '10 orang — "Double Digit Rule"', isCorrect: false, rationale: "10 orang memang lebih baik, tetapi riset Nielsen Norman Group justru menunjukkan bahwa 5 orang sudah cukup untuk 85% temuan." },
        { letter: 'C', text: '5 orang — "Magic Number Five"', isCorrect: true, rationale: "Tepat! Inilah prinsip 'Magic Number Five' dari Nielsen Norman Group. 5 user tester sudah cukup untuk mengungkap 85% masalah usabilitas. Lebih dari 5 orang hanya menghasilkan temuan yang berulang (data jenuh)." },
        { letter: 'D', text: '20 orang — "Statistical Significance Rule"', isCorrect: false, rationale: "20 orang memang memberikan data statistik yang kuat, tetapi untuk sesi usability testing awal, ini terlalu mahal dan menghasilkan data jenuh." }
      ]
    },
    {
      question: "Dalam strategi Market Positioning (Session 7), apa fungsi utama dari Perceptual Map dan apa yang dimaksud dengan 'Blue Ocean' dalam konteks diagram tersebut?",
      badge: "PERCEPTUAL MAP · SESSION 7",
      options: [
        { letter: 'A', text: "Perceptual Map memetakan keuangan bisnis; Blue Ocean adalah pasar yang sudah ramai kompetitor", isCorrect: false, rationale: "Perceptual Map bukan alat keuangan. Blue Ocean justru merujuk pada pasar yang bebas kompetitor (sepi persaingan), bukan yang ramai." },
        { letter: 'B', text: "Perceptual Map memetakan posisi merek di benak konsumen; Blue Ocean adalah ceruk pasar yang belum terisi kompetitor", isCorrect: true, rationale: "Tepat! Perceptual Map adalah diagram 2 sumbu (X-Y) untuk memvisualisasikan posisi produk/merek dibanding kompetitor di benak konsumen. 'Blue Ocean' adalah area kosong di peta — peluang pasar yang belum diisi siapapun, yang ingin kita rebut!" },
        { letter: 'C', text: "Perceptual Map adalah peta lokasi toko; Blue Ocean adalah strategi ekspansi ke luar negeri", isCorrect: false, rationale: "Perceptual Map adalah alat pemasaran konseptual, bukan peta geografis." },
        { letter: 'D', text: "Perceptual Map dan Blue Ocean hanya berlaku untuk bisnis skala besar", isCorrect: false, rationale: "Kedua konsep ini justru sangat relevan dan berguna bagi startup dan bisnis skala kecil untuk menemukan celah di pasar." }
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
      category: "Design Thinking",
      question: "Sebutkan 5 tahapan utama Design Thinking yang wajib dilewati dalam memecahkan masalah secara inovatif!",
      answer: "5 tahapan Design Thinking: (1) Empathize — memahami pengguna secara mendalam, (2) Define — merumuskan masalah inti, (3) Ideate — menghasilkan sebanyak mungkin ide solusi, (4) Prototype — membuat versi sederhana dari solusi, (5) Test — menguji prototipe ke pengguna nyata.",
      formula: "Empathize → Define → Ideate → Prototype → Test",
      subtext: "Proses ini bersifat iteratif — setelah Test, kamu bisa kembali ke tahap manapun berdasarkan temuan dari pengguna.",
      rated: null
    },
    {
      category: "Customer Insights",
      question: "Apa itu Empathy Map dan apa saja 6 komponen utamanya yang digunakan untuk memahami pengguna?",
      answer: "Empathy Map adalah alat visual untuk memahami pengguna secara holistik dari berbagai perspektif. 6 komponen: (1) Think & Feel — apa yang dipikirkan/dirasakan, (2) See — apa yang dilihat di lingkungannya, (3) Hear — apa yang didengar dari orang sekitar, (4) Say & Do — apa yang dikatakan/dilakukan, (5) Pain — kesulitan dan frustrasi, (6) Gain — harapan dan keuntungan yang diinginkan.",
      formula: "Think | Feel | See | Hear | Say | Do → Pain & Gain",
      subtext: "Empathy Map membantu tim menghindari asumsi dan fokus pada kebutuhan nyata pengguna saat merancang solusi.",
      rated: null
    },
    {
      category: "Value Creation",
      question: "Dalam Value Proposition Canvas (VPC), apa perbedaan antara Customer Pains vs Customer Gains, dan bagaimana cara mensinkronkannya dengan Value Map?",
      answer: "Customer Pains = hambatan, frustrasi, atau risiko yang dialami pengguna sebelum tugasnya selesai. Customer Gains = hasil positif, keuntungan, atau ekspektasi yang diharapkan pengguna. Pada Value Map: Pain Relievers harus menjawab setiap Pain spesifik, sedangkan Gain Creators harus menciptakan atau memperbesar setiap Gain yang diinginkan.",
      formula: "Pain → Pain Reliever | Gain → Gain Creator",
      subtext: "Kunci VPC: semakin tepat pasangan Pain↔Pain Reliever dan Gain↔Gain Creator, semakin kuat value proposition bisnismu.",
      rated: null
    },
    {
      category: "SDGs & Impact",
      question: "Mengapa setiap ide bisnis dalam Creativity & Innovation harus dikaitkan dengan SDGs? Sebutkan minimal 3 SDGs yang relevan untuk startup EdTech!",
      answer: "SDGs memberikan kerangka global yang memastikan bisnis berkontribusi pada keberlanjutan, bukan sekadar profit. Untuk startup EdTech yang relevan: (4) Quality Education — meningkatkan akses & kualitas pendidikan, (8) Decent Work & Economic Growth — membuka peluang kerja dan kemampuan produktif, (10) Reduced Inequalities — menjembatani kesenjangan akses pendidikan antar kelompok sosial.",
      formula: "SDG 4 (Education) + SDG 8 (Growth) + SDG 10 (Equality)",
      subtext: "Mengaitkan bisnis ke SDGs bukan hanya etika — ini juga membuka peluang funding dari investor ESG dan lembaga internasional.",
      rated: null
    },
    {
      category: "Market Positioning",
      question: "Apa itu Perceptual Map dan bagaimana cara membacanya untuk menemukan peluang pasar (Blue Ocean)?",
      answer: "Perceptual Map adalah diagram 2 sumbu (X dan Y) yang memetakan posisi produk/merek di benak konsumen dibandingkan kompetitor. Cara membacanya: plot semua kompetitor di kuadran sesuai atribut (mis. Harga vs Kualitas). Area kosong di peta = Blue Ocean = ceruk pasar yang belum diisi siapapun — itulah posisi ideal untuk ditargetkan.",
      formula: "X-Axis (Atribut 1) vs Y-Axis (Atribut 2) → cari area kosong",
      subtext: "Contoh atribut: Mahal↔Murah, Tradisional↔Modern, Offline↔Online. Pilih 2 atribut yang paling relevan untuk industri kamu.",
      rated: null
    },
    {
      category: "Business Model",
      question: "Dalam Business Model Canvas (BMC), sebutkan 9 blok utama dan jelaskan hubungan antara Revenue Streams dengan Cost Structure!",
      answer: "9 Blok BMC: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, Cost Structure. Hubungan Revenue–Cost: Revenue Streams = semua pemasukan (dari siapa & bagaimana cara bisnis menghasilkan uang). Cost Structure = semua pengeluaran operasional. Bisnis sehat = Revenue > Cost (profit positif).",
      formula: "Profit = Revenue Streams - Cost Structure",
      subtext: "Revenue Streams bisa berupa: penjualan langsung, langganan (SaaS), komisi, iklan, lisensi, atau freemium-to-premium.",
      rated: null
    },
    {
      category: "Prototyping",
      question: "Apa perbedaan Low-Fidelity vs High-Fidelity Prototype, dan kapan masing-masing digunakan dalam proses pengembangan produk?",
      answer: "Low-Fidelity (Lo-Fi) Prototype: versi sangat sederhana, biasanya berupa sketsa kertas atau wireframe. Digunakan di awal untuk validasi konsep dengan cepat dan murah. High-Fidelity (Hi-Fi) Prototype: versi mendekati produk asli, interaktif dan visual realistis (seperti mockup Figma atau kode React). Digunakan saat ide sudah terkonfirmasi, untuk testing pengalaman pengguna yang mendalam.",
      formula: "Lo-Fi (Konsep Awal) → Hi-Fi (Detail & UX Testing)",
      subtext: "Prinsip 'Never fall in love with your prototype' — selalu siap untuk mengubah atau membuang prototipe berdasarkan feedback pengguna.",
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

export const mindMaps = {
  ppkn: {
    center: 'Creativity &\nInnovation',
    centerColor: '#f59e0b',
    branches: [
      {
        label: 'Design\nThinking',
        labelShort: 'Design Thinking',
        color: '#6366f1',
        icon: 'lightbulb',
        session: 'Session 2',
        desc: 'Pendekatan inovatif berbasis empati untuk memecahkan masalah secara kreatif dan berkelanjutan.',
        children: ['Empathize', 'Define', 'Ideate', 'Prototype', 'Test']
      },
      {
        label: 'Customer\nInsights',
        labelShort: 'Customer Insights',
        color: '#ec4899',
        icon: 'people',
        session: 'Session 3',
        desc: 'Memahami kebutuhan nyata pengguna melalui observasi langsung dan wawancara mendalam.',
        children: ['User Persona', 'Empathy Map', 'Pain & Gain', 'Ethnographic Research']
      },
      {
        label: 'Value\nCreation',
        labelShort: 'Value Creation',
        color: '#10b981',
        icon: 'diamond',
        session: 'Session 5',
        desc: 'Merancang solusi yang menciptakan nilai nyata bagi pelanggan melalui Value Proposition Canvas.',
        children: ['VPC', 'Pain Relievers', 'Gain Creators', 'Customer Jobs']
      },
      {
        label: 'Market\nPositioning',
        labelShort: 'Market Positioning',
        color: '#f59e0b',
        icon: 'leaderboard',
        session: 'Session 7',
        desc: 'Menempatkan produk secara unik di benak konsumen dan menemukan celah pasar (Blue Ocean).',
        children: ['STP Strategy', 'Perceptual Map', 'Blue Ocean', 'Competitive Analysis']
      },
      {
        label: 'Business\nModel',
        labelShort: 'Business Model',
        color: '#3b82f6',
        icon: 'account_balance',
        session: 'Session 8',
        desc: 'Merancang cara bisnis menciptakan, memberikan, dan menangkap nilai melalui 9 blok BMC.',
        children: ['9 Blok BMC', 'Revenue Streams', 'Cost Structure', 'Key Partnerships']
      },
      {
        label: 'Prototyping',
        labelShort: 'Prototyping',
        color: '#ef4444',
        icon: 'architecture',
        session: 'Session 10–11',
        desc: 'Membangun dan menguji prototipe cepat untuk memvalidasi ide sebelum peluncuran produk.',
        children: ['Lo-Fi Prototype', 'Hi-Fi Prototype', 'User Testing', 'Feedback Grid']
      }
    ]
  }
};

export const studyVideos = {
  ppkn: [
    {
      id: 'v1',
      title: 'Design Thinking Full Process: Empathize to Test',
      channel: 'Stanford d.school',
      duration: '12:45',
      views: '2.4M penonton',
      topic: 'Design Thinking',
      topicColor: '#6366f1',
      gradient: ['#4f46e5', '#7c3aed'],
      icon: 'lightbulb',
      desc: 'Pelajari 5 tahapan Design Thinking langsung dari para expert Stanford — Empathize, Define, Ideate, Prototype, Test — disertai studi kasus nyata.'
    },
    {
      id: 'v2',
      title: 'Value Proposition Canvas: Complete Tutorial',
      channel: 'Strategyzer Official',
      duration: '8:30',
      views: '1.8M penonton',
      topic: 'Value Creation',
      topicColor: '#10b981',
      gradient: ['#059669', '#0d9488'],
      icon: 'diamond',
      desc: 'Tutorial lengkap cara mengisi Value Proposition Canvas — dari Customer Profile (Jobs, Pains, Gains) hingga Value Map (Pain Relievers, Gain Creators).'
    },
    {
      id: 'v3',
      title: 'Business Model Canvas: 9 Building Blocks Explained',
      channel: 'Alexander Osterwalder',
      duration: '15:20',
      views: '3.1M penonton',
      topic: 'Business Model',
      topicColor: '#3b82f6',
      gradient: ['#2563eb', '#0891b2'],
      icon: 'account_balance',
      desc: 'Alex Osterwalder menjelaskan langsung 9 blok BMC — Revenue Streams, Cost Structure, Key Partners — dan cara menggunakannya untuk merancang bisnis inovatif.'
    },
    {
      id: 'v4',
      title: 'Blue Ocean Strategy: Finding Uncontested Markets',
      channel: 'Business Strategy Hub',
      duration: '10:15',
      views: '892K penonton',
      topic: 'Market Positioning',
      topicColor: '#f59e0b',
      gradient: ['#d97706', '#ea580c'],
      icon: 'leaderboard',
      desc: 'Cara menemukan Blue Ocean melalui Perceptual Map dan strategi STP untuk positioning produk di ceruk pasar yang belum dijamah kompetitor.'
    },
    {
      id: 'v5',
      title: 'Usability Testing: The Magic Number Five Rule',
      channel: 'Nielsen Norman Group',
      duration: '7:45',
      views: '654K penonton',
      topic: 'Prototyping',
      topicColor: '#ef4444',
      gradient: ['#dc2626', '#db2777'],
      icon: 'architecture',
      desc: 'Riset Nielsen Norman Group yang membuktikan mengapa cukup 5 user tester untuk menemukan 85% masalah usabilitas dalam sebuah aplikasi.'
    },
    {
      id: 'v6',
      title: 'Customer Empathy Map: Step-by-Step Guide',
      channel: 'Design Thinking Lab',
      duration: '9:10',
      views: '1.1M penonton',
      topic: 'Customer Insights',
      topicColor: '#ec4899',
      gradient: ['#db2777', '#9d174d'],
      icon: 'people',
      desc: 'Panduan lengkap membuat Empathy Map dari nol — memahami Think & Feel, See, Hear, Say & Do, serta Pain dan Gain pengguna Anda.'
    }
  ]
};

export const studySlides = {
  ppkn: [
    {
      id: 's1',
      title: 'Design Thinking Framework',
      presenter: 'Prof. Sarah Jenkins',
      slidesCount: 24,
      views: '15.2K views',
      topic: 'Design Thinking',
      topicColor: '#6366f1',
      gradient: ['#4f46e5', '#7c3aed'],
      icon: 'lightbulb',
      desc: 'Slide materi perkuliahan lengkap mencakup 5 tahapan Design Thinking dengan studi kasus penerapan di berbagai startup.'
    },
    {
      id: 's2',
      title: 'Customer Insights & Empathy Mapping',
      presenter: 'Dr. Alan Turing',
      slidesCount: 18,
      views: '8.4K views',
      topic: 'Customer Insights',
      topicColor: '#ec4899',
      gradient: ['#db2777', '#9d174d'],
      icon: 'people',
      desc: 'Panduan visual cara membuat Empathy Map dan teknik melakukan interview etnografi untuk mendapatkan insight mendalam.'
    },
    {
      id: 's3',
      title: 'Value Proposition Canvas Workshop',
      presenter: 'Innovation Lab',
      slidesCount: 32,
      views: '22.1K views',
      topic: 'Value Creation',
      topicColor: '#10b981',
      gradient: ['#059669', '#0d9488'],
      icon: 'diamond',
      desc: 'Materi workshop VPC interaktif: memetakan Customer Jobs, Pains, Gains dan menyesuaikannya dengan fitur produk.'
    },
    {
      id: 's4',
      title: 'Market Positioning & Perceptual Mapping',
      presenter: 'Business Strat Group',
      slidesCount: 15,
      views: '11.5K views',
      topic: 'Market Positioning',
      topicColor: '#f59e0b',
      gradient: ['#d97706', '#ea580c'],
      icon: 'leaderboard',
      desc: 'Cara membuat Perceptual Map dan menentukan variabel X/Y untuk mencari Blue Ocean di tengah kompetisi yang padat.'
    },
    {
      id: 's5',
      title: 'Business Model Canvas Masterclass',
      presenter: 'Prof. David Chen',
      slidesCount: 45,
      views: '34.6K views',
      topic: 'Business Model',
      topicColor: '#3b82f6',
      gradient: ['#2563eb', '#0891b2'],
      icon: 'account_balance',
      desc: 'Pembahasan mendalam 9 blok BMC, beserta contoh analisis model bisnis dari perusahaan seperti Netflix dan Spotify.'
    },
    {
      id: 's6',
      title: 'Prototyping: From Lo-Fi to Hi-Fi',
      presenter: 'UX Academy',
      slidesCount: 28,
      views: '19.8K views',
      topic: 'Prototyping',
      topicColor: '#ef4444',
      gradient: ['#dc2626', '#db2777'],
      icon: 'architecture',
      desc: 'Panduan evolusi prototipe: mulai dari coretan kertas (Lo-Fi), wireframe, hingga interactive mockup (Hi-Fi).'
    }
  ]
};

export const infographics = {
  kalkulus: [
    {
      id: 'ig1',
      title: 'Rumus Turunan Dasar',
      author: 'Math Academy',
      views: '12K views',
      topic: 'Turunan',
      topicColor: '#ec4899',
      gradient: ['#db2777', '#be185d'],
      icon: 'functions',
      desc: 'Infografis merangkum seluruh rumus dasar untuk turunan fungsi polinomial, eksponensial, logaritma, dan trigonometri.'
    }
  ],
  ppkn: [
    {
      id: 'ig2',
      title: 'Diagram Value Proposition Canvas',
      author: 'Business Lab',
      views: '45K views',
      topic: 'Value Creation',
      topicColor: '#10b981',
      gradient: ['#059669', '#047857'],
      icon: 'dashboard',
      desc: 'Peta visual hubungan antara customer profile (jobs, pains, gains) dan value map (products/services, pain relievers, gain creators).'
    },
    {
      id: 'ig3',
      title: '17 Target SDGs Global',
      author: 'UN Action',
      views: '89K views',
      topic: 'SDGs',
      topicColor: '#3b82f6',
      gradient: ['#2563eb', '#1d4ed8'],
      icon: 'public',
      desc: 'Infografis resmi 17 tujuan Pembangunan Berkelanjutan (SDGs) yang dicanangkan PBB untuk mengentaskan kemiskinan dan ketidaksetaraan.'
    },
    {
      id: 'ig4',
      title: 'Langkah Design Thinking',
      author: 'Creative UI/UX',
      views: '22K views',
      topic: 'Design Thinking',
      topicColor: '#8b5cf6',
      gradient: ['#7c3aed', '#6d28d9'],
      icon: 'psychology',
      desc: 'Ilustrasi 5 tahapan utama design thinking: Empathize, Define, Ideate, Prototype, dan Test.'
    }
  ]
};

export const tables = {
  kalkulus: [
    {
      id: 'tb1',
      title: 'Tabel Turunan Standar',
      author: 'Math Department',
      views: '8K views',
      topic: 'Turunan',
      topicColor: '#3b82f6',
      icon: 'grid_on',
      desc: 'Tabel referensi cepat untuk turunan fungsi polinomial, eksponensial, dan logaritmik.',
      columns: ['Fungsi f(x)', 'Turunan f\'(x)', 'Aturan'],
      rows: [
        ['x^n', 'n * x^(n-1)', 'Power Rule'],
        ['e^x', 'e^x', 'Exponential'],
        ['ln(x)', '1/x', 'Logarithmic'],
        ['sin(x)', 'cos(x)', 'Trigonometric'],
        ['cos(x)', '-sin(x)', 'Trigonometric']
      ]
    }
  ],
  ppkn: [
    {
      id: 'tb2',
      title: 'Perbandingan Kompetitor (Matrix)',
      author: 'Strategy Team',
      views: '15K views',
      topic: 'Market Positioning',
      topicColor: '#f59e0b',
      icon: 'pivot_table_chart',
      desc: 'Tabel matriks perbandingan fitur antara ide bisnis kita dengan 3 kompetitor utama di pasar saat ini.',
      columns: ['Fitur Utama', 'Kita (ADAPTIV)', 'Kompetitor A', 'Kompetitor B'],
      rows: [
        ['Kuis AI Otomatis', '✅ Ya', '❌ Tidak', '❌ Tidak'],
        ['Peta Pikiran Visual', '✅ Ya', '✅ Terbatas', '❌ Tidak'],
        ['Ringkasan Suara', '✅ Ya', '❌ Tidak', '✅ Ya'],
        ['Harga Berlangganan', 'Freemium', 'Mahal', 'Sedang']
      ]
    },
    {
      id: 'tb3',
      title: 'Rincian Cost Structure (Bulan 1-6)',
      author: 'Finance',
      views: '5K views',
      topic: 'Cost Structure',
      topicColor: '#10b981',
      icon: 'request_quote',
      desc: 'Proyeksi struktur biaya selama 6 bulan pertama operasional untuk tugas Assignment I.',
      columns: ['Kategori Biaya', 'Bulan 1', 'Bulan 3', 'Bulan 6'],
      rows: [
        ['Server & Hosting', '$50', '$150', '$300'],
        ['API OpenAI', '$100', '$300', '$800'],
        ['Marketing (Ads)', '$0', '$200', '$500'],
        ['Legal & Admin', '$150', '$0', '$0']
      ]
    }
  ]
};

export const podcasts = {
  kalkulus: [
    {
      id: 'pc1',
      title: 'Obrolan Santai: Kenapa Limit Penting?',
      host: 'Budi & Andi',
      duration: '15:20',
      topic: 'Limit',
      topicColor: '#8b5cf6',
      icon: 'podcasts',
      gradient: ['#7c3aed', '#5b21b6'],
      desc: 'Podcast santai membahas konsep dasar limit di dunia nyata. Kenapa kita butuh limit padahal kita sudah punya aljabar biasa?'
    }
  ],
  ppkn: [
    {
      id: 'pc2',
      title: 'Deep Dive: Design Thinking Process',
      host: 'Sinta (UX Researcher)',
      duration: '22:45',
      topic: 'Design Thinking',
      topicColor: '#f59e0b',
      icon: 'podcasts',
      gradient: ['#d97706', '#92400e'],
      desc: 'Sinta membedah 5 tahap Design Thinking dan kenapa empati adalah kunci untuk membuat produk yang dipakai orang.'
    },
    {
      id: 'pc3',
      title: 'Debat Seru: MVP vs Perfect Product',
      host: 'Tech Talk ID',
      duration: '31:10',
      topic: 'Prototyping',
      topicColor: '#ef4444',
      icon: 'mic',
      gradient: ['#dc2626', '#991b1b'],
      desc: 'Apakah kita harus rilis cepat (MVP) atau tunggu produk sempurna? Bahasan seru untuk yang lagi nyusun purwarupa.'
    },
    {
      id: 'pc4',
      title: 'Bedah Market Positioning',
      host: 'Pak Darmawan (CMO)',
      duration: '18:30',
      topic: 'Market Positioning',
      topicColor: '#10b981',
      icon: 'headset',
      gradient: ['#059669', '#064e3b'],
      desc: 'Tips dan trik membuat perceptual map yang ampuh untuk memenangkan persaingan bisnis di pasar merah.'
    }
  ]
};

export const audios = {
  kalkulus: [
    {
      id: 'au1',
      title: 'Ringkasan Audio: Sifat-sifat Limit',
      narrator: 'AI Voice (Budi)',
      duration: '04:15',
      topic: 'Limit',
      topicColor: '#ec4899',
      icon: 'volume_up',
      gradient: ['#db2777', '#831843'],
      desc: 'Ringkasan audio singkat berdurasi 4 menit tentang sifat-sifat dasar operasional limit matematika.'
    }
  ],
  ppkn: [
    {
      id: 'au2',
      title: 'Voice Note: Ide Bisnis EduTech',
      narrator: 'Rekaman Rapat',
      duration: '06:30',
      topic: 'Business Idea',
      topicColor: '#3b82f6',
      icon: 'voicemail',
      gradient: ['#2563eb', '#1e3a8a'],
      desc: 'Rekaman suara kasar (voice note) dari diskusi tim saat mencari ide bisnis aplikasi edukasi interaktif.'
    },
    {
      id: 'au3',
      title: 'Ringkasan Bab: Customer Insights',
      narrator: 'AI Voice (Sinta)',
      duration: '08:45',
      topic: 'Customer Insights',
      topicColor: '#10b981',
      icon: 'audio_file',
      gradient: ['#059669', '#064e3b'],
      desc: 'Narasi ringkasan dari Session 3 mengenai pentingnya mewawancarai pelanggan untuk mendapatkan insight otentik.'
    }
  ]
};
