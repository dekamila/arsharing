"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from '@/components/shared/SearchBar';
import { useLanguage } from '@/lib/LanguageContext';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const categories = [
    { name: t.home, path: '/' },
    { name: t.academics, path: '/akademik' },
    { name: t.library, path: '/perpustakaan' },
    { name: t.scholarships, path: '/beasiswa' },
    { name: t.careers, path: '/magang-karir' },
    { name: t.exploreCity, path: '/jelajah-kota' },
    { name: t.dailyNeeds, path: '/kebutuhan-harian' },
    { name: t.events, path: '/event' },
    { name: t.internationalGuide, path: '/panduan-internasional' },
  ];

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  }, [language]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty('--site-header-height', `${header.offsetHeight}px`);
    };

    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(header);

    return () => {
      resizeObserver.disconnect();
      document.documentElement.style.removeProperty('--site-header-height');
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-white py-2 px-4 md:px-8 flex flex-wrap justify-between items-center text-sm gap-2">
        <div className="font-medium">{t.portalName}</div>
        <div className="flex items-center space-x-4">
          <span>{currentDate}</span>
          
          {/* Language Switcher */}
          <div className="flex items-center bg-primary-light rounded-full p-1 border border-white/20 text-xs">
            <button
              onClick={() => setLanguage('id')}
              className={`px-2.5 py-1 rounded-full font-bold transition-all flex items-center gap-1.5 ${
                language === 'id'
                  ? 'bg-white text-primary shadow'
                  : 'text-white/80 hover:text-white'
              }`}
              title="Bahasa Indonesia"
            >
              <span>🇮🇩</span> ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full font-bold transition-all flex items-center gap-1.5 ${
                language === 'en'
                  ? 'bg-white text-primary shadow'
                  : 'text-white/80 hover:text-white'
              }`}
              title="English"
            >
              <span>🇬🇧</span> EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="bg-cream shadow-sm border-b border-border">
        <div className="container mx-auto px-4 md:px-8 py-3 flex flex-col md:flex-row items-center justify-between">
          <nav className="hidden md:flex flex-wrap gap-x-5 gap-y-2">
            {categories.map((cat) => (
              <Link
                key={cat.path}
                href={cat.path}
                className={`text-sm font-medium transition-colors py-1 ${
                  pathname === cat.path
                    ? 'font-bold text-primary border-b-2 border-primary'
                    : 'text-text-dark hover:text-primary'
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </nav>
          
          <div className="md:hidden w-full flex justify-between items-center py-2">
            <span className="font-bold text-primary">{t.menu}</span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-dark p-2 rounded hover:bg-cream-dark"
              aria-label={t.menu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <nav className="md:hidden flex flex-col space-y-2 w-full mb-4 pt-2 border-t border-border">
              {categories.map((cat) => (
                <Link
                  key={cat.path}
                  href={cat.path}
                  className={`block px-4 py-2 text-text-dark hover:bg-cream-dark rounded ${
                    pathname === cat.path ? 'font-bold bg-cream-dark text-primary' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          )}

          <div className="w-full md:w-auto mt-3 md:mt-0">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
