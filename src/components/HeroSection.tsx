import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">{subtitle}</p>
            <Link 
              to={ctaLink} 
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src={image} 
              alt="" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;