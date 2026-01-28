
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import DirectoryPage from './pages/Directory';
import FacilitiesPage from './pages/Facilities';
import GalleryPage from './pages/Gallery';
import CalendarPage from './pages/Calendar';
import ArticlePage from './pages/Article';
import PrestasiPage from './pages/Prestasi';
import LoginPage from './pages/Login';
import StudentPortal from './pages/student/StudentPortal';
import TeacherPortal from './pages/teacher/TeacherPortal';
import AdminPortal from './pages/admin/AdminPortal';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const SchoolWebsite = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);
  const { user } = useAuth();

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    if (!page.startsWith('student-') && !page.startsWith('teacher-') && !page.startsWith('admin-')) {
       window.scrollTo(0, 0);
    }
  };

  const handleArticleClick = (id: number) => {
    setSelectedArticleId(id);
    setCurrentPage('article');
    window.scrollTo(0, 0);
  };

  // Determine if we are in a dashboard view
  const isDashboardView = currentPage === 'student-dashboard' || currentPage === 'teacher-dashboard' || currentPage === 'admin-dashboard';

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col text-gray-800 font-sans ${isDashboardView ? 'h-screen overflow-hidden' : ''}`}>
      
      {!isDashboardView && <Navbar currentPage={currentPage} onNavigate={navigateTo} />}

      <main className={isDashboardView ? "h-full" : "flex-grow"}>
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} onArticleClick={handleArticleClick} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'directory' && <DirectoryPage />}
        {currentPage === 'facilities' && <FacilitiesPage />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'calendar' && <CalendarPage />}
        {currentPage === 'prestasi' && <PrestasiPage />}
        {currentPage === 'login' && <LoginPage onNavigate={navigateTo} />}
        {currentPage === 'article' && selectedArticleId && (
          <ArticlePage 
            articleId={selectedArticleId} 
            onBack={() => navigateTo('home')} 
          />
        )}
        
        {/* DASHBOARD ROUTES */}
        {currentPage === 'student-dashboard' && (
           <StudentPortal onNavigate={navigateTo} />
        )}
        {currentPage === 'teacher-dashboard' && (
           <TeacherPortal onNavigate={navigateTo} />
        )}
        {currentPage === 'admin-dashboard' && (
           <AdminPortal onNavigate={navigateTo} />
        )}
      </main>

      {!isDashboardView && <Footer onNavigate={navigateTo} />}
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(
  <AuthProvider>
    <SchoolWebsite />
  </AuthProvider>
);
