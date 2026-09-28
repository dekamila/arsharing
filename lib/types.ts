export interface Subcategory {
  slug: string;
  name: string;
  nameEn?: string;
  order: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  order: number;
  highlights?: string[];
  subcategories?: Subcategory[];
}

export interface Article {
  id: number;
  title: string;
  titleEn?: string;
  slug: string;
  excerpt: string;
  excerptEn?: string;
  content: string;
  contentEn?: string;
  imageUrl: string;
  categoryId: number;
  categorySlug: string;
  subcategorySlug?: string;
  additionalSubcategorySlugs?: string[];
  tags: string[];
  tagsEn?: string[];
  isPinned: boolean;
  isPopular: boolean;
  publishedAt: string;
  deadline?: string;
  deadlineEn?: string;
  requirements?: string;
  requirementsEn?: string;
  stages?: string;
  stagesEn?: string;
}

export interface QuickLink {
  id: number;
  title: string;
  url: string;
  order: number;
}

export interface MenuSection {
  title: string;
  titleEn?: string;
  items: string[];
  itemsEn?: string[];
}

export interface PlaceInfoSection {
  title: string;
  titleEn?: string;
  items: string[];
  itemsEn?: string[];
}

export interface PlaceInfoTable {
  title: string;
  titleEn?: string;
  headers: string[];
  headersEn?: string[];
  rows: string[][];
}

export interface Place {
  id: number;
  name: string;          // "Depot Tanjung Api"
  nameEn?: string;
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
  address: string;
  priceRange?: string;    // "Rp 10.000 - 25.000"
  priceRangeEn?: string;
  hours?: string;         // "08.00 - 22.00 WIB"
  hoursEn?: string;
  description: string;
  descriptionEn?: string;
  imageUrl?: string;
  menuHighlights?: string[]; // khusus kuliner, opsional
  menuHighlightsEn?: string[];
  menuSections?: MenuSection[];
  infoSections?: PlaceInfoSection[];
  infoTables?: PlaceInfoTable[];
  tags: string[];
  tagsEn?: string[];
}