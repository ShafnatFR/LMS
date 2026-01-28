import React from 'react';

const PageHeader = ({ title, subtitle, bgImage }: { title: string, subtitle: string, bgImage?: string }) => (
  <div className="relative bg-school-primary text-white py-20 overflow-hidden">
    {bgImage && (
      <div className="absolute inset-0">
        <img src={bgImage} alt="Header Background" className="w-full h-full object-cover opacity-20 mix-blend-multiply" />
      </div>
    )}
    {/* Abstract Background Decoration */}
    <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <span className="inline-block px-3 py-1 border border-white/30 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-white/80">
        SMA BPS&K 1 Jakarta
      </span>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h1>
      <p className="text-white/90 text-lg max-w-2xl mx-auto font-light leading-relaxed">{subtitle}</p>
    </div>
  </div>
);

export default PageHeader;