import { DEKIRU_KANJI_DICT } from '../utils/dekiruFurigana';
import { DEKIRU_SENTENCE_TRANSLATIONS } from './dekiruTranslations';

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

export interface WordUsage {
  meaning: string;
  usedWhen: string;
  example?: string;
}

/**
 * Comprehensive dictionary explaining what each word/phrase means,
 * when it is used ("dipake dikapan"), and sample usages.
 */
export const WORD_USAGE_GUIDE: Record<string, WordUsage> = {
  'これ': {
    meaning: 'ini (kata ganti benda)',
    usedWhen: 'menunjuk benda fisik konkret dekat pembicara dan berdiri sendiri tanpa kata benda setelahnya',
    example: 'これは本です (Ini adalah buku)',
  },
  'この': {
    meaning: '... ini (kata penunjuk sifat)',
    usedWhen: 'menunjuk benda/orang dekat pembicara dan WAJIB langsung diikuti kata benda di depannya',
    example: 'この本は面白いです (Buku ini menarik)',
  },
  'それ': {
    meaning: 'itu (kata ganti benda dekat lawan bicara)',
    usedWhen: 'menunjuk benda fisik konkret dekat lawan bicara dan berdiri sendiri tanpa kata benda',
    example: 'それは何ですか (Itu apa?)',
  },
  'その': {
    meaning: '... itu (dekat lawan bicara)',
    usedWhen: 'menunjuk benda dekat lawan bicara dan WAJIB langsung menempel di depan kata benda',
    example: 'その傘は私のです (Payung itu milik saya)',
  },
  'あれ': {
    meaning: 'itu (kata ganti benda jauh)',
    usedWhen: 'menunjuk benda fisik yang posisinya jauh dari pembicara maupun lawan bicara secara mandiri',
    example: 'あれは病院です (Itu di sana adalah rumah sakit)',
  },
  'あの': {
    meaning: '... itu (jauh dari kedua pihak)',
    usedWhen: 'menunjuk benda/orang jauh dan WAJIB langsung menempel di depan kata benda',
    example: 'あの人は誰ですか (Orang di sana itu siapa?)',
  },
  'ここ': {
    meaning: 'di sini (penunjuk tempat)',
    usedWhen: 'menunjukkan lokasi tempat/ruangan yang berada di dekat posisi pembicara',
    example: 'トイレはここです (Toilet ada di sini)',
  },
  'そこ': {
    meaning: 'di situ (penunjuk tempat)',
    usedWhen: 'menunjukkan lokasi tempat/ruangan yang berada di dekat posisi lawan bicara',
    example: '事務所はそこです (Kantor ada di situ)',
  },
  'あそこ': {
    meaning: 'di sana (penunjuk tempat jauh)',
    usedWhen: 'menunjukkan lokasi tempat/ruangan yang posisinya jauh dari pembicara maupun lawan bicara',
    example: '食堂はあそこです (Kantin ada di sebelah sana)',
  },
  'どこ': {
    meaning: 'di mana',
    usedWhen: 'menanyakan lokasi tempat, ruangan, atau posisi fasilitas keberadaan sesuatu',
    example: '受付はどこですか (Meja resepsionis di mana?)',
  },
  'だれ': {
    meaning: 'siapa',
    usedWhen: 'menanyakan nama atau identitas seseorang (manusia)',
    example: 'あの人はだれですか (Orang itu siapa?)',
  },
  'なに': {
    meaning: 'apa',
    usedWhen: 'menanyakan benda, objek, atau hal umum yang belum diketahui',
    example: 'これは何ですか (Ini apa?)',
  },
  'なん': {
    meaning: 'apa',
    usedWhen: 'menanyakan tindakan sebelum をします (何をしますか) atau sebelum desu/angka (何時, 何曜日)',
    example: '何をしますか (Mau melakukan apa?)',
  },
  'いつ': {
    meaning: 'kapan',
    usedWhen: 'menanyakan keterangan waktu seperti jam, hari, tanggal, atau bulan',
    example: 'いつ日本へ来ましたか (Kapan datang ke Jepang?)',
  },
  'どちら': {
    meaning: 'sebelah mana / yang mana (sopan)',
    usedWhen: 'menanyakan arah/lokasi secara santun atau memilih di antara 2 pilihan alternatif',
    example: 'お国はどちらですか (Negara asal Anda di mana?)',
  },
  'どの': {
    meaning: '... yang mana',
    usedWhen: 'menanyakan pilihan dari 3 hal atau lebih dan WAJIB menempel langsung di depan kata benda',
    example: 'どの鍵ですか (Kunci yang mana?)',
  },
  'どれ': {
    meaning: 'yang mana',
    usedWhen: 'memilih satu dari 3 objek atau lebih secara mandiri tanpa kata benda',
    example: 'あなたのかばんはどれですか (Tas Anda yang mana?)',
  },
  'どんな': {
    meaning: '... yang seperti apa / bagaimana',
    usedWhen: 'menanyakan sifat, ciri khas, deskripsi, atau kategori suatu kata benda',
    example: 'どんな町ですか (Kota yang seperti apa?)',
  },
  'どのくらい': {
    meaning: 'berapa lama / seberapa banyak',
    usedWhen: 'menanyakan estimasi durasi waktu tempuh, lama aktivitas, atau kuantitas',
    example: '東京までどのくらいかかりますか (Sampai Tokyo memakan waktu berapa lama?)',
  },
  '会社員': {
    meaning: 'karyawan kantor / pegawai swasta',
    usedWhen: 'menyebutkan jenis profesi/pekerjaan secara umum tanpa menyebut nama instansi/perusahaan',
    example: '私は会社員です (Saya adalah karyawan swasta)',
  },
  '社員': {
    meaning: 'karyawan (dari perusahaan tertentu)',
    usedWhen: 'menyebutkan status kepegawaian yang terikat pada nama perusahaan tertentu (berpola: [Nama Perusahaan]の社員)',
    example: 'トヨタの社員です (Saya karyawan Toyota)',
  },
  '銀行員': {
    meaning: 'pegawai bank',
    usedWhen: 'menyebutkan profesi seseorang yang bekerja di institusi perbankan',
    example: '兄は銀行員です (Kakak laki-laki saya pegawai bank)',
  },
  '医者': {
    meaning: 'dokter',
    usedWhen: 'menyebutkan profesi medis di klinik atau rumah sakit',
    example: '病院の医者です (Dokter di rumah sakit)',
  },
  '国': {
    meaning: 'negara (biasa)',
    usedWhen: 'menyebutkan negara secara objektif dalam konteks umum atau pihak ketiga',
    example: '外国の友達 (Teman luar negeri)',
  },
  'お国': {
    meaning: 'negara asal Anda (sopan)',
    usedWhen: 'menanyakan negara asal kepada lawan bicara secara santun dengan awalan penghormatan お-',
    example: 'お国はどちらですか (Negara asal Anda di mana?)',
  },
  '行きます': {
    meaning: 'pergi (positif)',
    usedWhen: 'menyatakan kesediaan atau tindakan pergi menjauhi tempat saat ini menuju lokasi tujuan',
    example: '明日、京都へ行きます (Besok saya pergi ke Kyoto)',
  },
  '行きません': {
    meaning: 'tidak pergi (negatif)',
    usedWhen: 'menolak ajakan atau menyatakan tidak akan melakukan aksi pergi',
    example: 'いいえ、行きません (Tidak, saya tidak pergi)',
  },
  '行きました': {
    meaning: 'telah pergi (lampau)',
    usedWhen: 'menyatakan aksi pergi yang sudah selesai terlaksana di waktu lampau',
    example: 'きのう図書館へ行きました (Kemarin sudah pergi ke perpustakaan)',
  },
  '行きませんでした': {
    meaning: 'tidak pergi (negatif lampau)',
    usedWhen: 'menyatakan bahwa di masa lampau tindakan pergi tidak dilakukan sama sekali',
    example: 'どこへも行きませんでした (Tidak pergi ke mana pun)',
  },
  '食べます': {
    meaning: 'makan',
    usedWhen: 'mengonsumsi makanan padat (berpasangan dengan objek makanan + を)',
    example: 'パンを食べます (Makan roti)',
  },
  '食べたほうがいい': {
    meaning: 'sebaiknya makan (saran positif)',
    usedWhen: 'memberikan anjuran atau saran medis/kesehatan positif di akhir kalimat agar makan',
    example: '薬を飲む前に、ご飯を食べたほうがいいです (Sebelum minum obat, sebaiknya makan)',
  },
  '食べないで': {
    meaning: 'tanpa makan / jangan makan',
    usedWhen: 'meminta seseorang tidak makan sesuatu atau melakukan aktivitas tanpa makan terlebih dahulu',
    example: '甘いものを食べないでください (Tolong jangan makan yang manis-manis)',
  },
  '食べてから': {
    meaning: 'setelah makan (urutan aktivitas)',
    usedWhen: 'menghubungkan dua tindakan berurutan: aksi kedua dilakukan setelah tuntas makan',
    example: 'ご飯を食べてから、薬を飲みます (Setelah makan, minum obat)',
  },
  '飲みます': {
    meaning: 'minum (positif)',
    usedWhen: 'mengonsumsi cairan atau menelan obat (berpasangan dengan 水, お茶, 薬)',
    example: '薬を飲みます (Minum obat)',
  },
  '飲みません': {
    meaning: 'tidak minum (negatif kebiasaan/penolakan)',
    usedWhen: 'menyatakan kebiasaan tidak meminum sesuatu atau menolak minuman',
    example: 'お酒は飲みません (Saya tidak minum alkohol)',
  },
  '飲まないでください': {
    meaning: 'tolong jangan minum (larangan halus)',
    usedWhen: 'memberikan instruksi larangan halus kepada orang lain agar tidak meminum cairan tertentu',
    example: '冷たい水を飲まないでください (Tolong jangan minum air dingin)',
  },
  '飲んでいません': {
    meaning: 'belum minum (belum selesai)',
    usedWhen: 'menyatakan bahwa hingga saat ini aksi minum obat/air belum tuntas dilakukan [まだ ＋ V-ていません]',
    example: 'まだ薬を飲んでいません (Belum minum obat)',
  },
  '読みます': {
    meaning: 'membaca',
    usedWhen: 'membaca media cetak atau teks tertulis (berpasangan dengan 本, 新聞, 雑誌)',
    example: '新聞を読みます (Membaca koran)',
  },
  '聞きます': {
    meaning: 'mendengarkan / bertanya',
    usedWhen: 'menyimak audio, musik, radio (音楽, CD) atau menanyakan informasi ke orang lain',
    example: 'CDを聞きます (Mendengarkan CD)',
  },
  '寝ます': {
    meaning: 'tidur',
    usedWhen: 'melakukan istirahat tidur pada malam/siang hari (dipasangkan dengan jam istirahat malam)',
    example: '11時に寝ます (Tidur pada jam 11)',
  },
  '起きます': {
    meaning: 'bangun tidur',
    usedWhen: 'terbangun dari tidur pada pagi hari (dipasangkan dengan jam bangun: 6時に起きます)',
    example: '毎朝7時に起きます (Setiap pagi bangun jam 7)',
  },
  '来ます': {
    meaning: 'datang',
    usedWhen: 'bergerak mendekat ke arah tempat pembicara berada (berpasangan dengan arah へ/に)',
    example: '友達がうちへ来ます (Teman datang ke rumah saya)',
  },
  '働きます': {
    meaning: 'bekerja',
    usedWhen: 'melakukan aktivitas profesi atau dinas kerja di tempat kerja (berpasangan dengan [Tempat]で)',
    example: '会社で働きます (Bekerja di kantor/perusahaan)',
  },
  '買います': {
    meaning: 'membeli',
    usedWhen: 'melakukan transaksi belanja barang dagangan di toko atau pasar (berpasangan dengan で dan を)',
    example: 'スーパーで果物を買います (Membeli buah di supermarket)',
  },
  '見ます': {
    meaning: 'melihat / menonton',
    usedWhen: 'menyaksikan tayangan visual, foto, pameran, film, atau televisi (berpasangan dengan テレビ, 映画, 写真)',
    example: '映画を見ます (Menonton film)',
  },
  '勉強します': {
    meaning: 'belajar',
    usedWhen: 'mempelajari materi pelajaran atau bahasa asing (contoh: 日本語を勉強します)',
    example: '日本語を勉強します (Belajar bahasa Jepang)',
  },
  '散歩': {
    meaning: 'jalan-jalan santai',
    usedWhen: 'melakukan aktivitas santai berjalan kaki di taman atau luar ruangan (公園を散歩します)',
    example: '朝、公園を散歩します (Pagi hari jalan-jalan di taman)',
  },
  '借ります': {
    meaning: 'meminjam',
    usedWhen: 'meminjam barang atau uang dari pihak lain untuk dikembalikan nanti',
    example: '友達に本を借ります (Meminjam buku dari teman)',
  },
  '吸います': {
    meaning: 'merokok / menghisap',
    usedWhen: 'menghisap asap rokok (タバコを吸います) atau menghirup udara segar',
    example: 'ここでタバコを吸ってはいけません (Dilarang merokok di sini)',
  },
  '座ります': {
    meaning: 'duduk',
    usedWhen: 'mengambil posisi duduk di kursi, bangku, atau lantai (いすに座ります)',
    example: 'ここに座ってもいいですか (Bolehkah saya duduk di sini?)',
  },
  '待ちます': {
    meaning: 'menunggu',
    usedWhen: 'menanti kedatangan seseorang atau giliran (駅で友達を待ちます)',
    example: '駅で友達を待ちます (Menunggu teman di stasiun)',
  },
  '押します': {
    meaning: 'menekan / memencet',
    usedWhen: 'memencet tombol mesin, lift, tuts, atau bel (ボタンを押します)',
    example: 'このボタンを押してください (Silakan tekan tombol ini)',
  },
  '曲がります': {
    meaning: 'berbelok',
    usedWhen: 'mengubah arah pergerakan ke kanan atau ke kiri saat menavigasi jalan raya/persimpangan (右へ曲がります)',
    example: '次の角を右へ曲がります (Belok kanan di tikungan berikutnya)',
  },
  '渡ります': {
    meaning: 'menyeberang',
    usedWhen: 'melintasi jalan raya atau jembatan dari satu sisi ke seberang (橋を渡ります, 道を渡ります)',
    example: '橋を渡ります (Menyeberangi jembatan)',
  },
  '降ります': {
    meaning: 'turun (dari kendaraan)',
    usedWhen: 'keluar atau turun dari sarana transportasi seperti kereta, bus, taksi (電車を降ります)',
    example: '次の駅で降ります (Turun di stasiun berikutnya)',
  },
  '置いてもいいですか': {
    meaning: 'bolehkah meletakkan barang di sini (meminta izin)',
    usedWhen: 'meminta izin kepada orang lain untuk menaruh barang di suatu tempat [V-てもいいですか]',
    example: 'ここに荷物を置いてもいいですか (Bolehkah saya menaruh barang di sini?)',
  },
  '置かないでください': {
    meaning: 'tolong jangan meletakkan barang di sini (larangan halus)',
    usedWhen: 'memberikan permohonan larangan sopan agar orang lain tidak menaruh barang sembarangan [V-ないでください]',
    example: 'ここに荷物を置かないでください (Tolong jangan letakkan barang di sini)',
  },
  '入ってきて': {
    meaning: 'masuklah ke mari',
    usedWhen: 'mengajak atau mempersilakan seseorang masuk ke dalam ruangan [V-てきてください]',
    example: 'どうぞ部屋に入ってきてください (Silakan masuk ke dalam ruangan)',
  },
  '入っても': {
    meaning: 'meskipun masuk / bolehkah masuk',
    usedWhen: 'meminta izin untuk memasuki suatu area/ruangan [V-てもいいですか]',
    example: '中に入ってもいいですか (Bolehkah saya masuk ke dalam?)',
  },
  '入らないで': {
    meaning: 'jangan masuk (larangan halus)',
    usedWhen: 'meminta atau melarang seseorang agar tidak memasuki area tertentu demi keamanan [V-ないでください]',
    example: '危ないですから入らないでください (Karena berbahaya tolong jangan masuk)',
  },
  '弾く': {
    meaning: 'memainkan (alat musik petik, bentuk kamus)',
    usedWhen: 'menyatakan kemampuan atau hobi memainkan gitar/piano dalam bentuk kamus [V-辞書形]',
    example: 'ギターを弾くことができます (Bisa memainkan gitar)',
  },
  '弾いた': {
    meaning: 'telah memainkan gitar (lampau)',
    usedWhen: 'menyatakan telah memainkan instrumen musik atau pola penggabungan aktivitas [〜たり〜たりします]',
    example: 'ギターを弾いたり、歌を歌ったりしました (Bermain gitar, bernyanyi, dll)',
  },
  '歌う': {
    meaning: 'menyanyi (bentuk kamus)',
    usedWhen: 'menyatakan hobi bernyanyi dalam bentuk kamus kasual',
    example: '歌を歌うのが好きです (Suka menyanyikan lagu)',
  },
  '歌った': {
    meaning: 'telah menyanyi (lampau)',
    usedWhen: 'menyatakan aksi menyanyi di waktu lampau atau pola ragam aktivitas [〜たり〜たりします]',
    example: 'カラオケで歌った (Telah menyanyi di karaoke)',
  },
  '熱': {
    meaning: 'demam / suhu tubuh tinggi',
    usedWhen: 'menyatakan kondisi suhu tubuh naik saat jatuh sakit (熱があります = ada demam)',
    example: '熱がありますから、病院へ行きます (Karena demam, saya pergi ke RS)',
  },
  '食欲': {
    meaning: 'nafsu makan',
    usedWhen: 'menyatakan selera makan dalam pola keadaan fisik (食欲がありません = tidak ada nafsu makan)',
    example: '風邪で食欲がありません (Karena flu tidak ada nafsu makan)',
  },
  'ひきます': {
    meaning: 'terkena / masuk angin',
    usedWhen: 'kolokasi khusus saat terjangkit penyakit flu/masuk angin (風邪をひきます)',
    example: '風邪をひきました (Saya masuk angin/flu)',
  },
  '父': {
    meaning: 'ayah kandung sendiri',
    usedWhen: 'menyebut ayah kandung sendiri saat berbicara dengan orang lain/orang luar',
    example: '私の父は会社員です (Ayah saya adalah karyawan swasta)',
  },
  'お父さん': {
    meaning: 'ayah (orang lain / panggilan langsung)',
    usedWhen: 'menyebut ayah orang lain atau memanggil ayah sendiri secara langsung di rumah',
    example: '田中さんのお父さん (Ayah dari Tanaka-san)',
  },
  'あげました': {
    meaning: 'memberi (kepada orang lain)',
    usedWhen: 'pembicara atau keluarga pembicara memberikan hadiah/benda kepada pihak lain',
    example: '友達にプレゼントをあげました (Saya memberi kado kepada teman)',
  },
  'くれました': {
    meaning: 'memberi kepada saya / keluarga saya',
    usedWhen: 'orang lain memberikan hadiah/sesuatu kepada diri pembicara atau keluarga pembicara',
    example: '先生が私に本をくれました (Guru memberikan buku kepada saya)',
  },
  'もらいました': {
    meaning: 'menerima (dari pihak lain)',
    usedWhen: 'pembicara menerima barang atau kebaikan dari orang lain',
    example: '母からプレゼントをもらいました (Saya menerima hadiah dari ibu)',
  },
  'じゃ': {
    meaning: 'kalau begitu',
    usedWhen: 'mengambil kesimpulan, menutup perbincangan, atau menyepakati tawaran perpisahan secara alami',
    example: 'じゃ、また来週 (Kalau begitu, sampai jumpa minggu depan)',
  },
  'それから': {
    meaning: 'setelah itu / kemudian',
    usedWhen: 'menghubungkan dua urutan tindakan secara kronologis berurutan',
    example: '宿題をしました。それから、テレビを見ました (Mengerjakan PR. Setelah itu, nonton TV)',
  },
  'いいですね': {
    meaning: 'wah ide bagus / kedengarannya menyenangkan',
    usedWhen: 'merespons setuju dengan antusias terhadap ajakan atau usulan rencana dari lawan bicara',
    example: 'A: 一緒に映画を見ませんか。 B: いいですね (A: Mau nonton film bareng? B: Wah ide bagus!)',
  },
  'どう': {
    meaning: 'bagaimana',
    usedWhen: 'menanyakan kesan, pendapat, atau menawarkan suatu opsi (~は どうですか)',
    example: 'お茶は どうですか (Bagaimana kalau minum teh?)',
  },
  'はじめまして': {
    meaning: 'senang berkenalan dengan Anda',
    usedWhen: 'kalimat salam pembuka yang diucapkan pertama kali saat baru bertatap muka saling berkenalan',
    example: 'はじめまして、田中です (Salam kenal, saya Tanaka)',
  },
  'こちらこそ、よろしくお願いします': {
    meaning: 'sama-sama, saya yang mohon bantuan/bimbingannya',
    usedWhen: 'membalas ucapan salam perkenalan "Douzo yoroshiku onegaishimasu" dari lawan bicara',
    example: 'こちらこそ、よろしくお願いします (Sama-sama, mohon kerja samanya)',
  },
  'すみません。注文をお願いします': {
    meaning: 'permisi, tolong kami mau memesan makanan',
    usedWhen: 'memanggil staf restoran atau kafe untuk memesan hidangan menu',
    example: 'すみません。注文をお願いします (Permisi, tolong kami mau pesan)',
  },
  'まだ': {
    meaning: 'belum / masih',
    usedWhen: 'menyatakan bahwa suatu tindakan belum tuntas terlaksana hingga saat ini (diikuti bentuk belum selesai [まだ ＋ V-ていません])',
    example: 'まだ昼ご飯を食べていません (Belum makan siang)',
  },
  'もう': {
    meaning: 'sudah',
    usedWhen: 'menyatakan bahwa suatu tindakan telah selesai dikerjakan di waktu lampau atau saat ini',
    example: 'もう宿題をしました (Sudah mengerjakan PR)',
  },
  'たとき': {
    meaning: 'ketika / saat telah selesai melakukan',
    usedWhen: 'klausul waktu di mana tindakan pertama sudah selesai sebelum tindakan pada kalimat utama berlangsung [V-た ＋ とき]',
    example: '国へ帰ったとき、お土産を買いました (Saat pulang ke negara asal, saya membeli oleh-oleh)',
  },
  'なとき': {
    meaning: 'saat / ketika dalam kondisi (kata sifat-na)',
    usedWhen: 'menyambungkan kata sifat-na dengan kata waktu とき (contoh: 暇なとき, 静かなとき)',
    example: '暇なとき、本を読みます (Saat senggang, saya membaca buku)',
  },
  'のとき': {
    meaning: 'saat / ketika pada masa (kata benda)',
    usedWhen: 'menyambungkan kata benda penunjuk fase usia atau masa dengan とき (contoh: 子どものとき, 学生のとき)',
    example: '子どものとき、よく川で泳ぎました (Saat masih anak-anak, sering berenang di sungai)',
  },
  'した': {
    meaning: 'melakukan (lampau)',
    usedWhen: 'pola anjuran positif [V-た ほうがいいです] (contoh: 早く寝たほうがいいです)',
    example: '早く寝たほうがいいです (Sebaiknya tidur lebih awal)',
  },
  'しない': {
    meaning: 'tidak melakukan',
    usedWhen: 'pola anjuran negatif [V-ない ほうがいいです] untuk menghindari perbuatan berisiko',
    example: '無理をしないほうがいいです (Sebaiknya tidak memaksakan diri)',
  },
  'な': {
    meaning: 'penghubung kata sifat-na',
    usedWhen: 'menghubungkan kata sifat-na dengan nomina atau kata waktu とき (contoh: 暇なとき)',
    example: '暇なとき (Saat senggang)',
  },
  'の': {
    meaning: 'penghubung kata benda / kepemilikan',
    usedWhen: 'menghubungkan kata benda dengan kata benda lain atau とき (contoh: 中学生のとき)',
    example: '中学生のとき (Saat siswa SMP)',
  },
  '上': {
    meaning: 'atas / di atas',
    usedWhen: 'menyatakan letak benda berada di bagian atas atau di permukaan atas objek lain',
    example: '机の上にノートがあります (Di atas meja ada buku catatan)',
  },
  '下': {
    meaning: 'bawah / di bawah / kolong',
    usedWhen: 'menyatakan posisi benda berada di kolong atau bagian bawah objek lain',
    example: 'いすの下に猫がいます (Di bawah kursi ada kucing)',
  },
  '前': {
    meaning: 'depan / di depan',
    usedWhen: 'menyatakan letak posisi di hadapan atau sisi depan suatu objek/gedung',
    example: '駅の前にポストがあります (Di depan stasiun ada kotak pos)',
  },
  '後ろ': {
    meaning: 'belakang / di belakang',
    usedWhen: 'menyatakan posisi di sisi punggung atau bagian belakang gedung/benda',
    example: '銀行の後ろに駐車場があります (Di belakang bank ada tempat parkir)',
  },
  '間': {
    meaning: 'antara / di antara dua hal',
    usedWhen: 'menyatakan posisi terjepit persis di antara dua objek atau dua lokasi',
    example: '本屋と花屋の間にカフェがあります (Di antara toko buku dan toko bunga ada kafe)',
  },
  '中': {
    meaning: 'dalam / di dalam',
    usedWhen: 'menyatakan posisi berada di bagian internal suatu ruangan, gedung, atau wadah tertutup',
    example: '部屋の中に誰かがいます (Di dalam kamar ada seseorang)',
  },
  '隣': {
    meaning: 'sebelah / samping menempel langsung',
    usedWhen: 'menyatakan posisi dua hal sejenis yang berdampingan menempel langsung di samping',
    example: 'スーパーの隣に薬局があります (Di sebelah supermarket ada apotek)',
  },
  '近く': {
    meaning: 'dekat / di sekitar',
    usedWhen: 'menyatakan area lingkungan sekitar yang berjarak dekat tanpa harus menempel langsung',
    example: '学校の近くにコンビニがあります (Di dekat sekolah ada minimarket)',
  },
  'あります': {
    meaning: 'ada (benda mati, barang, toko, tempat, bangunan, tanaman)',
    usedWhen: 'menyatakan keberadaan barang mati, perabot, toko, gedung, atau tanaman yang tidak bernyawa',
    example: '公園に桜の木があります (Di taman ada pohon sakura)',
  },
  'います': {
    meaning: 'ada (makhluk hidup bernyawa: manusia dan hewan)',
    usedWhen: 'menyatakan keberadaan manusia, orang, atau binatang yang bernyawa dan bergerak mandiri',
    example: '教室に学生がいます (Di kelas ada siswa)',
  },
  '作ってはいけません': {
    meaning: 'dilarang membuat',
    usedWhen: 'menyatakan aturan larangan keras terhadap tindakan membuat sesuatu [〜てはいけません]',
    example: 'ここで料理を作ってはいけません (Dilarang memasak di sini)',
  },
  '書かなければなりません': {
    meaning: 'harus / wajib menulis',
    usedWhen: 'menyatakan kewajiban mutlak untuk menuliskan sesuatu pada formulir/dokumen resmi [〜なければなりません]',
    example: '名前を書かなければなりません (Harus menuliskan nama)',
  },
  '参加しなくてもいいです': {
    meaning: 'boleh tidak ikut / tidak wajib berpartisipasi',
    usedWhen: 'memberikan dispensasi kelonggaran bahwa partisipasi tidak bersifat wajib [〜なくてもいいです]',
    example: '体調が悪い人は参加しなくてもいいです (Orang yang kurang sehat boleh tidak ikut)',
  },
  '変だと思いました': {
    meaning: 'saya pikir / berpendapat aneh',
    usedWhen: 'menyatakan kesan, dugaan, atau opini subjektif pribadi di masa lalu [〜と思いました]',
    example: 'その話は少し変だと思いました (Saya pikir cerita itu agak aneh)',
  },
  'なければなりません': {
    meaning: 'harus / wajib (kewajiban mutlak)',
    usedWhen: 'menyatakan aturan formal atau keharusan mutlak yang wajib dipatuhi tanpa pengecualian',
    example: '毎日薬を飲まなければなりません (Harus minum obat setiap hari)',
  },
  'てはいけません': {
    meaning: 'dilarang keras / tidak boleh',
    usedWhen: 'menyatakan larangan tegas berdasarkan hukum, tata tertib, atau aturan keselamatan',
    example: 'ここで写真を撮ってはいけません (Dilarang memotret di sini)',
  },
  'なくてもいいです': {
    meaning: 'boleh tidak / tidak harus (izin dispensasi)',
    usedWhen: 'memberikan kelonggaran bahwa tindakan tersebut tidak perlu dilakukan',
    example: '明日は来なくてもいいです (Besok tidak perlu datang)',
  },
  'ほうがいいです': {
    meaning: 'sebaiknya melakukan (saran/anjuran positif)',
    usedWhen: 'memberikan rekomendasi atau saran tindakan positif yang membawa manfaat baik [V-た ほうがいいです]',
    example: '病院へ行ったほうがいいです (Sebaiknya pergi ke rumah sakit)',
  },
  'ないほうがいいです': {
    meaning: 'sebaiknya tidak melakukan (saran negatif)',
    usedWhen: 'memberikan saran agar menghindari tindakan yang berisiko atau merugikan [V-ない ほうがいいです]',
    example: '無理をしないほうがいいです (Sebaiknya jangan memaksakan diri)',
  },
  'と思いました': {
    meaning: 'saya pikir / berpendapat (lampau)',
    usedWhen: 'mengungkapkan pemikiran, praduga, atau opini subjektif di masa lampau [〜と思いました]',
    example: '日本語の試験は易しいと思いました (Saya pikir ujian bahasa Jepang mudah)',
  },
};

// Curated question-specific rich explanations for Dekiru exams
export const DEKIRU_RICH_REGISTRY: Record<string, RichExplanationData> = {
  // === EXAM 1 SECTION 2 (Word Bank) ===
  '1-3-s2-q1': {
    questionTranslation: 'Membaca koran. / (Saya) membaca koran.',
    whyCorrect: '新聞 (shimbun) berarti koran. Pasangan kata kerja yang paling lazim dan alami untuk koran adalah 読みます (yomimasu = membaca), sehingga polanya menjadi 新聞を読みます.',
    whyIncorrect: [
      { text: 'a. 食べます', translation: 'makan', reason: 'Digunakan untuk: mengonsumsi makanan padat (contoh: パンを食べます). Pada kalimat ini salah karena koran (新聞) adalah media bacaan, bukan makanan.' },
      { text: 'b. 聞きます', translation: 'mendengarkan', reason: 'Digunakan untuk: menyimak audio, musik, atau suara (contoh: CDを聞きます). Pada kalimat ini salah karena koran dibaca dengan mata, bukan didengar.' },
      { text: 'c. 寝ます', translation: 'tidur', reason: 'Digunakan untuk: istirahat tidur di malam/siang hari (contoh: 11時に寝ます). Pada kalimat ini salah karena verba ini intransitif (tidak dapat mengambil objek koran を).' },
      { text: 'e. 来ます', translation: 'datang', reason: 'Digunakan untuk: pergerakan arah mendekat ke posisi pembicara (berpasangan dengan へ/に). Pada kalimat ini salah karena koran adalah objek bacaan, bukan tempat tujuan.' },
      { text: 'f. 働きます', translation: 'bekerja', reason: 'Digunakan untuk: aktivitas profesi dinas kerja di tempat kerja (berpasangan dengan で, contoh: 会社で働きます). Pada kalimat ini salah karena koran bukan tempat kerja melainkan media bacaan.' },
      { text: 'g. 買います', translation: 'membeli', reason: 'Digunakan untuk: transaksi berbelanja barang di toko (contoh: スーパーで買います). Pada konteks aktivitas harian bab 3, kolokasi paling lazim dan baku untuk koran adalah membaca (新聞を読みます).' },
    ],
    grammarPointDetail: 'Pola [Nomina (Objek) + を + Verba]: Menunjukkan tindakan yang dilakukan terhadap suatu objek langsung.',
    tips: ['Perhatikan objek sebelum partikel を (misal: 新聞 = koran). Cari kata kerja tindakan yang paling alami berpasangan dengan objek tersebut.'],
  },
  '1-3-s2-q2': {
    questionTranslation: 'Bekerja di perusahaan.',
    whyCorrect: '会社 (kaisha) adalah perusahaan, dan partikel で menandai tempat aktivitas kerja berlangsung. Kata kerja yang tepat adalah 働きます (hatarakimasu = bekerja).',
    whyIncorrect: [
      { text: 'a. 食べます', translation: 'makan', reason: 'Digunakan untuk: mengonsumsi makanan padat (contoh: ご飯を食べます). Pada kalimat ini salah karena 会社 (kantor/perusahaan) adalah institusi tempat kerja, bukan makanan.' },
      { text: 'b. 聞きます', translation: 'mendengarkan', reason: 'Digunakan untuk: mendengarkan suara/audio (contoh: 音楽を聞きます). Pada kalimat ini salah karena 会社 bukan media audio.' },
      { text: 'c. 寝ます', translation: 'tidur', reason: 'Digunakan untuk: istirahat tidur di rumah atau kamar (contoh: 部屋で寝ます). Pada kalimat ini salah karena perusahaan adalah tempat kerja, bukan tempat tidur biasa.' },
      { text: 'd. 読みます', translation: 'membaca', reason: 'Digunakan untuk: membaca teks atau media cetak bertulis (contoh: 本を読みます). Pada kalimat ini salah karena 会社 bukan teks bacaan.' },
      { text: 'e. 来ます', translation: 'datang', reason: 'Digunakan untuk: pergerakan perpindahan arah menuju tempat (menggunakan partikel へ/に: 会社へ来ます). Pada kalimat ini salah karena kalimat menggunakan partikel aktivitas dinamis で (会社で).' },
      { text: 'g. 買います', translation: 'membeli', reason: 'Digunakan untuk: transaksi berbelanja barang di toko (contoh: 店で買います). Pada kalimat ini salah karena aktivitas inti karyawan di perusahaan adalah bekerja (会社で働きます).' },
    ],
    grammarPointDetail: 'Pola [Tempat + で + Verba Aktivitas]: Partikel で menunjukkan tempat terjadinya suatu aksi dinamis.',
    tips: ['Jika ada [Tempat + で], carilah kata kerja aktivitas umum di tempat tersebut: 会社で働きます (bekerja di kantor/perusahaan).'],
  },
  '1-3-s2-q3': {
    questionTranslation: 'Mendengarkan CD. / Mendengarkan musik di CD.',
    whyCorrect: 'CD (shīdī) adalah media rekaman audio/musik. Aktivitas yang dilakukan terhadap CD adalah 聞きます (kikimasu = mendengarkan).',
    whyIncorrect: [
      { text: 'a. 食べます', translation: 'makan', reason: 'Digunakan untuk: mengonsumsi makanan padat. Pada kalimat ini salah karena kepingan CD bukan makanan.' },
      { text: 'c. 寝ます', translation: 'tidur', reason: 'Digunakan untuk: istirahat tidur. Pada kalimat ini salah karena tidur tidak memerlukan objek penderita CD を.' },
      { text: 'd. 読みます', translation: 'membaca', reason: 'Digunakan untuk: membaca teks buku/koran. Pada kalimat ini salah karena CD dinikmati dengan didengarkan suaranya, bukan dibaca teksnya.' },
      { text: 'e. 来ます', translation: 'datang', reason: 'Digunakan untuk: arah kedatangan perpindahan tempat (へ/に). Pada kalimat ini salah karena CD adalah objek langsung penderita (を).' },
      { text: 'f. 働きます', translation: 'bekerja', reason: 'Digunakan untuk: profesi kerja di tempat tertentu (で). Pada kalimat ini salah karena tidak cocok dipasangkan dengan objek CD.' },
      { text: 'g. 買います', translation: 'membeli', reason: 'Digunakan untuk: transaksi berbelanja barang di toko. Pada pengenalan aktivitas indra dasar di Bab 3, pasangan kolokasi baku untuk CD adalah didengarkan (CDを聞きます).' },
    ],
    grammarPointDetail: 'CDを聞きます = Mendengarkan CD/musik. CD berfungsi sebagai objek langsung dari kata kerja 聞きます.',
    tips: ['Pahami pasangan kata (kolokasi): CD → 聞きます, 新聞/本 → 読みます, ご飯/パン → 食べます.'],
  },
  '1-3-s2-q4': {
    questionTranslation: 'Makan roti.',
    whyCorrect: 'パン (pan) adalah roti (makanan). Kata kerja konsumsi makanan yang tepat adalah 食べます (tabemasu = makan).',
    whyIncorrect: [
      { text: 'b. 聞きます', translation: 'mendengarkan', reason: 'Digunakan untuk: menyimak audio atau musik. Pada kalimat ini salah karena roti tidak bersuara untuk didengarkan.' },
      { text: 'c. 寝ます', translation: 'tidur', reason: 'Digunakan untuk: istirahat tidur. Pada kalimat ini salah karena kata kerja tidur tidak memerlukan objek makanan を.' },
      { text: 'd. 読みます', translation: 'membaca', reason: 'Digunakan untuk: membaca teks/buku. Pada kalimat ini salah karena roti adalah bahan pangan untuk dikonsumsi, bukan dibaca.' },
      { text: 'e. 来ます', translation: 'datang', reason: 'Digunakan untuk: pergerakan arah mendekat (へ/に). Pada kalimat ini salah karena roti adalah barang konsumsi.' },
      { text: 'f. 働きます', translation: 'bekerja', reason: 'Digunakan untuk: dinas kerja di tempat kerja. Pada kalimat ini salah karena tidak berpasangan dengan makanan roti.' },
      { text: 'g. 買います', translation: 'membeli', reason: 'Digunakan untuk: transaksi belanja barang di toko. Meskipun roti bisa dibeli, pada bab aktivitas konsumsi harian dasar, kolokasi makan roti (パンを食べます) adalah pasangan verba utama.' },
    ],
    grammarPointDetail: 'Pola makanan: [Makanan + を + 食べます]. Contoh: ご飯を食べます (makan nasi), パンを食べます (makan roti).',
    tips: ['Ingat kata serapan パン (pan) dari bahasa Portugis pão yang berarti roti.'],
  },
  '1-3-s2-q5': {
    questionTranslation: 'Tidur pada jam 11 malam.',
    whyCorrect: '11時に (pada jam 11) menunjukkan waktu istirahat malam. Kata kerja yang tepat untuk jam istirahat malam adalah 寝ます (nemasu = tidur).',
    whyIncorrect: [
      { text: 'a. 食べます', translation: 'makan', reason: 'Digunakan untuk: makan makanan padat. Pada kalimat ini salah karena konteks jam 11 malam (11時に) di bab ini merujuk ke jadwal tidur malam.' },
      { text: 'b. 聞きます', translation: 'mendengarkan', reason: 'Digunakan untuk: menyimak audio/musik. Pada kalimat ini salah karena memerlukan objek suara yang didengarkan.' },
      { text: 'd. 読みます', translation: 'membaca', reason: 'Digunakan untuk: membaca teks bertulis. Pada kalimat ini salah karena memerlukan objek bacaan (buku/koran).' },
      { text: 'e. 来ます', translation: 'datang', reason: 'Digunakan untuk: tiba atau datang ke suatu tempat. Pada kalimat ini salah karena tidak ada keterangan tempat asal maupun tujuan.' },
      { text: 'f. 働きます', translation: 'bekerja', reason: 'Digunakan untuk: jam kerja di kantor. Pada kalimat ini salah karena jam 11 malam merupakan waktu istirahat malam tidur.' },
      { text: 'g. 買います', translation: 'membeli', reason: 'Digunakan untuk: berbelanja barang di toko. Pada kalimat ini salah karena tidak ada toko dan barang belanjaan.' },
    ],
    grammarPointDetail: 'Pola [Waktu Spesifik + に + 寝ます / 起きます]: に menandai titik waktu terjadinya aksi.',
    tips: ['Waktu jam malam + に biasanya diikuti 寝ます (tidur), sedangkan pagi hari diikuti 起きます (bangun).'],
  },
  '1-3-s2-q6': {
    questionTranslation: 'Membeli apel di supermarket.',
    whyCorrect: 'りんご (ringo) adalah buah apel, dan スーパーで menandai tempat berbelanja. Kata kerja yang tepat adalah 買います (kaimasu = membeli).',
    whyIncorrect: [
      { text: 'a. 食べます', translation: 'makan', reason: 'Digunakan untuk: mengonsumsi makanan langsung di tempat makan. Pada kalimat ini salah karena di supermarket (スーパーで) aktivitas transaksinya adalah membeli apel.' },
      { text: 'b. 聞きます', translation: 'mendengarkan', reason: 'Digunakan untuk: mendengarkan audio/musik. Pada kalimat ini salah karena apel bukan sumber suara.' },
      { text: 'c. 寝ます', translation: 'tidur', reason: 'Digunakan untuk: istirahat tidur di rumah/kamar. Pada kalimat ini salah karena supermarket bukan tempat tidur.' },
      { text: 'd. 読みます', translation: 'membaca', reason: 'Digunakan untuk: membaca buku/majalah. Pada kalimat ini salah karena buah apel bukan bahan bacaan.' },
      { text: 'e. 来ます', translation: 'datang', reason: 'Digunakan untuk: arah pergerakan kedatangan. Pada kalimat ini salah karena terdapat partikel tempat で dan objek りんごを.' },
      { text: 'f. 働きます', translation: 'bekerja', reason: 'Digunakan untuk: bekerja sebagai staf (スーパーで働きます). Meskipun secara tata bahasa bisa, dalam konteks belanja barang buah (りんごを...) kata kerja yang tepat adalah 買います.' },
    ],
    grammarPointDetail: 'Pola [Tempat + で + Barang + を + 買います]: Membeli suatu barang di tempat tertentu.',
    tips: ['Supermarket (スーパー) adalah tempat berbelanja; jika objeknya barang dagangan (buah/barang), jawabannya 買います.'],
  },

  // === EXAM 1 SECTION 3 (Particle Fill) ===
  '1-3-s3-q1': {
    questionTranslation: 'Pergi ke perpustakaan dengan berjalan kaki, lalu melihat pameran foto di perpustakaan.',
    whyCorrect: '図書館へ行きます (arah tujuan: へ), 歩いて (alat/cara berjalan: partikel tidak perlu di depan 歩いて), 図書館で (tempat aktivitas melihat: で), 写真展を見ます (objek pameran foto: を).',
    whyIncorrect: [
      { text: 'に / を / で', reason: 'Digunakan untuk: に (titik waktu/keberadaan), を (objek penderita), で (tempat aktivitas). Pada kalimat ini salah untuk tujuan pergerakan perpindahan ke perpustakaan yang menggunakan partikel arah へ/に, dan kalimat kedua membutuhkan で untuk tempat aktivitas melihat pameran foto.' },
    ],
    grammarPointDetail: 'Partikel arah: [Tempat + へ + 行きます]. Tempat aktivitas: [Tempat + で + V]. Objek langsung: [Objek + を + 見ます].',
    tips: ['Bedakan tempat tujuan perpindahan (へ/に) dengan tempat dilakukannya suatu kegiatan (で).'],
  },
  '1-3-s3-q2': {
    questionTranslation: 'Hobi saya adalah membaca dan memasak.',
    whyCorrect: 'Setelah kata 私 sudah langsung diikuti の (私の趣味 = hobi saya), sehingga di blank pertama tidak perlu partikel tambahan (×). Di antara 読書 (membaca) dan 料理 (memasak) digunakan と untuk menghubungkan dua nomina sejajar ("dan").',
    whyIncorrect: [
      { text: 'Blank (1) diisi partikel (misal: は, が, に)', reason: 'Partikel penanda subjek (は/が) atau waktu (に) dipakai sebelum predikat. Pada soal ini salah karena di belakang kurung sudah ada partikel の (私の趣味 = hobi saya), sehingga kurung tidak memerlukan partikel tambahan (×).' },
      { text: 'Blank (2) diisi や / で / を', reason: 'Partikel や digunakan untuk mendaftar contoh sebagian dari banyak hal. Pada soal ini salah karena hanya mendaftar dua hobi secara definitif, sehingga harus memakai と (dan).' },
    ],
    grammarPointDetail: 'Pola [N1 の N2]: Menyatakan kepemilikan / kaitan (私の趣味). Pola [N1 と N2]: Menggabungkan dua nomina secara sejajar ("dan").',
    tips: ['Perhatikan karakter setelah tanda kurung! Jika setelah kurung sudah ada partikel (seperti の), maka kurung tersebut tidak memerlukan partikel tambahan (×).'],
  },
  '1-3-s3-q3': {
    questionTranslation: 'Setiap pagi bangun pada jam 8. Makan roti.',
    whyCorrect: '毎朝 (setiap pagi) adalah kata keterangan waktu berulang yang tidak memerlukan partikel に (×). 8時 (jam 8) adalah waktu spesifik sehingga wajib menggunakan に. パン (roti) adalah objek makan sehingga memakai を.',
    whyIncorrect: [
      { text: '毎朝に', reason: 'Partikel に digunakan untuk titik waktu spesifik yang berangka kalender/jam (contoh: 8時に). Pada kata keterangan waktu berulang/relatif seperti 毎朝 (setiap pagi), 毎日, atau 今日, aturan bahasa Jepang TIDAK boleh memakai に (cukup ×).' },
      { text: '8時で / 8時を', reason: 'で digunakan untuk tempat aktivitas, dan を untuk objek penderita. Untuk titik waktu penanda jam bangun tidur (8時) wajib menggunakan partikel に.' },
    ],
    grammarPointDetail: 'Waktu berulang (毎朝, 毎日) → tanpa に (×). Waktu angka jam spesifik (8時) → wajib に. Objek penderita (パン) → を.',
    tips: ['Ingat aturan emas waktu bahasa Jepang: Yang ada angka/hari kalender pasti pakai に (8時に, 日曜日に), yang berulang/relatif tidak pakai に (毎朝×, 今日×).'],
  },
  '1-3-s3-q4': {
    questionTranslation: 'A: "Ringo" dalam bahasa Inggris apa ya?\nB: "Apple".',
    whyCorrect: '英語で (eigo de) berarti "dalam bahasa Inggris". Partikel で di sini berfungsi menunjukkan bahasa, media, atau alat yang digunakan untuk menyatakan sesuatu.',
    whyIncorrect: [
      { text: '英語に', reason: 'Partikel に digunakan untuk hasil perubahan terjemahan (英語に翻訳する). Pada tanya jawab padanan kata dalam bahasa asing ("dalam bahasa Inggris"), partikel media/alat bahasa yang baku adalah で (英語で).' },
      { text: '英語を', reason: 'Partikel を digunakan untuk menandai objek penderita kata kerja transitif (contoh: 英語を勉強します). Pada kalimat nominal 何ですか (apa?), partikel を tidak dapat digunakan.' },
      { text: '英語へ', reason: 'Partikel へ digunakan untuk arah pergerakan tempat tujuan (contoh: 日本へ行きます), bukan untuk bahasa pengantar.' },
    ],
    grammarPointDetail: 'Pola [Bahasa/Alat + で + 何ですか]: Digunakan saat menanyakan arti atau padanan kata dalam bahasa lain. Contoh: 日本語で何ですか (dalam bahasa Jepang apa?).',
    tips: ['Gunakan [Bahasa + で] untuk menyatakan bahasa pengantar: 日本語で話します (berbicara dalam bahasa Jepang), 英語で書きます (menulis dalam bahasa Inggris).'],
  },
  '1-3-s3-q5': {
    questionTranslation: 'Ann adalah mahasiswa. Pak juga mahasiswa.',
    whyCorrect: 'Kedua subjek memiliki predikat yang sama (学生です = mahasiswa). Untuk menyatakan "juga" atau "pun", partikel は digantikan oleh partikel も (Pak-san mo gakusei desu).',
    whyIncorrect: [
      { text: 'パクさんは', reason: 'Partikel は digunakan sebagai penanda topik umum kalimat baru. Pada konteks ini salah karena kalimat sebelumnya baru saja menyebutkan status Ann (mahasiswa) yang persis sama, sehingga untuk menyatakan kesamaan "juga" wajib menggunakan partikel も (パクさんも).' },
      { text: 'パクさんに', reason: 'Partikel に digunakan untuk target penerima atau titik waktu/tempat, tidak bisa menjadi penanda subjek kalimat nominal です.' },
      { text: 'パクさんで', reason: 'Partikel で digunakan untuk tempat aktivitas atau sarana/alat, tidak bisa menjadi penanda subjek persona.' },
    ],
    grammarPointDetail: 'Pola [Subjek + も + Predikat sama]: Menggantikan partikel は/が saat memberikan informasi yang sama dengan kalimat sebelumnya ("juga").',
    tips: ['Jika kalimat pertama dan kedua memiliki predikat yang persis sama, kalimat kedua hampir selalu menggunakan partikel も (juga).'],
  },
  '1-3-s3-q6': {
    questionTranslation: 'Tolong beri saya kari 2 porsi dan tonkatsu 1 porsi.',
    whyCorrect: 'カレーを (kari sebagai barang pesanan), 2つと (dan 2 porsi kari dengan item berikutnya), とんかつを (tonkatsu sebagai barang pesanan), 1つ× (setelah jumlah sebelum ください tidak perlu partikel tambahan).',
    whyIncorrect: [
      { text: '1つの / 1つに ください', reason: 'Partikel の untuk kepemilikan dan に untuk target/waktu. Dalam tata bahasa pemesanan bahasa Jepang, kata bantu bilangan/kuantitas kuantitatif (1つ, 2つ) menempel langsung sebelum ください tanpa perantara partikel (×).' },
    ],
    grammarPointDetail: 'Pola Pemesanan: [Benda + を + Jumlah + と + Benda + を + Jumlah + ください]. Jumlah kuantitatif (1つ, 2つ) langsung diikuti ください tanpa partikel.',
    tips: ['Kata bantu bilangan / jumlah langsung menempel di depan kata kerja atau ください: 1つください (tanpa partikel ×).'],
  },

  // === EXAM 1 SECTION 4 (Multiple Choice: Kosoado & Nouns) ===
  '1-3-s4-q1': {
    questionTranslation: 'Toilet ada di sebelah sini. / Toilet adalah di sini.',
    whyCorrect: 'ここ (koko) adalah kata penunjuk tempat ("di sini"). Karena yang ditanyakan atau ditunjukkan adalah lokasi ruangan (toilet), kata penunjuk yang tepat adalah ここ.',
    whyIncorrect: [
      { text: 'これ (kore)', translation: 'ini (kata ganti benda)', reason: 'Digunakan untuk: menunjuk benda fisik konkret dekat pembicara secara mandiri tanpa kata benda setelahnya (contoh: これはペンです). Pada kalimat ini salah karena kalimat menanyakan lokasi tempat/ruangan (toilet), yang membutuhkan kata penunjuk tempat (ここ).' },
    ],
    grammarPointDetail: 'Perbedaan Kore vs Koko: これ merujuk pada benda konkret (buku, pena), sedangkan ここ merujuk pada area/lokasi tempat (kantor, toilet, stasiun).',
    tips: ['Jika subjeknya berupa nama ruangan atau fasilitas (toilet, kelas, kantin), gunakan penunjuk tempat (ここ / そこ / あそこ).'],
  },
  '1-3-s4-q2': {
    questionTranslation: 'Ini adalah kari ikan.',
    whyCorrect: 'これ (kore) dapat berdiri sendiri sebagai subjek sebelum partikel は (これは...). Sedangkan この (kono) harus langsung diikuti oleh kata benda (contoh: このカレー).',
    whyIncorrect: [
      { text: 'この (kono)', translation: '... ini (kata penunjuk sifat)', reason: 'Digunakan untuk: menerangkan kata benda dekat pembicara dan WAJIB langsung menempel di depan kata benda (contoh: このカレーは辛いです). Pada kalimat ini salah karena posisi kosong langsung diikuti partikel は, sehingga wajib memakai kata ganti mandiri (これ).' },
    ],
    grammarPointDetail: 'Pola Demonstratif: [これ + は] berdiri sendiri. [この + Nomina + は] wajib diikuti kata benda.',
    tips: ['Cek kata setelah kurung! Jika langsung diikuti partikel は, pilih これ. Jika langsung diikuti kata benda, pilih この.'],
  },
  '1-3-s4-q3': {
    questionTranslation: 'Tas yang di sana itu harganya 2.800 yen.',
    whyCorrect: 'Setelah kurung terdapat kata benda かばん (tas). Kata penunjuk jarak jauh yang memodifikasi kata benda di depannya adalah あの (ano kaban = tas itu).',
    whyIncorrect: [
      { text: 'あれ (are)', translation: 'itu (kata ganti benda jauh)', reason: 'Digunakan untuk: menunjuk benda fisik jauh dan berdiri sendiri sebelum partikel (contoh: あれは時計です). Pada kalimat ini salah karena di depannya ada kata benda かばん (tas), sehingga membutuhkan bentuk penunjuk sifat あの (あの かばん).' },
    ],
    grammarPointDetail: 'Pola Demonstratif Jauh: [あの + Nomina] (tas itu, orang itu). [あれ] berdiri sendiri sebagai kata ganti benda jauh.',
    tips: ['Ada kata benda setelah kurung (かばん) → wajib pilih varian berakhiran -no (この/その/あの).'],
  },
  '1-3-s4-q4': {
    questionTranslation: 'Saya adalah karyawan dari ABE (perusahaan ABE).',
    whyCorrect: 'Ketika menyebutkan afiliasi perusahaan sendiri dengan menyebutkan nama perusahaannya (ABEの...), istilah yang baku digunakan adalah 社員 (shain). 会社員 (kaishain) digunakan secara umum untuk pekerjaan/profesi tanpa menyebut nama perusahaan.',
    whyIncorrect: [
      { text: '会社員 (kaishain)', translation: 'karyawan swasta/kantoran', reason: 'Digunakan saat menyatakan jenis pekerjaan/profesi secara umum tanpa nama perusahaan (contoh: 父は会社員です). Pada kalimat ini salah karena didahului nama instansi/perusahaan spesifik (ABEの...), sehingga istilah yang baku adalah 社員 (ABEの社員).' },
    ],
    grammarPointDetail: 'Perbedaan 会社員 vs 社員: [Nama Perusahaan + の社員] (contoh: トヨタの社員). Sedangkan [Profesi: 会社員] (contoh: 父は会社員です).',
    tips: ['Jika ada [Nama Perusahaan + の], jawabannya adalah 社員! Jika tanpa nama perusahaan (pekerjaan umum), jawabannya 会社員.'],
  },
  '1-3-s4-q5': {
    questionTranslation: 'A: Negara asal Anda di mana?\nB: Indonesia.',
    whyCorrect: 'Saat menanyakan negara asal lawan bicara secara sopan, kata 国 (kuni) diberi awalan kehormatan お menjadi お国 (okuni). Menanyakan お国はどちらですか / お国は？ sangat sopan dan alami.',
    whyIncorrect: [
      { text: '国 (kuni)', translation: 'negara (tanpa awalan sopan)', reason: 'Digunakan untuk: menyebut negara secara objektif dalam konteks umum atau pihak ketiga. Pada kalimat ini salah karena ditujukan langsung menanyakan negara asal lawan bicara, sehingga wajib menggunakan awalan penghormatan お (お国).' },
    ],
    grammarPointDetail: 'Bentuk Sopan Bikago [お + Nomina]: Awalan お- digunakan untuk menghormati hal yang berkaitan dengan lawan bicara (お国 = negara Anda, お名前 = nama Anda).',
    tips: ['Pertanyaan tentang identitas lawan bicara menggunakan prefiks sopan お- (お名前, お国).'],
  },
  '1-3-s4-q6': {
    questionTranslation: 'A: Kantornya di mana?\nB: Di lantai 2.',
    whyCorrect: 'Jawaban B adalah "2階です" (di lantai 2), yang merupakan keterangan tempat/lokasi. Kata tanya yang tepat untuk lokasi adalah どこ (doko = di mana).',
    whyIncorrect: [
      { text: 'だれ (dare)', translation: 'siapa', reason: 'Digunakan untuk: menanyakan identitas orang/manusia (contoh: あの人はだれですか). Pada kalimat ini salah karena respon lawan bicara menyebutkan lokasi lantai/ruangan (2階です), sehingga kata tanya yang dibutuhkan adalah tempat (どこ).' },
    ],
    grammarPointDetail: 'Pola Tanya Tempat: [Subjek + は + どこ / どちら + ですか]. Dijawab dengan lokasi atau nomor lantai ([Angka]階です).',
    tips: ['Lihat jawaban lawan bicara: jika jawabannya tempat/lantai (2階), kata tanyanya pasti どこ!'],
  },
  '1-3-s4-q7': {
    questionTranslation: 'A: Orang itu siapa?\nB: Saudara Lee.',
    whyCorrect: 'Jawaban B adalah "リーさんです" (nama orang). Kata tanya untuk menanyakan identitas seseorang adalah だれ (dare = siapa).',
    whyIncorrect: [
      { text: 'どこ (doko)', translation: 'di mana', reason: 'Digunakan untuk: menanyakan letak lokasi tempat atau ruangan (contoh: トイレはどこですか). Pada kalimat ini salah karena jawaban lawan bicara menyebutkan nama orang (リーさんです), sehingga kata tanyanya harus orang (だれ).' },
    ],
    grammarPointDetail: 'Pola Tanya Orang: [あの方 / あの人 + は + だれ / どなた + ですか]. Dijawab dengan nama orang + さん.',
    tips: ['Jawaban berupa nama orang (リーさん) → kata tanya wajib だれ (atau bentuk sopan どなた).'],
  },
  '1-3-s4-q8': {
    questionTranslation: 'A: Besok apakah Anda pergi ke Kyoto?\nB: Tidak, saya tidak pergi.',
    whyCorrect: 'Respon B diawali dengan "いいえ" (tidak), sehingga kata kerjanya harus berbentuk negatif: 行きません (ikimasen = tidak pergi).',
    whyIncorrect: [
      { text: '行きます (ikimasu)', translation: 'pergi (bentuk positif)', reason: 'Digunakan untuk: menyatakan kesediaan atau aksi pergi di waktu sekarang/mendatang (contoh: はい、行きます). Pada kalimat ini salah karena kalimat diawali dengan kata penolakan "いいえ" (tidak), sehingga wajib diikuti bentuk verba negatif (行きません).' },
    ],
    grammarPointDetail: 'Pola Jawaban Negatif: [いいえ + Verba-ません]. Contoh: いいえ、行きません (Tidak, saya tidak pergi).',
    tips: ['Perhatikan kata awal respon: Jika "はい" → bentuk positif (V-ます), jika "いいえ" → bentuk negatif (V-ません).'],
  },
  '1-3-s4-q9': {
    questionTranslation: 'A: Hari Minggu Anda melakukan apa?\nB: Belajar bahasa Jepang.',
    whyCorrect: 'Jawaban B adalah "日本語を勉強します" (aktivitas/kegiatan belajar). Kata tanya yang tepat untuk menanyakan isi kegiatan sebelum をします adalah なん (nan = apa).',
    whyIncorrect: [
      { text: 'どこ (doko)', translation: 'di mana', reason: 'Digunakan untuk: menanyakan tempat keberadaan atau tempat aktivitas (berpasangan dengan で, contoh: どこで勉強しますか). Pada kalimat ini salah karena kalimat menggunakan partikel objek を (...をしますか), sehingga kata tanya yang tepat adalah apa (なん).' },
    ],
    grammarPointDetail: 'Pola Tanya Aktivitas: [何をしますか (nani/nan o shimasu ka)] = melakukan apa? Dijawab dengan [Objek + を + Verba].',
    tips: ['Frase 何をしますか (nani o shimasu ka) adalah pertanyaan standar untuk "melakukan apa?".'],
  },

  // === EXAM 1 SECTION 8 (Reading Comprehension True/False - Pak-san Passage) ===
  '1-3-s8-example': {
    questionTranslation: 'Contoh: Nama saya adalah Pak.',
    whyCorrect: 'Di teks wacana pada kalimat pertama tertulis jelas: 「私の名前はパクです。」(Nama saya adalah Pak). Pernyataan ini sesuai 100% dengan teks bacaan sehingga bernilai ○ (Benar).',
    whyIncorrect: [
      { text: '× (Salah)', reason: 'Pilihan × (Salah) digunakan jika pernyataan bertentangan dengan informasi pada teks bacaan. Pada soal ini salah memilih × karena informasi nama Pak terbukti akurat dan tertulis secara eksplisit di awal wacana.' },
    ],
    grammarPointDetail: 'Pola Perkenalan Diri: [私の名前は [Nama] です] = Nama saya adalah...',
    tips: ['Cocokkan nama pada pernyataan dengan kalimat pembuka perkenalan diri.'],
  },
  '1-3-s8-q1': {
    questionTranslation: 'Pernyataan 1: Saya bukan guru sekolah bahasa Jepang.',
    whyCorrect: 'Di teks wacana tertulis: 「日本語学校の学生です。」(Saya adalah siswa sekolah bahasa Jepang). Karena Pak-san adalah seorang siswa/murid (学生), maka pernyataan bahwa dia BUKAN guru (先生じゃありません) adalah benar dan selaras dengan fakta teks, sehingga bernilai ○ (Benar).',
    whyIncorrect: [
      { text: '× (Salah)', reason: 'Pilihan × (Salah) digunakan jika pernyataan bertentangan dengan teks bacaan. Pada soal ini salah memilih × karena Pak-san berstatus sebagai siswa (学生), sehingga pernyataan negatif bahwa ia bukan guru (先生じゃありません) terbukti benar.' },
    ],
    grammarPointDetail: 'Pola Negasi Nominal: [Nomina + じゃありません] = Bukan / tidak adalah...',
    tips: ['Perhatikan bentuk negatif pada pernyataan: Jika teks menyatakan "murid", maka kalimat "bukan guru" bernilai benar (○).'],
  },
  '1-3-s8-q2': {
    questionTranslation: 'Pernyataan 2: Saya belajar bahasa Jepang di sekolah dari jam 1 sampai jam 5.',
    whyCorrect: 'Di teks wacana tertulis bahwa jadwal belajar bahasa Jepang di sekolah adalah jam 8:30 sampai 12:00 (「8時半から12時まで学校で勉強します」). Sedangkan pada jam 1 sampai jam 5 sore ia bekerja paruh waktu di minimarket (「1時から5時までコンビニで働きます」). Pernyataan ini salah/bertentangan dengan teks sehingga bernilai × (Salah).',
    whyIncorrect: [
      { text: '○ (Benar)', reason: 'Pilihan ○ (Benar) digunakan jika pernyataan sesuai fakta teks. Pada soal ini salah memilih ○ karena pada jam 1 sampai 5 ia bekerja di minimarket (働きます), bukan belajar di sekolah (勉強します).' },
    ],
    grammarPointDetail: 'Pola Rentang Waktu: [Waktu 1 + から + Waktu 2 + まで + Tempat + で + Verba].',
    tips: ['Perhatikan kecocokan antara jam kegiatan dan jenis aktivitas yang dilakukan.'],
  },
  '1-3-s8-q3': {
    questionTranslation: 'Pernyataan 3: Saya setiap hari pergi ke perpustakaan.',
    whyCorrect: 'Di teks wacana tertulis bahwa Pak-san pergi ke perpustakaan hanya pada akhir pekan (「週末、図書館へ行きます」), bukan setiap hari (毎日). Karena keterangan frekuensi waktunya bertentangan dengan teks, pernyataan ini bernilai × (Salah).',
    whyIncorrect: [
      { text: '○ (Benar)', reason: 'Pilihan ○ (Benar) digunakan jika pernyataan sesuai dengan fakta teks. Pada soal ini salah memilih ○ karena Pak-san hanya pergi ke perpustakaan saat akhir pekan (週末), bukan setiap hari (毎日).' },
    ],
    grammarPointDetail: 'Pola Frekuensi Waktu: 週末 (akhir pekan) vs 毎日 (setiap hari).',
    tips: ['Hati-hati dengan kata penunjuk frekuensi mutlak seperti 毎日 (setiap hari). Cek apakah di teks ada batasan waktu seperti 週末 (akhir pekan).'],
  },
};

export const WORD_MEANING_DICT: Record<string, string> = {
  ...Object.fromEntries(Object.entries(WORD_USAGE_GUIDE).map(([k, v]) => [k, v.meaning])),
  '○': 'Benar (sesuai fakta teks bacaan)',
  '×': 'Salah (bertentangan / tidak sesuai teks bacaan)',
};

export function inferWordMeaning(word: string): string {
  if (!word) return '';
  const trimmed = word.trim();
  if (WORD_USAGE_GUIDE[trimmed]) return WORD_USAGE_GUIDE[trimmed].meaning;
  if (WORD_MEANING_DICT[trimmed]) return WORD_MEANING_DICT[trimmed];
  if (DEKIRU_KANJI_DICT[trimmed]) return `bacaan: ${DEKIRU_KANJI_DICT[trimmed]}`;
  return trimmed;
}

export function inferPositionMeaning(pos: string): string {
  const m: Record<string, string> = {
    '上': 'atas / di atas',
    '下': 'bawah / di bawah',
    '前': 'depan / di depan',
    '後ろ': 'belakang / di belakang',
    '間': 'antara (di antara dua hal)',
    '中': 'dalam / di dalam',
    '隣': 'sebelah / samping langsung',
    '近く': 'dekat / di sekitar',
  };
  return m[pos] || pos;
}

/**
 * Intelligent helper to explain an incorrect option:
 * 1. Gives translation
 * 2. Explains when the option is actually used ("dipake dikapan")
 * 3. Explains why it is wrong for the specific sentence/question context
 */
export function explainIncorrectOption(
  rawOptionText: string,
  correctText: string,
  _context?: {
    questionText?: string;
    blankKey?: string;
    subject?: string;
  }
): { text: string; translation: string; reason: string } {
  // Clean prefixes like "a. ", "1. ", etc.
  const cleaned = rawOptionText.replace(/^[a-zA-Z0-9]+\.\s*/, '').trim();
  const guide = WORD_USAGE_GUIDE[cleaned];
  const meaning = guide?.meaning || inferWordMeaning(cleaned);

  let usedWhenDetail = guide?.usedWhen || `menyatakan "${meaning}" dalam situasi yang sesuai`;
  if (guide?.example) {
    usedWhenDetail += ` (contoh: ${guide.example})`;
  }

  // Determine specific contextual mismatch
  let mismatchReason = `pada kalimat ini tidak sesuai dengan kebutuhan makna atau aturan tata bahasa kalimat.`;

  if (cleaned === '曲がります' && correctText === '渡ります') {
    mismatchReason = `objek pada kalimat adalah 橋 (jembatan), yang pasangannya adalah diseberangi (渡ります), bukan berbelok.`;
  } else if (cleaned === '座ります' && correctText === '渡ります') {
    mismatchReason = `jembatan adalah sarana perlintasan untuk diseberangi (渡ります), bukan diduduki.`;
  } else if (cleaned === '吸います' && correctText === 'ひきます') {
    mismatchReason = `kolokasi baku untuk masuk angin/flu adalah 風邪をひきます, bukan menghisap rokok (吸います).`;
  } else if (cleaned === '押します' && correctText === 'ひきます') {
    mismatchReason = `penyakit flu tidak ditekan seperti tombol mesin melainkan terjangkit (ひきます).`;
  } else if (cleaned === '食べます' && correctText === '飲みます') {
    mismatchReason = `dalam bahasa Jepang obat (薬) selalu dipasangkan dengan kata kerja minum/menelan (飲みます), bukan dimakan padat (食べます).`;
  } else if (cleaned === '見ます' && correctText === '飲みます') {
    mismatchReason = `obat dikonsumsi untuk penyembuhan (飲みます), bukan sekadar dilihat (見ます).`;
  } else if (cleaned === '熱' && correctText === '散歩') {
    mismatchReason = `demam (熱) bukan kegiatan yang dilakukan dengan pola をします, melainkan kondisi tubuh (熱があります).`;
  } else if (cleaned === '食欲' && correctText === '散歩') {
    mismatchReason = `nafsu makan (食欲) bukan aktivitas dinamis yang dilakukan dengan をします.`;
  } else if (cleaned === '降ります' && correctText === '待ちます') {
    mismatchReason = `objeknya adalah 友達 (teman/manusia), yang dinanti kedatangannya (menunggu: 待ちます), bukan kendaraan untuk dituruni.`;
  } else if (cleaned === '借ります' && correctText === '待ちます') {
    mismatchReason = `teman adalah orang rekan, bukan barang dagangan/buku untuk dipinjam.`;
  } else if (cleaned === '置かないでください' && correctText === '置いてもいいですか') {
    mismatchReason = `pembicara adalah orang yang membawa barang dan ingin meminta izin menaruh barangnya (置いてもいいですか), bukan melarang orang lain.`;
  } else if (cleaned === 'ないほうがいいです' && correctText === 'ほうがいいです') {
    mismatchReason = `kata kerja sebelumnya adalah bentuk lampau positif 行った (telah pergi), sehingga wajib berpasangan dengan pola ほうがいいです (sebaiknya pergi).`;
  } else if (cleaned === 'した' && correctText === 'しない') {
    mismatchReason = `saat badan tidak sehat (調子がよくないとき) anjurannya adalah jangan memaksakan diri (無理をしないほうがいいです), bukan memaksakan diri.`;
  } else if (cleaned === 'な' && correctText === 'の') {
    mismatchReason = `kata sebelumnya adalah kata benda 中学生 (siswa SMP), sehingga penyambung dengan とき wajib partikel の (中学生のとき).`;
  } else if (cleaned === 'の' && correctText === 'な') {
    mismatchReason = `kata sebelumnya adalah kata sifat-na 暇 (senggang), sehingga penyambung dengan とき wajib partikel な (暇なとき).`;
  } else if (cleaned === '弾く' && correctText === '弾いた') {
    mismatchReason = `pola penggabungan variasi kegiatan [〜たり〜たりします] mewajibkan kata kerja bentuk lampau kasual [V-た ＋ り] (弾いた ＋ り), bukan bentuk kamus.`;
  } else if (cleaned === '歌う' && correctText === '歌った') {
    mismatchReason = `pola ragam aktivitas [〜たり〜たりします] mewajibkan kata kerja bentuk lampau kasual [V-た ＋ り] (歌った ＋ り), bukan bentuk kamus.`;
  } else if (cleaned === '飲みません' && correctText === '飲んでいません') {
    mismatchReason = `didahului kata keterangan まだ (belum), yang mewajibkan bentuk belum selesai [まだ ＋ V-ていません] (まだ飲んでいません).`;
  } else if (cleaned === '飲まないでください' && correctText === '飲んでいません') {
    mismatchReason = `pembicara menjawab status tindakan dirinya sendiri (belum minum obat), bukan melarang lawan bicara minum.`;
  } else if (cleaned === '入っても' && correctText === '入らないで') {
    mismatchReason = `kalimat diawali peringatan bahaya (危ないですから = karena berbahaya) dan diakhiri ください, sehingga membutuhkan larangan halus (入らないでください).`;
  } else if (cleaned === '入ってきて' && correctText === '入らないで') {
    mismatchReason = `kalimat menyatakan situasi bahaya (危ないですから), sehingga mempersilakan orang masuk justru membahayakan keselamatan.`;
  } else if (cleaned === 'のとき' && correctText === 'なとき') {
    mismatchReason = `暇 adalah kata sifat-na, bukan kata benda, sehingga wajib menggunakan なとき.`;
  } else if (cleaned === 'たとき' && correctText === 'なとき') {
    mismatchReason = `暇 adalah kata sifat-na, bukan kata kerja lampau, sehingga tidak bisa memakai たとき.`;
  } else if (cleaned === '食べたほうがいい' && correctText === '食べてから') {
    mismatchReason = `klausa ini berada di tengah kalimat majemuk penghubung urutan kegiatan sebelum klausa kedua (薬を飲みました), bukan anjuran mandiri di akhir kalimat.`;
  } else if (cleaned === '食べないで' && correctText === '食べてから') {
    mismatchReason = `petunjuk medis minum obat yang tepat adalah setelah makan (食べてから), bukan tanpa makan.`;
  } else if (cleaned.includes('話さないほうがいいです')) {
    mismatchReason = `agar mahir berbahasa Jepang (上手になりたい), anjuran yang tepat adalah aktif berbicara setiap hari (話したほうがいいです), bukan malah dilarang berbicara.`;
  } else if (cleaned === 'それから' && correctText === 'じゃ') {
    mismatchReason = `digunakan untuk menghubungkan 2 aksi berurutan. Pada dialog ini lawan bicara menolak ajakan dan pembicara merespons dengan menutup topik ("kalau begitu, lain kali ya") sehingga memakai じゃ.`;
  }

  const reason = `Digunakan untuk: ${usedWhenDetail}. Pada kalimat ini salah karena ${mismatchReason}`;

  return {
    text: rawOptionText,
    translation: meaning,
    reason,
  };
}

/**
 * Universal helper that fetches or generates rich explanation data for ANY question across all exams.
 */
export function getRichExplanation(
  _examId: string,
  questionId: string,
  item: any,
  section?: any
): RichExplanationData {
  // 1. Get authentic Indonesian question translation
  const qTranslation = DEKIRU_SENTENCE_TRANSLATIONS[questionId] || inferSentenceTranslation(item?.question?.text || item?.statement?.text || '', item);

  // 2. Check if we have an explicit curated entry
  if (DEKIRU_RICH_REGISTRY[questionId]) {
    const curated = DEKIRU_RICH_REGISTRY[questionId];
    let breakdown = curated.optionsBreakdown;
    if (!breakdown || breakdown.length === 0) {
      if (item.choices && Array.isArray(item.choices)) {
        const correctText = typeof item.answer === 'string' ? item.answer : item.answer?.text || '';
        breakdown = item.choices.map((rawCh: any, idx: number) => {
          const chText = typeof rawCh === 'string' ? rawCh : rawCh.text;
          return {
            optionId: idx + 1,
            text: chText,
            translation: inferWordMeaning(chText),
            isCorrect: chText === correctText,
          };
        });
      } else if (section && section.type === 'reading-true-false') {
        const isAnsTrue = item.answer === '○';
        breakdown = [
          { optionId: '1', text: '○ (Benar)', translation: 'Pernyataan sesuai fakta di dalam teks bacaan', isCorrect: isAnsTrue },
          { optionId: '2', text: '× (Salah)', translation: 'Pernyataan bertentangan atau tidak ada di dalam teks bacaan', isCorrect: !isAnsTrue },
        ];
      }
    }
    return {
      ...curated,
      questionTranslation: qTranslation || curated.questionTranslation,
      optionsBreakdown: breakdown && breakdown.length > 0 ? breakdown : undefined,
    };
  }

  // 3. Build dynamic rich explanation from existing item metadata and dictionaries
  let whyCorrect = item.explanationId || 'Jawaban ini sesuai dengan konteks percakapan dan tata bahasa bahasa Jepang standar.';
  const whyIncorrect: Array<{ optionId?: string | number; text: string; translation?: string; reason: string }> = [];
  const optionsBreakdown: OptionDetail[] = [];
  const tips: string[] = item.solvingSteps ? [...item.solvingSteps] : [];

  // === Section Type Handlers ===

  // 1. Location & Existence (Exam 3 Sec 4)
  if (section && section.type === 'location-existence') {
    const locAns = item.answer?.location?.text || '';
    const existAns = item.answer?.existence || '';
    const subject = item.completed?.text ? item.completed.text.split('は')[0] : 'Subjek';

    whyCorrect = `${subject} adalah ${existAns === 'あります' ? 'benda mati / tempat / bangunan' : 'makhluk hidup bernyawa (manusia)'}, sehingga kata kerja keberadaan yang tepat adalah 「${existAns}」. Berdasarkan denah/diagram petunjuk, posisinya adalah 「${locAns}」 (${inferPositionMeaning(locAns)}).`;

    if (existAns === 'あります') {
      whyIncorrect.push({
        optionId: 'います',
        text: 'います',
        translation: 'Ada (untuk manusia / makhluk bernyawa)',
        reason: `Digunakan untuk: menyatakan keberadaan manusia, orang, atau binatang hidup (contoh: 教室に学生がいます). Pada kalimat ini salah karena ${subject} adalah benda mati/fasilitas bangunan, sehingga harus menggunakan kata kerja 「あります」.`
      });
    } else {
      whyIncorrect.push({
        optionId: 'あります',
        text: 'あります',
        translation: 'Ada (untuk benda mati / tempat / tanaman)',
        reason: `Digunakan untuk: menyatakan keberadaan benda mati, barang, perabot, toko, atau tanaman (contoh: 机の上に本があります). Pada kalimat ini salah karena ${subject} adalah manusia bernyawa, sehingga harus menggunakan 「います」.`
      });
    }

    const allPositions = ['上', '下', '前', '後ろ', '間', '中', '隣', '近く'];
    allPositions.forEach(pos => {
      if (pos !== locAns && whyIncorrect.length < 5) {
        const pGuide = WORD_USAGE_GUIDE[pos];
        const posUsage = pGuide?.usedWhen || `menyatakan letak ${inferPositionMeaning(pos)}`;
        whyIncorrect.push({
          optionId: pos,
          text: pos,
          translation: inferPositionMeaning(pos),
          reason: `Bermakna "${inferPositionMeaning(pos)}". Digunakan untuk: ${posUsage}${pGuide?.example ? ` (contoh: ${pGuide.example})` : ''}. Pada diagram denah petunjuk soal ini salah karena posisi yang ditunjukkan adalah di ${inferPositionMeaning(locAns)}.`
        });
      }
    });

    optionsBreakdown.push({
      optionId: '1',
      text: 'あります',
      translation: 'Ada (untuk benda mati, barang, toko, tempat, tanaman)',
      isCorrect: existAns === 'あります',
      reason: existAns === 'あります' ? 'Tepat untuk benda mati / tempat.' : 'Salah untuk manusia.',
    });
    optionsBreakdown.push({
      optionId: '2',
      text: 'います',
      translation: 'Ada (untuk makhluk hidup bernyawa, manusia, binatang)',
      isCorrect: existAns === 'います',
      reason: existAns === 'います' ? 'Tepat untuk manusia.' : 'Salah untuk benda mati.',
    });
    allPositions.forEach((pos, pIdx) => {
      optionsBreakdown.push({
        optionId: String(pIdx + 3),
        text: pos,
        translation: inferPositionMeaning(pos),
        isCorrect: pos === locAns,
      });
    });
  }

  // 2. Grammar Choice (Exam 5 Sec 4)
  else if (section && section.type === 'grammar-choice') {
    const correctChoice = item.choice; // e.g. 'c'
    const choicesMap: Record<string, { text: string; meaning: string; usedWhen: string; example: string; notReason: string }> = {
      'a': {
        text: '作ってはいけません / 〜てはいけません',
        meaning: 'Dilarang / tidak boleh (larangan keras)',
        usedWhen: 'menyatakan aturan larangan mutlak/keras terhadap suatu tindakan berdasarkan hukum, tata tertib, atau keselamatan',
        example: 'ここで料理を作ってはいけません',
        notReason: 'aturan asrama pada kalimat ini membicarakan hal yang diberi izin dispensasi (boleh tidak ikut bagi yang sakit), bukan larangan membuat sesuatu.'
      },
      'b': {
        text: '書かなければなりません / 〜なければなりません',
        meaning: 'Harus / wajib (keharusan mutlak)',
        usedWhen: 'menyatakan kewajiban mutlak atau aturan yang wajib ditaati tanpa kecuali',
        example: '薬を飲まなければなりません',
        notReason: 'aturan asrama memberikan kelonggaran/dispensasi bagi orang sakit sehingga tidak bersifat kewajiban mutlak.'
      },
      'c': {
        text: '参加しなくてもいいです / 〜なくてもいいです',
        meaning: 'Boleh tidak / tidak harus (izin/keringanan)',
        usedWhen: 'memberikan izin atau dispensasi kelonggaran bahwa tindakan tersebut tidak wajib dilakukan',
        example: '明日は来なくてもいいです',
        notReason: 'pilihan ini adalah kunci jawaban yang benar.'
      },
      'd': {
        text: '変だと思いました / 〜と思いました',
        meaning: 'Saya pikir / berpendapat (opini lampau)',
        usedWhen: 'menyampaikan opini pribadi, pemikiran, atau dugaan subjektif di masa lalu',
        example: '映画は面白いと思いました',
        notReason: 'kalimat menetapkan pedoman tata tertib bersama di asrama, bukan opini pribadi masa lampau.'
      },
    };

    Object.entries(choicesMap).forEach(([cKey, cVal]) => {
      const isCorr = cKey === correctChoice;
      optionsBreakdown.push({
        optionId: cKey,
        text: cVal.text,
        translation: cVal.meaning,
        isCorrect: isCorr,
      });
      if (!isCorr) {
        whyIncorrect.push({
          optionId: cKey,
          text: cVal.text,
          translation: cVal.meaning,
          reason: `Bermakna "${cVal.meaning}". Digunakan untuk: ${cVal.usedWhen} (contoh: ${cVal.example}). Pada kalimat ini salah karena ${cVal.notReason}`
        });
      }
    });
  }

  // 3. Multi-blank Multiple Choice (Exam 3 Sec 5 q2, q3, Exam 4 Sec 4 q6)
  else if (item.choices && typeof item.choices === 'object' && !Array.isArray(item.choices)) {
    Object.entries(item.choices as Record<string, string[]>).forEach(([bKey, opts], bIdx) => {
      const corrAns = Array.isArray(item.answer) ? item.answer[bIdx] : (item.answer?.[bKey] || '');
      opts.forEach((ch: string, cIdx: number) => {
        const isCorr = ch === corrAns;
        const meaning = inferWordMeaning(ch);
        optionsBreakdown.push({
          optionId: `Bagian ${bKey} - ${cIdx + 1}`,
          text: ch,
          translation: meaning,
          isCorrect: isCorr,
        });
        if (!isCorr) {
          const exp = explainIncorrectOption(ch, corrAns, { blankKey: bKey, questionText: item.question?.text });
          whyIncorrect.push({
            optionId: `Bagian ${bKey} Opsi ${cIdx + 1}`,
            text: ch,
            translation: exp.translation,
            reason: exp.reason,
          });
        }
      });
    });
  }

  // 4. Standard Multiple Choice (Array)
  else if (item.choices && Array.isArray(item.choices)) {
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
        const exp = explainIncorrectOption(chText, correctText, { questionText: item.question?.text });
        whyIncorrect.push({
          optionId: idx + 1,
          text: chText,
          translation: exp.translation,
          reason: exp.reason,
        });
      }
    });
  }

  // 5. Word Bank (Exam 1 Sec 2, Exam 2 Sec 5)
  else if (section && section.type === 'word-bank' && section.wordBank) {
    const correctVal = item.answer?.value;
    const correctObj = section.wordBank.find((wb: any) => wb.id === correctVal);
    const correctText = correctObj ? (correctObj.content?.text || correctObj.id) : '';

    section.wordBank.forEach((wb: any) => {
      const isCorr = wb.id === correctVal;
      const text = wb.content?.text || wb.id;
      const trans = wb.meaningId || inferWordMeaning(text);

      optionsBreakdown.push({
        optionId: wb.id,
        text: text,
        translation: trans,
        isCorrect: isCorr,
      });

      if (!isCorr && whyIncorrect.length < 5) {
        const exp = explainIncorrectOption(text, correctText, { questionText: item.completed?.text });
        whyIncorrect.push({
          optionId: wb.id,
          text: `${wb.id}. ${text}`,
          translation: trans,
          reason: exp.reason,
        });
      }
    });
  }

  // 6. Dialogue Matching (Exam 1 Sec 6)
  else if (section && section.type === 'dialogue-matching' && section.choices) {
    const correctAnswers = Array.isArray(item.answer) ? item.answer : [item.answer];
    const correctChoiceObj = section.choices.find((c: any) => correctAnswers.includes(c.id));
    const correctText = correctChoiceObj ? (correctChoiceObj.content?.text || correctChoiceObj.text || '') : '';

    section.choices.forEach((ch: any) => {
      const isCorr = correctAnswers.includes(ch.id);
      const text = ch.content?.text || ch.text || ch.id;
      const trans = ch.meaningId || inferWordMeaning(text);

      optionsBreakdown.push({
        optionId: ch.id,
        text: text,
        translation: trans,
        isCorrect: isCorr,
      });

      if (!isCorr && whyIncorrect.length < 4) {
        const exp = explainIncorrectOption(text, correctText, { questionText: item.dialogue?.text || item.question?.text });
        whyIncorrect.push({
          optionId: ch.id,
          text: `${ch.id}. ${text}`,
          translation: trans,
          reason: exp.reason,
        });
      }
    });
  }

  // 7. Reading True False (Exam 1 Sec 8, Exam 2 Sec 10, Exam 3 Sec 9, Exam 4 Sec 7, Exam 5 Sec 8)
  else if (section && section.type === 'reading-true-false') {
    const isAnsTrue = item.answer === '○';
    optionsBreakdown.push({
      optionId: '1',
      text: '○ (Benar)',
      translation: 'Pernyataan sesuai fakta di dalam teks bacaan',
      isCorrect: isAnsTrue,
    });
    optionsBreakdown.push({
      optionId: '2',
      text: '× (Salah)',
      translation: 'Pernyataan bertentangan atau tidak ada di dalam teks bacaan',
      isCorrect: !isAnsTrue,
    });

    if (isAnsTrue) {
      whyIncorrect.push({
        optionId: '2',
        text: '× (Salah)',
        translation: 'Pernyataan tidak sesuai teks bacaan',
        reason: 'Pilihan × (Salah) digunakan jika isi pernyataan bertolak belakang atau bertentangan dengan informasi pada teks bacaan. Pada soal ini salah memilih × karena pernyataan terbukti benar dan selaras 100% dengan rincian fakta di teks bacaan.'
      });
    } else {
      whyIncorrect.push({
        optionId: '1',
        text: '○ (Benar)',
        translation: 'Pernyataan sesuai fakta teks bacaan',
        reason: 'Pilihan ○ (Benar) digunakan jika isi pernyataan sesuai 100% dengan fakta di dalam teks bacaan. Pada soal ini salah memilih ○ karena detail yang dinyatakan bertolak belakang atau berbeda dari keterangan yang tertulis di teks bacaan.'
      });
    }
  }

  // 8. Particle Fill (Section 3/4 across exams)
  if (section && section.type === 'particle-fill' && Array.isArray(item.answer)) {
    const particles = item.answer as string[];
    particles.forEach((p, bIdx) => {
      const pInfo = PARTICLE_MEANINGS[p];
      if (pInfo) {
        tips.push(`Blank (${bIdx + 1}) memerlukan partikel 「${p}」 (${pInfo.role}) yang bermakna: ${pInfo.meaning}.`);
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
 * Fallback helper to provide automatic contextual translation for sentence patterns
 */
export function inferSentenceTranslation(jpText: string, item?: any): string {
  if (item && item.id && DEKIRU_SENTENCE_TRANSLATIONS[item.id]) {
    return DEKIRU_SENTENCE_TRANSLATIONS[item.id];
  }
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

  return 'Terjemahan kalimat latihan Dekiru Nihongo.';
}
