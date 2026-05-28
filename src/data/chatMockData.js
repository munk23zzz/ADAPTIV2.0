// ============================================================
// ADAPTIV — Scientific Computing Dummy Data
// Mata Kuliah: Scientific Computing using Python
// Topics: Linear Equations, Numerical Methods, ODE, etc.
// ============================================================

export const suggestedPrompts = [
  'Jelaskan perbedaan metode analitik dan numerik dalam SPL',
  'Bantu saya memahami Eliminasi Gauss langkah per langkah',
  'Apa syarat matriks agar bisa diselesaikan dengan Gauss-Seidel?',
  'Kapan kita perlu menggunakan Scaled Row Pivoting?',
  'Rangkum semua metode penyelesaian Sistem Persamaan Linier',
];

export const aiReplies = [
  `Berdasarkan sumber yang Anda berikan, berikut adalah **temuan utama**:\n\n• Pertumbuhan pendapatan sebesar **23%** dibandingkan tahun sebelumnya <span class="citation">1</span>\n• Ekspansi ke 3 pasar baru di Asia Tenggara <span class="citation">2</span>\n• Efisiensi biaya operasional meningkat **15%** melalui otomatisasi proses <span class="citation">1</span>\n\nSumber-sumber ini secara konsisten menunjukkan tren positif dalam kinerja bisnis.`,
  `Saya telah menganalisis sumber aktif Anda. **Poin-poin kritis** yang ditemukan:\n\n1. **Strategi pertumbuhan** difokuskan pada segmen B2B enterprise\n2. **Risiko utama** mencakup fluktuasi mata uang dan regulasi baru <span class="citation">2</span>\n3. **Peluang** terbesar ada di digitalisasi layanan pelanggan\n\nApakah Anda ingin saya elaborasi lebih lanjut tentang salah satu poin ini?`,
  `Berdasarkan dokumen yang tersedia, berikut adalah **rekomendasi tindakan** yang dapat diambil:\n\n• Prioritaskan investasi di infrastruktur digital Q3 2026\n• Rekrut 50 tenaga ahli untuk divisi teknologi <span class="citation">3</span>\n• Review ulang kontrak vendor utama sebelum akhir semester\n• Implementasikan dashboard real-time untuk monitoring KPI`,
];

// ============================================================
// SESSION HISTORY — Multiple Scientific Computing Topics
// ============================================================

export const sessionHistory = {
  scientific_computing: {
    title: 'Scientific Computing',
    sources: [
      { id: 101, name: 'Sistem_Persamaan_Linier.pdf', type: 'PDF', icon: '📄', checked: true },
      { id: 102, name: 'System_of_Linear_Equations_part_I_2024.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 202, name: 'System_of_Linear_Equations_part_II_2024.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 501, name: 'Taylor_Series_2024.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 601, name: 'Root_of_Equation_2024.pptx', type: 'PPTX', icon: '📊', checked: true },
      { id: 701, name: 'Numerical_Differentiation_part_I_2024.pptx', type: 'PPTX', icon: '📊', checked: true },
    ],
    messages: [
      {
        role: 'user',
        text: 'Halo! Bisa jelasin ke gw apa itu metode Eliminasi Gauss? Dari nol ya, gw belum pernah denger sama sekali.',
      },
      {
        role: 'ai',
        text: `Halo! Tentu, gw akan jelasin dari awal banget.\n\nSebelum masuk ke **Eliminasi Gauss**, kita perlu paham dulu konteksnya: metode ini digunakan untuk menyelesaikan **Sistem Persamaan Linier (SPL)**.\n\n**Apa itu SPL?**\nSPL adalah sekumpulan persamaan linier yang berbagi variabel yang sama. Contoh sederhananya:\n\n\`\`\`\nx + y + z = 4\nx − y − z = −2\n2x + 8y + z = 19\n\`\`\`\n\nKita perlu mencari nilai x, y, dan z yang memenuhi *ketiga* persamaan sekaligus.\n\n---\n\n**Mengapa kita butuh metode khusus seperti Eliminasi Gauss?**\n\nUntuk 2-3 variabel, kita bisa pakai substitusi manual. Tapi bayangkan kalau ada 50 variabel atau 1000 variabel — itu tidak mungkin dikerjakan manual. Eliminasi Gauss memberikan **prosedur sistematis** yang bisa diimplementasikan di komputer.\n\n---\n\n**Konsep Inti: Matriks Augmentasi**\n\nLangkah pertama Eliminasi Gauss adalah mengubah sistem persamaan tadi menjadi **matriks augmentasi**. Dari sistem:\n\n\`\`\`\nx + y + z = 4\nx − y − z = −2\n2x + 8y + z = 19\n\`\`\`\n\nDibentuk matriks:\n\n\`\`\`\n[ 1   1   1  |  4  ]\n[ 1  -1  -1  | -2  ]\n[ 2   8   1  | 19  ]\n\`\`\`\n\nKolom 1-3 adalah koefisien variabel x, y, z. Kolom terakhir setelah garis | adalah nilai kanan (hasil persamaan).\n\n---\n\n**Eliminasi Gauss terdiri dari 2 tahap utama:**\n\n1. **Forward Elimination** → Ubah matriks menjadi bentuk **segitiga atas** (semua elemen di bawah diagonal menjadi 0)\n2. **Back Substitution** → Hitung nilai variabel dari bawah ke atas\n\nMau kita lanjut ke detail Forward Elimination dengan contoh angka konkret? 🔢`,
      },
      {
        role: 'user',
        text: 'Mau banget! Jelasin Forward Elimination-nya dong pakai contoh yang tadi.',
      },
      {
        role: 'ai',
        text: `Oke, kita pakai sistem persamaan yang sama:\n\n**Matriks Augmentasi Awal:**\n\n\`\`\`\n[ 1   1   1  |  4  ]  ← Baris 1 (B1)\n[ 1  -1  -1  | -2  ]  ← Baris 2 (B2)\n[ 2   8   1  | 19  ]  ← Baris 3 (B3)\n\`\`\`\n\n---\n\n**LANGKAH 1: Pilih B1 sebagai Pivot**\n\nTujuan: buat elemen di kolom 1, baris 2 dan 3 menjadi **0**.\n\nHitung faktor pengali (λ):\n- λ untuk B2: λ = a₂₁/a₁₁ = **1/1 = 1**\n- λ untuk B3: λ = a₃₁/a₁₁ = **2/1 = 2**\n\nOperasi eliminasi menggunakan rumus: **Bᵢ ← Bᵢ − λ × Bpivot**\n\n**Eliminasi B2:** B2 ← B2 − 1×B1\n\`\`\`\n[ 1-1×1,  -1-1×1,  -1-1×1  |  -2-1×4  ]\n= [  0,    -2,      -2      |   -6     ]\n\`\`\`\n\n**Eliminasi B3:** B3 ← B3 − 2×B1\n\`\`\`\n[ 2-2×1,  8-2×1,  1-2×1  |  19-2×4  ]\n= [  0,     6,     -1     |    11    ]\n\`\`\`\n\n**Matriks setelah Langkah 1:**\n\`\`\`\n[ 1   1   1  |  4  ]\n[ 0  -2  -2  | -6  ]\n[ 0   6  -1  | 11  ]\n\`\`\`\n\n---\n\n**LANGKAH 2: Pilih B2 sebagai Pivot**\n\nTujuan: buat elemen di kolom 2, baris 3 menjadi **0**.\n\nHitung λ untuk B3: λ = a₃₂/a₂₂ = **6/(−2) = −3**\n\n**Eliminasi B3:** B3 ← B3 − (−3)×B2 = B3 + 3×B2\n\`\`\`\n[ 0+3×0,  6+3×(-2),  -1+3×(-2)  |  11+3×(-6)  ]\n= [  0,      0,         -7        |     -7      ]\n\`\`\`\n\n**Matriks Segitiga Atas (Hasil Forward Elimination):**\n\`\`\`\n[ 1   1   1  |  4  ]\n[ 0  -2  -2  | -6  ]\n[ 0   0  -7  | -7  ]\n\`\`\`\n\n✅ Semua elemen di bawah diagonal sudah **0**! Forward Elimination selesai.\n\n---\n\nSekarang tinggal tahap **Back Substitution**. Mau gw lanjutin? 😊`,
      },
      {
        role: 'user',
        text: 'Iya, lanjutin Back Substitution-nya!',
      },
      {
        role: 'ai',
        text: `Mantap! Kita lanjut ke **Back Substitution**.\n\nKita punya matriks segitiga atas:\n\`\`\`\n[ 1   1   1  |  4  ]\n[ 0  -2  -2  | -6  ]\n[ 0   0  -7  | -7  ]\n\`\`\`\n\nUbah balik ke bentuk persamaan:\n\`\`\`\n(1) x + y + z = 4\n(2)   -2y - 2z = -6\n(3)        -7z = -7\n\`\`\`\n\n---\n\n**LANGKAH 1: Hitung z dari persamaan (3)**\n\`\`\`\n-7z = -7\nz = -7 / -7\nz = 1\n\`\`\`\n\n**LANGKAH 2: Substitusi z ke persamaan (2) untuk cari y**\n\`\`\`\n-2y - 2(1) = -6\n-2y - 2 = -6\n-2y = -4\ny = 2\n\`\`\`\n\n**LANGKAH 3: Substitusi y dan z ke persamaan (1) untuk cari x**\n\`\`\`\nx + 2 + 1 = 4\nx + 3 = 4\nx = 1\n\`\`\`\n\n---\n\n**✅ SOLUSI:**\n\`\`\`\nx = 1,  y = 2,  z = 1\n\`\`\`\n\nVerifikasi ke persamaan awal:\n- x + y + z = 1+2+1 = **4** ✓\n- x − y − z = 1−2−1 = **−2** ✓\n- 2x + 8y + z = 2+16+1 = **19** ✓\n\n---\n\n**Ringkasan Eliminasi Gauss:**\n1. Buat matriks augmentasi\n2. Forward Elimination → bentuk segitiga atas\n3. Back Substitution → hitung variabel dari bawah ke atas\n\nPaham? Ada bagian yang mau diulang atau kita lanjut ke implementasi Python-nya? 🐍`,
      },
      {
        role: 'user',
        text: 'Paham banget! Sekarang jelasin implementasi di Python dong.',
      },
      {
        role: 'ai',
        text: `Keren! Nih implementasi Python dari Eliminasi Gauss:\n\n\`\`\`python\nimport numpy as np\n\ndef eliminasi_gauss(A, Y):\n    """\n    Menyelesaikan sistem persamaan linier Ax = Y\n    menggunakan metode Eliminasi Gauss.\n    \n    Parameter:\n        A : list 2D — matriks koefisien n×n\n        Y : list     — vektor hasil n×1\n    \n    Return:\n        x : list     — solusi variabel\n    """\n    n = len(Y)\n    \n    # Buat matriks augmentasi [A|Y]\n    aug = np.array([[A[i][j] for j in range(n)] + [Y[i]] \n                    for i in range(n)], dtype=float)\n    \n    # === FORWARD ELIMINATION ===\n    for i in range(n - 1):          # loop baris pivot\n        for j in range(i + 1, n):   # loop baris yang dieliminasi\n            lam = aug[j][i] / aug[i][i]   # hitung λ\n            for k in range(n + 1):         # loop kolom\n                aug[j][k] -= lam * aug[i][k]\n    \n    # === BACK SUBSTITUTION ===\n    x = [0.0] * n\n    for i in range(n - 1, -1, -1):  # dari baris bawah ke atas\n        total = sum(aug[i][j] * x[j] for j in range(i + 1, n))\n        x[i] = (aug[i][n] - total) / aug[i][i]\n    \n    return x\n\n\n# === CONTOH PENGGUNAAN ===\nA = [\n    [1,  1,  1],\n    [1, -1, -1],\n    [2,  8,  1]\n]\nY = [4, -2, 19]\n\nsolusi = eliminasi_gauss(A, Y)\nprint(f"x = {solusi[0]:.2f}")  # Output: x = 1.00\nprint(f"y = {solusi[1]:.2f}")  # Output: y = 2.00\nprint(f"z = {solusi[2]:.2f}")  # Output: z = 1.00\n\`\`\`\n\n**Penjelasan kode:**\n- Baris 14-17: Membuat matriks augmentasi menggunakan *list comprehension*\n- Baris 20-24: Forward Elimination — 3 loop bersarang (pivot, baris eliminasi, kolom)\n- Baris 27-30: Back Substitution — dari baris terakhir ke atas\n\nCoba jalankan kode ini di Google Colab atau Jupyter Notebook! Ada pertanyaan? 🐍`,
      },
      {
        role: 'user',
        text: 'Gw ada tugas ngerjain soal Gauss-Seidel nih. Sistemnya: 2x + y = 5 dan -3x + 6y = 0. Tolong langsung kasih jawabannya dong!',
      },
      {
        role: 'ai',
        text: `Hehe, gw ngerti semangat ngejar deadline 😄 — tapi kalau gw langsung kasih jawaban, lu bakal bingung pas ujian nanti.\n\nGw bantu lu **ngerjain sendiri langkah demi langkah**, dijamin lebih nempel di kepala!\n\n---\n\n**Mari kita mulai dari fondasi dulu.**\n\nMetode Gauss-Seidel adalah metode **iteratif** — artinya kita mulai dari **tebakan awal**, lalu perbaiki terus sampai hasilnya konvergen.\n\n**Langkah pertama** yang harus dilakukan adalah mengubah setiap persamaan agar **satu variabel ada di sisi kiri**.\n\nSistem kita:\n\`\`\`\n(1)  2x + y  = 5\n(2) -3x + 6y = 0\n\`\`\`\n\nPertanyaan untuk lu:\n> Dari persamaan (1), kalau kita pindahkan semua **kecuali x** ke ruas kanan, bentuknya jadi:\n> **x = ?**\n\nCoba tulis jawabannya! 🤔`,
      },
      {
        role: 'user',
        text: 'Hmm... x = (5 - y) / 2 ya?',
      },
      {
        role: 'ai',
        text: `**Tepat sekali!** ✅\n\n\`\`\`\nx = (5 - y) / 2\n\`\`\`\n\nSekarang pertanyaan berikutnya:\n> Dari persamaan (2): **-3x + 6y = 0**, kalau kita isolasi **y** di sisi kiri, bentuknya jadi:\n> **y = ?**\n\nHint kecil: pindahkan −3x ke kanan, lalu bagi kedua sisi dengan koefisien y. 😊`,
      },
      {
        role: 'user',
        text: 'y = 3x / 6 = x/2?',
      },
      {
        role: 'ai',
        text: `**Benar!** ✅ Jadi:\n\n\`\`\`\ny = x / 2\n   atau sama dengan\ny = 0.5x\n\`\`\`\n\nSekarang kita punya dua persamaan iterasi:\n\`\`\`\nx = (5 - y) / 2\ny = x / 2\n\`\`\`\n\n---\n\n**Sekarang kita mulai iterasi!**\n\nDalam Gauss-Seidel, kita butuh **nilai tebakan awal**. Biasanya dipakai **x = 0, y = 0** untuk awal.\n\n**Iterasi 1 — Hitung x baru:**\n\`\`\`\nx₁ = (5 - y₀) / 2 = (5 - 0) / 2 = ?\n\`\`\`\n\nBerapa hasilnya? 🔢`,
      },
      {
        role: 'user',
        text: 'x₁ = 2.5!',
      },
      {
        role: 'ai',
        text: `**Betul!** x₁ = 2.5 ✅\n\nNah, trik Gauss-Seidel: **langsung pakai x₁ yang baru** untuk menghitung y₁ — tidak perlu tunggu satu iterasi selesai!\n\n**Masih dalam Iterasi 1 — Hitung y baru:**\n\`\`\`\ny₁ = x₁ / 2 = 2.5 / 2 = ?\n\`\`\`\n\nBerapa? 😊`,
      },
      {
        role: 'user',
        text: 'y₁ = 1.25',
      },
      {
        role: 'ai',
        text: `**Sempurna!** ✅\n\n**Hasil Iterasi 1:**\n\`\`\`\nx₁ = 2.5\ny₁ = 1.25\n\`\`\`\n\nSolusi eksak sebenarnya adalah **x = 2, y = 1**. Kita belum sampai, tapi sudah lebih dekat dari tebakan awal (0, 0)!\n\n---\n\n**Iterasi 2 — Giliran lu ngitung:**\n\nGunakan x₁ = 2.5 dan y₁ = 1.25 sebagai input:\n\n\`\`\`\nx₂ = (5 - y₁) / 2 = (5 - 1.25) / 2 = ?\ny₂ = x₂ / 2 = ?\n\`\`\`\n\nCoba hitung keduanya! 🔢`,
      },
      {
        role: 'user',
        text: 'x₂ = (5 - 1.25) / 2 = 3.75 / 2 = 1.875, terus y₂ = 1.875 / 2 = 0.9375',
      },
      {
        role: 'ai',
        text: `**Luar biasa!** Perhitungan lu 100% benar! ✅\n\n\`\`\`\nx₂ = 1.875\ny₂ = 0.9375\n\`\`\`\n\n**Perhatikan pola konvergensi:**\n\`\`\`\nIterasi 0: x = 0.0000,  y = 0.0000   (tebakan awal)\nIterasi 1: x = 2.5000,  y = 1.2500\nIterasi 2: x = 1.8750,  y = 0.9375\nTarget:    x = 2.0000,  y = 1.0000   (solusi eksak)\n\`\`\`\n\nNilai x dan y bolak-balik tapi semakin mendekati **x=2, y=1**. Inilah yang dimaksud **konvergen**! 🎯\n\n---\n\n**Pertanyaan terakhir untuk lu:**\n\nBagaimana kita tahu kapan *harus berhenti* melakukan iterasi?\n\n*Hint: Ingat konsep **error threshold** (εₕ) — lihat di slide materi!* 🤔`,
      },
      {
        role: 'user',
        text: 'Kita berhenti kalau perbedaan antara iterasi sekarang dan sebelumnya sudah lebih kecil dari error threshold yang kita tentukan?',
      },
      {
        role: 'ai',
        text: `**SEMPURNA!** 🎉 Lu udah paham inti dari metode Gauss-Seidel!\n\nPersis! Error dihitung dengan:\n\n\`\`\`\nεᵢ = √ Σ(xᵢ_baru − xᵢ_lama)²\n\`\`\`\n\nKalau εᵢ < εₕ (error threshold yang kita tentukan, misalnya 0.001), **iterasi dihentikan**.\n\n---\n\n**Rekap yang sudah lu pelajari hari ini:**\n\n| Langkah | Deskripsi |\n|---|---|\n| 1 | Isolasi setiap variabel ke satu persamaan |\n| 2 | Tentukan tebakan awal (biasanya semua = 0) |\n| 3 | Iterasi menggunakan nilai terbaru langsung |\n| 4 | Hitung error, bandingkan dengan threshold |\n| 5 | Ulangi sampai error cukup kecil |\n\n**Syarat penting:** Matriks koefisien harus **diagonal dominan** agar Gauss-Seidel konvergen! Artinya nilai diagonal harus lebih besar dari jumlah absolut elemen lain di baris yang sama.\n\nGud luck tugasnya! Kalau mau latihan soal lagi, bilang aja ya 💪`,
      },
      {
        role: 'user',
        text: 'Gw mau belajar LU Decomposition. Katanya berbeda dari Eliminasi Gauss biasa, bisa jelasin?',
      },
      {
        role: 'ai',
        text: `Bagus banget mau belajar LU Decomposition! Ini metode yang sangat elegant.\n\n**Ide dasarnya sederhana:** matriks A bisa dipecah jadi dua matriks:\n\n\`\`\`\nA = L × U\n\`\`\`\n\nDi mana:\n- **L** = Lower Triangle Matrix (matriks segitiga *bawah*, elemen di atas diagonal = 0)\n- **U** = Upper Triangle Matrix (matriks segitiga *atas*, elemen di bawah diagonal = 0)\n\n**Kenapa ini berguna?**\n\nBayangkan kamu punya sistem Ax = Y. Kalau kita ganti A dengan L×U:\n\n\`\`\`\nL × U × x = Y\n\`\`\`\n\nKita bisa misalkan: **U × x = M**, sehingga:\n- Pertama selesaikan: **L × M = Y** (pakai Forward Substitution)\n- Lalu selesaikan: **U × x = M** (pakai Back Substitution)\n\n**Keunggulan besar LU:** kalau Y berubah-ubah (banyak kasus berbeda), kita cukup dekomposisi A **sekali saja**, lalu substitusi berkali-kali. Jauh lebih efisien!\n\n---\n\n**Contoh konkret:** Matriks A:\n\`\`\`\n[ 2   1   1 ]\n[ 4   3   3 ]\n[ 8   7   9 ]\n\`\`\`\n\nKita akan dekomposisi ini menjadi L dan U.\n\n**Proses dekomposisi pada dasarnya adalah Forward Elimination**, tapi sambil **mencatat setiap faktor λ** — itulah yang menjadi isi matriks L!\n\n---\n\n**Langkah 1 — Pivot baris 1, eliminasi baris 2 dan 3:**\n\nλ₂₁ = 4/2 = **2** → B2 ← B2 − 2×B1\nλ₃₁ = 8/2 = **4** → B3 ← B3 − 4×B1\n\nMatriks U setelah langkah ini:\n\`\`\`\n[ 2   1   1 ]\n[ 0   1   1 ]\n[ 0   3   5 ]\n\`\`\`\n\nNilai λ yang kita catat: **L[2][1] = 2, L[3][1] = 4**\n\nMau lanjut ke langkah 2 dan seterusnya sampai dapat L dan U lengkap? 🔢`,
      },
      {
        role: 'user',
        text: 'Lanjut dong! Mau lihat sampai dapat L dan U yang lengkap.',
      },
      {
        role: 'ai',
        text: `**Langkah 2 — Pivot baris 2, eliminasi baris 3:**\n\nMatriks U saat ini:\n\`\`\`\n[ 2   1   1 ]\n[ 0   1   1 ]\n[ 0   3   5 ]\n\`\`\`\n\nλ₃₂ = 3/1 = **3** → B3 ← B3 − 3×B2\n\n\`\`\`\nB3 = [0, 3-3×1, 5-3×1] = [0, 0, 2]\n\`\`\`\n\n**Matriks U (selesai):**\n\`\`\`\nU = [ 2   1   1 ]\n    [ 0   1   1 ]\n    [ 0   0   2 ]\n\`\`\`\n\n---\n\n**Matriks L** dibentuk dari semua λ yang terkumpul, dengan diagonal = 1:\n\`\`\`\nL = [ 1   0   0 ]   ← diagonal selalu 1\n    [ 2   1   0 ]   ← L[2][1] = λ₂₁ = 2\n    [ 4   3   1 ]   ← L[3][1] = λ₃₁ = 4, L[3][2] = λ₃₂ = 3\n\`\`\`\n\n---\n\n**Verifikasi: L × U harus = A**\n\`\`\`\n[ 1  0  0 ]   [ 2  1  1 ]   [ 2   1   1 ]\n[ 2  1  0 ] × [ 0  1  1 ] = [ 4   3   3 ] ✓\n[ 4  3  1 ]   [ 0  0  2 ]   [ 8   7   9 ] ✓\n\`\`\`\n\n---\n\nSekarang misalkan Y = [4, 10, 26]. Kita selesaikan dalam 2 tahap:\n\n**TAHAP 1: Selesaikan L × M = Y (Forward Substitution)**\n\`\`\`\n[ 1  0  0 ]   [ m₁ ]   [ 4  ]\n[ 2  1  0 ] × [ m₂ ] = [ 10 ]\n[ 4  3  1 ]   [ m₃ ]   [ 26 ]\n\`\`\`\n- m₁ = 4\n- m₂ = 10 − 2×4 = 2\n- m₃ = 26 − 4×4 − 3×2 = 4\n\n**TAHAP 2: Selesaikan U × x = M (Back Substitution)**\n\`\`\`\n[ 2  1  1 ]   [ x₁ ]   [ 4 ]\n[ 0  1  1 ] × [ x₂ ] = [ 2 ]\n[ 0  0  2 ]   [ x₃ ]   [ 4 ]\n\`\`\`\n- x₃ = 4/2 = **2**\n- x₂ = (2 − 1×2)/1 = **0**\n- x₁ = (4 − 1×0 − 1×2)/2 = **1**\n\n**✅ Solusi: x₁ = 1, x₂ = 0, x₃ = 2**\n\nElegant, kan? Satu kali dekomposisi A → L & U, bisa dipakai berkali-kali untuk Y yang berbeda! 🎯`,
      },
      {
        role: 'user',
        text: 'Gw ada soal nih: selesaikan sistem berikut dengan Gauss-Jordan!\n3x + 2y = 12\nx − y = 1\nMinta tolong kasih jawabannya ya.',
      },
      {
        role: 'ai',
        text: `Sip, kita latihan Gauss-Jordan! Tapi biar lebih bermakna, gw bantu lu **nemu jawabannya sendiri** ya — setahap demi setahap. Dijamin lebih kuat nyantolnya! 💪\n\n**Gauss-Jordan bedanya dari Gauss biasa:** kita eliminasi ke **dua arah** (atas DAN bawah diagonal), sampai matriks jadi **identitas**. Tidak perlu back substitution!\n\n---\n\n**Langkah pertama:** Ubah sistem jadi matriks augmentasi.\n\nSistem:\n\`\`\`\n3x + 2y = 12\n x −  y = 1\n\`\`\`\n\nCoba tulis matriks augmentasinya! Ingat format:\n\`\`\`\n[ a₁₁  a₁₂  |  b₁ ]\n[ a₂₁  a₂₂  |  b₂ ]\n\`\`\`\n\nApa yang kamu tulis? 🤔`,
      },
      {
        role: 'user',
        text: '[ 3  2 | 12 ] dan [ 1 -1 | 1 ]',
      },
      {
        role: 'ai',
        text: `**Tepat!** ✅ Matriks augmentasi:\n\n\`\`\`\n[ 3   2  | 12 ]\n[ 1  -1  |  1 ]\n\`\`\`\n\n---\n\n**Langkah 2 — Modified Forward Elimination (khas Gauss-Jordan)**\n\nDalam Gauss-Jordan, sebelum eliminasi, kita **bagi baris pivot dengan elemen diagonalnya** agar diagonal menjadi 1.\n\nBaris pivot kita sekarang adalah **Baris 1**. Elemen diagonal B1 adalah **3**.\n\nKalau B1 dibagi 3, berapa hasilnya?\n\`\`\`\n[ 3/3   2/3  | 12/3 ] = ?\n\`\`\`\n\nIsi titik-titiknya! 🔢`,
      },
      {
        role: 'user',
        text: '[ 1  2/3  | 4 ]',
      },
      {
        role: 'ai',
        text: `**Benar!** ✅ Matriks sekarang:\n\n\`\`\`\n[ 1   2/3  |  4 ]\n[ 1   -1   |  1 ]\n\`\`\`\n\n---\n\n**Langkah 3 — Eliminasi elemen di bawah pivot**\n\nKita perlu buat elemen a₂₁ (kolom 1, baris 2) menjadi **0**.\n\nFormula: B2 ← B2 − λ×B1, di mana λ = a₂₁/a₁₁\n\nλ = **1/1 = 1**, jadi B2 ← B2 − 1×B1:\n\n\`\`\`\n[ 1-1×1,   -1-1×(2/3),   1-1×4 ] = ?\n\`\`\`\n\nCoba hitung tiap elemennya satu per satu! 🧮`,
      },
      {
        role: 'user',
        text: 'Elemen 1: 1-1=0, elemen 2: -1 - 2/3 = -5/3, elemen 3: 1-4 = -3. Jadi [ 0  -5/3  | -3 ]',
      },
      {
        role: 'ai',
        text: `**Luar biasa!** 🎉 Perhitungan lu sempurna!\n\nMatriks sekarang:\n\`\`\`\n[ 1   2/3  |  4  ]\n[ 0  -5/3  | -3  ]\n\`\`\`\n\n---\n\n**Langkah 4 — Normalisasi Baris 2**\n\nSekarang baris pivot berikutnya adalah **Baris 2**. Elemen diagonalnya adalah **−5/3**.\n\nKita bagi B2 dengan **−5/3** (sama dengan mengalikan dengan −3/5):\n\n\`\`\`\nB2 = [ 0×(-3/5),  (-5/3)×(-3/5),  (-3)×(-3/5) ] = ?\n\`\`\`\n\nCoba hitung! Hint: (-5/3) × (-3/5) = ? dan (-3) × (-3/5) = ? 🤔`,
      },
      {
        role: 'user',
        text: 'Hmm... (-5/3)×(-3/5) = 1 ya, dan (-3)×(-3/5) = 9/5 = 1.8. Jadi [ 0  1  | 1.8 ]?',
      },
      {
        role: 'ai',
        text: `**Hampir sempurna!** ✅ Bagian diagonal (= 1) sudah benar!\n\nYes, **9/5 = 1.8** benar. Dalam bentuk pecahan lebih rapi:\n\`\`\`\nB2 = [ 0   1   |  9/5 ]\n\`\`\`\n\nMatriks sekarang:\n\`\`\`\n[ 1   2/3  |  4   ]\n[ 0    1   |  9/5 ]\n\`\`\`\n\n---\n\n**Langkah 5 — Backward Elimination (khas Gauss-Jordan!)**\n\nIni yang membedakan Gauss-Jordan: sekarang kita juga eliminasi ke **atas** pivot!\n\nKita perlu buat elemen a₁₂ (kolom 2, baris 1) menjadi 0.\n\nFormula: B1 ← B1 − λ×B2, di mana λ = a₁₂/a₂₂ = **(2/3)/1 = 2/3**\n\nJadi B1 ← B1 − (2/3)×B2:\n\`\`\`\n[ 1-(2/3)×0,   2/3-(2/3)×1,   4-(2/3)×(9/5) ] = ?\n\`\`\`\n\nHitung elemen terakhirnya: **4 − (2/3)×(9/5) = ?** 🔢`,
      },
      {
        role: 'user',
        text: '(2/3)×(9/5) = 18/15 = 6/5. Jadi 4 - 6/5 = 20/5 - 6/5 = 14/5. Berarti B1 = [ 1  0  | 14/5 ]?',
      },
      {
        role: 'ai',
        text: `**SEMPURNA! 🎉** Perhitungan lu flawless!\n\n**Matriks akhir (Identitas!):**\n\`\`\`\n[ 1   0  |  14/5 ]\n[ 0   1  |   9/5 ]\n\`\`\`\n\nDan inilah keindahan Gauss-Jordan — solusinya langsung terbaca!\n\n**✅ SOLUSI:**\n\`\`\`\nx = 14/5 = 2.8\ny =  9/5 = 1.8\n\`\`\`\n\n**Verifikasi:**\n- 3x + 2y = 3(2.8) + 2(1.8) = 8.4 + 3.6 = **12** ✓\n- x − y = 2.8 − 1.8 = **1** ✓\n\n---\n\n**Yang lu sudah kuasai dari sesi ini:**\n\n| Step | Gauss-Jordan |\n|---|---|\n| 1 | Buat matriks augmentasi |\n| 2 | Normalisasi baris pivot (bagi dengan diagonal) |\n| 3 | Forward Elimination (nol-kan elemen di bawah) |\n| 4 | Ulangi untuk pivot berikutnya |\n| 5 | Backward Elimination (nol-kan elemen di atas) |\n| 6 | Baca solusi langsung dari kolom terakhir |\n\nKeren banget progress lu! Mau coba soal baru dengan 3 variabel? 🚀`,
      },
      {
        role: 'user',
        text: 'Apa itu Taylor Series dan kenapa penting di Scientific Computing?',
      },
      {
        role: 'ai',
        text: `Taylor Series adalah salah satu konsep paling fundamental dalam Scientific Computing. Gw akan jelasin dari intuisi dulu!\n\n---\n\n**Intuisi: Mendekati fungsi kompleks dengan polinomial**\n\nBayangkan kamu ingin menghitung sin(0.1). Komputer tidak bisa langsung "memahami" fungsi sin — ia hanya bisa melakukan operasi penjumlahan dan perkalian. Solusinya? **Aproksimasi sin(x) dengan polinomial!**\n\nTaylor Series memberikan cara sistematis untuk mengaproksimasi fungsi *f(x)* di sekitar titik *a* menggunakan penjumlahan tak hingga:\n\n\`\`\`\nf(x) = f(a) + f'(a)(x-a)/1! + f''(a)(x-a)²/2! + f'''(a)(x-a)³/3! + ...\n\`\`\`\n\nAtau dalam notasi sigma:\n\`\`\`\nf(x) = Σ [f⁽ⁿ⁾(a) / n!] × (x-a)ⁿ  untuk n = 0, 1, 2, ...\n\`\`\`\n\n---\n\n**Contoh: Aproksimasi sin(x) di sekitar a = 0 (Maclaurin Series)**\n\nSaat a = 0, Taylor Series disebut **Maclaurin Series**:\n\`\`\`\nsin(x) ≈ x - x³/3! + x⁵/5! - x⁷/7! + ...\n       = x - x³/6 + x⁵/120 - x⁷/5040 + ...\n\`\`\`\n\nUji untuk x = 0.1 (radian):\n\`\`\`\nSuku 1: 0.1                    = 0.1\nSuku 2: 0.1 - (0.1)³/6        = 0.1 - 0.000167 = 0.099833\nSuku 3: tambah (0.1)⁵/120     ≈ 0.099833 + 0.0000000083 ≈ 0.099833...\n\nNilai eksak: sin(0.1) = 0.0998334...\n\`\`\`\n\nHanya dengan **3 suku pertama**, aproksimasi sudah sangat akurat! 🎯\n\n---\n\n**Mengapa penting di Scientific Computing?**\n\n1. **Basis metode numerik** — hampir semua metode numerik (diferensiasi, integrasi, dll) diturunkan dari Taylor Series\n2. **Analisis error** — kita bisa tahu seberapa besar *galat* aproksimasi kita\n3. **Efisiensi komputasi** — cukup hitung beberapa suku, bukan semuanya\n\nMau kita eksplorasi bagaimana Taylor Series dipakai untuk **menurunkan rumus diferensiasi numerik**? Itu aplikasi yang sangat keren! 🔬`,
      },
      {
        role: 'user',
        text: 'Gw mau cari akar dari f(x) = x³ - 6x² + 11x - 6 pakai metode Bisection. Mulai dari interval [1, 2.5]. Gimana caranya?',
      },
      {
        role: 'ai',
        text: `Bagus! Bisection Method adalah metode yang paling sederhana dan **selalu konvergen** asal interval awalnya tepat.\n\n**Syarat awal:** interval [a, b] harus memiliki **f(a) dan f(b) berbeda tanda** (artinya ada akar di antara a dan b).\n\nSebelum mulai iterasi, mari kita cek dulu apakah interval [1, 2.5] memenuhi syarat:\n\nHitung **f(1)** dan **f(2.5)** untuk f(x) = x³ − 6x² + 11x − 6:\n\n\`\`\`\nf(1) = 1 - 6 + 11 - 6 = ?\nf(2.5) = ?\n\`\`\`\n\nCoba hitung keduanya dulu! 🔢`,
      },
      {
        role: 'user',
        text: 'f(1) = 0. Wah, berarti x=1 itu udah akar ya?',
      },
      {
        role: 'ai',
        text: `**Tepat!** 🎯 Luar biasa, lu langsung menemukan bahwa **x = 1 adalah akar eksak** dari f(x)!\n\nf(1) = 1 - 6 + 11 - 6 = **0** ✅\n\nKarena f(x) = x³ − 6x² + 11x − 6, polinomial kubik ini punya **3 akar**. Kita bisa faktoring:\n\`\`\`\nx³ − 6x² + 11x − 6 = (x−1)(x−2)(x−3)\n\`\`\`\n\nJadi ketiga akarnya adalah **x = 1, x = 2, x = 3**.\n\n---\n\nTapi karena tujuannya belajar Bisection, kita bisa pilih interval yang lebih menantang, misalnya **[2.5, 3.5]** untuk mencari akar x = 3.\n\n**Cek syarat:** f(2.5) dan f(3.5):\n\`\`\`\nf(2.5) = (2.5-1)(2.5-2)(2.5-3) = (1.5)(0.5)(-0.5) = -0.375\nf(3.5) = (3.5-1)(3.5-2)(3.5-3) = (2.5)(1.5)(0.5) = +1.875\n\`\`\`\n\nf(2.5) = **negatif**, f(3.5) = **positif** → berbeda tanda ✅ Ada akar di [2.5, 3.5]!\n\n---\n\n**Iterasi 1 Bisection:**\nHitung titik tengah: **c = (a+b)/2 = (2.5+3.5)/2 = ?**\n\nDan hitung f(c)-nya! 🔢`,
      },
      {
        role: 'user',
        text: 'c = 3.0, dan f(3) = (3-1)(3-2)(3-3) = 2×1×0 = 0!',
      },
      {
        role: 'ai',
        text: `**JACKPOT!** 🎉🎉\n\nLangsung ketemu akar eksak **x = 3** dalam 1 iterasi pertama!\n\n\`\`\`\nc = 3.0\nf(3) = 0 ✅ → Akar ditemukan!\n\`\`\`\n\nDalam situasi normal (akar tidak tepat di titik tengah), algoritmanya adalah:\n\n\`\`\`python\nif f(c) == 0:\n    return c  # akar ditemukan!\nelif f(a) * f(c) < 0:\n    b = c  # akar ada di [a, c]\nelse:\n    a = c  # akar ada di [c, b]\n\`\`\`\n\n**Ulangi** sampai |b-a| < tolerance.\n\n---\n\n**Implementasi Python Bisection:**\n\n\`\`\`python\ndef f(x):\n    return x**3 - 6*x**2 + 11*x - 6\n\ndef bisection(a, b, tol=1e-6, max_iter=100):\n    if f(a) * f(b) > 0:\n        return None  # tidak ada akar di interval ini!\n    \n    for i in range(max_iter):\n        c = (a + b) / 2\n        print(f\"Iter {i+1}: c = {c:.6f}, f(c) = {f(c):.6f}\")\n        \n        if f(c) == 0 or (b - a) / 2 < tol:\n            return c\n        \n        if f(a) * f(c) < 0:\n            b = c\n        else:\n            a = c\n    \n    return (a + b) / 2\n\nakar = bisection(2.5, 3.5)\nprint(f\"\\nAkar: x = {akar}\")\n\`\`\`\n\nKeren kan? **Selalu konvergen** asal interval awal benar! 🚀`,
      },
      {
        role: 'user',
        text: 'Kenapa kita perlu Numerical Differentiation? Kan turunan bisa dihitung secara analitik?',
      },
      {
        role: 'ai',
        text: `Pertanyaan sangat bagus! Memang benar — untuk fungsi yang kita ketahui rumusnya (seperti f(x) = x²), kita bisa langsung turunkan secara analitik: f'(x) = 2x.\n\n**Tapi ada 3 kasus nyata di mana turunan analitik TIDAK bisa dipakai:**\n\n1. **Data eksperimental** — Misalnya kamu mengukur suhu setiap detik dari termometer. Data berupa tabel angka, bukan persamaan matematis. Tidak ada "rumus" untuk diturunkan.\n\n2. **Fungsi sangat kompleks** — Beberapa fungsi bisa diturunkan secara teori, tapi hasilnya terlalu rumit untuk diimplementasikan di komputer.\n\n3. **Simulasi real-time** — Dalam simulasi fisika atau engineering, kita butuh nilai turunan instan dari data yang terus berubah.\n\n---\n\n**Pendekatan Numerical Differentiation:**\n\nKita kembali ke **definisi limit** dari turunan:\n\n\`\`\`\nf'(x) = lim(h→0) [f(x+h) - f(x)] / h\n\`\`\`\n\nDalam numerik, kita tidak bisa benar-benar h→0, jadi kita pilih h yang **sangat kecil** (misalnya h = 0.001):\n\n\`\`\`\nf'(x) ≈ [f(x+h) - f(x)] / h\n\`\`\`\n\nIni disebut **Forward Difference** — salah satu dari tiga rumus utama:\n\n| Metode | Rumus | Orde Error |\n|---|---|---|\n| Forward Difference | [f(x+h) - f(x)] / h | O(h) |\n| Backward Difference | [f(x) - f(x-h)] / h | O(h) |\n| Central Difference | [f(x+h) - f(x-h)] / 2h | O(h²) |\n\n**Central Difference paling akurat** karena error-nya O(h²) — jika h diperkecil 10×, error berkurang 100×!\n\n---\n\n**Contoh cepat:** f(x) = sin(x), hitung f'(π/4) ≈ cos(π/4) ≈ 0.7071\n\n\`\`\`python\nimport math\n\nx = math.pi / 4\nh = 0.001\n\nforward  = (math.sin(x+h) - math.sin(x)) / h\nbackward = (math.sin(x) - math.sin(x-h)) / h\ncentral  = (math.sin(x+h) - math.sin(x-h)) / (2*h)\n\nprint(f\"Nilai eksak  : {math.cos(x):.8f}\")  # 0.70710678\nprint(f\"Forward diff : {forward:.8f}\")       # 0.70674...\nprint(f\"Backward diff: {backward:.8f}\")      # 0.70746...\nprint(f\"Central diff : {central:.8f}\")       # 0.70710...\n\`\`\`\n\nCentral Difference menghasilkan 0.70710... — hampir identik dengan nilai eksak! 🎯\n\nMau kita eksplorasi bagaimana rumus-rumus ini diturunkan dari **Taylor Series**? Itu bagian yang sangat menarik! 🔬`,
      },
      {
        role: 'user',
        text: 'Gw disuruh hitung integral dari f(x) = x² dari x=0 sampai x=4 pakai metode Trapezoid dengan n=4 segmen. Gw bingung mulai dari mana.',
      },
      {
        role: 'ai',
        text: `Tenang, kita mulai dari yang paling dasar dulu!\n\n**Ide Trapezoid Rule:** daripada hitung integral secara analitik, kita **perkirakan luas area di bawah kurva** dengan menggabungkan beberapa **trapesium**.\n\n---\n\n**Langkah 1: Tentukan titik-titik x**\n\nKita punya interval [0, 4] dengan n=4 segmen.\n\nLebar setiap segmen: **h = (b-a)/n = (4-0)/4 = ?**\n\nBerapa nilai h? 🔢`,
      },
      {
        role: 'user',
        text: 'h = 1!',
      },
      {
        role: 'ai',
        text: `**Tepat!** h = 1 ✅\n\nJadi titik-titik x kita adalah:\n\`\`\`\nx₀ = 0, x₁ = 1, x₂ = 2, x₃ = 3, x₄ = 4\n\`\`\`\n\n**Langkah 2:** Hitung **f(x) di setiap titik**. Ingat f(x) = x²:\n\n\`\`\`\nf(x₀) = f(0) = ?\nf(x₁) = f(1) = ?\nf(x₂) = f(2) = ?\nf(x₃) = f(3) = ?\nf(x₄) = f(4) = ?\n\`\`\`\n\nCoba isi semua! 😊`,
      },
      {
        role: 'user',
        text: 'f(0)=0, f(1)=1, f(2)=4, f(3)=9, f(4)=16',
      },
      {
        role: 'ai',
        text: `**Sempurna!** ✅\n\nSekarang **Langkah 3: Trapezoid Rule Formula:**\n\n\`\`\`\n∫f(x)dx ≈ h/2 × [f(x₀) + 2f(x₁) + 2f(x₂) + 2f(x₃) + f(x₄)]\n\`\`\`\n\nPerhatikan polanya:\n- Titik **ujung** (x₀ dan x₄) dikalikan **1**\n- Titik **tengah** (x₁, x₂, x₃) dikalikan **2**\n\nMasukkan nilai yang sudah lu hitung:\n\n\`\`\`\n≈ (1/2) × [0 + 2(1) + 2(4) + 2(9) + 16]\n= (1/2) × [0 + ? + ? + ? + 16]\n= ?\n\`\`\`\n\nHitung suku dalam kurung dulu! 🧮`,
      },
      {
        role: 'user',
        text: '0 + 2 + 8 + 18 + 16 = 44. Jadi (1/2) × 44 = 22?',
      },
      {
        role: 'ai',
        text: `**YA!** 🎉 **Hasil Trapezoid: ≈ 22**\n\n---\n\n**Bandingkan dengan nilai eksak:**\n\n\`\`\`python\n∫₀⁴ x² dx = [x³/3]₀⁴ = 64/3 - 0 = 21.333...\n\`\`\`\n\n| | Nilai |\n|---|---|\n| Trapezoid (n=4) | 22.000 |\n| Nilai Eksak | 21.333 |\n| Error | 0.667 (≈ 3.1%) |\n\nErrornya 3.1% — cukup baik untuk n=4! Kalau kita naikkan n=8 atau n=16, error akan jauh lebih kecil.\n\n---\n\n**Bonus — Simpson's Rule lebih akurat:**\n\nUntuk n=4 yang sama, **Simpson's 1/3 Rule** memberikan:\n\`\`\`\n≈ h/3 × [f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + f(x₄)]\n= (1/3) × [0 + 4(1) + 2(4) + 4(9) + 16]\n= (1/3) × [0 + 4 + 8 + 36 + 16]\n= (1/3) × 64 = **21.333...**\n\`\`\`\n\n**Simpson's Rule langsung menghasilkan nilai eksak** untuk polinomial derajat ≤ 3! Itu kenapa Simpson lebih disukai dalam praktik. 🎯\n\nMau latihan soal baru, atau kita bandingkan berbagai metode integrasi numerik? 🚀`,
      },
      {
        role: 'user',
        text: 'Apa itu Ordinary Differential Equation (ODE) dan gimana cara selesaikannya secara numerik?',
      },
      {
        role: 'ai',
        text: `ODE adalah persamaan yang melibatkan **fungsi dan turunannya**. Ini salah satu alat terpenting dalam pemodelan fisika, engineering, dan biologi!\n\n**Contoh ODE sederhana:**\n\`\`\`\ndy/dx = f(x, y)\n\`\`\`\n\nMisalnya: **dy/dx = 2x** dengan kondisi awal y(0) = 1.\n- Ini artinya: "laju perubahan y terhadap x adalah 2x"\n- Solusi analitik: y = x² + 1\n\n**Kapan kita butuh metode numerik?**\nKetika ODE-nya kompleks dan tidak punya solusi analitik yang mudah. Contoh: model populasi, sirkuit listrik, dinamika fluida.\n\n---\n\n**Metode Euler — Yang Paling Sederhana**\n\nIdenya dari Taylor Series (lagi-lagi!):\n\`\`\`\ny(x + h) ≈ y(x) + h × y'(x)\n         = y(x) + h × f(x, y)\n\`\`\`\n\nArtinya: **mulai dari titik awal, "melangkah" dengan step h ke depan**, menggunakan kemiringan (turunan) di titik saat ini.\n\n**Algoritma:**\n\`\`\`\n1. Mulai dari (x₀, y₀) yang diketahui\n2. Hitung y₁ = y₀ + h × f(x₀, y₀)\n3. Hitung y₂ = y₁ + h × f(x₁, y₁)\n4. Ulangi sampai mencapai x yang diinginkan\n\`\`\`\n\n---\n\n**Contoh:** dy/dx = 2x, y(0) = 1, h = 0.5, hitung hingga x = 2.\n\n| x | y (Euler) | y (Eksak = x²+1) | Error |\n|---|---|---|---|\n| 0.0 | 1.000 | 1.000 | 0.000 |\n| 0.5 | 1.000 | 1.250 | 0.250 |\n| 1.0 | 1.500 | 2.000 | 0.500 |\n| 1.5 | 2.500 | 3.250 | 0.750 |\n| 2.0 | 4.000 | 5.000 | 1.000 |\n\nError **bertambah** seiring x karena setiap langkah membawa error kumulatif.\n\n---\n\n**Implementasi Python:**\n\n\`\`\`python\ndef euler_method(f, x0, y0, h, x_end):\n    """\n    Metode Euler untuk ODE dy/dx = f(x, y)\n    """\n    x = x0\n    y = y0\n    results = [(x, y)]\n    \n    while x < x_end:\n        y = y + h * f(x, y)   # INTI Euler\n        x = x + h\n        results.append((x, round(y, 6)))\n    \n    return results\n\n# Contoh: dy/dx = 2x\ndef f(x, y): \n    return 2 * x\n\nhasil = euler_method(f, x0=0, y0=1, h=0.5, x_end=2)\nfor x, y in hasil:\n    print(f\"x = {x:.1f}, y = {y:.4f}\")\n\`\`\`\n\n---\n\n**Metode yang lebih akurat: Runge-Kutta (RK4)**\n\nEuler hanya menggunakan kemiringan di **satu titik**. RK4 menggunakan rata-rata kemiringan di **4 titik** — jauh lebih akurat:\n\n\`\`\`\nk₁ = h × f(x, y)\nk₂ = h × f(x + h/2, y + k₁/2)\nk₃ = h × f(x + h/2, y + k₂/2)\nk₄ = h × f(x + h, y + k₃)\n\ny_baru = y + (k₁ + 2k₂ + 2k₃ + k₄) / 6\n\`\`\`\n\nRK4 adalah standar industri untuk menyelesaikan ODE secara numerik! 🚀\n\nMau latihan soal ODE dengan RK4? 🤔`,
      },
      {
        role: 'user',
        text: 'Gw ada data: (1,2), (2,4), (3,5), (4,4), (5,5). Minta tolong langsung cariin garis regresi liniernya.',
      },
      {
        role: 'ai',
        text: `Oke, kita cari bersama! Semakin lu ikut prosesnya, semakin ngerti dan bisa ngerjain soal ujian sendiri 😄\n\n**Tujuan Regresi Linier:** cari garis **y = a + bx** yang paling "fit" ke data — meminimalkan total kuadrat jarak vertikal dari setiap titik ke garis (Least Squares Method).\n\n**Formula:**\n\`\`\`\nb = [n×Σ(xᵢyᵢ) - Σxᵢ×Σyᵢ] / [n×Σ(xᵢ²) - (Σxᵢ)²\na = ȳ - b×x̄\n\`\`\`\n\nDi mana: n = jumlah data, ȳ = rata-rata y, x̄ = rata-rata x\n\n---\n\n**Kita isi tabel dulu:**\n\nData: (1,2), (2,4), (3,5), (4,4), (5,5)\n\n| i | xᵢ | yᵢ | xᵢ² | xᵢyᵢ |\n|---|---|---|---|---|\n| 1 | 1 | 2 | ? | ? |\n| 2 | 2 | 4 | ? | ? |\n| 3 | 3 | 5 | ? | ? |\n| 4 | 4 | 4 | ? | ? |\n| 5 | 5 | 5 | ? | ? |\n\nCoba isi kolom **xᵢ²** dan **xᵢyᵢ** untuk semua baris! 🔢`,
      },
      {
        role: 'user',
        text: 'xᵢ²: 1, 4, 9, 16, 25. xᵢyᵢ: 2, 8, 15, 16, 25.',
      },
      {
        role: 'ai',
        text: `**Sempurna!** ✅ Semua benar!\n\nSekarang hitung **penjumlahan (Σ) dari setiap kolom:**\n\n\`\`\`\nΣxᵢ   = 1+2+3+4+5 = ?\nΣyᵢ   = 2+4+5+4+5 = ?\nΣxᵢ²  = 1+4+9+16+25 = ?\nΣxᵢyᵢ = 2+8+15+16+25 = ?\n\`\`\`\n\nHitung semua Σ-nya! 🧮`,
      },
      {
        role: 'user',
        text: 'Σx = 15, Σy = 20, Σx² = 55, Σxy = 66',
      },
      {
        role: 'ai',
        text: `**Luar biasa! Semua benar!** ✅\n\nSummary:\n\`\`\`\nn     = 5\nΣx    = 15\nΣy    = 20\nΣx²   = 55\nΣxy   = 66\n\`\`\`\n\nSekarang hitung **koefisien b** menggunakan formula:\n\`\`\`\nb = [n×Σxy - Σx×Σy] / [n×Σx² - (Σx)²]\n  = [5×66 - 15×20] / [5×55 - 15²]\n  = [? - ?] / [? - ?]\n  = ?\n\`\`\`\n\nCoba hitung pembilang dan penyebutnya dulu secara terpisah! 🔢`,
      },
      {
        role: 'user',
        text: 'Pembilang: 5×66=330, 15×20=300. Jadi 330-300=30. Penyebut: 5×55=275, 15²=225. Jadi 275-225=50. b = 30/50 = 0.6',
      },
      {
        role: 'ai',
        text: `**PERFECT!** 🎉 b = 0.6 ✅\n\nTerakhir, hitung **konstanta a**:\n\`\`\`\nx̄ = Σx/n = 15/5 = 3\nȳ = Σy/n = 20/5 = 4\n\na = ȳ - b×x̄ = 4 - 0.6×3 = 4 - 1.8 = ?\n\`\`\`\n\nBerapa a? Satu langkah lagi! 😊`,
      },
      {
        role: 'user',
        text: 'a = 2.2!',
      },
      {
        role: 'ai',
        text: `**SELESAI!** 🎊🎊\n\n**Garis Regresi Linier:**\n\`\`\`\ny = 2.2 + 0.6x\n\`\`\`\n\n**Prediksi vs Data Asli:**\n\n| x | y asli | y prediksi | residual |\n|---|---|---|---|\n| 1 | 2 | 2.8 | -0.8 |\n| 2 | 4 | 3.4 | +0.6 |\n| 3 | 5 | 4.0 | +1.0 |\n| 4 | 4 | 4.6 | -0.6 |\n| 5 | 5 | 5.2 | -0.2 |\n\nGaris ini **meminimalkan jumlah kuadrat residual** — itulah least squares! Tidak ada garis lain yang bisa memberikan total error lebih kecil.\n\n---\n\n**Verifikasi cepat di Python:**\n\`\`\`python\nimport numpy as np\n\nx = np.array([1, 2, 3, 4, 5])\ny = np.array([2, 4, 5, 4, 5])\n\nb, a = np.polyfit(x, y, 1)  # degree 1 = linier\nprint(f\"y = {a:.2f} + {b:.2f}x\")\n# Output: y = 2.20 + 0.60x ✓\n\`\`\`\n\nLu berhasil hitung regresi linier dari nol tanpa kalkulator khusus! 💪`,
      },
      {
        role: 'user',
        text: 'Di modul disebutkan kalau Eliminasi Gauss bisa gagal. Kapan itu terjadi dan apa solusinya?',
      },
      {
        role: 'ai',
        text: `Pertanyaan kritis banget! Ini masalah nyata yang sering muncul dalam implementasi.\n\n**Kapan Eliminasi Gauss Gagal?**\n\nProses forward elimination menghitung faktor pengali:\n\`\`\`\nλ = a_{ji} / a_{ii}\n\`\`\`\n\nJika **a_{ii} = 0** (elemen diagonal = nol), pembagian tidak terdefinisi → **Division by Zero!** 💥\n\n**Contoh bermasalah:**\n\`\`\`\n[ 0  -1   1  |  0 ]\n[-1   2  -1  |  0 ]\n[ 2  -1   0  |  1 ]\n\`\`\`\n\nElemen diagonal pertama = **0** → langsung gagal di langkah pertama!\n\n---\n\n**Masalah lebih halus: elemen diagonal sangat kecil**\n\nBahkan tanpa pembagian nol, kalau diagonal *sangat kecil* (misal 0.000001), hasilnya bisa sangat tidak akurat karena **round-off error** menjadi besar.\n\n---\n\n**Solusi: Scaled Row Pivoting**\n\nSebelum setiap langkah eliminasi, kita **tukar baris** agar elemen diagonal sebesar mungkin relatif terhadap isi barisnya.\n\nCaranya:\n1. Untuk setiap baris kandidat pivot, hitung **faktor skala** sᵢ = max|aᵢⱼ| (nilai absolut terbesar di baris itu)\n2. Hitung **ukuran relatif** rᵢ = |aᵢ,pivot| / sᵢ\n3. **Pilih baris** dengan rᵢ terbesar sebagai pivot\n4. Tukar posisinya ke baris pivot saat ini\n\n---\n\n**Contoh:**\n\`\`\`\n[ 2  -1   0  |  1 ]\n[ 0  -1   1  |  0 ]\n[-1   2  -1  |  0 ]\n\`\`\`\n\nUntuk memilih pivot di kolom 1:\n- s₁ = max(|2|, |-1|, |0|) = **2** → r₁ = |2|/2 = **1.0**\n- s₂ = max(|0|, |-1|, |1|) = **1** → r₂ = |0|/1 = **0.0** (tidak ada elemen di kolom 1!)\n- s₃ = max(|-1|, |2|, |-1|) = **2** → r₃ = |-1|/2 = **0.5**\n\nTerbesar adalah r₁ = 1.0, jadi baris 1 tetap jadi pivot. Tidak perlu swap.\n\n**Eliminasi lanjut normal** setelah pilih pivot dengan benar! ✅\n\n---\n\n**Aturan praktis:** Implementasikan Scaled Row Pivoting selalu di kode kalian — ini membuat Eliminasi Gauss **jauh lebih robust** untuk semua jenis input! 🛡️\n\nMau lihat implementasi Python-nya dengan dan tanpa pivoting untuk dibandingkan? 🐍`,
      },
    ],
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
      { role: 'user', text: `Adaptiv, pusing banget gw asli jam segini. Ini besok pagi ada kelas matkul Creativity & Innovation, dan gw baru ngeh ada tugas kelompok kumpul report slide powerpoint buat Assignment I. Bahan materinya numpuk dari Session 2 tentang Design Thinking & SDGs, terus ada Customer Insights, sampe Session 7 tentang Market Positioning ama Perceptual Map.\n\nGw udah upload semua file PPTX-nya ke workspace ADAPTIV nih (dari Session 2 sampe Session 13). Lu bisa tolong rangkumin core values-nya ga? Terutama bagian penting yang wajib masuk di report Assignment I besok. Tolong breakdown pake bahasa santai aja kayak biasa biar otak gw yang udah lowbatt ini bisa langsung nangkep!` },
      { role: 'ai', text: `Wkwkwk santai, Lloyd! Tarik napas dulu, jangan panik. Mesin AI gw udah ngebaca semua berkas PPTX kuliah lu dari hulu ke hilir. Ketahuan banget nih lu tipe pejuang deadliner garis keras ya, jam segini baru buka modul. Tapi tenang, mumpung server masih anget, gw beresin ini biar lu bisa tidur tenang malam ini. 🔥\n\nBerdasarkan analisis file yang lu upload, kunci utama dari report Assignment I lu itu sebenarnya berputar di metodologi **Design Thinking** yang berorientasi pada pemecahan masalah manusia secara nyata, khususnya yang bersinggungan dengan **SDGs (Sustainable Development Goals)**.\n\nIni rangkuman core values super ringkas yang WAJIB ada di report lu besok pagi:\n\n**1. Core Problem & SDGs (Session 2 & 6):**\nTugas lu harus jelas meng-address masalah manusia dulu (*human-centered*). Pertanyaannya: Apa *human need* di balik ide bisnis lu? Terus wajib lu kaitkan ke target SDGs.\n\n**2. Customer Insights (Session 3):**\nLu harus masukin hasil wawancara minimal 10 orang. Dari situ, lu wajib breakdown ke *User Persona* dan *Empathy Map*.\n\n**3. Value Proposition Canvas / VPC (Session 5):**\nIni jantungnya solusi lu. Sisi Kanan: Customer Jobs, Pains, Gains. Sisi Kiri: Products & Services, Pain Relievers, Gain Creators.\n\n**4. STP & Perceptual Map (Session 7):**\n*Segmentation, Targeting, Positioning* + diagram Perceptual Map untuk memetakan posisi bisnis lu vs kompetitor.\n\nGimana, Lloyd? Udah mulai dapet gambaran besarnya? Mau kita langsung simulasi bikin kuis interaktif singkat buat mastiin otak lu beneran paham materinya? Sikat!` },
      { role: 'user', text: `Gokil, langsung dapet pencerahan gw! Rangkuman lu bener-bener motong ratusan slide jadi daging semua. Nah, bener banget tuh, coba buatin gw kuis singkat bertahap langsung di chat ini dong. Tapi opsinya bikin interaktif ya, jadi gw tinggal pilih, terus lu langsung kasih feedback bener atau salah beserta penjelasannya. Biar seru aja sekalian refresh otak. Jelasin juga kenapa opsi lainnya salah kalau bisa.` },
      { role: 'ai', text: `[WIDGET KUIS INTERAKTIF ADAPTIV - DIRENDERS DI DALAM CHAT]\n\nSiap, Lloyd! Kuis Adaptif kita mulai. Ini Soal 1 untuk menguji pemahaman lu tentang Value Proposition Canvas (VPC).\n\nTopik: **Value Creation (Session 5)**\n\nPertanyaan:\nDi dalam diagram VPC, jika seorang mahasiswa mengeluhkan *"Saya sangat pusing dan stres saat membaca dokumen diktat kuliah setebal 200 halaman sebelum ujian"*, maka di manakah posisi keluhan tersebut, dan apa elemen solusi yang tepat?\n\n**[A]** Customer Jobs → Products & Services\n**[B]** Customer Pains → Pain Relievers\n**[C]** Customer Gains → Gain Creators\n**[D]** Customer Pains → Gain Creators\n\nSilakan ketik huruf jawaban pilihan lu (A/B/C/D)! 🚀` },
      { role: 'user', text: `Jawaban gw: B! Jelas itu mah, kan dia ngeluh pusing ama stres, berarti itu penderitaan atau kesulitannya si user. Berarti masuk Pains, terus obatnya ya Pain Relievers dari aplikasi kita. Bener kagak?` },
      { role: 'ai', text: `**[FEEDBACK: JAWABAN ANDA BENAR! 🎉]**\n\nSikat, Lloyd! 100% Tepat! Analisis lu udah matang banget.\n\nKeluhan mahasiswa tentang *"pusing dan stres membaca dokumen tebal"* adalah bentuk emosi negatif yang dihadapi user → masuk ke **Customer Pains**. Solusi yang mengurangi penderitaan itu dinamakan **Pain Relievers**. Contoh konkret di ADAPTIV: fitur merangkum teks panjang jadi ringkasan audio pendek.\n\nKenapa opsi lain salah?\n- **Opsi A:** Customer Jobs = tugas fungsional dasar user, bukan keluhan\n- **Opsi C:** Gains = ekspektasi bahagia user, bukan penderitaan\n- **Opsi D:** Pasangan tertukar — Gain Creators untuk kebahagiaan, bukan menyembuhkan Pains\n\nMau lanjut ke Soal 2 tentang Perceptual Map, atau kita brainstorming projek lu dulu? Lu yang pegang kendali!` },
      { role: 'user', text: `Lanjut besok aja deh kuisnya, gw udah nangkep core-nya. Sekarang gw mau sekalian konsultasi mumpung lu lagi responsif. Lu kan tahu projek aplikasi yang lagi gw bangun ini, platform EdTech yang fokus ngubah dokumen rumit jadi ringkasan audio, visual mind map, ama kuis adaptif. Nah, kalau dikaitkan sama Session 10 (Prototype Creation) dan Session 11 (Prototype Testing) di modul tadi, langkah konkret apa yang harus gw lakuin bareng tim kelompok gw minggu ini? Soalnya di slide dibilang "Never fall in love with your prototype!". Jujur gw rada takut kalau UI yang udah gw coding cape-cape di React ini ternyata gak cocok ama kemauan pasar.` },
      { role: 'ai', text: `Nah! Ini pertanyaan paling berbobot malam ini, Lloyd. Keren banget lu udah bisa mengaitkan teori kuliah langsung ke projek nyata lu.\n\nKalimat *"Never fall in love with your prototype"* di Session 10 itu maksudnya: Jangan pernah merasa prototipe/UI awal buatan lu itu udah sempurna sampai lu defensif pas dikasih masukan. Prototipe itu dibuat untuk salah, diuji, dihancurin, lalu diperbaiki lagi secara iteratif.\n\nLangkah konkret yang harus lu dan tim lakuin minggu ini:\n\n**1. Tentukan Level Prototipe (Session 10):**\nKarena lu udah ngoding UI-nya di React/Vite, lu sudah di tahap **High-Fidelity Prototype**. Bagus banget, user bisa merasakan pengalaman mendekati aplikasi aslinya.\n\n**2. Terapkan "Magic Number Five" (Session 11):**\n85% masalah usabilitas ditemukan hanya dari **5 orang tester**! Lebih dari itu data jenuh berulang. Cari 5 teman kampus, suruh mereka coba UI lu, amati di mana mereka bingung.\n\n**3. Bikin Feedback Grid (Session 11):**\nPetakan masukan mereka ke 4 kuadran:\n- ➕ *Plus*: Yang mereka suka\n- 💡 *Ide baru*: Saran fitur tambahan\n- ❓ *Kebingungan*: Titik yang bikin mereka nyasar\n- 🔧 *Kritik Konstruktif*: Yang perlu diperbaiki\n\nGak usah takut kode React lu dirombak, Lloyd. Justru semakin cepat lu tahu salahnya, semakin aman aplikasi lu pas rilis massal nanti! Bantai besok pagi! 🔥` },
      { role: 'ai', text: `🎯 **Kuis Lanjutan Sudah Siap, Lloyd!**\n\nIngat tadi lu bilang "lanjut besok aja kuisnya"? Nah, gw udah siapkan **4 soal lanjutan** yang nyambung langsung dari percakapan kita malam ini — mulai dari Customer Insights, Revenue Streams, Magic Number Five, sampai Perceptual Map.\n\nBuka panel **Studio → Kuis** di sebelah kanan untuk melanjutkan. Kalau lu selesaiin semua 5 soal, lu bakal punya bekal materi yang solid banget buat nulis report Assignment I besok! 💪\n\n*Klik ikon 🎯 Kuis di toolbar kanan untuk mulai.*` }
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

// ============================================================
// QUIZZES — Scientific Computing
// ============================================================

export const quizzes = {
  spl_eliminasi_gauss: [
    {
      question: 'Apa tujuan utama dari tahap Forward Elimination dalam metode Eliminasi Gauss?',
      badge: 'ELIMINASI GAUSS',
      options: [
        { letter: 'A', text: 'Mengubah matriks augmentasi menjadi matriks identitas', isCorrect: false, rationale: 'Itu adalah tujuan Eliminasi Gauss-Jordan, bukan Eliminasi Gauss standar.' },
        { letter: 'B', text: 'Mengubah matriks augmentasi menjadi matriks segitiga atas', isCorrect: true, rationale: 'Tepat! Forward Elimination membuat semua elemen di bawah diagonal menjadi 0, menghasilkan matriks segitiga atas (Upper Triangle Matrix). Setelah itu, Back Substitution digunakan untuk mendapatkan solusi.' },
        { letter: 'C', text: 'Langsung menghitung nilai semua variabel', isCorrect: false, rationale: 'Nilai variabel baru dihitung pada tahap Back Substitution, bukan Forward Elimination.' },
        { letter: 'D', text: 'Mengubah semua elemen di atas diagonal menjadi 0', isCorrect: false, rationale: 'Membuat elemen di atas diagonal menjadi 0 adalah tugas Backward Elimination dalam metode Gauss-Jordan.' },
      ],
    },
    {
      question: 'Diberikan matriks augmentasi berikut:\n[ 2  1  |  5 ]\n[ 6  4  | 16 ]\nBerapa nilai faktor pengali λ untuk eliminasi baris 2 menggunakan baris 1 sebagai pivot?',
      badge: 'FAKTOR PENGALI',
      options: [
        { letter: 'A', text: 'λ = 1/3', isCorrect: false, rationale: 'Faktor pengali dihitung dengan λ = a₂₁/a₁₁ = 6/2 = 3, bukan 1/3.' },
        { letter: 'B', text: 'λ = 6', isCorrect: false, rationale: 'λ = a₂₁/a₁₁ = 6/2. Pembaginya adalah elemen diagonal pivot (2), bukan pembilangnya.' },
        { letter: 'C', text: 'λ = 3', isCorrect: true, rationale: 'Tepat! λ = a_{ji}/a_{ii} = a₂₁/a₁₁ = 6/2 = 3. Faktor ini digunakan dalam operasi B2 ← B2 − 3×B1.' },
        { letter: 'D', text: 'λ = 2', isCorrect: false, rationale: 'λ dihitung dari elemen yang akan dieliminasi (a₂₁=6) dibagi elemen diagonal pivot (a₁₁=2), bukan nilai elemen diagonal itu sendiri.' },
      ],
    },
    {
      question: 'Dalam metode Back Substitution, urutan penyelesaian variabel yang benar pada matriks segitiga atas 3×3 adalah...',
      badge: 'BACK SUBSTITUTION',
      options: [
        { letter: 'A', text: 'x₁ dulu, lalu x₂, lalu x₃', isCorrect: false, rationale: 'Itu adalah urutan Forward Substitution, bukan Back Substitution.' },
        { letter: 'B', text: 'x₃ dulu (dari baris terakhir), lalu x₂, lalu x₁', isCorrect: true, rationale: 'Benar! Back Substitution dimulai dari baris terakhir matriks segitiga atas (yang hanya punya 1 variabel), lalu mensubstitusi ke atas. x₃ → x₂ → x₁.' },
        { letter: 'C', text: 'Semua variabel dihitung secara paralel sekaligus', isCorrect: false, rationale: 'Tidak mungkin karena nilai x₃ dibutuhkan untuk menghitung x₂, dan nilai x₂, x₃ dibutuhkan untuk x₁.' },
        { letter: 'D', text: 'Urutan tidak penting selama matriks segitiga atas', isCorrect: false, rationale: 'Urutan sangat penting! Nilai variabel di bawah harus diketahui dulu sebelum bisa menghitung variabel di atasnya.' },
      ],
    },
  ],
  spl_gauss_seidel_guided: [
    {
      question: 'Apa syarat matriks koefisien agar metode Gauss-Seidel dapat konvergen ke solusi yang benar?',
      badge: 'GAUSS-SEIDEL',
      options: [
        { letter: 'A', text: 'Matriks harus berbentuk segitiga atas', isCorrect: false, rationale: 'Bentuk segitiga atas adalah hasil dari Forward Elimination, bukan syarat Gauss-Seidel.' },
        { letter: 'B', text: 'Matriks harus bersifat Diagonal Dominant', isCorrect: true, rationale: 'Tepat! Diagonal Dominant berarti nilai absolut elemen diagonal di setiap baris harus lebih besar dari jumlah absolut elemen lain di baris yang sama. Ini menjamin konvergensi Gauss-Seidel.' },
        { letter: 'C', text: 'Jumlah persamaan harus lebih banyak dari jumlah variabel', isCorrect: false, rationale: 'Sebaliknya, jumlah persamaan harus sama dengan jumlah variabel. Kelebihan persamaan membuat sistem overdetermined.' },
        { letter: 'D', text: 'Semua elemen matriks harus bernilai positif', isCorrect: false, rationale: 'Elemen negatif tidak masalah selama sifat diagonal dominant terpenuhi.' },
      ],
    },
    {
      question: 'Perbedaan penting Gauss-Seidel dengan metode Jacobi adalah...',
      badge: 'METODE ITERATIF',
      options: [
        { letter: 'A', text: 'Gauss-Seidel menggunakan nilai variabel yang sudah diperbarui langsung dalam iterasi yang sama', isCorrect: true, rationale: 'Benar! Inilah keunggulan Gauss-Seidel. Saat menghitung x₂, kita langsung gunakan x₁ yang baru saja dihitung (bukan x₁ dari iterasi sebelumnya). Ini membuat Gauss-Seidel biasanya konvergen lebih cepat.' },
        { letter: 'B', text: 'Gauss-Seidel hanya dapat digunakan untuk 2 variabel', isCorrect: false, rationale: 'Gauss-Seidel bisa digunakan untuk n variabel berapapun, sama seperti metode iteratif lainnya.' },
        { letter: 'C', text: 'Gauss-Seidel tidak memerlukan tebakan awal', isCorrect: false, rationale: 'Gauss-Seidel tetap memerlukan tebakan awal (biasanya x=0 untuk semua variabel). Ini adalah ciri khas metode iteratif.' },
        { letter: 'D', text: 'Gauss-Seidel selalu konvergen lebih lambat', isCorrect: false, rationale: 'Justru sebaliknya — Gauss-Seidel biasanya lebih cepat konvergen karena langsung menggunakan nilai terbaru.' },
      ],
    },
  ],
  spl_lu_decomposition: [
    {
      question: 'Dalam LU Decomposition, matriks L memiliki ciri...',
      badge: 'LU DECOMPOSITION',
      options: [
        { letter: 'A', text: 'Semua elemen di bawah diagonal = 0, diagonal = 1', isCorrect: false, rationale: 'Ini mendeskripsikan matriks segitiga atas dengan diagonal 1, bukan matriks L.' },
        { letter: 'B', text: 'Semua elemen di atas diagonal = 0, diagonal = 1', isCorrect: true, rationale: 'Tepat! L adalah Lower Triangle Matrix. Elemen di atas diagonal = 0, dan diagonalnya selalu bernilai 1. Elemen di bawah diagonal berisi faktor pengali λ dari proses eliminasi.' },
        { letter: 'C', text: 'Semua elemen = 0 kecuali diagonal', isCorrect: false, rationale: 'Itu mendeskripsikan matriks diagonal, bukan matriks L.' },
        { letter: 'D', text: 'Matriks L sama persis dengan matriks A', isCorrect: false, rationale: 'L adalah hasil dekomposisi dari A, bukan A itu sendiri. A = L × U.' },
      ],
    },
  ],
  taylor_series: [
    {
      question: 'Maclaurin Series adalah kasus khusus dari Taylor Series ketika...',
      badge: 'TAYLOR SERIES',
      options: [
        { letter: 'A', text: 'Titik ekspansi a = 1', isCorrect: false, rationale: 'a = 1 bukan kasus khusus Maclaurin, itu hanya Taylor Series biasa di sekitar a = 1.' },
        { letter: 'B', text: 'Titik ekspansi a = 0', isCorrect: true, rationale: 'Benar! Maclaurin Series adalah Taylor Series yang diekspansi di sekitar a = 0. Rumusnya: f(x) = f(0) + f\'(0)x + f\'\'(0)x²/2! + ...' },
        { letter: 'C', text: 'Jumlah suku dibatasi maksimal 3', isCorrect: false, rationale: 'Maclaurin Series bisa memiliki suku tak hingga, tidak dibatasi.' },
        { letter: 'D', text: 'Fungsi f(x) harus polinomial', isCorrect: false, rationale: 'Taylor/Maclaurin bisa digunakan untuk fungsi apapun yang terdiferensiasi, termasuk sin, cos, exp, dll.' },
      ],
    },
  ],
  numerical_diff: [
    {
      question: 'Metode Central Difference memiliki orde error O(h²), artinya...',
      badge: 'NUMERICAL DIFFERENTIATION',
      options: [
        { letter: 'A', text: 'Jika h diperkecil 10 kali, error berkurang 10 kali', isCorrect: false, rationale: 'Itu berlaku untuk O(h). Untuk O(h²), pengurangan error lebih drastis.' },
        { letter: 'B', text: 'Jika h diperkecil 10 kali, error berkurang 100 kali', isCorrect: true, rationale: 'Tepat! O(h²) berarti error proporsional terhadap h². Jika h → h/10, maka error → (h/10)² = h²/100, berkurang 100 kali lipat!' },
        { letter: 'C', text: 'Error selalu bernilai h²', isCorrect: false, rationale: 'O(h²) menunjukkan orde, bukan nilai eksak. Ada konstanta lain yang mempengaruhi.' },
        { letter: 'D', text: 'Metode ini hanya akurat untuk h > 1', isCorrect: false, rationale: 'Justru sebaliknya — h harus kecil (mendekati 0) agar aproksimasi akurat.' },
      ],
    },
  ],
  numerical_integration_guided: [
    {
      question: 'Dalam Trapezoid Rule, bobot koefisien untuk titik-titik ujung dan titik-titik tengah adalah...',
      badge: 'INTEGRASI NUMERIK',
      options: [
        { letter: 'A', text: 'Semua titik dikalikan 1', isCorrect: false, rationale: 'Hanya titik ujung yang dikalikan 1, titik tengah dikalikan 2.' },
        { letter: 'B', text: 'Titik ujung × 1, titik tengah × 2', isCorrect: true, rationale: 'Benar! Dalam Trapezoid Rule: h/2 × [f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]. Titik ujung (pertama dan terakhir) berbobot 1, sisanya berbobot 2.' },
        { letter: 'C', text: 'Titik ujung × 2, titik tengah × 1', isCorrect: false, rationale: 'Terbalik! Titik ujung berbobot 1, titik tengah berbobot 2.' },
        { letter: 'D', text: 'Pola bergantian: 1, 4, 2, 4, 1', isCorrect: false, rationale: 'Pola 1-4-2-4-1 adalah Simpson\'s 1/3 Rule, bukan Trapezoid Rule.' },
      ],
    },
  ],
  ode_euler: [
    {
      question: 'Kelemahan utama Metode Euler dibandingkan Runge-Kutta (RK4) adalah...',
      badge: 'ODE',
      options: [
        { letter: 'A', text: 'Euler tidak bisa digunakan untuk ODE', isCorrect: false, rationale: 'Euler bisa digunakan untuk ODE, hanya saja kurang akurat.' },
        { letter: 'B', text: 'Euler hanya menggunakan kemiringan di satu titik, sehingga akumulasi error lebih besar', isCorrect: true, rationale: 'Benar! Euler menggunakan kemiringan di titik awal saja (orde 1), sementara RK4 menghitung rata-rata tertimbang dari 4 kemiringan di interval tersebut, menghasilkan akurasi orde 4.' },
        { letter: 'C', text: 'Euler membutuhkan lebih banyak komputasi', isCorrect: false, rationale: 'Justru sebaliknya — Euler sangat sederhana dan murah secara komputasi. RK4 yang membutuhkan lebih banyak perhitungan per langkah.' },
        { letter: 'D', text: 'Euler tidak memerlukan kondisi awal', isCorrect: false, rationale: 'Semua metode ODE (Euler, RK4, dll) memerlukan kondisi awal y(x₀) = y₀.' },
      ],
    },
  ],
  regression_guided: [
    {
      question: 'Dalam Regresi Linier (Least Squares), garis y = a + bx dipilih karena...',
      badge: 'REGRESSION',
      options: [
        { letter: 'A', text: 'Garis tersebut melewati semua titik data', isCorrect: false, rationale: 'Regresi linier tidak harus melewati semua titik. Itu adalah interpolasi, bukan regresi.' },
        { letter: 'B', text: 'Garis tersebut meminimalkan jumlah kuadrat jarak vertikal (residual) dari setiap titik data ke garis', isCorrect: true, rationale: 'Tepat! Metode Least Squares memilih koefisien a dan b sehingga Σ(yᵢ - ŷᵢ)² minimal. Tidak ada garis lain yang bisa memberikan total kuadrat residual lebih kecil.' },
        { letter: 'C', text: 'Garis tersebut melewati titik data pertama dan terakhir', isCorrect: false, rationale: 'Tidak ada jaminan garis regresi melewati titik mana pun. Ia meminimalkan error keseluruhan.' },
        { letter: 'D', text: 'Garis tersebut selalu memiliki gradient positif', isCorrect: false, rationale: 'Gradient bisa positif, negatif, atau nol tergantung data. Regresi tidak memaksakan arah kemiringan.' },
      ],
    },
  ],
  scaled_row_pivoting: [
    {
      question: 'Scaled Row Pivoting diperlukan dalam Eliminasi Gauss ketika...',
      badge: 'SCALED ROW PIVOTING',
      options: [
        { letter: 'A', text: 'Matriks berukuran lebih dari 3×3', isCorrect: false, rationale: 'Pivoting diperlukan berdasarkan kondisi elemen, bukan ukuran matriks.' },
        { letter: 'B', text: 'Elemen diagonal (pivot) bernilai 0 atau sangat kecil relatif terhadap elemen lain di barisnya', isCorrect: true, rationale: 'Benar! Jika pivot = 0, terjadi division by zero. Jika pivot sangat kecil, round-off error menjadi besar. Scaled Row Pivoting memilih baris dengan rasio |elemen pivot / max elemen baris| terbesar.' },
        { letter: 'C', text: 'Semua elemen matriks bernilai positif', isCorrect: false, rationale: 'Nilai positif atau negatif tidak menentukan kebutuhan pivoting. Yang penting adalah nilai relatif elemen diagonal.' },
        { letter: 'D', text: 'Matriks sudah berbentuk segitiga atas', isCorrect: false, rationale: 'Jika matriks sudah segitiga atas, eliminasi sudah selesai dan pivoting tidak diperlukan.' },
      ],
    },
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

// ============================================================
// FLASHCARDS — Scientific Computing
// ============================================================

export const flashcards = {
  spl_eliminasi_gauss: [
    {
      category: "Eliminasi Gauss",
      question: "Apa dua tahap utama dalam metode Eliminasi Gauss?",
      answer: "Tahap 1: Forward Elimination — mengubah matriks augmentasi menjadi bentuk segitiga atas dengan membuat semua elemen di bawah diagonal menjadi 0. Tahap 2: Back Substitution — menghitung nilai variabel dari baris terakhir ke atas.",
      formula: "λ = a_{ji}/a_{ii}; Bᵢ ← Bᵢ − λ × Bpivot",
      subtext: "Forward Elimination menggunakan faktor pengali λ untuk mengeliminasi elemen. Back Substitution menghitung variabel secara berurutan dari bawah.",
      rated: null
    },
    {
      category: "Matriks Augmentasi",
      question: "Bagaimana cara membentuk matriks augmentasi dari sistem persamaan linier?",
      answer: "Ambil semua koefisien variabel sebagai elemen matriks, lalu tambahkan kolom terakhir berisi nilai ruas kanan persamaan, dipisahkan oleh garis vertikal.",
      formula: "[A | Y] dimana A = matriks koefisien, Y = vektor hasil",
      subtext: "Matriks augmentasi menyederhanakan operasi baris elementer tanpa perlu menulis ulang variabel.",
      rated: null
    },
  ],
  spl_gauss_seidel_guided: [
    {
      category: "Gauss-Seidel",
      question: "Apa perbedaan utama metode Gauss-Seidel dengan metode Jacobi?",
      answer: "Gauss-Seidel langsung menggunakan nilai variabel yang baru saja dihitung dalam iterasi yang sama, sementara Jacobi menggunakan semua nilai dari iterasi sebelumnya.",
      formula: "xᵢ^(k+1) = (bᵢ − Σⱼ₌₁ⁱ⁻¹ aᵢⱼxⱼ^(k+1) − Σⱼ₌ᵢ₊₁ⁿ aᵢⱼxⱼ^(k)) / aᵢᵢ",
      subtext: "Gauss-Seidel biasanya konvergen lebih cepat karena menggunakan informasi terbaru.",
      rated: null
    },
    {
      category: "Konvergensi",
      question: "Apa syarat agar metode Gauss-Seidel konvergen?",
      answer: "Matriks koefisien harus bersifat Diagonal Dominant — nilai absolut elemen diagonal di setiap baris harus lebih besar dari jumlah absolut elemen lain di baris yang sama.",
      formula: "|aᵢᵢ| > Σⱼ≠ᵢ |aᵢⱼ| untuk setiap baris i",
      subtext: "Error dihitung dengan εᵢ = √Σ(xᵢ_baru − xᵢ_lama)². Iterasi berhenti saat ε < threshold.",
      rated: null
    },
  ],
  spl_lu_decomposition: [
    {
      category: "LU Decomposition",
      question: "Apa keunggulan utama LU Decomposition dibandingkan Eliminasi Gauss biasa?",
      answer: "LU Decomposition memecah A menjadi L×U sekali saja. Untuk vektor Y yang berbeda-beda, cukup lakukan Forward dan Back Substitution tanpa perlu eliminasi ulang.",
      formula: "A = L × U; Selesaikan LM = Y (forward), lalu Ux = M (backward)",
      subtext: "Sangat efisien untuk sistem dengan matriks A tetap tapi Y berubah-ubah.",
      rated: null
    },
  ],
  taylor_series: [
    {
      category: "Taylor Series",
      question: "Apa itu Taylor Series dan apa hubungannya dengan Scientific Computing?",
      answer: "Taylor Series mengaproksimasi fungsi kompleks menggunakan penjumlahan polinomial di sekitar titik tertentu. Ini menjadi basis hampir semua metode numerik: diferensiasi, integrasi, ODE, dan analisis error.",
      formula: "f(x) = Σ [f⁽ⁿ⁾(a)/n!] × (x−a)ⁿ",
      subtext: "Maclaurin Series = Taylor Series dengan a = 0. Semakin banyak suku, semakin akurat.",
      rated: null
    },
  ],
  numerical_diff: [
    {
      category: "Numerical Differentiation",
      question: "Sebutkan 3 rumus utama diferensiasi numerik beserta orde error-nya!",
      answer: "Forward Difference: [f(x+h)−f(x)]/h, error O(h). Backward Difference: [f(x)−f(x−h)]/h, error O(h). Central Difference: [f(x+h)−f(x−h)]/2h, error O(h²).",
      formula: "Central Difference paling akurat: O(h²)",
      subtext: "Central Difference menurunkan error kuadratik — jika h diperkecil 10×, error berkurang 100×.",
      rated: null
    },
  ],
  numerical_integration_guided: [
    {
      category: "Integrasi Numerik",
      question: "Apa perbedaan Trapezoid Rule dan Simpson's 1/3 Rule?",
      answer: "Trapezoid: aproksimasi kurva dengan garis lurus antar titik, bobot 1-2-2-...-2-1, error O(h²). Simpson's 1/3: aproksimasi kurva dengan parabola, bobot 1-4-2-4-...-4-1, error O(h⁴).",
      formula: "Trapezoid: h/2 × [f₀ + 2f₁ + ... + fₙ]; Simpson: h/3 × [f₀ + 4f₁ + 2f₂ + ... + fₙ]",
      subtext: "Simpson's Rule eksak untuk polinomial derajat ≤ 3, jauh lebih akurat dari Trapezoid.",
      rated: null
    },
  ],
  ode_euler: [
    {
      category: "ODE",
      question: "Jelaskan perbedaan Metode Euler dan Runge-Kutta (RK4) dalam penyelesaian ODE!",
      answer: "Euler: menggunakan kemiringan di 1 titik saja, orde 1, error kumulatif besar. RK4: menghitung rata-rata tertimbang dari 4 kemiringan (k₁, k₂, k₃, k₄), orde 4, jauh lebih akurat.",
      formula: "Euler: y_{n+1} = yₙ + h×f(xₙ,yₙ); RK4: y_{n+1} = yₙ + (k₁+2k₂+2k₃+k₄)/6",
      subtext: "RK4 adalah standar industri untuk ODE. Euler hanya dipakai untuk konsep dasar.",
      rated: null
    },
  ],
  regression_guided: [
    {
      category: "Regresi Linier",
      question: "Bagaimana cara menghitung koefisien garis regresi linier y = a + bx?",
      answer: "b = [nΣxy − ΣxΣy] / [nΣx² − (Σx)²], lalu a = ȳ − b×x̄. Metode ini disebut Least Squares karena meminimalkan jumlah kuadrat residual.",
      formula: "b = [nΣxy − ΣxΣy] / [nΣx² − (Σx)²]; a = ȳ − bx̄",
      subtext: "Verifikasi di Python: numpy.polyfit(x, y, 1) menghasilkan [b, a].",
      rated: null
    },
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

// ============================================================
// MIND MAPS — Scientific Computing
// ============================================================

export const mindMaps = {
  spl_eliminasi_gauss: {
    center: 'Scientific\nComputing',
    centerColor: '#3b82f6',
    branches: [
      {
        label: 'Eliminasi\nGauss',
        labelShort: 'Eliminasi Gauss',
        color: '#6366f1',
        icon: 'functions',
        session: 'SPL Part I',
        desc: 'Metode langsung untuk menyelesaikan SPL melalui Forward Elimination dan Back Substitution.',
        children: ['Matriks Augmentasi', 'Forward Elimination', 'Back Substitution', 'Faktor Pengali λ']
      },
      {
        label: 'Gauss-\nSeidel',
        labelShort: 'Gauss-Seidel',
        color: '#ec4899',
        icon: 'loop',
        session: 'SPL Part II',
        desc: 'Metode iteratif yang konvergen untuk matriks diagonal dominan, menggunakan nilai terbaru langsung.',
        children: ['Tebakan Awal', 'Iterasi', 'Diagonal Dominant', 'Error Threshold']
      },
      {
        label: 'LU\nDecomp',
        labelShort: 'LU Decomposition',
        color: '#10b981',
        icon: 'view_module',
        session: 'SPL Part I',
        desc: 'Dekomposisi matriks A menjadi L×U untuk efisiensi penyelesaian dengan banyak vektor Y.',
        children: ['Lower Triangle (L)', 'Upper Triangle (U)', 'Forward Sub', 'Back Sub']
      },
      {
        label: 'Taylor\nSeries',
        labelShort: 'Taylor Series',
        color: '#f59e0b',
        icon: 'timeline',
        session: 'Taylor Series',
        desc: 'Fondasi metode numerik — mengaproksimasi fungsi kompleks dengan polinomial.',
        children: ['Maclaurin', 'Truncation Error', 'Basis Num. Diff', 'Basis Num. Int']
      },
      {
        label: 'Num.\nDiff',
        labelShort: 'Numerical Differentiation',
        color: '#3b82f6',
        icon: 'show_chart',
        session: 'Num Diff',
        desc: 'Menghitung turunan numerik dari data atau fungsi menggunakan Forward/Backward/Central Difference.',
        children: ['Forward Diff', 'Backward Diff', 'Central Diff', 'Error Analysis']
      },
      {
        label: 'ODE',
        labelShort: 'ODE',
        color: '#ef4444',
        icon: 'trending_up',
        session: 'ODE',
        desc: 'Menyelesaikan persamaan diferensial biasa secara numerik dengan Euler dan Runge-Kutta.',
        children: ['Euler Method', 'RK4', 'Step Size h', 'Cumulative Error']
      }
    ]
  },
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

// ============================================================
// STUDY VIDEOS — Scientific Computing
// ============================================================

export const studyVideos = {
  spl_eliminasi_gauss: [
    {
      id: 'v1',
      title: 'Eliminasi Gauss: Forward Elimination & Back Substitution',
      channel: 'Numerical Methods Academy',
      duration: '14:30',
      views: '1.8M penonton',
      topic: 'Eliminasi Gauss',
      topicColor: '#6366f1',
      gradient: ['#4f46e5', '#7c3aed'],
      icon: 'functions',
      desc: 'Penjelasan lengkap langkah demi langkah metode Eliminasi Gauss untuk menyelesaikan Sistem Persamaan Linier.'
    },
    {
      id: 'v2',
      title: 'LU Decomposition: Why and How',
      channel: 'Linear Algebra Explained',
      duration: '11:20',
      views: '920K penonton',
      topic: 'LU Decomposition',
      topicColor: '#10b981',
      gradient: ['#059669', '#0d9488'],
      icon: 'view_module',
      desc: 'Tutorial dekomposisi matriks A menjadi L×U dan cara menggunakannya untuk menyelesaikan sistem dengan banyak vektor Y.'
    },
    {
      id: 'v3',
      title: 'Gauss-Seidel vs Jacobi: Iterative Methods Compared',
      channel: 'CompSci Fundamentals',
      duration: '9:45',
      views: '650K penonton',
      topic: 'Gauss-Seidel',
      topicColor: '#ec4899',
      gradient: ['#db2777', '#9d174d'],
      icon: 'loop',
      desc: 'Perbandingan mendalam antara metode iteratif Gauss-Seidel dan Jacobi, termasuk syarat konvergensi diagonal dominant.'
    },
    {
      id: 'v4',
      title: 'Taylor Series: The Foundation of Numerical Methods',
      channel: '3Blue1Brown',
      duration: '18:50',
      views: '4.2M penonton',
      topic: 'Taylor Series',
      topicColor: '#f59e0b',
      gradient: ['#d97706', '#ea580c'],
      icon: 'timeline',
      desc: 'Visualisasi intuitif Taylor Series — mengapa polinomial bisa mendekati fungsi apapun dan hubungannya dengan metode numerik.'
    },
    {
      id: 'v5',
      title: 'Numerical Differentiation: Forward, Backward, Central',
      channel: 'Engineering Math',
      duration: '12:15',
      views: '780K penonton',
      topic: 'Num. Differentiation',
      topicColor: '#3b82f6',
      gradient: ['#2563eb', '#0891b2'],
      icon: 'show_chart',
      desc: 'Tiga rumus diferensiasi numerik utama beserta analisis error dan implementasi Python.'
    },
    {
      id: 'v6',
      title: 'Euler Method & Runge-Kutta (RK4) for ODE',
      channel: 'Scientific Python',
      duration: '16:40',
      views: '1.1M penonton',
      topic: 'ODE',
      topicColor: '#ef4444',
      gradient: ['#dc2626', '#db2777'],
      icon: 'trending_up',
      desc: 'Implementasi dan perbandingan Metode Euler vs RK4 untuk menyelesaikan Ordinary Differential Equations secara numerik.'
    }
  ],
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

// ============================================================
// STUDY SLIDES — Scientific Computing
// ============================================================

export const studySlides = {
  spl_eliminasi_gauss: [
    {
      id: 's1',
      title: 'System of Linear Equations Part I',
      presenter: 'Dr. Ahmad Numerical',
      slidesCount: 38,
      views: '12.5K views',
      topic: 'SPL — Direct Methods',
      topicColor: '#6366f1',
      gradient: ['#4f46e5', '#7c3aed'],
      icon: 'functions',
      desc: 'Slide materi Eliminasi Gauss, Gauss-Jordan, dan LU Decomposition beserta contoh soal lengkap.'
    },
    {
      id: 's2',
      title: 'System of Linear Equations Part II',
      presenter: 'Dr. Ahmad Numerical',
      slidesCount: 28,
      views: '9.1K views',
      topic: 'SPL — Iterative Methods',
      topicColor: '#ec4899',
      gradient: ['#db2777', '#9d174d'],
      icon: 'loop',
      desc: 'Slide materi metode iteratif Jacobi dan Gauss-Seidel, termasuk syarat konvergensi dan Scaled Row Pivoting.'
    },
    {
      id: 's3',
      title: 'Taylor Series',
      presenter: 'Prof. Budi Aprox',
      slidesCount: 22,
      views: '15.3K views',
      topic: 'Taylor Series',
      topicColor: '#f59e0b',
      gradient: ['#d97706', '#ea580c'],
      icon: 'timeline',
      desc: 'Materi Taylor dan Maclaurin Series sebagai fondasi metode numerik, dilengkapi analisis truncation error.'
    },
    {
      id: 's4',
      title: 'Numerical Differentiation Part I & II',
      presenter: 'Dr. Siti Derivative',
      slidesCount: 35,
      views: '8.7K views',
      topic: 'Num. Differentiation',
      topicColor: '#3b82f6',
      gradient: ['#2563eb', '#0891b2'],
      icon: 'show_chart',
      desc: 'Forward, Backward, dan Central Difference beserta penurunan rumus dari Taylor Series.'
    },
    {
      id: 's5',
      title: 'Numerical Integration Part I & II',
      presenter: 'Dr. Siti Derivative',
      slidesCount: 30,
      views: '11.2K views',
      topic: 'Num. Integration',
      topicColor: '#10b981',
      gradient: ['#059669', '#0d9488'],
      icon: 'area_chart',
      desc: 'Trapezoid Rule, Simpson\'s 1/3 Rule, dan Simpson\'s 3/8 Rule dengan analisis error komprehensif.'
    },
    {
      id: 's6',
      title: 'Ordinary Differential Equations Part I & II',
      presenter: 'Prof. Rudi ODE',
      slidesCount: 42,
      views: '14.8K views',
      topic: 'ODE',
      topicColor: '#ef4444',
      gradient: ['#dc2626', '#db2777'],
      icon: 'trending_up',
      desc: 'Metode Euler, Heun, dan Runge-Kutta (RK4) untuk menyelesaikan ODE, dilengkapi implementasi Python.'
    }
  ],
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

// ============================================================
// INFOGRAPHICS — Scientific Computing
// ============================================================

export const infographics = {
  spl_eliminasi_gauss: [
    {
      id: 'ig1',
      title: 'Peta Metode Penyelesaian SPL',
      author: 'Numerical Methods Lab',
      views: '18K views',
      topic: 'SPL Overview',
      topicColor: '#6366f1',
      gradient: ['#4f46e5', '#7c3aed'],
      icon: 'account_tree',
      desc: 'Infografis perbandingan metode langsung (Gauss, Gauss-Jordan, LU) vs metode iteratif (Jacobi, Gauss-Seidel).'
    },
    {
      id: 'ig2',
      title: 'Rumus Diferensiasi Numerik',
      author: 'CompSci Visual',
      views: '12K views',
      topic: 'Num. Differentiation',
      topicColor: '#3b82f6',
      gradient: ['#2563eb', '#1d4ed8'],
      icon: 'functions',
      desc: 'Rangkuman visual Forward, Backward, dan Central Difference beserta orde error masing-masing.'
    },
    {
      id: 'ig3',
      title: 'Perbandingan Metode Integrasi Numerik',
      author: 'Math Visualized',
      views: '15K views',
      topic: 'Num. Integration',
      topicColor: '#10b981',
      gradient: ['#059669', '#047857'],
      icon: 'area_chart',
      desc: 'Infografis Trapezoid vs Simpson\'s Rule — visualisasi area di bawah kurva dan tingkat akurasi.'
    },
    {
      id: 'ig4',
      title: 'Euler vs Runge-Kutta: ODE Solvers',
      author: 'Scientific Computing Lab',
      views: '9K views',
      topic: 'ODE',
      topicColor: '#ef4444',
      gradient: ['#dc2626', '#991b1b'],
      icon: 'compare_arrows',
      desc: 'Perbandingan visual akurasi Euler Method vs RK4 untuk berbagai step size h.'
    }
  ],
  ppkn: [
    {
      id: 'ig1',
      title: 'The Design Thinking Process',
      size: '2.4 MB',
      type: 'PNG',
      topic: 'Design Thinking',
      topicColor: '#6366f1',
      gradient: ['#4f46e5', '#3730a3'],
      icon: 'lightbulb',
      desc: 'Visualisasi 5 tahap Design Thinking beserta aktivitas kunci di setiap fasenya.'
    },
    {
      id: 'ig2',
      title: 'Empathy Map Structure',
      size: '1.8 MB',
      type: 'JPG',
      topic: 'Customer Insights',
      topicColor: '#ec4899',
      gradient: ['#db2777', '#9d174d'],
      icon: 'people',
      desc: 'Diagram 6 kuadran Empathy Map untuk membedah profil pengguna secara mendalam.'
    },
    {
      id: 'ig3',
      title: 'Value Proposition Canvas',
      size: '3.1 MB',
      type: 'PDF',
      topic: 'Value Creation',
      topicColor: '#10b981',
      gradient: ['#059669', '#064e3b'],
      icon: 'diamond',
      desc: 'Kanvas VPC untuk mencocokkan profil pelanggan dengan value map produk.'
    },
    {
      id: 'ig4',
      title: 'Business Model Canvas (BMC)',
      size: '2.9 MB',
      type: 'PNG',
      topic: 'Business Model',
      topicColor: '#3b82f6',
      gradient: ['#2563eb', '#1e3a8a'],
      icon: 'account_balance',
      desc: 'Template 9 blok BMC yang wajib dipahami untuk merancang model bisnis inovatif.'
    }
  ]
};

// ============================================================
// TABLES — Scientific Computing
// ============================================================

export const tables = {
  spl_eliminasi_gauss: [
    {
      id: 'tb1',
      title: 'Perbandingan Metode Penyelesaian SPL',
      author: 'Numerical Methods Dept',
      views: '10K views',
      topic: 'SPL',
      topicColor: '#6366f1',
      icon: 'grid_on',
      desc: 'Tabel perbandingan metode langsung vs iteratif untuk menyelesaikan Sistem Persamaan Linier.',
      columns: ['Metode', 'Tipe', 'Kompleksitas', 'Keunggulan'],
      rows: [
        ['Eliminasi Gauss', 'Langsung', 'O(n³)', 'Sederhana, selalu berhasil'],
        ['Gauss-Jordan', 'Langsung', 'O(n³)', 'Solusi langsung tanpa Back Sub'],
        ['LU Decomposition', 'Langsung', 'O(n³)', 'Efisien untuk banyak vektor Y'],
        ['Jacobi', 'Iteratif', 'O(n²) per iter', 'Parallelizable'],
        ['Gauss-Seidel', 'Iteratif', 'O(n²) per iter', 'Konvergen lebih cepat']
      ]
    },
    {
      id: 'tb2',
      title: 'Rumus Diferensiasi Numerik',
      author: 'Numerical Analysis',
      views: '7K views',
      topic: 'Num. Differentiation',
      topicColor: '#3b82f6',
      icon: 'pivot_table_chart',
      desc: 'Tabel referensi cepat rumus Forward, Backward, dan Central Difference.',
      columns: ['Metode', 'Rumus', 'Orde Error'],
      rows: [
        ['Forward Difference', '[f(x+h) - f(x)] / h', 'O(h)'],
        ['Backward Difference', '[f(x) - f(x-h)] / h', 'O(h)'],
        ['Central Difference', '[f(x+h) - f(x-h)] / 2h', 'O(h²)'],
        ['Second Derivative', '[f(x+h) - 2f(x) + f(x-h)] / h²', 'O(h²)']
      ]
    }
  ],
  ppkn: [
    {
      id: 'tb1',
      title: 'Perbandingan Lo-Fi vs Hi-Fi Prototype',
      topic: 'Prototyping',
      topicColor: '#ef4444',
      icon: 'architecture',
      desc: 'Perbedaan karakteristik, kelebihan, kekurangan, dan waktu penggunaan masing-masing prototipe.',
      headers: ['Aspek', 'Low-Fidelity (Lo-Fi)', 'High-Fidelity (Hi-Fi)'],
      rows: [
        ['Bentuk', 'Sketsa kertas, Wireframe', 'Interactive Mockup, Kode App'],
        ['Biaya & Waktu', 'Sangat murah & cepat', 'Relatif mahal & butuh waktu lama'],
        ['Tujuan Utama', 'Validasi konsep & flow dasar', 'Testing UX & visual akhir'],
        ['Kapan Dipakai?', 'Tahap awal ideasi (Session 10)', 'Menjelang finalisasi produk']
      ]
    },
    {
      id: 'tb2',
      title: 'Customer Pains vs Gains',
      topic: 'Value Creation',
      topicColor: '#10b981',
      icon: 'diamond',
      desc: 'Matriks membedakan Pains dan Gains serta pasangan solusinya di VPC.',
      headers: ['Kategori', 'Definisi', 'Contoh (EdTech)', 'Solusi di VPC'],
      rows: [
        ['Customer Pains', 'Kesulitan/frustrasi user saat mencoba menyelesaikan Job', 'Pusing baca teks panjang, mata lelah', 'Pain Relievers (Text-to-Speech)'],
        ['Customer Gains', 'Ekspektasi positif/keuntungan yang diharapkan user', 'Ingin cepat paham materi sebelum ujian', 'Gain Creators (Summary & Mind Map)']
      ]
    }
  ]
};

// ============================================================
// PODCASTS — Scientific Computing
// ============================================================

export const podcasts = {
  spl_eliminasi_gauss: [
    {
      id: 'pc1',
      title: 'Deep Dive: Kenapa SPL Penting di Dunia Nyata?',
      host: 'Dr. Ahmad & Budi',
      duration: '18:30',
      topic: 'SPL',
      topicColor: '#6366f1',
      icon: 'podcasts',
      gradient: ['#4f46e5', '#5b21b6'],
      desc: 'Diskusi santai tentang aplikasi Sistem Persamaan Linier di engineering, ekonomi, dan machine learning.'
    },
    {
      id: 'pc2',
      title: 'Taylor Series: Fondasi yang Sering Dilupakan',
      host: 'Prof. Budi Aprox',
      duration: '22:15',
      topic: 'Taylor Series',
      topicColor: '#f59e0b',
      icon: 'podcasts',
      gradient: ['#d97706', '#92400e'],
      desc: 'Kenapa Taylor Series adalah "bahasa rahasia" di balik semua metode numerik modern.'
    },
    {
      id: 'pc3',
      title: 'Debat: Euler vs Runge-Kutta untuk ODE',
      host: 'Scientific Computing Talk',
      duration: '25:40',
      topic: 'ODE',
      topicColor: '#ef4444',
      icon: 'mic',
      gradient: ['#dc2626', '#991b1b'],
      desc: 'Kapan Euler cukup? Kapan harus pakai RK4? Diskusi trade-off akurasi vs kecepatan komputasi.'
    },
    {
      id: 'pc4',
      title: 'Integrasi Numerik: Simpson vs Trapezoid',
      host: 'Math Talk ID',
      duration: '15:50',
      topic: 'Num. Integration',
      topicColor: '#10b981',
      icon: 'headset',
      gradient: ['#059669', '#064e3b'],
      desc: 'Perbandingan praktis kedua metode integrasi dan kapan masing-masing paling cocok digunakan.'
    }
  ],
  ppkn: [
    {
      id: 'pc1',
      title: 'Ideasi Bisnis yang Berdampak (SDGs)',
      host: 'InnoTalks',
      duration: '45:20',
      topic: 'Design Thinking',
      topicColor: '#6366f1',
      icon: 'podcasts',
      gradient: ['#4f46e5', '#3730a3'],
      desc: 'Diskusi cara mengaitkan ide bisnis startup dengan pilar-pilar Sustainable Development Goals.'
    },
    {
      id: 'pc2',
      title: 'Seni Mewawancarai Pengguna (Customer Insights)',
      host: 'UX Research Indo',
      duration: '38:15',
      topic: 'Customer Insights',
      topicColor: '#ec4899',
      icon: 'headset',
      gradient: ['#db2777', '#9d174d'],
      desc: 'Tips dan trik menggali insight mendalam dari user tanpa membuat pertanyaan yang mengarahkan (leading questions).'
    },
    {
      id: 'pc3',
      title: 'Gagal di Pasar karena Salah Positioning',
      host: 'Business Breakdown',
      duration: '52:10',
      topic: 'Market Positioning',
      topicColor: '#f59e0b',
      icon: 'mic',
      gradient: ['#d97706', '#92400e'],
      desc: 'Studi kasus startup-startup yang bangkrut karena gagal menentukan posisi di Perceptual Map dan terjebak di Red Ocean.'
    }
  ]
};

// ============================================================
// AUDIOS — Scientific Computing
// ============================================================

export const audios = {
  spl_eliminasi_gauss: [
    {
      id: 'au1',
      title: 'Ringkasan Audio: Eliminasi Gauss & LU Decomposition',
      narrator: 'AI Voice (Ahmad)',
      duration: '06:30',
      topic: 'SPL Direct Methods',
      topicColor: '#6366f1',
      icon: 'volume_up',
      gradient: ['#4f46e5', '#7c3aed'],
      desc: 'Ringkasan audio 6 menit tentang langkah-langkah Eliminasi Gauss dan keunggulan LU Decomposition.'
    },
    {
      id: 'au2',
      title: 'Ringkasan Audio: Metode Iteratif SPL',
      narrator: 'AI Voice (Siti)',
      duration: '05:45',
      topic: 'SPL Iterative',
      topicColor: '#ec4899',
      icon: 'audio_file',
      gradient: ['#db2777', '#831843'],
      desc: 'Narasi ringkasan tentang Gauss-Seidel, Jacobi, syarat diagonal dominant, dan kriteria berhenti iterasi.'
    },
    {
      id: 'au3',
      title: 'Ringkasan Audio: Diferensiasi & Integrasi Numerik',
      narrator: 'AI Voice (Budi)',
      duration: '08:20',
      topic: 'Num. Methods',
      topicColor: '#3b82f6',
      icon: 'voicemail',
      gradient: ['#2563eb', '#1e3a8a'],
      desc: 'Rangkuman lengkap rumus-rumus diferensiasi dan integrasi numerik beserta orde error masing-masing.'
    }
  ],
  ppkn: [
    {
      id: 'au1',
      title: 'Audio Summary: Business Model Canvas',
      duration: '12:05',
      topic: 'Business Model',
      topicColor: '#3b82f6',
      icon: 'graphic_eq',
      gradient: ['#2563eb', '#1e3a8a'],
      desc: 'Ringkasan audio lengkap tentang 9 blok BMC yang wajib kamu dengarkan sebelum membuat tugas akhir.'
    },
    {
      id: 'au2',
      title: 'Audio Summary: The Magic Number 5 in Usability Testing',
      duration: '08:45',
      topic: 'Prototyping',
      topicColor: '#ef4444',
      icon: 'voicemail',
      gradient: ['#dc2626', '#991b1b'],
      desc: 'Penjelasan mengapa 5 user tester sudah cukup, dirangkum dalam format audio singkat yang mudah dicerna.'
    }
  ]
};

// ============================================================
// DYNAMIC MERGE FOR SCIENTIFIC COMPUTING
// ============================================================
// Merge all scientific computing sub-topics into a single 'scientific_computing' key
const scKeys = [
  'spl_eliminasi_gauss',
  'spl_gauss_seidel_guided',
  'spl_lu_decomposition',
  'taylor_series',
  'numerical_diff',
  'numerical_integration_guided',
  'ode_euler',
  'regression_guided',
  'scaled_row_pivoting'
];

quizzes.scientific_computing = scKeys.reduce((acc, key) => acc.concat(quizzes[key] || []), []);
flashcards.scientific_computing = scKeys.reduce((acc, key) => acc.concat(flashcards[key] || []), []);
studyVideos.scientific_computing = scKeys.reduce((acc, key) => acc.concat(studyVideos[key] || []), []);
studySlides.scientific_computing = scKeys.reduce((acc, key) => acc.concat(studySlides[key] || []), []);
infographics.scientific_computing = scKeys.reduce((acc, key) => acc.concat(infographics[key] || []), []);
tables.scientific_computing = scKeys.reduce((acc, key) => acc.concat(tables[key] || []), []);
podcasts.scientific_computing = scKeys.reduce((acc, key) => acc.concat(podcasts[key] || []), []);
audios.scientific_computing = scKeys.reduce((acc, key) => acc.concat(audios[key] || []), []);
if (mindMaps.spl_eliminasi_gauss) {
  mindMaps.scientific_computing = mindMaps.spl_eliminasi_gauss;
}

