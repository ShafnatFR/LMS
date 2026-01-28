import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = "", hoverEffect = true, style }) => (
  <div 
    className={`
      bg-white rounded-xl border border-gray-100 
      ${hoverEffect ? 'hover:-translate-y-2 hover:shadow-2xl hover:border-gray-200' : ''} 
      transition-all duration-300 ease-in-out shadow-sm
      ${className}
    `}
    style={style}
  >
    {children}
  </div>
);

export default Card;