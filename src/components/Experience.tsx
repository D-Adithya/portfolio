import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
        <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My professional journey and internship experience
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-blue-600 dark:bg-blue-700 md:w-48 flex justify-center items-center p-8">
              <Briefcase className="h-16 w-16 text-white" />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Data Analyst</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Jeevan Technologies</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    December 2023
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300">
                  Worked as a Data Analyst intern at Jeevan Technologies in Chennai, focusing on data analysis, visualization, and reporting.
                </p>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Key Responsibilities:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Data cleaning and preparation for analysis</li>
                  <li>Creating visualizations and dashboards using Power BI</li>
                  <li>Performing statistical analysis on business data</li>
                  <li>Generating insights and recommendations based on data findings</li>
                  <li>Collaborating with cross-functional teams to understand data needs</li>
                </ul>
              </div>
              
              <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Skills Applied:</h4>
                <div className="flex flex-wrap gap-2">
                  {['SQL', 'Python', 'Data Analysis', 'Power BI', 'Data Visualization', 'Statistical Analysis'].map((skill) => (
                    <span key={skill} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Co-curricular Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Class Representative</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Served as a liaison between students and faculty, coordinating academic activities.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Cultural Coordinator</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Organized and managed cultural events and activities on campus.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">CSI Member</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Active member of the Computer Society of India student chapter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;