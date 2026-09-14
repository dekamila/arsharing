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
    .replace('Kembali ke Event', 'Back to Events')
    .replace('Kembali ke Panduan Internasional', 'Back to International Guide') : (label || t.back);
  const displayLabel = localizedLabel;

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center text-sm font-medium text-secondary hover:text-primary transition-colors my-4 group"
      >
        <span className="transform transition-transform group-hover:-translate-x-1 mr-1">←</span>
        {displayLabel.replace('← ', '')}
      </Link>
    );
  }

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center text-sm font-medium text-secondary hover:text-primary transition-colors my-4 group"
    >
      <span className="transform transition-transform group-hover:-translate-x-1 mr-1">←</span>
      {displayLabel.replace('← ', '')}
    </button>
  );
};

export default BackButton;
