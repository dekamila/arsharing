"use client";

import { useSearchParams } from 'next/navigation';
import { searchArticles } from '@/lib/queries';
import SearchBar from '@/components/shared/SearchBar';
import ArticleList from '@/components/shared/ArticleList';
import BackButton from '@/components/shared/BackButton';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { useLanguage } from '@/lib/LanguageContext';

export default function SearchPageContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const { t } = useLanguage();
  
  const results = q ? searchArticles(q) : [];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{label: t.home, href: '/'}, {label: t.searchResults}]} />
      <BackButton href="/" />
      
      <div className="mt-6 mb-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">{t.searchResults}</h1>
        <SearchBar className="w-full" placeholder={t.searchPlaceholder} />
      </div>

      <div className="mt-8">
        {!q ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t.enterKeyword}</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t.noResults(q)}</p>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-6">
              {t.foundResults(results.length, q)}
            </p>
            <div className="max-w-4xl">
              <ArticleList articles={results} showCategory={true} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
