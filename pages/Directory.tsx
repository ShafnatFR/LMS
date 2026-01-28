import React, { useMemo } from 'react';
import { User, GraduationCap, Microscope, Globe, BookOpen } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { STAFF_DATA } from '../data';
import { StaffMember } from '../types';
import FadeInSection from '../components/FadeInSection';

const TeacherCard: React.FC<{ staff: StaffMember }> = ({ staff }) => (
  <div className="bg-white rounded-xl shadow-lg relative overflow-hidden h-[400px] flex flex-col group hover:shadow-2xl transition-all duration-300">
     {/* Top Left Logo Area */}
     <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
       <GraduationCap className="text-school-primary" size={24} />
       <div className="flex flex-col leading-none">
          <span className="text-[10px] font-bold text-gray-800">SMA BPS&K 1</span>
          <span className="text-[8px] font-medium text-gray-500 tracking-wider">JAKARTA</span>
       </div>
     </div>

     {/* Main Content */}
     <div className="flex-1 flex mt-8 relative">
        {/* Image Container - Left Side */}
        <div className="w-2/3 h-full relative z-10 mt-4">
           <div className="absolute bottom-0 left-0 w-full h-[90%] bg-gradient-to-tr from-gray-100 to-transparent rounded-tr-[50px] -z-10"></div>
           <img 
             src={staff.image} 
             alt={staff.name} 
             className="w-full h-full object-cover object-top rounded-tr-[40px] transform translate-y-2 group-hover:scale-105 transition-transform duration-500" 
           />
        </div>

        {/* Text Info - Right Side */}
        <div className="w-1/2 pt-16 pr-5 pl-2 flex flex-col items-end text-right z-20">
           <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2">
             {staff.name.split(',')[0]} {/* Show first part of name mainly */}
             <span className="block text-sm font-medium text-gray-500 mt-1">{staff.name.split(',')[1]}</span>
           </h3>
           
           {/* Red Dot Accent */}
           <div className="w-2 h-2 bg-school-primary rounded-full mb-3"></div>
           
           {/* NIK */}
           <div className="text-xs text-gray-400 font-mono tracking-tighter">
              NIP. {staff.nik ? staff.nik.split(' ')[0] : '-'}
           </div>
        </div>
     </div>

     {/* Footer Wave */}
     <div className="h-14 bg-school-primary absolute bottom-0 w-full z-20 flex items-center justify-center">
         {/* Curved decoration using CSS */}
         <div className="absolute -top-6 right-0 w-24 h-12 bg-white rounded-br-[40px] z-10"></div>
         <div className="absolute -top-6 right-0 w-12 h-12 bg-school-primary z-0"></div> {/* Fill the corner */}

         <span className="text-white font-bold text-sm z-20 px-4 text-center line-clamp-1">
           {staff.subject || staff.role}
         </span>
     </div>
  </div>
);

const DirectoryPage = () => {
  // Grouping Logic
  const { managementGroup, mipaGroup, ipsGroup, umumGroup } = useMemo(() => {
    return {
      managementGroup: STAFF_DATA.filter(s => s.department === 'Manajemen' || s.department === 'Bimbingan Konseling'),
      mipaGroup: STAFF_DATA.filter(s => s.department === 'MIPA'),
      ipsGroup: STAFF_DATA.filter(s => s.department === 'IPS'),
      umumGroup: STAFF_DATA.filter(s => s.department === 'Umum' || s.department === 'Bahasa'),
    };
  }, []);

  const SectionTitle = ({ title, icon: Icon, colorClass, bgColorClass }: any) => (
    <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4 mt-12">
      <div className={`p-3 rounded-xl ${bgColorClass} ${colorClass}`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    </div>
  );

  return (
    <div className="animate-fade-in pb-20 bg-gray-50">
      <PageHeader 
        title="Direktori Guru & Staff" 
        subtitle="Mengenal lebih dekat tenaga pendidik profesional yang berdedikasi mencerdaskan bangsa di SMA BPS&K 1 Jakarta."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-10">
        
        {/* SECTION 1: MANAGEMENT & STAFF */}
        <div className="mb-20">
          <SectionTitle 
            title="Pimpinan & Staff Khusus" 
            icon={User} 
            colorClass="text-school-primary" 
            bgColorClass="bg-red-50" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {managementGroup.map((staff, idx) => (
               <FadeInSection key={staff.id} delay={idx * 100}>
                 <TeacherCard staff={staff} />
               </FadeInSection>
            ))}
          </div>
        </div>

        {/* SECTION 2: GURU MIPA */}
        <FadeInSection>
          <div className="mb-16">
            <SectionTitle 
              title="Guru MIPA (Matematika & Sains)" 
              icon={Microscope} 
              colorClass="text-school-blue" 
              bgColorClass="bg-blue-50" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mipaGroup.map((staff, idx) => (
                <TeacherCard key={staff.id} staff={staff} />
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* SECTION 3: GURU IPS */}
        <FadeInSection>
          <div className="mb-16">
            <SectionTitle 
              title="Guru IPS (Sosial & Humaniora)" 
              icon={Globe} 
              colorClass="text-yellow-600" 
              bgColorClass="bg-yellow-50" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ipsGroup.map((staff, idx) => (
                <TeacherCard key={staff.id} staff={staff} />
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* SECTION 4: GURU UMUM (Bahasa, Agama, Olahraga, dll) */}
        <FadeInSection>
          <div className="mb-16">
            <SectionTitle 
              title="Guru Mata Pelajaran Umum" 
              icon={BookOpen} 
              colorClass="text-school-green" 
              bgColorClass="bg-green-50" 
            />
            <p className="text-gray-500 mb-8 -mt-6 ml-16">
              Meliputi Bahasa, Pendidikan Agama, PJOK, Seni Budaya, TIK, dan PKWU.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {umumGroup.map((staff, idx) => (
                <TeacherCard key={staff.id} staff={staff} />
              ))}
            </div>
          </div>
        </FadeInSection>

      </div>
    </div>
  );
};

export default DirectoryPage;