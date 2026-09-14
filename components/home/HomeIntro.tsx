"use client";

import { useLanguage } from '@/lib/LanguageContext';

export default function HomeIntro() {
  const { t } = useLanguage();

  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">{t.explorePortal}</p>
      <h1 className="text-3xl font-bold text-primary mb-3">{t.discoverInfo}</h1>
      <p className="text-text-dark/75 leading-relaxed max-w-2xl">{t.homeDescription}</p>
    </div>
  );
}