"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';

interface BackButtonProps {
  href?: string;
  label?: string;
}

const BackButton = ({ href, label }: BackButtonProps) => {
  const router = useRouter();
  const { t } = useLanguage();

  const displayLabel = label || t.back;

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center text-sm font-medium text-secondary hover:text-primary transition-colors my-4 group"
      >
        <span className="transform transition-transform group-hover:-translate-x-1 mr-1">←</span>
        {displayLabel.replace('← ', '')}
      </Link>
    );
  }

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center text-sm font-medium text-secondary hover:text-primary transition-colors my-4 group"
    >
      <span className="transform transition-transform group-hover:-translate-x-1 mr-1">←</span>
      {displayLabel.replace('← ', '')}
    </button>
  );
};

export default BackButton;
