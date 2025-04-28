import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  url,
  icon,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <div className="mr-3 text-blue-600">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
      >
        Visit Resource
        <ExternalLink className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

export default ResourceCard;