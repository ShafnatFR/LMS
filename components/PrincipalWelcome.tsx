import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import Card from './Card';
import { PRINCIPAL_DATA } from '../data';

const PrincipalWelcome = () => {
  return (
    <Card className="p-6 md:p-8 relative mb-12 bg-gradient-to-br from-white to-blue-50/50">
      <div className="absolute top-4 right-4 text-school-primary/5">
        <Quote size={100} />
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[3/4] md:aspect-auto md:h-64 group">
            <img 
              src={PRINCIPAL_DATA.image} 
              alt={PRINCIPAL_DATA.role} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
              <p className="font-bold text-white text-lg leading-tight">{PRINCIPAL_DATA.name}</p>
              <p className="text-gray-300 text-xs mt-1">{PRINCIPAL_DATA.role}</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Sambutan Kepala Sekolah</h2>
          <div className="h-1 w-16 bg-school-accent mb-6 rounded-full"></div>
          <div className="prose prose-sm text-gray-600 leading-relaxed italic">
            {PRINCIPAL_DATA.quotes.map((quote, idx) => (
              <p key={idx} className="mb-4">"{quote}"</p>
            ))}
            <p className="font-semibold text-school-primary not-italic mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-school-primary"></div>
              {PRINCIPAL_DATA.footerText}
            </p>
          </div>
          <button className="mt-8 text-sm font-bold text-school-primary border border-school-primary px-6 py-2.5 rounded-full hover:bg-school-primary hover:text-white transition-all flex items-center gap-2 group">
            Baca Selengkapnya 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PrincipalWelcome;