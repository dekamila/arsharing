import { categories, articles, quickLinks } from './data';
import { Article, Category, QuickLink } from './types';

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

export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase();
  return articles.filter(a => 
    a.title.toLowerCase().includes(lowerQuery) ||
    a.excerpt.toLowerCase().includes(lowerQuery) ||
    a.content.toLowerCase().includes(lowerQuery) ||
    a.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
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
