import { getArticlesByCategory, getCategoryBySlug, getPopularArticles, getAllQuickLinks, getPinnedArticles } from '@/lib/queries';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ArticleList from '@/components/shared/ArticleList';
import Sidebar from '@/components/layout/Sidebar';
import BackButton from '@/components/shared/BackButton';
import { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'Event | ARSharing',
  description: 'Informasi event, seminar, dan kegiatan kampus.'
};

export default function Page() {
  const categorySlug = 'event';
  const category = getCategoryBySlug(categorySlug);
  const articles = getArticlesByCategory(categorySlug);
  const pinnedArticles = getPinnedArticles(categorySlug);
  const nonPinnedArticles = articles.filter(a => !a.isPinned);
  const popularArticles = getPopularArticles(5);
  const upcomingEvents = articles.slice(0, 3);
  const quickLinks = getAllQuickLinks();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{label:'Beranda', href:'/'}, {label: category?.name || 'Event'}]} />
      <BackButton href="/" />
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-primary mb-2">🎉 {category?.name || 'Event'}</h1>
        <p className="text-gray-600 mb-8">{category?.description || 'Jadwal kegiatan dan acara mahasiswa.'}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {pinnedArticles.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">📌 Event Penting</h2>
              <ArticleList articles={pinnedArticles} />
            </div>
          )}
          <h2 className="text-xl font-semibold text-primary mb-4">Semua Event</h2>
          <ArticleList articles={nonPinnedArticles} />
        </div>
        <aside>
          <Sidebar popularArticles={popularArticles} upcomingEvents={upcomingEvents} quickLinks={quickLinks} />
        </aside>
      </div>
    </main>
  );
}
