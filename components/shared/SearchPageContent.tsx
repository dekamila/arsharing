"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { searchContent } from '@/lib/queries';
import SearchBar from '@/components/shared/SearchBar';
import ArticleList from '@/components/shared/ArticleList';
import PlaceList from '@/components/shared/PlaceList';
import BackButton from '@/components/shared/BackButton';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { useLanguage } from '@/lib/LanguageContext';

export default function SearchPageContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const { language, t } = useLanguage();
  
  const results = searchContent(q, language);
  const resultCount = results.articles.length + results.places.length +
    results.recommendations.length + results.quickLinks.length;

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
        ) : resultCount === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t.noResults(q)}</p>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-6">
              {t.foundResults(resultCount, q)}
            </p>
            <div className="space-y-10">
              {results.articles.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold text-primary mb-4">{t.allArticles}</h2>
                  <div className="max-w-4xl">
                    <ArticleList articles={results.articles} showCategory={true} />
                  </div>
                </section>
              )}

              {results.recommendations.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold text-primary mb-4">{t.searchRecommendations}</h2>
                  <ul className="max-w-4xl divide-y divide-border border-y border-border">
                    {results.recommendations.map(({ category, text }, index) => (
                      <li key={`${category.slug}-${text}-${index}`}>
                        <Link href={`/${category.slug}`} className="flex items-center justify-between gap-4 py-4 hover:text-primary">
                          <span>{category.icon} {text}</span>
                          <span className="shrink-0 text-sm text-text-gray">{category.name} &rarr;</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {results.places.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold text-primary mb-4">{t.recommendedPlaces}</h2>
                  <div className="max-w-4xl">
                    <PlaceList places={results.places} />
                  </div>
                </section>
              )}

              {results.quickLinks.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold text-primary mb-4">{t.quickLinks}</h2>
                  <ul className="max-w-4xl divide-y divide-border border-y border-border">
                    {results.quickLinks.map((quickLink) => (
                      <li key={quickLink.id}>
                        <a href={quickLink.url} target="_blank" rel="noreferrer" className="block py-4 hover:text-primary">
                          {quickLink.title} <span aria-hidden="true">&nearr;</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
