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
import OpportunityList from "@/components/shared/OpportunityList";

export default async function BeasiswaPage() {
  const categorySlug = 'beasiswa';
  const category = getCategoryBySlug(categorySlug);
  
  if (!category) {
    notFound();
  }

  const allArticles = getArticlesByCategory(categorySlug);
    const quickInfoArticles = allArticles.filter((article) =>
      ['tips-menulis-essay-beasiswa', 'beasiswa-lpdp-persyaratan'].includes(article.slug)
    );
    const registrationInfoArticles = allArticles.filter((article) =>
      ['beasiswa-pertukaran-asean', 'beasiswa-unggulan-kemendikbud-2027', 'beasiswa-djarum-foundation-2026'].includes(article.slug)
    );
  
  const popularArticles = getPopularArticles(5);
  const upcomingEvents = getArticlesByCategory('event').slice(0, 3);
  const quickLinks = getAllQuickLinks();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Beranda', href: '/' },
        { label: 'Beasiswa' }
      ]} />
      
      <BackButton href="/" label="Kembali ke Beranda" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2">
          <LocalizedCategoryHeader category={category} />

          <div className="space-y-8">
            <div className="mb-6 rounded-xl border border-primary/20 bg-[#FFFDF8] px-4 py-3 shadow-sm">
              <p className="text-sm text-text-dark mb-2">
                Informasi lebih lengkap mengenai beasiswa mitra yang tersedia di UNAIR bisa dilihat di situs resmi UNAIR.
              </p>
              <a
                href="https://unair.ac.id/mahasiswa-beasiswa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-semibold text-secondary hover:text-primary transition-colors"
              >
                Lihat Beasiswa UNAIR →
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">📝 Sekilas Informasi</h3>
              <ArticleList articles={quickInfoArticles} showCategory={false} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">📚 Info Pendaftaran Beasiswa</h3>
              <OpportunityList articles={registrationInfoArticles} />
            </div>
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
