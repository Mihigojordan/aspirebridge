import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image1 from '../assets/static/value2.jpg'
import Image2 from '../assets/static/values1.jpg'
const OurValues = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      values.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, index * 150);
      });
    }
  }, [isVisible]);

  const values = [
    {
      title: 'Empowerment',
      description: 'We believe in equipping people with the skills and confidence to create change in their own lives.',
    },
    {
      title: 'Sustainability',
      description: 'We focus on long-term solutions that break the cycle of poverty.',
    },
    {
      title: 'Collaboration',
      description: 'We work with local and international partners to maximize impact.',
    },
    {
      title: 'Integrity',
      description: 'We uphold transparency and accountability in all our initiatives.',
    },
    {
      title: 'Compassion',
      description: 'We are driven by a deep commitment to uplifting vulnerable populations.',
    },
    {
      title: 'Transparency',
      description: 'We operate with openness and honesty, ensuring all our actions and decisions are accountable.',
    },
    {
      title: 'Equity and inclusion',
      description: 'We are committed to fairness and equal opportunities for all, regardless of gender, background, disability or social status.',
    },
  ];

  return (
    <div className="relative overflow-hidden py-16">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col w-[100%] max-w-9xl m-auto lg:flex-row-reverse py-10 gap-8 justify-center items-center">
        
        {/* Content Section */}
        <div className={`flex flex-col w-full lg:w-[55%] px-4 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          
          {/* Header */}
          <div className="relative mb-8">
            <h1 className="text-4xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Our Values
            </h1>
            <div className="absolute -bottom-3 left-0 w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Values Container */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-700"></div>
            <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex flex-col gap-4">
                {values.map((val, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start text-gray-800 p-3 rounded-lg hover:bg-gray-50 transition-all duration-500 ${
                      visibleItems.includes(index) 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <div className="relative mr-4 mt-0.5">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30"></div>
                      <CheckCircle2 className="relative text-blue-600 w-6 h-6 flex-shrink-0 bg-white rounded-full" />
                    </div>
                    <span className="flex-1 leading-relaxed">
                      <span className="text-lg font-semibold text-blue-700 mr-1">
                        {val.title}:
                      </span>
                      <span className="text-gray-700">
                        {val.description}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className={`w-full lg:w-[48%] ml-4 h-full transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="flex flex-col gap-4 h-full">
            
            {/* First Image Block */}
            <div className="relative group flex-1">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-2 backdrop-blur-sm border border-white/30 h-[400px] mt-5">
                <img
                  src={Image1}
                  alt="Our Values - Empowerment"
                  className="w-full h-full min-h-[100px] object-cover rounded-xl shadow-xl transform hover:scale-[1.02] transition duration-500"
                />
              </div>
            </div>

            {/* Second Image Block */}
            <div className="relative group flex-1">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500 animate-pulse delay-500"></div>
              <div className="relative bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl p-2 backdrop-blur-sm border border-white/30 h-[350px]">
                <img
                
                  src={Image2}
                  alt="Our Values - Community"
                  className="w-full h-full min-h-[200px] object-cover rounded-xl shadow-xl transform hover:scale-[1.02] transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-40"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default OurValues;