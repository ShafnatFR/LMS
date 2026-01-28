
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Page } from './types';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './Home';
import AboutPage from './About';
import DirectoryPage from './Directory';
import FacilitiesPage from './Facilities';
import GalleryPage from './Gallery';
import CalendarPage from './Calendar';
import ArticlePage from './Article';
import PrestasiPage from './Prestasi';
import LoginPage from './Login';
import StudentPortal from './StudentPortal';
import TeacherPortal from './TeacherPortal';
import AdminPortal from './AdminPortal';
import { AuthProvider, useAuth } from './AuthContext';

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
