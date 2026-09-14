"use client";

import { Article } from '@/lib/types';
import { localizeArticle } from '@/lib/localizedData';
import { useLanguage } from '@/lib/LanguageContext';

export default function LocalizedArticleBody({ article }: { article: Article }) {
  const { language } = useLanguage();
  const localizedArticle = localizeArticle(article, language);

  return (
    <>
      <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{localizedArticle.title}</h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
        <time dateTime={localizedArticle.publishedAt}>
          {new Date(localizedArticle.publishedAt).toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
        </time>
        <div className="flex flex-wrap gap-2">
          {localizedArticle.tags.map(tag => <span key={tag} className="bg-cream-dark text-primary px-2 py-1 rounded text-xs font-medium">#{tag}</span>)}
        </div>
      </div>
      {localizedArticle.imageUrl && <img src={localizedArticle.imageUrl} alt={localizedArticle.title} className="w-full h-auto rounded-lg mb-8 object-cover max-h-96" />}
      <div className="article-content prose prose-lg max-w-none text-slate-700" dangerouslySetInnerHTML={{ __html: localizedArticle.content }} />
    </>
  );
}