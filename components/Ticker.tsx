import React from 'react';
import { Megaphone } from 'lucide-react';
import { TICKER_MESSAGES } from '../data';

const Ticker = () => {
  return (
    <div className="bg-slate-900 text-white py-2 overflow-hidden flex items-center shadow-sm relative z-20 border-b border-slate-800">
      <div className="bg-slate-900 px-4 font-bold text-xs md:text-sm uppercase tracking-wider z-10 flex items-center gap-2 border-r border-slate-700">
        <Megaphone size={16} className="text-school-accent animate-pulse" />
        <span className="hidden md:inline">Sekilas Info</span>
      </div>
      <div className="flex-1 overflow-hidden relative">
        <div className="animate-ticker text-sm font-medium text-gray-300">
          {TICKER_MESSAGES.map((msg, idx) => (
            <React.Fragment key={idx}>
              <span className="text-school-accent mx-2">•</span> {msg}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;