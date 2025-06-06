import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagram, FaLinkedin } from 'react-icons/fa';
import SubscribeForm from './SubscribeForm';

function Footer() {
  return (
    <div className='bg-[#f0f6fa] pt-10'>

    <footer className=" text-[#212529] py-12 px-6 md:px-12 text-base">
      <div className="flex flex-wrap  lg:flex lg:justify-between g">
        
        {/* Section 1: Logo & Thank You Message */}
            
        <div className="w-full lg:w-1/4 ">

                   
          <h2 className="text-2xl font-bold mb-2 leading-10">AspireBridge Rwanda</h2>
          <p className='pb-4'>
                     At AspireBridge Rwanda, we are driven by a simple yet powerful belief: everyone deserves the opportunity to live with dignity, hope and purpose.
                     </p>
          <p>Thank you for visiting our site. We appreciate your support in empowering youth and women. </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="w-full lg:w-1/5" style={{lineHeight:"2"}}>
          <h3 className="text-xl  font-semibold mb-3" >Quick Links</h3>
          <ul className="space-y-2"> 
            <li><Link to="/" className="hover:text-blue-500 text-sm ml-3" style={{letterSpacing:"5px"}}>Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 text-sm ml-3" style={{letterSpacing:"5px"}}>About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-500 text-sm ml-3" style={{letterSpacing:"5px"}}> Our Gallery</Link></li>
            <li><Link to="/news" className="hover:text-blue-500 text-sm ml-3" style={{letterSpacing:"5px"}} >News && Updates</Link></li>

          </ul>
        </div>

           {/* Section 2: Quick Links */}
           <div className="w-full lg:w-1/5" style={{lineHeight:"2"}}>
          <h3 className="text-xl  font-semibold mb-3" >Support</h3>
          <ul className="space-y-2"> 
            <li><Link to="/" className="hover:text-blue-500 text-sm ml-3" style={{letterSpacing:"5px"}}>Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 text-sm ml-3" style={{letterSpacing:"5px"}}>Contact Us</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-500 text-sm ml-3" style={{letterSpacing:"5px"}}>Help && Faqs</Link></li>
            <li><Link to="/news" className="hover:text-blue-500 text-sm ml-3" style={{letterSpacing:"5px"}} >Terms && Conditions</Link></li>

          </ul>
        </div>

     

        {/* Section 4: Latest Tweet & Social Media */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-xl  font-semibold mb-2">Latest Tweet</h3>
          <p className="text-sm italic mb-2 leading-6">
  Stay connected and never miss an update!<br />
  Follow us on social media for our latest projects, news, and inspiring stories.<br />
  Get exclusive behind-the-scenes content and special announcements.<br />

</p>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/people/AspireBridge-Rwanda/61576748455206" className="text-gray-500 hover:text-blue-700"><FaFacebook size={20} /></a>
            <a href="https://www.linkedin.com/in/aspirebridge-rwanda-999389367" className="text-gray-500 hover:text-blue-700"><FaInstagram size={20} /></a>
            <a href="https://www.instagram.com/aspirebridgerwanda" className="text-gray-500 hover:text-blue-700"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>
    
    </footer>
    <footer className="text-center text-sm text-gray-500 p-4 bg-blue-300">
  &copy; {new Date().getFullYear()} Aspirebridgerwanda. All rights reserved.
</footer>
    </div>
  );
}

export default Footer;