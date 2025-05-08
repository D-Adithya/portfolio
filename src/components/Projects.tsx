import React, { useState } from 'react';
import { Code, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  outcome: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  technologies,
  challenges,
  solutions,
  outcome
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-modal="true" role="dialog">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full mx-auto shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white dark:bg-gray-800 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="px-6 pt-10 pb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
            
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Challenges</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                  {challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Solutions</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                  {solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Outcome</h4>
              <p className="text-gray-700 dark:text-gray-300">{outcome}</p>
            </div>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const projectData = {
    title: "Gesture Enabled Pong Game using Computer Vision",
    description: "Developed an interactive version of the classic Pong game that uses computer vision to detect hand gestures, allowing players to control the game paddles with hand movements instead of keyboard or mouse inputs.",
    technologies: ["Python", "OpenCV", "MediaPipe", "Pygame", "NumPy"],
    challenges: [
      "Accurately detecting hand gestures in different lighting conditions",
      "Minimizing input lag between gesture detection and game response",
      "Creating smooth tracking of hand movements",
      "Optimizing performance for real-time gameplay"
    ],
    solutions: [
      "Implemented MediaPipe's hand tracking solution for robust gesture recognition",
      "Used multi-threading to separate vision processing from game rendering",
      "Applied motion smoothing algorithms to prevent jerky paddle movement",
      "Optimized frame processing to maintain consistent frame rates"
    ],
    outcome: "Successfully created an engaging gesture-controlled game that demonstrates practical application of computer vision technology. The project effectively combines AI concepts with interactive gaming, showcasing both technical skills and creative implementation."
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
        <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Showcasing my technical skills and problem-solving abilities
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-2">
          <div className="p-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-xl">
                  <Code size={80} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {projectData.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Chengalpattu | Jan - Mar 2024
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {projectData.description.substring(0, 150)}...
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projectData.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={openModal}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>View Details</span>
                  <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        {...projectData}
      />
    </div>
  );
};

export default Projects;