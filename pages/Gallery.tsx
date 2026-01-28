import React, { useState, useRef, useEffect } from 'react';
import { Upload, Play, Calendar, X, ChevronLeft, ChevronRight, Pause, Volume2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { MediaItem } from '../types';
import { GALLERY_DATA } from '../data';
import { useAuth } from '../contexts/AuthContext';

// Custom Video Player Component (unchanged logic, kept for brevity)
const CustomVideoPlayer = ({ src, poster }: { src: string; poster?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const manualChange = Number(e.target.value);
      videoRef.current.currentTime = (videoRef.current.duration / 100) * manualChange;
      setProgress(manualChange);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newVolume = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  return (
    <div 
      className="relative w-full h-full group bg-black rounded-lg overflow-hidden flex items-center justify-center"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-contain"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onClick={togglePlay}
      />

      {/* Center Play Button (only visible when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 hover:scale-110 transition-transform cursor-pointer">
            <Play fill="white" className="text-white ml-1" size={32} />
          </div>
        </div>
      )}

      {/* Custom Controls (Visible on Hover) */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-school-primary [&::-webkit-slider-thumb]:rounded-full"
        />

        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="hover:text-school-primary transition">
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
            </button>
            
            <div className="flex items-center gap-2 group/vol">
              <Volume2 size={20} />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(GALLERY_DATA);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { user } = useAuth(); // Hook Access

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const type = file.type.startsWith('video/') ? 'video' : 'photo';
      const newItem: MediaItem = {
        id: Date.now(),
        type,
        src: URL.createObjectURL(file),
        title: file.name.split('.')[0], 
        date: new Date().toISOString().split('T')[0]
      };
      setMediaItems([newItem, ...mediaItems]);
    }
  };

  const filteredItems = filter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === filter);

  const openModal = (item: MediaItem) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setSelectedIndex(index);
  };

  const closeModal = () => setSelectedIndex(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  return (
    <div className="animate-fade-in pb-20">
      <PageHeader 
        title="Galeri Sekolah" 
        subtitle="Momen-momen berharga dan dokumentasi kegiatan civitas akademika SMA BPS&K 1 Jakarta."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter and Upload Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex bg-white p-1 rounded-lg shadow-sm border border-gray-100">
            {(['all', 'photo', 'video'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all capitalize ${
                  filter === f 
                    ? 'bg-school-primary text-white shadow-md' 
                    : 'text-gray-500 hover:text-school-primary hover:bg-gray-50'
                }`}
              >
                {f === 'all' ? 'Semua' : f === 'photo' ? 'Foto' : 'Video'}
              </button>
            ))}
          </div>

          {/* Show Upload Button ONLY if Admin */}
          {user?.role === 'admin' && (
            <div>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*,video/*" onChange={handleFileChange} />
              <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg hover:border-school-primary hover:text-school-primary transition shadow-sm">
                <Upload size={18} />
                <span>Unggah Media</span>
              </button>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group border-0 shadow-md cursor-pointer hover:ring-2 hover:ring-school-primary transition-all">
              <div 
                className="aspect-w-16 aspect-h-12 bg-gray-200 relative overflow-hidden h-64"
                onClick={() => openModal(item)}
              >
                {item.type === 'video' ? (
                   <div className="w-full h-full flex items-center justify-center bg-gray-900 relative">
                      {/* Lazy loaded video preview/thumbnail */}
                      <video 
                        src={item.src} 
                        className="w-full h-full object-cover opacity-60" 
                        preload="metadata"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                          <Play fill="white" className="text-white ml-1" size={20} />
                        </div>
                      </div>
                   </div>
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    loading="lazy" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" 
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-white font-bold text-lg leading-tight">{item.title}</span>
                  <span className="text-gray-300 text-sm mt-1 flex items-center gap-1"><Calendar size={12}/> {item.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal / Carousel */}
      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 animate-fade-in">
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 z-[110] text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X size={32} />
          </button>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all hidden md:block"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all hidden md:block"
          >
            <ChevronRight size={32} />
          </button>

          {/* Modal Content */}
          <div className="w-full max-w-5xl flex flex-col items-center justify-center h-full">
            <div className="relative w-full flex-grow flex items-center justify-center overflow-hidden rounded-lg mb-4">
               {filteredItems[selectedIndex].type === 'video' ? (
                 <div className="w-full h-full max-h-[80vh] aspect-video">
                    {/* Custom Video Player in Modal */}
                    <CustomVideoPlayer src={filteredItems[selectedIndex].src} />
                 </div>
               ) : (
                 <img 
                   src={filteredItems[selectedIndex].src} 
                   alt={filteredItems[selectedIndex].title}
                   className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm"
                 />
               )}
            </div>

            {/* Details Section */}
            <div className="text-center text-white">
               <h2 className="text-2xl font-bold mb-1">{filteredItems[selectedIndex].title}</h2>
               <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
                 <Calendar size={14} /> {filteredItems[selectedIndex].date}
               </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;