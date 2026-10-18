Company Profile School

Website company profile SMP modern dengan Next.js dan Tailwind CSS. Tampilan bersih dan tegas, animasi halus, dan pendaftaran siswa baru yang terhubung langsung ke WhatsApp tanpa database.

🚧 Status: dalam pengerjaan

🔗 Live Demo: segera hadir (isi dengan URL Vercel setelah deploy)

Tampilkan Gambar

<!-- Ganti dengan screenshot asli di akhir projek -->

Catatan: "SMP Contoh" adalah sekolah fiktif untuk keperluan portofolio. Semua konten bersifat dummy.

✨ Fitur
 Navbar sticky (transparan lalu solid saat scroll) dan menu mobile
 Hero section dengan CTA "Daftar Sekarang" dan "Chat WhatsApp"
 Statistik dengan animasi angka naik
 Tentang sekolah, sambutan kepala sekolah, dan visi misi
 Program unggulan dan ekstrakurikuler
 Galeri foto dengan lightbox
 Timeline prestasi
 Berita dan agenda (dari file data)
 Alur PPDB (stepper 4 langkah)
 Form pendaftaran yang mengirim pesan terformat ke WhatsApp
 Testimoni, FAQ (accordion), kontak, dan peta
 Tombol WhatsApp melayang
 Responsif (mobile-first) dan SEO dasar
🛠️ Tech Stack
Kategori	Teknologi
Framework	Next.js (App Router)
Bahasa	TypeScript
Styling	Tailwind CSS
Animasi	Framer Motion
Hosting	Vercel

Tanpa database. Seluruh konten disimpan di satu file (src/data/content.ts), sehingga mengubah isi website cukup dengan mengedit file tersebut.

📲 Cara Kerja Pendaftaran via WhatsApp
Calon siswa mengisi form (nama, asal SD, nama orang tua, nomor HP).
Data disusun menjadi pesan otomatis oleh JavaScript.
Klik tombol kirim akan membuka WhatsApp ke nomor sekolah dengan pesan yang sudah terisi.

Format link yang digunakan:

https://wa.me/62812XXXXXXXX?text=<pesan-ter-encode>
🚀 Menjalankan Secara Lokal

Prasyarat: Node.js (versi LTS) dan Git.

bash
# 1. Clone repo
git clone https://github.com/Hillmi-Nazwar/company-profile-school.git

# 2. Masuk ke folder
cd company-profile-school

# 3. Install dependency
npm install

# 4. Jalankan development server
npm run dev

Buka http://localhost:3000 di browser.

Script lain
bash
npm run build   # build untuk production
npm run start   # jalankan hasil build
npm run lint    # cek kualitas kode
⚙️ Kustomisasi

Semua konten (nama sekolah, nomor WhatsApp, program, galeri, dll.) ada di:

src/data/content.ts

Ganti isinya untuk menyesuaikan dengan sekolah atau client lain, tanpa menyentuh komponen.

📁 Struktur Folder (rencana)
company-profile-school/
├── public/              # gambar dan aset statis
├── src/
│   ├── app/             # halaman dan layout (App Router)
│   ├── components/      # komponen UI dan section
│   └── data/            # content.ts (sumber konten)
├── IDEAS.md             # parkiran ide untuk versi berikutnya
└── README.md
✅ Definition of Done
 Semua section selesai
 Responsif di HP, tablet, dan desktop
 Tidak ada error di console
 Skor Lighthouse 90+
 README dan screenshot lengkap
 Live di Vercel
🗺️ Rencana Pengembangan (v2)

Di luar scope versi pertama, dicatat di IDEAS.md: dua bahasa (ID/EN), dark mode, dan rekap pendaftaran otomatis dengan database.

👤 Author

Hillmi Nazwar GitHub: @Hillmi-Nazwar

📄 Lisensi

Projek ini dibuat untuk keperluan portofolio dan pembelajaran.