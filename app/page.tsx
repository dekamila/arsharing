import HeroBanner from "@/components/shared/HeroBanner";
import CategoryOverviewCard from "@/components/home/CategoryOverviewCard";
import Sidebar from "@/components/layout/Sidebar";
import { 
  getAllCategories, 
  getPopularArticles, 
  getAllQuickLinks, 
  getArticlesByCategory 
} from "@/lib/queries";

export default async function HomePage() {
  const categories = getAllCategories();
  const popularArticles = getPopularArticles(5);
  const upcomingEvents = getArticlesByCategory('event').slice(0, 3);
  const quickLinks = getAllQuickLinks();

  return (
    <div className="bg-cream">
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
                Jelajahi ARSharing
              </p>
              <h1 className="text-3xl font-bold text-primary mb-3">
                Temukan informasi yang kamu butuhkan
              </h1>
              <p className="text-text-dark/75 leading-relaxed max-w-2xl">
                Mulai dari informasi akademik, layanan perpustakaan, beasiswa,
                karir, hingga event kampus. Pilih kategori untuk melihat semua
                informasi yang tersedia di dalamnya.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category) => (
                <CategoryOverviewCard
                  key={category.id}
                  category={category}
                  informationCount={getArticlesByCategory(category.slug).length}
                />
              ))}
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
    </div>
  );
}
