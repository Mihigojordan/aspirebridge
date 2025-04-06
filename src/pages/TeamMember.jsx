import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import image1 from "../assets/fabien.jpg";
import image from '../assets/image.avif'


// React Icons
import { FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";
import GetInvolved from "../components/GetInvolved";

const teamMembers = [
  {
    id: 1,
    username: "Mr. Sibomana Fabien",
    role: "Founder of AspireBridge Rwanda",
    img:image1,
  },

];

const TeamMembers = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Header
        title="Team Member"
        linkTitle="Team"
        linkHref="/team"
        backgroundImage={image}
      />
      <div className="flex py-14 w-full justify-center gap-5 items-center flex-wrap">
        {teamMembers.map((member, key) => (
          <div
            key={key}
            className="flex-auto xl:flex-initial w-full gap-2 flex-col md:w-1/4 bg-gray-200 p-10 rounded-xl flex justify-center items-center"
          >
            <img
              src={member.img}
              className="w-3/3 object-cover rounded-md aspect-auto"
              alt={member.username}
            />
            <Link to={`/team/member/${member.id}`}>
              <h1 className="font-semibold text-xl capitalize">
                {member.username}
              </h1>
            </Link>
            <p className="text-gray-600 text-sm uppercase">{member.role}</p>
            <div className="flex w-full items-center justify-center gap-3 mt-3">
              <div className="p-2 rounded-full bg-white text-green-500">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div className="p-2 rounded-full bg-white text-blue-400">
                <FaTwitter className="w-5 h-5" />
              </div>
              <div className="p-2 rounded-full bg-white text-pink-500">
                <FaInstagram className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <GetInvolved />
    </div>
  );
};

export default TeamMembers;
