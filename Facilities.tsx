import React, { useState } from 'react';
import Card from './Card';
import FadeInSection from './FadeInSection';
import { FACILITIES_LIST } from './data';

const FacilitiesPage = () => {
  const categories = ['Semua', 'Ruang Kelas', 'Fasilitas Pendukung', 'Ruang Operasional', 'Gedung', 'Pembelajaran'];
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredFacilities = activeCategory === 'Semua'
    ? FACILITIES_LIST
    : FACILITIES_LIST.filter(item => item.category === activeCategory);

  return (
    <div className="pb-20 bg-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeInSection>
          <span className="inline-block px-3 py-1 bg-red-50 text-school-primary text-xs font-bold rounded mb-4 uppercase tracking-wider">
            Profil Sekolah
          </span>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Selamat Datang di <br />
                <span className="text-school-primary">SMA BPS&K 1 Jakarta</span>
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg mb-8 border-l-4 border-school-accent pl-6">
                Sekolah Menengah Atas (SMA) BPS&K 1 Jakarta merupakan salah satu sekolah yang mengedepankan kualitas pendidikan dan karakter siswa.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Kami memiliki berbagai fasilitas lengkap untuk menunjang kegiatan belajar mengajar agar siswa dapat mengembangkan potensi dirinya secara maksimal.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden h-[400px] shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
                  alt="Gedung Sekolah"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-1000"
                />
                <div className="absolute inset-0 bg-school-blue/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Bottom Section: Facilities Grid with Tabs */}
      <div className="bg-slate-50 py-20 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Heading Center */}
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Inilah Fasilitas Kami
              </h2>
              <p className="text-gray-500">Menunjang pembelajaran dengan standar kualitas terbaik.</p>
            </div>
          </FadeInSection>

          {/* Filter Tabs */}
          <FadeInSection delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm border ${activeCategory === cat
                      ? 'bg-school-primary text-white border-school-primary shadow-md transform -translate-y-1'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-school-primary hover:text-school-primary'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeInSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((item, idx) => (
              <FadeInSection key={item.id} delay={idx * 50}>
                <Card className="overflow-hidden border-0 shadow-lg group">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white border border-white px-4 py-2 rounded-full font-bold tracking-wider text-sm hover:bg-white hover:text-black transition-colors">LIHAT DETAIL</span>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-school-blue bg-blue-50 px-2 py-1 rounded">{item.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-school-primary transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </Card>
              </FadeInSection>
            ))}
          </div>

          {filteredFacilities.length === 0 && (
            <div className="text-center py-12 text-gray-500 italic">
              Belum ada data fasilitas untuk kategori ini.
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;