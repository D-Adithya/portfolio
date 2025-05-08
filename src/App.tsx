import React, { useState } from 'react';
import { Github as GitHub, Linkedin, Mail, MapPin, Phone, Calendar, Code, Database, BarChart2, Book, Award, Briefcase, User, ChevronRight } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home" className="min-h-screen flex items-center">
          <Hero onSetActive={handleSetActive} />
        </section>
        
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <About />
        </section>
        
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
          <Skills />
        </section>
        
        <section id="education" className="py-20 bg-white dark:bg-gray-800">
          <Education />
        </section>
        
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
          <Experience />
        </section>
        
        <section id="projects" className="py-20 bg-white dark:bg-gray-800">
          <Projects />
        </section>
        
        <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
          <Certifications />
        </section>
        
        <section id="contact" className="py-20 bg-white dark:bg-gray-800">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;