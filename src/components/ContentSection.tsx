import React from 'react';
import AdPlaceholder from './AdPlaceholder';

interface ContentSectionProps {
  title: string;
  id?: string;
  children: React.ReactNode;
  showAd?: boolean;
  adPosition?: 'top' | 'middle' | 'bottom';
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  id,
  children,
  showAd = false,
  adPosition = 'top',
  className = '',
}) => {
  return (
    <section id={id} className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-900">{title}</h2>
        
        {showAd && adPosition === 'top' && (
          <AdPlaceholder className="mb-8" />
        )}
        
        <div className="prose max-w-none">
          {children}
        </div>
        
        {showAd && adPosition === 'middle' && (
          <AdPlaceholder className="my-8" />
        )}
        
        {showAd && adPosition === 'bottom' && (
          <AdPlaceholder className="mt-8" />
        )}
      </div>
    </section>
  );
};

export default ContentSection;