import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="text-center z-10 px-4">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Hi, I'm <span className="text-yellow-300">Peter</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-100 mb-6 animate-fade-in-delay">
            Software Engineer
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-delay-2">
          I build exceptional digital experiences with clean code and innovative solutions. 
          Passionate about creating software that makes a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Learn More
          </button>
          <a 
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
        
        <div 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        >
          <FaChevronDown className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300" />
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white rounded-full opacity-10 animate-float-delay"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-yellow-400 rounded-full opacity-15 animate-float-delay-2"></div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s both;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 6s ease-in-out infinite 2s;
        }
        
        .animate-float-delay-2 {
          animation: float 6s ease-in-out infinite 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;