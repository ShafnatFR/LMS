import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Page } from '../../types';
import { 
  LayoutDashboard, CalendarRange, GraduationCap, ClipboardList, BookOpen, LogOut, 
  Bell, Search, Menu, X, User, Clock, CheckCircle, AlertCircle, TrendingUp, Wallet, 
  FileText, Download, Upload, Calendar
} from 'lucide-react';
import Card from '../../components/Card';
import { 
  STUDENT_SCHEDULE, STUDENT_GRADES, ATTENDANCE_STATS, STUDENT_ASSIGNMENTS, 
  STUDENT_MATERIALS, STUDENT_FINANCE, CALENDAR_EVENTS 
} from '../../data';

interface StudentPortalProps {
  onNavigate: (page: Page) => void;
}

type StudentView = 'dashboard' | 'jadwal' | 'nilai' | 'presensi' | 'materi' | 'keuangan';

const StudentPortal: React.FC<StudentPortalProps> = ({ onNavigate }) => {
  const { user, logout } = useAuth();
  const [activeView, setActiveView] = useState<StudentView>('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [elearningTab, setElearningTab] = useState<'materi' | 'tugas'>('materi');

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  const NavItem = ({ view, icon: Icon, label }: { view: StudentView; icon: any; label: string }) => (
    <button
      onClick={() => {
        setActiveView(view);
        setSidebarOpen(false);
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium mb-1 ${
        activeView === view 
          ? 'bg-school-primary text-white shadow-md' 
          : 'text-gray-600 hover:bg-red-50 hover:text-school-primary'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  // --- SUB-VIEWS ---

  const DashboardView = () => (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-school-primary to-red-800 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 skew-x-12"></div>
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Halo, {user?.name}! 👋</h1>
          <p className="text-white/80">Semangat belajar hari ini! Jangan lupa cek jadwal pelajaranmu.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 border-l-4 border-school-primary flex items-center gap-4">
           <div className="p-3 bg-red-50 rounded-full text-school-primary">
             <TrendingUp size={24} />
           </div>
           <div>
             <p className="text-sm text-gray-500 font-medium">IPK Semester</p>
             <p className="text-2xl font-bold text-gray-800">3.85</p>
           </div>
        </Card>
        <Card className="p-4 border-l-4 border-school-blue flex items-center gap-4">
           <div className="p-3 bg-blue-50 rounded-full text-school-blue">
             <CheckCircle size={24} />
           </div>
           <div>
             <p className="text-sm text-gray-500 font-medium">Kehadiran</p>
             <p className="text-2xl font-bold text-gray-800">95%</p>
           </div>
        </Card>
        <Card className="p-4 border-l-4 border-school-accent flex items-center gap-4">
           <div className="p-3 bg-yellow-50 rounded-full text-yellow-600">
             <AlertCircle size={24} />
           </div>
           <div>
             <p className="text-sm text-gray-500 font-medium">Tugas Pending</p>
             <p className="text-2xl font-bold text-gray-800">{STUDENT_ASSIGNMENTS.filter(a => a.status === 'pending').length}</p>
           </div>
        </Card>
        <Card className="p-4 border-l-4 border-school-green flex items-center gap-4">
           <div className="p-3 bg-green-50 rounded-full text-school-green">
             <BookOpen size={24} />
           </div>
           <div>
             <p className="text-sm text-gray-500 font-medium">Total Mapel</p>
             <p className="text-2xl font-bold text-gray-800">14</p>
           </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
               <h3 className="font-bold text-gray-800 flex items-center gap-2">
                 <Clock size={18} className="text-school-primary" /> Jadwal Hari Ini
               </h3>
               <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">Senin</span>
            </div>
            <div className="divide-y divide-gray-100">
               {STUDENT_SCHEDULE[0].subjects.map((sub, idx) => (
                 <div key={idx} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition">
                    <div className="w-16 text-center text-xs font-bold text-gray-500">
                      {sub.time.split(' - ')[0]}
                      <span className="block text-gray-300 mx-auto w-px h-2 bg-gray-300 my-1"></span>
                      {sub.time.split(' - ')[1]}
                    </div>
                    <div className="flex-1">
                       <h4 className="font-bold text-gray-800">{sub.subject}</h4>
                       <p className="text-xs text-gray-500">{sub.teacher}</p>
                    </div>
                    <div className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">
                      {sub.room}
                    </div>
                 </div>
               ))}
            </div>
          </Card>
        </div>

        {/* Calendar / Agenda Widget */}
        <div>
          <Card className="h-full">
            <div className="p-4 border-b border-gray-100">
               <h3 className="font-bold text-gray-800 flex items-center gap-2">
                 <Calendar size={18} className="text-school-accent" /> Kalender Akademik
               </h3>
            </div>
            <div className="p-4 space-y-4">
               {CALENDAR_EVENTS.slice(0, 3).map((event, idx) => (
                  <div key={idx} className="flex gap-3 items-start border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                     <div className="bg-gray-100 text-gray-700 rounded p-2 text-center min-w-[50px]">
                        <span className="block text-sm font-bold">{event.date}</span>
                        <span className="block text-[10px] uppercase font-bold">{event.month}</span>
                     </div>
                     <div>
                        <h4 className="text-sm font-bold text-gray-800 leading-tight">{event.title}</h4>
                        <span className="text-xs text-gray-500 mt-1 block">{event.category}</span>
                     </div>
                  </div>
               ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  const ScheduleView = () => (
    <div className="space-y-6 animate-fade-in">
       <div className="flex justify-between items-center">
         <h2 className="text-2xl font-bold text-gray-800">Jadwal Pelajaran</h2>
         <button className="bg-school-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm flex items-center gap-2">
           <Download size={16} /> Download PDF
         </button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {STUDENT_SCHEDULE.map((dayItem, idx) => (
             <Card key={idx} className="overflow-hidden border-t-4 border-t-school-blue">
                <div className="bg-gray-50 p-3 border-b border-gray-100">
                   <h3 className="font-bold text-center text-gray-800">{dayItem.day}</h3>
                </div>
                <div className="divide-y divide-gray-100">
                   {dayItem.subjects.map((sub, sIdx) => (
                     <div key={sIdx} className="p-3 text-sm">
                        <div className="flex justify-between items-start mb-1">
                           <span className="font-bold text-gray-700">{sub.subject}</span>
                           <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono">{sub.room}</span>
                        </div>
                        <div className="flex justify-between items-end text-xs text-gray-500">
                           <span>{sub.teacher}</span>
                           <span>{sub.time}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </Card>
          ))}
       </div>
    </div>
  );

  const GradesView = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800">Kartu Hasil Studi (KHS)</h2>
      
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
           <thead className="bg-gray-50">
             <tr>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mata Pelajaran</th>
               <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">KKM</th>
               <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Pengetahuan</th>
               <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Keterampilan</th>
               <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Predikat</th>
             </tr>
           </thead>
           <tbody className="bg-white divide-y divide-gray-200">
             {STUDENT_GRADES.map((grade, idx) => (
               <tr key={idx} className="hover:bg-gray-50">
                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{grade.subject}</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{grade.kkm}</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-bold">{grade.knowledge}</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-bold">{grade.skill}</td>
                 <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      grade.grade === 'A' ? 'bg-green-100 text-green-800' : 
                      grade.grade === 'B+' || grade.grade === 'B' ? 'bg-blue-100 text-blue-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {grade.grade}
                    </span>
                 </td>
               </tr>
             ))}
           </tbody>
        </table>
      </div>
    </div>
  );

  const AttendanceView = () => (
     <div className="space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800">Rekap Presensi</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { label: "Hadir", val: ATTENDANCE_STATS.present, color: "text-green-600", bg: "bg-green-50" },
             { label: "Sakit", val: ATTENDANCE_STATS.sick, color: "text-blue-600", bg: "bg-blue-50" },
             { label: "Izin", val: ATTENDANCE_STATS.permission, color: "text-yellow-600", bg: "bg-yellow-50" },
             { label: "Alpha", val: ATTENDANCE_STATS.alpha, color: "text-red-600", bg: "bg-red-50" },
           ].map((stat, idx) => (
             <Card key={idx} className="p-6 text-center">
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.val}</div>
                <div className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full inline-block ${stat.bg} ${stat.color}`}>{stat.label}</div>
             </Card>
           ))}
        </div>

        <Card className="p-6">
           <h3 className="font-bold text-gray-800 mb-4">Riwayat Kehadiran (Bulan Ini)</h3>
           <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                 <div key={i} className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-xs font-bold text-gray-600">
                          <span>JAN</span>
                          <span>{27 - i}</span>
                       </div>
                       <div>
                          <p className="font-bold text-gray-800">Senin, {27-i} Januari 2026</p>
                          <p className="text-xs text-gray-500">07:00 - 15:00 WIB</p>
                       </div>
                    </div>
                    <span className="text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-full">Hadir</span>
                 </div>
              ))}
           </div>
        </Card>
     </div>
  );

  const ELearningView = () => (
    <div className="space-y-6 animate-fade-in">
       <div className="flex justify-between items-center">
         <h2 className="text-2xl font-bold text-gray-800">E-Learning</h2>
       </div>

       {/* Tabs */}
       <div className="flex bg-white rounded-lg p-1 w-fit shadow-sm border border-gray-200">
          <button 
             onClick={() => setElearningTab('materi')}
             className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${elearningTab === 'materi' ? 'bg-school-primary text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            Bahan Ajar
          </button>
          <button 
             onClick={() => setElearningTab('tugas')}
             className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${elearningTab === 'tugas' ? 'bg-school-primary text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            Tugas & PR
          </button>
       </div>

       {elearningTab === 'materi' ? (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {STUDENT_MATERIALS.map((item) => (
             <Card key={item.id} className="p-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-school-blue bg-blue-50 px-2 py-1 rounded">{item.subject}</span>
                  <h3 className="font-bold text-gray-900 mt-2 mb-1">{item.title}</h3>
                  <div className="text-xs text-gray-500 flex items-center gap-2 mb-4">
                    <Clock size={12}/> {item.date} • {item.type.toUpperCase()}
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 w-full py-2 border border-gray-200 rounded-lg text-sm font-bold hover:bg-gray-50 transition text-gray-700">
                  <Download size={16} /> Unduh Materi
                </button>
             </Card>
           ))}
         </div>
       ) : (
         <div className="grid grid-cols-1 gap-4">
           {STUDENT_ASSIGNMENTS.map((item) => (
             <Card key={item.id} className="p-5 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-school-primary bg-red-50 px-2 py-1 rounded">{item.subject}</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${
                      item.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 
                      item.status === 'submitted' ? 'bg-blue-100 text-blue-700' : 
                      'bg-green-100 text-green-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Deadline: {item.deadline}</p>
                </div>
                
                {item.status === 'graded' ? (
                  <div className="text-center bg-gray-50 p-3 rounded-lg min-w-[100px]">
                    <span className="block text-xs text-gray-500">Nilai</span>
                    <span className="block text-2xl font-bold text-school-green">{item.grade}</span>
                  </div>
                ) : (
                  <button className="flex items-center gap-2 px-4 py-2 bg-school-primary text-white rounded-lg text-sm font-bold hover:bg-red-700 transition shadow-sm">
                    <Upload size={16} /> {item.status === 'pending' ? 'Kirim Tugas' : 'Edit Tugas'}
                  </button>
                )}
             </Card>
           ))}
         </div>
       )}
    </div>
  );

  const FinanceView = () => (
    <div className="space-y-6 animate-fade-in">
       <h2 className="text-2xl font-bold text-gray-800">Status Keuangan</h2>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-school-blue to-blue-600 text-white">
             <div className="flex items-center justify-between mb-4">
                <Wallet size={32} className="opacity-80"/>
                <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">Total Tagihan</span>
             </div>
             <div className="text-3xl font-bold mb-1">Rp 1.950.000</div>
             <div className="text-white/80 text-sm">Sisa tunggakan</div>
          </Card>
       </div>

       <Card className="overflow-hidden">
          <div className="p-4 border-b border-gray-100">
             <h3 className="font-bold text-gray-800">Riwayat Pembayaran SPP</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
               <thead className="bg-gray-50">
                 <tr>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bulan</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jumlah</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal Bayar</th>
                   <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
                 </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                 {STUDENT_FINANCE.map((record, idx) => (
                   <tr key={idx}>
                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.month}</td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rp {record.amount.toLocaleString()}</td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date || '-'}</td>
                     <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                          record.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {record.status === 'paid' ? 'LUNAS' : 'BELUM BAYAR'}
                        </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
            </table>
          </div>
       </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-gray-800">
      
      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         <div className="h-full flex flex-col">
            {/* Logo Area */}
            <div className="h-16 flex items-center gap-2 px-6 border-b border-gray-100">
               <GraduationCap className="text-school-primary" size={28} />
               <span className="font-bold text-lg text-gray-900 tracking-tight">SIAKAD SISWA</span>
               <button className="ml-auto lg:hidden text-gray-400" onClick={() => setSidebarOpen(false)}><X size={24}/></button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
               <NavItem view="dashboard" icon={LayoutDashboard} label="Dashboard" />
               <NavItem view="jadwal" icon={CalendarRange} label="Jadwal Pelajaran" />
               <NavItem view="nilai" icon={ClipboardList} label="Nilai Akademik" />
               <NavItem view="presensi" icon={CheckCircle} label="Presensi" />
               <NavItem view="materi" icon={BookOpen} label="E-Learning" />
               <NavItem view="keuangan" icon={Wallet} label="Keuangan" />
            </div>

            {/* User Profile Footer */}
            <div className="p-4 border-t border-gray-100">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                     <User size={20} />
                  </div>
                  <div className="overflow-hidden">
                     <p className="text-sm font-bold text-gray-900 truncate">{user?.name}</p>
                     <p className="text-xs text-gray-500">Siswa XII MIPA 1</p>
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
                 {activeView === 'dashboard' ? 'Dashboard' : activeView}
               </h2>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Cari..." 
                    className="pl-9 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-school-primary w-64"
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
            {activeView === 'jadwal' && <ScheduleView />}
            {activeView === 'nilai' && <GradesView />}
            {activeView === 'presensi' && <AttendanceView />}
            {activeView === 'materi' && <ELearningView />}
            {activeView === 'keuangan' && <FinanceView />}
         </div>
      </main>

    </div>
  );
};

export default StudentPortal;