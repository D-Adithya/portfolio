import React from 'react';
import { Award } from 'lucide-react';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
}

const CertificationCard: React.FC<CertificationProps> = ({ title, issuer, date, skills }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
              <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">{issuer}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{date}</p>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-800 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "NPTEL, IIT Madras",
      date: "July - August 2023",
      skills: ["Python", "Data Analysis", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      title: "Programming, Data Structures and Algorithms in Python",
      issuer: "NPTEL",
      date: "January - March 2024",
      skills: ["Python", "Data Structures", "Algorithms", "Problem Solving"]
    },
    {
      title: "Power BI MasterClass",
      issuer: "Udemy",
      date: "December 2023",
      skills: ["Power BI", "Data Visualization", "Dashboard Creation", "Business Intelligence"]
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
        <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Professional certifications and courses I've completed to enhance my skills
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              skills={cert.skills}
            />
          ))}
          
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg shadow-md overflow-hidden md:col-span-2 p-6">
            <div className="flex flex-col md:flex-row items-center">
              <Award className="h-16 w-16 mb-4 md:mb-0 md:mr-6" />
              <div>
                <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                <p>
                  I'm constantly expanding my knowledge in the field of data science through online courses, 
                  bootcamps, and self-study. My goal is to stay updated with the latest technologies and methodologies
                  in this rapidly evolving field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;