"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { articles, places } from '@/lib/data';
import { localizeArticle, localizePlace } from '@/lib/localizedData';

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const { language } = useLanguage();
  const localizeLabel = (label: string) => {
    const labels: Record<string, string> = language === 'en' ? {
      'Beranda': 'Home', Akademik: 'Academics', Perpustakaan: 'Library', Beasiswa: 'Scholarships',
      'Magang & Karir': 'Internships & Careers', 'Sekitar Kampus': 'Around Campus',
      'Jelajah Kota': 'Explore the City', 'Kebutuhan Harian': 'Daily Needs', Event: 'Events',
      'Panduan Internasional': 'International Guide', Pencarian: 'Search',
    } : {};
    const article = articles.find((item) => item.title === label);
    if (article) return localizeArticle(article, language).title;
    const place = places.find((item) => item.name === label);
    return place ? localizePlace(place, language).name : labels[label] || label;
  };

  return (
    <nav className="sticky top-[var(--site-header-height,5rem)] z-40 mb-6 flex flex-nowrap items-center overflow-x-auto whitespace-nowrap bg-cream/95 py-2 text-sm text-text-gray backdrop-blur-sm">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {localizeLabel(item.label)}
            </Link>
          ) : (
            <span className="text-text-dark font-medium">{localizeLabel(item.label)}</span>
          )}
          
          {index < items.length - 1 && (
            <span className="mx-2 text-border">›</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
