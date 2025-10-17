import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  // Fallback in case projects are missing
  const projects = portfolioData.projects || [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS.',
      techStack: ['React', 'Tailwind CSS', 'JavaScript'],
      githubLink: '#',
      liveDemo: '#',
      image: 'https://via.placeholder.com/400x300', // placeholder image
    },
    {
      id: 2,
      title: 'E-commerce App',
      description: 'A full-stack e-commerce app using MERN stack with payment integration.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
      githubLink: '#',
      liveDemo: '#',
      image: 'https://via.placeholder.com/400x300',
    },
    {
      id: 3,
      title: 'Chat Application',
      description: 'A real-time chat application using WebSockets and Node.js.',
      techStack: ['Node.js', 'Socket.io', 'React'],
      githubLink: '#',
      liveDemo: '#',
      image: 'https://via.placeholder.com/400x300',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Some of the projects I have built, showcasing my skills in frontend and backend development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 animate-fadeIn"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-sm px-3 py-1 rounded-full ${
                        tech.toLowerCase().includes('react') ? 'bg-blue-100 text-blue-800' :
                        tech.toLowerCase().includes('node') ? 'bg-green-100 text-green-800' :
                        tech.toLowerCase().includes('mongodb') ? 'bg-green-50 text-green-700' :
                        tech.toLowerCase().includes('express') ? 'bg-gray-100 text-gray-800' :
                        tech.toLowerCase().includes('tailwind') ? 'bg-teal-100 text-teal-800' :
                        'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
