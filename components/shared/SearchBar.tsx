"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

const SearchBar = ({ className = '', placeholder }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const { t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/cari?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative flex items-center ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder || t.searchPlaceholder}
        className="w-full md:w-64 lg:w-72 px-4 py-2 pr-10 rounded-full border border-border bg-white text-text-dark placeholder-text-gray text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
      />
      <button
        type="submit"
        className="absolute right-1.5 p-1.5 text-text-gray hover:text-primary transition-colors rounded-full"
        aria-label={t.searchAria}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
