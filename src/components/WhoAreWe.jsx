import React, { useState, useEffect } from 'react';

import Image1 from '../assets/static/about.jpg'
import Image2 from '../assets/static/whoware.jpg'


const WhoAreWe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* About Us Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <div className="lg:w-1/2 space-y-8">
              <div className="relative">
                <h2 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                  About Us
                </h2>
                <div className="absolute -bottom-4 left-0 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
                  <p className="text-gray-800 text-lg leading-relaxed" style={{lineHeight:3}}>
                    At <span className="font-semibold text-blue-600" >AspireBridge Rwanda</span>, we believe that every young person and woman deserves the opportunity to break free from poverty and build a better future by empowering vulnerable youth and women through education, entrepreneurship and sustainable development programs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
                  <img 
                    src={Image1}
                    alt="About Us" 
                    className="w-full h-92 object-cover rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="relative">
                <h2 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                  Who we are?
                </h2>
                <div className="absolute -bottom-4 right-0 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-8 shadow-lg">
                  <p className="text-gray-800 text-lg leading-relaxed" style={{lineHeight:2.5}}>
                    Founded in <span className="font-semibold text-blue-400">2024</span>, <span className="font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AspireBridge Rwanda</span> is a non-profit organization dedicated to reducing poverty by equipping young people and women with the skills, resources and opportunities they need to thrive. We work closely with communities to provide access to vocational training, financial literacy, mentorship and economic opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
                  <img 
                    src={Image2}
                    alt="Who We Are" 
                    className="w-full h-100 object-cover rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default WhoAreWe;