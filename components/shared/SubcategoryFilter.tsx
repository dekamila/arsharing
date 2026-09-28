"use client";

import { Subcategory } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';

interface SubcategoryFilterProps {
  subcategories: Subcategory[];
  active: string | null; // null = "Semua"
  onChange: (slug: string | null) => void;
}

export default function SubcategoryFilter({ subcategories, active, onChange }: SubcategoryFilterProps) {
  const { language, t } = useLanguage();
  const sorted = [...subcategories].sort((a, b) => a.order - b.order);

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onChange(null)}
        className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
          active === null
            ? 'bg-secondary text-white border-secondary'
            : 'bg-white text-text-gray border-border hover:border-secondary'
        }`}
      >
        {t.allSubcategories}
      </button>
      {sorted.map((sub) => (
        <button
          key={sub.slug}
          onClick={() => onChange(sub.slug)}
          className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
            active === sub.slug
              ? 'bg-secondary text-white border-secondary'
              : 'bg-white text-text-gray border-border hover:border-secondary'
          }`}
        >
          {language === 'en' ? sub.nameEn || sub.name : sub.name}
        </button>
      ))}
    </div>
  );
}
