import { Metadata } from 'next';
import { Suspense } from 'react';
import SearchPageContent from '@/components/shared/SearchPageContent';

export const metadata: Metadata = {
  title: 'Pencarian | ARSharing',
  description: 'Cari informasi, event, dan panduan untuk mahasiswa UNAIR.',
};

export default function Page() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-500">Memuat pencarian...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
