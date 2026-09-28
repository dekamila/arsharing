import Breadcrumb from "@/components/shared/Breadcrumb";
import ArticleList from "@/components/shared/ArticleList";
import Sidebar from "@/components/layout/Sidebar";
import BackButton from "@/components/shared/BackButton";
import { 
  getCategoryBySlug, 
  getArticlesByCategory, 
  getPopularArticles,
  getAllQuickLinks
} from "@/lib/queries";
import { notFound } from "next/navigation";
import LocalizedCategoryHeader from "@/components/shared/LocalizedCategoryHeader";
import LocalizedSectionTitle from "@/components/shared/LocalizedSectionTitle";

export default async function PerpustakaanPage() {
  const categorySlug = 'perpustakaan';
  const category = getCategoryBySlug(categorySlug);
  
  if (!category) {
    notFound();
  }

  const allArticles = getArticlesByCategory(categorySlug);
  
  const popularArticles = getPopularArticles(5);
  const upcomingEvents = getArticlesByCategory('event').slice(0, 3);
  const quickLinks = getAllQuickLinks();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Beranda', href: '/' },
        { label: 'Perpustakaan' }
      ]} />
      
      <BackButton href="/" label="Kembali ke Beranda" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2">
          <LocalizedCategoryHeader category={category} />

          <div className="mb-6 rounded-xl border border-primary/20 bg-[#FFFDF8] px-4 py-3 shadow-sm">
            <p className="text-sm text-text-dark mb-2">
              Informasi lebih lengkap mengenai layanan, katalog, jurnal, dan akses perpustakaan UNAIR bisa dilihat di situs resmi perpustakaan.
            </p>
            <a
              href="https://lib.unair.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-secondary hover:text-primary transition-colors"
            >
              Kunjungi Perpustakaan UNAIR →
            </a>
          </div>
          
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
