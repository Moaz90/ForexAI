import React from 'react';

interface AdPlaceholderProps {
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gray-100 p-4 rounded-lg text-center ${className}`}>
      <ins className="adsbygoogle"
     style={{ minHeight: '600px' }}
     data-ad-client="ca-pub-9135473927777985"
     data-ad-slot="4611003438"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

    </div>
  );
};

export default AdPlaceholder;