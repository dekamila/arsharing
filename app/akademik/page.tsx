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
import LocalizedCategoryHeader from "@/components/shared/LocalizedCategoryHeader";
import LocalizedSectionTitle from "@/components/shared/LocalizedSectionTitle";

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
          <LocalizedCategoryHeader category={category} />
          
          {pinnedArticles.length > 0 && (
            <div className="mb-10">
              <LocalizedSectionTitle kind="important" className="text-xl font-bold text-secondary mb-4 border-b pb-2" />
              <ArticleList articles={pinnedArticles} showCategory={false} />
            </div>
          )}
          
          <div>
            <LocalizedSectionTitle kind="all" className="text-xl font-bold text-primary mb-4 border-b pb-2" />
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
