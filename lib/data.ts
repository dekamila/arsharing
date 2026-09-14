import { Category, Article, QuickLink } from './types';

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
    name: 'Sekitar Kampus', 
    slug: 'kampus-sekitar', 
    description: 'Panduan kebutuhan harian mahasiswa di sekitar lingkungan kampus UNAIR. Informasi rekomendasi kos/kontrakan murah, warung makan ramah kantong, rute angkutan umum/bus, serta tempat nongkrong.', 
    icon: '🍜', 
    order: 5,
    highlights: ['Rekomendasi 10 Warung Makan Murah Dekat Kampus', 'Info Kos & Kontrakan Area Mulyorejo & Gubeng', 'Rute Angkot & Bus Trans Semanggi Suroboyo', 'Destinasi Wisata & Ruang Publik Weekend']
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
    publishedAt: '2026-09-01T08:00:00Z'
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
    publishedAt: '2026-08-25T09:00:00Z'
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
    <p>Batas akhir pengumpulan berkas di Direktorat Kemahasiswaan UNAIR adalah tanggal 20 Mei 2026. Mahasiswa yang berminat diharapkan segera menyiapkan dokumen transkrip nilai, sertifikat kepanitiaan/organisasi, dan surat keterangan aktif kuliah.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Djarum+Beasiswa',
    categoryId: 3,
    categorySlug: 'beasiswa',
    tags: ['djarum', 'softskill'],
    isPinned: false,
    isPopular: true,
    publishedAt: '2026-08-15T10:00:00Z'
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
    publishedAt: '2026-09-03T11:00:00Z'
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
    publishedAt: '2026-09-05T08:00:00Z'
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
    publishedAt: '2026-09-02T10:00:00Z'
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

  // Kampus Sekitar
  {
    id: 21,
    title: '10 Warung Makan Murah dan Enak Dekat Kampus C',
    slug: 'warung-makan-murah-kampus-c',
    excerpt: 'Rekomendasi tempat makan favorit mahasiswa UNAIR di sekitar area Mulyorejo dengan harga kantong mahasiswa.',
    content: `<p>Menjadi anak kos di sekitar Kampus C UNAIR (Mulyorejo) berarti Anda harus pintar-pintar mengatur pengeluaran, terutama untuk urusan perut. Untungnya, di sekitar area kampus bertebaran berbagai warung makan yang tidak hanya lezat, tetapi juga sangat bersahabat dengan kantong mahasiswa. Berikut adalah beberapa rekomendasi tempat makan legendaris yang wajib Anda coba.</p>
    <h2>Kawasan Wisata Kuliner (Wiskul) Dharmahusada dan Mulyorejo</h2>
    <p>Di sepanjang Jalan Mulyorejo Raya, Anda bisa menemukan surga kuliner malam. Salah satu yang paling terkenal adalah Nasi Goreng Makarti yang selalu ramai pengunjung karena porsinya yang brutal dan rasa bumbu jawanya yang khas. Ada juga Warung Bu Sri yang menyajikan nasi campur dan ayam geprek dengan harga di bawah Rp 15.000, lengkap dengan es teh manis berukuran jumbo.</p>
    <h2>Kantin Kampus dan Sekitarnya</h2>
    <p>Jangan lupakan kantin di dalam area kampus itu sendiri. Kantin FIB (Fakultas Ilmu Budaya) dan Kantin FST (Sains dan Teknologi) terkenal dengan soto ayam dan penyetan lauknya yang murah meriah. Di dekat pintu keluar belakang kampus, terdapat deretan pedagang kaki lima yang menjual batagor, siomay, dan es oyen yang sangat cocok untuk mengganjal perut di sela-sela pergantian jam kuliah.</p>
    <p>Bagi penggemar makanan pedas, Mie Gacoan cabang Mulyosari dan berbagai kedai seblak di daerah Sutorejo juga menjadi destinasi favorit mahasiswa untuk nongkrong sambil mengerjakan tugas kelompok.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Kuliner+Kampus+C',
    categoryId: 5,
    categorySlug: 'kampus-sekitar',
    tags: ['kuliner', 'mulyorejo'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-08-10T08:00:00Z'
  },
  {
    id: 22,
    title: 'Rekomendasi Kos dan Kontrakan Area Mulyorejo',
    slug: 'rekomendasi-kos-mulyorejo',
    excerpt: 'Panduan mencari tempat tinggal bagi mahasiswa perantauan di sekitar Kampus C UNAIR beserta perkiraan harganya.',
    content: `<p>Bagi mahasiswa baru yang berasal dari luar kota Surabaya, mencari tempat tinggal (indekos atau kontrakan) yang nyaman, aman, dan dekat dengan kampus adalah salah satu prioritas utama. Area Mulyorejo, Sutorejo, dan Dharmahusada menjadi primadona karena aksesibilitasnya yang mudah menuju Kampus C UNAIR.</p>
    <h2>Tipe dan Harga Indekos</h2>
    <p>Harga indekos di area ini sangat bervariasi tergantung pada fasilitas yang ditawarkan. Untuk kos standar (kamar mandi luar, tanpa AC) harganya berkisar antara Rp 600.000 hingga Rp 900.000 per bulan. Sementara untuk kos eksklusif (kamar mandi dalam, AC, WiFi, layanan cuci, dan keamanan 24 jam) dibanderol mulai dari Rp 1.500.000 hingga Rp 2.500.000 per bulan. Gang-gang kecil di sekitar Jalan Mulyorejo Tengah dan Utara menyimpan banyak hidden gem indekos dengan harga rasional.</p>
    <h2>Opsi Rumah Kontrakan Bersama</h2>
    <p>Jika Anda memiliki teman sekelompok (3-5 orang), menyewa rumah kontrakan (paviliun) bisa menjadi opsi yang jauh lebih ekonomis dan memberikan privasi lebih. Harga sewa rumah di perumahan Dharmahusada Mas atau Sutorejo Prima berkisar antara Rp 25.000.000 hingga Rp 40.000.000 per tahun, yang jika dibagi rata akan terasa lebih ringan.</p>
    <p>Sangat disarankan untuk melakukan survei langsung ke lokasi sebelum membayar uang muka. Perhatikan faktor-faktor krusial seperti bebas banjir (mengingat beberapa area di Surabaya rawan genangan saat musim hujan deras), keamanan lingkungan, serta aturan jam malam yang ditetapkan oleh pemilik kos.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Info+Kos',
    categoryId: 5,
    categorySlug: 'kampus-sekitar',
    tags: ['kos', 'akomodasi'],
    isPinned: true,
    isPopular: true,
    publishedAt: '2026-07-25T09:00:00Z'
  },
  {
    id: 23,
    title: 'Rute Angkot dan Bus ke Kampus UNAIR',
    slug: 'rute-angkot-bus-kampus',
    excerpt: 'Panduan transportasi umum Suroboyo Bus, Wara-Wiri, dan Angkot untuk mobilitas antar kampus UNAIR.',
    content: `<p>Meskipun banyak mahasiswa yang menggunakan kendaraan pribadi, transportasi umum di Surabaya kini semakin memadai dan terintegrasi. Bagi mahasiswa yang tidak membawa motor, memahami rute angkutan kota (bemo/angkot), Suroboyo Bus, dan bus internal kampus (Wara-Wiri) sangatlah penting untuk mobilitas sehari-hari.</p>
    <h2>Bus Internal Kampus (Flash UNAIR)</h2>
    <p>Universitas Airlangga menyediakan fasilitas bus gratis yang dikenal dengan sebutan Bus Flash (Fast Local Area Shuttle) atau Wara-Wiri. Bus ini melayani rute melingkar yang menghubungkan Kampus A (Kedokteran), Kampus B (Dharmawangsa), dan Kampus C (Mulyorejo). Bus beroperasi dari hari Senin hingga Jumat mulai pukul 07.00 hingga 17.00 WIB. Jadwal keberangkatan adalah setiap 30-45 menit sekali di halte-halte utama setiap kampus.</p>
    <h2>Suroboyo Bus dan Trans Semanggi</h2>
    <p>Untuk mobilitas dari tempat kos atau pusat kota menuju kampus, Suroboyo Bus dan Trans Semanggi Suroboyo (Teman Bus) adalah pilihan yang sangat nyaman, ber-AC, dan murah. Rute T2 (UNESA - ITS) melewati tepat di depan Kampus C UNAIR (Halte UNAIR). Tarif untuk pelajar/mahasiswa sangat terjangkau, dan pembayarannya bisa dilakukan menggunakan uang elektronik (e-money) atau metode scan QRIS.</p>
    <p>Bagi yang tinggal di daerah agak masuk ke dalam gang, angkutan kota konvensional (Bemo) rute O atau WK masih menjadi andalan warga lokal. Selain itu, tentu saja selalu ada opsi ojek online atau sepeda listrik sewaan yang banyak tersebar di area Mulyorejo dan Dharmawangsa.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Transportasi',
    categoryId: 5,
    categorySlug: 'kampus-sekitar',
    tags: ['transportasi', 'bus'],
    isPinned: false,
    isPopular: true,
    publishedAt: '2026-08-05T10:00:00Z'
  },
  {
    id: 24,
    title: 'Tempat Nongkrong Favorit Mahasiswa Surabaya',
    slug: 'tempat-nongkrong-favorit',
    excerpt: 'Daftar cafe dan coffee shop instagramable di sekitar Surabaya Timur yang cocok untuk nugas atau sekadar bersantai.',
    content: `<p>Kultur ngopi dan nongkrong sambil mengerjakan tugas kelompok (nugas) adalah bagian tak terpisahkan dari kehidupan mahasiswa zaman sekarang. Beruntung, Surabaya Timur, khususnya di sekitar kampus UNAIR dan ITS, dikelilingi oleh ratusan kedai kopi (coffee shop) yang menawarkan suasana cozy dan koneksi internet yang kencang.</p>
    <h2>Coffee Shop Area Dharmawangsa dan Gubeng</h2>
    <p>Di sekitar Kampus B, Jalan Dharmawangsa dipenuhi oleh deretan cafe modern. Beberapa yang menjadi favorit mahasiswa karena suasananya yang tenang dan colokan listrik yang melimpah adalah Historisma, Tanda Seru Coffee, dan Thirty Three Brew. Tempat-tempat ini biasanya buka hingga tengah malam, sangat cocok untuk mahasiswa yang butuh fokus mengejar deadline tugas atau revisi skripsi.</p>
    <h2>Pusat Nongkrong Area Kertajaya dan Merr</h2>
    <p>Bergeser sedikit ke arah Kertajaya dan Middle East Ring Road (MERR), pilihan tempat nongkrong menjadi lebih beragam. Communal Space yang luas dengan konsep semi-outdoor sangat diminati untuk berkumpul bersama teman-teman organisasi atau UKM. Pilihan makanannya pun bervariasi mulai dari sekadar pastry hingga makanan berat ala western atau fushion.</p>
    <p>Tips bagi mahasiswa: carilah cafe yang memiliki promo khusus pelajar dengan menunjukkan KTM (Kartu Tanda Mahasiswa), karena harga kopi spesiality di Surabaya cukup lumayan (berkisar Rp 25.000 - Rp 45.000 per gelas). Jangan lupa untuk tetap menerapkan etika nugas di cafe, dengan memesan secukupnya jika berniat tinggal berjam-jam.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Cafe+Surabaya',
    categoryId: 5,
    categorySlug: 'kampus-sekitar',
    tags: ['nongkrong', 'cafe'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-08-15T11:00:00Z'
  },
  {
    id: 25,
    title: 'Destinasi Wisata Weekend di Sekitar Surabaya',
    slug: 'wisata-weekend-surabaya',
    excerpt: 'Ide liburan akhir pekan singkat (short escape) di dalam kota Surabaya maupun kota-kota sekitarnya untuk melepas penat.',
    content: `<p>Tugas kuliah dan rutinitas kampus yang padat bisa memicu stres jika tidak diimbangi dengan rekreasi. Saat libur akhir pekan tiba, tak ada salahnya untuk menjelajahi berbagai destinasi wisata menarik yang ada di Surabaya atau melipir sedikit ke wilayah sekitarnya (Sidoarjo, Gresik, Pasuruan, atau Malang) untuk melakukan penyegaran pikiran (healing).</p>
    <h2>Wisata Dalam Kota Surabaya</h2>
    <p>Untuk opsi yang murah dan tidak menguras tenaga, Surabaya memiliki banyak taman kota yang asri, seperti Taman Bungkul yang ikonik, Taman Flora Bratang, atau Hutan Bambu Keputih yang sangat instagramable. Anda juga bisa menikmati suasana kota tua (heritage) di kawasan Jembatan Merah dan Tunjungan, atau mengunjungi museum-museum bersejarah seperti Museum House of Sampoerna dan Monumen Kapal Selam.</p>
    <h2>Short Escape ke Luar Kota (Aglomerasi Gerbangkertosusila)</h2>
    <p>Bagi yang memiliki waktu lebih, perjalanan satu hingga dua jam dari Surabaya akan membawa Anda ke pemandangan alam yang berbeda. Daerah Trawas dan Pacet di Mojokerto, serta Prigen di Pasuruan menawarkan hawa pegunungan yang sejuk dengan deretan cafe bernuansa alam dan air terjun.</p>
    <p>Sementara jika Anda merindukan pantai, wisata Mangrove di Wonorejo (Surabaya Timur) atau bergeser ke Gresik dan Madura bisa menjadi alternatif yang seru untuk dilakukan bersama teman-teman satu kos di hari Minggu sebelum kembali menghadapi kerasnya kehidupan perkuliahan di hari Senin.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Wisata+Weekend',
    categoryId: 5,
    categorySlug: 'kampus-sekitar',
    tags: ['wisata', 'hiburan'],
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
    content: `<p>Welcome to Universitas Airlangga! For international students who have been accepted into our degree or exchange programs, securing the correct visa is the most critical step before your arrival in Indonesia. You are required to obtain a Student Visa, technically known as VITAS (Visa Tinggal Terbatas) for studying, which will later be converted to an ITAS (Izin Tinggal Terbatas) upon your arrival.</p>
    <h2>The Study Permit Requirement</h2>
    <p>Before applying for the visa, Universitas Airlangga will assist you in obtaining a Study Permit (Izin Belajar) from the Ministry of Education and Culture in Jakarta. You must provide the Airlangga Global Engagement (AGE) office with required documents including your passport bio-page (valid for at least 18 months), health certificate, financial guarantee statement, and a statement letter stating you will not work while studying.</p>
    <h2>E-Visa Application Process</h2>
    <p>Once the Study Permit is issued, the university (acting as your sponsor) will apply for your E-Visa online through the Directorate General of Immigration portal. Once approved, the E-Visa will be sent to your email in PDF format. You must print this document and present it to the immigration officers at the airport upon entering Indonesia. Please DO NOT enter Indonesia using a Tourist/Visa on Arrival (VoA), as it cannot be converted into a Student Visa.</p>
    <p>Within 7 days of your arrival in Surabaya, you must visit the local Immigration Office, accompanied by AGE staff, to take your biometric data and photos for the issuance of your physical ITAS card. This permit must be renewed annually throughout your study period.</p>`,
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
    content: `<p>Finding comfortable and safe accommodation is essential for a successful study abroad experience. Universitas Airlangga provides several housing options tailored to the needs of our international student community, ranging from on-campus dormitories to off-campus private apartments.</p>
    <h2>On-Campus Dormitory (Asrama Mahasiswa)</h2>
    <p>The university operates dormitories located within Campus C. This is the most affordable and convenient option, especially for newly arrived students. The international student wing offers double-occupancy rooms equipped with basic furniture, air conditioning, and shared bathrooms. Living in the dormitory is an excellent way to immerse yourself in the local student life and make Indonesian friends. However, spaces are limited and must be booked months in advance through the AGE office.</p>
    <h2>Off-Campus Options: Kost and Apartments</h2>
    <p>For more privacy, many international students opt for "Kost Exclusive" (private boarding houses) located around Campus B and C. These typically offer fully furnished en-suite single rooms with AC, Wi-Fi, laundry service, and 24-hour security. Monthly rents range from IDR 1,500,000 to IDR 3,000,000 depending on the facilities.
    Alternatively, several high-rise apartment complexes (such as Puncak Dharmahusada or Educity) are located a short commute away. Renting a studio apartment offers full privacy with access to swimming pools and gyms, costing around IDR 3,000,000 to IDR 5,000,000 per month.</p>
    <p>The AGE International Student Support team is always ready to assist you with housing recommendations, translating lease agreements, and communicating with landlords to ensure you find a place that feels like a home away from home.</p>`,
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
    content: `<p>Surabaya is Indonesia's second-largest city—a bustling, dynamic metropolis that serves as the commercial hub of Eastern Indonesia. Adjusting to life in a new city can be overwhelming, but with a few practical tips, you will quickly adapt to the "Suroboyoan" rhythm of life.</p>
    <h2>Weather and Clothing</h2>
    <p>Surabaya is known for its hot and humid tropical climate year-round. Average daytime temperatures hover around 32-35°C. Light, breathable cotton clothing is highly recommended for daily wear. However, out of respect for local culture and university regulations, please ensure you dress modestly on campus (no shorts, tank tops, or sandals). When the rainy season hits (typically November to April), always carry an umbrella or a raincoat, as sudden, heavy downpours are common.</p>
    <h2>Getting Around the City</h2>
    <p>While the city's public transport system is improving (with the Suroboyo Bus), the most reliable and popular way to navigate the city is via ride-hailing apps like Gojek or Grab. These apps are lifesavers for international students—you can book a motorcycle taxi (ojek) for short solo trips, a car for group travel, or even order food delivery (GoFood/GrabFood) directly to your dorm room. Setting up the app and linking it to a local e-wallet (like Gopay or OVO) should be one of your first tasks upon arrival.</p>
    <p>Surabaya people are famously warm, straightforward, and welcoming. Don't be shy to use basic Indonesian greetings (like "Terima kasih" for thank you or "Permisi" for excuse me). A simple smile will go a long way in navigating daily interactions at the local markets or food stalls.</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Life+in+Surabaya',
    categoryId: 7,
    categorySlug: 'panduan-internasional',
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
    content: `<p>Adjusting to a new academic system and cultural environment presents unique challenges. Recognizing this, Airlangga Global Engagement (AGE) has established a comprehensive support system designed specifically to ensure international students have a smooth and enriching academic journey at Universitas Airlangga.</p>
    <h2>The International Student Buddy Program</h2>
    <p>One of our most successful initiatives is the Buddy Program. Upon confirmation of enrollment, you will be paired with a local Indonesian student buddy. Your buddy is a current student volunteer who will contact you before you arrive, pick you up from Juanda International Airport, help you settle into your accommodation, assist with SIM card registration, and guide you through the initial campus orientation and class registration process. They are your first friend and informal guide to Surabaya.</p>
    <h2>Administrative and Wellbeing Support</h2>
    <p>The AGE International Office serves as a one-stop center for all your administrative needs, including visa extensions, study permit renewals, and issuing official university letters. Furthermore, if you experience culture shock, academic stress, or personal difficulties, the university provides free, confidential psychological counseling services with English-speaking psychologists at the Help Center, located at Campus C.</p>
    <p>We also regularly organize cultural trips, international food festivals, and language exchange sessions to foster a tight-knit international community and promote intercultural exchange between foreign and local students.</p>`,
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
    content: `<p>Your study abroad experience is not complete without delving into the rich cultural tapestry and culinary wonders of East Java. Surabaya, as the capital, offers a melting pot of Javanese, Madurese, Arab, and Chinese cultures, resulting in unique traditions and a legendary food scene.</p>
    <h2>Must-Try Local Delicacies</h2>
    <p>Surabayan cuisine is known for its bold, savory, and often spicy flavors. You must try the city's iconic dish, <strong>Rawon</strong>—a rich, black beef soup flavored with keluak nuts, usually served with salted egg and beansprouts. Another staple is <strong>Rujak Cingur</strong>, a unique salad consisting of vegetables, fruits, and boiled cow snout, all drenched in a pungent, sweet, and spicy fermented shrimp paste (petis) sauce. For late-night cravings, join the locals at a street-side tent (warung) for a plate of <strong>Sego Sambal</strong> (rice with spicy chili paste and fried side dishes).</p>
    <h2>Social Etiquette and Norms</h2>
    <p>Indonesian culture places a high value on respect for elders and politeness in social interactions. It is customary to use your right hand for eating, giving, or receiving items, as the left hand is traditionally considered impolite for such actions. When addressing lecturers or staff, use formal titles such as "Bapak" (Mr.) or "Ibu" (Ms./Mrs.) followed by their name. Understanding and practicing these subtle social nuances will earn you great respect from the local community and enrich your intercultural experience.</p>
    <p>The university frequently hosts cultural workshops where international students can learn to play traditional gamelan music, make batik, or practice traditional Javanese dance. We highly encourage you to participate in these events!</p>`,
    imageUrl: 'https://placehold.co/800x400/003366/white?text=Culture+Food',
    categoryId: 7,
    categorySlug: 'panduan-internasional',
    tags: ['culture', 'food'],
    isPinned: false,
    isPopular: false,
    publishedAt: '2026-08-25T12:00:00Z'
  }
];

export const quickLinks: QuickLink[] = [
  { id: 1, title: 'Platform SSO UNAIR', url: 'https://unairsatu.unair.ac.id/', order: 1 },
  { id: 2, title: 'E-Learning UNAIR', url: 'https://hebat.elearning.unair.ac.id/', order: 2 },
  { id: 3, title: 'Perpustakaan UNAIR', url: 'https://lib.unair.ac.id', order: 3 },
  { id: 5, title: 'Portal SINTA', url: 'https://sinta.kemdiktisaintek.go.id/', order: 5 },
  { id: 6, title: 'Tracer Study', url: 'https://tracerstudy.unair.ac.id', order: 6 }
];
