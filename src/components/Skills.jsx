import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiRedis } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "blue",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-500" />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, level: 95 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, level: 90 }
      ]
    },
    {
      title: "Backend",
      color: "green",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 88 },
        { name: "Python", icon: <FaPython className="text-blue-500" />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 85 }
      ]
    },
    {
      title: "DevOps & Tools",
      color: "purple",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 90 },
        { name: "Docker", icon: <FaDocker className="text-blue-600" />, level: 75 },
        { name: "AWS", icon: <FaAws className="text-orange-400" />, level: 70 },
        { name: "Redis", icon: <SiRedis className="text-red-600" />, level: 75 }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { border: "border-blue-200", bg: "bg-blue-50", text: "text-blue-600", progress: "bg-blue-600" },
      green: { border: "border-green-200", bg: "bg-green-50", text: "text-green-600", progress: "bg-green-600" },
      purple: { border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-600", progress: "bg-purple-600" }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life. 
            I'm always learning and expanding my skill set.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div 
                key={categoryIndex}
                className={`border-2 ${colorClasses.border} ${colorClasses.bg} rounded-xl p-6 hover:shadow-lg transition-shadow duration-300`}
              >
                <h3 className={`text-xl font-bold ${colorClasses.text} mb-6 text-center`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="text-xl">
                            {skill.icon}
                          </div>
                          <span className="font-medium text-gray-900">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${colorClasses.progress} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. Currently exploring GraphQL, Next.js, 
            and cloud-native architectures to stay at the forefront of modern development.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm">
              GraphQL
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm">
              Kubernetes
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm">
              Microservices
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm">
              Machine Learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;