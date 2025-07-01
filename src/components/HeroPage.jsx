import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from '../assets/static/hero.jpg';

import Image2 from '../assets/static/women.jpg';
import Image3 from '../assets/static/image3.jpg';
// Sample images - replace with your actual images
const slides = [
  {
    id: 1,
    image:Image1,
    title: "AspireBridge Rwanda",
    subtitle: "Empowered By Change",
    description: "Building bridges to a brighter future through education and community development"
  },
  {
    id: 2,
    image:Image2,
    title: "Community Impact",
    subtitle: "Creating Lasting Change",
    description: "Transforming lives through innovative programs and sustainable development initiatives"
  },
  {
    id: 3,
    image:Image3,
    title: "Future Leaders",
    subtitle: "Inspiring Excellence",
    description: "Nurturing tomorrow's leaders through mentorship and educational opportunities"
  }
];

function HeroPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      {/* Slideshow Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 transform translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 transform -translate-x-full'
                  : 'opacity-0 transform translate-x-full'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dynamic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-black/90"></div>
            
            {/* Animated Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-5">
              <div className="text-center md:w-[80%] text-white">
                <div className="animate-fadeIn">
                  <p className="text-sm md:text-3xl mb-6 font-light opacity-90">
                    welcome to{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                      AspireBridge Rwanda
                    </span>
                  </p>
                  
                  <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-slideUp">
                    {slide.title}
                  </h1>
                  
                  <p className="text-lg md:text-4xl font-light mb-4 leading-relaxed animate-slideUp delay-200">
                    {slide.subtitle}
                  </p>
                  
                  <p className="text-sm md:text-xl font-light mb-8 opacity-80 max-w-3xl mx-auto animate-slideUp delay-300">
                    {slide.description}
                  </p>
                  
                  <div className="button-section space-x-4 animate-slideUp delay-500">
                    <button 
                      onClick={() => window.location.href = '/about'}
                      className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                    >
                      <span className="relative z-10">Explore More</span>
                    </button>
                    <button 
                      onClick={() => window.location.href = '/news-blogs'}
                      className="group border-2 border-gradient bg-gradient-to-r from-transparent to-transparent hover:from-blue-500/10 hover:to-purple-600/10 border-blue-400 hover:border-purple-400 text-white font-bold cursor-pointer py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      View News And Blogs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}

export default HeroPage;