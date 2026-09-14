import HeroBanner from "@/components/shared/HeroBanner";
import CategoryOverviewCard from "@/components/home/CategoryOverviewCard";
import Sidebar from "@/components/layout/Sidebar";
import HomeIntro from "@/components/home/HomeIntro";
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
            <HomeIntro />

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
