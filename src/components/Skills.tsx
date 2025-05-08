import React from 'react';
import { Code, Database, BarChart2 } from 'lucide-react';

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-gray-800 dark:text-gray-200 font-medium">{name}</h4>
        <span className="text-sm text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ 
  icon, 
  title, 
  skills 
}: { 
  icon: React.ReactNode; 
  title: string; 
  skills: { name: string; percentage: number }[] 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="mt-4">
          {skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const programmingSkills = [
    { name: 'Python', percentage: 90 },
    { name: 'SQL', percentage: 85 },
    { name: 'Data Structures & Algorithms', percentage: 80 }
  ];

  const dataAnalysisSkills = [
    { name: 'Data Cleaning & Preparation', percentage: 85 },
    { name: 'Statistical Analysis', percentage: 80 },
    { name: 'Machine Learning', percentage: 75 }
  ];

  const visualizationSkills = [
    { name: 'Power BI', percentage: 85 },
    { name: 'Data Visualization', percentage: 80 },
    { name: 'Dashboard Creation', percentage: 75 }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
        <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My technical expertise and knowledge in various aspects of data science and programming
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard 
          icon={<Code size={24} className="text-blue-600 dark:text-blue-400" />} 
          title="Programming" 
          skills={programmingSkills} 
        />
        <SkillCard 
          icon={<Database size={24} className="text-blue-600 dark:text-blue-400" />} 
          title="Data Analysis" 
          skills={dataAnalysisSkills} 
        />
        <SkillCard 
          icon={<BarChart2 size={24} className="text-blue-600 dark:text-blue-400" />} 
          title="Data Visualization" 
          skills={visualizationSkills} 
        />
      </div>

      <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-6 text-center">Tools & Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            'Python', 'SQL', 'Power BI', 'Pandas', 
            'NumPy', 'Matplotlib', 'Scikit-learn', 'Jupyter'
          ].map((tool, index) => (
            <div 
              key={index}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center text-gray-800 dark:text-gray-200 font-medium text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;