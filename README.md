![screenshot](https://i.ibb.co/C7hKQrg/home-desktop.png)

Gametis adalah web katalog game gratis (free-to-play) yang dapat di mainkan di platform PC & Browser.
Memiliki desain UI yang kekinian, elegan dan responsive.

## Cara Penggunaan

1. Install dependencies menggunakan `npm install`.
2. Buat file `.env.local`, isi environment variables yang digunakan bisa lihat pada file [`.env.example`](./.env.example).
3. Jalankan server pengembangan menggunakan `npm start`.

Untuk production, gunakan script ini: `yarn build && yarn start`

## Tech Stacks

- [React.js](https://reactjs.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [SWR: React Hooks for Data Fetching](https://swr.vercel.app/)
- [Zustand](https://github.com/pmndrs/zustand)

## Data Game
Semua data Game yang digunakan pada proyek ini berasal dari [Free-to-Play Games Database](https://rapidapi.com/digiwalls/api/free-to-play-games-database)
