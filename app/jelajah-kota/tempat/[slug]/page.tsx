import { getPlaceBySlug } from '@/lib/queries';
import Breadcrumb from '@/components/shared/Breadcrumb';
import BackButton from '@/components/shared/BackButton';
import LocalizedPlaceBody from '@/components/shared/LocalizedPlaceBody';
import { notFound } from 'next/navigation';

export default async function PlaceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = getPlaceBySlug('jelajah-kota', slug);
  if (!place) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Beranda', href: '/' },
          { label: 'Jelajah Kota', href: '/jelajah-kota' },
          { label: place.name },
        ]}
      />
      <BackButton href="/jelajah-kota" />

      <div className="mt-6">
        <LocalizedPlaceBody place={place} />
      </div>
    </main>
  );
}
