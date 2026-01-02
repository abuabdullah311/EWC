import React from 'react';

export const Ident: React.FC<{ className?: string }> = ({ className = '' }) => {
  // Abstract representation of the brand ident using SVG
  return (
    <div className={`opacity-10 pointer-events-none ${className}`}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_60s_linear_infinite]">
        <defs>
          <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1292B7" />
            <stop offset="100%" stopColor="#60C9DC" />
          </linearGradient>
        </defs>
        <g stroke="url(#brandGrad)" fill="none" strokeWidth="1">
          {Array.from({ length: 20 }).map((_, i) => (
             <rect 
                key={i} 
                x="50" 
                y="50" 
                width="300" 
                height="300" 
                transform={`rotate(${i * 4.5} 200 200)`} 
             />
          ))}
        </g>
      </svg>
    </div>
  );
};