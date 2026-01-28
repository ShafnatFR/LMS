import React from 'react';
import { Phone, Facebook, Twitter } from 'lucide-react';

const SocialShareButtons = ({ title, url }: { title: string, url: string }) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 font-medium">Bagikan:</span>
      <a 
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
        title="Share on WhatsApp"
      >
        <Phone size={12} className="rotate-90" />
      </a>
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
        title="Share on Facebook"
      >
        <Facebook size={12} />
      </a>
      <a 
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"
        title="Share on Twitter"
      >
        <Twitter size={12} />
      </a>
    </div>
  );
};

export default SocialShareButtons;