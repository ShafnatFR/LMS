import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { Page } from './types';
import { useAuth } from './AuthContext';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    onNavigate('home');
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ page, label }: { page: Page, label: string }) => (
    <button
      onClick={() => handleNavigate(page)}
      className={`font-medium transition-colors relative py-2 text-sm lg:text-base ${currentPage === page && currentPage !== 'article'
          ? 'text-white font-bold'
          : 'text-white/80 hover:text-white'
        }`}
    >
      {label}
      {currentPage === page && currentPage !== 'article' && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-school-accent rounded-full"></span>
      )}
    </button>
  );

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-school-primary shadow-lg py-1' : 'bg-school-primary py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center cursor-pointer gap-3" onClick={() => handleNavigate('home')}>
              <div className="bg-white p-1.5 rounded-lg shadow-sm">
                <GraduationCap size={28} className="text-school-primary" />
              </div>
              <div className="flex flex-col text-white">
                <span className="font-bold text-lg leading-none tracking-tight">SMA BPS&K 1</span>
                <span className="text-xs font-light tracking-widest opacity-90">JAKARTA</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <NavLink page="home" label="Beranda" />
              <NavLink page="about" label="Tentang Kami" />
              <NavLink page="directory" label="Direktori" />
              <NavLink page="facilities" label="Fasilitas" />
              <NavLink page="prestasi" label="Prestasi" />
              <NavLink page="gallery" label="Galeri" />
              <NavLink page="calendar" label="Agenda" />

              {isAuthenticated ? (
                <div className="flex items-center gap-4 border-l border-white/20 pl-4">
                  <div className="flex flex-col text-right text-white">
                    <span className="text-xs font-bold leading-none">{user?.name}</span>
                    <span className="text-[10px] opacity-80 uppercase">{user?.role}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                    title="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleNavigate('login')}
                  className="flex items-center gap-2 bg-school-accent hover:bg-yellow-400 text-school-primary font-bold px-4 py-2 rounded text-sm shadow-md transition-transform hover:-translate-y-0.5"
                >
                  <LogIn size={16} /> LOGIN
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-school-accent focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-24">
            <div className="px-4 pt-4 pb-6 space-y-2">

              {/* Mobile User Profile */}
              {isAuthenticated && (
                <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-school-primary rounded-full flex items-center justify-center text-white">
                      <UserIcon size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{user?.name}</div>
                      <div className="text-xs text-gray-500 uppercase">{user?.role}</div>
                    </div>
                  </div>
                  <button onClick={handleLogout} className="text-red-500 hover:text-red-700">
                    <LogOut size={20} />
                  </button>
                </div>
              )}

              {[
                { p: 'home', l: 'Beranda' },
                { p: 'about', l: 'Tentang Kami' },
                { p: 'directory', l: 'Direktori' },
                { p: 'facilities', l: 'Fasilitas' },
                { p: 'prestasi', l: 'Prestasi' },
                { p: 'gallery', l: 'Galeri' },
                { p: 'calendar', l: 'Agenda' }
              ].map((item) => (
                <button
                  key={item.p}
                  onClick={() => handleNavigate(item.p as Page)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-bold transition ${currentPage === item.p
                      ? 'bg-school-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {item.l}
                </button>
              ))}

              {!isAuthenticated && (
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleNavigate('login')}
                    className="w-full bg-school-accent text-school-primary font-bold py-3 rounded-lg shadow-sm flex items-center justify-center gap-2"
                  >
                    <LogIn size={20} /> LOGIN
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
      {/* Spacer for Fixed Nav */}
      <div className={`${scrolled ? 'h-20' : 'h-24'} transition-all`}></div>
    </>
  );
};

export default Navbar;