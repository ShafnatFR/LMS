import React from 'react';
import { Youtube, Play, Clock } from 'lucide-react';
import Card from './Card';
import { VIDEO_DATA } from '../data';

const VideoWidget = () => {
  return (
    <Card className="mb-8">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Youtube size={18} className="text-school-red" /> Video Terbaru
        </h3>
      </div>
      <div className="aspect-video bg-gray-100 relative group cursor-pointer overflow-hidden">
        <img 
          src={VIDEO_DATA.thumbnail} 
          alt="Video Thumbnail" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300 backdrop-blur-sm">
            <Play fill="#EF4444" className="text-school-red ml-1" size={20} />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-gray-800 mb-1 leading-tight hover:text-school-primary cursor-pointer transition">{VIDEO_DATA.title}</h4>
        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
          <Clock size={12} /> {VIDEO_DATA.uploadDate}
        </p>
      </div>
    </Card>
  );
};

export default VideoWidget;