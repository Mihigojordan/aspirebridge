import React, { useState, useEffect, useRef } from 'react';
import { Users, TrendingUp, Shield, GraduationCap, ArrowRight, Sparkles, Heart, Target } from 'lucide-react';
import {Link} from 'react-router-dom'
// Sample images - replace with your actual images
import visionImage1 from '../assets/static/wfarmer.jpg'
import visionImage2 from '../assets/static/focus.jpg'

// Custom hook for intersection observer
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView];
};

// Animated VisionContent Component
function VisionContent({ img, heading, paragraph }) {
  const [ref, isInView] = useInView(0.2);

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Image Section */}
        <div className={`w-full lg:w-1/2 relative group transition-all duration-700 delay-200 ${
          isInView ? 'scale-100 rotate-0' : 'scale-95 rotate-2'
        }`}>
          {/* Decorative rings */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          
          {/* Main image container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
            <img 
              src={img} 
              alt="Vision" 
              className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-110 transition-all duration-700"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20 group-hover:from-blue-900/30 group-hover:to-purple-900/30 transition-all duration-500"></div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
              <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            </div>
            
            <div className="absolute bottom-6 left-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`w-full lg:w-1/2 space-y-6 transition-all duration-1000 delay-400 ${
          isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
AspireBridge Rwanda</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {heading}
              </span>
            </h2>
          </div>
          
          <div className="relative">
            <p className="text-lg text-gray-600 leading-relaxed" style={{lineHeight:2}}>
              {paragraph}
            </p>
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          <div className="flex items-center space-x-4 pt-4">
            <Link to='/about' className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Animated FocusArea Component
function FocusArea({ img, heading, headings, listItems }) {
  const [ref, isInView] = useInView(0.2);
  const [activeItem, setActiveItem] = useState(0);

  const focusIcons = [
    { icon: Users, color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { icon: Shield, color: 'from-red-500 to-orange-500' },
    { icon: GraduationCap, color: 'from-green-500 to-emerald-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % listItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [listItems.length]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-300 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-purple-300 rounded-full"></div>
      </div>
      
      <div className={`flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 relative z-10 transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Image Section */}
        <div className={`w-full lg:w-1/2 relative group transition-all duration-700 delay-200 ${
          isInView ? 'scale-100 rotate-0' : 'scale-95 -rotate-2'
        }`}>
          {/* Animated border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 animate-pulse"></div>
          
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src={img} 
              alt="Focus Areas" 
              className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-all duration-700"
            />
            
            {/* Animated overlay */}
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-900/10 to-purple-900/30"></div>
            
            {/* Floating target icon */}
            <div className="absolute top-6 left-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Target className="w-8 h-8 text-blue-600 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 delay-400 ${
          isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
              <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">{heading}</span>
            </div>
            
            <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {headings}
              </span>
            </h3>
          </div>
          
          {/* Animated Focus Areas */}
          <div className="space-y-4">
            {listItems.map((item, index) => {
              const IconComponent = focusIcons[index]?.icon || Target;
              const iconColor = focusIcons[index]?.color || 'from-gray-500 to-gray-600';
              
              return (
                <div
                  key={index}
                  className={`group flex items-center space-x-4 p-4 rounded-2xl transition-all duration-500 cursor-pointer ${
                    activeItem === index 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg scale-105' 
                      : 'hover:bg-gray-50 hover:scale-102'
                  }`}
                  onClick={() => setActiveItem(index)}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${iconColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 ${
                    activeItem === index ? 'animate-pulse' : ''
                  }`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`font-semibold text-lg transition-all duration-300 ${
                      activeItem === index ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'
                    }`}>
                      {item}
                    </h4>
                  </div>
                  
                  <div className={`transition-all duration-300 ${
                    activeItem === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main VisionSection Component
function VisionSection() {
  return (
    <div className="relative py-12 sm:px-6  bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/3 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-30 animate-float-delayed"></div>
      </div>
      
      <div className="max-w-9xl p-4 mx-auto space-y-24">
        <VisionContent
          img={visionImage1}
          heading="Empowering Youth & Women for a Brighter Future"
          paragraph="At AspireBridge Rwanda we are committed to reducing poverty by equipping Young people and women with the skills, resources and opportunities they Need to thrive. Through education, entrepreneurship and advocacy, we are Bridging the gap between potential and success."
        />
        
        <FocusArea
          img={visionImage2}
          heading="AspireBridge Rwanda"
          headings="our Focus area"
          listItems={[
            "Youth Empowerment",
            "Women's Economic Empowerment", 
            "Advocacy and fighting Against Gender-Based Violence",
            "Education & Training",
          ]}
        />
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}

export default VisionSection;