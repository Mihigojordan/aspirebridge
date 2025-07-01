import React from "react";
import defaultBackground from '../assets/static/header.jpg';

const Header = ({ title, linkTitle, linkHref }) => {
  return (
    <div
      className="relative w-full h-60 flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: `url(${defaultBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px" // Added for better proportions
      }}
    >
      {/* Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-black/90"></div>
            
      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <div className="bg-white/20 backdrop-blur-sm inline-flex items-center px-4 py-2 rounded-full">
          <a 
            href={linkHref} 
            className="flex items-center text-blue-100 hover:text-white transition-colors duration-300"
          >
            <span className="hover:underline">Home</span>
            <span className="mx-2 text-blue-300">&gt;</span>
            <span className="hover:underline font-medium">{linkTitle}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;