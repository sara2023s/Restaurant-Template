
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle,
  centered = false
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-2xl">{subtitle}</p>}
      <div className={`h-1 w-16 bg-turmeric mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
