import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Logo from '../assets/static/logo.png'

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Gallery", path: "/gallery" },
    { name: "News & Updates", path: "/news" }
  ];

  const supportLinks = [
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/about" },
    { name: "Our Gallery", path: "/gallery" },
    { name: "News & Updates", path: "/news" }
  ];

  const contactInfo = [
    { icon: <MdPhone className="mr-2" />, text: "+(250) 791 166 097" },
    { icon: <MdEmail className="mr-2" />, text: "info@aspirebridgerwanda.org" },
    { icon: <MdLocationOn className="mr-2" />, text: "Kigali, Rwanda" }
  ];

  const socialLinks = [
    { icon: <FaFacebook size={18} />, url: "https://www.facebook.com/people/AspireBridge-Rwanda/61576748455206" },
    { icon: <FaTwitter size={18} />, url: "https://x.com/AspirebridgeR" },
    { icon: <FaInstagram size={18} />, url: "https://www.instagram.com/aspirebridgerwanda" },
    { icon: <FaLinkedin size={18} />, url: "https://www.linkedin.com/company/aspirebridgerwanda" },

  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100">
      <footer className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* About Section */}
          <div className="space-y-4">
          
            {/* Logo Section */}
            <div className="flex-shrink-0 group">
              <Link to="/" className="flex items-center space-x-3">
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
              </Link>
            </div>
            <p className="text-gray-600">
              Empowering youth and women to live with dignity, hope, and purpose through education and opportunity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Active Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Stay Active</h3>
            
            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            
            {/* Social Icons */}
            <div className="pt-4">
              <p className="text-gray-600 mb-3">
                Follow us on social media:
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-3 mb-3 mt-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} AspireBridge Rwanda. All rights reserved.
          </p>
        
        </div>
      </footer>
    </div>
  );
}

export default Footer;