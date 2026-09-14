"use client";

import React from 'react';
import Link from 'next/link';
import { Category } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';
import { localizeCategory } from '@/lib/localizedData';

interface CategoryOverviewCardProps {
  category: Category;
  informationCount: number;
}

const CategoryOverviewCard = ({ category, informationCount }: CategoryOverviewCardProps) => {
  const { language, t } = useLanguage();
  const localizedCategory = localizeCategory(category, language);

  return (
    <div className="bg-[#FFFDF8] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-border flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 bg-cream rounded-lg border border-border">{category.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                {localizedCategory.name}
              </h3>
              <span className="text-xs text-text-gray font-medium">
                {informationCount} {t.availableInformation}
              </span>
            </div>
          </div>
        </div>

        <p className="text-text-dark/80 text-sm leading-relaxed mb-5">
          {localizedCategory.description}
        </p>

        {localizedCategory.highlights && localizedCategory.highlights.length > 0 && (
          <div className="bg-cream/60 p-4 rounded-lg border border-cream-dark mb-6">
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
              {t.servicesTopics}
            </h4>
            <ul className="space-y-1.5 text-xs text-text-dark">
              {localizedCategory.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Link
        href={`/${category.slug}`}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-light text-white font-medium text-sm rounded-lg transition-colors shadow-sm"
      >
        <span>{t.openService} {localizedCategory.name}</span>
        <span>→</span>
      </Link>
    </div>
  );
};

export default CategoryOverviewCard;
