import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import Card from './Card';
import { AGENDA_DATA } from './data';

const AgendaWidget = () => {
  return (
    <Card className="mb-8">
      <div className="p-4 border-b border-gray-100 bg-gray-50/50">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Calendar size={18} className="text-school-primary" /> Agenda Terbaru
        </h3>
      </div>
      <div className="divide-y divide-gray-100">
        {AGENDA_DATA.map((item, idx) => (
          <div key={idx} className="p-4 flex gap-4 hover:bg-gray-50 transition cursor-pointer group">
            <div className={`${item.color} rounded-lg p-2 text-center min-w-[3.5rem] flex flex-col justify-center h-14`}>
              <span className="text-lg font-bold leading-none">{item.date}</span>
              <span className="text-lg font-bold uppercase mt-1 text-[10px]">{item.month}</span>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-sm font-semibold text-gray-800 group-hover:text-school-primary transition line-clamp-2 leading-snug">
                {item.title}
              </h4>
              <span className="text-xs text-gray-500 mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Lihat detail <ArrowRight size={10} />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 bg-gray-50 text-center border-t border-gray-100">
        <button className="text-xs font-bold text-school-primary hover:text-school-blue transition uppercase tracking-wide">Lihat Semua Agenda</button>
      </div>
    </Card>
  );
};

export default AgendaWidget;