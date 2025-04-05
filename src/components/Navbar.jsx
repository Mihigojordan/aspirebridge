import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import logo from '../assets/logo.jpg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md " style={{position:"sticky",top:"0",zIndex:"100"}}>
        <div className="flex items-center justify-between px-5 md:px-10 py-4">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Logo" className="w-28 h-16" style={{objectFit:"cover"}}/>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-200'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
              >
                About
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news-blogs"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
              >
                News & Blogs
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Get In Touch Button */}
          <div className="flex items-center gap-4 hidden md:flex">
  <button className="cursor-pointer border-2 border-blue-500 bg-white text-md text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out rounded-sm py-2 px-4">
    Get In Touch
  </button>
</div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <BiX size={30} className="text-blue-500" /> : <BiMenuAltRight size={30} className="text-blue-500" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg px-5 py-3`}>
          <ul className="flex flex-col gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news-blogs"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
              >
                News & Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
