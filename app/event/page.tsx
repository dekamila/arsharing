import { getArticlesByCategory, getCategoryBySlug, getPopularArticles, getAllQuickLinks } from '@/lib/queries';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ArticleList from '@/components/shared/ArticleList';
import Sidebar from '@/components/layout/Sidebar';
import BackButton from '@/components/shared/BackButton';
import { Metadata } from 'next';
import LocalizedCategoryHeader from '@/components/shared/LocalizedCategoryHeader';
import LocalizedSectionTitle from '@/components/shared/LocalizedSectionTitle';

export const metadata: Metadata = { 
  title: 'Event | ARSharing',
  description: 'Informasi event, seminar, dan kegiatan kampus.'
};

export default function Page() {
  const categorySlug = 'event';
  const category = getCategoryBySlug(categorySlug);
  const articles = getArticlesByCategory(categorySlug);
  const popularArticles = getPopularArticles(5);
  const upcomingEvents = articles.slice(0, 3);
  const quickLinks = getAllQuickLinks();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{label:'Beranda', href:'/'}, {label: category?.name || 'Event'}]} />
      <BackButton href="/" />
      <div className="mt-6">
        {category && <LocalizedCategoryHeader category={category} />}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <LocalizedSectionTitle kind="all" className="text-xl font-semibold text-primary mb-4" />
          <ArticleList articles={articles} />
        </div>
        <aside>
          <Sidebar popularArticles={popularArticles} upcomingEvents={upcomingEvents} quickLinks={quickLinks} />
        </aside>
      </div>
    </main>
  );
}
