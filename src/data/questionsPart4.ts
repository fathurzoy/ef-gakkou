import { Question } from '../types/quiz';

export const questionsPart4: Question[] = [
  // --- IV. 記述問題 A (Melengkapi Kalimat Bagian A dan B) ---
  {
    id: 53,
    sectionId: 'IV',
    sectionTitle: 'IV. 記述問題 (Soal Menulis & Menyusun Kalimat)',
    subSectionTitle: '記述 A: Lengkapi bagian (A) dan (B) agar menjadi kalimat yang padu',
    type: 'choice',
    prompt: 'Pilihlah pasangan kata yang tepat untuk mengisi (A) dan (B) sesuai contoh soal resmi.',
    questionText: 'かばんの _____(A)_____ に _____(B)_____ があります。',
    questionTranslation: 'Di (...) tas ada (...).',
    options: [
      { id: 1, text: '(A) 中  (B) さいふ', translation: '(A) Dalam  (B) Dompet', isCorrect: true },
      { id: 2, text: '(A) 前  (B) えんぴつ', translation: '(A) Depan  (B) Pensil', isCorrect: false },
      { id: 3, text: '(A) うえ  (B) くるま', translation: '(A) Atas  (B) Mobil', isCorrect: false },
      { id: 4, text: '(A) となり  (B) いぬ', translation: '(A) Sebelah  (B) Anjing', isCorrect: false },
    ],
    correctAnswer: 1,
    correctAnswerDisplay: '(A) 中  (B) さいふ （かばんの中にさいふがあります）',
    explanation: {
      whyCorrect: 'Sesuai lembar kunci jawaban resmi ujian, pasangan kata bakunya adalah (A) 中 (なか = dalam) dan (B) さいふ (dompet). Kalimat utuh: 「かばんの中にさいふがあります」 (Di dalam tas ada dompet).',
      whyIncorrect: [
        { optionId: 2, text: '(A) 前  (B) えんぴつ', reason: 'Kurang lazim menyatakan sesuatu berada "di depan tas" dengan partikel ni ga arimasu.' },
        { optionId: 3, text: '(A) うえ  (B) くるま', reason: 'Secara logika "mobil ada di atas tas" tidak masuk akal.' },
        { optionId: 4, text: '(A) となり  (B) いぬ', reason: 'Makhluk hidup (anjing) menggunakan います, bukan あります.' },
      ],
      grammarPoint: '[Benda 1] の [Posisi: 中/上/下] に [Benda Mati] があります = Menunjukkan keberadaan benda mati di suatu lokasi.',
    },
  },
  {
    id: 54,
    sectionId: 'IV',
    sectionTitle: 'IV. 記述問題 (Soal Menulis & Menyusun Kalimat)',
    subSectionTitle: '記述 A: Lengkapi bagian (A) dan (B) agar menjadi kalimat yang padu',
    type: 'choice',
    prompt: 'Pilihlah pasangan kata yang tepat untuk mengisi (A) dan (B) sesuai ajakan.',
    questionText: '{来週|らいしゅう}いっしょに _____(A)_____ を _____(B)_____ いきませんか。',
    questionTranslation: 'Minggu depan maukah pergi bersama-sama untuk (...) (...) ?',
    options: [
      { id: 1, text: '(A) 映画  (B) 見に', translation: '(A) Film  (B) Menonton', isCorrect: true },
      { id: 2, text: '(A) 本  (B) 読みに', translation: '(A) Buku  (B) Membaca', isCorrect: false },
      { id: 3, text: '(A) ごはん  (B) 食べで', translation: '(A) Nasi  (B) Bentuk salah', isCorrect: false },
      { id: 4, text: '(A) 宿題  (B) して', translation: '(A) PR  (B) Bentuk -te', isCorrect: false },
    ],
    correctAnswer: 1,
    correctAnswerDisplay: '(A) 映画  (B) 見に （来週いっしょに映画を見にいきませんか）',
    explanation: {
      whyCorrect: 'Sesuai kunci jawaban resmi ujian: (A) 映画 (えいが = film), (B) 見に (みに = untuk menonton). Kalimat utuh: 「来週いっしょに映画を見にいきませんか」 (Maukah minggu depan kita pergi nonton bioskop/film bersama?). Pola tujuan gerak: V-masu (tanpa masu) + に + 行く.',
      whyIncorrect: [
        { optionId: 2, text: '(A) 本  (B) 読みに', reason: 'Meskipun gramatikal, kunci jawaban resmi menetapkan 映画 dan 見に sebagai jawaban utama teks.' },
        { optionId: 3, text: '(A) ごはん  (B) 食べで', reason: 'Bentuk 食べで salah secara tata bahasa (harus 食べに).' },
        { optionId: 4, text: '(A) 宿題  (B) して', reason: 'Bentuk te (して) tidak menunjukkan tujuan gerak bersama いきませんか.' },
      ],
      grammarPoint: 'V-stem + に行きます = Pergi untuk melakukan suatu aktivitas (tujuan kepergian). 〜ませんか = Mengajak lawan bicara dengan sopan.',
    },
  },
  {
    id: 55,
    sectionId: 'IV',
    sectionTitle: 'IV. 記述問題 (Soal Menulis & Menyusun Kalimat)',
    subSectionTitle: '記述 A: Lengkapi bagian (A) dan (B) agar menjadi kalimat yang padu',
    type: 'choice',
    prompt: 'Pilihlah pasangan kata yang tepat untuk mengisi (A) dan (B).',
    questionText: 'きのうの _____(A)_____ から、雨が _____(B)_____ はじめました。',
    questionTranslation: 'Sejak (...) kemarin, hujan mulai (...).',
    options: [
      { id: 1, text: '(A) 夜  (B) 降り', translation: '(A) Malam  (B) Turun (hujan)', isCorrect: true },
      { id: 2, text: '(A) 朝  (B) 降る', translation: '(A) Pagi  (B) Bentuk kamus', isCorrect: false },
      { id: 3, text: '(A) 昼  (B) 降って', translation: '(A) Siang  (B) Bentuk -te', isCorrect: false },
      { id: 4, text: '(A) 晩  (B) やみ', translation: '(A) Malam  (B) Reda (bertentangan dengan はじめました)', isCorrect: false },
    ],
    correctAnswer: 1,
    correctAnswerDisplay: '(A) 夜  (B) 降り （きのうの夜から、雨が降りはじめました）',
    explanation: {
      whyCorrect: 'Sesuai kunci jawaban resmi ujian: (A) 夜 (よる = malam), (B) 降り (ふり = turun hujan). Kalimat: 「きのうの夜から、雨が降りはじめました」 (Sejak kemarin malam, hujan mulai turun). Pola V-masu (tanpa masu) + はじめる berarti mulai melakukan/terjadi.',
      whyIncorrect: [
        { optionId: 2, text: '(A) 朝  (B) 降る', reason: 'Sebelum はじめる harus menggunakan kata kerja stem (stem masu: 降り), bukan bentuk kamus 降る.' },
        { optionId: 3, text: '(A) 昼  (B) 降って', reason: 'Bentuk te (降って) tidak dapat digabung dengan はじめる.' },
        { optionId: 4, text: '(A) 晩  (B) やみ', reason: 'やみはじめました berarti mulai reda, kurang lazim dibanding hujan mulai turun (降りはじめました).' },
      ],
      grammarPoint: 'V-masu (tanpa masu) + 始める (hajimeru) = Menyatakan permulaan suatu aksi atau fenomena (contoh: 降り始める = mulai turun hujan).',
    },
  },

  // --- IV. 記述問題 B (Menyusun Kalimat dari 3 Kata Kunci Berurutan) ---
  {
    id: 56,
    sectionId: 'IV',
    sectionTitle: 'IV. 記述問題 (Soal Menulis & Menyusun Kalimat)',
    subSectionTitle: '記述 B: Susunlah kalimat tanggapan menggunakan 3 kata kunci berurutan',
    type: 'choice',
    prompt: 'Susunlah respon B menggunakan 3 kata: 【1. この → 2. より → 3. 思う】 tanpa mengubah urutannya.',
    questionText: `A: この服とあの服とどちらがいいですか。
B: 【1. この → 2. より → 3. 思う】`,
    questionTranslation: `A: Antara pakaian yang ini dan pakaian yang itu, mana yang lebih bagus?
B: [1. この → 2. より → 3. 思う]`,
    sentenceContext: {
      speakerA: 'この服とあの服とどちらがいいですか。',
      speakerATranslation: 'Antara pakaian yang ini dan pakaian yang itu, mana yang lebih bagus?',
      items: ['1. この', '2. より', '3. 思う'],
    },
    options: [
      { id: 1, text: 'この服よりあの服のほうがいいと思います。', translation: 'Saya rasa pakaian yang itu lebih bagus daripada pakaian yang ini.', isCorrect: true },
      { id: 2, text: 'この服がいいと思いますよりあの服です。', translation: 'Urutan kata salah', isCorrect: false },
      { id: 3, text: 'あの服はこの服よりいいと思いました。', translation: 'Kata "この" tidak berada di urutan awal', isCorrect: false },
      { id: 4, text: 'この服よりあの服が好きと思います。', translation: 'Tidak menggunakan pola ほうがいい', isCorrect: false },
    ],
    correctAnswer: 1,
    correctAnswerDisplay: 'この服よりあの服のほうがいいと思います。',
    explanation: {
      whyCorrect: 'Sesuai kunci jawaban resmi ujian: 「この服よりあの服のほうがいいと思います。」 (Saya rasa pakaian yang itu lebih bagus daripada yang ini). Pola perbandingan: [A] より [B] のほうが [Kata Sifat] です + と思います (menurut saya/saya rasa). Tiga kata kunci (この, より, 思う) muncul berurutan.',
      whyIncorrect: [
        { optionId: 2, text: 'この服がいいと思いますより...', reason: 'Struktur gramatikal kacau dan tidak alami.' },
        { optionId: 3, text: 'あの服はこの服より...', reason: 'Kata "この" harus berada di posisi pertama urutan kata kunci.' },
        { optionId: 4, text: 'この服よりあの服が好きと思います。', reason: 'Pertanyaan A menanyakan どちらがいいですか, sehingga jawaban alami adalah 〜のほうがいい.' },
      ],
      grammarPoint: '[A] より [B] のほうがいい = B lebih baik daripada A. 〜と思います = Menurut pemikiran saya.',
    },
  },
  {
    id: 57,
    sectionId: 'IV',
    sectionTitle: 'IV. 記述問題 (Soal Menulis & Menyusun Kalimat)',
    subSectionTitle: '記述 B: Susunlah kalimat tanggapan menggunakan 3 kata kunci berurutan',
    type: 'choice',
    prompt: 'Susunlah respon B menggunakan 3 kata: 【1. ここから → 2. あるく → 3. 五分】 tanpa mengubah urutan.',
    questionText: `A: すみません。駅はここから遠いですか。
B: いいえ、【1. ここから → 2. あるく → 3. 五分】。
A: そうですか。ちかいですね。ありがとうございます。`,
    questionTranslation: `A: Permisi. Apakah stasiun jauh dari sini?
B: Tidak, [1. Dari sini → 2. Berjalan kaki → 3. 5 menit].
A: Begitu ya. Dekat ya. Terima kasih banyak.`,
    sentenceContext: {
      speakerA: 'すみません。駅はここから遠いですか。',
      speakerATranslation: 'Permisi. Apakah stasiun jauh dari sini?',
      items: ['1. ここから', '2. あるく', '3. 五分'],
      followUpA: 'そうですか。ちかいですね。ありがとうございます。',
      followUpATranslation: 'Begitu ya. Dekat ya. Terima kasih banyak.',
    },
    options: [
      { id: 1, text: 'ここからあるいて五分くらいですよ。', translation: 'Dari sini dengan jalan kaki kira-kira 5 menit kok.', isCorrect: true },
      { id: 2, text: 'ここから五分であるきますよ。', translation: 'Urutan kata terbalik', isCorrect: false },
      { id: 3, text: 'あるくのはここから五分です。', translation: 'Kata "あるく" mendahului "ここから"', isCorrect: false },
      { id: 4, text: 'ここからあるくと五分になります。', translation: 'Bukan ekspresi lazim waktu tempuh', isCorrect: false },
    ],
    correctAnswer: 1,
    correctAnswerDisplay: 'ここからあるいて五分くらいですよ。',
    explanation: {
      whyCorrect: 'Sesuai kunci jawaban resmi ujian: 「ここからあるいて五分くらいですよ。」 (Dari sini jalan kaki kira-kira 5 menit kok). Kata kerja 歩く (あるく) diubah menjadi bentuk te 「歩いて」 untuk menyatakan sarana transportasi (dengan jalan kaki). Urutan kata kunci (1. ここから → 2. あるく/歩いて → 3. 五分) tepat.',
      whyIncorrect: [
        { optionId: 2, text: 'ここから五分であるきますよ。', reason: 'Urutan 2 dan 3 tertukar, dan arti kalimat menjadi rancu.' },
        { optionId: 3, text: 'あるくのはここから五分です。', reason: 'Urutan kata kunci pertama (ここから) tidak berada di depan.' },
        { optionId: 4, text: 'ここからあるくと五分になります。', reason: 'Kurang lazim untuk menerangkan estimasi jalan kaki santai kepada orang yang bertanya arah.' },
      ],
      grammarPoint: '歩いて [Durasi Waktu] (くらい) です = Memakan waktu tempuh sekian dengan berjalan kaki.',
    },
  },
  {
    id: 58,
    sectionId: 'IV',
    sectionTitle: 'IV. 記述問題 (Soal Menulis & Menyusun Kalimat)',
    subSectionTitle: '記述 B: Susunlah kalimat tanggapan menggunakan 3 kata kunci berurutan',
    type: 'choice',
    prompt: 'Susunlah respon B menggunakan 3 kata: 【1. 田中さんも → 2. 北海道 → 3. たがる】 tanpa mengubah urutan.',
    questionText: `A: 来週から北海道に行きます。
B: いいですね。【1. 田中さんも → 2. 北海道 → 3. たがる】。
A: そうですか。それは知りませんでした。`,
    questionTranslation: `A: Mulai minggu depan saya akan pergi ke Hokkaido.
B: Bagus ya. [1. Tanaka-san juga → 2. Hokkaido → 3. Ingin (pihak ketiga)].
A: Begitu ya. Saya baru tahu hal itu.`,
    sentenceContext: {
      speakerA: '来週から北海道に行きます。',
      speakerATranslation: 'Mulai minggu depan saya akan pergi ke Hokkaido.',
      items: ['1. 田中さんも', '2. 北海道', '3. たがる'],
      followUpA: 'そうですか。それは知りませんでした。',
      followUpATranslation: 'Begitu ya. Saya baru tahu hal itu.',
    },
    options: [
      { id: 1, text: '田中さんも北海道に行きたがっていましたよ。', translation: 'Tanaka-san juga (katanya) ingin pergi ke Hokkaido lho.', isCorrect: true },
      { id: 2, text: '田中さんも北海道に行きたいです。', translation: 'Salah: 〜たい hanya untuk orang pertama, orang ketiga harus 〜たがる', isCorrect: false },
      { id: 3, text: '北海道へ田中さんも行きたがりました。', translation: 'Urutan 1 dan 2 terbalik', isCorrect: false },
      { id: 4, text: '田中さんもたがって北海道に行きます。', translation: 'Tata bahasa salah', isCorrect: false },
    ],
    correctAnswer: 1,
    correctAnswerDisplay: '田中さんも北海道に行きたがっていましたよ。',
    explanation: {
      whyCorrect: 'Sesuai kunci jawaban resmi ujian: 「田中さんも北海道に行きたがっていましたよ。」 (Tanaka-san juga terlihat/menyatakan sangat ingin pergi ke Hokkaido lho). Untuk keinginan orang ketiga (orang lain seperti Tanaka-san), pola yang benar adalah konjugasi stem -tai + がる → 「行きたがる」 → bentuk lampau berkelanjutan: 「行きたがっていました」.',
      whyIncorrect: [
        { optionId: 2, text: '田中さんも北海道に行きたいです。', reason: 'Pola 〜たい hanya digunakan untuk keinginan pembicara sendiri (orang pertama). Untuk orang lain harus menggunakan 〜たがる.' },
        { optionId: 3, text: '北海道へ田中さんも...', reason: 'Kata kunci "田中さんも" harus berada di urutan pertama.' },
        { optionId: 4, text: '田中さんもたがって...', reason: 'Konstruksi gramatikal yang keliru.' },
      ],
      grammarPoint: 'Pola 〜たがる / 〜たがっている: Digunakan untuk menyatakan keinginan orang ketiga (pihak lain). Bentuk: V-stem + たがる.',
    },
  },
  {
    id: 59,
    sectionId: 'IV',
    sectionTitle: 'IV. 記述問題 (Soal Menulis & Menyusun Kalimat)',
    subSectionTitle: '記述 B: Susunlah kalimat tanggapan menggunakan 3 kata kunci berurutan',
    type: 'choice',
    prompt: 'Susunlah respon B menggunakan 3 kata: 【1. この → 2. 妻 → 3. くれる】 tanpa mengubah urutan.',
    questionText: `A: いいネクタイですね。
B: ええ、【1. この → 2. {妻|つま} → 3. くれる】。
A: いい{奥|おく}さんですね。`,
    questionTranslation: `A: Dasi yang bagus ya.
B: Iya, [1. ini → 2. istri → 3. memberi].
A: Istri yang sangat baik ya.`,
    sentenceContext: {
      speakerA: 'いいネクタイですね。',
      speakerATranslation: 'Dasi yang bagus ya.',
      items: ['1. この', '2. 妻', '3. くれる'],
      followUpA: 'いい奥さんですね。',
      followUpATranslation: 'Istri yang sangat baik ya.',
    },
    options: [
      { id: 1, text: 'このネクタイは妻が誕生日にくれたんです。', translation: 'Dasi ini diberikan oleh istri saya saat hari ulang tahun.', isCorrect: true },
      { id: 2, text: '妻はこのネクタイをくれました。', translation: 'Urutan kata kunci pertama (この) tidak di depan', isCorrect: false },
      { id: 3, text: 'このネクタイを妻にあげました。', translation: 'Salah kata kerja: あげました (saya memberi), bukan くれる (istri memberi ke saya)', isCorrect: false },
      { id: 4, text: 'この妻がネクタイをくれます。', translation: 'Arti menjadi rancu ("istri ini")', isCorrect: false },
    ],
    correctAnswer: 1,
    correctAnswerDisplay: 'このネクタイは妻が誕生日にくれたんです。',
    explanation: {
      whyCorrect: 'Sesuai kunci jawaban resmi ujian: 「このネクタイは妻が誕生日にくれたんです。」 (Dasi ini diberikan oleh istri saya sewaktu hari ulang tahun). Kata kerja くれる (memberikan kepada saya/pihak pembicara) diubah menjadi bentuk lampau くれた + んです (memberikan penjelasan/latar belakang). Tiga kata kunci berurutan: この → 妻 → くれる.',
      whyIncorrect: [
        { optionId: 2, text: '妻はこのネクタイを...', reason: 'Kata kunci "この" harus berada di awal urutan.' },
        { optionId: 3, text: 'このネクタイを妻にあげました。', reason: 'Kata kerjanya harus くれる (diberikan oleh orang lain kepada saya), bukan あげる (saya memberi ke orang).' },
        { optionId: 4, text: 'この妻が...', reason: 'Urutan frasa "Kono tsuma" tidak alami dan merusak makna.' },
      ],
      grammarPoint: '[Pihak Lain] が (私に) [Benda] を くれた / くれます = Seseorang memberikan sesuatu kepada saya / keluarga saya.',
    },
  },
  {
    id: 60,
    sectionId: 'IV',
    sectionTitle: 'IV. 記述問題 (Soal Menulis & Menyusun Kalimat)',
    subSectionTitle: '記述 B: Susunlah kalimat tanggapan menggunakan 3 kata kunci berurutan',
    type: 'choice',
    prompt: 'Susunlah kalimat menggunakan 3 kata: 【1. 午後 → 2. 山口先生 → 3. いらっしゃる】 tanpa mengubah urutan.',
    questionText: `きょうの【1. 午後 → 2. 山口先生 → 3. いらっしゃる】。
それまでに、山口先生がお好きな花を買っておいてください。`,
    questionTranslation: `Hari ini [1. siang/sore → 2. Guru Yamaguchi → 3. datang (hormat)].
Sebelum saat itu tiba, tolong belikan bunga yang disukai oleh guru Yamaguchi.`,
    sentenceContext: {
      items: ['1. 午後', '2. 山口先生', '3. いらっしゃる'],
      followUpA: 'それまでに、山口先生がお好きな花を買っておいてください。',
      followUpATranslation: 'Sebelum saat itu tiba, tolong belikan bunga yang disukai oleh guru Yamaguchi.',
    },
    options: [
      { id: 1, text: '午後、山口先生がいらっしゃいます。', translation: 'Siang hari ini, guru Yamaguchi akan datang.', isCorrect: true },
      { id: 2, text: '山口先生は午後にいらっしゃいます。', translation: 'Urutan 1 dan 2 terbalik', isCorrect: false },
      { id: 3, text: '午後にいらっしゃるのは山口先生です。', translation: 'Urutan kata tidak sesuai standar', isCorrect: false },
      { id: 4, text: '午後、山口先生をいらっしゃいます。', translation: 'Partikel を salah (seharusnya が)', isCorrect: false },
    ],
    correctAnswer: 1,
    correctAnswerDisplay: '午後、山口先生がいらっしゃいます。',
    explanation: {
      whyCorrect: 'Sesuai kunci jawaban resmi ujian: 「午後、山口先生がいらっしゃいます。」 (Siang ini, guru Yamaguchi akan datang). いらっしゃる adalah bentuk hormat (Sonkeigo) dari 来る (datang). Bentuk sopan masu-nya adalah いらっしゃいます. Urutan: 午後 → 山口先生 → いらっしゃる/いらっしゃいます.',
      whyIncorrect: [
        { optionId: 2, text: '山口先生は午後に...', reason: 'Kata kunci "午後" harus berada di awal.' },
        { optionId: 3, text: '午後にいらっしゃるのは...', reason: 'Konstruksi kalimat tidak alami untuk menyambung kalimat selanjutnya.' },
        { optionId: 4, text: '午後、山口先生を...', reason: 'Subjek yang melakukan aksi hormat harus ditandai partikel が (山口先生が), bukan partikel objek を.' },
      ],
      grammarPoint: 'Sonkeigo (尊敬語): いらっしゃる adalah ragam hormat untuk 行く (pergi), 来る (datang), dan いる (ada). Bentuk sopan: いらっしゃいます。',
    },
  },
];
