import React from "react";
import casues1 from "../assets/causes-1.png";
import casues2 from "../assets/causes-2.png";
import casues3 from "../assets/causes-3.png";

const donations = [
  {
    category: "Food & water",
    goal: 10000,
    progress: 85,
    title: "Collect fund for drinking water & healthy food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    date: "20 Dec, 2021",
    admin: "Admin",
    image: casues1,
    bgColor: "bg-red-500",
  },
  {
    category: "Education",
    goal: 45000,
    progress: 45,
    title: "Give children a good education & better life",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    date: "20 Dec, 2021",
    admin: "Admin",
    image: casues2,
    bgColor: "bg-yellow-500",
  },
  {
    category: "Home & Shelter",
    goal: 14000,
    progress: 55,
    title: "Collect fund for drinking water & healthy food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    date: "20 Dec, 2021",
    admin: "Admin",
    image: casues3,
    bgColor: "bg-red-600",
  },
];

const DonationCard = ({
  category,
  goal,
  progress,
  title,
  description,
  date,
  admin,
  image,
  bgColor,
}) => {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm">
        {/* Image & Category */}
        <div className="relative h-[450px]">
          <img src={image} alt={title} className="w-full h-56 object-cover transition-transform duration-300 ease-out hover:scale-110 hover:rotate-5" />
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-sm text-white rounded-md ${bgColor}`}
          >
            {category}
          </span>


        <div className="px-4 py-15 ">
          <div className="bg-gray-100 absolute w-[90%] bottom-49 bg-opacity-90 py-1 px-3 rounded-lg flex flex-col justify-between items-center shadow-md">
            <div className="flex justify-between w-full">
              <span className="text-gray-700 font-semibold">
                Goal:{" "}
                <span className="text-black">${goal.toLocaleString()}</span>
              </span>
              <span className="text-black font-semibold">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mt-2">{description}</p>

          {/* Date & Admin */}
          <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
            <div className="flex items-center space-x-1">
              <span>📅</span>
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>👤</span>
              <span>{admin}</span>
            </div>
          </div>
        </div>

        </div>

        {/* Goal & Progress */}
      </div>
    </>
  );
};

const Cards = () => {
  return (
    <>
      <div className="flex flex-col gap-20  p-20 bg-gray-100">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-normal text-gray-400">
            Trending causes
          </h1>
          <p className="text-4xl font-medium text-center text-gray-800">
            We are always where other people <br /> need help
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {donations.map((donation, index) => (
            <DonationCard key={index} {...donation} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
