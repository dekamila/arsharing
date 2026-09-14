"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white mt-16 pt-12 pb-6 border-t border-primary-light">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🏛️ {t.heroTitle}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            {t.footerDesc}
          </p>
          <div className="text-xs text-white/60">
            Universitas Airlangga • Surabaya, Indonesia
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-cream">{t.footerNav}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/akademik" className="text-white/80 hover:text-white transition-colors">{t.academics}</Link></li>
            <li><Link href="/perpustakaan" className="text-white/80 hover:text-white transition-colors">{t.library}</Link></li>
            <li><Link href="/beasiswa" className="text-white/80 hover:text-white transition-colors">{t.scholarships}</Link></li>
            <li><Link href="/magang-karir" className="text-white/80 hover:text-white transition-colors">{t.careers}</Link></li>
            <li><Link href="/kampus-sekitar" className="text-white/80 hover:text-white transition-colors">{t.aroundCampus}</Link></li>
            <li><Link href="/event" className="text-white/80 hover:text-white transition-colors">{t.events}</Link></li>
            <li><Link href="/panduan-internasional" className="text-white/80 hover:text-white transition-colors">{t.internationalGuide}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-cream">{t.footerContact}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>📍 Kampus C UNAIR, Mulyorejo, Surabaya 60115</li>
            <li>📞 Telp: (031) 5914042 / 5914043</li>
            <li>✉️ Email: info@unair.ac.id</li>
            <li>🌐 Website: www.unair.ac.id</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-white/10 text-center text-xs text-white/60">
        {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;
