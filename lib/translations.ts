export type Language = 'id' | 'en';

export const translations = {
  id: {
    portalName: 'ARSharing | Info Mahasiswa UNAIR',
    home: 'Beranda',
    academics: 'Akademik',
    library: 'Perpustakaan',
    scholarships: 'Beasiswa',
    careers: 'Magang & Karir',
    aroundCampus: 'Sekitar Kampus',
    events: 'Event',
    internationalGuide: 'Panduan Internasional',
    
    // Hero Banner
    heroTitle: 'ARSharing',
    heroSubtitle: 'Portal Informasi untuk Mahasiswa Universitas Airlangga',
    heroDesc: 'Ruang berbagi informasi untuk mahasiswa Universitas Airlangga. Temukan informasi akademik, beasiswa, event, dan kebutuhan kampus lainnya.',
    
    // Sidebar
    popularArticles: '🔥 Informasi Populer',
    upcomingEvents: '📅 Event Mendatang',
    quickLinks: '🔗 Link Cepat',
    
    // General UI
    viewAll: 'Lihat Semua →',
    back: '← Kembali',
    backToHome: '← Kembali ke Beranda',
    previous: '← Sebelumnya',
    next: 'Selanjutnya →',
    searchPlaceholder: 'Cari informasi...',
    searchButton: 'Cari',
    searchResults: 'Hasil Pencarian',
    importantArticles: '📌 Informasi Penting',
    allArticles: 'Semua Informasi',
    noArticles: 'Belum ada informasi dalam kategori ini.',
    notFoundTitle: 'Informasi Tidak Ditemukan',
    notFoundDesc: 'Maaf, informasi yang Anda cari tidak ditemukan atau telah dipindahkan.',
    
    // Footer
    footerDesc: 'ARSharing adalah portal informasi untuk seluruh mahasiswa Universitas Airlangga. Temukan informasi akademik, beasiswa, karir, event, dan fasilitas kampus.',
    footerNav: 'Navigasi Kategori',
    footerContact: 'Kontak & Alamat',
    copyright: '© 2026 ARSharing | Portal Mahasiswa Universitas Airlangga. Hak cipta dilindungi.',
    
    // Search page
    enterKeyword: 'Masukkan kata kunci untuk mencari informasi.',
    foundResults: (count: number, q: string) => `Ditemukan ${count} hasil untuk "${q}"`,
    noResults: (q: string) => `Tidak ditemukan hasil untuk "${q}". Coba kata kunci lain.`,
  },
  en: {
    portalName: 'ARSharing | UNAIR Student Info',
    home: 'Home',
    academics: 'Academics',
    library: 'Library',
    scholarships: 'Scholarships',
    careers: 'Internships & Careers',
    aroundCampus: 'Around Campus',
    events: 'Events',
    internationalGuide: 'International Guide',
    
    // Hero Banner
    heroTitle: 'ARSharing',
    heroSubtitle: 'Information Portal for Airlangga University Students',
    heroDesc: 'An information-sharing space for Airlangga University students. Find academic information, scholarships, events, and other campus resources.',
    
    // Sidebar
    popularArticles: '🔥 Popular Information',
    upcomingEvents: '📅 Upcoming Events',
    quickLinks: '🔗 Quick Links',
    
    // General UI
    viewAll: 'View All →',
    back: '← Back',
    backToHome: '← Back to Home',
    previous: '← Previous',
    next: 'Next →',
    searchPlaceholder: 'Search information...',
    searchButton: 'Search',
    searchResults: 'Search Results',
    importantArticles: '📌 Important Information',
    allArticles: 'All Information',
    noArticles: 'No information available in this category yet.',
    notFoundTitle: 'Information Not Found',
    notFoundDesc: 'Sorry, the information you are looking for does not exist or has been moved.',
    
    // Footer
    footerDesc: 'ARSharing is an information portal for all Airlangga University students, providing academic, scholarship, career, event, and campus facility details.',
    footerNav: 'Category Navigation',
    footerContact: 'Contact & Address',
    copyright: '© 2026 ARSharing | Airlangga University Student Portal. All rights reserved.',
    
    // Search page
    enterKeyword: 'Enter a keyword to search for information.',
    foundResults: (count: number, q: string) => `Found ${count} result(s) for "${q}"`,
    noResults: (q: string) => `No results found for "${q}". Try another keyword.`,
  }
};
