import React from 'react';
import { Github as GitHub, Linkedin, ChevronDown } from 'lucide-react';

interface HeroProps {
  onSetActive: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSetActive }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      onSetActive('about');
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
      <div className="mb-8 overflow-hidden rounded-full border-4 border-blue-500 w-40 h-40 sm:w-48 sm:h-48 shadow-lg">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-4xl font-bold">
          AD
        </div>
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        ADITHYA <span className="text-blue-600 dark:text-blue-400">D</span>
      </h1>
      
      <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
        Data Science Student & AI Enthusiast
      </h2>
      
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-10">
        I'm passionate about applying machine learning to solve real-world problems.
        With a strong foundation in Python and data analysis, I'm eager to contribute
        to innovative projects in the field of AI and Data Science.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a 
          href="#contact" 
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Contact Me
        </a>
        <a 
          href="#projects" 
          className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          View My Work
        </a>
      </div>
      
      <div className="flex space-x-6 mb-16">
        <a
          href="https://github.com/D-Adithya?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="GitHub"
        >
          <GitHub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/aadhi-devendran-99967b244"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="animate-bounce bg-white dark:bg-gray-800 p-2 w-10 h-10 ring-1 ring-slate-200 dark:ring-slate-700 shadow-lg rounded-full flex items-center justify-center"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={20} className="text-blue-600 dark:text-blue-400" />
      </button>
    </div>
  );
};

export default Hero;