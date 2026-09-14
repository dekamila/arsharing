import React from 'react';
import { Article } from '@/lib/types';
import ArticleCard from '@/components/shared/ArticleCard';

interface ArticleListProps {
  articles: Article[];
  showCategory?: boolean;
}

const ArticleList = ({ articles, showCategory = false }: ArticleListProps) => {
  if (articles.length === 0) {
    return (
      <div className="py-8 text-center text-text-gray bg-[#FFFDF8] rounded-lg border border-border">
        Belum ada informasi dalam kategori ini.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} showCategory={showCategory} />
      ))}
    </div>
  );
};

export default ArticleList;
