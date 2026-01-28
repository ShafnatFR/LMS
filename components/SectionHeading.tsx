import React from 'react';

const SectionHeading = ({ title, color = "border-school-primary" }: { title: string, color?: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className={`h-8 w-1.5 ${color.replace('border-', 'bg-')} rounded-full`}></div>
    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
  </div>
);

export default SectionHeading;