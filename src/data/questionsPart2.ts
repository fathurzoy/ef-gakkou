import { Question, ReadingPassage } from '../types/quiz';

const passage1: ReadingPassage = {
  id: 'passage-1',
  title: '問題 1 (Wacana 1)',
  content: `きのうともだちのリカさんのうちへ行って、おすしを食べました。さかなのおすしのほかに、カリフォルニアまきというおすしを食べました。カリフォルニアまきというおすしは、{日本|にほん}ではなくてアメリカでつくられました。
リカさんのおかあさんはめずらしいものがすきです。カリフォルニアまきもリカさんのおかあさんがつくりました。いつもめずらしい{料理|りょうり}をリカさんのうちで{食|た}べることができます。ですからわたしはリカさんのおかあさんがだいすきです。`,
  translation: `Kemarin saya pergi ke rumah teman saya, Rika-san, dan makan sushi. Selain sushi ikan, saya juga memakan sushi yang disebut California Maki. Sushi California Maki dibuat bukan di Jepang, melainkan di Amerika.
Ibu Rika-san menyukai hal-hal yang unik/langka. California Maki pun dibuat oleh ibu Rika-san. Saya selalu bisa memakan masakan yang unik di rumah Rika-san. Karena itulah saya sangat menyukai ibu Rika-san.`,
};

const passage2: ReadingPassage = {
  id: 'passage-2',
  title: '問題 2 (Wacana 2)',
  content: `{4人|にん}に「こどものころ」について{聞|き}きました。

【Aさん】
{買|か}いものが{大|だい}すきでした。お{金|かね}の{計算|けいさん}がとくいなので{社長|しゃちょう}になりたいと{思|おも}っていました。

【Bさん】
いつも{家|うち}で{一人|ひとり}であそんでいました。テレビを{見|み}るのがすきでした。{目|め}がわるいのはテレビを見すぎたからです。

【Cさん】
{雨の日以外|あめのひいがい}はいつも{友達|ともだち}とサッカーをしていました。サッカーができない{雨の日|あめのひ}は{家|うち}にいるのでいやでした。

【Dさん】
{家が花屋|うちはなや}なので、{学校|がっこう}から{帰|かえ}るといつも{手伝|てつだ}っていました。クラスで{花の名前|はななまえ}を{一番知|いちばんし}っていました。`,
  translation: `Kami menanyakan tentang "masa kanak-kanak" kepada 4 orang.

[A-san]
Sangat suka berbelanja. Karena pandai berhitung uang, ia bercita-cita ingin menjadi direktur perusahaan (shachou).

[B-san]
Selalu bermain sendirian di rumah. Sangat suka menonton televisi. Matanya yang minus/buruk disebabkan karena terlalu banyak menonton TV.

[C-san]
Selain hari hujan, selalu bermain sepak bola bersama teman-teman. Hari hujan di mana ia tidak bisa main bola dan harus berdiam di rumah sangat tidak ia sukai.

[D-san]
Karena rumahnya adalah toko bunga, sepulang sekolah ia selalu membantu di rumah. Di kelasnya, ia adalah orang yang paling tahu nama-nama bunga.`,
};

const passage3: ReadingPassage = {
  id: 'passage-3',
  title: '問題 3 (Wacana 3)',
  content: `オリンピックに3回出場したことがある{選手|せんしゅ}がこう言っていました。
「はじめてオリンピックに出たときは、何があったのかよく{覚|おぼ}えていません。気がついたら、金メダルをもらっていました。2回目にオリンピックに出たときもとてもどきどきしていました。こんども1位にならなければと思っていたからです。でも{結果|けっか}は6位でした。
3回目に出場したときはとても気持ちがらくでした。オリンピックをたのしむことができました。結果は8位でしたが、自分の力をぜんぶ出すことができました。ですからとても{満足|まんぞく}しています」`,
  translation: `Seorang atlet yang pernah tampil 3 kali di Olimpiade berkata seperti ini:
"Ketika pertama kali tampil di Olimpiade, saya tidak terlalu ingat apa yang terjadi. Tahu-tahu, saya sudah mendapatkan medali emas. Saat kedua kalinya tampil di Olimpiade pun saya sangat berdebar-debar gugup, karena saya berpikir kali ini pun harus meraih peringkat 1. Namun hasilnya adalah peringkat 6.
Saat tampil untuk ketiga kalinya, perasaan saya sangat rileks. Saya bisa menikmati Olimpiade tersebut. Meskipun hasilnya peringkat 8, saya bisa mengerahkan seluruh kemampuan saya. Oleh karena itu saya merasa sangat puas."`,
};

const passage4: ReadingPassage = {
  id: 'passage-4',
  title: '問題 4 (Wacana 4)',
  content: `「自動車ニュース」 2009年5月号

先月20日から中国の{上海|シャンハイ}で自動車のショーがありました。世界中の(注)自動車メーカーが集まって、新しい車の{宣伝|せんでん}をしました。日本のある自動車メーカーは、今年1月のアメリカでの自動車ショーには{参加|さんか}しませんでしたが、上海の自動車ショーには参加しました。
2008年の自動車の{販売台数|はんばいだいすう}は、アメリカが1位で中国が2位でした。しかし、2009年の1月から3月は、中国はアメリカをぬいて、自動車をもっとも多く販売した国になりました。こうしたことから、世界中の自動車メーカーが、中国での販売に力を入れています。

(注) 自動車メーカー…自動車を作っている会社`,
  translation: `「Berita Otomotif」 Edisi Mei 2009

Sejak tanggal 20 bulan lalu, pameran otomotif (auto show) diselenggarakan di Shanghai, Tiongkok. Produsen mobil dari seluruh dunia berkumpul dan mempromosikan mobil-mobil baru. Sebuah produsen mobil asal Jepang tidak berpartisipasi dalam pameran otomotif di Amerika pada bulan Januari tahun ini, namun ikut serta dalam pameran di Shanghai.
Pada tahun 2008, volume penjualan mobil mendudukkan Amerika di peringkat ke-1 dan Tiongkok di peringkat ke-2. Namun, dari Januari hingga Maret 2009, Tiongkok menyalip Amerika dan menjadi negara yang menjual mobil paling banyak. Karena alasan inilah, produsen mobil di seluruh dunia mengerahkan tenaga dan fokus pada penjualan di Tiongkok.

(Catatan) Produsen mobil (自動車メーカー) ... Perusahaan yang memproduksi mobil.`,
};

export const questionsPart2: Question[] = [
  {
    id: 23,
    sectionId: 'II',
    sectionTitle: 'II. 読解問題 (Pemahaman Bacaan)',
    subSectionTitle: '問題 1 (Soal 23 ~ 25)',
    type: 'choice',
    prompt: 'Bacalah wacana 1 dan pilihlah jawaban yang paling tepat.',
    questionText: 'いつリカさんのうちに{行|い}きましたか。',
    questionTranslation: 'Kapan pergi ke rumah Rika-san?',
    passage: passage1,
    options: [
      { id: 1, text: 'あしたです。', translation: 'Besok.', isCorrect: false },
      { id: 2, text: 'あさってです。', translation: 'Lusa.', isCorrect: false },
      { id: 3, text: 'きのうです。', translation: 'Kemarin.', isCorrect: true },
      { id: 4, text: 'おとといです。', translation: 'Kemarin lusa.', isCorrect: false },
    ],
    correctAnswer: 3,
    correctAnswerDisplay: '3. きのうです。 (Kemarin)',
    explanation: {
      whyCorrect: 'Pada kalimat pertama wacana tertulis jelas: 「きのうともだちのリカさんのうちへ行って、おすしを食べました。」 (Kemarin pergi ke rumah teman bernama Rika-san...). Jadi jawabannya adalah きのう (kemarin).',
      whyIncorrect: [
        { optionId: 1, text: 'あしたです。', reason: 'Berarti "besok", sedangkan peristiwa sudah terjadi kemarin.' },
        { optionId: 2, text: 'あさってです。', reason: 'Berarti "lusa", tidak sesuai teks.' },
        { optionId: 4, text: 'おとといです。', reason: 'Berarti "dua hari yang lalu / kemarin lusa".' },
      ],
      grammarPoint: 'Waktu lampau: きのう (kemarin) berpasangan dengan bentuk kata kerja lampau (~ました).',
    },
  },
  {
    id: 24,
    sectionId: 'II',
    sectionTitle: 'II. 読解問題 (Pemahaman Bacaan)',
    subSectionTitle: '問題 1 (Soal 23 ~ 25)',
    type: 'choice',
    prompt: 'Bacalah wacana 1 dan pilihlah jawaban yang paling tepat.',
    questionText: 'カリフォルニアまきはなんですか。',
    questionTranslation: 'Apakah itu California Maki?',
    passage: passage1,
    options: [
      { id: 1, text: '{日本|にほん}ではめずらしくないおすしです。', translation: 'Sushi yang tidak langka di Jepang.', isCorrect: false },
      { id: 2, text: 'アメリカでつくられたおすしです。', translation: 'Sushi yang dibuat / diciptakan di Amerika.', isCorrect: true },
      { id: 3, text: 'リカさんのおかあさんが{買|か}ってきたおすしです。', translation: 'Sushi yang dibeli oleh ibu Rika-san.', isCorrect: false },
      { id: 4, text: 'あまいおかしです。', translation: 'Kue manis.', isCorrect: false },
    ],
    correctAnswer: 2,
    correctAnswerDisplay: '2. アメリカでつくられたおすしです。',
    explanation: {
      whyCorrect: 'Di dalam teks tertulis: 「カリフォルニアまきというおすしは、日本ではなくてアメリカでつくられました。」 (Sushi bernama California Maki dibuat bukan di Jepang, melainkan di Amerika).',
      whyIncorrect: [
        { optionId: 1, text: '日本ではめずらしくないおすしです。', reason: 'Teks menyatakan ibu Rika suka makanan langka/unik (めずらしいもの) dan membuatnya.' },
        { optionId: 3, text: 'リカさんのおかあさんが買ってきたおすしです。', reason: 'Ibu Rika membuatnya sendiri (つくりました), bukan membelinya (買ってきませんでした).' },
        { optionId: 4, text: 'あまいおかしです。', reason: 'California Maki adalah jenis sushi (おすし), bukan permen/kue manis (おかし).' },
      ],
      grammarPoint: 'Bentuk pasif: つくられました (dibuat). Pola [A] ではなくて [B] (Bukan A melainkan B).',
    },
  },
  {
    id: 25,
    sectionId: 'II',
    sectionTitle: 'II. 読解問題 (Pemahaman Bacaan)',
    subSectionTitle: '問題 1 (Soal 23 ~ 25)',
    type: 'choice',
    prompt: 'Bacalah wacana 1 dan pilihlah pernyataan yang sesuai isi teks.',
    questionText: '{文章|ぶんしょう}の{内容|ないよう}と{合|あ}っているのはどれですか。',
    questionTranslation: 'Manakah yang sesuai dengan isi bacaan?',
    passage: passage1,
    options: [
      { id: 1, text: 'リカさんとわたしはけんかをしました。', translation: 'Rika-san dan saya bertengkar.', isCorrect: false },
      { id: 2, text: 'さかなのおすしは{食|た}べませんでした。', translation: 'Tidak memakan sushi ikan.', isCorrect: false },
      { id: 3, text: 'リカさんがカリフォルニアまきをつくりました。', translation: 'Rika-san yang membuat California Maki.', isCorrect: false },
      { id: 4, text: 'リカさんのうちではよくめずらしい{料理|りょうり}を食べます。', translation: 'Di rumah Rika-san sering memakan masakan yang unik.', isCorrect: true },
    ],
    correctAnswer: 4,
    correctAnswerDisplay: '4. リカさんのうちではよくめずらしい料理を食べます。',
    explanation: {
      whyCorrect: 'Di akhir teks dinyatakan: 「いつもめずらしい料理をリカさんのうちで食べることができます。」 (Selalu bisa makan masakan unik di rumah Rika-san). Ini bersesuaian persis dengan opsi 4.',
      whyIncorrect: [
        { optionId: 1, text: 'リカさんとわたしはけんかをしました。', reason: 'Tidak ada pertengkaran; mereka berteman baik dan makan bersama.' },
        { optionId: 2, text: 'さかなのおすしは食べませんでした。', reason: 'Teks menyatakan "さかなのおすしのほかに" (selain sushi ikan), artinya sushi ikan juga dimakan.' },
        { optionId: 3, text: 'リカさんがカリフォルニアまきをつくりました。', reason: 'Yang membuat adalah ibu Rika (おかあさんがつくりました), bukan Rika.' },
      ],
      grammarPoint: 'V-kamus + ことができる = Dapat/bisa melakukan sesuatu.',
    },
  },
  {
    id: 26,
    sectionId: 'II',
    sectionTitle: 'II. 読解問題 (Pemahaman Bacaan)',
    subSectionTitle: '問題 2 (Soal 26 ~ 28)',
    type: 'choice',
    prompt: 'Bacalah wacana 2 dan pilihlah penjelasan yang benar tentang C-san.',
    questionText: 'Cさんについて{正|ただ}しい{説明|せつめい}はどれですか。',
    questionTranslation: 'Manakah penjelasan yang benar mengenai C-san?',
    passage: passage2,
    options: [
      { id: 1, text: '{雨の日|あめのひ}もサッカーをしていました。', translation: 'Bahkan pada hari hujan pun bermain sepak bola.', isCorrect: false },
      { id: 2, text: 'スポーツがきらいです。', translation: 'Membenci olahraga.', isCorrect: false },
      { id: 3, text: '{毎日|まいにち}サッカーをしていました。', translation: 'Setiap hari bermain sepak bola.', isCorrect: false },
      { id: 4, text: 'サッカーは{友達|ともだち}としていました。', translation: 'Bermain sepak bola bersama teman-teman.', isCorrect: true },
    ],
    correctAnswer: 4,
    correctAnswerDisplay: '4. サッカーは友達としていました。',
    explanation: {
      whyCorrect: 'Di bagian C-san tertulis: 「雨の日以外はいつも友達とサッカーをしていました。」 (Selain hari hujan, selalu bermain sepak bola bersama teman). Jadi benar bahwa ia bermain bersama teman.',
      whyIncorrect: [
        { optionId: 1, text: '雨の日もサッカーをしていました。', reason: 'Teks menyebut "サッカーができない雨の日" (hari hujan ia tidak bisa main bola).' },
        { optionId: 2, text: 'スポーツがきらいです。', reason: 'Ia sangat suka bermain bola, bukan benci olahraga.' },
        { optionId: 3, text: '毎日サッカーをしていました。', reason: 'Pada hari hujan ia tidak bermain (雨の日以外 = selain hari hujan), sehingga tidak setiap hari.' },
      ],
      grammarPoint: '[Kata Benda] + 以外 (いがい) = Kecuali / selain dari [Kata Benda].',
    },
  },
  {
    id: 27,
    sectionId: 'II',
    sectionTitle: 'II. 読解問題 (Pemahaman Bacaan)',
    subSectionTitle: '問題 2 (Soal 26 ~ 28)',
    type: 'choice',
    prompt: 'Bacalah wacana 2 dan jawablah pertanyaannya.',
    questionText: '{家の仕事|うちしごと}をしていた{人|ひと}はだれですか。',
    questionTranslation: 'Siapakah orang yang membantu pekerjaan rumah / usaha keluarga?',
    passage: passage2,
    options: [
      { id: 1, text: 'AさんとBさんです。', translation: 'A-san dan B-san.', isCorrect: false },
      { id: 2, text: 'BさんとCさんです。', translation: 'B-san dan C-san.', isCorrect: false },
      { id: 3, text: 'Cさんだけです。', translation: 'Hanya C-san.', isCorrect: false },
      { id: 4, text: 'Dさんだけです。', translation: 'Hanya D-san.', isCorrect: true },
    ],
    correctAnswer: 4,
    correctAnswerDisplay: '4. Dさんだけです。',
    explanation: {
      whyCorrect: 'Pada bagian D-san tertulis: 「家が花屋なので、学校から帰るといつも手伝っていました。」 (Karena rumahnya toko bunga, begitu pulang sekolah selalu membantu usaha toko bunga keluarga). Toko bunga keluarga adalah 家の仕事 (pekerjaan usaha keluarga). Hanya D-san yang melakukannya.',
      whyIncorrect: [
        { optionId: 1, text: 'AさんとBさんです。', reason: 'A suka belanja dan menghitung uang, B suka main sendiri dan nonton TV.' },
        { optionId: 2, text: 'BさんとCさんです。', reason: 'C main bola dengan teman, bukan membantu usaha keluarga.' },
        { optionId: 3, text: 'Cさんだけです。', reason: 'C bermain sepak bola di luar rumah.' },
      ],
      grammarPoint: '手伝う (tetsudau) = Membantu / menolong pekerjaan seseorang.',
    },
  },
  {
    id: 28,
    sectionId: 'II',
    sectionTitle: 'II. 読解問題 (Pemahaman Bacaan)',
    subSectionTitle: '問題 2 (Soal 26 ~ 28)',
    type: 'choice',
    prompt: 'Bacalah wacana 2 dan pilihlah pernyataan yang benar tentang keempat orang tersebut.',
    questionText: '4人について{正|ただ}しい{説明|せつめい}はどれですか。',
    questionTranslation: 'Manakah penjelasan yang benar mengenai keempat orang tersebut?',
    passage: passage2,
    options: [
      { id: 1, text: 'Aさんは{家|うち}にいるのが{大|だい}すきでした。', translation: 'A-san sangat suka berada di rumah.', isCorrect: false },
      { id: 2, text: 'Bさんは{勉強|べんきょう}をたくさんしたので{目|め}がわるくなりました。', translation: 'B-san matanya menjadi rusak karena banyak belajar.', isCorrect: false },
      { id: 3, text: 'Cさんは{雨の日|あめのひ}がきらいでした。', translation: 'C-san tidak menyukai hari hujan.', isCorrect: true },
      { id: 4, text: 'Dさんは{花の名前|はななまえ}がほとんどわかりません。', translation: 'D-san hampir tidak tahu nama-nama bunga.', isCorrect: false },
    ],
    correctAnswer: 3,
    correctAnswerDisplay: '3. Cさんは雨の日がきらいでした。',
    explanation: {
      whyCorrect: 'Pada bagian C-san tertulis: 「サッカーができない雨の日は家にいるのでいやでした。」 (Hari hujan di mana ia tidak bisa main bola dan harus di rumah sangat tidak ia sukai / dibenci). Iya (いや) bermakna benci / tidak suka (きらい).',
      whyIncorrect: [
        { optionId: 1, text: 'Aさんは家にいるのがだいすきでした。', reason: 'A suka belanja keluar (買い物).' },
        { optionId: 2, text: 'Bさんは勉強をたくさんしたので...', reason: 'Mata B rusak karena terlalu banyak menonton TV (テレビを見すぎた), bukan karena belajar.' },
        { optionId: 4, text: 'Dさんは花の名前がほとんどわかりません。', reason: 'D justru paling tahu nama bunga di kelasnya (一番知っていました).' },
      ],
      grammarPoint: 'Kata いや (tidak suka / tidak mau) bersinonim dengan きらい (benci / tidak suka).',
    },
  },
  {
    id: 29,
    sectionId: 'II',
    sectionTitle: 'II. 読解問題 (Pemahaman Bacaan)',
    subSectionTitle: '問題 3 (Soal 29 ~ 30)',
    type: 'choice',
    prompt: 'Bacalah wacana 3 dan jawablah pertanyaannya.',
    questionText: 'この人は、いつ金メダルをもらいましたか。',
    questionTranslation: 'Kapankah orang ini memperoleh medali emas?',
    passage: passage3,
    options: [
      { id: 1, text: '1回目のオリンピックです。', translation: 'Pada Olimpiade yang ke-1.', isCorrect: true },
      { id: 2, text: '2回目のオリンピックです。', translation: 'Pada Olimpiade yang ke-2.', isCorrect: false },
      { id: 3, text: '3回目のオリンピックです。', translation: 'Pada Olimpiade yang ke-3.', isCorrect: false },
      { id: 4, text: '1回目と3回目のオリンピックです。', translation: 'Pada Olimpiade ke-1 dan ke-3.', isCorrect: false },
    ],
    correctAnswer: 1,
    correctAnswerDisplay: '1. 1回目のオリンピックです。',
    explanation: {
      whyCorrect: 'Di kalimat wacana 3 tertulis: 「はじめてオリンピックに出たときは、何があったのかよく覚えていません。気がついたら、金メダルをもらっていました。」 (Saat pertama kali ikut Olimpiade... tahu-tahu sudah mendapatkan medali emas). Olimpiade pertama = 1回目のオリンピック.',
      whyIncorrect: [
        { optionId: 2, text: '2回目のオリンピックです。', reason: 'Pada kali kedua hasilnya adalah peringkat ke-6 (結果は6位でした).' },
        { optionId: 3, text: '3回目のオリンピックです。', reason: 'Pada kali ketiga hasilnya peringkat ke-8 (結果は8位でした).' },
        { optionId: 4, text: '1回目と3回目のオリンピックです。', reason: 'Pada kali ke-3 ia menempati posisi 8, bukan medali emas.' },
      ],
      grammarPoint: 'はじめて (pertama kali) = 1回目 (ke-1 kali).',
    },
  },
  {
    id: 30,
    sectionId: 'II',
    sectionTitle: 'II. 読解問題 (Pemahaman Bacaan)',
    subSectionTitle: '問題 3 (Soal 29 ~ 30)',
    type: 'choice',
    prompt: 'Bacalah wacana 3 dan pilihlah pernyataan yang sesuai.',
    questionText: '{文章|ぶんしょう}の{内容|ないよう}と{合|あ}っているのはどれですか。',
    questionTranslation: 'Manakah yang sesuai dengan isi bacaan?',
    passage: passage3,
    options: [
      { id: 1, text: 'はじめてオリンピックに出たときのことをよく{覚|おぼ}えています。', translation: 'Mengingat dengan baik saat pertama kali ikut Olimpiade.', isCorrect: false },
      { id: 2, text: '2回目も3回目もとてもどきどきしていました。', translation: 'Baik kali ke-2 maupun ke-3 sangat berdebar gugup.', isCorrect: false },
      { id: 3, text: '2回目は8位だったので、とても残念でした。', translation: 'Karena kali ke-2 meraih posisi 8, sangat disayangkan.', isCorrect: false },
      { id: 4, text: '3回目は2回目より成績がよくありませんでしたが、とても{満足|まんぞく}しています。', translation: 'Kali ke-3 prestasinya tidak lebih baik dari kali ke-2, tetapi ia sangat merasa puas.', isCorrect: true },
    ],
    correctAnswer: 4,
    correctAnswerDisplay: '4. 3回目は2回目より成績がよくありませんでしたが、とても満足しています。',
    explanation: {
      whyCorrect: 'Pada kali ke-2 ia juara 6, sedangkan kali ke-3 peringkat 8 (prestasinya lebih rendah), namun atlet menyatakan: 「自分の力をぜんぶ出すことができました。ですからとても満足しています」 (Saya bisa mengerahkan seluruh kemampuan, sehingga sangat puas). Jadi opsi 4 tepat sekali.',
      whyIncorrect: [
        { optionId: 1, text: 'はじめてオリンピックに出たときのことをよく覚えています。', reason: 'Teks menyatakan sebaliknya: よく覚えていません (tidak terlalu ingat).' },
        { optionId: 2, text: '2回目も3回目もとてもどきどきしていました。', reason: 'Pada kali ke-3 ia justru merasa sangat rileks (とても気持ちがらくでした).' },
        { optionId: 3, text: '2回目は8位だったので...', reason: 'Peringkat ke-2 adalah posisi 6 (6位), posisi 8 adalah saat Olimpiade ke-3.' },
      ],
      grammarPoint: '[A] は [B] より [Kata Sifat] (Perbandingan: A dibandingkan B...).',
    },
  },
  {
    id: 31,
    sectionId: 'II',
    sectionTitle: 'II. 読解問題 (Pemahaman Bacaan)',
    subSectionTitle: '問題 4 (Soal 31 ~ 32)',
    type: 'choice',
    prompt: 'Bacalah wacana 4 dan jawablah pertanyaannya.',
    questionText: '2009年1月に何がありましたか。',
    questionTranslation: 'Ada peristiwa apa pada bulan Januari tahun 2009?',
    passage: passage4,
    options: [
      { id: 1, text: 'アメリカで自動車ショーがありました。', translation: 'Ada pameran mobil di Amerika.', isCorrect: true },
      { id: 2, text: '日本で自動車ショーがありました。', translation: 'Ada pameran mobil di Jepang.', isCorrect: false },
      { id: 3, text: '中国で自動車ショーがありました。', translation: 'Ada pameran mobil di Tiongkok.', isCorrect: false },
      { id: 4, text: '何もありませんでした。', translation: 'Tidak ada apa-apa.', isCorrect: false },
    ],
    correctAnswer: 1,
    correctAnswerDisplay: '1. アメリカで自動車ショーがありました。',
    explanation: {
      whyCorrect: 'Di dalam teks paragraf 1 tertulis: 「日本のある自動車メーカーは、今年1月のアメリカでの自動車ショーには参加しませんでしたが...」 (Sebuah produsen mobil Jepang tidak ikut serta dalam pameran otomotif di Amerika pada bulan Januari tahun ini...). Ini menegaskan bahwa ada pameran mobil di Amerika pada Januari 2009.',
      whyIncorrect: [
        { optionId: 2, text: '日本で自動車ショーがありました。', reason: 'Tidak disebutkan pameran mobil di Jepang.' },
        { optionId: 3, text: '中国で自動車ショーがありました。', reason: 'Pameran mobil di Shanghai Tiongkok diadakan pada bulan sebelumnya (先月20日から), bukan Januari 2009.' },
        { optionId: 4, text: '何もありませんでした。', reason: 'Jelas ada pameran mobil di Amerika.' },
      ],
      grammarPoint: '[Waktu] の [Tempat] での [Peristiwa] = Peristiwa di tempat X pada waktu Y.',
    },
  },
  {
    id: 32,
    sectionId: 'II',
    sectionTitle: 'II. 読解問題 (Pemahaman Bacaan)',
    subSectionTitle: '問題 4 (Soal 31 ~ 32)',
    type: 'choice',
    prompt: 'Bacalah wacana 4 dan pilihlah pernyataan yang sesuai isi wacana.',
    questionText: '{文章|ぶんしょう}の{内容|ないよう}と{合|あ}っているのはどれですか。',
    questionTranslation: 'Manakah yang sesuai dengan isi wacana?',
    passage: passage4,
    options: [
      { id: 1, text: '日本のある自動車会社は、中国の自動車ショーには参加しませんでしたが、アメリカの自動車ショーには参加しました。', translation: 'Sebuah perusahaan mobil Jepang tidak ikut pameran di Tiongkok, tetapi ikut pameran di Amerika.', isCorrect: false },
      { id: 2, text: '2009年もアメリカで自動車が一番売れています。', translation: 'Pada tahun 2009 pun mobil paling banyak terjual di Amerika.', isCorrect: false },
      { id: 3, text: '中国は2008年から自動車の販売数で1位になっています。', translation: 'Tiongkok menduduki peringkat ke-1 penjualan mobil sejak tahun 2008.', isCorrect: false },
      { id: 4, text: '中国で自動車を売ることについて、世界中の自動車メーカーが考えています。', translation: 'Produsen mobil di seluruh dunia memikirkan / fokus pada penjualan mobil di Tiongkok.', isCorrect: true },
    ],
    correctAnswer: 4,
    correctAnswerDisplay: '4. 中国で自動車を売ることについて、世界中の自動車メーカーが考えています。',
    explanation: {
      whyCorrect: 'Di akhir wacana tertulis: 「こうしたことから、世界中の自動車メーカーが、中国での販売に力を入れています。」 (Karena hal inilah, pabrikan mobil seluruh dunia mengerahkan tenaga/fokus pada penjualan di Tiongkok). Ungkapan 力を入れています (fokus/berupaya keras) setara dengan makna 考えています (memikirkan/memperhatikan dengan serius).',
      whyIncorrect: [
        { optionId: 1, text: '日本のある自動車会社は...', reason: 'Kebalikan dari teks: pabrikan tersebut tidak ikut pameran di Amerika, tetapi ikut di Shanghai Tiongkok.' },
        { optionId: 2, text: '2009年もアメリカで自動車が一番売れています。', reason: 'Pada Jan-Mar 2009, Tiongkok menyalip Amerika sebagai penjual mobil terbanyak.' },
        { optionId: 3, text: '中国は2008年から...', reason: 'Pada tahun 2008, peringkat 1 adalah Amerika, Tiongkok posisi 2.' },
      ],
      grammarPoint: '力を入れる (chikara wo ireru) = Mencurahkan tenaga / memfokuskan usaha pada suatu bidang.',
    },
  },
];
