import { BiPhone } from 'react-icons/bi';
import { FaFacebook,FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function TopHeader() {
  return (
    <div className="w-full bg-white py-3 px-5 md:px-10 border-b border-gray-300 pb-4">
      {/* Contact Info and Links */}
      <div className="text-sm text-gray-600 space-y-2 md:space-y-0 md:flex md:justify-between md:items-center">
        <div className="flex flex-col md:flex-row md:gap-6">
          <div className="flex items-center gap-1">
            <MdEmail />
            <a href="mailto:ndismail007@gmail.com" className="text-gray-600 ml-2 hover:text-[#E03C33]">info@aspirebridgerwanda.org</a>
          </div>
          <div className="my-2 md:my-0 hidden md:block">|</div>
          <div className="flex items-center gap-1">
            <BiPhone />
            <a href="tel:123-456-7890" className="text-gray-600 ml-2 hover:text-[#E03C33]">+(250) 791 166 097</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-lg text-blue-500 mt-2 md:mt-0">
               <a href="https://www.facebook.com/people/AspireBridge-Rwanda/61576748455206" className="text-gray-500 hover:text-blue-700"><FaFacebook size={20} /></a>
               <a href="https://www.linkedin.com/in/aspirebridge-rwanda-999389367" className="text-gray-500 hover:text-blue-700"><FaInstagram size={20} /></a>
               <a href="https://www.instagram.com/aspirebridgerwanda" className="text-gray-500 hover:text-blue-700"><FaLinkedin size={20} /></a>
               </div>
      </div>
    </div>
  );
}

export default TopHeader;
