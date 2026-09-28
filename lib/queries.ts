import { categories, articles, quickLinks, places } from './data';
import { Article, Category, QuickLink, Place } from './types';
import { Language } from './translations';
import { localizeArticle } from './localizedData';

export function getAllCategories(): Category[] { 
  return categories; 
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles
    .filter(a => a.categorySlug === categorySlug)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getPopularArticles(limit: number = 5): Article[] {
  return articles
    .filter(a => a.isPopular)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getLatestArticles(limit: number = 10): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getPinnedArticles(categorySlug: string): Article[] {
  return articles
    .filter(a => a.categorySlug === categorySlug && a.isPinned)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function searchArticles(query: string, language: Language = 'id'): Article[] {
  const lowerQuery = query.toLowerCase();
  return articles.filter((article) => {
    const searchableArticle = localizeArticle(article, language);
    return searchableArticle.title.toLowerCase().includes(lowerQuery) ||
      searchableArticle.excerpt.toLowerCase().includes(lowerQuery) ||
      searchableArticle.content.toLowerCase().includes(lowerQuery) ||
      searchableArticle.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));
  });
}

export function getRecentArticlesByCategory(categorySlug: string, limit: number = 3): Article[] {
  return getArticlesByCategory(categorySlug).slice(0, limit);
}

export function getAllQuickLinks(): QuickLink[] {
  return [...quickLinks].sort((a,b) => a.order - b.order); 
}

export function getAdjacentArticles(currentSlug: string, categorySlug: string): { prev: Article | null; next: Article | null } {
  const categoryArts = getArticlesByCategory(categorySlug);
  const currentIndex = categoryArts.findIndex(a => a.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  
  return {
    prev: currentIndex < categoryArts.length - 1 ? categoryArts[currentIndex + 1] : null,
    next: currentIndex > 0 ? categoryArts[currentIndex - 1] : null
  };
}

export function getPlacesBySubcategory(categorySlug: string, subcategorySlug: string | null): Place[] {
  return places.filter(
    (p) => p.categorySlug === categorySlug && (subcategorySlug ? p.subcategorySlug === subcategorySlug : true)
  );
}

export function getPlaceBySlug(categorySlug: string, slug: string): Place | undefined {
  return places.find((p) => p.categorySlug === categorySlug && p.slug === slug);
}