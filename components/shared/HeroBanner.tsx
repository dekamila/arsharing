"use client";

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const HeroBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-16 px-4 md:px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="container mx-auto relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
          {t.heroTitle}
        </h1>
        <h2 className="text-xl md:text-2xl text-cream mb-5 font-medium">
          {t.heroSubtitle}
        </h2>
        <p className="text-base md:text-lg text-cream-dark leading-relaxed">
          {t.heroDesc}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
