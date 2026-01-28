import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import { Page } from './types';
import { SCHOOL_INFO } from './data';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer>
      {/* Red Banner Call to Action */}
      <div className="bg-school-primary py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-pattern opacity-10"></div>
        {/* Decorative circuit lines or abstract shapes could go here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg">
              <GraduationCap size={40} className="text-school-primary" />
            </div>
            <div>
              <h2 className="text-white text-3xl font-bold tracking-tight">Be a Leader of Tomorrow</h2>
              <p className="text-white/80">Bergabunglah bersama SMA BPS&K 1 Jakarta</p>
            </div>
          </div>

          <div className="flex gap-4">
            {[Facebook, Youtube, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-school-primary transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-50 text-gray-600 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Brand & Address */}
            <div className="col-span-1 md:col-span-1">
              <div className="mb-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">SMA BPS&K 1</h3>
                <div className="h-1 w-12 bg-school-primary"></div>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Jl. Radio Palasari Road, Citeureup, Kec. Dayeuhkolot,<br />
                Kabupaten Bandung, Jawa Barat 40257.<br />
                (Alamat Dummy sesuai referensi)
              </p>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center"><Facebook size={16} /></div>
                <div className="w-8 h-8 bg-red-600 text-white rounded flex items-center justify-center"><Youtube size={16} /></div>
                <div className="w-8 h-8 bg-pink-600 text-white rounded flex items-center justify-center"><Instagram size={16} /></div>
              </div>
            </div>

            {/* Menu Utama */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Menu Utama</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => onNavigate('about')} className="hover:text-school-primary transition">Profil Sekolah</button></li>
                <li><button onClick={() => onNavigate('facilities')} className="hover:text-school-primary transition">Fasilitas</button></li>
                <li><button onClick={() => onNavigate('prestasi')} className="hover:text-school-primary transition">Prestasi</button></li>
                <li><a href="#" className="hover:text-school-primary transition">Daftar Guru</a></li>
                <li><a href="#" className="hover:text-school-primary transition">Program Unggulan</a></li>
                <li><a href="#" className="hover:text-school-primary transition">Ekstrakurikuler</a></li>
                <li><a href="#" className="hover:text-school-primary transition">Hubungi Kami</a></li>
              </ul>
            </div>

            {/* Aplikasi Siswa */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Aplikasi Siswa</h3>
              <ul className="space-y-2 text-sm text-school-primary font-medium">
                <li><a href="#" className="hover:underline">MyLMS</a></li>
                <li><a href="#" className="hover:underline">Siakad</a></li>
                <li><a href="#" className="hover:underline">Virtual School</a></li>
                <li><a href="#" className="hover:underline">E-Library</a></li>
              </ul>
            </div>

            {/* Maps (Simulated) */}
            <div>
              <div className="bg-gray-200 w-full h-40 rounded-lg flex items-center justify-center text-gray-400">
                <span className="flex items-center gap-2"><MapPin size={16} /> Google Maps Area</span>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <p>Copyright © 2026 SMA BPS&K 1 Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;