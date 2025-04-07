import React from "react";
import defaultBackground from '../assets/women.jpg';

const Header = ({ title, linkTitle, linkHref}) => {
  return (
    <div
      className="relative w-full h-68 flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: `url(${defaultBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <a href={linkHref} className="text-blue-400 hover:underline">
          Home &gt; {linkTitle}
        </a>
      </div>
    </div>
  );
};

export default Header;
