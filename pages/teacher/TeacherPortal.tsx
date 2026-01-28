
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Page } from '../../types';
import { 
  LayoutDashboard, CalendarRange, GraduationCap, ClipboardCheck, BookOpen, LogOut, 
  Bell, Search, Menu, X, User, Clock, Users, FilePlus, Upload, Save, CheckCircle, 
  AlertTriangle, XCircle, Award, ChevronRight, Download, FileText, FileSpreadsheet, 
  Table as TableIcon, Plus, Link as LinkIcon, Edit, Trash2
} from 'lucide-react';
import Card from '../../components/Card';
import { TEACHER_SCHEDULE, CLASS_LIST_DATA, STUDENT_LIST_DATA } from '../../data';

interface TeacherPortalProps {
  onNavigate: (page: Page) => void;
}

type TeacherView = 'dashboard' | 'nilai' | 'presensi' | 'jadwal' | 'elearning' | 'walikelas';

const TeacherPortal: React.FC<TeacherPortalProps> = ({ onNavigate }) => {
  const { user, logout } = useAuth();
  const [activeView, setActiveView] = useState<TeacherView>('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  // State for E-Learning Tabs
  const [elearningTab, setElearningTab] = useState<'materials' | 'assignments'>('materials');

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  const NavItem = ({ view, icon: Icon, label }: { view: TeacherView; icon: any; label: string }) => (
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
      {activeView === view && <ChevronRight size={16} className="ml-auto opacity-50" />}
    </button>
  );

  // --- SUB-VIEWS ---

  const DashboardView = () => (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-school-primary to-red-800 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 skew-x-12"></div>
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Selamat Datang, {user?.name}</h1>
          <p className="text-white/80">Semangat mencerdaskan bangsa! Jangan lupa isi presensi kelas hari ini.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 border-l-4 border-school-blue flex items-center gap-4">
           <div className="p-3 bg-blue-50 rounded-full text-school-blue">
             <Users size={24} />
           </div>
           <div>
             <p className="text-sm text-gray-500 font-medium">Total Kelas</p>
             <p className="text-2xl font-bold text-gray-800">5</p>
           </div>
        </Card>
        <Card className="p-4 border-l-4 border-school-green flex items-center gap-4">
           <div className="p-3 bg-green-50 rounded-full text-school-green">
             <Clock size={24} />
           </div>
           <div>
             <p className="text-sm text-gray-500 font-medium">Jam Mengajar</p>
             <p className="text-2xl font-bold text-gray-800">24 Jam</p>
           </div>
        </Card>
        <Card className="p-4 border-l-4 border-school-accent flex items-center gap-4">
           <div className="p-3 bg-yellow-50 rounded-full text-yellow-600">
             <ClipboardCheck size={24} />
           </div>
           <div>
             <p className="text-sm text-gray-500 font-medium">Presensi Hari Ini</p>
             <p className="text-2xl font-bold text-gray-800">Belum</p>
           </div>
        </Card>
        <Card className="p-4 border-l-4 border-school-primary flex items-center gap-4">
           <div className="p-3 bg-red-50 rounded-full text-school-primary">
             <GraduationCap size={24} />
           </div>
           <div>
             <p className="text-sm text-gray-500 font-medium">Wali Kelas</p>
             <p className="text-lg font-bold text-gray-800">XII MIPA 1</p>
           </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="h-full p-6">
           <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
             <Clock className="text-school-primary" size={20}/> Jadwal Mengajar Hari Ini
           </h3>
           <div className="space-y-3">
             {TEACHER_SCHEDULE[0].classes.map((cls, idx) => (
               <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-20 text-center border-r border-gray-200 pr-3 mr-3">
                     <span className="block text-sm font-bold text-gray-800">{cls.time.split(' - ')[0]}</span>
                     <span className="block text-xs text-gray-500">{cls.time.split(' - ')[1]}</span>
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-800">{cls.className}</h4>
                     <p className="text-xs text-gray-500">{cls.subject} - {cls.room}</p>
                  </div>
                  <button onClick={() => setActiveView('presensi')} className="ml-auto text-xs bg-school-primary text-white px-3 py-1 rounded font-bold hover:bg-red-700 transition">
                     Presensi
                  </button>
               </div>
             ))}
           </div>
        </Card>

        <Card className="h-full p-6">
           <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
             <AlertTriangle className="text-school-accent" size={20}/> Pengumuman Guru
           </h3>
           <ul className="space-y-3">
             <li className="p-3 bg-yellow-50 rounded-lg border border-yellow-100 text-sm text-gray-700">
               <span className="font-bold block text-yellow-800 mb-1">Rapat Dewan Guru</span>
               Hari Rabu, 14:00 WIB di Ruang Guru. Pembahasan Persiapan UAS.
             </li>
             <li className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-sm text-gray-700">
               <span className="font-bold block text-blue-800 mb-1">Input Nilai UTS</span>
               Batas akhir input nilai UTS adalah tanggal 25 Oktober 2024.
             </li>
           </ul>
        </Card>
      </div>
    </div>
  );

  const GradesInputView = () => {
    const [selectedClass, setSelectedClass] = useState(CLASS_LIST_DATA[0].id);
    const [inputMethod, setInputMethod] = useState<'manual' | 'sheet'>('manual');
    const [grades, setGrades] = useState(STUDENT_LIST_DATA);
    
    // State for Sheet URLs
    const [classSheets, setClassSheets] = useState<Record<string, string>>({
       "1": "https://docs.google.com/spreadsheets/d/1BxiMvs0XRA5nFMdKvBdBZjGMUUqptlbs74OgvE2upms/edit?rm=minimal"
    });
    const [isEditingSheetUrl, setIsEditingSheetUrl] = useState(false);
    const [tempUrl, setTempUrl] = useState('');

    const currentSheetUrl = classSheets[selectedClass];

    // Reset editing state when class changes
    useEffect(() => {
        setIsEditingSheetUrl(false);
        setTempUrl('');
    }, [selectedClass]);

    const handleGradeChange = (id: string, field: 'uh1' | 'uts' | 'uas', value: number) => {
       const newGrades = grades.map(student => {
         if (student.id === id) {
           const updated = { ...student, [field]: value };
           const uh = updated.uh1 || 0;
           const uts = updated.uts || 0;
           const uas = updated.uas || 0;
           updated.finalScore = Math.round((uh + uts + uas) / 3);
           return updated;
         }
         return student;
       });
       setGrades(newGrades);
    };

    const handleSaveSheetUrl = () => {
        if (tempUrl.trim()) {
            setClassSheets(prev => ({...prev, [selectedClass]: tempUrl.trim()}));
            setIsEditingSheetUrl(false);
        }
    };

    const handleDeleteSheetUrl = () => {
        const newSheets = {...classSheets};
        delete newSheets[selectedClass];
        setClassSheets(newSheets);
        setIsEditingSheetUrl(false);
        setTempUrl('');
    };

    return (
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-800">Input Nilai (E-Rapor)</h2>
            {/* Input Method Toggle */}
            <div className="bg-white border border-gray-200 p-1 rounded-lg flex shadow-sm">
                <button 
                  onClick={() => setInputMethod('manual')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${inputMethod === 'manual' ? 'bg-school-primary text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  <TableIcon size={16} /> Input Manual
                </button>
                <button 
                  onClick={() => setInputMethod('sheet')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${inputMethod === 'sheet' ? 'bg-green-600 text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  <FileSpreadsheet size={16} /> Google Sheets
                </button>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <select 
            className="p-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-school-primary focus:outline-none w-full md:w-64"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {CLASS_LIST_DATA.map(cls => (
              <option key={cls.id} value={cls.id}>{cls.name} - {cls.subject}</option>
            ))}
          </select>
          {inputMethod === 'manual' && (
             <div className="ml-auto">
                <button className="bg-school-green text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-green-700 transition shadow-sm w-full md:w-auto justify-center">
                  <Save size={18} /> Simpan Nilai
                </button>
             </div>
          )}
        </div>

        {inputMethod === 'manual' ? (
            <Card className="overflow-hidden">
               <div className="overflow-x-auto">
                 <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                       <tr>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">No</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Nama Siswa</th>
                          <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase">UH 1</th>
                          <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase">UTS</th>
                          <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase">UAS</th>
                          <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase">Nilai Akhir</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                       {grades.map((student, idx) => (
                         <tr key={student.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{idx + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                               <div className="text-sm font-bold text-gray-900">{student.name}</div>
                               <div className="text-xs text-gray-500">{student.nis}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                               <input 
                                 type="number" 
                                 className="w-16 p-1 border rounded text-center focus:ring-2 focus:ring-blue-500 outline-none"
                                 value={student.uh1}
                                 onChange={(e) => handleGradeChange(student.id, 'uh1', parseInt(e.target.value) || 0)}
                               />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                               <input 
                                 type="number" 
                                 className="w-16 p-1 border rounded text-center focus:ring-2 focus:ring-blue-500 outline-none"
                                 value={student.uts}
                                 onChange={(e) => handleGradeChange(student.id, 'uts', parseInt(e.target.value) || 0)}
                               />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                               <input 
                                 type="number" 
                                 className="w-16 p-1 border rounded text-center focus:ring-2 focus:ring-blue-500 outline-none"
                                 value={student.uas}
                                 onChange={(e) => handleGradeChange(student.id, 'uas', parseInt(e.target.value) || 0)}
                               />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                               <span className={`font-bold ${
                                 (student.finalScore || 0) >= 75 ? 'text-green-600' : 'text-red-600'
                               }`}>
                                 {student.finalScore}
                               </span>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
               </div>
            </Card>
        ) : (
            <Card className="min-h-[600px] h-full overflow-hidden p-0 relative border-2 border-green-600/20 flex flex-col">
               {currentSheetUrl && !isEditingSheetUrl ? (
                 <>
                   <iframe 
                      src={currentSheetUrl}
                      className="w-full flex-grow border-0"
                      title="Input Nilai Spreadsheet"
                      loading="lazy"
                   ></iframe>
                   <div className="absolute top-4 right-4 z-10 flex gap-2">
                       <button 
                           onClick={() => { setTempUrl(currentSheetUrl); setIsEditingSheetUrl(true); }}
                           className="bg-white/90 p-2 rounded-full hover:bg-white text-gray-600 hover:text-school-primary shadow-sm border border-gray-200 transition"
                           title="Edit URL"
                       >
                           <Edit size={18} />
                       </button>
                       <button 
                           onClick={() => { if(window.confirm('Hapus link spreadsheet untuk kelas ini?')) handleDeleteSheetUrl(); }}
                           className="bg-white/90 p-2 rounded-full hover:bg-white text-gray-600 hover:text-red-600 shadow-sm border border-gray-200 transition"
                           title="Hapus URL"
                       >
                           <Trash2 size={18} />
                       </button>
                   </div>
                   <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-lg shadow-lg text-xs text-gray-600 border border-gray-200 pointer-events-none">
                      <span className="font-bold flex items-center gap-1"><CheckCircle size={12} className="text-green-600"/> Auto-saved to Drive</span>
                   </div>
                 </>
               ) : (
                  <div className="flex-grow flex flex-col items-center justify-center p-8 bg-gray-50 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                          <FileSpreadsheet size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {isEditingSheetUrl ? (currentSheetUrl ? "Edit Link Spreadsheet" : "Tambahkan Link Spreadsheet") : "Belum Ada Spreadsheet"}
                      </h3>
                      
                      {isEditingSheetUrl ? (
                          <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-2">
                              <label className="block text-sm font-bold text-gray-700 mb-2 text-left">URL Google Sheets</label>
                              <div className="relative mb-4">
                                  <LinkIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                                  <input 
                                      type="text"
                                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm"
                                      placeholder="https://docs.google.com/spreadsheets/d/..."
                                      value={tempUrl}
                                      onChange={(e) => setTempUrl(e.target.value)}
                                  />
                              </div>
                              <div className="flex gap-3 justify-end">
                                  <button 
                                      onClick={() => setIsEditingSheetUrl(false)}
                                      className="px-4 py-2 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-lg transition"
                                  >
                                      Batal
                                  </button>
                                  <button 
                                      onClick={handleSaveSheetUrl}
                                      className="px-4 py-2 text-sm font-bold text-white bg-green-600 hover:bg-green-700 rounded-lg transition shadow-sm"
                                  >
                                      Simpan Link
                                  </button>
                              </div>
                          </div>
                      ) : (
                          <>
                            <p className="text-gray-500 max-w-md mb-6 leading-relaxed">
                                Hubungkan kelas ini dengan Google Sheets agar Anda dapat mengelola nilai secara real-time dan kolaboratif.
                            </p>
                            <button 
                                onClick={() => { setTempUrl(''); setIsEditingSheetUrl(true); }}
                                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg shadow-green-200 transform hover:-translate-y-0.5"
                            >
                                <Plus size={20} /> Tambahkan Link Spreadsheet
                            </button>
                          </>
                      )}
                  </div>
               )}
            </Card>
        )}
      </div>
    );
  };

  const AttendanceView = () => {
     const [selectedClass, setSelectedClass] = useState(CLASS_LIST_DATA[0].id);
     const [attendance, setAttendance] = useState(STUDENT_LIST_DATA);

     const updateStatus = (id: string, status: 'H' | 'S' | 'I' | 'A') => {
        setAttendance(attendance.map(s => s.id === id ? { ...s, attendanceStatus: status } : s));
     };

     return (
        <div className="space-y-6 animate-fade-in">
           <h2 className="text-2xl font-bold text-gray-800">Presensi Kelas</h2>
           
           <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between items-center">
              <div className="flex gap-4 items-center">
                 <select 
                    className="p-2 border border-gray-300 rounded-lg bg-white shadow-sm"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                 >
                    {CLASS_LIST_DATA.map(cls => (
                       <option key={cls.id} value={cls.id}>{cls.name}</option>
                    ))}
                 </select>
                 <span className="text-sm text-gray-500 font-bold bg-gray-100 px-3 py-1 rounded">
                    {new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                 </span>
              </div>
              <button className="bg-school-blue text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-blue-700 transition">
                 Submit Presensi
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {attendance.map((student) => (
                 <div key={student.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                       <p className="font-bold text-gray-800">{student.name}</p>
                       <p className="text-xs text-gray-500">{student.nis}</p>
                    </div>
                    <div className="flex gap-1">
                       {(['H', 'S', 'I', 'A'] as const).map((status) => (
                          <button
                             key={status}
                             onClick={() => updateStatus(student.id, status)}
                             className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center transition-all ${
                                student.attendanceStatus === status 
                                  ? status === 'H' ? 'bg-green-600 text-white' : status === 'S' ? 'bg-blue-500 text-white' : status === 'I' ? 'bg-yellow-500 text-white' : 'bg-red-600 text-white'
                                  : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                             }`}
                          >
                             {status}
                          </button>
                       ))}
                    </div>
                 </div>
              ))}
           </div>
           
           <div className="flex gap-4 text-xs text-gray-500 justify-center mt-4">
              <span className="flex items-center gap-1"><div className="w-3 h-3 bg-green-600 rounded-full"></div> H: Hadir</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded-full"></div> S: Sakit</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 bg-yellow-500 rounded-full"></div> I: Izin</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 bg-red-600 rounded-full"></div> A: Alpha</span>
           </div>
        </div>
     );
  };

  const ScheduleView = () => (
     <div className="space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800">Jadwal Mengajar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {TEACHER_SCHEDULE.map((dayItem, idx) => (
              <Card key={idx} className="overflow-hidden border-t-4 border-t-school-primary">
                 <div className="bg-red-50 p-3 border-b border-gray-100">
                    <h3 className="font-bold text-center text-school-primary">{dayItem.day}</h3>
                 </div>
                 <div className="divide-y divide-gray-100">
                    {dayItem.classes.map((cls, sIdx) => (
                       <div key={sIdx} className="p-3 text-sm">
                          <div className="flex justify-between items-start mb-1">
                             <span className="font-bold text-gray-800">{cls.className}</span>
                             <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono">{cls.room}</span>
                          </div>
                          <div className="text-xs text-gray-500 mb-1">{cls.subject}</div>
                          <div className="text-xs font-bold text-blue-600 flex items-center gap-1">
                             <Clock size={12}/> {cls.time}
                          </div>
                       </div>
                    ))}
                 </div>
              </Card>
           ))}
        </div>
     </div>
  );

  const ELearningView = () => (
     <div className="space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800">E-Learning Guru</h2>
        
        {/* Tabs */}
        <div className="flex bg-white rounded-lg p-1 w-fit shadow-sm border border-gray-200">
           <button 
              onClick={() => setElearningTab('materials')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-bold transition-all ${elearningTab === 'materials' ? 'bg-school-primary text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
           >
              <Upload size={16} /> Bahan Ajar
           </button>
           <button 
              onClick={() => setElearningTab('assignments')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-bold transition-all ${elearningTab === 'assignments' ? 'bg-school-primary text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
           >
              <FilePlus size={16} /> Tugas Baru
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           {/* Main Form Area */}
           <div className="lg:col-span-2">
              {elearningTab === 'materials' ? (
                 <Card className="p-6">
                    <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2 pb-4 border-b border-gray-100">
                       <Upload size={20} className="text-school-blue"/> Upload Materi Pembelajaran
                    </h3>
                    <form className="space-y-5">
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Judul Materi</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-blue outline-none transition" placeholder="Contoh: Modul Matematika Bab 1" />
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Kelas Tujuan</label>
                          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-blue outline-none bg-white">
                             {CLASS_LIST_DATA.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                          </select>
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">File Materi (PDF/PPT)</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-blue-50/50 hover:border-school-blue cursor-pointer transition group">
                             <div className="w-12 h-12 bg-blue-50 text-school-blue rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
                                <FilePlus size={24} />
                             </div>
                             <p className="text-sm font-bold text-gray-700">Klik untuk upload file</p>
                             <p className="text-xs text-gray-400 mt-1">Maksimal ukuran 10MB</p>
                          </div>
                       </div>
                       <div className="pt-2">
                          <button type="button" className="w-full bg-school-blue text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                             Publikasikan Materi
                          </button>
                       </div>
                    </form>
                 </Card>
              ) : (
                 <Card className="p-6">
                    <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2 pb-4 border-b border-gray-100">
                       <ClipboardCheck size={20} className="text-school-green"/> Buat Tugas Baru
                    </h3>
                    <form className="space-y-5">
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Judul Tugas</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-green outline-none transition" placeholder="Contoh: Latihan Soal Aljabar" />
                       </div>
                       <div className="grid grid-cols-2 gap-5">
                          <div>
                             <label className="block text-sm font-bold text-gray-700 mb-2">Kelas</label>
                             <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-green outline-none bg-white">
                                {CLASS_LIST_DATA.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                             </select>
                          </div>
                          <div>
                             <label className="block text-sm font-bold text-gray-700 mb-2">Deadline</label>
                             <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-green outline-none transition" />
                          </div>
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Deskripsi & Instruksi</label>
                          <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-green outline-none h-32 transition resize-none" placeholder="Tuliskan detail tugas di sini..."></textarea>
                       </div>
                       <div className="pt-2">
                          <button type="button" className="w-full bg-school-green text-white py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg shadow-green-200">
                             Kirim Tugas ke Siswa
                          </button>
                       </div>
                    </form>
                 </Card>
              )}
           </div>

           {/* Sidebar Info/History */}
           <div className="space-y-6">
              <Card className="p-5 bg-blue-50 border-blue-100">
                 <h4 className="font-bold text-school-blue mb-2 text-sm uppercase tracking-wider">Tips E-Learning</h4>
                 <p className="text-sm text-gray-600 leading-relaxed">
                    Pastikan file materi tidak melebihi 10MB agar mudah diakses siswa. Untuk tugas, berikan instruksi yang jelas dan deadline yang masuk akal.
                 </p>
              </Card>
              
              <Card className="p-0 overflow-hidden">
                 <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <h4 className="font-bold text-gray-800 text-sm">Riwayat Upload Terakhir</h4>
                 </div>
                 <div className="divide-y divide-gray-100">
                    {[1,2,3].map(i => (
                       <div key={i} className="p-3 hover:bg-gray-50 transition cursor-pointer">
                          <p className="text-sm font-bold text-gray-800 truncate">Modul Matematika {i}</p>
                          <p className="text-xs text-gray-500 mt-1">Dipublish 2 jam lalu</p>
                       </div>
                    ))}
                 </div>
              </Card>
           </div>
        </div>
     </div>
  );

  const HomeroomView = () => (
     <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div>
              <h2 className="text-2xl font-bold text-gray-800">Dashboard Wali Kelas</h2>
              <p className="text-gray-500">Kelas Perwalian: <span className="font-bold text-school-primary">XII MIPA 1</span></p>
           </div>
           <button className="bg-school-primary text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-red-200 hover:bg-red-700 transition">
              <Download size={18}/> Download Rapor Bayangan (PDF)
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Card className="p-6 text-center border-t-4 border-t-green-500">
              <h3 className="text-gray-500 font-medium mb-1">Rata-rata Kelas</h3>
              <div className="text-4xl font-bold text-green-600">86.5</div>
              <div className="text-xs text-green-600 mt-2 bg-green-50 inline-block px-2 py-1 rounded">+2.1 dari UTS</div>
           </Card>
           <Card className="p-6 text-center border-t-4 border-t-yellow-500">
              <h3 className="text-gray-500 font-medium mb-1">Kehadiran (Minggu Ini)</h3>
              <div className="text-4xl font-bold text-yellow-600">92%</div>
              <div className="text-xs text-red-500 mt-2 bg-red-50 inline-block px-2 py-1 rounded">2 Siswa Sakit</div>
           </Card>
           <Card className="p-6 text-center border-t-4 border-t-red-500">
              <h3 className="text-gray-500 font-medium mb-1">Masalah Kedisiplinan</h3>
              <div className="text-4xl font-bold text-red-600">0</div>
              <div className="text-xs text-gray-500 mt-2">Bulan ini</div>
           </Card>
        </div>

        <Card className="overflow-hidden">
           <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                 <Award className="text-yellow-500" /> Peringkat Siswa (Berdasarkan Rerata Nilai)
              </h3>
           </div>
           <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-white">
                     <tr>
                        <th className="px-6 py-4 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">Rank</th>
                        <th className="px-6 py-4 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">Nama Siswa</th>
                        <th className="px-6 py-4 text-center text-xs font-extrabold text-gray-500 uppercase tracking-wider">NIS</th>
                        <th className="px-6 py-4 text-center text-xs font-extrabold text-gray-500 uppercase tracking-wider">Rata-rata</th>
                        <th className="px-6 py-4 text-center text-xs font-extrabold text-gray-500 uppercase tracking-wider">Predikat</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                     {[
                        { rank: 1, name: "Gita Pertiwi", nis: "2021007", avg: 94.3, grade: "A" },
                        { rank: 2, name: "Citra Dewi", nis: "2021003", avg: 93.6, grade: "A" },
                        { rank: 3, name: "Joko Widodo", nis: "2021010", avg: 92.5, grade: "A" },
                        { rank: 4, name: "Ahmad Siswa", nis: "2021001", avg: 90.0, grade: "A" },
                        { rank: 5, name: "Indah Sari", nis: "2021009", avg: 88.4, grade: "A" },
                     ].map((s) => (
                        <tr key={s.rank} className="hover:bg-gray-50 transition">
                           <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                                 s.rank === 1 ? 'bg-yellow-100 text-yellow-700' : 
                                 s.rank === 2 ? 'bg-gray-100 text-gray-700' : 
                                 s.rank === 3 ? 'bg-orange-100 text-orange-700' : 'text-gray-500'
                              }`}>
                                 {s.rank}
                              </div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-bold text-gray-900">{s.name}</div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{s.nis}</td>
                           <td className="px-6 py-4 whitespace-nowrap text-center">
                              <span className="text-sm font-bold text-school-primary">{s.avg}</span>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-center">
                              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">{s.grade}</span>
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
               <div className="flex flex-col">
                  <span className="font-bold text-base text-gray-900 leading-none">PORTAL GURU</span>
                  <span className="text-[10px] text-gray-500">SMA BPS&K 1</span>
               </div>
               <button className="ml-auto lg:hidden text-gray-400" onClick={() => setSidebarOpen(false)}><X size={24}/></button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
               <NavItem view="dashboard" icon={LayoutDashboard} label="Dashboard" />
               <NavItem view="nilai" icon={Award} label="Input Nilai" />
               <NavItem view="presensi" icon={ClipboardCheck} label="Presensi Siswa" />
               <NavItem view="jadwal" icon={CalendarRange} label="Jadwal Mengajar" />
               <NavItem view="elearning" icon={BookOpen} label="E-Learning" />
               <div className="pt-4 mt-4 border-t border-gray-100">
                  <span className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Wali Kelas</span>
                  <NavItem view="walikelas" icon={Users} label="Kelas Perwalian" />
               </div>
            </div>

            {/* User Profile Footer */}
            <div className="p-4 border-t border-gray-100">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-school-primary">
                     <User size={20} />
                  </div>
                  <div className="overflow-hidden">
                     <p className="text-sm font-bold text-gray-900 truncate">{user?.name}</p>
                     <p className="text-xs text-gray-500">NIP. 19800202</p>
                  </div>
               </div>
               <button 
                 onClick={handleLogout}
                 className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-bold hover:bg-red-50 hover:text-red-600 transition"
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
                 {activeView === 'dashboard' ? 'Dashboard Guru' : activeView === 'nilai' ? 'E-Rapor' : activeView === 'walikelas' ? 'Wali Kelas' : activeView}
               </h2>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Cari siswa..." 
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
            {activeView === 'nilai' && <GradesInputView />}
            {activeView === 'presensi' && <AttendanceView />}
            {activeView === 'jadwal' && <ScheduleView />}
            {activeView === 'elearning' && <ELearningView />}
            {activeView === 'walikelas' && <HomeroomView />}
         </div>
      </main>

    </div>
  );
};

export default TeacherPortal;
