import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray';
  align?: 'left' | 'center'; // ميزة جديدة للتوازن البصري
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  background = 'white',
  align = 'center' 
}) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-[#F8F9FA]';
  const textAlign = align === 'left' ? 'text-left' : 'text-center';

  return (
    <section id={id} className={`py-16 md:py-32 ${bgClass} ${className}`}>
      <div className={`container mx-auto px-6 max-w-6xl ${textAlign}`}>
        {children}
      </div>
    </section>
  );
};
