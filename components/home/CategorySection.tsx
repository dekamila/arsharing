"use client";

import React from 'react';
import Link from 'next/link';
import { Category, Article } from '@/lib/types';
import ArticleCard from '@/components/shared/ArticleCard';
import { useLanguage } from '@/lib/LanguageContext';
import { localizeCategory } from '@/lib/localizedData';

interface CategorySectionProps {
  category: Category;
  articles: Article[];
}

const CategorySection = ({ category, articles }: CategorySectionProps) => {
  const { language, t } = useLanguage();
  const localizedCategory = localizeCategory(category, language);

  return (
    <section className="py-6 border-b border-border last:border-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
          <span>{localizedCategory.icon}</span>
          <span>{localizedCategory.name}</span>
        </h2>
        <Link href={`/${category.slug}`} className="text-secondary hover:underline font-medium text-sm transition-colors">
          {t.viewAll}
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      
      {articles.length === 0 && (
        <p className="text-text-gray italic text-sm">{t.noArticles}</p>
      )}
    </section>
  );
};

export default CategorySection;
