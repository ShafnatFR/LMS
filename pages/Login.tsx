
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Page } from '../types';
import { GraduationCap, User, Lock, ArrowRight, ArrowLeft, Quote } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: Page) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simulation Logic
    if (username === 'admin' && password === 'admin') {
      login('admin', 'admin');
      onNavigate('admin-dashboard');
    } else if (username === 'guru' && password === 'guru') {
      login('guru', 'teacher');
      onNavigate('teacher-dashboard');
    } else if (username === 'siswa' && password === 'siswa') {
      login('siswa', 'student');
      onNavigate('student-dashboard');
    } else {
      setError('Username atau password salah.');
    }
  };

  return (
    <div className="min-h-screen flex font-sans bg-white">
      {/* Left Side - Visual & Quote */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-center items-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920" 
            alt="School Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-school-primary/90 to-red-900/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-16 text-center max-w-2xl">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-xl">
             <GraduationCap size={48} className="text-white" />
          </div>
          
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Sistem Informasi Akademik</h2>
          
          <div className="relative">
            <Quote className="absolute -top-4 -left-4 text-white/20 transform scale-x-[-1]" size={40} />
            <p className="text-xl font-light italic leading-relaxed text-white/90">
              "Pendidikan adalah senjata paling ampuh yang bisa Anda gunakan untuk mengubah dunia."
            </p>
            <div className="mt-4 font-bold text-school-accent">— Nelson Mandela</div>
          </div>
          
          <div className="mt-12 flex justify-center gap-2">
             <div className="w-2 h-2 rounded-full bg-white"></div>
             <div className="w-2 h-2 rounded-full bg-white/40"></div>
             <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-12 right-12 w-32 h-32 bg-school-accent/20 rounded-full blur-2xl"></div>
      </div>

      {/* Right Side - Login Form (With Gray Background and White Card) */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gray-50 relative">
        <button 
          onClick={() => onNavigate('home')} 
          className="absolute top-8 right-8 flex items-center gap-2 text-gray-500 hover:text-school-primary transition font-medium text-sm"
        >
          <ArrowLeft size={16} /> Kembali ke Beranda
        </button>

        {/* WHITE CARD CONTAINER */}
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Selamat Datang</h2>
            <p className="mt-2 text-gray-600">
              Silakan masuk ke akun Anda untuk mengakses portal akademik SMA BPS&K 1.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-50 border-l-4 border-school-primary p-4 rounded-r-md flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}
            
            <div className="space-y-5">
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-1">
                  Username / NIP / NISN
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-primary focus:border-school-primary transition-all sm:text-sm bg-gray-50 focus:bg-white"
                    placeholder="Masukkan ID Pengguna"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                   <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                    Password
                   </label>
                   <a href="#" className="text-xs text-school-primary hover:text-red-700 font-medium">Lupa password?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-primary focus:border-school-primary transition-all sm:text-sm bg-gray-50 focus:bg-white"
                    placeholder="Masukkan kata sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-gradient-to-r from-school-primary to-red-700 hover:from-red-700 hover:to-school-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-school-primary shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <ArrowRight className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
              </span>
              MASUK SISTEM
            </button>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
               <p className="text-center text-xs text-gray-400 uppercase tracking-wide mb-3">Akun Demo</p>
               <div className="grid grid-cols-3 gap-2 text-xs text-center">
                  <div className="bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200" onClick={() => {setUsername('admin'); setPassword('admin')}}>
                    <span className="font-bold block text-gray-700">Admin</span>
                    <span className="text-gray-500">admin/admin</span>
                  </div>
                  <div className="bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200" onClick={() => {setUsername('guru'); setPassword('guru')}}>
                    <span className="font-bold block text-gray-700">Guru</span>
                    <span className="text-gray-500">guru/guru</span>
                  </div>
                  <div className="bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200" onClick={() => {setUsername('siswa'); setPassword('siswa')}}>
                    <span className="font-bold block text-gray-700">Siswa</span>
                    <span className="text-gray-500">siswa/siswa</span>
                  </div>
               </div>
            </div>
          </form>
        </div>
        
        {/* Mobile Footer */}
        <div className="mt-8 lg:hidden text-center text-xs text-gray-400">
          &copy; 2026 SMA BPS&K 1 Jakarta
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
