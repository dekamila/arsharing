"use client";

import { Category } from '@/lib/types';
import { localizeCategory } from '@/lib/localizedData';
import { useLanguage } from '@/lib/LanguageContext';

export default function LocalizedCategoryHeader({ category }: { category: Category }) {
  const { language } = useLanguage();
  const localizedCategory = localizeCategory(category, language);

  return (
    <>
      <h1 className="text-3xl font-bold text-primary mb-4">{localizedCategory.icon} {localizedCategory.name}</h1>
      <p className="text-gray-600 mb-8">{localizedCategory.description}</p>
    </>
  );
}