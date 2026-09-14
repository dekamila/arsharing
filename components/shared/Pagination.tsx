"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { localizeArticle } from '@/lib/localizedData';

interface PaginationProps {
  prevArticle: { title: string; slug: string; categorySlug: string } | null;
  nextArticle: { title: string; slug: string; categorySlug: string } | null;
}

const Pagination = ({ prevArticle, nextArticle }: PaginationProps) => {
  const { language, t } = useLanguage();
  const localizedPrev = prevArticle ? localizeArticle(prevArticle as Parameters<typeof localizeArticle>[0], language) : null;
  const localizedNext = nextArticle ? localizeArticle(nextArticle as Parameters<typeof localizeArticle>[0], language) : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 border-t border-border pt-6">
      <div>
        {prevArticle ? (
          <Link
            href={`/${prevArticle.categorySlug}/${prevArticle.slug}`}
            className="block p-4 rounded-lg bg-white border border-border hover:border-primary hover:shadow-md transition-all group"
          >
            <div className="text-xs text-text-gray mb-1 flex items-center gap-1 group-hover:text-primary">
              <span>←</span> {t.previous}
            </div>
            <div className="font-semibold text-text-dark line-clamp-1 group-hover:text-primary">
              {localizedPrev?.title}
            </div>
          </Link>
        ) : <div />}
      </div>

      <div>
        {nextArticle ? (
          <Link
            href={`/${nextArticle.categorySlug}/${nextArticle.slug}`}
            className="block p-4 rounded-lg bg-white border border-border hover:border-primary hover:shadow-md transition-all text-right group"
          >
            <div className="text-xs text-text-gray mb-1 flex items-center justify-end gap-1 group-hover:text-primary">
              {t.next} <span>→</span>
            </div>
            <div className="font-semibold text-text-dark line-clamp-1 group-hover:text-primary">
              {localizedNext?.title}
            </div>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
};

export default Pagination;
