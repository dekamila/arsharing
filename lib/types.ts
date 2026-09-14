export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  order: number;
  highlights?: string[];
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  categoryId: number;
  categorySlug: string;
  tags: string[];
  isPinned: boolean;
  isPopular: boolean;
  publishedAt: string;
}

export interface QuickLink {
  id: number;
  title: string;
  url: string;
  order: number;
}
