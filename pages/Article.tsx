import React from 'react';
import { ArrowLeft, Clock, Users } from 'lucide-react';
import Card from '../components/Card';
import SocialShareButtons from '../components/SocialShareButtons';
import { NEWS_DATA } from '../data';

const ArticlePage = ({ articleId, onBack }: { articleId: number, onBack: () => void }) => {
  const article = NEWS_DATA.find(a => a.id === articleId);

  if (!article) return <div className="text-center py-20">Artikel tidak ditemukan</div>;

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen pb-20">
      <div className="bg-school-primary h-64 relative">
         <div className="absolute inset-0 bg-school-primary/90"></div>
         <div className="max-w-4xl mx-auto px-4 h-full flex items-center relative z-10">
           <button onClick={onBack} className="text-white flex items-center gap-2 hover:underline absolute top-8 left-4 md:left-0">
             <ArrowLeft size={16} /> Kembali
           </button>
         </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 -mt-32 relative z-20">
        <Card className="overflow-hidden">
          <div className="h-96 relative">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <span className={`${article.tagColor} px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-md`}>
                {article.category}
              </span>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{article.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Clock size={16} /> {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} /> {article.author}
              </div>
              <div className="ml-auto">
                <SocialShareButtons title={article.title} url={`https://smabpsk1.sch.id/article/${article.id}`} />
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ArticlePage;