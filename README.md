# Dashboard App

**Deskripsi:**
Aplikasi dashboard web dibuat untuk ujian teknikal dan belajar dan belajarrrr menggunakan pendekatan arsitektur Atomic Design ⚛

**Tanggal Dibuat:** 19 Mei 2025

---

## Fitur Utama

- **Sidebar Collapsible:** Dapat diperluas atau diperkecil untuk mengatur ruang layar.
- **Dashboard Statis:** Menampilkan statistik kunci dengan kartu yang tidak dapat dikustomisasi (misalnya total pengguna, pengguna aktif).
- **Atomic Design:** Struktur komponen mengikuti prinsip Atomic Design (atoms, molecules, organisms, templates).
- **Antarmuka Modern:** UI bersih dan modern dengan komponen Ant Design dan styling kustom.

---

## Teknologi

- **Frontend:**
  - React
  - Ant Design
  - TypeScript
- **Styling:** CSS Modules
- **Routing:** React Router DOM
- **Icons:** @ant-design/icons
- **Build Tools & Package Manager:** Node.js, Yarn

---

## Instalasi

1. **Clone repository:**
   ```bash
   git clone https://github.com/username/repository.git
   ```
2. **Masuk ke direktori proyek:**
   ```bash
   cd repository
   ```
3. **Install dependencies:**
   ```bash
   yarn install
   ```
4. **Jalankan server development:**
   ```bash
   yarn start
   ```
5. **Buka di browser:**
   Akses `http://localhost:3000`.

---

## Cara Penggunaan

- **Navigasi Sidebar:** Klik ikon hamburger di header atas untuk memperkecil atau memperluas sidebar. Jelajahi bagian seperti Dashboard, Summary, Role, dll.
- **Kartu Statistik:** Tampilkan statistik real-time (misalnya total pengguna) dengan badge status (misalnya "Active").
- **Pencarian:** Masukkan kata kunci di bar pencarian sidebar untuk memfilter konten (integrasi backend dapat berbeda).

---

## Struktur Folder

```text
project/
├── src/
│   ├── atoms/           # Komponen terkecil (misalnya Button)
│   ├── molecules/       # Komponen gabungan (misalnya SearchForm)
│   ├── organisms/       # Komponen kompleks (misalnya Sidebar, TopHeader, StatsCard)
│   ├── templates/       # Template layout (misalnya DashboardTemplate)
│   ├── App.tsx          # Komponen utama
│   ├── index.tsx        # Entry point
│   └── ...
├── public/              # File statis
├── package.json         # Dependensi dan skrip
└── README.md            # Dokumen ini
```

---

## Kontribusi

1. Fork repository.
2. Buat branch baru (`git checkout -b feature-branch`).
3. Lakukan perubahan dan commit (`git commit -m "Menambahkan fitur baru"`).
4. Push ke branch (`git push origin feature-branch`).
5. Buka Pull Request.

---

## Lisensi

Proyek ini dilisensikan di bawah MIT License. Bebas digunakan, dimodifikasi, dan didistribusikan.
