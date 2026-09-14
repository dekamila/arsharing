import { getArticleBySlug, getArticlesByCategory, getPopularArticles, getAllQuickLinks, getAdjacentArticles } from '@/lib/queries';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Sidebar from '@/components/layout/Sidebar';
import BackButton from '@/components/shared/BackButton';
import Pagination from '@/components/shared/Pagination';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Panduan Tidak Ditemukan' };
  return { title: `${article.title} | ARSharing`, description: article.excerpt };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  
  const categorySlug = 'panduan-internasional';
  const { prev, next } = getAdjacentArticles(slug, categorySlug);
  const popularArticles = getPopularArticles(5);
  const upcomingEvents = getArticlesByCategory('event').slice(0, 3);
  const quickLinks = getAllQuickLinks();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{label:'Beranda',href:'/'},{label:'Panduan Internasional',href:`/${categorySlug}`},{label:article.title}]} />
      <BackButton href={`/${categorySlug}`} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <article className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="mb-4">
              <span className="text-sm text-gray-500">{new Date(article.publishedAt).toLocaleDateString('id-ID', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}</span>
            </div>
            <h1 className="text-3xl font-bold text-primary mb-4">{article.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map(tag => (<span key={tag} className="px-3 py-1 bg-cream-dark text-primary text-sm rounded-full">{tag}</span>))}
            </div>
            {article.imageUrl && <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-6" />}
            <div className="prose max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          <div className="mt-8">
            <Pagination prevArticle={prev ? { title: prev.title, slug: prev.slug, categorySlug: prev.categorySlug } : null} nextArticle={next ? { title: next.title, slug: next.slug, categorySlug: next.categorySlug } : null} />
          </div>
        </article>
        <aside>
          <Sidebar popularArticles={popularArticles} upcomingEvents={upcomingEvents} quickLinks={quickLinks} />
        </aside>
      </div>
    </main>
  );
}
