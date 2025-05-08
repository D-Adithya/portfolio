import React from 'react';

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
  isLeft?: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  degree, 
  institution, 
  location, 
  year, 
  grade,
  isLeft = true
}) => {
  return (
    <div className={`mb-12 flex flex-col md:flex-row ${isLeft ? 'md:text-right' : ''}`}>
      <div className={`md:w-1/2 ${isLeft ? 'md:mr-8' : 'md:order-last md:ml-8'}`}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{degree}</h3>
          <p className="text-blue-600 dark:text-blue-400">{institution}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{location} | {year}</p>
          <div className="mt-2 inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
            {grade}
          </div>
        </div>
      </div>
      
      <div className="hidden md:block md:w-1/2 relative">
        <div className={`absolute top-6 ${isLeft ? 'right-0' : 'left-0'} w-4 h-4 rounded-full bg-blue-500`}></div>
        <div className={`absolute top-8 ${isLeft ? 'right-2' : 'left-2'} bottom-0 w-0.5 bg-blue-500`}></div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
        <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My academic journey and qualifications
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <EducationItem 
          degree="B.TECH - Artificial Intelligence and Data Science"
          institution="SRM Valliammai Engineering College"
          location="Chengalpattu"
          year="2021 - 2025"
          grade="CGPA: 8.4"
          isLeft={true}
        />
        
        <EducationItem 
          degree="Higher Secondary Certificate (HSC)"
          institution="Cheran Matric Higher Secondary School"
          location="Karur"
          year="2021"
          grade="Percentage: 94%"
          isLeft={false}
        />
        
        <EducationItem 
          degree="Secondary School Leaving Certificate (SSLC)"
          institution="Cheran Matric Higher Secondary School"
          location="Karur"
          year="2019"
          grade="Percentage: 95.8%"
          isLeft={true}
        />
      </div>
    </div>
  );
};

export default Education;