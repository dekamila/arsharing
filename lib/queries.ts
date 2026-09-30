import { categories, articles, quickLinks, places } from './data';
import { Article, Category, QuickLink, Place } from './types';
import { Language } from './translations';
import { localizeArticle, localizeCategory, localizePlace, localizeQuickLink } from './localizedData';

export interface SearchResults {
  articles: Article[];
  places: Place[];
  recommendations: { category: Category; text: string }[];
  quickLinks: QuickLink[];
}

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
  const lowerQuery = query.trim().toLowerCase();
  if (!lowerQuery) return [];

  return articles.filter((article) => {
    const searchableArticle = localizeArticle(article, language);
    return searchableArticle.title.toLowerCase().includes(lowerQuery) ||
      searchableArticle.excerpt.toLowerCase().includes(lowerQuery) ||
      searchableArticle.content.toLowerCase().includes(lowerQuery) ||
      searchableArticle.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));
  });
}

function containsQuery(values: unknown, lowerQuery: string): boolean {
  if (typeof values === 'string') return values.toLowerCase().includes(lowerQuery);
  if (Array.isArray(values)) return values.some((value) => containsQuery(value, lowerQuery));
  if (values && typeof values === 'object') {
    return Object.values(values).some((value) => containsQuery(value, lowerQuery));
  }
  return false;
}

export function searchContent(query: string, language: Language = 'id'): SearchResults {
  const lowerQuery = query.trim().toLowerCase();
  if (!lowerQuery) return { articles: [], places: [], recommendations: [], quickLinks: [] };

  const recommendations = categories.flatMap((category) => {
    const localizedCategory = localizeCategory(category, language);
    const matches = (localizedCategory.highlights || [])
      .filter((highlight) => highlight.toLowerCase().includes(lowerQuery))
      .map((text) => ({ category: localizedCategory, text }));

    if (localizedCategory.name.toLowerCase().includes(lowerQuery) ||
        localizedCategory.description.toLowerCase().includes(lowerQuery)) {
      matches.unshift({ category: localizedCategory, text: localizedCategory.name });
    }

    return matches;
  });

  return {
    articles: searchArticles(query, language),
    places: places.filter((place) => containsQuery(localizePlace(place, language), lowerQuery)),
    recommendations,
    quickLinks: quickLinks
      .map((quickLink) => localizeQuickLink(quickLink, language))
      .filter((quickLink) => containsQuery(quickLink, lowerQuery)),
  };
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