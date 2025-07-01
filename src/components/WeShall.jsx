import React, { useState } from 'react';
import { 
  GraduationCap, 
  DollarSign, 
  Users, 
  UserCheck, 
  Wheat, 
  Shield 
} from 'lucide-react';

const WeShall = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const dataz = [
    {
      text: 'Provide practical vocational training to help women and youth start businesses and secure sustainable income.',
      icon: GraduationCap,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      text: 'Equip them with the knowledge to manage finances and access small business funding.',
      icon: DollarSign,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      text: 'Help young people in accessing the skills to improve their future prospects.',
      icon: Users,
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    },
    {
      text: 'Connect youth with mentors who guide them toward professional and personal success.',
      icon: UserCheck,
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      text: 'Work to create economic opportunities through agricultural and farming programs, cooperatives and social enterprises.',
      icon: Wheat,
      color: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600'
    },
    {
      text: 'Create a society where women and youth can live with dignity, security and equal opportunities with no gender violence.',
      icon: Shield,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    }
  ];

  return (
    <div className="flex justify-center items-center gap-4 flex-col w-[97%] m-auto py-10 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-gray-800">We Shall</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8 px-4 max-w-9xl">
        {dataz.map((item, index) => {
          const IconComponent = item.icon;
          const isHovered = hoveredCard === index;
          
          return (
            <div
              key={index}
              className={`
                relative p-8 flex flex-col justify-between 
                shadow-xl rounded-2xl bg-white 
                hover:shadow-2xl hover:-translate-y-2 
                transition-all duration-300 ease-in-out
                cursor-pointer group overflow-hidden
                ${isHovered ? 'ring-4 ring-blue-200' : ''}
              `}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background gradient overlay */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-10 
                ${item.color} transition-opacity duration-300
              `}></div>
              
              {/* Icon container */}
              <div className={`
                w-16 h-16 ${item.color} ${item.hoverColor} 
                rounded-full flex items-center justify-center 
                mb-6 transition-all duration-300 group-hover:scale-110
                shadow-lg
              `}>
                <IconComponent 
                  size={28} 
                  className="text-white transition-transform duration-300 group-hover:rotate-12" 
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-700 text-base leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
              
              {/* Hover indicator */}
              <div className={`
                absolute bottom-0 left-0 right-0 h-1 
                ${item.color} transform scale-x-0 group-hover:scale-x-100
                transition-transform duration-300 origin-left
              `}></div>
              
              {/* Card number */}
              <div className={`
                absolute top-4 right-4 w-8 h-8 
                ${item.color} rounded-full flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              `}>
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Optional call-to-action section */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          Together, we can create lasting change and build a brighter future for women and youth in our communities.
        </p>
        <button className="
          bg-gradient-to-r from-blue-500 to-purple-600 
          hover:from-blue-600 hover:to-purple-700 
          text-white font-semibold py-3 px-8 rounded-full 
          transition-all duration-300 transform hover:scale-105 hover:shadow-lg
        ">
          Join Our Mission
        </button>
      </div>
    </div>
  );
};

export default WeShall;