import React, { useState } from 'react';
import { Clock, Calendar as CalendarIcon, LayoutList, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { EventCategory, CalendarEvent } from '../types';
import { CALENDAR_EVENTS } from '../data';

const CalendarPage = () => {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthMap: { [key: string]: number } = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'Mei': 4, 'Jun': 5,
    'Jul': 6, 'Agu': 7, 'Sep': 8, 'Okt': 9, 'Nov': 10, 'Des': 11
  };

  const getCategoryStyles = (category: EventCategory) => {
    switch(category) {
      case 'academic': return { border: 'border-l-blue-500', badge: 'bg-blue-100 text-blue-700', date: 'text-blue-600', dot: 'bg-blue-500' };
      case 'sport': return { border: 'border-l-red-500', badge: 'bg-red-100 text-red-700', date: 'text-red-600', dot: 'bg-red-500' };
      case 'holiday': return { border: 'border-l-green-500', badge: 'bg-green-100 text-green-700', date: 'text-green-600', dot: 'bg-green-500' };
      case 'meeting': return { border: 'border-l-yellow-500', badge: 'bg-yellow-100 text-yellow-700', date: 'text-yellow-600', dot: 'bg-yellow-500' };
      default: return { border: 'border-l-gray-500', badge: 'bg-gray-100 text-gray-700', date: 'text-gray-600', dot: 'bg-gray-500' };
    }
  };

  // Helper to check if an event falls on a specific date (assuming current year for simplicity)
  const getEventsForDate = (date: Date) => {
    return CALENDAR_EVENTS.filter(event => {
      const eventMonthIndex = monthMap[event.month];
      const eventDay = parseInt(event.date);
      // Note: We are ignoring year matching for this demo data as it doesn't have year
      return eventMonthIndex === date.getMonth() && eventDay === date.getDate();
    });
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const renderCalendarGrid = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Adjust for Monday start if needed, currently Sunday start
    const paddingDays = firstDayOfMonth; 
    
    const days = [];
    
    // Padding days
    for (let i = 0; i < paddingDays; i++) {
      days.push(<div key={`pad-${i}`} className="h-24 md:h-32 bg-gray-50/50 border border-gray-100"></div>);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateToCheck = new Date(year, month, day);
      const dayEvents = getEventsForDate(dateToCheck);
      const isToday = new Date().toDateString() === dateToCheck.toDateString();

      days.push(
        <div key={`day-${day}`} className={`h-24 md:h-32 border border-gray-100 bg-white p-2 relative group hover:bg-blue-50/30 transition-colors ${isToday ? 'ring-2 ring-inset ring-school-primary/50' : ''}`}>
          <span className={`text-sm font-semibold block mb-1 ${isToday ? 'text-school-primary bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center' : 'text-gray-700'}`}>
            {day}
          </span>
          <div className="space-y-1 overflow-y-auto max-h-[calc(100%-24px)] custom-scrollbar">
            {dayEvents.map(event => {
              const styles = getCategoryStyles(event.category);
              return (
                <div key={event.id} className={`text-[10px] md:text-xs px-1.5 py-1 rounded truncate ${styles.badge} font-medium`} title={event.title}>
                  {event.title}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return days;
  };

  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  return (
    <div className="animate-fade-in pb-20">
      <PageHeader 
        title="Kalender Akademik" 
        subtitle="Jadwal kegiatan akademik dan non-akademik SMA BPS&K 1 Jakarta Tahun Ajaran 2024/2025."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex bg-white p-1 rounded-lg shadow-sm border border-gray-100">
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'list' 
                  ? 'bg-school-primary text-white shadow-sm' 
                  : 'text-gray-500 hover:text-school-primary hover:bg-gray-50'
              }`}
            >
              <LayoutList size={18} />
              <span>List View</span>
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'calendar' 
                  ? 'bg-school-primary text-white shadow-sm' 
                  : 'text-gray-500 hover:text-school-primary hover:bg-gray-50'
              }`}
            >
              <CalendarIcon size={18} />
              <span>Calendar View</span>
            </button>
          </div>

          {viewMode === 'calendar' && (
             <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded-full text-gray-600 transition">
                  <ChevronLeft size={20} />
                </button>
                <span className="font-bold text-gray-800 text-lg min-w-[140px] text-center">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded-full text-gray-600 transition">
                  <ChevronRight size={20} />
                </button>
             </div>
          )}
        </div>

        {/* View Content */}
        {viewMode === 'list' ? (
          <div className="max-w-4xl mx-auto space-y-6">
            {CALENDAR_EVENTS.map((event) => {
              const styles = getCategoryStyles(event.category);
              return (
                <Card key={event.id} className="flex flex-col sm:flex-row">
                  <div className="sm:w-32 bg-gray-50 flex flex-col items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-gray-100">
                    <span className={`text-3xl font-bold ${styles.date}`}>{event.date}</span>
                    <span className="text-gray-500 font-bold uppercase tracking-wider text-sm mt-1">{event.month}</span>
                  </div>
                  
                  <div className={`flex-1 p-6 border-l-4 ${styles.border} bg-white`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                      <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide w-fit ${styles.badge}`}>
                        {event.category === 'holiday' ? 'Nasional' : event.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-3 font-medium">
                      <Clock size={16} className="mr-2" />
                      {event.time}
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </Card>
              );
            })}
             <div className="mt-12 text-center">
              <button className="text-school-primary font-bold hover:text-blue-800 flex items-center justify-center mx-auto gap-2 border border-school-primary/30 px-6 py-3 rounded-full hover:bg-blue-50 transition">
                <CalendarIcon size={18} />
                Unduh Kalender Lengkap (PDF)
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             {/* Calendar Header Days */}
             <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
                {['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'].map((day, i) => (
                  <div key={i} className="py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <span className="hidden md:inline">{day}</span>
                    <span className="md:hidden">{day.substring(0, 3)}</span>
                  </div>
                ))}
             </div>
             
             {/* Calendar Body */}
             <div className="grid grid-cols-7 border-l border-t border-gray-100">
                {renderCalendarGrid()}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;