import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/static/logo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Values', href: '/values' },
    { name: 'Our Team', href: '/team' },
    { name: 'News & Blogs', href: '/news-blogs' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 text-sm">
        <div className="max-w-9xl px-8 mx-auto flex items-center justify-between">
          
          {/* Left Side - Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300">
              <Phone size={14} />
              <span>+(250) 791 166 097</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300">
              <Mail size={14} />
              <span>info@aspirebridgerwanda.org</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300">
              <MapPin size={14} />
              <span>Kigali, Rwanda</span>
            </div>
          </div>

          {/* Mobile - Simplified Contact */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+250 123 456 789</span>
            </div>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex items-center space-x-4">
            <span className="hidden lg:block text-xs opacity-90">Follow us:</span>
            <div className="flex items-center space-x-3">
              <a href='https://www.facebook.com/people/AspireBridge-Rwanda/61576748455206/' className="hover:text-blue-200 hover:scale-110 transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a  href='https://x.com/AspirebridgeR'
              className="hover:text-blue-200 hover:scale-110 transition-all duration-300">
                <Twitter size={16} />
              </a>
              <a href='https://www.instagram.com/aspirebridgerwanda/' className="hover:text-blue-200 hover:scale-110 transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href='https://www.linkedin.com/company/aspirebridgerwanda' className="hover:text-blue-200 hover:scale-110 transition-all duration-300">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
            : 'bg-white/90 backdrop-blur-sm shadow-md'
        }`}
      >
        <div className="max-w-9xl mx-auto px-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-26">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 group">
              <NavLink to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 lg:w-30 lg:h-18  rounded-xl flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                 <img src={Logo} alt="" className='h-24 w-5xl' />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AspireBridge
                  </h1>
                  <p className="text-xs lg:text-sm text-gray-500 font-medium">Rwanda</p>
                </div>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  )}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
                </NavLink>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              
              {/* Get In Touch Button - Desktop */}
              <NavLink 
                to="/contact" 
                className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group"
              >
                <span>Get In Touch</span>
                <div className="w-2 h-2 bg-white/70 rounded-full group-hover:bg-white transition-all duration-300"></div>
              </NavLink>

              {/* Mobile CTA - Smaller */}
              <NavLink 
                to="/contact" 
                className="lg:hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
              >
                Contact
              </NavLink>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="lg:hidden relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    size={24} 
                    className={`absolute inset-0 text-gray-700 transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                    }`} 
                  />
                  <X 
                    size={24} 
                    className={`absolute inset-0 text-gray-700 transition-all duration-300 ${
                      isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-lg border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={handleNavClick}
                    className={({ isActive }) => `w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? 'slideInFromTop 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <span className="font-medium">{item.name}</span>
                    {location.pathname === item.href && (
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    )}
                  </NavLink>
                ))}
              </div>
              
              {/* Mobile CTA Section */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <NavLink 
                  to="/contact" 
                  onClick={handleNavClick}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Get In Touch</span>
                  <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes slideInFromTop {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .group:hover .group-hover\\:animate-bounce {
            animation: bounce 1s infinite;
          }
        `}</style>
      </nav>
    </>
  );
}

export default Navbar;