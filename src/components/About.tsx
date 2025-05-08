import React from 'react';
import { Calendar, MapPin, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a Data Science student with a passion for applying machine learning to solve problems. 
              With a strong foundation in programming languages like Python and a can-do attitude, 
              I'm eager to contribute to a team that fosters innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="text-blue-600 dark:text-blue-400 mr-4" size={20} />
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Date of Birth</h3>
                  <p className="font-medium">September 18, 2003</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-blue-600 dark:text-blue-400 mr-4" size={20} />
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Location</h3>
                  <p className="font-medium">Valayapatti, Kulithalai, Karur</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Globe className="text-blue-600 dark:text-blue-400 mr-4" size={20} />
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Languages</h3>
                  <p className="font-medium">Tamil, English, Telugu</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Hobbies</h3>
                  <p className="font-medium">Gym, Coding, Music, Gardening</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <h4 className="font-medium mb-2">Data Analysis</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Extracting insights from complex datasets using SQL, Python, and Power BI.
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <h4 className="font-medium mb-2">Machine Learning</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Applying algorithms and statistical models to solve real-world problems.
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <h4 className="font-medium mb-2">Data Visualization</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Creating interactive dashboards and visual reports to communicate findings.
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <h4 className="font-medium mb-2">Problem Solving</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Using data structures and algorithms to build efficient solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;