import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  background = 'white' 
}) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-[#F8F9FA]';

  return (
    <section id={id} className={`py-20 md:py-28 ${bgClass} ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {children}
      </div>
    </section>
  );
};