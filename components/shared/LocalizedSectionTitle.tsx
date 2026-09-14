"use client";

import { useLanguage } from '@/lib/LanguageContext';

export default function LocalizedSectionTitle({ kind, className = '' }: { kind: 'important' | 'all'; className?: string }) {
  const { t } = useLanguage();
  return <h2 className={className}>{kind === 'important' ? t.importantArticles : t.allArticles}</h2>;
}