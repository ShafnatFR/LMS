import React from 'react';
import { ArrowRight, Play, ChevronRight, Quote, BookOpen, Trophy, Users, Award, Globe, Shield, Zap, Monitor } from 'lucide-react';
import { Page } from './types';
import { HERO_DATA, PRINCIPAL_DATA, MAJORS_DATA, VIDEO_DATA, TESTIMONIALS_DATA, NEWS_DATA, FACILITIES_LIST } from './data';
import Card from './Card';
import FadeInSection from './FadeInSection';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onArticleClick: (id: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onArticleClick }) => {

  // Custom Data for 4-Color Stats
  const COLORFUL_STATS = [
    { value: "35+", label: "Tahun Mengabdi", color: "text-school-primary", bg: "bg-red-50", border: "border-red-100" },
    { value: "2.500+", label: "Alumni Sukses", color: "text-school-blue", bg: "bg-blue-50", border: "border-blue-100" },
    { value: "100%", label: "Lulusan PTN/PTS", color: "text-school-green", bg: "bg-green-50", border: "border-green-100" },
    { value: "50+", label: "Prestasi Tahunan", color: "text-school-accent", bg: "bg-yellow-50", border: "border-yellow-100" }
  ];

  // Custom Data for Why Us to alternate colors
  const COLORFUL_WHY_US = [
    { icon: Trophy, title: "Akreditasi A Unggul", description: "Standar mutu pendidikan tinggi.", color: "text-school-primary", bg: "bg-red-100" },
    { icon: Users, title: "Pengajar Kompeten", description: "Guru tersertifikasi dan berpengalaman.", color: "text-school-blue", bg: "bg-blue-100" },
    { icon: Monitor, title: "Fasilitas Lengkap", description: "Lab komputer dan sains modern.", color: "text-school-green", bg: "bg-green-100" },
    { icon: Award, title: "Program Beasiswa", description: "Dukungan bagi siswa berprestasi.", color: "text-school-accent", bg: "bg-yellow-100" },
    { icon: Globe, title: "Kurikulum Merdeka", description: "Pembelajaran fleksibel.", color: "text-school-primary", bg: "bg-red-100" },
    { icon: Shield, title: "Lingkungan Aman", description: "Keamanan 24 jam.", color: "text-school-blue", bg: "bg-blue-100" },
    { icon: Zap, title: "Ekstrakurikuler", description: "Wadahi minat bakat siswa.", color: "text-school-green", bg: "bg-green-100" },
    { icon: BookOpen, title: "Budaya Literasi", description: "Perpustakaan digital.", color: "text-school-accent", bg: "bg-yellow-100" }
  ];

  return (
    <div className="bg-white overflow-hidden">

      {/* 1. HERO SECTION */}
      <div className="relative h-[600px] md:h-[750px] bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <FadeInSection>
            <span className="inline-block px-4 py-2 bg-school-accent text-school-primary font-bold rounded-full mb-6 text-sm shadow-lg border border-yellow-300">
              {HERO_DATA.badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-xl max-w-4xl">
              {HERO_DATA.title}
            </h1>
            <p className="text-gray-100 text-lg md:text-2xl max-w-2xl mb-10 leading-relaxed font-light drop-shadow-md">
              {HERO_DATA.subtitle}
            </p>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => onNavigate('directory')} className="bg-school-primary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-red-500/30 hover:-translate-y-1">
                DAFTAR SEKARANG
              </button>
              <button onClick={() => onNavigate('about')} className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1">
                TENTANG KAMI
              </button>
            </div>
          </FadeInSection>
        </div>

        {/* Decorative Bottom Shape */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* 2. STATS STRIP (Floating Cards) */}
      <div className="relative -mt-16 z-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {COLORFUL_STATS.map((stat, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <Card className={`text-center py-8 ${stat.bg} ${stat.border} border-2 hover:scale-105`}>
                  <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-600 text-sm md:text-base font-bold uppercase tracking-wider">{stat.label}</div>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* 3. PRINCIPAL SECTION (Contrasting Section) */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-school-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-school-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="text-school-blue font-bold tracking-widest text-sm uppercase mb-2 block">Sambutan Kepala Sekolah</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                  {PRINCIPAL_DATA.name}
                  <div className="absolute -bottom-2 left-0 w-1/2 h-1.5 bg-school-accent rounded-full"></div>
                </h2>

                <Card className="p-8 border-l-4 border-l-school-primary bg-white shadow-lg">
                  <Quote className="text-school-primary/20 mb-4 transform scale-x-[-1]" size={48} />
                  <div className="space-y-4 text-gray-600 leading-relaxed italic">
                    {PRINCIPAL_DATA.quotes.map((quote, idx) => (
                      <p key={idx}>{quote}</p>
                    ))}
                  </div>
                  <div className="mt-8 font-bold text-school-primary text-lg not-italic flex items-center gap-2">
                    <div className="w-8 h-1 bg-school-primary"></div>
                    {PRINCIPAL_DATA.footerText}
                  </div>
                </Card>
              </div>

              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-school-blue rounded-2xl rotate-6 transform group-hover:rotate-3 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-school-accent rounded-2xl -rotate-3 transform group-hover:-rotate-1 transition-all duration-500 opacity-80"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img src={PRINCIPAL_DATA.image} alt="Kepala Sekolah" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 4. MAJORS (Contrasting Section - White) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="px-4 py-1.5 rounded-full bg-red-50 text-school-primary font-bold text-xs uppercase tracking-wider mb-4 inline-block">
                Pilihan Akademik
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Jurusan Unggulan</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Fokuskan minat dan bakatmu dengan pilihan jurusan yang didukung fasilitas modern.</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MIPA CARD (Blue Theme) */}
            <FadeInSection delay={100}>
              <Card className="p-10 border-t-4 border-t-school-blue h-full flex flex-col justify-between hover:bg-blue-50/30">
                <div>
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl font-black text-school-blue mb-6 shadow-sm">
                    M
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">MIPA</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">Matematika dan Ilmu Pengetahuan Alam. Pilihan tepat bagi siswa yang menyukai observasi, eksperimen, dan analisa logis.</p>

                  <div className="flex gap-2 flex-wrap mb-8">
                    <span className="px-3 py-1 bg-white border border-blue-200 rounded text-xs text-blue-700 font-bold">Kedokteran</span>
                    <span className="px-3 py-1 bg-white border border-blue-200 rounded text-xs text-blue-700 font-bold">Teknik</span>
                    <span className="px-3 py-1 bg-white border border-blue-200 rounded text-xs text-blue-700 font-bold">Sains</span>
                  </div>
                </div>
                <button className="w-full py-3 rounded-lg border-2 border-school-blue text-school-blue font-bold hover:bg-school-blue hover:text-white transition-colors flex items-center justify-center gap-2">
                  Kurikulum MIPA <ArrowRight size={18} />
                </button>
              </Card>
            </FadeInSection>

            {/* IPS CARD (Yellow/Orange Theme - Using Accent) */}
            <FadeInSection delay={200}>
              <Card className="p-10 border-t-4 border-t-school-accent h-full flex flex-col justify-between hover:bg-yellow-50/30">
                <div>
                  <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center text-4xl font-black text-yellow-700 mb-6 shadow-sm">
                    S
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">IPS</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">Ilmu Pengetahuan Sosial. Wadah bagi siswa yang kritis terhadap fenomena sosial, ekonomi, dan hubungan masyarakat.</p>

                  <div className="flex gap-2 flex-wrap mb-8">
                    <span className="px-3 py-1 bg-white border border-yellow-200 rounded text-xs text-yellow-700 font-bold">Hukum</span>
                    <span className="px-3 py-1 bg-white border border-yellow-200 rounded text-xs text-yellow-700 font-bold">Ekonomi</span>
                    <span className="px-3 py-1 bg-white border border-yellow-200 rounded text-xs text-yellow-700 font-bold">Hub. Internasional</span>
                  </div>
                </div>
                <button className="w-full py-3 rounded-lg border-2 border-school-accent text-yellow-700 font-bold hover:bg-school-accent hover:text-white transition-colors flex items-center justify-center gap-2">
                  Kurikulum IPS <ArrowRight size={18} />
                </button>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (Contrasting Section - Light Gray with Colorful Cards) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kenapa Harus SMA BPS&K 1?</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-school-primary via-school-accent to-school-blue mx-auto rounded-full"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLORFUL_WHY_US.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInSection key={idx} delay={idx * 50}>
                  <Card className="h-full p-6 hover:shadow-xl border-t-4 border-t-transparent hover:border-t-current" style={{ color: idx % 4 === 0 ? '#D91E28' : idx % 4 === 1 ? '#0056D2' : idx % 4 === 2 ? '#008744' : '#FDB813' }}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.bg}`}>
                      <Icon size={28} className={item.color} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </Card>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. VIDEO SECTION (Solid Color Background) */}
      <section className="bg-school-secondary py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3">
                <span className="text-school-accent font-bold tracking-widest text-sm uppercase mb-2 block">Galeri Video</span>
                <h2 className="text-4xl font-bold mb-6">Suasana Belajar & Kegiatan Siswa</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Saksikan keseruan dan semangat siswa-siswi kami dalam berbagai kegiatan akademik maupun non-akademik.
                </p>
                <button onClick={() => onNavigate('gallery')} className="flex items-center gap-3 text-white font-bold hover:text-school-accent transition-colors group">
                  Lihat Semua Video <span className="p-2 bg-white/10 rounded-full group-hover:bg-school-accent group-hover:text-school-secondary transition-colors"><ArrowRight size={16} /></span>
                </button>
              </div>

              <div className="w-full md:w-2/3">
                <Card className="bg-transparent border-0 p-0 overflow-hidden rounded-2xl shadow-2xl relative group">
                  <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1920" alt="Video Cover" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/50 cursor-pointer hover:scale-110 transition-transform">
                      <Play size={40} fill="currentColor" className="ml-2" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 7. FACILITIES PREVIEW (Clean White) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Fasilitas Penunjang</h2>
                <div className="h-1 w-20 bg-school-green rounded-full"></div>
              </div>
              <button onClick={() => onNavigate('facilities')} className="hidden md:flex items-center gap-2 font-bold text-gray-500 hover:text-school-green transition">
                Selengkapnya <ChevronRight size={18} />
              </button>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES_LIST.slice(0, 4).map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <Card className="overflow-hidden border-0 shadow-lg h-64 group relative">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-school-accent text-xs font-bold uppercase mb-1">{item.category}</span>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Soft Background) */}
      <section className="py-24 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Apa Kata Alumni?</h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <FadeInSection key={item.id} delay={idx * 100}>
                <Card className="p-8 h-full flex flex-col relative mt-6">
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-school-primary text-white rounded-lg flex items-center justify-center shadow-lg transform rotate-3">
                      <Quote size={24} />
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 mb-8 leading-relaxed flex-grow pt-2">"{item.content}"</p>
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-school-blue font-medium">{item.role}</p>
                    </div>
                  </div>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ARTICLES (News Style) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Berita Terkini</h2>
              <button className="text-school-primary font-bold hover:underline">Lihat Semua</button>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_DATA.map((news, idx) => (
              <FadeInSection key={news.id} delay={idx * 100}>
                <div className="group cursor-pointer" onClick={() => onArticleClick(news.id)}>
                  <Card className="overflow-hidden border-0 shadow-lg mb-4">
                    <div className="h-56 overflow-hidden relative">
                      <img src={news.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className={`${news.tagColor} px-3 py-1 rounded shadow-sm text-xs font-bold uppercase tracking-wider`}>
                          {news.category}
                        </span>
                      </div>
                    </div>
                  </Card>
                  <div className="px-2">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span>{news.date}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{news.author}</span>
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-school-primary transition-colors leading-snug">
                      {news.title}
                    </h3>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;