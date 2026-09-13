import { SituasiPage } from '../types/situasi';

export const situasiPage1: SituasiPage = {
  page: 1,
  title: "場面で覚える日本語 — 状況を見て、どう言う？",
  subtitle: "Gambar diubah menjadi deskripsi situasi bahasa Indonesia. Fokusnya: melihat kondisi lalu memahami pola kalimat Jepang yang cocok.",
  description: "Melihat kondisi nyata lalu memahami dan mempraktikkan pola kalimat Jepang yang paling tepat digunakan.",
  sourceNote: "Disusun dari foto materi pengguna sebagai bahan bacaan/review, bukan salinan halaman buku.",
  studyMode: "reading",
  entries: [
    {
      category: "Sebelum melakukan sesuatu",
      pattern: "Vる前に、〜",
      meaning: "Sebelum melakukan A, lakukan B.",
      situations: [
        {
          imageDescription: "Orang membaca petunjuk obat lalu minum obat.",
          why: "Petunjuk perlu dibaca sebelum obat diminum.",
          japanese: "薬を飲む前に、説明書を読んでください。",
          reading: "くすりを のむ まえに、せつめいしょを よんでください。",
          meaning: "Sebelum minum obat, bacalah petunjuknya."
        },
        {
          imageDescription: "Orang mencuci tangan lalu mulai makan.",
          why: "Mencuci tangan dilakukan sebelum makan.",
          japanese: "ご飯を食べる前に、手を洗います。",
          reading: "ごはんを たべる まえに、てを あらいます。",
          meaning: "Sebelum makan, saya mencuci tangan."
        },
        {
          imageDescription: "Orang melakukan peregangan sebelum mulai berolahraga.",
          why: "Pemanasan dilakukan sebelum olahraga.",
          japanese: "運動する前に、準備運動をしたほうがいいです。",
          reading: "うんどうする まえに、じゅんびうんどうを した ほうが いいです。",
          meaning: "Sebelum olahraga, sebaiknya melakukan pemanasan."
        }
      ]
    },
    {
      category: "Setelah A, baru B",
      pattern: "Vてから、〜",
      meaning: "A diselesaikan terlebih dahulu, kemudian B.",
      situations: [
        {
          imageDescription: "Orang mencuci tangan lalu makan.",
          why: "Urutannya ditekankan: cuci tangan selesai, baru makan.",
          japanese: "手を洗ってから、ご飯を食べます。",
          reading: "てを あらってから、ごはんを たべます。",
          meaning: "Setelah mencuci tangan, saya makan."
        },
        {
          imageDescription: "Orang selesai makan lalu minum obat.",
          why: "Obat diminum sesudah makan.",
          japanese: "ご飯を食べてから、薬を飲みます。",
          reading: "ごはんを たべてから、くすりを のみます。",
          meaning: "Setelah makan, saya minum obat."
        },
        {
          imageDescription: "Orang berendam atau mandi lalu pergi tidur.",
          why: "Tidur dilakukan setelah selesai mandi.",
          japanese: "お風呂に入ってから、寝ます。",
          reading: "おふろに はいってから、ねます。",
          meaning: "Setelah mandi, saya tidur."
        },
        {
          imageDescription: "Orang selesai belajar lalu berolahraga.",
          why: "Olahraga dilakukan setelah kegiatan sebelumnya selesai.",
          japanese: "勉強が終わってから、運動します。",
          reading: "べんきょうが おわってから、うんどうします。",
          meaning: "Setelah belajar selesai, saya berolahraga."
        }
      ]
    },
    {
      category: "Ketika suatu kondisi terjadi",
      pattern: "〜とき、〜",
      meaning: "Ketika/saat kondisi A terjadi, melakukan B.",
      situations: [
        {
          imageDescription: "Orang terluka saat melakukan aktivitas lalu menangani lukanya.",
          why: "Tindakan dilakukan ketika mengalami luka.",
          japanese: "けがをしたとき、薬を塗ります。",
          reading: "けがを した とき、くすりを ぬります。",
          meaning: "Ketika terluka, saya mengoleskan obat."
        },
        {
          imageDescription: "Orang terkena flu lalu pergi ke rumah sakit.",
          why: "Pergi ke rumah sakit dilakukan ketika sakit.",
          japanese: "風邪をひいたとき、病院へ行きます。",
          reading: "かぜを ひいた とき、びょういんへ いきます。",
          meaning: "Ketika terkena flu, saya pergi ke rumah sakit."
        },
        {
          imageDescription: "Orang terlihat kelelahan lalu makan cokelat.",
          why: "Makan cokelat adalah kebiasaan yang dilakukan ketika lelah.",
          japanese: "疲れたとき、チョコレートを食べます。",
          reading: "つかれた とき、チョコレートを たべます。",
          meaning: "Ketika lelah, saya makan cokelat."
        }
      ]
    },
    {
      category: "Menjelaskan sebab",
      pattern: "Nで、〜",
      meaning: "Nomina sebelum で menjadi sebab/alasan hasil setelahnya.",
      situations: [
        {
          imageDescription: "Orang demam/flu sehingga tidak masuk kerja paruh waktu.",
          why: "Flu adalah alasan tidak masuk kerja.",
          japanese: "風邪でアルバイトを休みました。",
          reading: "かぜで アルバイトを やすみました。",
          meaning: "Saya tidak masuk kerja paruh waktu karena flu."
        },
        {
          imageDescription: "Gedung berguncang lalu rusak berat.",
          why: "Gempa menjadi penyebab kerusakan.",
          japanese: "地震で建物が壊れました。",
          reading: "じしんで たてものが こわれました。",
          meaning: "Bangunan rusak karena gempa."
        },
        {
          imageDescription: "Terjadi kecelakaan mobil, kemudian ditunjukkan foto orang yang meninggal.",
          why: "Kecelakaan lalu lintas menjadi penyebab kematian.",
          japanese: "交通事故で亡くなりました。",
          reading: "こうつうじこで なくなりました。",
          meaning: "Meninggal karena kecelakaan lalu lintas."
        },
        {
          imageDescription: "Topan menerpa rumah dan kaca jendelanya pecah.",
          why: "Topan menjadi penyebab kaca pecah.",
          japanese: "台風で窓ガラスが割れました。",
          reading: "たいふうで まどガラスが われました。",
          meaning: "Kaca jendela pecah karena topan."
        },
        {
          imageDescription: "Salju turun lebat dan kereta cepat mengalami gangguan.",
          why: "Salju menjadi penyebab keterlambatan.",
          japanese: "雪で新幹線が遅れました。",
          reading: "ゆきで しんかんせんが おくれました。",
          meaning: "Shinkansen terlambat karena salju."
        }
      ]
    },
    {
      category: "Hasil otomatis / cara kerja",
      pattern: "Vると、〜",
      meaning: "Kalau A dilakukan, B terjadi sebagai hasil otomatis atau wajar.",
      situations: [
        {
          imageDescription: "Orang menekan tombol dan pintu otomatis terbuka.",
          why: "Menekan tombol secara langsung menyebabkan pintu terbuka.",
          japanese: "このボタンを押すと、ドアが開きます。",
          reading: "この ボタンを おすと、ドアが あきます。",
          meaning: "Kalau tombol ini ditekan, pintunya terbuka."
        },
        {
          imageDescription: "Orang mengoperasikan mesin dan uang kembalian keluar.",
          why: "Operasi mesin menghasilkan uang kembalian.",
          japanese: "ボタンを押すと、お釣りが出ます。",
          reading: "ボタンを おすと、おつりが でます。",
          meaning: "Kalau tombol ditekan, uang kembaliannya keluar."
        },
        {
          imageDescription: "Orang menekan tombol mesin tiket dan tiket makan keluar.",
          why: "Mesin otomatis mengeluarkan tiket.",
          japanese: "ボタンを押すと、食券が出ます。",
          reading: "ボタンを おすと、しょっけんが でます。",
          meaning: "Kalau tombol ditekan, tiket makan keluar."
        },
        {
          imageDescription: "Orang memutar keran lalu air mengalir.",
          why: "Memutar keran menyebabkan air keluar.",
          japanese: "蛇口をひねると、水が出ます。",
          reading: "じゃぐちを ひねると、みずが でます。",
          meaning: "Kalau keran diputar, air keluar."
        }
      ]
    },
    {
      category: "Mendeskripsikan pakaian dan benda yang dipakai",
      pattern: "〜ています",
      meaning: "Memakai verba yang berbeda tergantung benda yang dikenakan.",
      situations: [
        {
          imageDescription: "Pria memakai kacamata.",
          why: "Kacamata memakai kata kerja かけます.",
          japanese: "眼鏡をかけています。",
          reading: "めがねを かけています。",
          meaning: "Ia memakai kacamata."
        },
        {
          imageDescription: "Pria memakai kemeja.",
          why: "Pakaian bagian atas memakai 着ます.",
          japanese: "シャツを着ています。",
          reading: "シャツを きています。",
          meaning: "Ia memakai kemeja."
        },
        {
          imageDescription: "Pria memakai celana panjang.",
          why: "Pakaian bagian bawah memakai はきます.",
          japanese: "ズボンをはいています。",
          reading: "ズボンを はいています。",
          meaning: "Ia memakai celana panjang."
        },
        {
          imageDescription: "Wanita memakai topi.",
          why: "Topi memakai かぶります.",
          japanese: "帽子をかぶっています。",
          reading: "ぼうしを かぶっています。",
          meaning: "Ia memakai topi."
        },
        {
          imageDescription: "Wanita memakai kalung.",
          why: "Aksesori seperti kalung dapat memakai します.",
          japanese: "ネックレスをしています。",
          reading: "ネックレスを しています。",
          meaning: "Ia memakai kalung."
        },
        {
          imageDescription: "Wanita membawa payung.",
          why: "Benda yang dibawa memakai 持ちます.",
          japanese: "傘を持っています。",
          reading: "かさを もっています。",
          meaning: "Ia membawa payung."
        }
      ]
    },
    {
      category: "Petunjuk jalan",
      pattern: "道を説明する表現",
      meaning: "Memilih verba sesuai bentuk jalan dan arah gerak.",
      situations: [
        {
          imageDescription: "Orang berjalan menyeberangi jembatan.",
          why: "Gerakan melintasi jembatan memakai 渡ります.",
          japanese: "橋を渡ります。",
          reading: "はしを わたります。",
          meaning: "Menyeberangi jembatan."
        },
        {
          imageDescription: "Orang berada di persimpangan dan panah menunjukkan belok kanan.",
          why: "Di persimpangan, arah berubah ke kanan.",
          japanese: "交差点を右に曲がります。",
          reading: "こうさてんを みぎに まがります。",
          meaning: "Belok kanan di persimpangan."
        },
        {
          imageDescription: "Orang sampai di ujung jalan berbentuk T lalu belok kiri.",
          why: "突き当たり berarti ujung jalan yang tidak bisa diteruskan lurus.",
          japanese: "突き当たりを左に曲がります。",
          reading: "つきあたりを ひだりに まがります。",
          meaning: "Belok kiri di ujung jalan."
        },
        {
          imageDescription: "Orang berjalan lurus mengikuti jalan.",
          why: "Tidak ada perubahan arah.",
          japanese: "まっすぐ行きます。",
          reading: "まっすぐ いきます。",
          meaning: "Jalan lurus."
        }
      ]
    }
  ],
  "quickReference": [
    {
      "condition": "Sebelum A",
      "use": "Vる前に、B",
      "example": "寝る前に、歯を磨きます。",
      "meaning": "Sebelum tidur, saya menggosok gigi."
    },
    {
      "condition": "Setelah A selesai, baru B",
      "use": "Vてから、B",
      "example": "手を洗ってから、ご飯を食べます。",
      "meaning": "Setelah mencuci tangan, saya makan."
    },
    {
      "condition": "Saat/ketika A",
      "use": "〜とき、B",
      "example": "疲れたとき、休みます。",
      "meaning": "Saat lelah, saya beristirahat."
    },
    {
      "condition": "Memberi saran positif",
      "use": "Vたほうがいいです",
      "example": "病院へ行ったほうがいいです。",
      "meaning": "Sebaiknya pergi ke rumah sakit."
    },
    {
      "condition": "Menyarankan jangan melakukan A",
      "use": "Vないほうがいいです",
      "example": "たばこを吸わないほうがいいです。",
      "meaning": "Sebaiknya jangan merokok."
    },
    {
      "condition": "A menyebabkan hasil otomatis B",
      "use": "Vると、B",
      "example": "ボタンを押すと、ドアが開きます。",
      "meaning": "Kalau tombol ditekan, pintu terbuka."
    },
    {
      "condition": "Menjelaskan sebab dengan nomina",
      "use": "Nで、結果",
      "example": "風邪でアルバイトを休みました。",
      "meaning": "Saya tidak masuk kerja karena flu."
    }
  ]
};

export const situasiPage2: SituasiPage = {
  page: 2,
  title: "場面で覚える — Kondisi, Kejadian, dan Respons",
  subtitle: "Melihat kondisi di sekitar, mengajukan alternatif, merespons percakapan, hingga ungkapan larangan & cuaca.",
  description: "Bacaan situasional. Bayangkan gambar dari deskripsi Indonesia, pahami apa yang sedang terjadi, lalu baca ungkapan Jepang yang cocok.",
  sourceNote: "Disusun dari materi situasional bagian 2: kondisi benda, percakapan respons, verba gerakan, kolokasi, cuaca, dan aturan.",
  studyMode: "reading",
  entries: [
    {
      id: "condition_state",
      category: "Keadaan benda dan masalah di sekitar",
      focus: ["〜ています"],
      meaning: "Menyatakan keadaan/kondisi benda yang sedang berlangsung atau sudah terjadi.",
      situations: [
        {
          imageDescription: "Di restoran, seorang pelanggan menunjukkan gelas/cangkir kepada pegawai karena gelas itu kotor.",
          why: "Kita sedang menjelaskan kondisi benda yang sudah dalam keadaan kotor.",
          japanese: "あのう、コップが汚れています。",
          reading: "あのう、コップが よごれています。",
          meaning: "Permisi, gelasnya kotor.",
          response: "あっ、すみません。すぐ取り替えます。",
          responseReading: "あっ、すみません。すぐ とりかえます。",
          responseMeaning: "Oh, maaf. Akan segera saya ganti."
        },
        {
          imageDescription: "Di restoran ada benda pecah, misalnya gelas atau piring yang retak/pecah.",
          why: "Menjelaskan keadaan benda yang sudah pecah.",
          japanese: "これ、割れています。",
          reading: "これ、われています。",
          meaning: "Ini pecah/retak.",
          response: "すみません。すぐ片づけます。",
          responseReading: "すみません。すぐ かたづけます。",
          responseMeaning: "Maaf. Akan segera saya bereskan."
        },
        {
          imageDescription: "Sebuah sendok atau benda kecil terjatuh di lantai restoran.",
          why: "Benda sedang berada dalam keadaan jatuh/tergeletak.",
          japanese: "スプーンが落ちています。",
          reading: "スプーンが おちています。",
          meaning: "Ada sendok yang jatuh.",
          response: "あっ、すみません。",
          responseReading: "あっ、すみません。",
          responseMeaning: "Oh, maaf."
        }
      ]
    },
    {
      id: "problem_and_alternative",
      category: "Ada masalah → menawarkan alternatif",
      focus: ["〜ています", "〜ませんか", "そうですね"],
      meaning: "Menjelaskan kendala/kondisi lalu mengajak rekan dengan opsi alternatif.",
      situations: [
        {
          imageDescription: "Di stasiun ada pengumuman bahwa kereta berhenti karena kecelakaan. Dua orang memikirkan transportasi lain.",
          why: "Saat pilihan awal tidak bisa digunakan, kita menjelaskan masalah lalu mengusulkan alternatif.",
          japanese: "あっ、電車が止まっています。バスで行きませんか。",
          reading: "あっ、でんしゃが とまっています。バスで いきませんか。",
          meaning: "Oh, keretanya berhenti. Bagaimana kalau kita pergi naik bus?",
          response: "そうですね。",
          responseReading: "そうですね。",
          responseMeaning: "Ya, boleh / ide bagus."
        },
        {
          imageDescription: "Toko yang ingin dikunjungi ternyata tutup. Di dekatnya ada tempat lain yang bisa didatangi.",
          why: "Tujuan pertama tidak tersedia, jadi mengusulkan tempat alternatif.",
          japanese: "店が閉まっています。ほかの店に行きませんか。",
          reading: "みせが しまっています。ほかの みせに いきませんか。",
          meaning: "Tokonya tutup. Bagaimana kalau pergi ke toko lain?"
        },
        {
          imageDescription: "Seseorang ingin berfoto di tempat wisata dan meminta temannya menggunakan kamera.",
          why: "Mengusulkan kegiatan yang bisa dilakukan dalam situasi tersebut.",
          japanese: "ここで写真を撮りませんか。",
          reading: "ここで しゃしんを とりませんか。",
          meaning: "Bagaimana kalau kita foto di sini?"
        },
        {
          imageDescription: "Halte bus sangat ramai dan antreannya panjang. Mereka mempertimbangkan naik taksi.",
          why: "Karena bus penuh atau antreannya panjang, taksi menjadi alternatif.",
          japanese: "バスが混んでいます。タクシーで行きませんか。",
          reading: "バスが こんでいます。タクシーで いきませんか。",
          meaning: "Busnya ramai/penuh. Bagaimana kalau kita pergi naik taksi?"
        },
        {
          imageDescription: "Sebuah restoran terlihat sepi dan masih banyak meja kosong.",
          why: "Melihat kondisi restoran lalu mengusulkan makan di sana.",
          japanese: "このレストランは空いています。ここで食べませんか。",
          reading: "この レストランは すいています。ここで たべませんか。",
          meaning: "Restoran ini tidak ramai. Bagaimana kalau kita makan di sini?"
        }
      ]
    },
    {
      id: "movement_verbs",
      category: "Gerakan dan aktivitas",
      meaning: "Kosakata kata kerja aksi tubuh dan perpindahan tempat.",
      situations: [
        {
          imageDescription: "Seseorang sedang berjalan.",
          why: "Gerakan berpindah dengan berjalan kaki.",
          japanese: "歩きます。",
          reading: "あるきます。",
          meaning: "Berjalan."
        },
        {
          imageDescription: "Seseorang menurunkan badan lalu duduk di kursi.",
          why: "Gerakan dari berdiri menjadi duduk.",
          japanese: "座ります。",
          reading: "すわります。",
          meaning: "Duduk."
        },
        {
          imageDescription: "Seseorang bangkit dari kursi.",
          why: "Gerakan dari duduk menjadi berdiri.",
          japanese: "立ちます。",
          reading: "たちます。",
          meaning: "Berdiri."
        },
        {
          imageDescription: "Seekor burung mengepakkan sayap dan terbang.",
          why: "Gerakan terbang di udara.",
          japanese: "飛びます。",
          reading: "とびます。",
          meaning: "Terbang."
        },
        {
          imageDescription: "Seseorang bersantai di kursi panjang sambil mendengarkan musik.",
          why: "Sedang beristirahat, bukan tidur.",
          japanese: "休みます。",
          reading: "やすみます。",
          meaning: "Beristirahat."
        },
        {
          imageDescription: "Seseorang membuang benda kecil ke tempat sampah.",
          why: "Benda dibuang karena tidak diperlukan.",
          japanese: "捨てます。",
          reading: "すてます。",
          meaning: "Membuang."
        },
        {
          imageDescription: "Seseorang sampai di persimpangan lalu berbelok.",
          why: "Mengubah arah ketika berjalan.",
          japanese: "曲がります。",
          reading: "まがります。",
          meaning: "Belok."
        },
        {
          imageDescription: "Seseorang mengobrak-abrik tas karena tidak menemukan sebuah barang.",
          why: "Mencari sesuatu yang tidak ditemukan.",
          japanese: "探します。",
          reading: "さがします。",
          meaning: "Mencari."
        }
      ]
    },
    {
      id: "common_collocations",
      category: "Benda + kata kerja yang sering berpasangan",
      meaning: "Kolokasi verba transitif dan intransitif yang umum dalam kehidupan sehari-hari.",
      situations: [
        {
          imageDescription: "Seseorang kehilangan dompet dan tidak tahu dompetnya berada di mana.",
          why: "なくします sering dipakai untuk barang yang hilang karena kita kehilangan barang tersebut.",
          japanese: "財布をなくします。",
          reading: "さいふを なくします。",
          meaning: "Kehilangan dompet."
        },
        {
          imageDescription: "Seseorang berjalan dari satu sisi jembatan ke sisi lainnya.",
          why: "渡ります digunakan ketika menyeberangi jembatan atau jalan.",
          japanese: "橋を渡ります。",
          reading: "はしを わたります。",
          meaning: "Menyeberangi jembatan."
        },
        {
          imageDescription: "Seseorang memutar tuas atau lever sebuah alat.",
          why: "回します berarti memutar sesuatu secara aktif.",
          japanese: "レバーを回します。",
          reading: "レバーを まわします。",
          meaning: "Memutar tuas."
        },
        {
          imageDescription: "Sebuah pintu dalam keadaan tertutup.",
          why: "閉まります adalah verba intransitif: pintunya yang menutup/tertutup.",
          japanese: "ドアが閉まります。",
          reading: "ドアが しまります。",
          meaning: "Pintu menutup."
        },
        {
          imageDescription: "Lampu atau listrik menyala.",
          why: "つきます digunakan ketika lampu/listrik menyala.",
          japanese: "電気がつきます。",
          reading: "でんきが つきます。",
          meaning: "Lampu/listrik menyala."
        },
        {
          imageDescription: "Setelah membayar, seseorang menerima uang kembalian lalu membaginya.",
          why: "分けます berarti membagi sesuatu menjadi beberapa bagian.",
          japanese: "お釣りを分けます。",
          reading: "おつりを わけます。",
          meaning: "Membagi uang kembalian."
        },
        {
          imageDescription: "Orang-orang mengantre dan urutannya menjadi tersusun.",
          why: "並びます berarti berbaris atau mengantre.",
          japanese: "お客さんが並びます。",
          reading: "おきゃくさんが ならびます。",
          meaning: "Para pelanggan mengantre."
        },
        {
          imageDescription: "Seseorang sedang membuat kue.",
          why: "焼き菓子 dan kue sering menggunakan 焼く untuk proses memanggang.",
          japanese: "ケーキを焼きます。",
          reading: "ケーキを やきます。",
          meaning: "Memanggang kue."
        }
      ]
    },
    {
      id: "weather",
      category: "Cuaca dan bunyi keadaan (Onomatopoeia)",
      meaning: "Menggambarkan musim, fenomena alam, dan tiruan bunyi cuaca (goro-goro, pika, byu-byu, za-za).",
      situations: [
        {
          imageDescription: "Musim hujan pada bulan Juni; hujan turun hampir setiap hari.",
          why: "梅雨 adalah musim hujan di Jepang.",
          japanese: "6月、梅雨に入りました。毎日、雨が降っています。",
          reading: "ろくがつ、つゆに はいりました。まいにち、あめが ふっています。",
          meaning: "Bulan Juni memasuki musim hujan. Setiap hari hujan turun."
        },
        {
          imageDescription: "Sore hari terjadi badai petir. Terdengar suara guntur yang keras.",
          why: "ゴロゴロ menggambarkan suara gemuruh guntur.",
          japanese: "雷がゴロゴロ鳴っています。",
          reading: "かみなりが ゴロゴロ なっています。",
          meaning: "Guntur sedang bergemuruh."
        },
        {
          imageDescription: "Kilat tiba-tiba menyambar dan langit terlihat terang sesaat.",
          why: "ピカッ menggambarkan kilatan cahaya yang terjadi sesaat.",
          japanese: "稲妻がピカッと光りました。",
          reading: "いなずまが ピカッと ひかりました。",
          meaning: "Kilat menyambar/berkilat."
        },
        {
          imageDescription: "Bulan September, topan datang dan angin bertiup sangat kuat.",
          why: "ビュービュー menggambarkan bunyi angin yang sangat kencang.",
          japanese: "強い風がビュービュー吹いています。",
          reading: "つよい かぜが ビュービュー ふいています。",
          meaning: "Angin kencang sedang bertiup menderu."
        },
        {
          imageDescription: "Saat topan, hujan turun sangat deras.",
          why: "ザーザー menggambarkan hujan deras yang turun terus-menerus.",
          japanese: "雨がザーザー降っています。",
          reading: "あめが ザーザー ふっています。",
          meaning: "Hujan turun sangat deras."
        },
        {
          imageDescription: "Musim dingin dan salju turun setiap hari sampai menumpuk tinggi.",
          why: "積もります berarti salju atau benda sejenis menumpuk.",
          japanese: "雪が降っています。もう1メートル積もりました。",
          reading: "ゆきが ふっています。もう いちメートル つもりました。",
          meaning: "Salju sedang turun. Sudah menumpuk setinggi satu meter."
        }
      ]
    },
    {
      id: "events_and_accidents",
      category: "Kejadian dan keadaan darurat",
      meaning: "Menyatakan situasi genting seperti bencana alam, kecelakaan, dan gangguan utilitas.",
      situations: [
        {
          imageDescription: "Tanah dan rumah berguncang kuat.",
          why: "Kejadian ketika permukaan tanah bergetar.",
          japanese: "地震です。",
          reading: "じしんです。",
          meaning: "Gempa bumi."
        },
        {
          imageDescription: "Dua mobil bertabrakan di jalan.",
          why: "Kecelakaan kendaraan.",
          japanese: "事故です。",
          reading: "じこです。",
          meaning: "Kecelakaan."
        },
        {
          imageDescription: "Angin dan hujan sangat kuat akibat badai tropis.",
          why: "Topan sering terjadi di Jepang pada musim tertentu.",
          japanese: "台風です。",
          reading: "たいふうです。",
          meaning: "Topan."
        },
        {
          imageDescription: "Rumah tidak mendapat aliran listrik sehingga lampu dan peralatan mati.",
          why: "Keadaan ketika suplai listrik berhenti.",
          japanese: "停電です。",
          reading: "ていでんです。",
          meaning: "Listrik padam."
        }
      ]
    },
    {
      id: "rules_manners",
      category: "ルール・マナー — Larangan",
      focus: ["Vてはいけません"],
      patternDetail: {
        form: "Vて + はいけません",
        meaning: "Tidak boleh melakukan V",
        example: "電車で携帯電話を使ってはいけません。",
        exampleMeaning: "Tidak boleh menggunakan telepon genggam di kereta."
      },
      meaning: "Aturan dan etika fasilitas umum dengan pola larangan.",
      situations: [
        {
          imageDescription: "Di suatu tempat terdapat tanda dilarang memotret.",
          why: "Ada aturan yang melarang penggunaan kamera.",
          japanese: "ここで写真を撮ってはいけません。",
          reading: "ここで しゃしんを とっては いけません。",
          meaning: "Tidak boleh mengambil foto di sini."
        },
        {
          imageDescription: "Ada jalan atau area dengan tanda dilarang masuk.",
          why: "Orang tidak diperbolehkan memasuki area tersebut.",
          japanese: "ここに入ってはいけません。",
          reading: "ここに はいっては いけません。",
          meaning: "Tidak boleh masuk ke sini."
        },
        {
          imageDescription: "Seseorang berenang di area yang memiliki tanda larangan berenang.",
          why: "Area tersebut berbahaya atau memang bukan area berenang.",
          japanese: "ここで泳いではいけません。",
          reading: "ここで およいでは いけません。",
          meaning: "Tidak boleh berenang di sini."
        },
        {
          imageDescription: "Seseorang membawa hewan peliharaan ke area dengan tanda larangan hewan.",
          why: "Hewan peliharaan tidak diizinkan masuk.",
          japanese: "ここにペットを連れて来てはいけません。",
          reading: "ここに ペットを つれてきては いけません。",
          meaning: "Tidak boleh membawa hewan peliharaan ke sini."
        },
        {
          imageDescription: "Di stasiun seseorang hampir melewati area yang tidak boleh dimasuki.",
          why: "Aturan fasilitas umum harus dipatuhi demi keamanan.",
          japanese: "ここから入ってはいけません。",
          reading: "ここから はいっては いけません。",
          meaning: "Tidak boleh masuk dari sini."
        }
      ]
    }
  ],
  "quickReference": [
    {
      "condition": "Melihat benda berada dalam suatu keadaan",
      "use": "〜ています",
      "example": "コップが汚れています。",
      "meaning": "Gelasnya kotor."
    },
    {
      "condition": "Ada masalah dan ingin menawarkan pilihan lain",
      "use": "〜ませんか",
      "example": "バスで行きませんか。",
      "meaning": "Bagaimana kalau pergi naik bus?"
    },
    {
      "condition": "Mengatakan larangan/aturan",
      "use": "〜てはいけません",
      "example": "ここで泳いではいけません。",
      "meaning": "Tidak boleh berenang di sini."
    },
    {
      "condition": "Hujan turun",
      "use": "雨が降ります",
      "example": "雨が降っています。",
      "meaning": "Sedang turun hujan."
    },
    {
      "condition": "Angin bertiup",
      "use": "風が吹きます",
      "example": "強い風が吹いています。",
      "meaning": "Angin kencang sedang bertiup."
    },
    {
      "condition": "Orang-orang mengantre",
      "use": "並びます",
      "example": "お客さんが並んでいます。",
      "meaning": "Para pelanggan sedang mengantre."
    },
    {
      "condition": "Mencari barang yang tidak ditemukan",
      "use": "探します",
      "example": "財布を探しています。",
      "meaning": "Sedang mencari dompet."
    },
    {
      "condition": "Kehilangan barang",
      "use": "なくします",
      "example": "財布をなくしました。",
      "meaning": "Saya kehilangan dompet."
    }
  ]
};

export const situasiPages: SituasiPage[] = [situasiPage1, situasiPage2];

// Backwards compatibility
export const situasiData = situasiPage1;
