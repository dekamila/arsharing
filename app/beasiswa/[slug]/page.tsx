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
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </time>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="bg-cream-dark text-primary px-2 py-1 rounded text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            {article.imageUrl && (
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-auto rounded-lg mb-8 object-cover max-h-96"
              />
            )}
            
            <div 
              className="article-content prose prose-lg max-w-none text-slate-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
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
