
import { NewsArticle, CalendarEvent, MediaItem, AgendaItem, VideoItem, PrincipalData, HeroData, FacilitiesData, AboutData, StaffMember, FacilityItem, SchoolInfo, StatItem, FeatureItem, TestimonialItem, MajorItem, AchievementItem, ScheduleItem, GradeItem, AttendanceStat, AssignmentItem, MaterialItem, FinancialRecord, TeacherScheduleItem, StudentData, ClassData } from './types';
import { Trophy, Award, Users, BookOpen, Monitor, Globe, Shield, Zap } from 'lucide-react';

export const SCHOOL_INFO: SchoolInfo = {
  npsn: "20103240",
  address: "Jl. Bina Karya No. 2 Pondok Kopi",
  district: "Duren Sawit",
  city: "Jakarta Timur",
  province: "DKI Jakarta",
  zipCode: "13460",
  phone: "021-8648268",
  fax: "021-8650482",
  email: "smabpsk1jakarta@yahoo.com"
};

export const STATS_DATA: StatItem[] = [
  { value: "35+", label: "Tahun Mengabdi" },
  { value: "2.500+", label: "Alumni Sukses" },
  { value: "100%", label: "Lulusan PTN/PTS" },
  { value: "50+", label: "Prestasi Tahunan" }
];

export const WHY_US_DATA: FeatureItem[] = [
  { icon: Trophy, title: "Akreditasi A Unggul", description: "Standar mutu pendidikan tinggi yang diakui secara nasional.", color: "text-red-600" },
  { icon: Users, title: "Pengajar Kompeten", description: "Guru tersertifikasi dan berpengalaman di bidangnya.", color: "text-blue-600" },
  { icon: Monitor, title: "Fasilitas Lengkap", description: "Lab komputer, sains, dan multimedia modern.", color: "text-green-600" },
  { icon: Award, title: "Program Beasiswa", description: "Dukungan bagi siswa berprestasi akademik & non-akademik.", color: "text-purple-600" },
  { icon: Globe, title: "Kurikulum Merdeka", description: "Pembelajaran fleksibel yang berpusat pada siswa.", color: "text-orange-600" },
  { icon: Shield, title: "Lingkungan Aman", description: "Sekolah ramah anak dengan keamanan 24 jam.", color: "text-teal-600" },
  { icon: Zap, title: "Ekstrakurikuler Aktif", description: "Wadahi minat bakat dari olahraga hingga seni.", color: "text-yellow-600" },
  { icon: BookOpen, title: "Budaya Literasi", description: "Perpustakaan digital dan program literasi rutin.", color: "text-indigo-600" }
];

export const MAJORS_DATA: MajorItem[] = [
  { id: 1, title: "MIPA", description: "Matematika dan Ilmu Pengetahuan Alam. Fokus pada sains, kedokteran, dan teknik.", icon: "M" },
  { id: 2, title: "IPS", description: "Ilmu Pengetahuan Sosial. Fokus pada ekonomi, hukum, sosial, dan politik.", icon: "S" }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    name: "Ridho Pambudi",
    role: "Alumni Angkatan 2020 - Mahasiswa UI",
    content: "SMA BPS&K 1 bukan sekadar sekolah, tapi rumah kedua. Guru-gurunya sangat suportif dalam membimbing saya masuk PTN impian.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Nadia Hasna",
    role: "Alumni Angkatan 2019 - Entrepreneur",
    content: "Pendidikan karakter di sini sangat kuat. Saya belajar disiplin dan kepemimpinan yang sangat berguna di dunia kerja.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Thariq Muhamad",
    role: "Alumni Angkatan 2021 - Staff IT",
    content: "Fasilitas lab komputernya sangat membantu saya mengembangkan minat di bidang teknologi sejak dini.",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 1,
    category: "Prestasi",
    date: "6 Sep 2024",
    title: "Kontingen IESO Persembahkan Medali Perak",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    tagColor: "bg-red-100 text-red-700",
    author: "Humas Sekolah",
    content: "..."
  },
  {
    id: 2,
    category: "Workshop",
    date: "3 Sep 2024",
    title: "Workshop Peningkatan Kualitas Data SMA",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    tagColor: "bg-orange-100 text-orange-700",
    author: "Admin Data",
    content: "..."
  },
  {
    id: 3,
    category: "Olahraga",
    date: "30 Agu 2024",
    title: "Tim Silat Raih Emas Tingkat Provinsi",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
    tagColor: "bg-red-100 text-red-700",
    author: "Koordinator Ekskul",
    content: "..."
  }
];

// --- UPDATED STAFF DATA (25 Items: 1 Principal, 2 Kesiswaan, 2 BK, 20 Teachers) ---
export const STAFF_DATA: StaffMember[] = [
  // SECTION 1: MANAGEMENT (5 People)
  {
    id: 1,
    name: "Endang Sriasih, M.Pd",
    role: "Kepala Sekolah",
    status: "Pimpinan",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    nik: "19750101 200012 2 001",
    department: "Manajemen",
    subject: "Manajemen Sekolah"
  },
  {
    id: 2,
    name: "Drs. Budi Santoso",
    role: "Waka Kesiswaan",
    status: "Pimpinan",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    nik: "19800202 200501 1 002",
    department: "Manajemen",
    subject: "Kesiswaan"
  },
  {
    id: 3,
    name: "Siti Aminah, S.Pd",
    role: "Staf Kesiswaan",
    status: "Staff",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    nik: "19850303 201001 2 003",
    department: "Manajemen",
    subject: "Kesiswaan"
  },
  {
    id: 4,
    name: "Rina Wati, S.Psi",
    role: "Koordinator BK",
    status: "Guru BK",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    nik: "19880404 201201 2 004",
    department: "Bimbingan Konseling",
    subject: "Bimbingan Konseling"
  },
  {
    id: 5,
    name: "Agus Pratama, S.Psi",
    role: "Guru BK",
    status: "Guru BK",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    nik: "19900505 201501 1 005",
    department: "Bimbingan Konseling",
    subject: "Bimbingan Konseling"
  },

  // SECTION 2: TEACHERS (20 People)
  // Sejarah
  {
    id: 6,
    name: "Drs. Hendra Wijaya",
    role: "Guru Sejarah",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    nik: "19780606 200301 1 006",
    department: "IPS",
    subject: "Sejarah Wajib"
  },
  {
    id: 7,
    name: "Ratna Dewi, S.Pd",
    role: "Guru Sejarah",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1598550832450-8eb413482e25?auto=format&fit=crop&q=80&w=400",
    nik: "19920707 201801 2 007",
    department: "IPS",
    subject: "Sejarah Peminatan"
  },
  
  // Matematika
  {
    id: 8,
    name: "Presiliani Anjarsari, S.Pd",
    role: "Guru Matematika",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400",
    nik: "19930808 201901 2 008",
    department: "MIPA",
    subject: "Matematika Wajib"
  },
  {
    id: 9,
    name: "Bambang Susilo, S.Si",
    role: "Guru Matematika",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    nik: "19850909 201101 1 009",
    department: "MIPA",
    subject: "Matematika Peminatan"
  },

  // Fisika & Kimia & Biologi (MIPA)
  {
    id: 10,
    name: "Fitriah Komalasari, S.Si",
    role: "Guru Fisika",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400",
    nik: "19821010 200801 2 010",
    department: "MIPA",
    subject: "Fisika"
  },
  {
    id: 11,
    name: "Riher Agus Maula R, ST.",
    role: "Guru Kimia",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    nik: "19841111 200901 1 011",
    department: "MIPA",
    subject: "Kimia"
  },
  {
    id: 12,
    name: "Dr. Eka Putri",
    role: "Guru Biologi",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    nik: "19801212 200601 2 012",
    department: "MIPA",
    subject: "Biologi"
  },

  // Ekonomi & Geografi & Sosiologi (IPS)
  {
    id: 13,
    name: "Sugeng Pribadi, S.Pd",
    role: "Guru Ekonomi",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    nik: "19790101 200401 1 013",
    department: "IPS",
    subject: "Ekonomi"
  },
  {
    id: 14,
    name: "Liya Puspita Sari, S.Pd",
    role: "Guru Sosiologi",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400",
    nik: "19940202 202001 2 014",
    department: "IPS",
    subject: "Sosiologi"
  },
  {
    id: 15,
    name: "Dedi Kurniawan, S.Pd",
    role: "Guru Geografi",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    nik: "19860303 201301 1 015",
    department: "IPS",
    subject: "Geografi"
  },

  // Bahasa
  {
    id: 16,
    name: "Sarah Johnson, B.Ed",
    role: "Guru B. Inggris",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    nik: "19950404 202101 2 016",
    department: "Bahasa",
    subject: "Bahasa Inggris"
  },
  {
    id: 17,
    name: "Dewi Sartika, S.S",
    role: "Guru B. Indonesia",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
    nik: "19880505 201401 2 017",
    department: "Bahasa",
    subject: "Bahasa Indonesia"
  },
  {
    id: 18,
    name: "Kenjiro Sato, M.Ed",
    role: "Guru B. Jepang",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80&w=400",
    nik: "19900606 201601 1 018",
    department: "Bahasa",
    subject: "Bahasa Jepang"
  },

  // Umum (PKN, Agama, PJOK, Seni)
  {
    id: 19,
    name: "Ust. Abdullah, S.Ag",
    role: "Guru PAI",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400",
    nik: "19810707 200701 1 019",
    department: "Umum",
    subject: "Pendidikan Agama"
  },
  {
    id: 20,
    name: "Maria Goretti, S.Th",
    role: "Guru PAK",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400",
    nik: "19850808 201201 2 020",
    department: "Umum",
    subject: "Pendidikan Agama"
  },
  {
    id: 21,
    name: "Pancasila Sakti, S.Pd",
    role: "Guru PKN",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    nik: "19830909 201001 1 021",
    department: "Umum",
    subject: "Pendidikan Pancasila"
  },
  {
    id: 22,
    name: "Raga Perkasa, S.Or",
    role: "Guru PJOK",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=400",
    nik: "19911010 201701 1 022",
    department: "Umum",
    subject: "PJOK"
  },
  {
    id: 23,
    name: "Melodi Indah, S.Sn",
    role: "Guru Seni Budaya",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    nik: "19931111 201901 2 023",
    department: "Umum",
    subject: "Seni Budaya"
  },
  {
    id: 24,
    name: "Tekno Wijaya, S.Kom",
    role: "Guru TIK",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=400",
    nik: "19891212 201501 1 024",
    department: "Umum",
    subject: "Informatika"
  },
  {
    id: 25,
    name: "Wira Usaha, MM",
    role: "Guru PKWU",
    status: "Guru Mapel",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400",
    nik: "19760101 200201 1 025",
    department: "Umum",
    subject: "Prakarya & Kewirausahaan"
  }
];

export const FACILITIES_LIST: FacilityItem[] = [
  {
    id: 1,
    title: "Lab Fisika",
    image: "https://images.unsplash.com/photo-1629859556828-090264b9685a?auto=format&fit=crop&q=80&w=800",
    description: "Laboratorium fisika modern dengan peralatan lengkap.",
    category: "Ruang Kelas"
  },
  {
    id: 2,
    title: "Lab Biologi",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    description: "Fasilitas pengamatan mikroskopis dan anatomi.",
    category: "Ruang Kelas"
  },
  {
    id: 3,
    title: "Lab Kimia",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    description: "Laboratorium kimia standar untuk eksperimen.",
    category: "Ruang Kelas"
  },
  {
    id: 4,
    title: "Mushola",
    image: "https://images.unsplash.com/photo-1581068228157-79450c268576?auto=format&fit=crop&q=80&w=800",
    description: "Tempat ibadah yang nyaman dan bersih.",
    category: "Fasilitas Pendukung"
  },
  {
    id: 5,
    title: "Perpustakaan",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
    description: "Koleksi buku lengkap dan area baca tenang.",
    category: "Pembelajaran"
  },
  {
    id: 6,
    title: "Auditorium",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    description: "Ruang serbaguna untuk berbagai kegiatan.",
    category: "Gedung"
  },
  {
    id: 7,
    title: "Ruang Guru",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    description: "Ruang kerja guru yang nyaman dan kondusif.",
    category: "Ruang Operasional"
  },
  {
    id: 8,
    title: "Lapangan Basket",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800",
    description: "Lapangan olahraga outdoor standar nasional.",
    category: "Fasilitas Pendukung"
  }
];

export const CALENDAR_EVENTS: CalendarEvent[] = [
  { id: 1, title: 'Ujian Tengah Semester', date: '16', month: 'Okt', time: '07:30 - 14:00', description: 'Ujian wajib bagi seluruh siswa kelas X, XI, dan XII.', category: 'academic' },
  { id: 2, title: 'Pertandingan Basket', date: '22', month: 'Okt', time: '15:00 - 17:30', description: 'Tim sekolah vs SMA Negeri 1 di GOR Utama.', category: 'sport' },
  { id: 3, title: 'Hari Sumpah Pemuda', date: '28', month: 'Okt', time: '07:00 - 08:30', description: 'Upacara bendera menggunakan pakaian adat.', category: 'holiday' },
  { id: 4, title: 'Pertemuan Orang Tua', date: '05', month: 'Nov', time: '09:00 - 11:00', description: 'Pembagian rapor bayangan dan konsultasi.', category: 'meeting' },
  { id: 5, title: 'Study Tour', date: '12', month: 'Nov', time: '08:00 - 15:00', description: 'Kegiatan luar kelas mata pelajaran Sejarah.', category: 'academic' },
];

export const GALLERY_DATA: MediaItem[] = [
  { id: 1, type: 'photo', src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800', title: 'Wisuda Angkatan 2023', date: '2023-06-15' },
  { id: 2, type: 'photo', src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800', title: 'Kegiatan KBM', date: '2023-08-10' },
  { id: 3, type: 'photo', src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800', title: 'Perpustakaan', date: '2023-09-01' },
  { id: 4, type: 'photo', src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800', title: 'Praktikum Sains', date: '2023-09-20' },
  { id: 5, type: 'photo', src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', title: 'Seminar', date: '2023-10-05' },
  { id: 6, type: 'photo', src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800', title: 'Pentas Seni', date: '2023-11-12' },
];

export const AGENDA_DATA: AgendaItem[] = [
  { date: '29', month: 'APR', title: 'Info SPMB TP. 2025/2026', color: 'bg-red-100 text-red-700' },
  { date: '01', month: 'MEI', title: 'Pengumuman Kelulusan 2025', color: 'bg-yellow-100 text-yellow-700' },
  { date: '15', month: 'MEI', title: 'Pentas Seni Tahunan', color: 'bg-blue-100 text-blue-700' },
];

export const VIDEO_DATA: VideoItem = {
  title: "SMA BPS&K 1 || Goes to Campus 2024",
  thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
  uploadDate: "Diunggah 2 hari yang lalu"
};

export const PRINCIPAL_DATA: PrincipalData = {
  name: "Endang Sriasih, M.Pd",
  role: "Kepala SMA BPS&K 1 Jakarta",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  quotes: [
    "Assalamu’alaikum Warahmatullahi Wabarakatuh.",
    "Dengan bangga kami sambut seluruh siswa, orang tua, serta mitra pendidikan di SMA BPS&K 1 Jakarta.",
    "Kami berkomitmen mencetak generasi unggul yang beriman, berilmu, dan berakhlak mulia.",
    "Sekolah berbasis karakter dan prestasi adalah kunci kami untuk menciptakan lulusan yang siap bersaing."
  ],
  footerText: "Yes we can! Yes we fight!"
};

export const TICKER_MESSAGES: string[] = [
  "INFO SPMB SMA BPS&K 1 JAKARTA TAHUN AJARAN 2025/2026 TELAH DIBUKA!",
  "Pengumuman Kelulusan akan dilaksanakan tanggal 5 Mei 2025",
  "Dukung Tim Basket Sekolah di Final Provinsi Minggu Ini!"
];

export const HERO_DATA: HeroData = {
  badge: "Akreditasi A Unggul",
  title: "Generasi Unggul Untuk Masa Depan",
  subtitle: "Siapkah kamu menjadi bagian dari SMA BPS&K 1? Kami siapkan kurikulum terbaik untukmu."
};

export const FACILITIES_DATA: FacilitiesData = {
  title: "Fasilitas Sekolah Modern",
  description: "Laboratorium Sains, Perpustakaan Digital, dan Lapangan Indoor."
};

export const QUICK_LINKS: string[] = [
  'E-Learning Portal', 
  'Perpustakaan Digital', 
  'PPDB Online', 
  'Cek Kelulusan'
];

export const ABOUT_DATA: AboutData = {
  pageTitle: "Tentang Kami",
  pageSubtitle: "Profil SMA BPS&K 1 Jakarta",
  headerImage: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1920",
  historyTitle: "Sejarah Sekolah",
  historyContent: [
    "SMA BPS&K 1 Jakarta berdiri dengan semangat mencerdaskan bangsa. Terus berkembang menjadi pusat pendidikan unggulan di Jakarta Timur.",
    "Kami terus bertransformasi menjawab tantangan zaman tanpa meninggalkan nilai luhur budaya."
  ],
  historyImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
  vision: "\"Menjadi lembaga pendidikan terdepan yang membentuk generasi cerdas dan berkarakter.\"",
  mission: [
    "Pembelajaran aktif dan inovatif.",
    "Menanamkan nilai moral dan etika.",
    "Mengembangkan minat dan bakat siswa."
  ]
};

export const PRESTASI_DATA: AchievementItem[] = [
  {
    id: 1,
    title: "Juara 1 Lomba Debat Bahasa Inggris",
    level: "Tingkat Kota",
    rank: "Juara 1",
    date: "2024",
    studentName: "Tim Debat SMA BPS&K 1",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Medali Perak Olimpiade Sains Kebumian",
    level: "Nasional",
    rank: "Medali Perak",
    date: "2024",
    studentName: "Ahmad Rizky",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Juara 2 Basket Putra",
    level: "Provinsi DKI Jakarta",
    rank: "Juara 2",
    date: "2023",
    studentName: "Tim Basket Putra",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Juara Harapan 1 Lomba Fotografi",
    level: "Nasional",
    rank: "Harapan 1",
    date: "2023",
    studentName: "Siti Aminah",
    image: "https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&q=80&w=800"
  }
];

// --- MOCK DATA FOR STUDENT MODULE ---

export const STUDENT_SCHEDULE: ScheduleItem[] = [
  {
    day: "Senin",
    subjects: [
      { time: "07:00 - 08:30", subject: "Upacara Bendera", teacher: "-", room: "Lapangan" },
      { time: "08:30 - 10:00", subject: "Matematika Wajib", teacher: "Presiliani Anjarsari, S.Pd", room: "XII MIPA 1" },
      { time: "10:15 - 11:45", subject: "Bahasa Indonesia", teacher: "Dewi Sartika, S.S", room: "XII MIPA 1" },
    ]
  },
  {
    day: "Selasa",
    subjects: [
      { time: "07:00 - 08:30", subject: "Fisika", teacher: "Fitriah Komalasari, S.Si", room: "Lab Fisika" },
      { time: "08:30 - 10:00", subject: "Kimia", teacher: "Riher Agus Maula R, ST.", room: "XII MIPA 1" },
      { time: "10:15 - 11:45", subject: "Bahasa Inggris", teacher: "Sarah Johnson, B.Ed", room: "XII MIPA 1" },
    ]
  },
  {
    day: "Rabu",
    subjects: [
      { time: "07:00 - 08:30", subject: "Biologi", teacher: "Dr. Eka Putri", room: "Lab Biologi" },
      { time: "08:30 - 10:00", subject: "PJOK", teacher: "Raga Perkasa, S.Or", room: "GOR" },
      { time: "10:15 - 11:45", subject: "PKN", teacher: "Pancasila Sakti, S.Pd", room: "XII MIPA 1" },
    ]
  },
  {
    day: "Kamis",
    subjects: [
      { time: "07:00 - 08:30", subject: "Matematika Peminatan", teacher: "Bambang Susilo, S.Si", room: "XII MIPA 1" },
      { time: "08:30 - 10:00", subject: "Sejarah Indonesia", teacher: "Drs. Hendra Wijaya", room: "XII MIPA 1" },
      { time: "10:15 - 11:45", subject: "Seni Budaya", teacher: "Melodi Indah, S.Sn", room: "R. Seni" },
    ]
  },
  {
    day: "Jumat",
    subjects: [
      { time: "07:00 - 08:30", subject: "Pendidikan Agama", teacher: "Ust. Abdullah, S.Ag", room: "Mushola/Kelas" },
      { time: "08:30 - 10:00", subject: "PKWU", teacher: "Wira Usaha, MM", room: "XII MIPA 1" },
      { time: "13:00 - 14:30", subject: "Ekstrakurikuler", teacher: "-", room: "Lapangan" },
    ]
  },
];

export const STUDENT_GRADES: GradeItem[] = [
  { subject: "Matematika Wajib", kkm: 75, knowledge: 88, skill: 85, grade: "A" },
  { subject: "Bahasa Indonesia", kkm: 75, knowledge: 90, skill: 92, grade: "A" },
  { subject: "Bahasa Inggris", kkm: 75, knowledge: 85, skill: 88, grade: "A" },
  { subject: "Fisika", kkm: 75, knowledge: 80, skill: 82, grade: "B+" },
  { subject: "Kimia", kkm: 75, knowledge: 78, skill: 80, grade: "B" },
  { subject: "Biologi", kkm: 75, knowledge: 92, skill: 95, grade: "A" },
  { subject: "PJOK", kkm: 75, knowledge: 85, skill: 90, grade: "A" },
  { subject: "PKN", kkm: 75, knowledge: 88, skill: 88, grade: "A" },
  { subject: "Seni Budaya", kkm: 75, knowledge: 82, skill: 85, grade: "B+" },
  { subject: "Pendidikan Agama", kkm: 75, knowledge: 95, skill: 95, grade: "A" },
];

export const ATTENDANCE_STATS: AttendanceStat = {
  present: 45,
  sick: 2,
  permission: 1,
  alpha: 0
};

export const STUDENT_ASSIGNMENTS: AssignmentItem[] = [
  { id: 1, subject: "Matematika Wajib", title: "Latihan Soal Aljabar Linear", deadline: "2024-10-25", status: "pending" },
  { id: 2, subject: "Bahasa Indonesia", title: "Analisis Struktur Puisi Kontemporer", deadline: "2024-10-22", status: "submitted" },
  { id: 3, subject: "Fisika", title: "Laporan Praktikum Hukum Newton", deadline: "2024-10-15", status: "graded", grade: 85 },
  { id: 4, subject: "Sejarah", title: "Essai Perang Dunia II", deadline: "2024-10-30", status: "pending" },
];

export const STUDENT_MATERIALS: MaterialItem[] = [
  { id: 1, subject: "Matematika Wajib", title: "Modul Bab 3: Matriks & Vektor", type: "pdf", date: "2024-10-01", url: "#" },
  { id: 2, subject: "Fisika", title: "Video Pembelajaran Dinamika Partikel", type: "video", date: "2024-10-05", url: "#" },
  { id: 3, subject: "Bahasa Inggris", title: "Reading Comprehension Tips & Tricks", type: "link", date: "2024-10-08", url: "#" },
  { id: 4, subject: "Kimia", title: "Slide Presentasi Ikatan Kimia", type: "pdf", date: "2024-10-12", url: "#" },
];

export const STUDENT_FINANCE: FinancialRecord[] = [
  { id: 1, month: "Juli 2024", amount: 650000, status: "paid", date: "2024-07-10" },
  { id: 2, month: "Agustus 2024", amount: 650000, status: "paid", date: "2024-08-12" },
  { id: 3, month: "September 2024", amount: 650000, status: "paid", date: "2024-09-10" },
  { id: 4, month: "Oktober 2024", amount: 650000, status: "unpaid" },
  { id: 5, month: "November 2024", amount: 650000, status: "unpaid" },
  { id: 6, month: "Desember 2024", amount: 650000, status: "unpaid" },
];

// --- MOCK DATA FOR TEACHER MODULE ---

export const TEACHER_SCHEDULE: TeacherScheduleItem[] = [
  {
    day: "Senin",
    classes: [
      { time: "07:00 - 08:30", className: "XII MIPA 1", subject: "Matematika Wajib", room: "XII MIPA 1" },
      { time: "08:30 - 10:00", className: "XII MIPA 3", subject: "Matematika Wajib", room: "XII MIPA 3" },
    ]
  },
  {
    day: "Selasa",
    classes: [
      { time: "10:15 - 11:45", className: "X IPS 2", subject: "Matematika Wajib", room: "X IPS 2" },
      { time: "13:00 - 14:30", className: "XI MIPA 1", subject: "Matematika Peminatan", room: "XI MIPA 1" },
    ]
  },
  {
    day: "Rabu",
    classes: [
      { time: "07:00 - 08:30", className: "XII MIPA 1", subject: "Matematika Peminatan", room: "XII MIPA 1" },
    ]
  },
  {
    day: "Kamis",
    classes: [
      { time: "08:30 - 10:00", className: "XI IPS 1", subject: "Matematika Wajib", room: "XI IPS 1" },
    ]
  },
  {
    day: "Jumat",
    classes: [
      { time: "07:00 - 08:30", className: "XII MIPA 2", subject: "Matematika Wajib", room: "XII MIPA 2" },
    ]
  }
];

export const CLASS_LIST_DATA: ClassData[] = [
  { id: "1", name: "XII MIPA 1", totalStudents: 32, subject: "Matematika Wajib" },
  { id: "2", name: "XII MIPA 2", totalStudents: 30, subject: "Matematika Wajib" },
  { id: "3", name: "XII MIPA 3", totalStudents: 31, subject: "Matematika Wajib" },
  { id: "4", name: "XI MIPA 1", totalStudents: 28, subject: "Matematika Peminatan" },
];

export const STUDENT_LIST_DATA: StudentData[] = [
  { id: "1", name: "Ahmad Siswa", nis: "2021001", uh1: 85, uts: 88, uas: 90, attendanceStatus: 'H' },
  { id: "2", name: "Budi Santoso", nis: "2021002", uh1: 78, uts: 80, uas: 82, attendanceStatus: 'H' },
  { id: "3", name: "Citra Dewi", nis: "2021003", uh1: 92, uts: 95, uas: 94, attendanceStatus: 'H' },
  { id: "4", name: "Doni Pratama", nis: "2021004", uh1: 70, uts: 75, uas: 72, attendanceStatus: 'S' },
  { id: "5", name: "Eka Putri", nis: "2021005", uh1: 88, uts: 85, uas: 88, attendanceStatus: 'H' },
  { id: "6", name: "Fajar Nugraha", nis: "2021006", uh1: 82, uts: 80, uas: 85, attendanceStatus: 'I' },
  { id: "7", name: "Gita Pertiwi", nis: "2021007", uh1: 95, uts: 92, uas: 96, attendanceStatus: 'H' },
  { id: "8", name: "Hadi Saputra", nis: "2021008", uh1: 75, uts: 78, uas: 76, attendanceStatus: 'A' },
  { id: "9", name: "Indah Sari", nis: "2021009", uh1: 86, uts: 88, uas: 85, attendanceStatus: 'H' },
  { id: "10", name: "Joko Widodo", nis: "2021010", uh1: 90, uts: 88, uas: 92, attendanceStatus: 'H' },
];
