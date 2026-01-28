
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Page } from './types';
import {
   LayoutDashboard, Users, Newspaper, Image as ImageIcon, Settings, LogOut,
   Menu, X, Bell, Search, UserCog, Plus, Trash2, Edit, Save, UploadCloud,
   DollarSign, GraduationCap, Briefcase
} from 'lucide-react';
import Card from './Card';
import {
   NEWS_DATA, STAFF_DATA, STUDENT_LIST_DATA, GALLERY_DATA, SCHOOL_INFO
} from './data';

interface AdminPortalProps {
   onNavigate: (page: Page) => void;
}

type AdminView = 'dashboard' | 'users' | 'news' | 'gallery' | 'settings' | 'finance';

const AdminPortal: React.FC<AdminPortalProps> = ({ onNavigate }) => {
   const { user, logout } = useAuth();
   const [activeView, setActiveView] = useState<AdminView>('dashboard');
   const [isSidebarOpen, setSidebarOpen] = useState(false);

   const handleLogout = () => {
      logout();
      onNavigate('home');
   };

   const NavItem = ({ view, icon: Icon, label }: { view: AdminView; icon: any; label: string }) => (
      <button
         onClick={() => {
            setActiveView(view);
            setSidebarOpen(false);
         }}
         className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium mb-1 ${activeView === view
               ? 'bg-school-secondary text-white shadow-md'
               : 'text-gray-600 hover:bg-gray-100 hover:text-school-secondary'
            }`}
      >
         <Icon size={20} />
         <span>{label}</span>
      </button>
   );

   // --- SUB-VIEWS ---

   const DashboardView = () => (
      <div className="space-y-6 animate-fade-in">
         {/* Header Banner */}
         <div className="bg-school-secondary rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12"></div>
            <div className="relative z-10">
               <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
               <p className="text-white/70">Kelola seluruh data sekolah dalam satu pintu.</p>
            </div>
         </div>

         {/* Stats Grid */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 border-l-4 border-school-primary flex items-center gap-4">
               <div className="p-4 bg-red-50 rounded-full text-school-primary">
                  <GraduationCap size={28} />
               </div>
               <div>
                  <p className="text-gray-500 text-sm font-bold uppercase">Total Siswa</p>
                  <p className="text-3xl font-bold text-gray-800">850</p>
               </div>
            </Card>
            <Card className="p-6 border-l-4 border-school-blue flex items-center gap-4">
               <div className="p-4 bg-blue-50 rounded-full text-school-blue">
                  <Briefcase size={28} />
               </div>
               <div>
                  <p className="text-gray-500 text-sm font-bold uppercase">Guru & Staff</p>
                  <p className="text-3xl font-bold text-gray-800">{STAFF_DATA.length}</p>
               </div>
            </Card>
            <Card className="p-6 border-l-4 border-school-green flex items-center gap-4">
               <div className="p-4 bg-green-50 rounded-full text-school-green">
                  <Newspaper size={28} />
               </div>
               <div>
                  <p className="text-gray-500 text-sm font-bold uppercase">Artikel</p>
                  <p className="text-3xl font-bold text-gray-800">{NEWS_DATA.length}</p>
               </div>
            </Card>
            <Card className="p-6 border-l-4 border-school-accent flex items-center gap-4">
               <div className="p-4 bg-yellow-50 rounded-full text-yellow-600">
                  <ImageIcon size={28} />
               </div>
               <div>
                  <p className="text-gray-500 text-sm font-bold uppercase">Galeri</p>
                  <p className="text-3xl font-bold text-gray-800">{GALLERY_DATA.length}</p>
               </div>
            </Card>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
               <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Settings size={20} className="text-school-secondary" /> Log Aktivitas Admin
               </h3>
               <div className="space-y-4">
                  {[
                     { user: "Admin 1", action: "Menambahkan berita baru", time: "2 menit lalu" },
                     { user: "Admin 1", action: "Mengupdate data guru", time: "1 jam lalu" },
                     { user: "Admin 2", action: "Menghapus foto galeri", time: "3 jam lalu" },
                     { user: "Admin 1", action: "Login ke sistem", time: "4 jam lalu" },
                  ].map((log, idx) => (
                     <div key={idx} className="flex items-start gap-3 text-sm pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 text-xs">
                           {log.user.split(' ')[1]}
                        </div>
                        <div>
                           <p className="font-medium text-gray-800">{log.action}</p>
                           <p className="text-xs text-gray-400">{log.time} • oleh {log.user}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </Card>

            <Card className="p-6">
               <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <DollarSign size={20} className="text-green-600" /> Ringkasan Keuangan
               </h3>
               <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg mb-4">
                  <div>
                     <p className="text-xs text-green-700 font-bold uppercase">Pemasukan Bulan Ini</p>
                     <p className="text-2xl font-bold text-green-800">Rp 150.000.000</p>
                  </div>
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-green-600 shadow-sm">
                     <DollarSign size={20} />
                  </div>
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-500">SPP Terbayar</span>
                     <span className="font-bold text-gray-800">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                     <div className="bg-school-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
               </div>
            </Card>
         </div>
      </div>
   );

   const UsersView = () => {
      const [userType, setUserType] = useState<'student' | 'teacher'>('student');

      return (
         <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
               <h2 className="text-2xl font-bold text-gray-800">Manajemen Pengguna</h2>
               <button className="bg-school-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm hover:bg-red-700 transition">
                  <Plus size={16} /> Tambah {userType === 'student' ? 'Siswa' : 'Guru'}
               </button>
            </div>

            <div className="flex gap-4 border-b border-gray-200">
               <button
                  onClick={() => setUserType('student')}
                  className={`pb-3 px-2 text-sm font-bold border-b-2 transition ${userType === 'student' ? 'border-school-primary text-school-primary' : 'border-transparent text-gray-500'}`}
               >
                  Data Siswa
               </button>
               <button
                  onClick={() => setUserType('teacher')}
                  className={`pb-3 px-2 text-sm font-bold border-b-2 transition ${userType === 'teacher' ? 'border-school-primary text-school-primary' : 'border-transparent text-gray-500'}`}
               >
                  Data Guru
               </button>
            </div>

            <Card className="overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                     <thead className="bg-gray-50">
                        <tr>
                           <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Nama Lengkap</th>
                           <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">{userType === 'student' ? 'NIS' : 'NIP'}</th>
                           <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">{userType === 'student' ? 'Kelas' : 'Jabatan'}</th>
                           <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase">Aksi</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-200 bg-white">
                        {userType === 'student' ? (
                           STUDENT_LIST_DATA.map((s) => (
                              <tr key={s.id} className="hover:bg-gray-50">
                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">{s.name}</td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{s.nis}</td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">XII MIPA 1</td>
                                 <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center gap-2">
                                    <button className="text-blue-600 hover:text-blue-800"><Edit size={16} /></button>
                                    <button className="text-red-600 hover:text-red-800"><Trash2 size={16} /></button>
                                 </td>
                              </tr>
                           ))
                        ) : (
                           STAFF_DATA.slice(0, 10).map((t) => (
                              <tr key={t.id} className="hover:bg-gray-50">
                                 <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                       <img src={t.image} alt="" className="w-8 h-8 rounded-full object-cover" />
                                       <span className="text-sm font-bold text-gray-800">{t.name}</span>
                                    </div>
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.nik || '-'}</td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.role}</td>
                                 <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center gap-2">
                                    <button className="text-blue-600 hover:text-blue-800"><Edit size={16} /></button>
                                    <button className="text-red-600 hover:text-red-800"><Trash2 size={16} /></button>
                                 </td>
                              </tr>
                           ))
                        )}
                     </tbody>
                  </table>
               </div>
            </Card>
         </div>
      );
   };

   const NewsView = () => (
      <div className="space-y-6 animate-fade-in">
         <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Manajemen Artikel</h2>
            <button className="bg-school-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm hover:bg-red-700 transition">
               <Plus size={16} /> Tulis Artikel
            </button>
         </div>

         <div className="grid grid-cols-1 gap-4">
            {NEWS_DATA.map((news) => (
               <Card key={news.id} className="p-4 flex flex-col md:flex-row gap-4 items-center">
                  <img src={news.image} alt={news.title} className="w-24 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                     <span className={`${news.tagColor} text-xs px-2 py-1 rounded font-bold uppercase mb-1 inline-block`}>{news.category}</span>
                     <h3 className="font-bold text-gray-800">{news.title}</h3>
                     <p className="text-xs text-gray-500 mt-1">{news.date} • Oleh {news.author}</p>
                  </div>
                  <div className="flex gap-2">
                     <button className="p-2 text-blue-600 hover:bg-blue-50 rounded"><Edit size={18} /></button>
                     <button className="p-2 text-red-600 hover:bg-red-50 rounded"><Trash2 size={18} /></button>
                  </div>
               </Card>
            ))}
         </div>
      </div>
   );

   const GalleryView = () => (
      <div className="space-y-6 animate-fade-in">
         <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Manajemen Galeri</h2>
            <button className="bg-school-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm hover:bg-red-700 transition">
               <UploadCloud size={16} /> Upload Foto/Video
            </button>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_DATA.map((item) => (
               <div key={item.id} className="relative group rounded-lg overflow-hidden shadow-sm aspect-square bg-gray-100">
                  <img src={item.src} className="w-full h-full object-cover" alt={item.title} />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                     <button className="text-white bg-red-600 p-2 rounded-full hover:bg-red-700"><Trash2 size={16} /></button>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
                     <p className="text-white text-xs font-bold truncate">{item.title}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );

   const SettingsView = () => (
      <div className="space-y-6 animate-fade-in">
         <h2 className="text-2xl font-bold text-gray-800">Pengaturan Sekolah</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
               <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Identitas Sekolah</h3>
               <form className="space-y-4">
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Nama Sekolah</label>
                     <input type="text" defaultValue="SMA BPS&K 1 Jakarta" className="w-full p-2 border rounded focus:ring-2 focus:ring-school-primary outline-none" />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">NPSN</label>
                     <input type="text" defaultValue={SCHOOL_INFO.npsn} className="w-full p-2 border rounded focus:ring-2 focus:ring-school-primary outline-none" />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Alamat</label>
                     <textarea defaultValue={SCHOOL_INFO.address} className="w-full p-2 border rounded focus:ring-2 focus:ring-school-primary outline-none"></textarea>
                  </div>
                  <button type="button" className="bg-school-primary text-white px-4 py-2 rounded font-bold text-sm w-full hover:bg-red-700 transition">
                     Simpan Perubahan
                  </button>
               </form>
            </Card>

            <Card className="p-6">
               <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Kontak & Media Sosial</h3>
               <form className="space-y-4">
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                     <input type="email" defaultValue={SCHOOL_INFO.email} className="w-full p-2 border rounded focus:ring-2 focus:ring-school-primary outline-none" />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Nomor Telepon</label>
                     <input type="text" defaultValue={SCHOOL_INFO.phone} className="w-full p-2 border rounded focus:ring-2 focus:ring-school-primary outline-none" />
                  </div>
                  <button type="button" className="bg-school-secondary text-white px-4 py-2 rounded font-bold text-sm w-full hover:bg-gray-700 transition">
                     Update Kontak
                  </button>
               </form>
            </Card>
         </div>
      </div>
   );

   return (
      <div className="min-h-screen bg-gray-100 flex font-sans text-gray-800">

         {/* SIDEBAR */}
         <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="h-full flex flex-col">
               {/* Logo Area */}
               <div className="h-16 flex items-center gap-2 px-6 border-b border-gray-100 bg-school-secondary text-white">
                  <UserCog size={28} />
                  <div className="flex flex-col">
                     <span className="font-bold text-base leading-none">PANEL ADMIN</span>
                     <span className="text-[10px] opacity-70">SMA BPS&K 1</span>
                  </div>
                  <button className="ml-auto lg:hidden text-gray-400" onClick={() => setSidebarOpen(false)}><X size={24} /></button>
               </div>

               {/* Nav Links */}
               <div className="flex-1 overflow-y-auto p-4 space-y-1">
                  <NavItem view="dashboard" icon={LayoutDashboard} label="Dashboard" />
                  <NavItem view="users" icon={Users} label="Pengguna" />
                  <NavItem view="news" icon={Newspaper} label="Berita/Artikel" />
                  <NavItem view="gallery" icon={ImageIcon} label="Galeri" />
                  <NavItem view="finance" icon={DollarSign} label="Keuangan" />
                  <NavItem view="settings" icon={Settings} label="Pengaturan" />
               </div>

               {/* User Profile Footer */}
               <div className="p-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">
                        <UserCog size={20} />
                     </div>
                     <div className="overflow-hidden">
                        <p className="text-sm font-bold text-gray-900 truncate">Administrator</p>
                        <p className="text-xs text-gray-500">Super Admin</p>
                     </div>
                  </div>
                  <button
                     onClick={handleLogout}
                     className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2 rounded-lg text-sm font-bold hover:bg-red-100 transition"
                  >
                     <LogOut size={16} /> Keluar
                  </button>
               </div>
            </div>
         </aside>

         {/* OVERLAY for Mobile */}
         {isSidebarOpen && (
            <div
               className="fixed inset-0 bg-black/50 z-40 lg:hidden"
               onClick={() => setSidebarOpen(false)}
            ></div>
         )}

         {/* MAIN CONTENT AREA */}
         <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
            {/* Top Header */}
            <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-30">
               <div className="flex items-center gap-4">
                  <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                     <Menu size={24} />
                  </button>
                  <h2 className="text-lg font-bold text-gray-700 capitalize hidden sm:block">
                     {activeView === 'dashboard' ? 'Overview' : activeView}
                  </h2>
               </div>

               <div className="flex items-center gap-4">
                  <div className="relative hidden md:block">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                     <input
                        type="text"
                        placeholder="Cari data..."
                        className="pl-9 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-school-secondary w-64"
                     />
                  </div>
                  <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
                     <Bell size={20} />
                     <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
               </div>
            </header>

            {/* Dynamic Page Content */}
            <div className="p-4 md:p-8 flex-1 overflow-x-hidden">
               {activeView === 'dashboard' && <DashboardView />}
               {activeView === 'users' && <UsersView />}
               {activeView === 'news' && <NewsView />}
               {activeView === 'gallery' && <GalleryView />}
               {activeView === 'finance' && <DashboardView />} {/* Reusing dashboard stats for finance simple view */}
               {activeView === 'settings' && <SettingsView />}
            </div>
         </main>

      </div>
   );
};

export default AdminPortal;
