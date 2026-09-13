import { DEKIRU_KANJI_DICT } from '../utils/dekiruFurigana';

export interface OptionDetail {
  optionId?: string | number;
  text: string;
  translation: string;
  isCorrect: boolean;
  reason?: string;
}

export interface RichExplanationData {
  questionTranslation: string;
  whyCorrect: string;
  whyIncorrect?: Array<{ optionId?: string | number; text: string; translation?: string; reason: string }>;
  grammarPointDetail?: string;
  tips?: string[];
  optionsBreakdown?: OptionDetail[];
}

// Particle reference meanings
export const PARTICLE_MEANINGS: Record<string, { role: string; meaning: string }> = {
  'は': { role: 'Partikel Topik', meaning: 'Menandai topik kalimat ("adapun / tentang...")' },
  'が': { role: 'Partikel Subjek', meaning: 'Menandai subjek spesifik atau keberadaan / sifat' },
  'を': { role: 'Partikel Objek', meaning: 'Menandai objek penderita langsung dari kata kerja transitif' },
  'に': { role: 'Partikel Waktu / Tujuan / Keberadaan', meaning: 'Menunjukkan waktu spesifik (jam/hari), tujuan, atau letak keberadaan' },
  'で': { role: 'Partikel Tempat / Sarana', meaning: 'Menunjukkan tempat aktivitas dilakukan atau alat/bahasa/sarana yang dipakai' },
  'へ': { role: 'Partikel Arah', meaning: 'Menunjukkan arah pergerakan menuju suatu tempat' },
  'と': { role: 'Partikel Dan / Bersama', meaning: 'Menghubungkan dua nomina secara setara ("dan") atau menandai rekan aktivitas ("bersama")' },
  'も': { role: 'Partikel Juga', meaning: 'Menyatakan "juga" / "pun" untuk predikat yang sama' },
  'の': { role: 'Partikel Kepemilikan', meaning: 'Menghubungkan dua nomina (N1 no N2: milik, asal, atau jenis)' },
  'から': { role: 'Partikel Titik Awal', meaning: 'Menunjukkan titik awal waktu/tempat ("dari / mulai dari")' },
  'まで': { role: 'Partikel Titik Akhir', meaning: 'Menunjukkan batas akhir waktu/tempat ("sampai")' },
  '×': { role: 'Tanpa Partikel', meaning: 'Tidak memerlukan partikel tambahan karena sudah langsung terhubung atau berulang' },
};

// Curated question-specific rich explanations for Dekiru exams
export const DEKIRU_RICH_REGISTRY: Record<string, RichExplanationData> = {
  // === EXAM 1 SECTION 2 (Word Bank) ===
  '1-3-s2-q1': {
    questionTranslation: 'Membaca koran. / (Saya) membaca koran.',
    whyCorrect: '新聞 (shimbun) berarti koran. Pasangan kata kerja yang paling lazim dan alami untuk koran adalah 読みます (yomimasu = membaca), sehingga polanya menjadi 新聞を読みます.',
    whyIncorrect: [
      { text: 'a. 食べます', translation: 'makan', reason: 'Koran adalah media bacaan, bukan makanan.' },
      { text: 'b. 聞きます', translation: 'mendengarkan', reason: 'Koran dibaca dengan mata, bukan didengar seperti radio atau musik.' },
      { text: 'c. 寝ます', translation: 'tidur', reason: 'Tidur adalah kata kerja intransitif, tidak mengambil objek を.' },
      { text: 'e. 来ます', translation: 'datang', reason: '来ます adalah kata kerja perpindahan, berpasangan dengan へ / に, bukan objek を.' },
      { text: 'f. 働きます', translation: 'bekerja', reason: ' bekerja berpasangan dengan tempat aktivitas (で), bukan objek koran.' },
      { text: 'g. 買います', translation: 'membeli', reason: 'Meski koran bisa dibeli, pada konteks aktivitas harian membaca koran (新聞を読む) adalah kolokasi paling baku di Bab 3.' },
    ],
    grammarPointDetail: 'Pola [Nomina (Objek) + を + Verba]: Menunjukkan tindakan yang dilakukan terhadap suatu objek langsung.',
    tips: ['Perhatikan objek sebelum partikel を (misal: 新聞 = koran). Cari kata kerja tindakan yang paling alami berpasangan dengan objek tersebut.'],
  },
  '1-3-s2-q2': {
    questionTranslation: 'Bekerja di perusahaan.',
    whyCorrect: '会社 (kaisha) adalah perusahaan, dan partikel で menandai tempat aktivitas kerja berlangsung. Kata kerja yang tepat adalah 働きます (hatarakimasu = bekerja).',
    whyIncorrect: [
      { text: 'a. 食べます', translation: 'makan', reason: 'Bisa saja makan di perusahaan, tetapi kata kerja inti di buku pelajaran Bab 3 untuk 会社 adalah 働きます.' },
      { text: 'b. 聞きます', translation: 'mendengarkan', reason: 'Tidak berpasangan khusus dengan perusahaan tanpa objek spesifik.' },
      { text: 'c. 寝ます', translation: 'tidur', reason: 'Tempat tidur biasanya di rumah (うち) atau kamar (へや), bukan perusahaan.' },
      { text: 'd. 読みます', translation: 'membaca', reason: 'Memerlukan objek bacaan seperti buku atau koran.' },
      { text: 'e. 来ます', translation: 'datang', reason: 'Datang ke perusahaan menggunakan partikel へ/に (会社へ来ます), bukan で.' },
      { text: 'g. 買います', translation: 'membeli', reason: 'Membeli memerlukan objek belanjaan dan biasanya di toko (店), bukan perusahaan.' },
    ],
    grammarPointDetail: 'Pola [Tempat + で + Verba Aktivitas]: Partikel で menunjukkan tempat terjadinya suatu aksi dinamis.',
    tips: ['Jika ada [Tempat + で], carilah kata kerja aktivitas umum di tempat tersebut: 会社で働きます (bekerja di kantor/perusahaan).'],
  },
  '1-3-s2-q3': {
    questionTranslation: 'Mendengarkan CD. / Mendengarkan musik di CD.',
    whyCorrect: 'CD (shīdī) adalah media rekaman audio/musik. Aktivitas yang dilakukan terhadap CD adalah 聞きます (kikimasu = mendengarkan).',
    whyIncorrect: [
      { text: 'a. 食べます', translation: 'makan', reason: 'CD bukan makanan.' },
      { text: 'c. 寝ます', translation: 'tidur', reason: 'Tidur tidak membutuhkan objek penderita を.' },
      { text: 'd. 読みます', translation: 'membaca', reason: 'CD didengar, bukan dibaca teksnya.' },
      { text: 'f. 働きます', translation: 'bekerja', reason: 'Tidak nyambung dengan objek CD.' },
      { text: 'g. 買います', translation: 'membeli', reason: 'Di bab pengenalan kata kerja dasar, pasangan baku CD adalah CDを聞きます (mendengarkan CD).' },
    ],
    grammarPointDetail: 'CDを聞きます = Mendengarkan CD/musik. CD berfungsi sebagai objek langsung dari kata kerja 聞きます.',
    tips: ['Pahami pasangan kata (kolokasi): CD → 聞きます, 新聞/本 → 読みます, ご飯/パン → 食べます.'],
  },
  '1-3-s2-q4': {
    questionTranslation: 'Makan roti.',
    whyCorrect: 'パン (pan) adalah roti (makanan). Kata kerja konsumsi makanan yang tepat adalah 食べます (tabemasu = makan).',
    whyIncorrect: [
      { text: 'b. 聞きます', translation: 'mendengarkan', reason: 'Roti tidak mengeluarkan suara untuk didengarkan.' },
      { text: 'c. 寝ます', translation: 'tidur', reason: 'Tidur tidak memerlukan objek を.' },
      { text: 'd. 読みます', translation: 'membaca', reason: 'Roti tidak memiliki tulisan cerita untuk dibaca.' },
      { text: 'e. 来ます', translation: 'datang', reason: 'Tidak nyambung dengan kata benda roti.' },
      { text: 'f. 働きます', translation: 'bekerja', reason: 'Tidak dapat berpasangan dengan objek roti.' },
    ],
    grammarPointDetail: 'Pola makanan: [Makanan + を + 食べます]. Contoh: ご飯を食べます (makan nasi), パンを食べます (makan roti).',
    tips: ['Ingat kata serapan パン (pan) dari bahasa Portugis pão yang berarti roti.'],
  },
  '1-3-s2-q5': {
    questionTranslation: 'Tidur pada jam 11 malam.',
    whyCorrect: '11時に (pada jam 11) menunjukkan waktu istirahat malam. Kata kerja yang tepat untuk jam istirahat malam adalah 寝ます (nemasu = tidur).',
    whyIncorrect: [
      { text: 'a. 食べます', translation: 'makan', reason: 'Meskipun bisa makan larut malam, kalimat baku dasar menyatakan waktu tidur (11時に寝ます).' },
      { text: 'b. 聞きます', translation: 'mendengarkan', reason: 'Memerlukan objek apa yang didengar.' },
      { text: 'd. 読みます', translation: 'membaca', reason: 'Memerlukan objek apa yang dibaca.' },
      { text: 'f. 働きます', translation: 'bekerja', reason: 'Secara umum jam 11 malam bukan jam mulai kerja biasa di percakapan bab awal.' },
    ],
    grammarPointDetail: 'Pola [Waktu Spesifik + に + 寝ます / 起きます]: に menandai titik waktu terjadinya aksi.',
    tips: ['Waktu jam malam + に biasanya diikuti 寝ます (tidur), sedangkan pagi hari diikuti 起きます (bangun).'],
  },
  '1-3-s2-q6': {
    questionTranslation: 'Membeli apel di supermarket.',
    whyCorrect: 'りんご (ringo) adalah buah apel, dan スーパーで menandai tempat berbelanja. Kata kerja yang tepat adalah 買います (kaimasu = membeli).',
    whyIncorrect: [
      { text: 'b. 聞きます', translation: 'mendengarkan', reason: 'Apel tidak dapat didengarkan.' },
      { text: 'c. 寝ます', translation: 'tidur', reason: 'Tidak cocok dengan objek apel di supermarket.' },
      { text: 'd. 読みます', translation: 'membaca', reason: 'Apel bukan bahan bacaan.' },
      { text: 'e. 来ます', translation: 'datang', reason: '来ます adalah verba arah, bukan transaksi belanja.' },
    ],
    grammarPointDetail: 'Pola [Tempat + で + Barang + を + 買います]: Membeli suatu barang di tempat tertentu.',
    tips: ['Supermarket (スーパー) adalah tempat berbelanja; jika objeknya barang dagangan (buah/barang), jawabannya 買います.'],
  },

  // === EXAM 1 SECTION 3 (Particle Fill) ===
  '1-3-s3-q1': {
    questionTranslation: 'Pergi ke perpustakaan dengan berjalan kaki, lalu melihat pameran foto di perpustakaan.',
    whyCorrect: '図書館へ行きます (arah tujuan: へ), 歩いて (alat/cara berjalan: partikel tidak perlu di depan 歩いて), 図書館で (tempat aktivitas melihat: で), 写真展を見ます (objek pameran foto: を).',
    whyIncorrect: [
      { text: 'に / を / で', reason: 'Untuk arah tujuan mobilitas perpindahan, へ atau に dipakai, namun で menandai tempat aktivitas di kalimat kedua.' },
    ],
    grammarPointDetail: 'Partikel arah: [Tempat + へ + 行きます]. Tempat aktivitas: [Tempat + で + V]. Objek langsung: [Objek + を + 見ます].',
    tips: ['Bedakan tempat tujuan perpindahan (へ/に) dengan tempat dilakukannya suatu kegiatan (で).'],
  },
  '1-3-s3-q2': {
    questionTranslation: 'Hobi saya adalah membaca dan memasak.',
    whyCorrect: 'Setelah kata 私 sudah langsung diikuti の (私の趣味 = hobi saya), sehingga di blank pertama tidak perlu partikel tambahan (×). Di antara 読書 (membaca) dan 料理 (memasak) digunakan と untuk menghubungkan dua nomina sejajar ("dan").',
    whyIncorrect: [
      { text: 'Blank (1) diisi partikel (misal: は, が, に)', reason: 'Salah karena sudah ada partikel の setelah kurung: 私 の趣味 sudah membentuk frase lengkap "hobi saya", sehingga kurung harus diisi ×.' },
      { text: 'Blank (2) diisi や / で / を', reason: 'や dipakai jika mendaftar sebagian dari banyak hal. Untuk mendaftar dua hobi secara definitif, gunakan と.' },
    ],
    grammarPointDetail: 'Pola [N1 の N2]: Menyatakan kepemilikan / kaitan (私の趣味). Pola [N1 と N2]: Menggabungkan dua nomina secara sejajar ("dan").',
    tips: ['Perhatikan karakter setelah tanda kurung! Jika setelah kurung sudah ada partikel (seperti の), maka kurung tersebut tidak memerlukan partikel tambahan (×).'],
  },
  '1-3-s3-q3': {
    questionTranslation: 'Setiap pagi bangun pada jam 8. Makan roti.',
    whyCorrect: '毎朝 (setiap pagi) adalah kata keterangan waktu berulang yang tidak memerlukan partikel に (×). 8時 (jam 8) adalah waktu spesifik sehingga wajib menggunakan に. パン (roti) adalah objek makan sehingga memakai を.',
    whyIncorrect: [
      { text: '毎朝に', reason: 'Kata waktu relatif/berulang seperti 毎朝, 毎日, 毎週, 今日, 明日 TIDAK memakai に.' },
      { text: '8時で / 8時を', reason: 'Titik waktu jam bangun selalu menggunakan partikel に.' },
    ],
    grammarPointDetail: 'Waktu berulang (毎朝, 毎日) → tanpa に (×). Waktu angka jam spesifik (8時) → wajib に. Objek penderita (パン) → を.',
    tips: ['Ingat aturan emas waktu bahasa Jepang: Yang ada angka/hari kalender pasti pakai に (8時に, 日曜日に), yang berulang/relatif tidak pakai に (毎朝×, 今日×).'],
  },
  '1-3-s3-q4': {
    questionTranslation: 'A: "Ringo" dalam bahasa Inggris apa ya?\nB: "Apple".',
    whyCorrect: '英語で (eigo de) berarti "dalam bahasa Inggris". Partikel で di sini berfungsi menunjukkan bahasa, media, atau alat yang digunakan untuk menyatakan sesuatu.',
    whyIncorrect: [
      { text: '英語に', reason: 'に biasanya digunakan untuk perubahan hasil terjemahan (英語に翻訳する), bukan bahasa perantara dalam tanya jawab kata.' },
      { text: '英語を', reason: '英語 bukan objek penderita dari kata kerja 何ですか.' },
      { text: '英語へ', reason: 'へ hanya digunakan untuk arah tujuan tempat.' },
    ],
    grammarPointDetail: 'Pola [Bahasa/Alat + で + 何ですか]: Digunakan saat menanyakan arti atau padanan kata dalam bahasa lain. Contoh: 日本語で何ですか (dalam bahasa Jepang apa?).',
    tips: ['Gunakan [Bahasa + で] untuk menyatakan bahasa pengantar: 日本語で話します (berbicara dalam bahasa Jepang), 英語で書きます (menulis dalam bahasa Inggris).'],
  },
  '1-3-s3-q5': {
    questionTranslation: 'Ann adalah mahasiswa. Pak juga mahasiswa.',
    whyCorrect: 'Kedua subjek memiliki predikat yang sama (学生です = mahasiswa). Untuk menyatakan "juga" atau "pun", partikel は digantikan oleh partikel も (Pak-san mo gakusei desu).',
    whyIncorrect: [
      { text: 'パクさんは', reason: 'Secara tata bahasa benar, namun konteks kalimat menuntut kaitan "juga" karena kalimat sebelumnya baru saja menyebutkan status Ann yang identik.' },
      { text: 'パクさんに', reason: 'に tidak bisa menjadi penanda subjek kalimat nominal です.' },
      { text: 'パクさんで', reason: 'で bukan partikel penanda subjek persona.' },
    ],
    grammarPointDetail: 'Pola [Subjek + も + Predikat sama]: Menggantikan partikel は/が saat memberikan informasi yang sama dengan kalimat sebelumnya ("juga").',
    tips: ['Jika kalimat pertama dan kedua memiliki predikat yang persis sama, kalimat kedua hampir selalu menggunakan partikel も (juga).'],
  },
  '1-3-s3-q6': {
    questionTranslation: 'Tolong beri saya kari 2 porsi dan tonkatsu 1 porsi.',
    whyCorrect: 'カレーを (kari sebagai barang pesanan), 2つと (dan 2 porsi kari dengan item berikutnya), とんかつを (tonkatsu sebagai barang pesanan), 1つ× (setelah jumlah sebelum ください tidak perlu partikel tambahan).',
    whyIncorrect: [
      { text: '1つの / 1つに ください', reason: 'Angka hitungan (kuantitas) langsung bertemu kata kerja atau ください tanpa partikel perantara.' },
    ],
    grammarPointDetail: 'Pola Pemesanan: [Benda + を + Jumlah + と + Benda + を + Jumlah + ください]. Jumlah kuantitatif (1つ, 2つ) langsung diikuti ください tanpa partikel.',
    tips: ['Kata bantu bilangan / jumlah langsung menempel di depan kata kerja atau ください: 1つください (tanpa partikel ×).'],
  },

  // === EXAM 1 SECTION 4 (Multiple Choice: Kosoado & Nouns) ===
  '1-3-s4-q1': {
    questionTranslation: 'Toilet ada di sebelah sini. / Toilet adalah di sini.',
    whyCorrect: 'ここ (koko) adalah kata penunjuk tempat ("di sini"). Karena yang ditanyakan atau ditunjukkan adalah lokasi ruangan (toilet), kata penunjuk yang tepat adalah ここ.',
    whyIncorrect: [
      { text: 'これ (kore)', translation: 'ini (benda)', reason: 'これ merujuk pada benda fisik yang dipegang/dekat, bukan lokasi tempat ruangan seperti toilet.' },
    ],
    grammarPointDetail: 'Perbedaan Kore vs Koko: これ merujuk pada benda konkret (buku, pena), sedangkan ここ merujuk pada area/lokasi tempat (kantor, toilet, stasiun).',
    tips: ['Jika subjeknya berupa nama ruangan atau fasilitas (toilet, kelas, kantin), gunakan penunjuk tempat (ここ / そこ / あそこ).'],
  },
  '1-3-s4-q2': {
    questionTranslation: 'Ini adalah kari ikan.',
    whyCorrect: 'これ (kore) dapat berdiri sendiri sebagai subjek sebelum partikel は (これは...). Sedangkan この (kono) harus langsung diikuti oleh kata benda (contoh: このカレー).',
    whyIncorrect: [
      { text: 'この (kono)', translation: '... ini (kata penunjuk sifat)', reason: 'この adalah kata sifat demonstratif (rentaishi) yang tidak bisa berdiri sendiri sebelum partikel は; wajib menempel langsung ke nomina (contoh: この人, この本).' },
    ],
    grammarPointDetail: 'Pola Demonstratif: [これ + は] berdiri sendiri. [この + Nomina + は] wajib diikuti kata benda.',
    tips: ['Cek kata setelah kurung! Jika langsung diikuti partikel は, pilih これ. Jika langsung diikuti kata benda, pilih この.'],
  },
  '1-3-s4-q3': {
    questionTranslation: 'Tas yang di sana itu harganya 2.800 yen.',
    whyCorrect: 'Setelah kurung terdapat kata benda かばん (tas). Kata penunjuk jarak jauh yang memodifikasi kata benda di depannya adalah あの (ano kaban = tas itu).',
    whyIncorrect: [
      { text: 'あれ (are)', translation: 'itu (benda)', reason: 'あれ adalah pronomina mandiri (あれは...). Tidak boleh disambung langsung dengan kata benda tanpa partikel の (bukan あれかばん).' },
    ],
    grammarPointDetail: 'Pola Demonstratif Jauh: [あの + Nomina] (tas itu, orang itu). [あれ] berdiri sendiri sebagai kata ganti benda jauh.',
    tips: ['Ada kata benda setelah kurung (かばん) → wajib pilih varian berakhiran -no (この/その/あの).'],
  },
  '1-3-s4-q4': {
    questionTranslation: 'Saya adalah karyawan dari ABE (perusahaan ABE).',
    whyCorrect: 'Ketika menyebutkan afiliasi perusahaan sendiri dengan menyebutkan nama perusahaannya (ABEの...), istilah yang baku digunakan adalah 社員 (shain). 会社員 (kaishain) digunakan secara umum untuk pekerjaan/profesi tanpa menyebut nama perusahaan.',
    whyIncorrect: [
      { text: '会社員 (kaishain)', translation: 'karyawan swasta/kantoran', reason: 'Digunakan saat menyatakan profesi secara umum (contoh: 私は会社員です). Tidak dipakai setelah nama perusahaan spesifik (tidak lazim: ABEの会社員).' },
    ],
    grammarPointDetail: 'Perbedaan 会社員 vs 社員: [Nama Perusahaan + の社員] (contoh: トヨタの社員). Sedangkan [Profesi: 会社員] (contoh: 父は会社員です).',
    tips: ['Jika ada [Nama Perusahaan + の], jawabannya adalah 社員! Jika tanpa nama perusahaan (pekerjaan umum), jawabannya 会社員.'],
  },
  '1-3-s4-q5': {
    questionTranslation: 'A: Negara asal Anda di mana?\nB: Indonesia.',
    whyCorrect: 'Saat menanyakan negara asal lawan bicara secara sopan, kata 国 (kuni) diberi awalan kehormatan お menjadi お国 (okuni). Menanyakan お国はどちらですか / お国は？ sangat sopan dan alami.',
    whyIncorrect: [
      { text: '国 (kuni)', translation: 'negara (tanpa awalan sopan)', reason: 'Kurang sopan jika menanyakan negara asal kepada lawan bicara tanpa awalan sopan お-.' },
    ],
    grammarPointDetail: 'Bentuk Sopan Bikago [お + Nomina]: Awalan お- digunakan untuk menghormati hal yang berkaitan dengan lawan bicara (お国 = negara Anda, お名前 = nama Anda).',
    tips: ['Pertanyaan tentang identitas lawan bicara menggunakan prefiks sopan お- (お名前, お国).'],
  },
  '1-3-s4-q6': {
    questionTranslation: 'A: Kantornya di mana?\nB: Di lantai 2.',
    whyCorrect: 'Jawaban B adalah "2階です" (di lantai 2), yang merupakan keterangan tempat/lokasi. Kata tanya yang tepat untuk lokasi adalah どこ (doko = di mana).',
    whyIncorrect: [
      { text: 'だれ (dare)', translation: 'siapa', reason: 'だれ digunakan untuk menanyakan orang, bukan lokasi lantai/ruangan kantor.' },
    ],
    grammarPointDetail: 'Pola Tanya Tempat: [Subjek + は + どこ / どちら + ですか]. Dijawab dengan lokasi atau nomor lantai ([Angka]階です).',
    tips: ['Lihat jawaban lawan bicara: jika jawabannya tempat/lantai (2階), kata tanyanya pasti どこ!'],
  },
  '1-3-s4-q7': {
    questionTranslation: 'A: Orang itu siapa?\nB: Saudara Lee.',
    whyCorrect: 'Jawaban B adalah "リーさんです" (nama orang). Kata tanya untuk menanyakan identitas seseorang adalah だれ (dare = siapa).',
    whyIncorrect: [
      { text: 'どこ (doko)', translation: 'di mana', reason: 'どこ menanyakan tempat, bukan orang.' },
    ],
    grammarPointDetail: 'Pola Tanya Orang: [あの方 / あの人 + は + だれ / どなた + ですか]. Dijawab dengan nama orang + さん.',
    tips: ['Jawaban berupa nama orang (リーさん) → kata tanya wajib だれ (atau bentuk sopan どなた).'],
  },
  '1-3-s4-q8': {
    questionTranslation: 'A: Besok apakah Anda pergi ke Kyoto?\nB: Tidak, saya tidak pergi.',
    whyCorrect: 'Respon B diawali dengan "いいえ" (tidak), sehingga kata kerjanya harus berbentuk negatif: 行きません (ikimasen = tidak pergi).',
    whyIncorrect: [
      { text: '行きます (ikimasu)', translation: 'pergi (positif)', reason: 'Kontradiktif dengan kata penolakan いいえ (tidak).' },
    ],
    grammarPointDetail: 'Pola Jawaban Negatif: [いいえ + Verba-ません]. Contoh: いいえ、行きません (Tidak, saya tidak pergi).',
    tips: ['Perhatikan kata awal respon: Jika "はい" → bentuk positif (V-ます), jika "いいえ" → bentuk negatif (V-ません).'],
  },
  '1-3-s4-q9': {
    questionTranslation: 'A: Hari Minggu Anda melakukan apa?\nB: Belajar bahasa Jepang.',
    whyCorrect: 'Jawaban B adalah "日本語を勉強します" (aktivitas/kegiatan belajar). Kata tanya yang tepat untuk menanyakan isi kegiatan sebelum をします adalah なん (nan = apa).',
    whyIncorrect: [
      { text: 'どこ (doko)', translation: 'di mana', reason: 'どこ berpasangan dengan tempat (で), bukan dengan partikel objek を (tidak ada frase doko o shimasu).' },
    ],
    grammarPointDetail: 'Pola Tanya Aktivitas: [何をしますか (nani/nan o shimasu ka)] = melakukan apa? Dijawab dengan [Objek + を + Verba].',
    tips: ['Frase 何をしますか (nani o shimasu ka) adalah pertanyaan standar untuk "melakukan apa?".'],
  },

  // === EXAM 1 SECTION 8 (Reading Comprehension True/False) ===
  '1-3-s8-q1': {
    questionTranslation: 'Pernyataan 1: Kim-san berasal dari Korea Selatan.',
    whyCorrect: 'Di teks wacana tertulis jelas: 「わたしはキムです。韓国から来ました。」(Saya Kim. Datang dari Korea). Pernyataan ini sesuai dengan teks sehingga bernilai ○ (Benar).',
    whyIncorrect: [
      { text: '× (Salah)', reason: 'Salah memilih × karena informasi di teks tepat sama dan terkonfirmasi secara literal.' },
    ],
    grammarPointDetail: 'Pola Asal: [Negara + から来ました] = Datang/berasal dari negara tersebut.',
    tips: ['Cek kalimat pertama dan kedua wacana perkenalan diri untuk menemukan negara asal.'],
  },
  '1-3-s8-q2': {
    questionTranslation: 'Pernyataan 2: Kim-san bekerja di Rumah Sakit Sakura.',
    whyCorrect: 'Di teks tertulis: 「さくら病院の医者です。」(Adalah dokter di Rumah Sakit Sakura). Jadi Kim-san memang bekerja di sana, sehingga bernilai ○ (Benar).',
    whyIncorrect: [
      { text: '× (Salah)', reason: 'Salah memilih × karena profesi dan tempat kerja dokter di Sakura Byouin terbukti di teks.' },
    ],
    grammarPointDetail: 'Pola Afiliasi: [Nama Tempat + の + Profesi] (contoh: さくら病院の医者 = dokter di RS Sakura).',
    tips: ['Cocokkan nama institusi (さくら病院) dan status pekerjaan (医者).'],
  },
  '1-3-s8-q3': {
    questionTranslation: 'Pernyataan 3: Hari Minggu Kim-san belajar di rumah.',
    whyCorrect: 'Di teks tertulis bahwa hari Minggu Kim-san pergi bermain atau istirahat, bukan belajar: 「日曜日は休みです。友達と映画を見ます。」Pernyataan bahwa ia belajar di rumah bertentangan dengan teks sehingga bernilai × (Salah).',
    whyIncorrect: [
      { text: '○ (Benar)', reason: 'Salah memilih ○ karena hari Minggu ia libur dan menonton film bersama teman, bukan belajar.' },
    ],
    grammarPointDetail: 'Pola Keseharian vs Hari Libur: Perhatikan perbedaan aktivitas pada hari kerja (平日) dan hari libur (日曜日).',
    tips: ['Satu detail aktivitas berbeda dari teks (tonton film vs belajar) membuat pernyataan bernilai ×!'],
  },
  '1-3-s8-q4': {
    questionTranslation: 'Pernyataan 4: Setiap hari Kim-san pulang ke rumah pada jam 5 sore.',
    whyCorrect: 'Di teks tertulis bahwa jam kerjanya selesai jam 5 sore, tetapi ia sering bekerja lembur atau pulang jam 7: 「毎日7時ごろ家に帰ります。」Jadi pernyataan pulang jam 5 sore adalah × (Salah).',
    whyIncorrect: [
      { text: '○ (Benar)', reason: 'Salah memilih ○ karena jam kepulangan sebenarnya adalah jam 7 (7時ごろ), bukan jam 5.' },
    ],
    grammarPointDetail: 'Pola Waktu Kepulangan: [Jam + ごろ + 家に帰ります] = Pulang ke rumah sekitar jam sekian.',
    tips: ['Bedakan jam selesai tugas/kantor dengan jam benar-benar tiba atau pulang ke rumah.'],
  },
};

/**
 * Universal helper that fetches or generates rich explanation data for ANY question across all exams.
 */
export function getRichExplanation(
  _examId: string,
  questionId: string,
  item: any,
  section?: any
): RichExplanationData {
  // 1. Check if we have an explicit curated entry
  if (DEKIRU_RICH_REGISTRY[questionId]) {
    return DEKIRU_RICH_REGISTRY[questionId];
  }

  // 2. Build dynamic rich explanation from existing item metadata and dictionaries
  let qTranslation = '';
  let whyCorrect = item.explanationId || 'Jawaban ini sesuai dengan konteks percakapan dan tata bahasa bahasa Jepang standar.';
  const whyIncorrect: Array<{ optionId?: string | number; text: string; translation?: string; reason: string }> = [];
  const optionsBreakdown: OptionDetail[] = [];
  const tips: string[] = item.solvingSteps ? [...item.solvingSteps] : [];

  // Determine question translation
  if (item.question && item.question.text) {
    qTranslation = inferSentenceTranslation(item.question.text, item);
  } else if (item.statement && item.statement.text) {
    qTranslation = inferSentenceTranslation(item.statement.text, item);
  } else if (item.dialogue && Array.isArray(item.dialogue)) {
    qTranslation = item.dialogue.map((d: any) => `${d.speaker}: "${inferSentenceTranslation(d.content.text || '', item)}"`).join(' \n');
  }

  // Build options breakdown for Multiple Choice questions
  if (item.choices) {
    if (Array.isArray(item.choices)) {
      const correctText = typeof item.answer === 'string' ? item.answer : item.answer?.text || '';
      item.choices.forEach((rawCh: any, idx: number) => {
        const chText = typeof rawCh === 'string' ? rawCh : rawCh.text;
        const isCorr = chText === correctText;
        const meaning = inferWordMeaning(chText);

        optionsBreakdown.push({
          optionId: idx + 1,
          text: chText,
          translation: meaning,
          isCorrect: isCorr,
          reason: isCorr
            ? `Pilihan yang tepat secara makna dan tata bahasa (${whyCorrect}).`
            : `Kurang tepat digunakan pada kalimat ini karena ${chText} memiliki arti "${meaning}".`,
        });

        if (!isCorr) {
          whyIncorrect.push({
            optionId: idx + 1,
            text: chText,
            translation: meaning,
            reason: `Bermakna "${meaning}", tidak sesuai dengan konteks kalimat atau kaidah tata bahasa yang dibutuhkan.`,
          });
        }
      });
    }
  }

  // If word bank section
  if (section && section.type === 'word-bank' && section.wordBank) {
    const correctVal = item.answer?.value;
    section.wordBank.forEach((wb: any) => {
      const isCorr = wb.id === correctVal;
      const text = wb.content?.text || wb.id;
      const trans = wb.meaningId || inferWordMeaning(text);

      if (!isCorr && whyIncorrect.length < 5) {
        whyIncorrect.push({
          optionId: wb.id,
          text: `${wb.id}. ${text}`,
          translation: trans,
          reason: `Berarti "${trans}", tidak cocok dipasangkan dengan kata atau situasi pada soal ini.`,
        });
      }
    });
  }

  // If reading true false
  if (section && section.type === 'reading-true-false') {
    const isAnsTrue = item.answer === '○';
    if (isAnsTrue) {
      whyIncorrect.push({
        text: '× (Salah)',
        reason: 'Pernyataan ini terbukti benar dan selaras secara langsung dengan fakta di teks bacaan.',
      });
    } else {
      whyIncorrect.push({
        text: '○ (Benar)',
        reason: 'Pernyataan ini tidak sesuai atau bertentangan dengan rincian yang ada di teks bacaan.',
      });
    }
  }

  // If particle fill
  if (section && section.type === 'particle-fill' && Array.isArray(item.answer)) {
    const particles = item.answer as string[];
    particles.forEach((p, bIdx) => {
      const pInfo = PARTICLE_MEANINGS[p];
      if (pInfo) {
        tips.push(`Blank (${bIdx + 1}) memerlukan partikel ${p} (${pInfo.role}) yang bermakna: ${pInfo.meaning}.`);
      }
    });
  }

  const grammarPoint = item.grammarPoint || item.vocabularyPoint || (section ? `Pola Bagian ${section.section}: ${section.title}` : 'Pola Tata Bahasa Dasar');

  return {
    questionTranslation: qTranslation || 'Terjemahan kalimat latihan Dekiru Nihongo.',
    whyCorrect,
    whyIncorrect: whyIncorrect.length > 0 ? whyIncorrect : undefined,
    grammarPointDetail: grammarPoint,
    tips: tips.length > 0 ? tips : ['Perhatikan kata kerja, partikel, serta kata benda penanda waktu/tempat di dalam kalimat untuk menentukan jawaban yang tepat.'],
    optionsBreakdown: optionsBreakdown.length > 0 ? optionsBreakdown : undefined,
  };
}

/**
 * Intelligent helper to provide automatic contextual translation for sentence patterns
 */
function inferSentenceTranslation(jpText: string, item: any): string {
  if (!jpText) return '';

  // Common Dekiru sentence patterns
  if (jpText.includes('新聞を')) return 'Membaca koran. / (Saya) membaca koran.';
  if (jpText.includes('会社で')) return 'Bekerja di kantor/perusahaan.';
  if (jpText.includes('CDを')) return 'Mendengarkan CD / musik.';
  if (jpText.includes('パンを')) return 'Makan roti.';
  if (jpText.includes('11時に')) return 'Tidur pada jam 11 malam.';
  if (jpText.includes('スーパーで')) return 'Membeli apel di supermarket.';
  if (jpText.includes('図書館へ')) return 'Pergi ke perpustakaan dengan berjalan kaki, lalu melihat pameran foto di perpustakaan.';
  if (jpText.includes('趣味は読書')) return 'Hobi saya adalah membaca dan memasak.';
  if (jpText.includes('毎朝') && jpText.includes('8時')) return 'Setiap pagi bangun pada jam 8. Makan roti.';
  if (jpText.includes('英語') && jpText.includes('apple')) return 'A: "Ringo" dalam bahasa Inggris apa ya?\nB: "Apple".';
  if (jpText.includes('アンさんは学生') && jpText.includes('パクさん')) return 'Ann adalah mahasiswa. Pak juga mahasiswa.';
  if (jpText.includes('カレー') && jpText.includes('とんかつ')) return 'Tolong beri saya kari 2 porsi dan tonkatsu 1 porsi.';
  if (jpText.includes('トイレは')) return 'Toilet ada di sebelah sini.';
  if (jpText.includes('魚のカレー')) return 'Ini adalah kari ikan.';
  if (jpText.includes('かばんは、2,800円')) return 'Tas yang di sebelah sana itu seharga 2.800 yen.';
  if (jpText.includes('ABEの')) return 'Saya adalah karyawan perusahaan ABE.';
  if (jpText.includes('お国') || jpText.includes('国は')) return 'A: Negara asal Anda di mana?\nB: Indonesia.';
  if (jpText.includes('2階です')) return 'A: Kantornya di sebelah mana?\nB: Di lantai 2.';
  if (jpText.includes('リーさんです')) return 'A: Orang itu siapa?\nB: Saudara Lee.';
  if (jpText.includes('京都へ行きますか')) return 'A: Besok apakah Anda pergi ke Kyoto?\nB: Tidak, saya tidak pergi.';
  if (jpText.includes('日曜日何をしますか')) return 'A: Hari Minggu Anda melakukan apa?\nB: Belajar bahasa Jepang.';

  // If completed sentence is available
  if (item.completed && item.completed.text) {
    return `Kalimat lengkap: "${item.completed.text}".`;
  }

  // Clean brackets and return readable placeholder
  return `Artikan kalimat: "${jpText.replace(/（\s*）/g, '___')}".`;
}

/**
 * Intelligent helper to infer meaning of individual choices / words
 */
function inferWordMeaning(word: string): string {
  if (!word) return '';
  const trimmed = word.trim();

  const WORD_MEANING_DICT: Record<string, string> = {
    'これ': 'ini (kata ganti benda dekat pembicara)',
    'ここ': 'di sini (menunjukkan lokasi tempat dekat)',
    'この': '... ini (wajib diikuti kata benda, misal: tas ini)',
    'その': '... itu (wajib diikuti kata benda dekat lawan bicara)',
    'あの': '... itu (wajib diikuti kata benda jauh dari kedua pihak)',
    'あれ': 'itu (kata ganti benda jauh dari pembicara dan lawan bicara)',
    '会社員': 'karyawan kantor / pegawai swasta (sebutan profesi umum)',
    '社員': 'karyawan perusahaan tertentu (contoh: ABE no shain)',
    '銀行員': 'pegawai bank',
    '医者': 'dokter',
    '国': 'negara (bentuk biasa)',
    'お国': 'negara Anda (bentuk sopan dengan awalan お)',
    'どこ': 'di mana (menanyakan lokasi/tempat)',
    'だれ': 'siapa (menanyakan orang)',
    'なん': 'apa (menanyakan benda/hal)',
    '行きます': 'pergi (positif)',
    '行きません': 'tidak pergi (negatif)',
    '食べます': 'makan',
    '飲みます': 'minum',
    '読みます': 'membaca',
    '聞きます': 'mendengarkan',
    '寝ます': 'tidur',
    '起きます': 'bangun',
    '働きます': 'bekerja',
    '買います': 'membeli',
    '来ます': 'datang',
    '○': 'Benar (sesuai teks)',
    '×': 'Salah (bertentangan / tanpa partikel)',
  };

  if (WORD_MEANING_DICT[trimmed]) {
    return WORD_MEANING_DICT[trimmed];
  }

  // Check kanji dictionary
  if (DEKIRU_KANJI_DICT[trimmed]) {
    return `bacaan: ${DEKIRU_KANJI_DICT[trimmed]}`;
  }

  return trimmed;
}
