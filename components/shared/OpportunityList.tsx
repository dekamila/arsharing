"use client";

import { Article } from '@/lib/types';
import OpportunityCard from './OpportunityCard';
import { useLanguage } from '@/lib/LanguageContext';

interface OpportunityListProps {
  articles: Article[];
}

export default function OpportunityList({ articles }: OpportunityListProps) {
  const { t } = useLanguage();
  if (articles.length === 0) {
    return <p className="text-sm text-text-gray py-4">{t.noApplicationInfo}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {articles.map((article) => (
        <OpportunityCard key={article.id} article={article} />
      ))}
    </div>
  );
}
