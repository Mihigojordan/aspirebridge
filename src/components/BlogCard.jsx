import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BlogCard({ blog }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full md:w-1/3 p-4">
      <div 
        className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(`/news-blogs/${blog.id}`)}
      >
        {/* Image Container with Overlay */}
        <div className="relative overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Floating Read Time Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            5 min read
          </div>
          
          {/* Category Tag */}
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Blog
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col justify-between flex-grow relative">
          {/* Title and Description */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
              {blog.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {blog.description}
            </p>
          </div>

          {/* Interactive Elements */}
          <div className="mt-6 flex items-center justify-between">
            {/* Animated Read More Button */}
            <button 
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25 overflow-hidden"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/news-blogs/${blog.id}`);
              }}
            >
              <span className="relative z-10">Read More</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            {/* Interaction Icons */}
            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Border Accent */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;