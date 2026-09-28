"use client";

import { Place } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';
import { localizePlace } from '@/lib/localizedData';

export default function LocalizedPlaceBody({ place }: { place: Place }) {
  const { language } = useLanguage();
  const localizedPlace = localizePlace(place, language);
  const menuSections = localizedPlace.menuSections ?? (localizedPlace.menuHighlights
    ? [{ title: '', items: localizedPlace.menuHighlights }]
    : []);
  const infoSections = localizedPlace.infoSections ?? [];
  const infoTables = localizedPlace.infoTables ?? [];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
      {localizedPlace.imageUrl && (
        <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6 bg-cream border border-border">
          <img
            src={localizedPlace.imageUrl}
            alt={localizedPlace.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h1 className="text-2xl lg:text-3xl font-bold text-text-dark mb-3">{localizedPlace.name}</h1>

      <div className="flex flex-wrap gap-4 text-sm text-text-gray mb-6 pb-4 border-b border-border">
        <span className="flex items-center gap-1.5 font-medium">
          <span>📍</span>
          <span>{localizedPlace.address}</span>
        </span>
        {localizedPlace.hours && (
          <span className="flex items-center gap-1.5 font-medium">
            <span>🕒</span>
            <span>{localizedPlace.hours}</span>
          </span>
        )}
        {localizedPlace.priceRange && (
          <span className="flex items-center gap-1.5 font-medium text-secondary">
            <span>💰</span>
            <span>{localizedPlace.priceRange}</span>
          </span>
        )}
      </div>

      <p className="text-text-dark text-base leading-relaxed mb-6">{localizedPlace.description}</p>

      {(infoSections.length > 0 || infoTables.length > 0) && (
        <section className="bg-cream/70 rounded-lg p-5 border border-border mb-6">
          <h2 className="font-bold text-primary mb-3 text-lg">
            {language === 'en' ? 'Additional Information' : 'Informasi Tambahan'}
          </h2>
          <div className="space-y-5">
            {infoSections.map((section) => (
              <section key={section.title}>
                <h3 className="font-semibold text-text-dark mb-2">{section.title}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-text-dark text-sm">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-border/60">
                      <span className="text-secondary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            {infoTables.map((table) => (
              <section key={table.title}>
                <h3 className="font-semibold text-text-dark mb-2">{table.title}</h3>
                <div className="overflow-x-auto rounded border border-border">
                  <table className="min-w-[720px] w-full border-collapse text-left text-sm">
                    <thead>
                      <tr>
                        {table.headers.map((header) => (
                          <th key={header} scope="col" className="whitespace-nowrap border border-border bg-white px-3 py-2 font-semibold text-text-dark">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row) => (
                        <tr key={row.join('-')}>
                          {row.map((cell, index) => (
                            <td key={`${cell}-${index}`} className="whitespace-nowrap border border-border bg-white px-3 py-2 text-text-gray">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>
        </section>
      )}

      {menuSections.length > 0 && (
        <div className="bg-cream/70 rounded-lg p-5 border border-border mb-6">
          <h2 className="font-bold text-primary mb-3 text-lg flex items-center gap-2">
            <span>🍽️</span> {language === 'en' ? 'Recommended Menu' : 'Rekomendasi Menu'}
          </h2>
          <div className="space-y-5">
            {menuSections.map((section) => (
              <section key={section.title || section.items[0]}>
                {section.title && <h3 className="font-semibold text-text-dark mb-2">{section.title}</h3>}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-text-dark text-sm">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-border/60">
                      <span className="text-secondary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 pt-4 border-t border-cream-dark">
        {localizedPlace.tags.map((tag: string, idx: number) => (
          <span key={idx} className="bg-cream text-text-gray text-xs px-3 py-1 rounded-full border border-border font-medium">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
