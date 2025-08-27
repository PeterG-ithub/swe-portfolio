import React from 'react';
import { FaCode, FaGraduationCap, FaLightbulb, FaUsers } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaCode className="text-blue-600 text-2xl" />,
      title: "Clean Code Advocate",
      description: "I believe in writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
      title: "Problem Solver",
      description: "I thrive on breaking down complex problems into elegant, efficient solutions."
    },
    {
      icon: <FaUsers className="text-green-600 text-2xl" />,
      title: "Team Player",
      description: "I enjoy collaborating with cross-functional teams to deliver exceptional user experiences."
    },
    {
      icon: <FaGraduationCap className="text-purple-600 text-2xl" />,
      title: "Lifelong Learner",
      description: "I stay current with the latest technologies and best practices in software development."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software engineer with a love for creating innovative solutions 
            and building applications that make a real impact on users' lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              My journey in software engineering began with a curiosity about how things work 
              under the hood. What started as tinkering with code has evolved into a passion 
              for crafting robust, user-centric applications.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I specialize in full-stack development with a focus on modern web technologies. 
              I love the entire process - from conceptualizing ideas to deploying scalable 
              solutions that solve real-world problems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Problem Solving
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Team Leadership
              </span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Innovation
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">P</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Peter</h4>
                <p className="text-gray-600">Software Engineer</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="text-gray-900 font-medium">California, US</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience</span>
                  <span className="text-gray-900 font-medium">3+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Availability</span>
                  <span className="text-green-600 font-medium">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;