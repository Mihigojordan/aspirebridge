import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../assets/hero.jpg'; // Make sure to replace this with the correct path to your image

function HeroPage() {
  return (
    <div 
      className="relative w-full h-[550px] bg-cover bg-center text-white flex items-center justify-center px-5"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay with reduced opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="relative z-10 text-center  md:w-[80%]" style={{lineHeight:"2"}}>
        <p  className="text-sm md:text-3xl  mb-10 font-light" >welcome to  <span className="text-blue-500">AspireBridge Rwanda</span> </p>
        <h1 className="text-2xl md:text-7xl font-bold mb-4 leading-18">
        AspireBridge Rwanda
        </h1>
        <p className="text-md md:text-4xl font-light mb-8" style={{lineHeight:"2"}}>
          Empowered By Change
    </p>
        <div className="button-section space-x-4">
          <Link to="/about">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              Explore More
            </button>
          </Link>
          <Link to="/">
            <button className=" border-3 border-blue-500 hover:bg-blue-500 hover:border-0 text-white font-bold py-2 px-6 rounded">
              View Our Gallery
            </button>
          </Link>
        </div>
      </div>
   
    </div>
  );
}

export default HeroPage;
