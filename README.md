# Job Board App

Aplikasi Job Board adalah platform yang dirancang untuk menghubungkan pencari kerja
dengan peluang kerja yang diposting oleh sebuah perusahaan. Tujuannya adalah untuk
menyederhanakan proses pencarian kerja bagi para pencari kerja maupun perusahaan, dan
juga untuk mempermudah interaksi dan bertukar informasi tentang posisi yang tersedia.

## Specifications

### Registration and Authentication

- Pencari kerja dan perusahaan dapat membuat akun.
- Mekanisme autentikasi seperti verifikasi email dan enkripsi kata sandi
  diimplementasikan untuk keamanan.

### Job List

- Perusahaan dapat memposting daftar pekerjaan dengan detail seperti judul pekerjaan,
  deskripsi, lokasi, persyaratan, dan batas waktu pendaftaran.
- Pencari kerja dapat mencari daftar pekerjaan berdasarkan berbagai kriteria seperti judul
  pekerjaan, lokasi, dan kata kunci lainnya.

### Job Application

- Pencari kerja dapat melamar pekerjaan langsung melalui aplikasi.
- Perusahaan dapat mengelola lamaran yang masuk dan melihat profil kandidat, dan
  dapat memproses lamaran untuk dilanjutkan sampai tahap interview.
- Penerima kerja yang lamarannya diproses, akan menerima informasi via email, dan
  dilanjutkan proses penentuan jadwal interviewnya.

### Job Interview Scheduling

- Perusahaan dapat menjadwalkan interview untuk lamaran yang telah diproses.
- Pelamar / pencari kerja dapat menerima atau menjadwalkan ulang interview.

### User Profile

- Pengguna dapat membuat dan mengelola profil dengan informasi pribadi, pengalaman
  kerja, pendidikan, keterampilan, dan detail kontak.
- Profil dapat disesuaikan untuk menampilkan informasi yang relevan bagi pencari kerja
  maupun perusahaan.

## Standarisasi

- Filter data

  - Sisipkan setiap parameter filter dari sisi front-end ke URL yang aktif pada
    browser. Agar ketika di refresh, parameter filter tidak terhapus kecuali menekan
    tombol reset.

- Manage data

  - Gunakan metode soft-delete ketika ingin menghapus data product atau category
  - Jangan lupa terapkan verifikasi token pada API di setiap fitur manage data dan
    transaksi

- Validation
  - Semua input dari user harus divalidasi (client dan server)
  - Untuk input yang berupa file (bisa juga gambar), harus divalidasi extensionnya
    dan juga ukuran file yang bisa diterima
  - Semua proses yang krusial, harus ada approval dari user terlebih dahulu
    sebelum di proses (misalkan hapus data tertentu)

## Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `api`: an [Express](https://expressjs.com/) server

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Docker

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

```
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create ineed_network

# Build prod using new BuildKit engine
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker-compose.yml build

# Start prod in detached mode
docker-compose -f docker compose.yml up -d
```

Open http://localhost:3000.

To shutdown all running containers:

```
# Stop all running containers
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```

### Remote Caching

This example includes optional remote caching. In the Dockerfiles of the apps, uncomment the build arguments for `TURBO_TEAM` and `TURBO_TOKEN`. Then, pass these build arguments to your Docker build.

You can test this behavior using a command like:

`docker build -f apps/web/Dockerfile . --build-arg TURBO_TEAM=“your-team-name” --build-arg TURBO_TOKEN=“your-token“ --no-cache`
