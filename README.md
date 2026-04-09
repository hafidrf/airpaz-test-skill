# AIRPAZ Test Skill

Project ini berisi 2 versi implementasi untuk soal manipulasi array hewan:

- `version-1-simple`: versi script sederhana (langsung tampil hasil di terminal).
- `version-2-ui`: versi web interaktif dengan tampilan modern dan background tata surya (planet mengorbit).

## Fitur Utama

- Soal nomor 1-5 dipisahkan jelas.
- Logic sesuai kebutuhan test:
  - Filter berdasarkan group
  - Sort berdasarkan prioritas group
  - Grouping object
  - Merge + grouping tanpa duplikat nama dalam group yang sama
  - Countdown Promise 5 sampai 1 lalu `close the door`
- UI interaktif dengan background tata surya yang bergerak otomatis.

## Cara Menjalankan

### 1) Versi Simple (Node.js)

Masuk ke folder project root, lalu jalankan:

```bash
node version-1-simple/animals-test.js
```

### 2) Versi UI (Browser)

Opsi cepat:

1. Buka file `version-2-ui/index.html` langsung di browser.

Atau pakai local server:

```bash
npx serve version-2-ui
```

## Live Demo

- Vercel (Production): [https://version-2-ui.vercel.app](https://version-2-ui.vercel.app)

## Repository

- GitHub: [https://github.com/hafidrf/airpaz-test-skill](https://github.com/hafidrf/airpaz-test-skill)
