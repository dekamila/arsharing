"use client";

import Link from 'next/link';
import { Article } from '@/lib/types';
import { localizeArticle } from '@/lib/localizedData';
import { useLanguage } from '@/lib/LanguageContext';

interface OpportunityCardProps {
  article: Article;
}

export default function OpportunityCard({ article }: OpportunityCardProps) {
  const { language, t } = useLanguage();
  const localizedArticle = localizeArticle(article, language);

  return (
    <div className="block bg-[#FFFDF8] rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
      <Link href={`/${article.categorySlug}/${article.slug}`} className="block relative h-40 w-full overflow-hidden bg-cream">
        <img
          src={article.imageUrl || `https://placehold.co/800x400/003366/white?text=${encodeURIComponent(article.title)}`}
          alt={localizedArticle.title}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow gap-3">
        <Link href={`/${article.categorySlug}/${article.slug}`} className="font-bold text-text-dark line-clamp-2 hover:text-secondary transition-colors">
          {localizedArticle.title}
        </Link>
        <p className="text-sm text-text-gray line-clamp-2">{localizedArticle.excerpt}</p>

        <div className="space-y-2 text-sm text-text-gray">
          {localizedArticle.deadline && (
            <p className="flex items-start gap-2">
              <span>⏳</span>
              <span><strong className="text-text-dark">{t.deadlineLabel}</strong> {localizedArticle.deadline}</span>
            </p>
          )}
          {localizedArticle.requirements && (
            <p className="flex items-start gap-2">
              <span>📋</span>
              <span><strong className="text-text-dark">{t.requirementsLabel}</strong> {localizedArticle.requirements}</span>
            </p>
          )}
          {localizedArticle.stages && (
            <p className="flex items-start gap-2">
              <span>🔎</span>
              <span><strong className="text-text-dark">{t.stagesLabel}</strong> {localizedArticle.stages}</span>
            </p>
          )}
        </div>

        <div className="flex gap-1 mt-auto pt-2 border-t border-cream-dark">
          {localizedArticle.tags.slice(0, 3).map((tag: string, idx: number) => (
            <span key={idx} className="bg-cream text-text-gray text-[10px] px-2 py-0.5 rounded-full border border-border">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
