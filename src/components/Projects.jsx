import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "fullstack",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" /> }
      ],
      features: ["Payment Integration", "Real-time Updates", "Admin Dashboard", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with drag-and-drop functionality, team collaboration, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "frontend",
      technologies: [
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" /> }
      ],
      features: ["Drag & Drop", "Real-time Collaboration", "Progress Tracking", "Team Management"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Analytics API",
      description: "RESTful API that aggregates weather data from multiple sources with caching, rate limiting, and comprehensive documentation.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "backend",
      technologies: [
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> }
      ],
      features: ["RESTful API", "Data Caching", "Rate Limiting", "API Documentation"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat application with rooms, file sharing, message encryption, and user presence indicators.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "fullstack",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> }
      ],
      features: ["Real-time Messaging", "File Sharing", "Message Encryption", "User Presence"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Dashboard",
      description: "Interactive dashboard for tracking investment portfolios with real-time stock data, charts, and performance analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "frontend",
      technologies: [
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" /> }
      ],
      features: ["Real-time Data", "Interactive Charts", "Performance Analytics", "Portfolio Tracking"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Microservices Architecture",
      description: "Scalable microservices system with Docker containerization, API gateway, and service discovery.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "backend",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> }
      ],
      features: ["Microservices", "Docker Containers", "API Gateway", "Service Discovery"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here's a showcase of my recent work. Each project represents a unique challenge 
            and demonstrates different aspects of my technical expertise.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.category === 'fullstack' ? 'bg-purple-100 text-purple-800' :
                    project.category === 'frontend' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded text-xs">
                      {tech.icon}
                      <span className="text-gray-700">{tech.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                  >
                    <FaExternalLinkAlt className="inline mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm font-medium"
                  >
                    <FaGithub className="inline mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <a 
            href="https://github.com/peter" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            <FaGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;