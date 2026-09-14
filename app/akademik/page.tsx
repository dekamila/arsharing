import Breadcrumb from "@/components/shared/Breadcrumb";
import ArticleList from "@/components/shared/ArticleList";
import Sidebar from "@/components/layout/Sidebar";
import BackButton from "@/components/shared/BackButton";
import { 
  getCategoryBySlug, 
  getArticlesByCategory, 
  getPinnedArticles,
  getPopularArticles,
  getAllQuickLinks
} from "@/lib/queries";
import { notFound } from "next/navigation";

export default async function AkademikPage() {
  const categorySlug = 'akademik';
  const category = getCategoryBySlug(categorySlug);
  
  if (!category) {
    notFound();
  }

  const allArticles = getArticlesByCategory(categorySlug);
  const pinnedArticles = getPinnedArticles(categorySlug);
  
  const popularArticles = getPopularArticles(5);
  const upcomingEvents = getArticlesByCategory('event').slice(0, 3);
  const quickLinks = getAllQuickLinks();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Beranda', href: '/' },
        { label: 'Akademik' }
      ]} />
      
      <BackButton href="/" label="Kembali ke Beranda" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-primary mb-4">📚 {category.name}</h1>
          <p className="text-gray-600 mb-8">{category.description}</p>
          
          {pinnedArticles.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold text-secondary mb-4 border-b pb-2">Informasi Penting</h2>
              <ArticleList articles={pinnedArticles} showCategory={false} />
            </div>
          )}
          
          <div>
            <h2 className="text-xl font-bold text-primary mb-4 border-b pb-2">Semua Informasi</h2>
            <ArticleList articles={allArticles} showCategory={false} />
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
