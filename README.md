# ✳️ Daylight — Your Daily Dashboard

> **Daylight** adalah dashboard harian minimalis berbasis web yang dirancang untuk membantu menyusun ritme hari, menjaga fokus, dan meningkatkan produktivitas dengan tampilan *dark mode* yang estetik dan nyaman dipandang.

---

## 🚀 Fitur Utama

- **Personalized Greeting & Real-time Clock**: Menyapa sesuai waktu harian (pagi/siang/malam) lengkap dengan tanggal dan jam real-time.
- **Quote of the Day**: Quote motivasi harian yang otomatis terbarui tiap berganti hari (di-cache menggunakan `localStorage`).
- **Sesi Fokus (Pomodoro Timer)**: Timer fokus 25 menit untuk membantu menjaga konsentrasi saat ngoding atau belajar.
- **Tautan Cepat (Quick Links)**: Akses pintar dan instan ke situs favorit seperti Google, YouTube, dan lainnya.
- **Progressive Web App (PWA)**: Sudah mendukung Service Worker & Manifest, siap di-install di desktop maupun smartphone.
- **Clean & Minimalist Dark Theme**: Desain simpel, elegan, dan hemat daya.

---

## 🛠️ Tech Stack

- **HTML5** — Struktur elemen web.
- **CSS3** — Styling, variabel warna, dan responsif layout.
- **Vanilla JavaScript (ES6)** — Logika timer Pomodoro, fetching API quote, greeting, dan pengelolaan `localStorage`.
- **PWA (Service Worker & Manifest)** — Pengelolaan aset offline dan dukungan install PWA.

---

## 📂 Struktur Folder

```text
├── css/
│   └── style.css
├── js/
│   └── script.js
├── icons/
│   ├── favicon.svg
│   ├── icon-192.svg
│   └── icon-512.svg
├── index.html
├── manifest.json
├── sw.js
└── README.md
