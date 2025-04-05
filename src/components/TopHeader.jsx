import { BiPhone } from 'react-icons/bi';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebookSquare } from "react-icons/fa";
import { LiaLinkedin } from 'react-icons/lia';
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
          <div className="my-2 md:my-0">|</div>
          <div className="flex items-center gap-1">
            <BiPhone />
            <a href="tel:123-456-7890" className="text-gray-600 ml-2 hover:text-[#E03C33]">+(250) 791 166 097</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-lg text-blue-500 mt-2 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-[#E03C33] text-lg"><FaFacebookSquare /></a>
          <a href="#" className="text-gray-600 hover:text-[#E03C33] text-md"><BsTwitterX /></a>
          <a href="#" className="text-gray-600 hover:text-[#E03C33]"><LiaLinkedin /></a>
          <a href="#" className="text-gray-600 hover:text-[#E03C33]"><BsInstagram /></a>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
