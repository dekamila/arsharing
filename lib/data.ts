import { Category, Article, QuickLink, Place } from './types';

export const categories: Category[] = [
  { 
    id: 1, 
    name: 'Akademik', 
    slug: 'akademik', 
    description: 'Pusat informasi resmi seputar kegiatan belajar mengajar, kalender akademik semester ganjil/genap, pengumuman wisuda, pendaftaran mata kuliah (KRS), serta direktori 15 fakultas dan seluruh program studi.', 
    icon: '📚', 
    order: 1,
    highlights: ['Kalender Akademik 2026/2027', 'Pengumuman Wisuda & Syarat Kelulusan', 'Daftar 15 Fakultas & Program Studi', 'Panduan Registrasi Mata Kuliah Online']
  },
  { 
    id: 2, 
    name: 'Perpustakaan', 
    slug: 'perpustakaan', 
    description: 'Layanan perpustakaan fisik dan digital (E-Resource). Temukan katalog buku, jurnal ilmiah internasional gratis, jam operasional perpustakaan Kampus B & C, serta workshop literasi digital.', 
    icon: '📖', 
    order: 2,
    highlights: ['Akses E-Journal & E-Book Gratis', 'Jam Operasional Perpustakaan Kampus B & C', 'Workshop Literasi & Olah Referensi Mendeley', 'Katalog Koleksi Buku Terbaru']
  },
  { 
    id: 3, 
    name: 'Beasiswa', 
    slug: 'beasiswa', 
    description: 'Informasi lengkap peluang beasiswa pendidikan dalam dan luar negeri (Kemendikbud, LPDP, Djarum, pertukaran ASEAN). Lengkap dengan syarat, jadwal pendaftaran, dan tips lulus seleksi.', 
    icon: '🎓', 
    order: 3,
    highlights: ['Beasiswa Unggulan & LPDP 2027', 'Beasiswa Djarum Foundation Plus', 'Beasiswa Pertukaran Mahasiswa ASEAN', 'Tips Menulis Essay & Prepare Interview']
  },
  { 
    id: 4, 
    name: 'Magang & Karir', 
    slug: 'magang-karir', 
    description: 'Persiapan dunia kerja dan pengembangan karir profesional. Informasi lowongan magang industri/BUMN/startup, event Career Fair tahunan, serta tips pembuatan CV ATS-friendly & interview.', 
    icon: '💼', 
    order: 4,
    highlights: ['Lowongan Magang Google & BUMN Batch 2027', 'UNAIR Career Fair 2026', 'Panduan Membuat CV ATS-Friendly', 'Tips & Trik Menghadapi Interview Kerja']
  },
  { 
    id: 5, 
    name: 'Jelajah Kota', 
    slug: 'jelajah-kota', 
    description: 'Panduan menjelajahi sudut kota Surabaya, mulai dari destinasi kuliner legendaris, spot nongkrong, ruang budaya, museum bersejarah, hingga perpustakaan publik.', 
    icon: '🗺️', 
    order: 5,
    highlights: ['Rekomendasi Kuliner Legendaris & Cafe Hits', 'Destinasi Wisata Sejarah & Budaya', 'Museum & Galeri Seni di Surabaya', 'Perpustakaan Umum untuk Ruang Belajar'],
    subcategories: [
      { slug: 'kuliner', name: 'Kuliner', nameEn: 'Food & Dining', order: 1 },
      { slug: 'wisata-budaya', name: 'Wisata & Budaya', nameEn: 'Tourism & Culture', order: 2 },
      { slug: 'museum-galeri', name: 'Museum & Galeri', nameEn: 'Museums & Galleries', order: 3 },
      { slug: 'perpustakaan-umum', name: 'Perpustakaan Umum', nameEn: 'Public Libraries', order: 4 },
    ]
  },
  { 
    id: 6, 
    name: 'Event', 
    slug: 'event', 
    description: 'Agenda kegiatan seru di lingkungan kampus maupun kota Surabaya. Mulai dari perayaan Diesnatalis, festival budaya, seminar nasional AI, hingga kompetisi olahraga dan bazar UMKM.', 
    icon: '🎉', 
    order: 6,
    highlights: ['Diesnatalis ke-72 Universitas Airlangga', 'Festival Budaya Surabaya 2026', 'Seminar Nasional Artificial Intelligence', 'UNAIR Run 5K & Bazar UMKM Mahasiswa']
  },
  { 
    id: 7, 
    name: 'Panduan Internasional', 
    slug: 'panduan-internasional', 
    description: 'Panduan khusus bagi mahasiswa asing, mahasiswa pertukaran, dan mahasiswa internasional. Informasi tata cara pengurusan Visa Pelajar (VITAS), pencarian akomodasi, serta adaptasi budaya lokal.', 
    icon: '🌏', 
    order: 7,
    highlights: ['Panduan Lengkap Pengurusan Visa Pelajar (VITAS)', 'Rekomendasi Akomodasi Mahasiswa Internasional', 'Layanan International Office UNAIR', 'Tips Adaptasi Budaya & Bahasa di Surabaya']
  },
  {
    id: 8,
    name: 'Kebutuhan Harian',
    slug: 'kebutuhan-harian',
    description: 'Informasi lengkap seputar pemenuhan kebutuhan harian mahasiswa di Surabaya. Mulai dari info indekos & kontrakan, rute transportasi umum, jasa laundry, hingga pusat belanja kebutuhan pokok.',
    icon: '🏠',
    order: 8,
    highlights: ['Info Kos & Kontrakan Area Mulyorejo & Gubeng', 'Panduan Rute Bus & Transportasi Kampus', 'Rekomendasi Laundry Kiloan Cepat & Bersih', 'Pusat Belanja Sembako & Kebutuhan Sehari-hari'],
    subcategories: [
      { slug: 'kos-kontrakan', name: 'Kos & Kontrakan', nameEn: 'Boarding Houses & Rentals', order: 1 },
      { slug: 'transportasi', name: 'Transportasi', nameEn: 'Transportation', order: 2 },
      { slug: 'laundry', name: 'Laundry', nameEn: 'Laundry', order: 3 },
      { slug: 'belanja-harian', name: 'Belanja Harian', nameEn: 'Daily Shopping', order: 4 },
    ]
  }
];

export const articles: Article[] = [
  // Akademik
  {
    id: 1,
    title: 'Kalender Akademik 2026/2027',
    slug: 'kalender-akademik-2026-2027',
    excerpt: 'Jadwal lengkap kegiatan akademik semester ganjil dan genap tahun ajaran 2026/2027 Universitas Airlangga.',
    content: `<p>Universitas Airlangga telah resmi merilis kalender akademik untuk tahun ajaran 2026/2027. Kalender ini menjadi panduan penting bagi seluruh civitas akademika, terutama mahasiswa, dalam merencanakan kegiatan akademik mereka sepanjang dua semester ke depan.</p>
    <h2>Jadwal Semester Ganjil</h2>
    <p>Semester ganjil akan dimulai dengan masa registrasi ulang dan perwalian pada awal Agustus 2026. Perkuliahan efektif dijadwalkan mulai pertengahan Agustus hingga akhir November. Ujian Tengah Semester (UTS) akan dilaksanakan pada minggu kedua Oktober, sedangkan Ujian Akhir Semester (UAS) dijadwalkan pada awal Desember 2026.</p>
    <ul>
      <li>Registrasi Ulang: 1-10 Agustus 2026</li>
      <li>Masa Perkuliahan: 16 Agustus - 30 November 2026</li>
      <li>UTS: 12-16 Oktober 2026</li>
      <li>UAS: 7-18 Desember 2026</li>
    </ul>
    <h2>Jadwal Semester Genap</h2>
    <p>Untuk semester genap, perkuliahan akan dimulai pada bulan Februari 2027. Mahasiswa diharapkan dapat memperhatikan tanggal-tanggal penting ini agar tidak tertinggal informasi terkait pengisian KRS maupun tenggat waktu penting lainnya. Informasi lebih detail dapat diunduh melalui portal SIA.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Kalender+Akademik',
    categoryId: 1,
    categorySlug: 'akademik',
    tags: ['kalender', 'jadwal'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-08-01T08:00:00Z'
  },
  {
    id: 2,
    title: 'Pengumuman Wisuda Periode September 2026',
    slug: 'pengumuman-wisuda-september-2026',
    excerpt: 'Informasi lengkap pelaksanaan wisuda periode September 2026 untuk seluruh fakultas.',
    content: `<p>Direktorat Pendidikan Universitas Airlangga dengan bangga mengumumkan pelaksanaan Wisuda Periode September 2026. Acara wisuda kali ini akan diselenggarakan secara luring penuh di Airlangga Convention Center (ACC), Kampus C UNAIR, dengan tetap memperhatikan protokol kesehatan yang berlaku.</p>
    <h2>Ketentuan Pendaftaran</h2>
    <p>Calon wisudawan diwajibkan untuk menyelesaikan seluruh administrasi akademik dan keuangan sebelum melakukan pendaftaran melalui portal Cybercampus. Pendaftaran dibuka mulai tanggal 15 Agustus hingga 30 Agustus 2026. Berkas yang perlu disiapkan antara lain bukti bebas pinjam perpustakaan, bukti penyerahan skripsi/tesis/disertasi, serta pas foto terbaru.</p>
    <h2>Jadwal Pelaksanaan</h2>
    <p>Mengingat jumlah lulusan yang cukup banyak, pelaksanaan wisuda akan dibagi menjadi dua hari:</p>
    <ul>
      <li>Hari Pertama (Sabtu, 19 September 2026): Fakultas Kedokteran, Kedokteran Gigi, Hukum, dan Ekonomi & Bisnis.</li>
      <li>Hari Kedua (Minggu, 20 September 2026): Fakultas Farmasi, Kesehatan Masyarakat, Sains & Teknologi, dan fakultas lainnya.</li>
    </ul>
    <p>Gladi bersih akan dilaksanakan pada hari Kamis, 17 September 2026. Semua calon wisudawan wajib hadir pada saat gladi bersih agar prosesi wisuda berjalan lancar.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Pengumuman+Wisuda',
    categoryId: 1,
    categorySlug: 'akademik',
    tags: ['wisuda', 'pengumuman'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-08-15T09:00:00Z'
  },
  {
    id: 3,
    title: 'Daftar Fakultas dan Program Studi',
    slug: 'daftar-fakultas-program-studi',
    excerpt: 'Universitas Airlangga memiliki 15 fakultas dengan lebih dari 60 program studi terakreditasi.',
    content: `<p>Universitas Airlangga (UNAIR) secara konsisten mempertahankan posisinya sebagai salah satu perguruan tinggi terbaik di Indonesia. Saat ini, UNAIR menaungi 15 fakultas yang menawarkan berbagai program studi dari jenjang Diploma, Sarjana, Magister, hingga Doktoral.</p>
    <h2>Rumpun Ilmu Kesehatan dan Sains</h2>
    <p>Dalam rumpun kesehatan, UNAIR memiliki Fakultas Kedokteran (FK), Fakultas Kedokteran Gigi (FKG), Fakultas Farmasi (FF), Fakultas Kesehatan Masyarakat (FKM), dan Fakultas Keperawatan (FKp). Sementara itu, rumpun sains diwakili oleh Fakultas Sains dan Teknologi (FST) serta Fakultas Kedokteran Hewan (FKH). Program-program studi di fakultas ini dilengkapi dengan fasilitas laboratorium modern dan rumah sakit pendidikan.</p>
    <h2>Rumpun Ilmu Sosial dan Humaniora</h2>
    <p>Untuk rumpun sosial dan humaniora, terdapat Fakultas Hukum (FH), Fakultas Ekonomi dan Bisnis (FEB), Fakultas Ilmu Sosial dan Ilmu Politik (FISIP), Fakultas Psikologi (FPsi), serta Fakultas Ilmu Budaya (FIB). Selain itu, terdapat juga Sekolah Ilmu Kesehatan dan Ilmu Alam (SIKIA) yang berlokasi di Banyuwangi, serta Sekolah Pascasarjana dan Fakultas Vokasi.</p>
    <p>Hampir seluruh program studi di UNAIR telah mendapatkan akreditasi A atau Unggul dari BAN-PT, dan banyak di antaranya yang telah tersertifikasi internasional seperti AUN-QA, FIBAA, dan ASIIN.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Fakultas+dan+Prodi',
    categoryId: 1,
    categorySlug: 'akademik',
    tags: ['fakultas', 'prodi'],
    isPinned: false,
    isPopular: true,
    publishedAt: '2026-07-01T10:00:00Z'
  },
  {
    id: 4,
    title: 'Panduan Registrasi Mata Kuliah Online',
    slug: 'panduan-registrasi-matkul-online',
    excerpt: 'Langkah-langkah melakukan registrasi mata kuliah melalui sistem informasi akademik UNAIR.',
    content: `<p>Memasuki semester baru, seluruh mahasiswa diwajibkan untuk melakukan registrasi atau pengisian Kartu Rencana Studi (KRS) secara online. Proses ini kini dapat dilakukan dengan mudah melalui Sistem Informasi Akademik (SIA) Universitas Airlangga.</p>
    <h2>Langkah-Langkah Pengisian KRS</h2>
    <p>Pertama, pastikan Anda telah melunasi Uang Kuliah Tunggal (UKT) untuk semester yang akan berjalan. Setelah itu, login ke portal Cybercampus menggunakan NIM dan password yang terdaftar. Pilih menu "Akademik", kemudian klik "Pengisian KRS". Anda akan melihat daftar mata kuliah yang ditawarkan pada semester tersebut beserta kelas dan jadwalnya.</p>
    <p>Pilihlah mata kuliah sesuai dengan paket kurikulum atau hasil konsultasi dengan Dosen Wali. Perhatikan kapasitas kelas, karena beberapa kelas favorit mungkin cepat penuh. Jika kelas sudah penuh, Anda harus mencari alternatif kelas lain atau menghubungi bagian akademik fakultas.</p>
    <h2>Persetujuan Dosen Wali</h2>
    <p>Setelah selesai memilih mata kuliah, klik tombol "Simpan" dan "Ajukan Persetujuan". KRS yang telah diajukan harus mendapat persetujuan (approval) dari Dosen Wali secara sistem. Mahasiswa disarankan untuk aktif menghubungi Dosen Wali untuk melakukan bimbingan akademik sebelum persetujuan diberikan. Jika ada mata kuliah yang tidak disetujui, Anda harus memperbaikinya pada masa perubahan KRS (KPRS).</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Panduan+KRS',
    categoryId: 1,
    categorySlug: 'akademik',
    tags: ['registrasi', 'SIA'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-08-20T11:00:00Z'
  },
  {
    id: 5,
    title: 'Perubahan Jadwal Kuliah Semester Ganjil',
    slug: 'perubahan-jadwal-kuliah-semester-ganjil',
    excerpt: 'Beberapa perubahan jadwal kuliah untuk semester ganjil 2026/2027 yang perlu diperhatikan mahasiswa.',
    content: `<p>Direktorat Pendidikan menginformasikan adanya penyesuaian jadwal untuk beberapa mata kuliah wajib universitas dan mata kuliah fakultas pada semester ganjil 2026/2027. Perubahan ini dilakukan untuk mengoptimalkan penggunaan ruang kelas dan memfasilitasi perkuliahan hybrid di beberapa fakultas.</p>
    <h2>Penyesuaian Mata Kuliah Wajib Universitas (MKWU)</h2>
    <p>Untuk MKWU seperti Agama, Pancasila, dan Kewarganegaraan, jadwal sebagian besar dipindahkan ke sesi sore hari (mulai pukul 15.00 WIB) guna menghindari bentrok dengan mata kuliah keahlian fakultas. Selain itu, beberapa kelas MKWU akan dilaksanakan secara full daring melalui platform AULA (Airlangga University e-Learning Application).</p>
    <h2>Pengecekan Jadwal Terbaru</h2>
    <p>Mahasiswa diimbau untuk segera mengecek ulang jadwal kuliah masing-masing melalui portal SIA. Apabila perubahan jadwal ini mengakibatkan bentrok jadwal (crash) dengan mata kuliah lain yang telah diambil, mahasiswa diberi kesempatan untuk melakukan perubahan kelas selama masa KPRS (Kartu Perubahan Rencana Studi) yang berlangsung minggu depan.</p>
    <p>Pihak fakultas juga akan mengumumkan jadwal spesifik per program studi melalui grup komunikasi resmi mahasiswa dan papan pengumuman fakultas. Harap terus memantau informasi terbaru agar tidak tertinggal kegiatan perkuliahan perdana.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Perubahan+Jadwal',
    categoryId: 1,
    categorySlug: 'akademik',
    tags: ['jadwal', 'kuliah'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-09-01T12:00:00Z'
  },

  // Perpustakaan
  {
    id: 6,
    title: 'Jam Layanan Perpustakaan Kampus B dan C',
    slug: 'jam-layanan-perpustakaan',
    excerpt: 'Informasi terbaru mengenai jam operasional Perpustakaan Universitas Airlangga Kampus B dan C.',
    content: `<p>Perpustakaan Universitas Airlangga kembali memperbarui jam layanannya untuk memberikan fasilitas terbaik bagi mahasiswa, khususnya yang sedang menyusun tugas akhir atau penelitian. Kebijakan ini berlaku efektif mulai awal semester ganjil 2026/2027.</p>
    <h2>Jam Operasional Reguler</h2>
    <p>Untuk Perpustakaan Kampus B yang berlokasi di Jl. Dharmawangsa Dalam dan Perpustakaan Kampus C di Mulyorejo, layanan dibuka setiap hari Senin hingga Jumat mulai pukul 08.00 hingga 20.00 WIB. Perpanjangan jam operasional hingga malam hari ini diharapkan dapat mengakomodasi mahasiswa yang memiliki jadwal kuliah padat di siang hari.</p>
    <h2>Layanan Akhir Pekan</h2>
    <p>Selain hari kerja, perpustakaan juga melayani pemustaka pada akhir pekan. Pada hari Sabtu, perpustakaan buka dari pukul 09.00 hingga 15.00 WIB. Sementara untuk hari Minggu dan Hari Libur Nasional, layanan perpustakaan tutup. Perlu dicatat bahwa layanan sirkulasi (peminjaman dan pengembalian buku) ditutup 30 menit sebelum jam operasional berakhir.</p>
    <p>Pengunjung perpustakaan tetap diwajibkan membawa Kartu Tanda Mahasiswa (KTM) atau scan barcode melalui aplikasi perpustakaan sebagai akses masuk. Fasilitas ruang baca, ruang diskusi, dan komputer pencarian jurnal beroperasi secara penuh selama jam buka tersebut.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Jam+Layanan',
    categoryId: 2,
    categorySlug: 'perpustakaan',
    tags: ['layanan', 'jadwal'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-08-05T09:00:00Z'
  },
  {
    id: 7,
    title: 'Akses E-Journal dan E-Book Gratis untuk Mahasiswa',
    slug: 'akses-e-journal-gratis',
    excerpt: 'Panduan lengkap cara mengakses database jurnal akademik dan buku elektronik premium yang dilanggan UNAIR.',
    content: `<p>Universitas Airlangga setiap tahunnya melanggan berbagai database jurnal dan buku elektronik berskala internasional bernilai miliaran rupiah. Fasilitas ini disediakan secara gratis untuk seluruh mahasiswa guna menunjang kualitas riset dan pembelajaran. Beberapa database ternama yang dilanggan antara lain ScienceDirect, Scopus, SpringerLink, IEEE Xplore, dan ProQuest.</p>
    <h2>Cara Akses di Dalam Kampus</h2>
    <p>Jika Anda berada di lingkungan kampus dan terhubung dengan jaringan Wi-Fi UNAIR (UNAIR-Login atau eduroam), Anda dapat langsung mengakses portal database tersebut tanpa perlu login tambahan. Cukup kunjungi website perpustakaan digital UNAIR dan pilih menu "E-Resources", kemudian klik logo publisher yang dituju.</p>
    <h2>Cara Akses di Luar Kampus (Remote Access)</h2>
    <p>Bagi mahasiswa yang sedang berada di luar kampus, akses ke e-journal tetap bisa dilakukan melalui sistem Remote Access. Anda perlu menggunakan layanan SSO (Single Sign-On) atau VPN UNAIR. Selain itu, Anda juga dapat menggunakan aplikasi OpenAthens dengan mendaftar menggunakan email resmi mahasiswa (dengan domain @mhs.unair.ac.id).</p>
    <p>Pihak perpustakaan melarang keras tindakan mengunduh artikel secara masal menggunakan bot atau membagikan akses kepada pihak di luar universitas, karena hal tersebut dapat menyebabkan universitas terkena blokir oleh penyedia jurnal.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Akses+E-Journal',
    categoryId: 2,
    categorySlug: 'perpustakaan',
    tags: ['jurnal', 'riset'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-08-10T10:00:00Z'
  },
  {
    id: 8,
    title: 'Workshop Literasi Digital: Mengelola Referensi dengan Mendeley',
    slug: 'workshop-literasi-digital-mendeley',
    excerpt: 'Ikuti pelatihan gratis penggunaan software manajemen referensi Mendeley untuk penulisan karya ilmiah.',
    content: `<p>Menulis karya ilmiah seperti makalah, skripsi, atau tesis membutuhkan manajemen referensi yang baik. Untuk membekali mahasiswa dengan keterampilan ini, Perpustakaan UNAIR kembali mengadakan Workshop Literasi Digital berseri, dengan topik pertama "Manajemen Referensi Cerdas menggunakan Mendeley".</p>
    <h2>Materi Pelatihan</h2>
    <p>Dalam workshop ini, peserta akan diajarkan mulai dari cara menginstal aplikasi, menambahkan referensi secara manual maupun otomatis dari database jurnal, mengorganisir dokumen, hingga cara melakukan sitasi (kutipan) dan membuat daftar pustaka secara otomatis di Microsoft Word sesuai dengan gaya selingkung (misalnya APA atau IEEE style).</p>
    <h2>Pendaftaran dan Pelaksanaan</h2>
    <p>Acara ini akan diselenggarakan pada hari Rabu, 16 September 2026, pukul 13.00-15.00 WIB secara hybrid (di Ruang Pelatihan Perpustakaan Kampus B dan via Zoom). Pelatihan ini gratis dan terbuka untuk seluruh mahasiswa, diprioritaskan bagi mahasiswa tingkat akhir.</p>
    <p>Bagi yang berminat, silakan mendaftar melalui tautan yang tersedia di bio Instagram resmi Perpustakaan UNAIR. Peserta luring diharapkan membawa laptop masing-masing yang sudah terhubung dengan internet.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Workshop+Mendeley',
    categoryId: 2,
    categorySlug: 'perpustakaan',
    tags: ['workshop', 'literasi'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-09-02T11:00:00Z'
  },
  {
    id: 9,
    title: 'Koleksi Baru Perpustakaan Bulan September 2026',
    slug: 'koleksi-baru-september-2026',
    excerpt: 'Daftar buku cetak dan literatur baru yang baru saja ditambahkan ke koleksi Perpustakaan UNAIR.',
    content: `<p>Perpustakaan Universitas Airlangga terus berkomitmen untuk memperbarui koleksinya guna memenuhi kebutuhan informasi pemustaka. Pada bulan September 2026 ini, kami telah menerima lebih dari 500 eksemplar buku baru yang mencakup berbagai disiplin ilmu, mulai dari kedokteran, bisnis, hingga sastra.</p>
    <h2>Fokus Koleksi Baru</h2>
    <p>Bulan ini, pengadaan buku difokuskan pada literatur yang mendukung program studi baru dan buku-buku referensi utama (textbook) edisi terbaru yang direkomendasikan oleh para dosen pengampu mata kuliah. Terdapat juga penambahan signifikan pada koleksi buku fiksi dan pengembangan diri (self-improvement) di ruang baca santai (Airlangga Corner).</p>
    <h2>Cara Menemukan Buku Baru</h2>
    <p>Daftar lengkap koleksi baru dapat diakses melalui katalog online (OPAC) Perpustakaan UNAIR dengan mengklik menu "New Arrivals". Secara fisik, buku-buku baru ini dipajang di rak khusus "Koleksi Baru" yang berada di area lobi utama Perpustakaan Kampus B dan Kampus C selama satu bulan, sebelum nantinya didistribusikan ke rak sirkulasi umum.</p>
    <p>Mahasiswa sudah dapat meminjam buku-buku tersebut sesuai dengan ketentuan peminjaman yang berlaku. Jangan lewatkan kesempatan untuk menjadi pembaca pertama dari literatur-literatur terbaru ini.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Koleksi+Baru',
    categoryId: 2,
    categorySlug: 'perpustakaan',
    tags: ['koleksi', 'buku'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-09-05T08:00:00Z'
  },
  {
    id: 10,
    title: 'Pameran Buku dan Diskusi Sastra Nusantara',
    slug: 'pameran-buku-sastra-nusantara',
    excerpt: 'Perpustakaan UNAIR berkolaborasi dengan penerbit lokal menggelar pameran dan bedah buku sastra.',
    content: `<p>Dalam rangka memeriahkan Bulan Kunjungan Perpustakaan, Perpustakaan UNAIR berkolaborasi dengan Fakultas Ilmu Budaya (FIB) dan beberapa penerbit indie lokal Surabaya menyelenggarakan "Pameran Buku dan Diskusi Sastra Nusantara". Acara ini bertujuan untuk meningkatkan minat baca dan apresiasi terhadap karya sastra lokal.</p>
    <h2>Bazar Buku Murah</h2>
    <p>Pameran buku akan berlangsung selama satu minggu penuh, mulai tanggal 21 hingga 27 September 2026, bertempat di selasar lantai 1 Perpustakaan Kampus B. Terdapat ribuan judul buku fiksi, puisi, sejarah, dan humaniora yang ditawarkan dengan diskon spesial hingga 50% khusus bagi mahasiswa UNAIR.</p>
    <h2>Diskusi dan Bedah Buku</h2>
    <p>Puncak acara akan diisi dengan kegiatan bedah buku karya novelis asal Jawa Timur yang karyanya baru saja memenangkan penghargaan nasional. Sesi diskusi ini akan menghadirkan penulis, kritikus sastra dari FIB, serta perwakilan mahasiswa sebagai panelis. Acara bedah buku dijadwalkan pada hari Jumat, 25 September 2026, pukul 14.00 WIB.</p>
    <p>Selain diskusi, akan ada juga penampilan musikalisasi puisi dari UKM Seni dan pembacaan cerpen. Mahasiswa yang hadir akan mendapatkan e-sertifikat dan berkesempatan memenangkan doorprize buku gratis.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Pameran+Buku',
    categoryId: 2,
    categorySlug: 'perpustakaan',
    tags: ['event', 'bazar'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-09-08T09:00:00Z'
  },

  // Beasiswa
  {
    id: 11,
    title: 'Beasiswa Unggulan Kemendikbud 2027',
    slug: 'beasiswa-unggulan-kemendikbud-2027',
    excerpt: 'Pendaftaran Beasiswa Unggulan dari Kemendikbudristek untuk mahasiswa berprestasi resmi dibuka.',
    content: `<p>Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) kembali membuka pendaftaran program Beasiswa Unggulan untuk tahun 2027. Beasiswa bergengsi ini ditujukan bagi mahasiswa jenjang Sarjana (S1), Magister (S2), dan Doktoral (S3) yang memiliki prestasi akademik maupun non-akademik di tingkat nasional maupun internasional.</p>
    <h2>Cakupan Beasiswa</h2>
    <p>Beasiswa Unggulan menawarkan pendanaan yang sangat komprehensif. Penerima beasiswa (awardee) akan mendapatkan bantuan berupa pembebasan biaya pendidikan (UKT) secara penuh, bantuan biaya hidup bulanan yang disesuaikan dengan standar kota tempat studi, serta bantuan biaya pengadaan buku. Bagi mahasiswa S2 dan S3, terdapat pula dana bantuan penelitian.</p>
    <h2>Persyaratan dan Pendaftaran</h2>
    <p>Beberapa persyaratan utama meliputi IPK minimal 3.25 (untuk S1) atau 3.50 (untuk S2/S3), memiliki sertifikat prestasi minimal tingkat nasional, serta menyertakan esai rencana studi dan sertifikat kemampuan bahasa Inggris (TOEFL/IELTS). Mahasiswa baru maupun mahasiswa on-going maksimal semester 3 dapat mendaftar.</p>
    <p>Pendaftaran dilakukan secara online melalui portal resmi Beasiswa Unggulan mulai tanggal 15 September hingga 15 Oktober 2026. Mahasiswa UNAIR yang berminat dapat meminta surat rekomendasi dari Dekan atau Direktur Kemahasiswaan melalui loket Direktorat Kemahasiswaan.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Beasiswa+Unggulan',
    categoryId: 3,
    categorySlug: 'beasiswa',
    tags: ['nasional', 'kemendikbud'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-09-01T08:00:00Z',
    deadline: '15 Oktober 2026',
    deadlineEn: 'October 15, 2026',
    requirements: 'IPK minimal 3,25, prestasi nasional/internasional, esai rencana studi, dan TOEFL/IELTS.',
    requirementsEn: 'Minimum GPA of 3.25 for bachelor\'s students or 3.50 for graduate students, national or international achievement, a study-plan essay, and TOEFL/IELTS.',
    stages: 'Administrasi, verifikasi dokumen, dan wawancara.',
    stagesEn: 'Administrative screening, document verification, and interview.'
  },
  {
    id: 12,
    title: 'Beasiswa LPDP: Persyaratan dan Cara Mendaftar',
    slug: 'beasiswa-lpdp-persyaratan',
    excerpt: 'Panduan persiapan bagi mahasiswa tingkat akhir yang berencana mendaftar beasiswa LPDP untuk jenjang S2/S3.',
    content: `<p>Lembaga Pengelola Dana Pendidikan (LPDP) di bawah Kementerian Keuangan adalah salah satu penyedia beasiswa terbesar dan paling diminati oleh pemuda Indonesia. Bagi mahasiswa UNAIR tingkat akhir yang berencana melanjutkan studi ke jenjang pascasarjana, baik di dalam maupun luar negeri, mempersiapkan beasiswa LPDP sejak dini adalah langkah yang sangat tepat.</p>
    <h2>Jenis Program LPDP</h2>
    <p>LPDP menawarkan beberapa jalur, antara lain Beasiswa Reguler, Beasiswa Perguruan Tinggi Utama Dunia (PTUD), Beasiswa Targeted (PNS, TNI, POLRI, Kewirausahaan), dan Beasiswa Afirmasi (Daerah Tertinggal, Prasejahtera, Penyandang Disabilitas). Pilihlah jalur yang paling sesuai dengan profil dan latar belakang Anda, karena persyaratannya bisa sedikit berbeda.</p>
    <h2>Persyaratan Utama</h2>
    <p>Secara umum, pelamar harus menyiapkan dokumen kelulusan (Ijazah dan Transkrip Nilai), sertifikat kemampuan bahasa asing (TOEFL iBT/IELTS untuk luar negeri, TOEFL ITP untuk dalam negeri) dengan skor yang memenuhi batas minimal, serta LoA Unconditional (Letter of Acceptance) dari universitas tujuan. Selain itu, pendaftar harus menulis esai kontribusi untuk Indonesia dan personal statement.</p>
    <p>Proses seleksi LPDP meliputi Seleksi Administrasi, Seleksi Bakat Skolastik (bagi yang belum memiliki LoA), dan Seleksi Substansi (Wawancara). UNAIR secara rutin mengadakan sesi mentoring LPDP melalui Airlangga Global Engagement (AGE) untuk membantu alumni menembus beasiswa bergengsi ini.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Panduan+LPDP',
    categoryId: 3,
    categorySlug: 'beasiswa',
    tags: ['lpdp', 'pascasarjana'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-08-25T09:00:00Z',
    deadline: 'Sesuai periode pendaftaran LPDP 2027',
    deadlineEn: 'Based on the 2027 LPDP application cycle',
    requirements: 'Ijazah, transkrip nilai, sertifikat bahasa, LoA, dan esai kontribusi untuk Indonesia.',
    requirementsEn: 'Diploma, academic transcript, language certificate, Letter of Acceptance, and an essay on contributing to Indonesia.',
    stages: 'Administrasi, bakat skolastik, dan seleksi substansi.',
    stagesEn: 'Administrative screening, scholastic aptitude test, and substantive selection.'
  },
  {
    id: 13,
    title: 'Beasiswa Djarum Foundation Plus 2026',
    slug: 'beasiswa-djarum-foundation-2026',
    excerpt: 'Pendaftaran Djarum Beasiswa Plus untuk mahasiswa semester 4 Universitas Airlangga.',
    content: `<p>Djarum Foundation kembali membuka program Djarum Beasiswa Plus bagi mahasiswa S1/D4 berprestasi di seluruh Indonesia, termasuk Universitas Airlangga. Berbeda dengan beasiswa lainnya, Djarum Beasiswa Plus tidak hanya memberikan bantuan dana, tetapi juga memberikan berbagai pelatihan soft skills yang komprehensif.</p>
    <h2>Keuntungan Program</h2>
    <p>Besma (sebutan untuk penerima beasiswa) akan mendapatkan uang saku bulanan sebesar Rp 1.000.000 selama satu tahun. Yang lebih berharga, mereka akan diikutsertakan dalam serangkaian pelatihan seperti Nation Building, Character Building, Leadership Development, Competition Challenges, dan International Exposure. Program ini dirancang untuk mencetak pemimpin masa depan Indonesia yang tangguh dan berwawasan luas.</p>
    <h2>Syarat Pendaftaran</h2>
    <p>Program ini khusus untuk mahasiswa yang saat ini sedang menempuh semester 4 (angkatan 2024). Syarat utamanya adalah memiliki IPK minimal 3.20 hingga semester 3, aktif dalam kegiatan organisasi kampus maupun luar kampus, dan tidak sedang menerima beasiswa dari pihak lain. Pendaftar juga harus lolos serangkaian tes tertulis dan wawancara.</p>
    <p>Batas akhir pengumpulan berkas di Direktorat Kemahasiswaan UNAIR adalah tanggal 20 Mei 2026. Mahasiswa yang berminat diharapkan segera menyiapkan dokumen transkrip nilai, sertifikat kepanitiaan/organisasi, dan surat keterangan aktif kuliah.</p>
    <h2>Informasi Resmi dan Pendaftaran</h2>
    <p>Informasi lengkap mengenai Djarum Beasiswa Plus dapat dilihat di <a href="https://djarumbeasiswaplus.org/home" target="_blank" rel="noopener noreferrer">Djarum Beasiswa Plus | Program Beasiswa Prestasi untuk Mahasiswa Indonesia</a>.</p>
    <p>Untuk melihat persyaratan dan melakukan pendaftaran, kunjungi <a href="https://djarumbeasiswaplus.org/our-program/regulation-djarum-beasiswa-plus" target="_blank" rel="noopener noreferrer">Persyaratan Djarum Beasiswa Plus</a>.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Djarum+Beasiswa',
    categoryId: 3,
    categorySlug: 'beasiswa',
    tags: ['djarum', 'softskill'],
    isPinned: false,
    isPopular: true,
    publishedAt: '2026-08-15T10:00:00Z',
    deadline: '20 Mei 2026',
    deadlineEn: 'May 20, 2026',
    requirements: 'Mahasiswa semester 4, IPK minimal 3,20, aktif berorganisasi, dan tidak menerima beasiswa lain.',
    requirementsEn: 'Semester 4 students with a minimum GPA of 3.20, active in organizations, and not receiving another scholarship.',
    stages: 'Seleksi administrasi, tes tertulis, dan wawancara.',
    stagesEn: 'Administrative screening, written test, and interview.'
  },
  {
    id: 14,
    title: 'Beasiswa Pertukaran Mahasiswa ASEAN',
    slug: 'beasiswa-pertukaran-asean',
    excerpt: 'Peluang belajar satu semester di universitas terkemuka di kawasan Asia Tenggara dengan beasiswa penuh.',
    content: `<p>Airlangga Global Engagement (AGE) mengumumkan pembukaan seleksi untuk Program Pertukaran Mahasiswa ASEAN (AUN-ACTS) Semester Genap 2026/2027. Program ini memberikan kesempatan kepada mahasiswa UNAIR untuk merasakan pengalaman belajar selama satu semester di universitas-universitas mitra yang tergabung dalam ASEAN University Network.</p>
    <h2>Universitas Mitra Pilihan</h2>
    <p>Beberapa universitas ternama yang dapat dipilih antara lain National University of Singapore (NUS), Universiti Malaya (UM) Malaysia, Chulalongkorn University Thailand, dan University of the Philippines. Kuota yang tersedia tahun ini meningkat menjadi 15 mahasiswa berkat pendanaan tambahan dari mitra korporasi universitas.</p>
    <h2>Cakupan dan Persyaratan</h2>
    <p>Beasiswa ini mencakup tiket pesawat pulang-pergi, biaya kuliah di universitas tujuan (tuition waiver), uang saku bulanan, asuransi kesehatan, dan bantuan biaya akomodasi. Mahasiswa yang mendaftar harus berada di semester 3 hingga 5, memiliki IPK minimal 3.30, dan skor TOEFL ITP minimal 550 atau setara.</p>
    <p>Selain keuntungan akademis berupa transfer SKS, peserta akan mendapatkan pengalaman lintas budaya yang tak ternilai. Seleksi berkas dibuka hingga akhir September, dilanjutkan dengan tahap Focus Group Discussion (FGD) dan wawancara dalam bahasa Inggris.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Exchange+ASEAN',
    categoryId: 3,
    categorySlug: 'beasiswa',
    tags: ['exchange', 'internasional'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-09-03T11:00:00Z',
    deadline: 'Akhir September 2026',
    deadlineEn: 'End of September 2026',
    requirements: 'Mahasiswa semester 3-5, IPK minimal 3,30, dan TOEFL ITP minimal 550 atau setara.',
    requirementsEn: 'Students in semesters 3-5 with a minimum GPA of 3.30 and a TOEFL ITP score of at least 550 or equivalent.',
    stages: 'Seleksi berkas, Focus Group Discussion, dan wawancara bahasa Inggris.',
    stagesEn: 'Document screening, focus group discussion, and interview in English.'
  },
  {
    id: 15,
    title: 'Tips Menulis Essay Beasiswa yang Menarik',
    slug: 'tips-menulis-essay-beasiswa',
    excerpt: 'Panduan menyusun motivation letter dan essay beasiswa yang menonjol dan memikat hati tim penyeleksi.',
    content: `<p>Esai atau Motivation Letter seringkali menjadi komponen paling krusial dalam seleksi beasiswa, terutama untuk beasiswa ke luar negeri atau program yang prestisius. Di tengah ribuan pelamar dengan nilai IPK yang tinggi, esai adalah satu-satunya wadah bagi Anda untuk menunjukkan kepribadian, visi, dan keunikan Anda kepada panel seleksi.</p>
    <h2>Struktur Esai yang Kuat</h2>
    <p>Sebuah esai beasiswa yang baik sebaiknya tidak sekadar mengulang apa yang sudah ada di CV Anda. Mulailah dengan sebuah hook (pembuka) yang menarik berupa cerita personal atau momen titik balik dalam hidup Anda. Kemudian, hubungkan cerita tersebut dengan minat akademis Anda, mengapa Anda memilih program atau universitas tersebut, dan bagaimana beasiswa ini akan membantu Anda mencapai tujuan jangka panjang.</p>
    <h2>Prinsip "Show, Don't Tell"</h2>
    <p>Daripada hanya mengklaim "Saya adalah seorang pemimpin yang berdedikasi", lebih baik ceritakan pengalaman konkret saat Anda memimpin sebuah proyek yang menghadapi krisis, langkah apa yang Anda ambil, dan apa hasilnya. Tim penyeleksi mencari bukti nyata dari karakter yang Anda sebutkan.</p>
    <p>Terakhir, luangkan waktu yang cukup untuk proses editing dan proofreading. Mintalah dosen, senior, atau rekan yang kompeten untuk membaca esai Anda dan memberikan umpan balik. Esai yang penuh dengan kesalahan tata bahasa akan memberikan kesan tidak profesional dan kurang serius.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Tips+Essay',
    categoryId: 3,
    categorySlug: 'beasiswa',
    tags: ['tips', 'essay'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-08-28T12:00:00Z'
  },

  // Magang & Karir
  {
    id: 16,
    title: 'Lowongan Magang Google Indonesia Batch 2027',
    slug: 'magang-google-indonesia-2027',
    excerpt: 'Pendaftaran program magang bergengsi di Google Indonesia untuk mahasiswa berbagai jurusan.',
    content: `<p>Kabar gembira bagi mahasiswa yang bermimpi berkarir di industri teknologi. Google Indonesia baru saja membuka pendaftaran program Student Training in Engineering Program (STEP) dan Business Internship untuk batch tahun 2027. Program magang ini akan dilaksanakan selama 10 hingga 12 minggu pada periode libur semester genap tahun depan (Mei - Agustus 2027).</p>
    <h2>Posisi yang Dibuka</h2>
    <p>Program magang ini tidak hanya untuk mahasiswa IT. Google membuka dua kategori utama:</p>
    <ul>
      <li><strong>Engineering & Tech:</strong> Software Engineering Intern, Cloud Engineering Intern. Dibutuhkan kemampuan pemrograman (Java, C++, Python, atau Go) dan pemahaman algoritma yang kuat.</li>
      <li><strong>Business & Non-Tech:</strong> Marketing, Sales, Human Resources, dan Public Policy Intern. Terbuka untuk mahasiswa dari jurusan ekonomi, komunikasi, hukum, dan ilmu sosial lainnya.</li>
    </ul>
    <h2>Proses Rekrutmen</h2>
    <p>Proses seleksi Google dikenal cukup ketat. Untuk posisi tech, kandidat harus melewati online coding assessment dan beberapa tahap wawancara teknis. Untuk posisi non-tech, wawancara akan fokus pada studi kasus bisnis, kemampuan problem solving, dan "Googleyness" (kecocokan budaya kerja). Pendaftaran dilakukan secara online melalui situs karir Google hingga 30 Oktober 2026. Direktorat Pengembangan Karir (DPK) UNAIR akan mengadakan sesi simulasi wawancara khusus bagi mahasiswa yang lolos seleksi berkas.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Magang+Google',
    categoryId: 4,
    categorySlug: 'magang-karir',
    tags: ['magang', 'teknologi'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-09-05T08:00:00Z',
    deadline: '30 Oktober 2026',
    deadlineEn: 'October 30, 2026',
    requirements: 'Mahasiswa dari jurusan teknologi, bisnis, ekonomi, komunikasi, hukum, atau ilmu sosial.',
    requirementsEn: 'Students in technology, business, economics, communications, law, or social sciences.',
    stages: 'Seleksi berkas, online assessment, dan wawancara teknis atau studi kasus.',
    stagesEn: 'Document screening, online assessment, and technical or case-study interviews.'
  },
  {
    id: 17,
    title: 'Tips Membuat CV ATS-Friendly',
    slug: 'tips-cv-ats-friendly',
    excerpt: 'Pelajari cara membuat Curriculum Vitae yang ramah terhadap sistem pelacakan pelamar (ATS) agar lolos screening otomatis.',
    content: `<p>Di era digital saat ini, sebagian besar perusahaan besar dan multinasional menggunakan Applicant Tracking System (ATS) untuk menyaring ribuan CV yang masuk sebelum dibaca oleh manusia (rekruiter). Jika CV Anda tidak "ATS-friendly", besar kemungkinan CV tersebut akan otomatis tertolak oleh sistem meskipun kualifikasi Anda sangat memadai.</p>
    <h2>Apa itu CV ATS-Friendly?</h2>
    <p>CV ATS-friendly adalah CV yang didesain secara sederhana dan terstruktur agar mudah dibaca oleh algoritma mesin pengurai (parser). Sistem ATS kesulitan membaca grafis yang rumit, kolom, tabel, atau font yang tidak standar. Oleh karena itu, hindari desain CV yang terlalu artistik, kecuali Anda melamar untuk posisi di bidang kreatif atau desain.</p>
    <h2>Panduan Membuat CV ATS</h2>
    <p>Gunakan format teks standar dari kiri ke kanan. Gunakan font konvensional seperti Arial, Calibri, atau Times New Roman. Jangan gunakan foto profil, logo, atau grafik untuk mengukur keahlian (misalnya bar loading untuk skill). Pastikan Anda menyimpan file dalam format PDF (kecuali diminta dalam format Word), namun pastikan teks di dalam PDF tersebut bisa di-highlight atau disalin, bukan berupa gambar (scan).</p>
    <p>Yang paling penting, pastikan CV Anda memuat kata kunci (keywords) yang relevan dengan deskripsi pekerjaan (job description) yang Anda lamar. Mesin ATS akan memberikan skor kecocokan berdasarkan seberapa banyak kata kunci pekerjaan yang muncul secara natural di dalam pengalaman atau profil Anda.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Tips+CV+ATS',
    categoryId: 4,
    categorySlug: 'magang-karir',
    tags: ['tips', 'cv'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-08-20T09:00:00Z'
  },
  {
    id: 18,
    title: 'Career Fair Universitas Airlangga 2026',
    slug: 'career-fair-unair-2026',
    excerpt: 'Bursa kerja tahunan terbesar di UNAIR yang menghadirkan puluhan perusahaan nasional dan multinasional.',
    content: `<p>Direktorat Pengembangan Karir, Inkubasi Kewirausahaan, dan Alumni (DPKKA) UNAIR akan kembali menggelar Airlangga Career Fair (ACF) 2026. Acara bursa kerja tahunan terbesar di kampus ini menjadi jembatan penghubung antara lulusan unggul UNAIR dengan dunia industri yang sedang mencari talenta terbaik.</p>
    <h2>Rangkaian Kegiatan</h2>
    <p>ACF tahun ini akan dilaksanakan selama tiga hari, mulai 15 hingga 17 Oktober 2026, bertempat di Airlangga Convention Center (ACC) Kampus C. Tidak hanya pameran lowongan kerja (job exhibition), acara ini juga akan dimeriahkan dengan company presentation, walk-in interview, dan seminar karir yang diisi oleh praktisi HRD dari perusahaan terkemuka.</p>
    <h2>Perusahaan Partisipan</h2>
    <p>Lebih dari 60 perusahaan telah mengonfirmasi partisipasinya, mencakup sektor perbankan (BCA, Mandiri, BNI), Fast-Moving Consumer Goods / FMCG (Unilever, Danone, Wings Group), BUMN (Pertamina, Telkom), hingga perusahaan rintisan (startup) teknologi dan konsultan bisnis ternama. Tersedia lowongan untuk program Management Trainee (MT), entry-level staff, hingga program magang bagi mahasiswa aktif.</p>
    <p>Peserta wajib melakukan pendaftaran secara online melalui portal DPKKA dan mencetak tiket masuk yang dilengkapi dengan QR Code. Jangan lupa untuk memperbarui CV digital Anda di sistem sebelum acara, karena beberapa perusahaan menggunakan metode paperless recruitment.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Career+Fair+2026',
    categoryId: 4,
    categorySlug: 'magang-karir',
    tags: ['careerfair', 'lowongan'],
    isPinned: false,
    isPopular: true,
    publishedAt: '2026-09-02T10:00:00Z',
    deadline: '15-17 Oktober 2026',
    deadlineEn: 'October 15-17, 2026',
    requirements: 'Mahasiswa atau lulusan baru dengan CV terbaru dan akun pendaftaran DPKKA.',
    requirementsEn: 'Students or recent graduates with an up-to-date CV and a DPKKA registration account.',
    stages: 'Registrasi online, company presentation, dan walk-in interview.',
    stagesEn: 'Online registration, company presentations, and walk-in interviews.'
  },
  {
    id: 19,
    title: 'Magang di Startup: Pengalaman Mahasiswa UNAIR',
    slug: 'magang-startup-pengalaman',
    excerpt: 'Sharing pengalaman mahasiswa yang sukses menjalani program magang di berbagai startup terkemuka di Indonesia.',
    content: `<p>Budaya kerja di perusahaan rintisan (startup) yang dinamis, serba cepat (agile), dan inovatif menjadi daya tarik tersendiri bagi generasi Z. Banyak mahasiswa UNAIR yang memilih menghabiskan masa libur semester atau mengikuti program Kampus Merdeka dengan magang di ekosistem startup.</p>
    <h2>Tantangan dan Pembelajaran</h2>
    <p>Budi, mahasiswa Sistem Informasi angkatan 2023 yang baru menyelesaikan magang sebagai Data Analyst di GoTo, membagikan pengalamannya. "Di startup, hierarkinya sangat datar. Saya sebagai anak magang diberi kepercayaan untuk mempresentasikan insight data langsung ke manajer senior. Tantangannya adalah kita dituntut untuk proaktif, tidak bisa hanya menunggu perintah. Kita harus bisa menemukan masalah dan menawarkan solusi," ujarnya.</p>
    <h2>Fleksibilitas vs Jam Kerja Ekstra</h2>
    <p>Sementara itu, Rina dari jurusan Ilmu Komunikasi yang magang di bagian Social Media Tokopedia menyoroti aspek fleksibilitas. "Pakaian bebas, bisa kerja dari kafe, dan suasananya sangat fun. Tapi di sisi lain, karena bergerak sangat cepat merespons tren, kadang kita harus siap lembur atau bekerja di akhir pekan jika ada campaign besar. Ini melatih manajemen waktu dan resiliensi yang luar biasa," tambahnya.</p>
    <p>Keduanya sepakat bahwa magang di startup memberikan kurva pembelajaran (learning curve) yang sangat tajam. Kesalahan dimaklumi selama kita bisa belajar dan memperbaikinya dengan cepat (fail fast, learn faster). Bagi mahasiswa yang suka tantangan dan tidak menyukai rutinitas birokrasi, karir di startup bisa menjadi pilihan yang sangat menarik.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Pengalaman+Startup',
    categoryId: 4,
    categorySlug: 'magang-karir',
    tags: ['startup', 'cerita'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-08-22T11:00:00Z'
  },
  {
    id: 20,
    title: 'Persiapan Menghadapi Interview Kerja',
    slug: 'persiapan-interview-kerja',
    excerpt: 'Berbagai metode dan tips untuk tampil percaya diri dan meyakinkan saat wawancara kerja.',
    content: `<p>Wawancara kerja atau interview adalah tahapan penentuan di mana perusahaan menilai apakah Anda benar-benar kandidat yang tepat secara langsung. Banyak pelamar dengan CV yang luar biasa gagal di tahap ini karena kurangnya persiapan, rasa gugup yang berlebihan, atau ketidakmampuan mengartikulasikan pikiran dengan baik.</p>
    <h2>Metode STAR untuk Menjawab Pertanyaan</h2>
    <p>Salah satu teknik terbaik untuk menjawab pertanyaan berbasis perilaku (behavioral interview questions) seperti "Ceritakan pengalaman Anda saat menghadapi konflik" adalah metode STAR: Situation (Situasi), Task (Tugas), Action (Tindakan), dan Result (Hasil). Jelaskan konteks masalahnya secara singkat, tugas apa yang harus diselesaikan, tindakan konkret yang Anda ambil, dan yang terpenting, hasil positif yang terukur dari tindakan Anda tersebut.</p>
    <h2>Riset Perusahaan adalah Kunci</h2>
    <p>Rekruiter sangat menyukai kandidat yang menunjukkan antusiasme nyata. Lakukan riset mendalam mengenai perusahaan tersebut sebelum wawancara. Pahami produk atau layanan mereka, budaya kerja, kompetitor, hingga berita terbaru mengenai perusahaan tersebut. Ketika di akhir wawancara Anda ditanya, "Apakah ada pertanyaan untuk kami?", gunakan informasi dari riset ini untuk mengajukan pertanyaan berbobot yang menunjukkan ketertarikan Anda.</p>
    <p>Selain persiapan teknis, perhatikan juga hal-hal non-verbal (body language). Jaga kontak mata, tersenyum, duduk dengan postur tegak, dan kenakan pakaian formal atau smart-casual yang rapi. Jangan lupa untuk selalu mengucapkan terima kasih kepada pewawancara setelah sesi berakhir.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Tips+Interview',
    categoryId: 4,
    categorySlug: 'magang-karir',
    tags: ['interview', 'tips'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-08-25T12:00:00Z'
  },

  // Jelajah Kota & Kebutuhan Harian
  {
    id: 21,
    title: '10 Warung Makan Murah dan Enak Dekat Kampus C',
    titleEn: '10 Affordable and Delicious Food Spots Near Campus C',
    slug: 'warung-makan-murah-kampus-c',
    excerpt: 'Rekomendasi tempat makan favorit mahasiswa UNAIR di sekitar area Mulyorejo dengan harga kantong mahasiswa.',
    excerptEn: 'Favorite eateries for UNAIR students in the Mulyorejo area offering delicious food at student-friendly prices.',
    content: `<p>Menjadi anak kos di sekitar Kampus C UNAIR (Mulyorejo) berarti Anda harus pintar-pintar mengatur pengeluaran, terutama untuk urusan perut. Untungnya, di sekitar area kampus bertebaran berbagai warung makan yang tidak hanya lezat, tetapi juga sangat bersahabat dengan kantong mahasiswa. Berikut adalah beberapa rekomendasi tempat makan legendaris yang wajib Anda coba.</p>
    <h2>Kawasan Wisata Kuliner (Wiskul) Dharmahusada dan Mulyorejo</h2>
    <p>Di sepanjang Jalan Mulyorejo Raya, Anda bisa menemukan surga kuliner malam. Salah satu yang paling terkenal adalah Nasi Goreng Makarti yang selalu ramai pengunjung karena porsinya yang brutal dan rasa bumbu jawanya yang khas. Ada juga Warung Bu Sri yang menyajikan nasi campur dan ayam geprek dengan harga di bawah Rp 15.000, lengkap dengan es teh manis berukuran jumbo.</p>
    <h2>Kantin Kampus dan Sekitarnya</h2>
    <p>Jangan lupakan kantin di dalam area kampus itu sendiri. Kantin FIB (Fakultas Ilmu Budaya) dan Kantin FST (Sains dan Teknologi) terkenal dengan soto ayam dan penyetan lauknya yang murah meriah. Di dekat pintu keluar belakang kampus, terdapat deretan pedagang kaki lima yang menjual batagor, siomay, dan es oyen yang sangat cocok untuk mengganjal perut di sela-sela pergantian jam kuliah.</p>
    <p>Bagi penggemar makanan pedas, Mie Gacoan cabang Mulyosari dan berbagai kedai seblak di daerah Sutorejo juga menjadi destinasi favorit mahasiswa untuk nongkrong sambil mengerjakan tugas kelompok.</p>`,
    contentEn: `<p>Living as a university student near UNAIR Campus C (Mulyorejo) means learning how to manage your daily expenses smartly, especially for meals. Fortunately, the campus area is surrounded by various eateries that are not only delicious but also very kind to student budgets. Here are several legendary food recommendations you must try.</p>
    <h2>Dharmahusada and Mulyorejo Culinary Tourism Area</h2>
    <p>Along Jalan Mulyorejo Raya, you will find a bustling evening culinary hub. One of the most famous is Nasi Goreng Makarti, always packed with visitors due to its hearty portions and distinctive Javanese seasoning. There is also Warung Bu Sri, serving mixed rice (nasi campur) and crispy smashed chicken (ayam geprek) for under IDR 15,000, complete with a jumbo iced sweet tea.</p>
    <h2>Campus Canteens and Surrounding Stalls</h2>
    <p>Do not miss out on the canteens within the campus itself. The Faculty of Humanities (FIB) and Faculty of Science and Technology (FST) canteens are well-known for their budget-friendly chicken soto and spicy sambal dishes. Near the rear campus gate, rows of street vendors offer batagor, siomay, and es oyen—ideal snacks between lecture periods.</p>
    <p>For spicy food lovers, Mie Gacoan on Mulyosari and various seblak stalls in the Sutorejo area remain student favorites for hanging out while completing group assignments.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Kuliner+Kampus+C',
    categoryId: 5,
    categorySlug: 'jelajah-kota',
    subcategorySlug: 'kuliner',
    tags: ['kuliner', 'mulyorejo'],
    tagsEn: ['culinary', 'mulyorejo'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-08-10T08:00:00Z'
  },
  {
    id: 22,
    title: 'Rekomendasi Kos dan Kontrakan Area Mulyorejo',
    titleEn: 'Housing Recommendations Around Mulyorejo',
    slug: 'rekomendasi-kos-mulyorejo',
    excerpt: 'Panduan mencari tempat tinggal bagi mahasiswa perantauan di sekitar Kampus C UNAIR beserta perkiraan harganya.',
    excerptEn: 'A guide to finding student boarding houses and rental homes near UNAIR Campus C, including estimated monthly rates.',
    content: `<p>Bagi mahasiswa baru yang berasal dari luar kota Surabaya, mencari tempat tinggal (indekos atau kontrakan) yang nyaman, aman, dan dekat dengan kampus adalah salah satu prioritas utama. Area Mulyorejo, Sutorejo, dan Dharmahusada menjadi primadona karena aksesibilitasnya yang mudah menuju Kampus C UNAIR.</p>
    <h2>Tipe dan Harga Indekos</h2>
    <p>Harga indekos di area ini sangat bervariasi tergantung pada fasilitas yang ditawarkan. Untuk kos standar (kamar mandi luar, tanpa AC) harganya berkisar antara Rp 600.000 hingga Rp 900.000 per bulan. Sementara untuk kos eksklusif (kamar mandi dalam, AC, WiFi, layanan cuci, dan keamanan 24 jam) dibanderol mulai dari Rp 1.500.000 hingga Rp 2.500.000 per bulan. Gang-gang kecil di sekitar Jalan Mulyorejo Tengah dan Utara menyimpan banyak hidden gem indekos dengan harga rasional.</p>
    <h2>Opsi Rumah Kontrakan Bersama</h2>
    <p>Jika Anda memiliki teman sekelompok (3-5 orang), menyewa rumah kontrakan (paviliun) bisa menjadi opsi yang jauh lebih ekonomis dan memberikan privasi lebih. Harga sewa rumah di perumahan Dharmahusada Mas atau Sutorejo Prima berkisar antara Rp 25.000.000 hingga Rp 40.000.000 per tahun, yang jika dibagi rata akan terasa lebih ringan.</p>
    <p>Sangat disarankan untuk melakukan survei langsung ke lokasi sebelum membayar uang muka. Perhatikan faktor-faktor krusial seperti bebas banjir (mengingat beberapa area di Surabaya rawan genangan saat musim hujan deras), keamanan lingkungan, serta aturan jam malam yang ditetapkan oleh pemilik kos.</p>`,
    contentEn: `<p>For new students moving from outside Surabaya, finding safe, comfortable, and conveniently located accommodation near campus is a top priority. The Mulyorejo, Sutorejo, and Dharmahusada neighborhoods are the most sought-after due to their easy access to UNAIR Campus C.</p>
    <h2>Boarding House Types and Estimated Rates</h2>
    <p>Boarding house (kost) rates in this area vary depending on the provided amenities. Standard rooms (shared bathroom, without AC) generally range from IDR 600,000 to IDR 900,000 per month. Meanwhile, exclusive rooms (private ensuite bathroom, AC, Wi-Fi, laundry service, and 24-hour security) range from IDR 1,500,000 to IDR 2,500,000 per month. Alleys along Jalan Mulyorejo Tengah and Utara hold many hidden gems with reasonable prices.</p>
    <h2>Shared House Rental Options</h2>
    <p>If you have a group of friends (3–5 people), renting a full house or pavilion can be far more economical and provides greater privacy. House rental prices in residential complexes like Dharmahusada Mas or Sutorejo Prima range between IDR 25,000,000 and IDR 40,000,000 per year, which becomes very affordable when split evenly.</p>
    <p>Visiting and surveying locations in person before paying a deposit is highly recommended. Pay close attention to flood-free streets during heavy rains, neighborhood safety, and curfew rules set by landlords.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Info+Kos',
    categoryId: 8,
    categorySlug: 'kebutuhan-harian',
    subcategorySlug: 'kos-kontrakan',
    tags: ['kos', 'akomodasi'],
    tagsEn: ['housing', 'accommodation'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-07-25T09:00:00Z'
  },
  {
    id: 23,
    title: 'Rute Angkot dan Bus ke Kampus UNAIR',
    titleEn: 'Public Transport Routes to UNAIR Campuses',
    slug: 'rute-angkot-bus-kampus',
    excerpt: 'Panduan transportasi umum Suroboyo Bus, Wara-Wiri, dan Angkot untuk mobilitas antar kampus UNAIR.',
    excerptEn: 'A public transport guide covering Suroboyo Bus, Trans Semanggi, Wara-Wiri, and angkot routes for mobility between UNAIR campuses.',
    content: `<p>Meskipun banyak mahasiswa yang menggunakan kendaraan pribadi, transportasi umum di Surabaya kini semakin memadai dan terintegrasi. Bagi mahasiswa yang tidak membawa motor, memahami rute angkutan kota (bemo/angkot), Suroboyo Bus, dan bus internal kampus (Wara-Wiri) sangatlah penting untuk mobilitas sehari-hari.</p>
    <h2>Bus Internal Kampus (Flash UNAIR)</h2>
    <p>Universitas Airlangga menyediakan fasilitas bus gratis yang dikenal dengan sebutan Bus Flash (Fast Local Area Shuttle) atau Wara-Wiri. Bus ini melayani rute melingkar yang menghubungkan Kampus A (Kedokteran), Kampus B (Dharmawangsa), dan Kampus C (Mulyorejo). Bus beroperasi dari hari Senin hingga Jumat mulai pukul 07.00 hingga 17.00 WIB. Jadwal keberangkatan adalah setiap 30-45 menit sekali di halte-halte utama setiap kampus.</p>
    <h2>Suroboyo Bus dan Trans Semanggi</h2>
    <p>Untuk mobilitas dari tempat kos atau pusat kota menuju kampus, Suroboyo Bus dan Trans Semanggi Suroboyo (Teman Bus) adalah pilihan yang sangat nyaman, ber-AC, dan murah. Rute T2 (UNESA - ITS) melewati tepat di depan Kampus C UNAIR (Halte UNAIR). Tarif untuk pelajar/mahasiswa sangat terjangkau, dan pembayarannya bisa dilakukan menggunakan uang elektronik (e-money) atau metode scan QRIS.</p>
    <p>Bagi yang tinggal di daerah agak masuk ke dalam gang, angkutan kota konvensional (Bemo) rute O atau WK masih menjadi andalan warga lokal. Selain itu, tentu saja selalu ada opsi ojek online atau sepeda listrik sewaan yang banyak tersebar di area Mulyorejo dan Dharmawangsa.</p>`,
    contentEn: `<p>While many students ride private motorbikes, public transit in Surabaya has become increasingly modern and well-integrated. For students without personal vehicles, knowing how to navigate city minivans (angkot/bemo), the Suroboyo Bus network, and the free internal campus shuttle (Wara-Wiri) is essential for daily commuting.</p>
    <h2>Internal Campus Shuttle Bus (UNAIR Flash)</h2>
    <p>Universitas Airlangga provides a free shuttle bus service known as Bus Flash (Fast Local Area Shuttle) or Wara-Wiri. This bus follows a circular route connecting Campus A (Medicine), Campus B (Dharmawangsa), and Campus C (Mulyorejo). It operates Monday through Friday from 07:00 to 17:00 WIB, departing every 30 to 45 minutes from main bus stops on each campus.</p>
    <h2>Suroboyo Bus and Trans Semanggi</h2>
    <p>For commuting from student housing or downtown Surabaya to campus, Suroboyo Bus and Trans Semanggi Suroboyo (Teman Bus) offer clean, air-conditioned, and economical travel. Route T2 (UNESA - ITS) stops directly in front of UNAIR Campus C (Halte UNAIR). Fares for students are very low, payable via electronic money cards (e-money) or QRIS scanning.</p>
    <p>For students living deeper inside residential alleys, traditional angkot routes (Bemo O or WK) remain reliable. In addition, ride-hailing services (ojek online) and shared electric bikes are readily available throughout Mulyorejo and Dharmawangsa.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Transportasi',
    categoryId: 8,
    categorySlug: 'kebutuhan-harian',
    subcategorySlug: 'transportasi',
    tags: ['transportasi', 'bus'],
    tagsEn: ['transportation', 'bus'],
    isPinned: false,
    isPopular: true,
    publishedAt: '2026-08-05T10:00:00Z'
  },
  {
    id: 24,
    title: 'Tempat Nongkrong Favorit Mahasiswa Surabaya',
    titleEn: 'Favorite Student Hangouts in Surabaya',
    slug: 'tempat-nongkrong-favorit',
    excerpt: 'Daftar cafe dan coffee shop instagramable di sekitar Surabaya Timur yang cocok untuk nugas atau sekadar bersantai.',
    excerptEn: 'A curated list of aesthetic cafes and coffee shops in East Surabaya ideal for studying or casual unwinding.',
    content: `<p>Kultur ngopi dan nongkrong sambil mengerjakan tugas kelompok (nugas) adalah bagian tak terpisahkan dari kehidupan mahasiswa zaman sekarang. Beruntung, Surabaya Timur, khususnya di sekitar kampus UNAIR dan ITS, dikelilingi oleh ratusan kedai kopi (coffee shop) yang menawarkan suasana cozy dan koneksi internet yang kencang.</p>
    <h2>Coffee Shop Area Dharmawangsa dan Gubeng</h2>
    <p>Di sekitar Kampus B, Jalan Dharmawangsa dipenuhi oleh deretan cafe modern. Beberapa yang menjadi favorit mahasiswa karena suasananya yang tenang dan colokan listrik yang melimpah adalah Historisma, Tanda Seru Coffee, dan Thirty Three Brew. Tempat-tempat ini biasanya buka hingga tengah malam, sangat cocok untuk mahasiswa yang butuh fokus mengejar deadline tugas atau revisi skripsi.</p>
    <h2>Pusat Nongkrong Area Kertajaya dan Merr</h2>
    <p>Bergeser sedikit ke arah Kertajaya dan Middle East Ring Road (MERR), pilihan tempat nongkrong menjadi lebih beragam. Communal Space yang luas dengan konsep semi-outdoor sangat diminati untuk berkumpul bersama teman-teman organisasi atau UKM. Pilihan makanannya pun bervariasi mulai dari sekadar pastry hingga makanan berat ala western atau fushion.</p>
    <p>Tips bagi mahasiswa: carilah cafe yang memiliki promo khusus pelajar dengan menunjukkan KTM (Kartu Tanda Mahasiswa), karena harga kopi spesiality di Surabaya cukup lumayan (berkisar Rp 25.000 - Rp 45.000 per gelas). Jangan lupa untuk tetap menerapkan etika nugas di cafe, dengan memesan secukupnya jika berniat tinggal berjam-jam.</p>`,
    contentEn: `<p>Enjoying coffee while completing group projects (nugas) has become an integral part of modern student life. Fortunately, East Surabaya—especially around the UNAIR and ITS campuses—features hundreds of cozy coffee shops with fast internet connections and welcoming vibes.</p>
    <h2>Dharmawangsa and Gubeng Coffee Shops</h2>
    <p>Near Campus B, Jalan Dharmawangsa is lined with modern cafes. Popular student favorites known for their quiet work atmosphere and abundant power outlets include Historisma, Tanda Seru Coffee, and Thirty Three Brew. These spots are often open until midnight, making them perfect for students meeting assignment deadlines or thesis revisions.</p>
    <h2>Kertajaya and MERR Hangout Centers</h2>
    <p>Venturing toward Kertajaya and the Middle East Ring Road (MERR), choices become even more diverse. Spacious communal spaces with semi-outdoor seating are popular gathering spots for student organizations and clubs. Menu offerings span from light pastries to hearty western and fusion dishes.</p>
    <p>Student tip: look out for student discounts by presenting your Student ID Card (KTM), as specialty coffee prices in Surabaya typically range between IDR 25,000 and IDR 45,000 per cup. Always observe good cafe etiquette by ordering reasonably if staying for multiple hours.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Cafe+Surabaya',
    categoryId: 5,
    categorySlug: 'jelajah-kota',
    subcategorySlug: 'kuliner',
    tags: ['nongkrong', 'cafe'],
    tagsEn: ['hangout', 'cafe'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-08-15T11:00:00Z'
  },
  {
    id: 25,
    title: 'Destinasi Wisata Weekend di Sekitar Surabaya',
    titleEn: 'Weekend Destinations Around Surabaya',
    slug: 'wisata-weekend-surabaya',
    excerpt: 'Ide liburan akhir pekan singkat (short escape) di dalam kota Surabaya maupun kota-kota sekitarnya untuk melepas penat.',
    excerptEn: 'Short weekend escape ideas within Surabaya and neighboring regencies for refreshing breaks from study routines.',
    content: `<p>Tugas kuliah dan rutinitas kampus yang padat bisa memicu stres jika tidak diimbangi dengan rekreasi. Saat libur akhir pekan tiba, tak ada salahnya untuk menjelajahi berbagai destinasi wisata menarik yang ada di Surabaya atau melipir sedikit ke wilayah sekitarnya (Sidoarjo, Gresik, Pasuruan, atau Malang) untuk melakukan penyegaran pikiran (healing).</p>
    <h2>Wisata Dalam Kota Surabaya</h2>
    <p>Untuk opsi yang murah dan tidak menguras tenaga, Surabaya memiliki banyak taman kota yang asri, seperti Taman Bungkul yang ikonik, Taman Flora Bratang, atau Hutan Bambu Keputih yang sangat instagramable. Anda juga bisa menikmati suasana kota tua (heritage) di kawasan Jembatan Merah dan Tunjungan, atau mengunjungi museum-museum bersejarah seperti Museum House of Sampoerna dan Monumen Kapal Selam.</p>
    <h2>Short Escape ke Luar Kota (Aglomerasi Gerbangkertosusila)</h2>
    <p>Bagi yang memiliki waktu lebih, perjalanan satu hingga dua jam dari Surabaya akan membawa Anda ke pemandangan alam yang berbeda. Daerah Trawas dan Pacet di Mojokerto, serta Prigen di Pasuruan menawarkan hawa pegunungan yang sejuk dengan deretan cafe bernuansa alam dan air terjun.</p>
    <p>Sementara jika Anda merindukan pantai, wisata Mangrove di Wonorejo (Surabaya Timur) atau bergeser ke Gresik dan Madura bisa menjadi alternatif yang seru untuk dilakukan bersama teman-teman satu kos di hari Minggu sebelum kembali menghadapi kerasnya kehidupan perkuliahan di hari Senin.</p>`,
    contentEn: `<p>Intense coursework and campus schedules can lead to fatigue if not balanced with leisure. When the weekend arrives, exploring refreshing destinations in Surabaya or nearby areas (Sidoarjo, Gresik, Pasuruan, or Malang) offers an excellent way to recharge your mind.</p>
    <h2>Surabaya City Destinations</h2>
    <p>For affordable and low-effort options, Surabaya boasts lush city parks such as the iconic Taman Bungkul, Taman Flora Bratang, or the photogenic Keputih Bamboo Forest. You can also explore historic heritage architecture in the Jembatan Merah and Tunjungan districts, or visit cultural landmarks like the House of Sampoerna and the Submarine Monument (Monkasel).</p>
    <h2>Short Escapes Outside the City</h2>
    <p>For those with extra time, a 1-to-2-hour trip outside Surabaya leads to scenic natural landscapes. The Trawas and Pacet highlands in Mojokerto, along with Prigen in Pasuruan, provide cool mountain breezes, nature cafes, and cascading waterfalls.</p>
    <p>If you prefer coastal scenery, the Wonorejo Mangrove Ecotourism area in East Surabaya, or trips to Gresik and Madura across the Suramadu Bridge, make memorable Sunday road trips with fellow students before returning to weekday academic life on Monday.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Wisata+Weekend',
    categoryId: 5,
    categorySlug: 'jelajah-kota',
    subcategorySlug: 'wisata-budaya',
    tags: ['wisata', 'hiburan'],
    tagsEn: ['travel', 'leisure'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-08-30T12:00:00Z'
  },

  // Event
  {
    id: 26,
    title: 'Diesnatalis ke-72 Universitas Airlangga',
    slug: 'diesnatalis-72-unair',
    excerpt: 'Rangkaian peringatan hari ulang tahun ke-72 UNAIR yang diisi dengan berbagai kegiatan akademik, sosial, dan hiburan.',
    content: `<p>Pada bulan November mendatang, Universitas Airlangga akan memperingati perayaan Dies Natalis yang ke-72. Perayaan tahun ini mengusung tema "Airlangga Berbakti, Mengabdi untuk Negeri yang Inovatif dan Mandiri". Rangkaian acara akan berlangsung selama sebulan penuh, melibatkan seluruh elemen civitas akademika, mulai dari dosen, tenaga kependidikan, alumni, hingga seluruh mahasiswa.</p>
    <h2>Kegiatan Akademik dan Pengabdian</h2>
    <p>Rangkaian kegiatan diawali dengan Sidang Terbuka Universitas yang menghadirkan orasi ilmiah dari tokoh nasional. Selain itu, terdapat pameran inovasi riset, konferensi internasional di berbagai fakultas, dan kegiatan pengabdian masyarakat serentak di 10 desa binaan di Jawa Timur berupa pemeriksaan kesehatan gratis dan penyuluhan ekonomi kerakyatan.</p>
    <h2>Perlombaan dan Puncak Hiburan</h2>
    <p>Bagi mahasiswa, agenda yang paling dinanti adalah Pekan Olahraga dan Seni (PORSENI) antar fakultas yang mempertandingkan belasan cabang olahraga dan seni. Kemeriahan akan ditutup dengan acara Malam Puncak Dies Natalis berupa konser musik (Music Festival) berskala besar di halaman rektorat Kampus C, yang rencananya akan mengundang band papan atas nasional sebagai bintang tamu.</p>
    <p>Mahasiswa diimbau untuk turut serta memeriahkan rangkaian acara ini dan menjaga ketertiban, karena momen Dies Natalis adalah ajang unjuk kebanggaan dan solidaritas keluarga besar Universitas Airlangga.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Diesnatalis+72',
    categoryId: 6,
    categorySlug: 'event',
    tags: ['diesnatalis', 'perayaan'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-09-01T08:00:00Z'
  },
  {
    id: 27,
    title: 'Festival Budaya Surabaya 2026',
    slug: 'festival-budaya-surabaya-2026',
    excerpt: 'Event tahunan pagelaran seni dan budaya terbesar di kota pahlawan yang wajib dikunjungi.',
    content: `<p>Pemerintah Kota Surabaya bekerja sama dengan berbagai perguruan tinggi seni dan komunitas budaya se-Jawa Timur kembali menyelenggarakan "Festival Budaya Surabaya 2026". Acara ini merupakan salah satu dari 10 Kharisma Event Nusantara (KEN) Kementerian Pariwisata dan Ekonomi Kreatif yang bertujuan untuk melestarikan dan memperkenalkan kekayaan budaya lokal kepada generasi muda dan wisatawan.</p>
    <h2>Parade Seni dan Pertunjukan Jalanan</h2>
    <p>Festival yang akan berlangsung pada tanggal 10-12 Oktober 2026 ini akan dipusatkan di kawasan Balai Pemuda (Alun-Alun Surabaya) dan sepanjang Jalan Tunjungan. Highlight acara meliputi Parade Bunga, Tari Remo massal yang melibatkan 1000 penari, serta pertunjukan kesenian tradisional seperti Ludruk, Reog Ponorogo, dan Jaranan kontemporer.</p>
    <h2>Keterlibatan Mahasiswa</h2>
    <p>Unit Kegiatan Mahasiswa (UKM) Seni Tari dan Karawitan UNAIR turut ambil bagian dalam pementasan drama tari musikal yang mengangkat kisah epik Majapahit. Selain itu, BEM UNAIR juga membuka stan pameran kuliner dan kerajinan tangan hasil karya mahasiswa wirausaha binaan kampus.</p>
    <p>Acara ini terbuka untuk umum dan gratis. Namun, untuk menonton pertunjukan di ruang tertutup (Gedung Balai Budaya), pengunjung diwajibkan untuk mendaftar tiket masuk secara daring melalui aplikasi resmi pariwisata Pemkot Surabaya. Akses lalu lintas di sekitar Jalan Pemuda akan dialihkan selama acara berlangsung, sehingga pengunjung disarankan menggunakan transportasi umum.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Festival+Budaya',
    categoryId: 6,
    categorySlug: 'event',
    tags: ['budaya', 'surabaya'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-09-05T09:00:00Z'
  },
  {
    id: 28,
    title: 'Seminar Nasional Artificial Intelligence',
    slug: 'seminar-nasional-ai',
    excerpt: 'Diskusi pakar mengenai masa depan kecerdasan buatan dan dampaknya terhadap dunia akademik dan industri.',
    content: `<p>Fakultas Sains dan Teknologi (FST) bekerja sama dengan Asosiasi Ilmuwan Data Indonesia menyelenggarakan Seminar Nasional bertajuk "Navigating the AI Revolution: Opportunities and Ethics in Higher Education and Industry". Seminar ini merespons perkembangan pesat teknologi Kecerdasan Buatan (AI) generatif yang mendisrupsi banyak sektor profesi.</p>
    <h2>Pembicara dan Topik</h2>
    <p>Acara ini menghadirkan tiga Keynote Speaker terkemuka: Direktur Riset dan Teknologi dari Kementerian Kominfo, Lead Data Scientist dari perusahaan decacorn Indonesia, serta Guru Besar Bidang Komputasi UNAIR. Topik yang dibahas mencakup penerapan AI untuk efisiensi bisnis, tantangan regulasi, hingga diskusi filosofis mengenai etika penggunaan AI dalam penulisan karya ilmiah oleh mahasiswa.</p>
    <h2>Call for Papers dan Pelaksanaan</h2>
    <p>Selain sesi seminar utama, terdapat juga sesi paralel (Call for Papers) di mana para peneliti dan mahasiswa pascasarjana akan mempresentasikan hasil riset terbaru mereka terkait machine learning dan computer vision. Makalah terpilih akan dipublikasikan di jurnal internasional bereputasi.</p>
    <p>Seminar akan dilaksanakan secara hybrid pada hari Sabtu, 24 Oktober 2026. Tiket presale untuk mahasiswa (S1/S2/S3) sudah dapat dibeli melalui tautan yang tersedia di website resmi FST UNAIR. Peserta akan mendapatkan fasilitas seminar kit, sertifikat elektronik ber-SKP, dan konsumsi.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Seminar+AI',
    categoryId: 6,
    categorySlug: 'event',
    tags: ['seminar', 'teknologi'],
    isPinned: false,
    isPopular: true,
    publishedAt: '2026-09-08T10:00:00Z'
  },
  {
    id: 29,
    title: 'UNAIR Run 5K: Lari untuk Kesehatan',
    slug: 'unair-run-5k',
    excerpt: 'Lomba lari maraton mini dalam area kampus C terbuka untuk mahasiswa dan masyarakat umum.',
    content: `<p>Gaya hidup sehat dan tren olahraga lari (running) semakin digemari oleh masyarakat perkotaan. Mengakomodasi antusiasme tersebut, Direktorat Kemahasiswaan berkolaborasi dengan UKM Atletik mengadakan event lari santai bertajuk "UNAIR Green Run 5K". Event olahraga ini juga sekaligus mengampanyekan kesadaran lingkungan dan pengurangan penggunaan plastik sekali pakai di lingkungan kampus.</p>
    <h2>Rute dan Kategori Lomba</h2>
    <p>Rute sejauh 5 kilometer akan mengambil garis start dan finish di halaman Airlangga Convention Center (ACC), memutari jalan-jalan rindang di dalam area Kampus C, melewati danau Rektorat, hingga ke fasilitas Rumah Sakit Universitas Airlangga. Lomba dibagi menjadi kategori Mahasiswa Putra/Putri, Dosen/Karyawan, dan Masyarakat Umum.</p>
    <h2>Fasilitas Peserta (Race Pack)</h2>
    <p>Dengan biaya pendaftaran sebesar Rp 150.000 (diskon khusus menjadi Rp 75.000 bagi mahasiswa UNAIR dengan menunjukkan KTM), peserta akan mendapatkan race pack eksklusif yang berisi jersey lari dry-fit, nomor dada (BIB) dengan chip timing (waktu), medali finisher (bagi yang berhasil menyelesaikan rute di bawah batas waktu cut-off time), serta kupon doorprize dengan hadiah utama sepeda listrik.</p>
    <p>Acara dijadwalkan pada hari Minggu, 15 November 2026 pagi hari (Flag off pukul 05.30 WIB). Segera amankan slot Anda karena kuota peserta dibatasi hanya untuk 2.000 pelari guna menjaga kenyamanan di rute.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=UNAIR+Run',
    categoryId: 6,
    categorySlug: 'event',
    tags: ['olahraga', 'run'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-08-20T11:00:00Z'
  },
  {
    id: 30,
    title: 'Bazar UMKM Mahasiswa Entrepreneurship Week',
    slug: 'bazar-umkm-entrepreneurship-week',
    excerpt: 'Pameran produk dan kuliner hasil karya mahasiswa wirausaha Universitas Airlangga.',
    content: `<p>Sebagai universitas yang mengedepankan visi penciptaan lulusan yang berjiwa wirausaha (entrepreneurial university), Direktorat Inovasi dan Pengembangan Pendidikan (DIPP) menyelenggarakan "Airlangga Entrepreneurship Week 2026". Puncak acara dari minggu kewirausahaan ini adalah Bazar UMKM Mahasiswa yang digelar di selasar penghubung antar fakultas Kampus B.</p>
    <h2>Ajang Unjuk Gigi Bisnis Mahasiswa</h2>
    <p>Bazar ini merupakan wadah bagi ratusan kelompok mahasiswa penerima dana hibah Program Mahasiswa Wirausaha (PMW) dan mata kuliah kewirausahaan untuk memasarkan produk mereka secara langsung ke konsumen. Terdapat lebih dari 80 stan yang menjual berbagai produk inovatif, mulai dari makanan dan minuman kekinian, produk fashion berkelanjutan (sustainable fashion), kriya, hingga aplikasi layanan digital.</p>
    <h2>Dukungan terhadap Bisnis Lokal</h2>
    <p>Pengunjung bazar tidak hanya bisa berbelanja dan mencicipi kuliner unik, tetapi juga berkesempatan untuk berjejaring (networking) atau bahkan melakukan investasi (pitching) jika menemukan ide bisnis rintisan (startup) yang prospektif. Transaksi selama bazar didorong menggunakan metode pembayaran non-tunai (cashless/QRIS) bekerja sama dengan bank mitra universitas.</p>
    <p>Acara ini berlangsung dari hari Selasa hingga Kamis (17-19 November 2026) mulai pukul 09.00 hingga 16.00 WIB. Mari datang, ramaikan, dan dukung produk-produk karya teman-teman mahasiswa kita agar bisa berkembang menjadi bisnis yang berkesinambungan dan membuka lapangan kerja di masa depan.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Bazar+UMKM',
    categoryId: 6,
    categorySlug: 'event',
    tags: ['bazar', 'wirausaha'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-08-25T12:00:00Z'
  },

  // Panduan Internasional
  {
    id: 31,
    title: 'Cara Mengurus Visa Pelajar (VITAS) Indonesia',
    slug: 'cara-mengurus-visa-pelajar',
    excerpt: 'Panduan langkah demi langkah bagi calon mahasiswa asing dalam mengurus Visa Tinggal Terbatas (VITAS) untuk keperluan studi.',
    content: `<p>Selamat datang di Universitas Airlangga! Bagi mahasiswa asing yang telah diterima di program sarjana, pertukaran, atau program studi lainnya, mengurus visa adalah langkah paling penting sebelum datang ke Indonesia. Anda wajib memiliki Visa Pelajar, yang secara teknis dikenal sebagai VITAS (Visa Tinggal Terbatas) untuk keperluan studi, dan nantinya akan diubah menjadi ITAS (Izin Tinggal Terbatas) setelah kedatangan.</p>
    <h2>Persyaratan Izin Belajar</h2>
    <p>Sebelum mengajukan visa, Universitas Airlangga akan membantu Anda memperoleh Izin Belajar dari Kementerian Pendidikan dan Kebudayaan di Jakarta. Anda harus menyerahkan dokumen ke kantor Airlangga Global Engagement (AGE), seperti halaman data paspor yang masih berlaku minimal 18 bulan, surat keterangan kesehatan, pernyataan jaminan finansial, serta surat pernyataan bahwa Anda tidak akan bekerja saat menempuh studi.</p>
    <h2>Proses Pengajuan E-Visa</h2>
    <p>Setelah Izin Belajar diterbitkan, universitas sebagai sponsor akan mengajukan E-Visa secara online melalui portal Direktorat Jenderal Imigrasi. Setelah disetujui, E-Visa akan dikirim ke email Anda dalam format PDF. Anda harus mencetak dokumen ini dan menunjukkan kepada petugas imigrasi saat masuk ke Indonesia. Hindari masuk ke Indonesia dengan Visa Turis atau Visa on Arrival (VoA), karena visa tersebut tidak bisa diubah menjadi Visa Pelajar.</p>
    <p>Dalam waktu 7 hari setelah kedatangan di Surabaya, Anda harus datang ke Kantor Imigrasi setempat dengan didampingi staf AGE untuk mengambil data biometrik dan foto bagi penerbitan kartu ITAS fisik. Izin ini harus diperpanjang setiap tahun selama masa studi Anda.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Visa+Guide',
    categoryId: 7,
    categorySlug: 'panduan-internasional',
    tags: ['visa', 'international'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-07-01T08:00:00Z'
  },
  {
    id: 32,
    title: 'Panduan Akomodasi untuk Mahasiswa Asing',
    slug: 'panduan-akomodasi-mahasiswa-asing',
    excerpt: 'Pilihan tempat tinggal yang aman dan nyaman bagi mahasiswa internasional di sekitar kampus UNAIR.',
    content: `<p>Menemukan tempat tinggal yang aman dan nyaman adalah hal penting dalam pengalaman studi di luar negeri. Universitas Airlangga menyediakan beberapa pilihan hunian yang disesuaikan dengan kebutuhan mahasiswa internasional, mulai dari asrama di dalam kampus hingga apartemen atau kost di luar kampus.</p>
    <h2>Asrama di Dalam Kampus</h2>
    <p>Universitas Airlangga memiliki asrama yang berada di dalam Kampus C. Ini menjadi pilihan paling terjangkau dan praktis, terutama bagi mahasiswa baru yang baru tiba. Blok khusus mahasiswa internasional biasanya menyediakan kamar berisi dua orang dengan furnitur dasar, AC, dan kamar mandi bersama. Tinggal di asrama adalah cara yang baik untuk merasakan kehidupan mahasiswa lokal dan menjalin pertemanan dengan mahasiswa Indonesia. Namun, kapasitasnya terbatas dan perlu dipesan jauh-jauh hari melalui kantor AGE.</p>
    <h2>Pilihan di Luar Kampus: Kost dan Apartemen</h2>
    <p>Bagi yang menginginkan privasi lebih, banyak mahasiswa internasional memilih kost eksklusif yang berada di sekitar Kampus B dan C. Kost ini biasanya menyediakan kamar single dengan fasilitas lengkap seperti AC, Wi-Fi, layanan laundry, dan keamanan 24 jam. Biaya sewa bulanan berkisar antara Rp 1.500.000 hingga Rp 3.000.000 tergantung fasilitas yang ditawarkan.
    Selain itu, beberapa apartemen bertingkat seperti Puncak Dharmahusada atau Educity juga tidak jauh dari kampus. Menyewa studio apartemen memberi privasi lebih lengkap dengan akses kolam renang dan gym, dengan biaya sekitar Rp 3.000.000 hingga Rp 5.000.000 per bulan.</p>
    <p>Tim Dukungan Mahasiswa Internasional AGE selalu siap membantu Anda dengan rekomendasi hunian, menerjemahkan perjanjian sewa, dan berkomunikasi dengan pemilik rumah agar Anda menemukan tempat yang terasa seperti rumah kedua.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Accommodation',
    categoryId: 7,
    categorySlug: 'panduan-internasional',
    tags: ['housing', 'international'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-07-15T09:00:00Z'
  },
  {
    id: 33,
    title: 'Tips Hidup di Surabaya untuk Mahasiswa Internasional',
    slug: 'tips-hidup-surabaya-internasional',
    excerpt: 'Informasi praktis tentang cuaca, transportasi, dan cara beradaptasi dengan ritme kehidupan di kota pahlawan.',
    content: `<p>Surabaya adalah kota terbesar kedua di Indonesia dan kota yang dinamis, ramai, serta menjadi pusat ekonomi di wilayah Indonesia Timur. Menyesuaikan diri dengan kehidupan di kota baru memang terasa berat, tetapi dengan beberapa tips praktis, Anda akan cepat beradaptasi dengan ritme hidup "Suroboyoan".</p>
    <h2>Cuaca dan Pakaian</h2>
    <p>Surabaya dikenal dengan iklim tropis yang panas dan lembap sepanjang tahun. Suhu pada siang hari rata-rata sekitar 32-35°C. Pakaian ringan berbahan katun sangat disarankan untuk dipakai sehari-hari. Namun, demi menghormati budaya lokal dan peraturan kampus, pastikan Anda berpakaian sopan saat berada di kampus, seperti tidak memakai celana pendek, tank top, atau sandal jepit. Saat musim hujan datang, biasanya pada bulan November hingga April, selalu bawa payung atau jas hujan karena hujan deras bisa terjadi tiba-tiba.</p>
    <h2>Bergerak di Dalam Kota</h2>
    <p>Meski sistem transportasi umum kota terus berkembang dengan adanya Suroboyo Bus, cara paling andal dan populer untuk berpindah tempat adalah melalui aplikasi ojek online seperti Gojek atau Grab. Aplikasi ini sangat membantu mahasiswa internasional—Anda bisa memesan ojek untuk perjalanan solo singkat, mobil untuk perjalanan berkelompok, atau memesan makanan langsung ke kamar kos melalui GoFood atau GrabFood. Mengunduh aplikasi dan menghubungkannya dengan dompet digital lokal seperti Gopay atau OVO adalah salah satu hal yang sebaiknya dilakukan segera setelah tiba.</p>
    <p>Warga Surabaya dikenal hangat, lugas, dan ramah. Jangan ragu untuk memakai sapaan sederhana dalam bahasa Indonesia seperti “Terima kasih” atau “Permisi”. Senyuman dan sikap sopan akan sangat membantu saat berinteraksi di pasar atau warung lokal.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Life+in+Surabaya',
    categoryId: 8,
    categorySlug: 'kebutuhan-harian',
    tags: ['tips', 'living'],
    isPinned: false,
    isPopular: true,
    publishedAt: '2026-08-01T10:00:00Z'
  },
  {
    id: 34,
    title: 'Layanan Bantuan Mahasiswa Internasional UNAIR',
    slug: 'layanan-bantuan-mahasiswa-internasional',
    excerpt: 'Daftar layanan administrasi, konseling, dan program buddy yang difasilitasi oleh Airlangga Global Engagement.',
    content: `<p>Menyesuaikan diri dengan sistem akademik dan lingkungan budaya baru memang menghadirkan tantangan tersendiri. Menyadari hal ini, Airlangga Global Engagement (AGE) membangun sistem dukungan yang komprehensif agar mahasiswa internasional dapat menjalani studi dengan lancar dan pengalaman yang lebih kaya di Universitas Airlangga.</p>
    <h2>Program Buddy Mahasiswa Internasional</h2>
    <p>Salah satu inisiatif unggulan kami adalah Program Buddy. Setelah konfirmasi penerimaan, Anda akan dipasangkan dengan seorang mahasiswa Indonesia sebagai buddy. Buddy ini adalah relawan mahasiswa yang akan menghubungi Anda sebelum kedatangan, menjemput di Bandara Internasional Juanda, membantu menata tempat tinggal, mendampingi pendaftaran kartu SIM, dan membimbing Anda saat orientasi awal kampus serta proses pendaftaran mata kuliah. Mereka adalah teman pertama dan pemandu informal Anda di Surabaya.</p>
    <h2>Dukungan Administrasi dan Kesejahteraan</h2>
    <p>Kantor Internasional AGE berperan sebagai pusat layanan satu atap untuk kebutuhan administrasi Anda, termasuk perpanjangan visa, pembaruan izin belajar, dan penerbitan surat resmi universitas. Selain itu, jika Anda mengalami culture shock, stres akademik, atau kesulitan pribadi, universitas menyediakan layanan konseling psikologis yang bersifat rahasia dan gratis dengan psikolog yang bisa berbahasa Inggris di Help Center yang berada di Kampus C.</p>
    <p>Kami juga rutin menyelenggarakan perjalanan budaya, festival kuliner internasional, dan sesi pertukaran bahasa untuk menjaga komunitas internasional tetap solid serta mendorong pertukaran budaya antara mahasiswa asing dan lokal.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Student+Support',
    categoryId: 7,
    categorySlug: 'panduan-internasional',
    tags: ['support', 'services'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-08-15T11:00:00Z'
  },
  {
    id: 35,
    title: 'Mengenal Budaya dan Kuliner Khas Jawa Timur',
    slug: 'budaya-kuliner-jawa-timur',
    excerpt: 'Pengantar singkat mengenai adat istiadat sosial dan makanan tradisional yang wajib dicoba selama berada di Surabaya.',
    content: `<p>Pengalaman studi di luar negeri Anda belum lengkap jika belum menggali kekayaan budaya dan sajian kuliner Jawa Timur. Surabaya sebagai ibu kota Provinsi Jawa Timur menyatukan beragam budaya, mulai Jawa, Madura, Arab, hingga Tionghoa, sehingga menciptakan tradisi unik dan cita rasa kuliner yang ikonik.</p>
    <h2>Cicipan Kuliner Khas yang Wajib Dicoba</h2>
    <p>Masakan Surabaya dikenal dengan cita rasa yang kaya, gurih, dan sering kali pedas. Anda wajib mencoba hidangan ikonik kota ini, yaitu <strong>Rawon</strong>—sup daging sapi berwarna hitam yang kaya rempah dan khas dengan penggunaan keluak, biasanya disajikan dengan telur asin dan tauge. Kuliner lainnya yang tidak boleh dilewatkan adalah <strong>Rujak Cingur</strong>, salad unik yang terdiri dari sayur, buah, dan cingur (hidung sapi yang direbus), serta disiram saus petis yang manis, pedas, dan beraroma kuat. Untuk kebutuhan makan malam, Anda bisa mampir ke warung pinggir jalan dan menikmati <strong>Sego Sambal</strong> dengan nasi, sambal pedas, dan lauk gorengan.</p>
    <h2>Etika Sosial dan Tata Krama</h2>
    <p>Budaya Indonesia sangat menghargai sikap hormat kepada orang yang lebih tua serta sopan santun dalam berinteraksi sosial. Biasanya, saat makan, memberi, atau menerima sesuatu, gunakan tangan kanan karena tangan kiri dianggap kurang sopan untuk aktivitas tersebut. Saat menyapa dosen atau staf, gunakan gelar formal seperti “Bapak” atau “Ibu” diikuti nama. Memahami dan menerapkan nuansa sosial ini akan membuat Anda lebih disegani oleh komunitas lokal dan memperkaya pengalaman lintas budaya Anda.</p>
    <p>Universitas juga sering mengadakan workshop budaya di mana mahasiswa internasional bisa belajar memainkan gamelan, membuat batik, atau mempraktikkan tari tradisional Jawa. Sangat disarankan bagi Anda untuk ikut serta dalam kegiatan ini!</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Culture+Food',
    categoryId: 8,
    categorySlug: 'kebutuhan-harian',
    tags: ['culture', 'food'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-08-25T12:00:00Z'
  },
  {
    id: 36,
    title: 'Perpustakaan dan Museum sebagai Ruang Belajar di Surabaya',
    titleEn: 'Libraries and Museums as Learning Spaces in Surabaya',
    slug: 'perpustakaan-museum-ruang-belajar-surabaya',
    excerpt: 'Perpustakaan dan museum dapat menjadi ruang belajar di luar kelas untuk memperluas wawasan, menelusuri sumber, dan memahami sejarah serta kehidupan kota.',
    excerptEn: 'Libraries and museums offer learning beyond the classroom, helping visitors broaden their knowledge, explore sources, and understand a city’s history and life.',
    content: `<p>Belajar tidak hanya berlangsung di ruang kelas. Perpustakaan dan museum memberi kesempatan untuk mencari tahu lebih jauh melalui bacaan, koleksi, dan pengalaman melihat sumber secara langsung. Keduanya bisa menjadi tujuan belajar yang menarik bagi mahasiswa maupun masyarakat umum.</p>
    <h2>Perpustakaan untuk Menelusuri Gagasan</h2>
    <p>Di perpustakaan, pengunjung dapat memilih bacaan sesuai topik, membandingkan berbagai sudut pandang, dan menyusun pemahaman berdasarkan sumber yang lebih beragam. Perpustakaan Bank Indonesia, misalnya, berfokus pada ekonomi, moneter, dan perbankan, serta memiliki referensi tentang politik, pajak, ilmu eksakta, ilmu terapan, dan sastra. Ragam koleksi ini dapat menjadi pintu awal untuk mengenal hubungan antara kebijakan, masyarakat, dan kehidupan sehari-hari.</p>
    <h2>Museum untuk Memahami Konteks</h2>
    <p>Museum membantu pengunjung menghubungkan informasi dengan benda, cerita, dan konteks zamannya. Di Museum Surabaya, koleksi yang berkaitan dengan kehidupan sosial dan budaya kota dapat membantu pengunjung melihat bagaimana Surabaya berkembang dan bagaimana kehidupan warganya terbentuk. Mengamati koleksi sambil membaca keterangannya membuat sejarah terasa lebih dekat daripada sekadar menghafal tanggal dan nama.</p>
    <h2>Menggabungkan Kunjungan dan Riset</h2>
    <p>Kunjungan akan lebih bermakna jika dimulai dengan pertanyaan sederhana, seperti bagaimana perubahan kota memengaruhi kehidupan masyarakat atau bagaimana kebijakan ekonomi dirasakan dalam keseharian. Catat hal yang menarik di museum, lalu telusuri topik terkait melalui buku dan referensi di perpustakaan. Dengan cara ini, pengamatan dan bacaan saling melengkapi.</p>
    <p>Perpustakaan dan museum bukan hanya tempat menyimpan buku atau benda bersejarah. Keduanya adalah ruang publik untuk bertanya, menghubungkan informasi, dan membangun pemahaman yang lebih utuh tentang kota.</p>`,
    contentEn: `<p>Learning does not happen only in classrooms. Libraries and museums offer opportunities to explore ideas through reading, collections, and first-hand encounters with sources. Both can be engaging learning destinations for students and the wider community.</p>
    <h2>Libraries for Exploring Ideas</h2>
    <p>In a library, visitors can choose materials on a topic, compare different perspectives, and build understanding from a wider range of sources. The Bank Indonesia Library, for example, focuses on economics, monetary affairs, and banking, while also holding references on politics, taxation, exact sciences, applied sciences, and literature. Its varied collection can be a starting point for exploring how policy, society, and daily life connect.</p>
    <h2>Museums for Understanding Context</h2>
    <p>Museums help visitors connect information with objects, stories, and the context of their time. At the Surabaya Museum, collections related to the city’s social and cultural life can help visitors see how Surabaya developed and how the lives of its residents took shape. Observing an exhibit while reading its description can make history feel closer than memorizing dates and names alone.</p>
    <h2>Combining Visits and Research</h2>
    <p>A visit becomes more meaningful when it begins with a simple question, such as how urban change affects people’s lives or how economic policy is experienced day to day. Note what stands out at the museum, then explore related topics through books and references at the library. Observation and reading can then complement one another.</p>
    <p>Libraries and museums are more than places for storing books or historic objects. They are public spaces for asking questions, connecting information, and building a fuller understanding of the city.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Library+and+Museum',
    categoryId: 5,
    categorySlug: 'jelajah-kota',
    subcategorySlug: 'museum-galeri',
    additionalSubcategorySlugs: ['perpustakaan-umum'],
    tags: ['perpustakaan', 'museum', 'pembelajaran'],
    tagsEn: ['library', 'museum', 'learning'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-09-28T09:00:00Z'
  },
  {
    id: 37,
    title: 'Tips Mencuci Pakaian agar Tetap Bersih dan Awet',
    titleEn: 'Laundry Tips for Clean, Long-Lasting Clothes',
    slug: 'tips-laundry-pakaian-bersih-awet',
    excerpt: 'Kebiasaan sederhana saat mencuci dapat menjaga pakaian tetap bersih, warna tidak cepat pudar, dan proses laundry lebih hemat.',
    excerptEn: 'Simple laundry habits can keep clothes clean, prevent colors from fading, and make washing more efficient.',
    content: `<p>Mencuci pakaian secara teratur penting bagi mahasiswa, terutama saat tinggal di kos dengan ruang dan waktu terbatas. Kebiasaan mencuci yang tepat membantu pakaian lebih awet sekaligus mencegah bau apek dan warna cepat pudar.</p>
    <h2>Pisahkan dan Periksa Pakaian</h2>
    <p>Pisahkan pakaian putih dari pakaian berwarna, dan kelompokkan bahan yang mudah luntur atau membutuhkan perlakuan khusus. Periksa label perawatan sebelum mencuci. Kosongkan saku, tutup ritsleting, dan balik pakaian berwarna gelap atau bercetak agar permukaannya lebih terlindungi.</p>
    <h2>Gunakan Deterjen dan Mesin Secukupnya</h2>
    <p>Ikuti takaran deterjen pada kemasan; terlalu banyak deterjen tidak membuat pakaian lebih bersih dan dapat meninggalkan residu. Jangan memenuhi tabung mesin sampai terlalu padat karena pakaian perlu ruang untuk bergerak. Pilih siklus pencucian yang sesuai dengan jenis kain dan tingkat kotornya.</p>
    <h2>Keringkan dengan Tuntas</h2>
    <p>Segera keluarkan pakaian setelah siklus selesai agar tidak lembap terlalu lama. Jemur di tempat yang memiliki sirkulasi udara baik, dan pastikan pakaian benar-benar kering sebelum dilipat atau disimpan. Jika menggunakan layanan drop-off, pisahkan pakaian yang perlu perlakuan khusus dan sampaikan instruksi dengan jelas.</p>
    <p>Membuat jadwal mencuci mingguan dan menangani noda sesegera mungkin juga membantu pekerjaan laundry terasa lebih ringan dan pakaian siap dipakai saat dibutuhkan.</p>`,
    contentEn: `<p>Regular laundry is important for students, especially when living in a boarding house with limited space and time. Good washing habits help clothes last longer while preventing musty odors and fading.</p>
    <h2>Sort and Check Your Clothes</h2>
    <p>Separate whites from colored clothes, and group fabrics that may bleed or need special care. Check the care label before washing. Empty pockets, zip up fasteners, and turn dark or printed garments inside out to protect their surfaces.</p>
    <h2>Use the Right Amount of Detergent</h2>
    <p>Follow the detergent instructions; using too much does not make clothes cleaner and can leave residue. Do not overfill the washer, since clothes need room to move. Choose a cycle that suits the fabric and how soiled it is.</p>
    <h2>Dry Clothes Thoroughly</h2>
    <p>Remove clothes promptly when the cycle ends so they are not left damp. Hang them somewhere with good airflow, and make sure they are completely dry before folding or storing. For drop-off laundry, separate items that need special care and clearly explain your instructions.</p>
    <p>A weekly laundry schedule and treating stains promptly can also make washing less of a chore and ensure clothes are ready when you need them.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Laundry+Tips',
    categoryId: 8,
    categorySlug: 'kebutuhan-harian',
    subcategorySlug: 'laundry',
    tags: ['laundry', 'tips', 'pakaian'],
    tagsEn: ['laundry', 'tips', 'clothing'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-09-28T10:00:00Z'
  },
  {
    id: 38,
    title: 'Tips Belanja Kebutuhan Sehari-hari dengan Hemat',
    titleEn: 'Tips for Budget-Friendly Everyday Shopping',
    slug: 'tips-belanja-kebutuhan-sehari-hari',
    excerpt: 'Rencanakan belanja, atur anggaran, dan pilih barang dengan cermat agar kebutuhan harian terpenuhi tanpa pengeluaran berlebihan.',
    excerptEn: 'Plan your shopping, set a budget, and choose items carefully to cover daily needs without overspending.',
    content: `<p>Belanja kebutuhan sehari-hari akan lebih mudah dikendalikan jika dilakukan dengan rencana. Bagi mahasiswa yang mengatur uang bulanan, beberapa langkah sederhana dapat membantu menghindari belanja impulsif dan mengurangi bahan yang terbuang.</p>
    <h2>Buat Daftar dan Tetapkan Anggaran</h2>
    <p>Periksa persediaan di kamar atau dapur sebelum berangkat, lalu catat barang yang benar-benar perlu dibeli. Tetapkan batas belanja sesuai anggaran mingguan atau bulanan. Daftar belanja membantu menjaga fokus dan memudahkan Anda menunda barang yang belum dibutuhkan.</p>
    <h2>Bandingkan Harga dan Ukuran</h2>
    <p>Jangan hanya melihat harga pada kemasan. Bandingkan harga per satuan atau ukuran agar tahu pilihan yang lebih ekonomis. Membeli ukuran besar bisa lebih hemat untuk barang yang rutin digunakan, tetapi pastikan jumlahnya dapat dihabiskan sebelum kedaluwarsa atau rusak.</p>
    <h2>Periksa Kualitas dan Tanggal Kedaluwarsa</h2>
    <p>Untuk bahan makanan, pilih produk yang kondisinya baik dan periksa tanggal kedaluwarsa. Sesuaikan jumlah bahan segar dengan rencana makan dan kapasitas penyimpanan. Simpan barang yang lebih dahulu dibeli di bagian depan agar digunakan lebih dulu.</p>
    <p>Jika memungkinkan, susun menu sederhana untuk beberapa hari. Dengan begitu, belanja menjadi lebih terarah, kebutuhan pokok tidak terlewat, dan pengeluaran harian lebih mudah dipantau.</p>`,
    contentEn: `<p>Everyday shopping is easier to manage when you have a plan. For students keeping track of a monthly budget, a few simple steps can help avoid impulse purchases and reduce waste.</p>
    <h2>Make a List and Set a Budget</h2>
    <p>Check your room or kitchen supplies before leaving, then write down what you actually need. Set a spending limit based on your weekly or monthly budget. A list helps you stay focused and makes it easier to postpone items you do not need yet.</p>
    <h2>Compare Prices and Sizes</h2>
    <p>Do not look only at the price on the package. Compare the unit price or quantity to find better value. Larger packages may save money for items you use regularly, but make sure you can use them before they expire or spoil.</p>
    <h2>Check Quality and Expiration Dates</h2>
    <p>For groceries, choose items in good condition and check expiration dates. Match the quantity of fresh ingredients to your meal plan and storage capacity. Keep older purchases at the front so they are used first.</p>
    <p>When possible, plan a simple menu for a few days. This makes shopping more focused, helps you remember essentials, and makes daily spending easier to track.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Shopping+Tips',
    categoryId: 8,
    categorySlug: 'kebutuhan-harian',
    subcategorySlug: 'belanja-harian',
    tags: ['belanja', 'hemat', 'kebutuhan harian'],
    tagsEn: ['shopping', 'budgeting', 'daily needs'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-09-28T11:00:00Z'
  }
];

export const places: Place[] = [
  {
    id: 1,
    name: "Depot Tanjung Api",
    nameEn: "Depot Tanjung Api",
    slug: "depot-tanjung-api",
    categorySlug: "jelajah-kota",
    subcategorySlug: "kuliner",
    address: "Jl. Walikota Mustajab No. 41, Surabaya",
    priceRange: "Rp 12.000 - 25.000",
    priceRangeEn: "IDR 12,000-25,000",
    hours: "10.00 - 23.30 WIB",
    hoursEn: "10:00-23:30 WIB",
    description: "Depot legendaris favorit mahasiswa UNAIR, terkenal dengan nasi campur dan sambal terasinya yang pedas menggigit. Porsi besar, tempat luas, cocok buat makan rame-rame.",
    descriptionEn: "A legendary culinary depot favored by UNAIR students, renowned for its hearty mixed rice and spicy chili sambal. Generous portions and spacious seating, great for group dining.",
    menuSections: [
      {
        title: "Minuman",
        titleEn: "Drinks",
        items: [
          "Es Pisang Ijo - Rp27.272",
          "Es Susu Klepon - Rp22.727",
          "Es Susu Ketan Hitam - Rp22.727",
          "Es Susu Kacang Hijau - Rp22.727",
          "Kopi Tubruk - Rp9.090",
          "Kopi Saring - Rp10.909",
          "Kopi Susu Panas - Rp13.636",
          "Kopi Butter - Rp16.363",
          "Es Kopi Susu - Rp20.000",
          "Es Cokelat - Rp15.454",
          "Hot Cokelat - Rp15.454",
          "Air Mineral - Rp7.272"
        ]
      },
      {
        title: "Teh & Minuman Segar",
        titleEn: "Tea & Refreshments",
        items: [
          "Es Teh Peach - Rp16.363",
          "Es Teh Leci - Rp16.363",
          "Es Teh Strawberry - Rp16.363",
          "Es Lemon Tea - Rp16.363",
          "Es Markisa - Rp16.363",
          "Es Teh Tarik - Rp16.363",
          "Es Susu Cincau - Rp18.181",
          "Es Cendol - Rp20.000",
          "Es Kopi Susu Gula Aren - Rp22.727",
          "Mix Berry - Rp20.000",
          "Winter Berry - Rp18.181",
          "Refresh Juice - Rp16.363",
          "Pea Berry - Rp18.181",
          "Spring Berry - Rp18.181",
          "Pink Berry - Rp22.727",
          "Tropical Berry - Rp22.727"
        ]
      },
      {
        title: "Camilan",
        titleEn: "Snacks",
        items: [
          "Tekwan Palembang - Rp22.727",
          "Pempek - Rp36.363",
          "Otak-otak - Rp31.818",
          "Pempek Kriuk - Rp31.818",
          "Tahu Walik - Rp22.727",
          "Bakso Goreng - Rp22.727",
          "Udang Keju - Rp22.727",
          "Lumpia Kulit Tahu - Rp21.818",
          "Cheeseroll - Rp24.545",
          "Peanut Butter Toast - Rp21.818",
          "Kaya Toast Gandum - Rp18.181",
          "Kaloci - Rp18.181",
          "Tape Roll - Rp18.181",
          "Cakwe Udang - Rp22.727",
          "Gyoza - Rp22.727",
          "Cireng - Rp20.000"
        ]
      },
      {
        title: "Makanan Utama",
        titleEn: "Main Dishes",
        items: [
          "Nasi Goreng Szechuan - Rp30.000",
          "Nasi Goreng Tanjung Api - Rp24.545",
          "Nasi Goreng Cumi - Rp26.363",
          "Nasi Goreng Cakalang Pete - Rp28.181",
          "Bakmie Goreng - Rp24.545",
          "Kwetiauw Kuah Sapi - Rp28.181",
          "Kwetiauw Goreng - Rp27.272",
          "Mie Garlic Spesial - Rp25.454",
          "Mie Garlic - Rp12.727",
          "Mie Garlic Charsiu - Rp17.272",
          "Mie Garlic Sapi - Rp22.727",
          "Mie Szechuan Sapi - Rp25.454",
          "Mie Szechuan Spesial - Rp29.090",
          "Mie Szechuan Charsiu - Rp20.000",
          "Mie Szechuan - Rp16.363",
          "Mie Kuah Kari - Rp27.272",
          "Misoa Kuah Ayam Bawang - Rp20.000",
          "Nasi Daging Sambal Bawang - Rp21.818",
          "Nasi Daging Sambal Ijo - Rp21.818",
          "Nasi Cakalang Sambal Bawang - Rp21.818",
          "Nasi Cakalang Sambal Ijo - Rp21.818",
          "Nasi Cumi Sambal Bawang - Rp21.818",
          "Nasi Cumi Sambal Ijo - Rp21.818",
          "Nasi Udang Sambal Bawang - Rp21.818",
          "Nasi Udang Sambal Ijo - Rp21.818",
          "Nasi Ayam Ngohiong - Rp21.818"
        ]
      }
    ],
    tags: ["nasi campur", "pedas", "porsi besar"],
    tagsEn: ["mixed rice", "spicy", "large portion"]
  },
  {
    id: 2,
    name: "Perpustakaan Bank Indonesia",
    nameEn: "Bank Indonesia Library",
    slug: "perpustakaan-bank-indonesia",
    categorySlug: "jelajah-kota",
    subcategorySlug: "perpustakaan-umum",
    address: "Jl. Taman Mayangkara No. 6, Darmo, Surabaya",
    hours: "Senin-Jumat, 08.00-16.30 WIB",
    hoursEn: "Monday-Friday, 08:00-16:30 WIB",
    description: "Perpustakaan Bank Indonesia berfokus pada bidang ekonomi, moneter, dan perbankan, serta menyediakan banyak referensi tentang politik, pajak, ilmu eksakta, dan ilmu terapan. Koleksinya juga mencakup beberapa novel sastra, termasuk karya Ajip Rosidi dan Pramoedya Ananta Toer.",
    descriptionEn: "The Bank Indonesia Library focuses on economics, monetary affairs, and banking, and also offers many references on politics, taxation, exact sciences, and applied sciences. Its collection includes selected literary novels, including works by Ajip Rosidi and Pramoedya Ananta Toer.",
    infoSections: [
      {
        title: "Koleksi",
        titleEn: "Collections",
        items: [
          "Fokus koleksi ekonomi, moneter, dan perbankan",
          "Referensi politik, pajak, ilmu eksakta, dan ilmu terapan",
          "Koleksi novel sastra, termasuk karya Ajip Rosidi dan Pramoedya Ananta Toer"
        ],
        itemsEn: [
          "Collections focused on economics, monetary affairs, and banking",
          "References on politics, taxation, exact sciences, and applied sciences",
          "Selected literary novels, including works by Ajip Rosidi and Pramoedya Ananta Toer"
        ]
      }
    ],
    tags: ["perpustakaan", "ekonomi", "moneter", "sastra"],
    tagsEn: ["library", "economics", "monetary", "literature"]
  },
  {
    id: 3,
    name: "Karbs Social - Bakery & Cafe",
    nameEn: "Karbs Social - Bakery & Cafe",
    slug: "karbs",
    categorySlug: "jelajah-kota",
    subcategorySlug: "kuliner",
    address: "Jl. Opak No. 52, Surabaya",
    hours: "07.00 - 22.00 WIB",
    hoursEn: "07:00-22:00 WIB",
    description: "Karbs Social adalah tempat berkumpul di Opak, Surabaya. Tempat ini merupakan perpaduan antara Karbs Bakehouse Citraland dan Karbs Café Araya dalam satu ruang yang hangat dan ramah. Karbs Social menyediakan live music dua kali seminggu serta mini playground untuk anak-anak. Tempat ini cocok untuk berkumpul bersama keluarga, teman, maupun rekan kerja.",
    descriptionEn: "Karbs Social is a gathering place in Opak, Surabaya, combining Karbs Bakehouse Citraland and Karbs Café Araya in one warm and welcoming space. It offers live music twice a week and a mini playground for children, making it a great place to gather with family, friends, or colleagues.",
    menuSections: [
      {
        title: "Menu Makanan",
        titleEn: "Food",
        items: [
          "Caesar Salad - Rp72.000",
          "Waldorf Salad - Rp83.000",
          "Truffle Mushroom Soup - Rp55.000",
          "Truffle Fries - Rp62.000",
          "Wonton Chili Oil - Rp52.000",
          "Thai Popcorn Chicken - Rp52.000",
          "Animal Fries - Rp62.000",
          "Crispy Baby Corn - Rp45.000",
          "Spicy Edamame - Rp45.000",
          "Nachos - Rp62.000",
          "Aussie Breakfast - Rp93.000",
          "British Breakfast - Rp93.000",
          "Mushroom Toast - Rp68.000",
          "Shakshouka - Rp83.000",
          "Beef Quesadilla - Rp83.000",
          "Pesto Avo Toast - Rp68.000",
          "Tuna Melt - Rp83.000",
          "Patty Melt - Rp98.000",
          "Chicken Pesto Panini - Rp83.000",
          "Grilled Cheese Sandwich - Rp75.000",
          "Tuna Avocado - Rp55.000",
          "Pho Saigon Special - Rp85.000",
          "Misoa Ramen - Rp65.000",
          "Beef Dry Pho - Rp75.000",
          "Mie Ayam Jakarta - Rp61.000",
          "Lasagna - Rp94.000",
          "Penne Rosé - Rp83.000 / Rp94.000",
          "Sambal Matah Aglio Olio - Rp83.000",
          "Chicken Steak - Rp88.000",
          "Steak Hamburg - Rp115.000",
          "Japanese Hamburg - Rp88.000",
          "Nasi Goreng Sate - Rp69.000",
          "Loco Moco - Rp88.000",
          "Beef Bulgogi Rice - Rp83.000",
          "XO Fried Rice - Rp61.000",
          "Thai Chicken Rice - Rp55.000",
          "Chiffon Rice Pad Krapao - Rp61.000",
          "Little Bolognaise - Rp60.000",
          "Mini Fisherman - Rp60.000",
          "Teriyaki Kid - Rp60.000"
        ]
      },
      {
        title: "Dessert",
        titleEn: "Dessert",
        items: [
          "Goguma Brulee - Rp58.000",
          "Dubai Chocolate Parfait - Rp72.000",
          "Classic Tiramisu - Rp77.000",
          "Strawberry Tiramisu - Rp77.000",
          "Opera Balls - Rp72.000",
          "Strawberry Mochi Cheesecake - Rp83.000",
          "Chocolate Mochi Cheesecake - Rp83.000",
          "Olive & Parm Parfait - Rp55.000",
          "Ricotta Toast - Rp50.000",
          "Pistachio Matcha - Rp94.000",
          "Banana Bread Royale - Rp72.000",
          "Creme Caramel Toast - Rp61.000",
          "London Lemon Cake - Rp65.000",
          "Black Forest Mousse - Rp61.000"
        ]
      },
      {
        title: "Minuman",
        titleEn: "Drinks",
        items: [
          "Pistachio Latte - Rp58.000",
          "Strawberry Latte - Rp42.000",
          "Honeycomb Latte - Rp42.000",
          "Earl Grey Latte - Rp50.000",
          "Hazelnut Latte - Rp55.000",
          "Yuzu Americano - Rp39.000",
          "Flat White - Rp34.000",
          "Piccolo - Rp33.000",
          "Americano - Rp38.000",
          "Cappuccino - Rp38.000",
          "Caffè Latte - Rp42.000",
          "Mochaccino - Rp60.000",
          "Dark Chocolate - Rp55.000",
          "Milk Chocolate - Rp50.000",
          "Iced Espresso - Rp33.000",
          "Magic - Rp37.000",
          "Affogato - Rp55.000",
          "Hot Matcha Latte - Rp65.000 / Rp40.000",
          "Iced Matcha Latte - Rp65.000 / Rp40.000",
          "Matcha Raspberry - Rp50.000 / Rp45.000",
          "Matchamisu - Rp75.000 / Rp70.000",
          "Matcha Einspanner - Rp45.000 / Rp70.000",
          "Dirty Matchamisu - Rp65.000 / Rp75.000",
          "Matcha Pistachio - Rp80.000 / Rp55.000",
          "Watermelon Mint - Rp38.000",
          "Virgin Mojito - Rp38.000",
          "Longan Yuzu - Rp38.000",
          "Lychee Jasmine - Rp38.000",
          "Pink Lemonade - Rp38.000",
          "Passion Grey - Rp38.000",
          "Orange Juice - Rp45.000",
          "Coca Cola - Rp25.000",
          "Mineral Water - Rp18.000",
          "Strawberry Glaze - Rp85.000",
          "Coconut Cloud - Rp85.000",
          "Chocolate Milkshake - Rp72.000",
          "Cookie Monster Milkshake - Rp72.000",
          "Korean Strawberry Milk - Rp50.000"
        ]
      }
    ],
    tags: ["keluarga", "live music", "playground"],
    tagsEn: ["family-friendly", "live music", "playground"]
  },
  {
    id: 4,
    name: "USA Laundromat",
    nameEn: "USA Laundromat",
    slug: "usa-laundromat",
    categorySlug: "kebutuhan-harian",
    subcategorySlug: "laundry",
    address: "Jl. Gubeng Jaya 2 No. 72, Surabaya",
    hours: "Jam operasional mengikuti layanan yang tersedia",
    hoursEn: "Opening hours vary by service",
    description: "USA Laundromat menyediakan pilihan layanan yang praktis untuk kebutuhan mahasiswa, mulai dari self service untuk mencuci sendiri, drop off untuk layanan cuci dan kering, hingga setrika. Beberapa layanan dapat selesai dalam sehari, sehingga cocok untuk kebutuhan pakaian yang mendesak.",
    descriptionEn: "USA Laundromat offers practical services for students, including self-service washing, drop-off washing and drying, and ironing. Some services can be completed within a day, making it a convenient option for urgent laundry needs.",
    infoSections: [
      {
        title: "Layanan Laundry",
        titleEn: "Laundry Services",
        items: [
          "Self service: mencuci pakaian sendiri",
          "Drop off: pakaian dititipkan untuk dicuci dan dikeringkan",
          "Layanan setrika",
          "Beberapa layanan dapat selesai dalam sehari"
        ],
        itemsEn: [
          "Self-service: wash your own clothes",
          "Drop-off: leave clothes to be washed and dried",
          "Ironing service",
          "Some services can be completed within a day"
        ]
      }
    ],
    tags: ["laundry", "self service", "drop off", "setrika"],
    tagsEn: ["laundry", "self-service", "drop-off", "ironing"]
  },
  {
    id: 5,
    name: "Depo Air Minum Biru Gubeng Kertajaya",
    nameEn: "Biru Drinking Water Refill Depot, Gubeng Kertajaya",
    slug: "depo-air-minum-biru-gubeng-kertajaya",
    categorySlug: "kebutuhan-harian",
    subcategorySlug: "belanja-harian",
    address: "Jl. Gubeng Kertajaya 1G No. 35, Surabaya",
    hours: "08.00 - 20.00 WIB",
    hoursEn: "Daily, 08:00-20:00 WIB",
    description: "Depo Air Minum Biru Gubeng Kertajaya menyediakan kebutuhan air minum harian untuk mahasiswa, penghuni kos, dan keluarga di sekitar Gubeng. Lokasinya berada di Jalan Gubeng Kertajaya 1G dan buka setiap hari pada pukul 08.00-20.00 WIB.",
    descriptionEn: "Biru Drinking Water Refill Depot serves the daily drinking-water needs of students, boarding-house residents, and families in Gubeng. It is located on Jalan Gubeng Kertajaya 1G and is open daily from 08:00 to 20:00 WIB.",
    infoSections: [
      {
        title: "Layanan Depo Air Minum",
        titleEn: "Water Refill Services",
        items: [
          "Melayani isi ulang galon air minum",
          "Menyediakan kebutuhan air minum harian",
          "Buka setiap hari pukul 08.00-20.00 WIB"
        ],
        itemsEn: [
          "Drinking-water gallon refills",
          "Daily drinking-water supplies",
          "Open daily from 08:00 to 20:00 WIB"
        ]
      }
    ],
    tags: ["galon", "air minum", "gubeng kertajaya"],
    tagsEn: ["water gallons", "drinking water", "gubeng kertajaya"]
  },
  {
    id: 6,
    name: "Museum Surabaya (Gedung Siola)",
    nameEn: "Surabaya Museum (Siola Building)",
    slug: "museum-surabaya-siola",
    categorySlug: "jelajah-kota",
    subcategorySlug: "museum-galeri",
    address: "Jl. Tunjungan No. 1-3, Surabaya",
    priceRange: "Gratis",
    priceRangeEn: "Free admission",
    hours: "08.00-15.00 WIB",
    hoursEn: "08:00-15:00 WIB, Tuesday-Sunday",
    description: "Museum Surabaya berada di ujung Jalan Tunjungan, di dalam gedung eks-SIOLA yang dahulu bernama Gedung Whiteaway Laidlaw dan kini merupakan bangunan cagar budaya. Koleksinya berkaitan dengan kehidupan sosial dan budaya Kota Surabaya. Buka setiap Selasa hingga Minggu.",
    descriptionEn: "Surabaya Museum is located at the end of Jalan Tunjungan, inside the former SIOLA building, once known as the Whiteaway Laidlaw Building and now a cultural heritage site. Its collections relate to the social and cultural life of Surabaya. Open Tuesday through Sunday.",
    infoSections: [
      {
        title: "Informasi Museum",
        titleEn: "Museum Information",
        items: [
          "Koleksi terkait kehidupan sosial dan budaya Kota Surabaya",
          "Berada di gedung cagar budaya eks-SIOLA, dahulu bernama Gedung Whiteaway Laidlaw",
          "Tiket masuk gratis",
          "Buka setiap Selasa hingga Minggu"
        ],
        itemsEn: [
          "Collections on the social and cultural life of Surabaya",
          "Housed in the former SIOLA cultural heritage building, once known as the Whiteaway Laidlaw Building",
          "Free admission",
          "Open Tuesday through Sunday"
        ]
      }
    ],
    tags: ["museum", "sejarah", "cagar budaya"],
    tagsEn: ["museum", "history", "cultural heritage"]
  },
  {
    id: 7,
    name: "Taman Flora Bratang",
    nameEn: "Bratang Flora Park",
    slug: "taman-flora-bratang",
    categorySlug: "jelajah-kota",
    subcategorySlug: "wisata-budaya",
    address: "Jl. Raya Bratang Binangun, Surabaya",
    hours: "Setiap hari, 07.00-17.00 WIB",
    hoursEn: "Daily, 07:00-17:00 WIB",
    description: "Taman Flora menawarkan suasana asri bagi pengunjung yang ingin melepas penat. Selain menjadi ruang terbuka, taman ini juga berfungsi sebagai paru-paru kota yang membantu mengurangi polusi.",
    descriptionEn: "Flora Park offers a lush, relaxing green space for visitors. In addition to providing open space, the park serves as one of the city's green lungs and helps reduce pollution.",
    infoSections: [
      {
        title: "Fasilitas",
        titleEn: "Facilities",
        items: [
          "Kebun Binatang Mini",
          "Permainan Anak",
          "Outdoor Fitness",
          "Perpustakaan",
          "Toilet",
          "Tempat Duduk-Duduk",
          "Area Tanaman Obat-Obatan (TOGA)",
          "Parkir Sepeda",
          "Parkir Mobil & Motor",
          "Rumah Kompos"
        ],
        itemsEn: [
          "Mini zoo",
          "Children's play area",
          "Outdoor fitness area",
          "Library",
          "Restrooms",
          "Seating area",
          "Medicinal plant garden",
          "Bicycle parking",
          "Car and motorcycle parking",
          "Composting facility"
        ]
      }
    ],
    tags: ["taman kota", "ruang terbuka", "ramah keluarga"],
    tagsEn: ["city park", "green space", "family-friendly"]
  },
  {
    id: 8,
    name: "Kos Barat Pak Didik",
    nameEn: "Kos Barat Pak Didik",
    slug: "kos-barat-pak-didik",
    categorySlug: "kebutuhan-harian",
    subcategorySlug: "kos-kontrakan",
    address: "Jl. Gubeng Jaya 2 No. 48, Surabaya",
    priceRange: "Rp 650.000-750.000 per bulan",
    priceRangeEn: "IDR 650,000-750,000 per month",
    description: "Kos putri dekat kampus dengan fasilitas Wi-Fi, air, listrik, dapur bersama, kamar mandi luar, lemari, meja, dan kasur.",
    descriptionEn: "A women's boarding house near campus with Wi-Fi, water, electricity, a shared kitchen, an external bathroom, a wardrobe, a desk, and a bed.",
    infoSections: [
      {
        title: "Fasilitas Kos",
        titleEn: "Facilities",
        items: ["Wi-Fi", "Air", "Listrik", "Dapur bersama", "Kamar mandi luar", "Lemari", "Meja", "Kasur"],
        itemsEn: ["Wi-Fi", "Water", "Electricity", "Shared kitchen", "Shared bathroom", "Wardrobe", "Desk", "Bed"]
      }
    ],
    tags: ["kos putri", "dekat kampus", "gubeng jaya"],
    tagsEn: ["women's boarding house", "near campus", "gubeng jaya"]
  },
  {
    id: 9,
    name: "Halte Bus Flash UNAIR",
    nameEn: "UNAIR Flash Bus Stop",
    slug: "halte-bus-flash-unair",
    categorySlug: "kebutuhan-harian",
    subcategorySlug: "transportasi",
    address: "Jl. Dharmawangsa Dalam Selatan No. 12, Surabaya",
    hours: "06.00-18.00 WIB",
    hoursEn: "06:00-18:00 WIB",
    description: "Halte Bus Flash UNAIR melayani mahasiswa UNAIR yang ingin bermobilisasi secara gratis antara Kampus A, Kampus B, dan Kampus C dengan bus sesuai jadwal yang telah ditentukan.",
    descriptionEn: "The UNAIR Flash Bus Stop serves UNAIR students traveling for free between Campuses A, B, and C on the scheduled bus service.",
    infoSections: [
      {
        title: "Informasi Layanan",
        titleEn: "Service Information",
        items: [
          "Layanan bus gratis untuk mahasiswa UNAIR",
          "Menghubungkan Kampus A, Kampus B, dan Kampus C",
          "Keberangkatan mengikuti jadwal yang telah ditentukan"
        ],
        itemsEn: [
          "Free bus service for UNAIR students",
          "Connects Campuses A, B, and C",
          "Departures follow the published schedule"
        ]
      }
    ],
    infoTables: [
      {
        title: "Jadwal Bus Flash",
        titleEn: "Flash Bus Schedule",
        headers: ["Bus", "Berangkat C", "Tiba B", "Berangkat B", "Tiba A", "Berangkat A", "Tiba C"],
        headersEn: ["Bus", "Depart C", "Arrive B", "Depart B", "Arrive A", "Depart A", "Arrive C"],
        rows: [
          ["1", "05.30", "06.00", "06.05", "06.15", "06.20", "06.40"],
          ["2", "06.00", "06.30", "06.35", "06.45", "06.50", "07.10"],
          ["3", "06.30", "07.00", "07.05", "07.15", "07.20", "07.40"],
          ["4", "07.00", "07.30", "07.35", "07.45", "07.50", "08.10"],
          ["5", "07.30", "08.00", "08.05", "08.15", "08.20", "08.40"],
          ["6", "08.00", "08.30", "08.35", "08.45", "08.50", "09.10"],
          ["1", "08.30", "09.00", "09.05", "09.15", "09.20", "09.40"],
          ["2", "09.00", "09.30", "09.35", "09.45", "09.50", "10.10"],
          ["3", "09.30", "10.00", "10.05", "10.15", "10.20", "10.40"],
          ["4", "10.00", "10.30", "10.35", "10.45", "10.50", "11.10"],
          ["5", "10.30", "11.00", "11.05", "11.15", "11.20", "11.40"],
          ["6", "11.00", "11.30", "11.35", "11.45", "11.50", "12.10"],
          ["1", "11.30", "12.00", "12.05", "12.15", "12.20", "12.40"],
          ["2", "12.00", "12.30", "12.35", "12.45", "12.50", "13.10"],
          ["3", "12.30", "13.00", "13.05", "13.15", "13.20", "13.40"],
          ["4", "13.00", "13.30", "13.35", "13.45", "13.50", "14.10"],
          ["5", "13.30", "14.00", "14.05", "14.15", "14.20", "14.40"],
          ["6", "14.00", "14.30", "14.35", "14.45", "14.50", "15.10"],
          ["1", "14.30", "15.00", "15.05", "15.15", "15.20", "15.40"],
          ["2", "15.00", "15.30", "15.35", "15.45", "15.50", "16.10"],
          ["3", "15.30", "16.00", "16.05", "16.15", "16.20", "16.40"],
          ["4", "16.00", "16.30", "16.35", "16.45", "16.50", "17.10"],
          ["5", "16.30", "17.00", "17.05", "17.15", "17.20", "17.40"],
          ["6", "17.00", "17.30", "17.35", "17.45", "17.50", "18.10"]
        ]
      }
    ],
    tags: ["bus kampus", "transportasi", "UNAIR"],
    tagsEn: ["campus bus", "transportation", "UNAIR"]
  },
  {
    id: 10,
    name: "Taman Bungkul",
    nameEn: "Bungkul Park",
    slug: "taman-bungkul",
    categorySlug: "jelajah-kota",
    subcategorySlug: "wisata-budaya",
    address: "Jl. Taman Bungkul, Surabaya",
    priceRange: "Gratis",
    priceRangeEn: "Free admission",
    hours: "24 jam",
    hoursEn: "Open 24 hours",
    description: "Taman Bungkul adalah salah satu Ruang Terbuka Hijau (RTH) di Surabaya yang menawarkan berbagai fasilitas menarik. Sejak dibuka pada tahun 2007 dan direvitalisasi pada tahun 2014, taman ini tetap menjadi tempat nongkrong favorit di kota ini. Banyak warga Surabaya yang menghabiskan waktu bersama anak-anak mereka di area taman bermain atau playground. Taman ini terbuka selama 24 jam secara gratis. Wisatawan dapat memilih waktu pagi, siang, sore, atau malam sesuai dengan keinginan.",
    descriptionEn: "Bungkul Park is one of Surabaya's urban green spaces, offering a variety of facilities. Since opening in 2007 and being revitalized in 2014, it has remained a favorite gathering place in the city. Many Surabaya residents spend time here with their children in the playground. The park is open 24 hours a day and free to enter, so visitors can choose to come in the morning, afternoon, evening, or at night.",
    infoSections: [
      {
        title: "Fasilitas & Kegiatan",
        titleEn: "Facilities & Activities",
        items: [
          "Amphitheater berbentuk lingkaran",
          "Jogging track",
          "Arena skateboard",
          "BMX track",
          "Car Free Day setiap Minggu pagi",
          "Beragam pilihan kuliner"
        ],
        itemsEn: [
          "Circular amphitheater",
          "Jogging track",
          "Skateboard area",
          "BMX track",
          "Car-free day on Sunday mornings",
          "A variety of food options"
        ]
      }
    ],
    tags: ["taman kota", "wisata gratis", "ruang terbuka hijau"],
    tagsEn: ["city park", "free attraction", "green space"]
  },
  {
    id: 11,
    name: "Monumen Kapal Selam",
    nameEn: "Submarine Monument",
    slug: "monumen-kapal-selam",
    categorySlug: "jelajah-kota",
    subcategorySlug: "museum-galeri",
    address: "Jl. Pemuda No. 39, Surabaya",
    priceRange: "Rp15.000-25.000",
    priceRangeEn: "IDR 15,000-25,000 per ticket",
    hours: "08.00-21.00 WIB",
    hoursEn: "08:00-21:00 WIB",
    description: "Lokasinya yang strategis di kota Surabaya, mudah bagi pengunjung untuk berwisata bersama keluarga ataupun teman ke Monumen Kapal Selam, bisa mendapatkan pengetahuan tambahan mengenal sejarah Kapal Selam KRI Pasopati 410, yang dulu pernah ikut terlibat dalam operasi pembebasan Irian Barat dari tangan Belanda kala itu.",
    descriptionEn: "Its strategic location in Surabaya makes it easy for visitors to explore the Submarine Monument with family or friends. Visitors can learn about the history of the KRI Pasopati 410 submarine, which once took part in the operation to liberate West Irian from Dutch control.",
    infoSections: [
      {
        title: "Harga Tiket",
        titleEn: "Ticket Prices",
        items: [
          "Domestik/lokal: Rp15.000 per tiket",
          "Mancanegara: Rp25.000 per tiket"
        ],
        itemsEn: [
          "Domestic/local visitors: IDR 15,000 per ticket",
          "International visitors: IDR 25,000 per ticket"
        ]
      },
      {
        title: "Ruangan KRI Pasopati",
        titleEn: "Rooms aboard KRI Pasopati",
        items: [
          "Ruang haluan torpedo: dipersenjatai 4 torpedo propeller dan juga digunakan untuk penyimpanan torpedo",
          "Ruang Komandan",
          "Ruang Makan",
          "Ruang Kerja",
          "Ruang Baterai I di bawah dek",
          "Jembatan utama",
          "Pusat Komando",
          "Ruang Penyimpanan Makanan di bawah dek",
          "Ruang Awak Kapal",
          "Ruang Dapur",
          "Ruang penyimpanan Baterai II di bawah dek",
          "Ruang Mesin Diesel dan Terminal Mesin",
          "Kamar Mesin Listrik",
          "Ruang torpedo buritan yang berisi 2 torpedo"
        ],
        itemsEn: [
          "Forward torpedo room: armed with four propeller torpedoes and also used for torpedo storage",
          "Commander's room",
          "Dining room",
          "Workroom",
          "Battery I room below deck",
          "Main bridge",
          "Command center",
          "Food storage room below deck",
          "Crew quarters",
          "Galley",
          "Battery II storage room below deck",
          "Diesel engine and engine terminal room",
          "Electric engine room",
          "Aft torpedo room containing two torpedoes"
        ]
      }
    ],
    tags: ["museum", "sejarah", "kapal selam"],
    tagsEn: ["museum", "history", "submarine"]
  },
  {
    id: 12,
    name: "Perpustakaan Medayu Agung",
    nameEn: "Medayu Agung Library",
    slug: "perpustakaan-medayu-agung",
    categorySlug: "jelajah-kota",
    subcategorySlug: "perpustakaan-umum",
    address: "Jl. Medayu Selatan Gang IV No. 42-44, Surabaya",
    hours: "Senin-Sabtu, 09.00-16.00 WIB",
    hoursEn: "Monday-Saturday, 09:00-16:00 WIB",
    description: "Perpustakaan Medayu Agung berdiri pada tahun 2001, dibawah naungan sebuah Yayasan yang bernama Medayu Agung, yang berarti “Berbuat kebaikan berdasar budi yang luhur, kebajikan, dan kebijaksanaan untuk tujuan yang besar (Agung)”.",
    descriptionEn: "Medayu Agung Library was established in 2001 under the Medayu Agung Foundation. The name means “doing good based on noble character, virtue, and wisdom for a great purpose.”",
    infoSections: [
      {
        title: "Koleksi Perpustakaan",
        titleEn: "Library Collection",
        items: [
          "Literatur sejarah, sosial, politik, filsafat, hukum, budaya, agama, dan biografi",
          "Koleksi dalam bahasa Indonesia, Melayu, Jawa, Belanda, Jerman, Perancis, dan Tionghoa",
          "Sekitar 7.500 eksemplar buku",
          "Koleksi koran, majalah, dan foto-foto sejarah",
          "Literatur terbitan tahun 1800-an dan awal tahun 1900-an"
        ],
        itemsEn: [
          "Literature on history, society, politics, philosophy, law, culture, religion, and biographies",
          "Materials in Indonesian, Malay, Javanese, Dutch, German, French, and Chinese",
          "Approximately 7,500 book copies",
          "Newspaper, magazine, and historical photo collections",
          "Literature published in the 1800s and early 1900s"
        ]
      }
    ],
    tags: ["perpustakaan", "sejarah", "koleksi buku"],
    tagsEn: ["library", "history", "book collection"]
  }
];

export const quickLinks: QuickLink[] = [
  { id: 1, title: 'Platform SSO UNAIR', url: 'https://unairsatu.unair.ac.id/', order: 1 },
  { id: 2, title: 'E-Learning UNAIR', url: 'https://hebat.elearning.unair.ac.id/', order: 2 },
  { id: 3, title: 'Perpustakaan UNAIR', url: 'https://lib.unair.ac.id', order: 3 },
  { id: 5, title: 'Portal SINTA', url: 'https://sinta.kemdiktisaintek.go.id/', order: 5 },
  { id: 6, title: 'Tracer Study', url: 'https://tracerstudy.unair.ac.id', order: 6 }
];
