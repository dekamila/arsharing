import { Place } from '@/lib/types';
import PlaceCard from './PlaceCard';
import { useLanguage } from '@/lib/LanguageContext';

interface PlaceListProps {
  places: Place[];
}

export default function PlaceList({ places }: PlaceListProps) {
  const { t } = useLanguage();
  if (places.length === 0) {
    return (
      <p className="text-sm text-text-gray py-4">{t.noPlaceEntries}</p>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}
