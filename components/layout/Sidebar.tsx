"use client";

import React from 'react';
import Link from 'next/link';
import { Article, QuickLink } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';
import { localizeArticle, localizeCategory, localizeQuickLink } from '@/lib/localizedData';
import { getCategoryBySlug } from '@/lib/queries';

interface SidebarProps {
  popularArticles: Article[];
  upcomingEvents: Article[];
  quickLinks: QuickLink[];
}

const Sidebar = ({ popularArticles, upcomingEvents, quickLinks }: SidebarProps) => {
  const { language, t } = useLanguage();

  return (
    <aside className="w-full space-y-8">
      {/* Popular Articles */}
      <div className="bg-[#FFFDF8] p-6 rounded-lg shadow-md border border-border">
        <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
          {t.popularArticles}
        </h3>
        <div className="space-y-4">
          {popularArticles.map((article) => {
            const localizedArticle = localizeArticle(article, language);
            const category = getCategoryBySlug(article.categorySlug);
            const categoryName = category ? localizeCategory(category, language).name : article.categorySlug;
            return (
            <div key={article.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
              <Link href={`/${article.categorySlug}/${article.slug}`} className="block hover:text-secondary font-medium text-text-dark mb-1 transition-colors">
                {localizedArticle.title}
              </Link>
              <div className="flex items-center text-xs text-text-gray mt-1">
                <span className="bg-cream-dark px-2 py-0.5 rounded text-primary text-[11px] font-semibold">{categoryName}</span>
              </div>
            </div>
          )})}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-[#FFFDF8] p-6 rounded-lg shadow-md border border-border">
        <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
          {t.upcomingEvents}
        </h3>
        <div className="space-y-4">
          {upcomingEvents.map((event) => {
            const localizedEvent = localizeArticle(event, language);
            return (
            <div key={event.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
              <Link href={`/${event.categorySlug}/${event.slug}`} className="block hover:text-secondary font-medium text-text-dark mb-1 transition-colors">
                {localizedEvent.title}
              </Link>
            </div>
          )})}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-[#FFFDF8] p-6 rounded-lg shadow-md border border-border">
        <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
          {t.quickLinks}
        </h3>
        <ul className="space-y-2">
          {quickLinks.map((link) => {
            const localizedLink = localizeQuickLink(link, language);
            return (
            <li key={link.id}>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:underline font-medium text-sm transition-colors"
              >
                <span>🌐</span> {localizedLink.title}
              </a>
            </li>
          )})}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
