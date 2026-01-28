import React from 'react';
import { Trophy, Medal, Calendar, Star, Award } from 'lucide-react';
import PageHeader from './PageHeader';
import Card from './Card';
import FadeInSection from './FadeInSection';
import { PRESTASI_DATA } from './data';

const PrestasiPage = () => {
   return (
      <div className="pb-20 bg-gray-50">
         <PageHeader
            title="Prestasi Sekolah"
            subtitle="Hall of Fame: Jejak langkah keberhasilan siswa-siswi SMA BPS&K 1 Jakarta dalam berbagai kompetisi."
            bgImage="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1920"
         />

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-24 relative z-10">

            {/* Intro Stats Cards - Floating with distinct colors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
               <FadeInSection delay={0}>
                  <Card className="p-8 border-b-4 border-b-school-primary bg-white h-full">
                     <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-red-50 rounded-lg text-school-primary">
                           <Trophy size={32} />
                        </div>
                        <span className="text-gray-300 font-black text-5xl opacity-20">01</span>
                     </div>
                     <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
                     <div className="text-gray-600 font-medium">Penghargaan Tahun Ini</div>
                  </Card>
               </FadeInSection>

               <FadeInSection delay={150}>
                  <Card className="p-8 border-b-4 border-b-school-accent bg-white h-full">
                     <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-yellow-50 rounded-lg text-yellow-600">
                           <Medal size={32} />
                        </div>
                        <span className="text-gray-300 font-black text-5xl opacity-20">02</span>
                     </div>
                     <div className="text-4xl font-bold text-gray-900 mb-1">15</div>
                     <div className="text-gray-600 font-medium">Juara Tingkat Nasional</div>
                  </Card>
               </FadeInSection>

               <FadeInSection delay={300}>
                  <Card className="p-8 border-b-4 border-b-school-blue bg-white h-full">
                     <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-50 rounded-lg text-school-blue">
                           <Star size={32} />
                        </div>
                        <span className="text-gray-300 font-black text-5xl opacity-20">03</span>
                     </div>
                     <div className="text-4xl font-bold text-gray-900 mb-1">Top 10</div>
                     <div className="text-gray-600 font-medium">Sekolah Berprestasi</div>
                  </Card>
               </FadeInSection>
            </div>

            {/* Prestasi List */}
            <div className="mb-12">
               <FadeInSection>
                  <div className="text-center mb-12">
                     <span className="inline-block px-3 py-1 bg-white border border-gray-200 text-gray-500 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                        DAFTAR JUARA
                     </span>
                     <h2 className="text-3xl font-bold text-gray-900">Prestasi Terbaru Siswa Kami</h2>
                  </div>
               </FadeInSection>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {PRESTASI_DATA.map((item, idx) => (
                     <FadeInSection key={item.id} delay={idx * 100}>
                        <Card className="overflow-hidden h-full flex flex-col group border-0 shadow-lg hover:shadow-2xl">
                           <div className="h-56 overflow-hidden relative">
                              <img
                                 src={item.image}
                                 alt={item.title}
                                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div className={`absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded shadow-md ${item.level === 'Nasional' ? 'bg-school-primary' :
                                    item.level.includes('Provinsi') ? 'bg-school-blue' : 'bg-school-green'
                                 }`}>
                                 {item.level}
                              </div>
                           </div>
                           <div className="p-6 flex flex-col flex-grow bg-white relative">
                              {/* Floating Rank Badge */}
                              <div className="absolute -top-5 left-6 w-10 h-10 bg-school-accent rounded-full flex items-center justify-center border-4 border-white shadow-sm text-school-secondary">
                                 <Award size={18} />
                              </div>

                              <div className="mt-4 mb-2">
                                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{item.rank}</span>
                              </div>
                              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-school-primary transition-colors">
                                 {item.title}
                              </h3>
                              <p className="text-gray-500 text-sm mb-4 border-l-2 border-gray-200 pl-3">
                                 {item.studentName}
                              </p>

                              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-gray-400 text-xs font-medium">
                                 <Calendar size={14} className="mr-1" /> {item.date}
                              </div>
                           </div>
                        </Card>
                     </FadeInSection>
                  ))}
               </div>
            </div>

         </div>
      </div>
   );
};

export default PrestasiPage;