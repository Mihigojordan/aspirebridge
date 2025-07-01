import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhatWedo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      programs.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, (index + 1) * 300);
      });
    }
  }, [isVisible]);

  const programs = [
    {
      title: "Youth Empowerment Programs",
      items: [
        "Leadership training",
        "Career development & mentorship",
        "Education & Training",
        "Entrepreneurship and skills training",
      ],
    },
    {
      title: "Women's Empowerment Programs",
      items: [
        "Financial literacy & entrepreneurship",
        "Health and wellness",
        "Advocacy and fighting Against Gender-Based Violence",
        "Community project Development"
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(16)].map((_, i) => (
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

      <div className="relative z-10 flex flex-col gap-8 w-[100%] max-w-9xl m-auto p-4 md:p-6">
        
        {/* Header Section */}
        <div className={`flex flex-col items-center gap-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="relative text-center">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              What We Do
            </h1>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AspireBridge Rwanda
            </span> Programs & Services
          </h2>
        </div>

        {/* Programs Section */}
        <div className="flex w-full text-left flex-col gap-8 md:flex-row justify-around items-stretch">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`flex flex-col w-full md:w-1/2 gap-4 transform transition-all duration-800 ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-8 opacity-0 scale-95'
              }`}
            >
              {/* Program Card */}
              <div className="relative group h-full">
                <div className={`absolute -inset-2 bg-gradient-to-r ${
                  index === 0 
                    ? 'from-blue-400 to-purple-400' 
                    : 'from-purple-400 to-indigo-400'
                } rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700`}></div>
                
                <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 h-full flex flex-col">
                  
                  {/* Program Title */}
                  <div className="mb-6">
                    <h2 className={`text-2xl font-bold bg-gradient-to-r ${
                      index === 0 
                        ? 'from-blue-600 to-purple-600' 
                        : 'from-purple-600 to-indigo-600'
                    } bg-clip-text text-transparent leading-tight`}>
                      {program.title}
                    </h2>
                    <div className={`mt-2 w-16 h-0.5 bg-gradient-to-r ${
                      index === 0 
                        ? 'from-blue-500 to-purple-500' 
                        : 'from-purple-500 to-indigo-500'
                    } rounded-full`}></div>
                  </div>

                  {/* Program Items */}
                  <div className="flex flex-col gap-4 flex-grow">
                    {program.items.map((item, idx) => (
                      item && (
                        <div 
                          key={idx} 
                          className="flex items-start gap-6 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group/item"
                        >
                          <div className="relative mt-0.5">
                            <div className={`absolute -inset-1 bg-gradient-to-r ${
                              index === 0 
                                ? 'from-blue-500 to-purple-500' 
                                : 'from-purple-500 to-indigo-500'
                            } rounded-full blur opacity-30 group-hover/item:opacity-50 transition duration-300`}></div>
                            <CheckCircle2 className={`relative ${
                              index === 0 ? 'text-blue-600' : 'text-purple-600'
                            } w-5 h-5 flex-shrink-0 bg-white rounded-full`} />
                          </div>
                          <span className="text-gray-700 text-lg leading-relaxed flex-1">
                            {item}
                          </span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-40"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default WhatWedo;