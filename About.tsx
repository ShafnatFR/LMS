import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import PageHeader from './PageHeader';
import SectionHeading from './SectionHeading';
import Card from './Card';
import { ABOUT_DATA } from './data';

const AboutPage = () => {
  return (
    <div className="animate-fade-in pb-20">
      <PageHeader
        title={ABOUT_DATA.pageTitle}
        subtitle={ABOUT_DATA.pageSubtitle}
        bgImage={ABOUT_DATA.headerImage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <Card className="p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl h-64 md:h-80 relative overflow-hidden group shadow-lg">
                <div className="absolute inset-0 bg-school-primary/20 group-hover:bg-transparent transition duration-500 z-10"></div>
                <img src={ABOUT_DATA.historyImage} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" alt="Gedung Sekolah" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading title={ABOUT_DATA.historyTitle} color="border-school-accent" />
              <div className="prose prose-lg text-gray-600">
                {ABOUT_DATA.historyContent.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-school-primary">
                  <Star size={24} />
                </div>
                <h3 className="text-2xl font-bold text-school-primary">Visi Kami</h3>
              </div>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                {ABOUT_DATA.vision}
              </p>
            </div>

            {/* Misi */}
            <div className="bg-yellow-50/50 rounded-2xl p-8 border border-yellow-100 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-700">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800">Misi Kami</h3>
              </div>
              <ul className="space-y-4">
                {ABOUT_DATA.mission.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;