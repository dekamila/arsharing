"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { articles } from '@/lib/data';
import { localizeArticle } from '@/lib/localizedData';

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
      'Magang & Karir': 'Internships & Careers', 'Sekitar Kampus': 'Around Campus', Event: 'Events',
      'Panduan Internasional': 'International Guide', Pencarian: 'Search',
    } : {};
    const article = articles.find((item) => item.title === label);
    return article ? localizeArticle(article, language).title : labels[label] || label;
  };

  return (
    <nav className="text-sm text-text-gray mb-6 flex flex-wrap items-center">
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
