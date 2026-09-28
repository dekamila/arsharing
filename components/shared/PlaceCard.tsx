"use client";

import Link from 'next/link';
import { Place } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';
import { localizePlace } from '@/lib/localizedData';

interface PlaceCardProps {
  place: Place;
}

export default function PlaceCard({ place }: PlaceCardProps) {
  const { language } = useLanguage();
  const localizedPlace = localizePlace(place, language);

  return (
    <Link
      href={`/${place.categorySlug}/tempat/${place.slug}`}
      className="block bg-[#FFFDF8] rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
    >
      {localizedPlace.imageUrl && (
        <div className="relative h-40 w-full overflow-hidden bg-cream">
          <img
            src={localizedPlace.imageUrl}
            alt={localizedPlace.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow gap-2">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-bold text-text-dark">{localizedPlace.name}</h4>
          {localizedPlace.priceRange && (
            <span className="text-xs text-text-gray whitespace-nowrap">{localizedPlace.priceRange}</span>
          )}
        </div>

        <p className="text-sm text-text-gray flex items-start gap-1">
          <span>📍</span>
          <span>{localizedPlace.address}</span>
        </p>

        {localizedPlace.hours && (
          <p className="text-sm text-text-gray flex items-center gap-1">
            <span>🕒</span>
            <span>{localizedPlace.hours}</span>
          </p>
        )}

        <p className="text-sm text-text-gray line-clamp-2 flex-grow">{localizedPlace.description}</p>

        <div className="flex gap-1 mt-auto pt-2 border-t border-cream-dark">
          {localizedPlace.tags.slice(0, 3).map((tag: string, idx: number) => (
            <span key={idx} className="bg-cream text-text-gray text-[10px] px-2 py-0.5 rounded-full border border-border">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
