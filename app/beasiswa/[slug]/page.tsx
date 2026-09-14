import Breadcrumb from "@/components/shared/Breadcrumb";
import Sidebar from "@/components/layout/Sidebar";
import BackButton from "@/components/shared/BackButton";
import Pagination from "@/components/shared/Pagination";
import { 
  getArticleBySlug, 
  getAdjacentArticles,
  getPopularArticles,
  getArticlesByCategory,
  getAllQuickLinks
} from "@/lib/queries";
import { notFound } from "next/navigation";
import LocalizedArticleBody from "@/components/shared/LocalizedArticleBody";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) return { title: 'Artikel tidak ditemukan' };
  
  return {
    title: `${article.title} | Beasiswa | ARSharing`,
    description: article.excerpt,
  };
}

export default async function BeasiswaArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article || article.categorySlug !== 'beasiswa') {
    notFound();
  }

  const { prev, next } = getAdjacentArticles(slug, 'beasiswa');
  
  const popularArticles = getPopularArticles(5);
  const upcomingEvents = getArticlesByCategory('event').slice(0, 3);
  const quickLinks = getAllQuickLinks();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-cream">
      <Breadcrumb items={[
        { label: 'Beranda', href: '/' },
        { label: 'Beasiswa', href: '/beasiswa' },
        { label: article.title }
      ]} />
      
      <BackButton href="/beasiswa" label="Kembali ke Beasiswa" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
            <LocalizedArticleBody article={article} />
          </div>
          
          <div className="mt-8">
            <Pagination prevArticle={prev} nextArticle={next} />
          </div>
        </div>
        
        <div>
          <Sidebar 
            popularArticles={popularArticles}
            upcomingEvents={upcomingEvents}
            quickLinks={quickLinks}
          />
        </div>
      </div>
    </div>
  );
}
