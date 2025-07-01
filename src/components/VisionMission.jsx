import React, { useState, useEffect } from 'react';
import Image from '../assets/static/mission.jpg'

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden py-16">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`
            }}
          ></div>
        ))}
      </div>

      <div className={`relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="block md:flex justify-between gap-8 items-center bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden w-[98%] max-w-9xl m-auto p-6 md:p-6 border border-gray-100">
          
          {/* Content Section */}
          <div className="flex flex-col w-full lg:w-6/12 h-full justify-around gap-8">
            
            {/* Vision Section */}
            <div className={`flex flex-col gap-4 transform transition-all duration-800 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative">
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                  Our Vision
                </h1>
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                  <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
                    A Society where <span className="font-semibold text-blue-600">youth and women</span> people in <span className="font-semibold text-purple-600">Rwanda</span> have the skills and the tools to escape poverty.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className={`flex flex-col gap-4 transform transition-all duration-800 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative">
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  Our Mission
                </h1>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                  <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
                    To empower <span className="font-semibold text-purple-600">youth and women</span> by providing education, entrepreneurship skills, advocacy and economic opportunities that foster <span className="font-semibold text-blue-600">independence</span> and long-term <span className="font-semibold text-indigo-600">financial stability</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className={`h-[460px] md:w-[45%] mt-8 md:mt-0 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative group h-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-2 backdrop-blur-sm border border-white/30 h-full">
                <img 
                  src={Image} 
                  className="w-full h-full object-cover rounded-2xl shadow-xl transform hover:scale-[1.02] transition duration-500" 
                  alt="Mission"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-50"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default VisionMission;