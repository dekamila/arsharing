"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';

interface BackButtonProps {
  href?: string;
  label?: string;
}

const BackButton = ({ href, label }: BackButtonProps) => {
  const router = useRouter();
  const { language, t } = useLanguage();

  const localizedLabel = language === 'en' ? (label || t.back)
    .replace('Kembali ke Beranda', 'Back to Home')
    .replace('Kembali ke Akademik', 'Back to Academics')
    .replace('Kembali ke Perpustakaan', 'Back to Library')
    .replace('Kembali ke Beasiswa', 'Back to Scholarships')
    .replace('Kembali ke Magang & Karir', 'Back to Internships & Careers')
    .replace('Kembali ke Sekitar Kampus', 'Back to Around Campus')
    .replace('Kembali ke Jelajah Kota', 'Back to Explore the City')
    .replace('Kembali ke Kebutuhan Harian', 'Back to Daily Needs')
    .replace('Kembali ke Event', 'Back to Events')
    .replace('Kembali ke Panduan Internasional', 'Back to International Guide') : (label || t.back);
  const displayLabel = localizedLabel;

  if (href) {
    return (
      <Link
        href={href}
        style={{ top: 'calc(var(--site-header-height, 5rem) + 2.25rem)' }}
        className="sticky z-40 my-4 inline-flex items-center bg-cream/95 py-1 text-sm font-medium text-secondary backdrop-blur-sm transition-colors hover:text-primary group"
      >
        <span className="transform transition-transform group-hover:-translate-x-1 mr-1">←</span>
        {displayLabel.replace('← ', '')}
      </Link>
    );
  }

  return (
    <button
      onClick={() => router.back()}
      style={{ top: 'calc(var(--site-header-height, 5rem) + 2.25rem)' }}
      className="sticky z-40 my-4 inline-flex items-center bg-cream/95 py-1 text-sm font-medium text-secondary backdrop-blur-sm transition-colors hover:text-primary group"
    >
      <span className="transform transition-transform group-hover:-translate-x-1 mr-1">←</span>
      {displayLabel.replace('← ', '')}
    </button>
  );
};

export default BackButton;
