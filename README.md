# ⛩️ E-F 期末試験 読解・文法 Latihan & Review Ujian

Aplikasi web interaktif untuk latihan dan review soal ujian akhir bahasa Jepang tingkat E-F (**長野国際文化学院 E-F 期末試験 読解・文法 練習用 / 84回**) yang dibuat berdasarkan 14 lembar materi ujian asli dan lembar kunci jawaban resmi.

![Web App Preview](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-purple?style=for-the-badge&logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Deploy](https://img.shields.io/badge/Vercel-Ready-black?style=for-the-badge&logo=vercel)

---

## ✨ Fitur Utama

1. **Pilihan 2 Mode Belajar (Mode Selector di Awal)**:
   - **Mode Ujian (Exam / Migii JLPT Style)**:
     - Tampilan bersih, responsif, dan ramah pengguna di ponsel maupun komputer.
     - **Feedback Instan**: Tekan pilihan jawaban, langsung muncul warna **Hijau (Benar)** atau **Merah (Salah)** dengan ikon penjelas.
     - Jika salah, opsi yang benar otomatis ditandai dengan warna hijau putus-putus.
     - Kotak **Pembahasan Jawaban & Terjemahan Bahasa Indonesia** langsung terbuka otomatis.
     - Dilengkapi tombol navigasi (Sebelumnya, Selanjutnya, Coba Lagi).
   - **Mode Belajar / Review (Study Deck)**:
     - Melihat seluruh 60 soal sekaligus atau difilter per bagian.
     - Kunci jawaban resmi langsung terbuka.
     - Penjelasan rinci: **Mengapa jawaban benar** dan **Mengapa opsi lain salah**.
     - Poin penting tata bahasa (*bunpou*) & catatan kosakata (*goi*).
     - Fitur pencarian cepat (*live search filter*) berdasarkan kanji, kata, atau terjemahan.

2. **Aturan Furigana yang Presisi Sesuai Foto Asli**:
   - Hanya kata yang tercetak memiliki furigana di lembar ujian asli yang diberi anotasi furigana (`<ruby>`).
   - Kata/kanji yang di lembar aslinya tidak memakai furigana tetap dipertahankan tanpa furigana agar sesuai standar ujian aslinya.

3. **Persistensi State Tanpa Khawatir Hilang (LocalStorage)**:
   - Jawaban yang sudah dipilih, skor, mode aktif, dan riwayat pengerjaan tersimpan otomatis di `localStorage`.
   - Me-refresh halaman atau menutup browser tidak akan menghilangkan progres latihan.
   - Dilengkapi tombol **Reset Ujian** dengan konfirmasi jika ingin mengulang latihan dari awal.

4. **Grid Nomor Soal (Question Drawer 1 ~ 60)**:
   - Tombol `Grid` di bagian atas untuk membuka daftar navigasi 60 soal.
   - Warna indikator langsung mencerminkan status pengerjaan:
     - 🟢 **Hijau**: Sudah dijawab dengan benar
     - 🔴 **Merah**: Sudah dijawab tapi salah
     - ⚪ **Abu-abu**: Belum dijawab

5. **Kalkulator Skor Resmi (Sistem Nilai 300 Poin)**:
   - **Bagian I (1 ~ 22)**: 22 soal × 5 poin = 110 poin
   - **Bagian II (23 ~ 32)**: 10 soal × 8 poin = 80 poin
   - **Bagian III A (33 ~ 42)**: 10 soal × 3 poin = 30 poin
   - **Bagian III B (43 ~ 52)**: 10 soal × 4 poin = 40 poin
   - **Bagian IV A (53 ~ 55)**: 3 soal × 5 poin = 15 poin
   - **Bagian IV B (56 ~ 60)**: 5 soal × 5 poin = 25 poin
   - **Total Skor Maksimal = 300 Poin**.

---

## 🚀 Cara Menjalankan Secara Lokal

Pastikan Anda memiliki [Node.js](https://nodejs.org/) (versi 18+) terpasang.

1. Buka terminal di folder proyek ini:
   ```bash
   cd /Users/mac/code/react/EF
   ```

2. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```

3. Buka browser pada alamat:
   ```
   http://localhost:5173/
   ```

---

## 🌐 Cara Deploy ke Vercel

Proyek ini sudah dilengkapi konfigurasi `vercel.json` dan `package.json` siap produksi.

### Metode 1: Menggunakan GitHub (Paling Direkomendasikan)
1. Inisialisasi git dan push repository ke GitHub Anda:
   ```bash
   git init
   git add .
   git commit -m "feat: initial Japanese EF exam practice web app"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com) dan login.
3. Klik **"Add New..."** ➔ **"Project"**.
4. Import repository GitHub Anda.
5. Vercel akan secara otomatis mendeteksi framework **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Klik **Deploy**. Dalam hitungan detik, aplikasi Anda sudah online!

### Metode 2: Menggunakan Vercel CLI
```bash
npm i -g vercel
vercel
```
Ikuti petunjuk di terminal, pilih direktori `./`, dan proyek Anda akan langsung ter-deploy.
