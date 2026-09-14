"use client";

import React from 'react';
import Link from 'next/link';
import { Article } from '@/lib/types';

interface ArticleCardProps {
  article: Article;
  showCategory?: boolean;
}

const ArticleCard = ({ article, showCategory = false }: ArticleCardProps) => {
  return (
    <div className="bg-[#FFFDF8] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-border">
      <Link href={`/${article.categorySlug}/${article.slug}`} className="block relative h-48 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={article.imageUrl || `https://placehold.co/800x400/003366/white?text=${encodeURIComponent(article.title)}`} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        {showCategory && (
          <span className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
            {article.categorySlug}
          </span>
        )}
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/${article.categorySlug}/${article.slug}`}>
          <h3 className="text-lg font-bold text-text-dark hover:text-secondary mb-2 line-clamp-2 transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-text-gray text-sm mb-4 line-clamp-2 flex-grow">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-cream-dark">
          <span className="text-xs text-text-gray">ARSharing</span>
          <div className="flex space-x-1">
            {article.tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="bg-cream text-text-gray text-[10px] px-2 py-0.5 rounded-full border border-border">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
