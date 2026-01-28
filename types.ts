
export type Page = 'home' | 'about' | 'directory' | 'facilities' | 'gallery' | 'calendar' | 'article' | 'prestasi' | 'login' | 'student-dashboard' | 'teacher-dashboard' | 'admin-dashboard';
export type EventCategory = 'academic' | 'sport' | 'holiday' | 'meeting';
export type Role = 'admin' | 'teacher' | 'student' | 'guest';

export interface User {
  id: string;
  name: string;
  role: Role;
  username: string;
}

export interface MediaItem {
  id: number;
  type: 'photo' | 'video';
  src: string;
  title: string;
  date: string;
}

export interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  month: string;
  time: string;
  description: string;
  category: EventCategory;
}

export interface NewsArticle {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
  tagColor: string;
  content: string;
  author: string;
}

export interface AgendaItem {
  date: string;
  month: string;
  title: string;
  color: string;
}

export interface VideoItem {
  title: string;
  thumbnail: string;
  uploadDate: string;
}

export interface PrincipalData {
  name: string;
  role: string;
  image: string;
  quotes: string[];
  footerText: string;
}

export interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
}

export interface FacilitiesData {
  title: string;
  description: string;
}

export interface AboutData {
  pageTitle: string;
  pageSubtitle: string;
  headerImage: string;
  historyTitle: string;
  historyContent: string[];
  historyImage: string;
  vision: string;
  mission: string[];
}

export interface StaffMember {
  id: number;
  name: string;
  nik?: string;
  role: string;
  status: string; // e.g., "Guru Tetap Yayasan"
  image: string;
  subject?: string; // New: For filtering
  department?: string; // New: For filtering (e.g., MIPA, IPS, Umum)
}

export interface FacilityItem {
  id: number;
  title: string;
  image: string;
  description?: string;
  category: string; // New: For filtering (e.g., Ruang Kelas, Penunjang)
}

export interface SchoolInfo {
  npsn: string;
  address: string;
  district: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  fax: string;
  email: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  icon: any; 
  title: string;
  description: string;
  color: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface MajorItem {
  id: number;
  title: string;
  description: string;
  icon: string; 
}

export interface AchievementItem {
  id: number;
  title: string;
  level: string; // Nasional, Provinsi, Kota
  rank: string; // Juara 1, 2, dll
  date: string;
  studentName: string;
  image: string;
}

// --- STUDENT MODULE TYPES ---
export interface ScheduleItem {
  day: string;
  subjects: {
    time: string;
    subject: string;
    teacher: string;
    room: string;
  }[];
}

export interface GradeItem {
  subject: string;
  kkm: number;
  knowledge: number;
  skill: number;
  grade: string;
}

export interface AttendanceStat {
  present: number;
  sick: number;
  permission: number;
  alpha: number;
}

export interface AssignmentItem {
  id: number;
  subject: string;
  title: string;
  deadline: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: number;
}

export interface MaterialItem {
  id: number;
  subject: string;
  title: string;
  type: 'pdf' | 'video' | 'link';
  date: string;
  url: string;
}

export interface FinancialRecord {
  id: number;
  month: string;
  amount: number;
  status: 'paid' | 'unpaid' | 'pending';
  date?: string;
}

// --- TEACHER MODULE TYPES ---
export interface TeacherScheduleItem {
  day: string;
  classes: {
    time: string;
    className: string;
    subject: string;
    room: string;
  }[];
}

export interface StudentData {
  id: string;
  name: string;
  nis: string;
  uh1?: number;
  uts?: number;
  uas?: number;
  finalScore?: number;
  attendanceStatus?: 'H' | 'S' | 'I' | 'A'; // H=Hadir, S=Sakit, etc.
}

export interface ClassData {
  id: string;
  name: string;
  totalStudents: number;
  subject: string;
}
