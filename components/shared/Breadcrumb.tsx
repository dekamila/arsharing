import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="text-sm text-text-gray mb-6 flex flex-wrap items-center">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-text-dark font-medium">{item.label}</span>
          )}
          
          {index < items.length - 1 && (
            <span className="mx-2 text-border">›</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
