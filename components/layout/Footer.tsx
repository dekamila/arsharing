"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white mt-16 pt-12 pb-6 border-t border-primary-light">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-8 mb-8 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
        <div className="lg:col-span-1 lg:border-r lg:border-white/10 lg:pr-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🏛️ {t.heroTitle}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            {t.footerDesc}
          </p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-lg font-semibold mb-4 text-cream">{t.footerNav}</h4>
          <nav aria-label={t.footerNav} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ul className="space-y-3 text-sm">
              <li><Link href="/akademik" className="font-semibold text-white/90 hover:text-white transition-colors">{t.academics}</Link></li>
              <li><Link href="/perpustakaan" className="font-semibold text-white/90 hover:text-white transition-colors">{t.library}</Link></li>
              <li><Link href="/event" className="font-semibold text-white/90 hover:text-white transition-colors">{t.events}</Link></li>
              <li><Link href="/panduan-internasional" className="font-semibold text-white/90 hover:text-white transition-colors">{t.internationalGuide}</Link></li>
            </ul>

            <div className="space-y-4 text-sm">
              <section>
                <Link href="/beasiswa" className="font-semibold text-white hover:text-cream transition-colors">{t.scholarships}</Link>
                <Link href="/beasiswa" className="mt-1 pl-3 block text-white/70 hover:text-white transition-colors">{t.footerRegistration}</Link>
              </section>
              <section>
                <Link href="/magang-karir" className="font-semibold text-white hover:text-cream transition-colors">{t.careers}</Link>
                <Link href="/magang-karir" className="mt-1 pl-3 block text-white/70 hover:text-white transition-colors">{t.footerJobs}</Link>
              </section>
            </div>

            <div className="space-y-4 text-sm">
              <section>
                <Link href="/jelajah-kota" className="font-semibold text-white hover:text-cream transition-colors">{t.exploreCity}</Link>
                <ul className="mt-1 space-y-1 pl-3 text-white/70">
                  <li><Link href="/jelajah-kota?sub=kuliner" className="hover:text-white transition-colors">{t.footerCulinary}</Link></li>
                  <li><Link href="/jelajah-kota?sub=wisata-budaya" className="hover:text-white transition-colors">{t.footerTourismCulture}</Link></li>
                  <li><Link href="/jelajah-kota?sub=museum-galeri" className="hover:text-white transition-colors">{t.footerMuseums}</Link></li>
                  <li><Link href="/jelajah-kota?sub=perpustakaan-umum" className="hover:text-white transition-colors">{t.footerPublicLibraries}</Link></li>
                </ul>
              </section>
              <section>
                <Link href="/kebutuhan-harian" className="font-semibold text-white hover:text-cream transition-colors">{t.dailyNeeds}</Link>
                <ul className="mt-1 space-y-1 pl-3 text-white/70">
                  <li><Link href="/kebutuhan-harian?sub=kos-kontrakan" className="hover:text-white transition-colors">{t.footerBoarding}</Link></li>
                  <li><Link href="/kebutuhan-harian?sub=transportasi" className="hover:text-white transition-colors">{t.footerTransportation}</Link></li>
                  <li><Link href="/kebutuhan-harian?sub=laundry" className="hover:text-white transition-colors">{t.footerLaundry}</Link></li>
                  <li><Link href="/kebutuhan-harian?sub=belanja-harian" className="hover:text-white transition-colors">{t.footerShopping}</Link></li>
                </ul>
              </section>
            </div>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-white/10 text-center text-xs text-white/60">
        {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;
