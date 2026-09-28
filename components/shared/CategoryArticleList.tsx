"use client";

import { useState, useMemo, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Article, Subcategory, Place } from '@/lib/types';
import SubcategoryFilter from '@/components/shared/SubcategoryFilter';
import ArticleList from '@/components/shared/ArticleList';
import PlaceList from '@/components/shared/PlaceList';
import { useLanguage } from '@/lib/LanguageContext';

interface CategoryArticleListProps {
  articles: Article[];
  places?: Place[];
  subcategories: Subcategory[];
  initialSubcategory?: string;
  syncSubcategoryToUrl?: boolean;
}

// Menggabungkan filter pill sub-kategori dengan DUA jenis konten:
// - "Rangkuman & Panduan" -> artikel tulisan biasa (ArticleList)
// - "Direktori Tempat" -> entri tempat spesifik dengan data terstruktur (PlaceList)
// Section "Direktori Tempat" otomatis disembunyikan kalau kategori ini belum
// punya data places sama sekali (places kosong/tidak dikirim).
export default function CategoryArticleList({ articles, places = [], subcategories, initialSubcategory, syncSubcategoryToUrl = false }: CategoryArticleListProps) {
  const { t } = useLanguage();
  const [active, setActive] = useState<string | null>(initialSubcategory ?? null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setActive(initialSubcategory ?? null);
  }, [initialSubcategory]);

  const updateSubcategory = (slug: string | null) => {
    setActive(slug);
    if (syncSubcategoryToUrl) {
      router.replace(slug ? `${pathname}?sub=${encodeURIComponent(slug)}` : pathname, { scroll: false });
    }
  };

  const filteredArticles = useMemo(() => {
    if (!active) return articles;
    return articles.filter((a) =>
      a.subcategorySlug === active || a.additionalSubcategorySlugs?.includes(active)
    );
  }, [articles, active]);

  const filteredPlaces = useMemo(() => {
    if (!active) return places;
    return places.filter((p) => p.subcategorySlug === active);
  }, [places, active]);

  if (subcategories.length === 0) {
    return <ArticleList articles={articles} />;
  }

  return (
    <div>
      <SubcategoryFilter subcategories={subcategories} active={active} onChange={updateSubcategory} />

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-primary mb-3">📝 {t.informationOverview}</h3>
        <ArticleList articles={filteredArticles} />
      </div>

      {places.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">📍 {t.recommendedPlaces}</h3>
          <PlaceList places={filteredPlaces} />
        </div>
      )}
    </div>
  );
}
