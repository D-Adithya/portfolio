import React from 'react';
import { Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">ADITHYA D</h2>
            <p className="mt-2">Data Science Student & AI Enthusiast</p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-6 md:mb-0">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-blue-400" />
              <span>+91 8870879716</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-blue-400" />
              <span>aadhidevendran@gmail.com</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/D-Adithya?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aadhi-devendran-99967b244"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <nav className="flex flex-wrap justify-center sm:justify-start space-x-4 mb-4 sm:mb-0">
            {['Home', 'About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Adithya D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;