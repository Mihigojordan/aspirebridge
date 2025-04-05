import React from "react";

const donations = [
  {
    title: "Children education",
    description: "Donate for",
    icon: "📖",
    bgColor: "bg-blue-100",
  },
  {
    title: "Clean mineral water",
    description: "Donate for",
    icon: "🚰",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Surgery & treatment",
    description: "Donate for",
    icon: "🩺",
    bgColor: "bg-teal-100",
  },
  {
    title: "Healthy & good food",
    description: "Donate for",
    icon: "🍽️",
    bgColor: "bg-indigo-100",
  },
];

const Card = ({ title, description, icon, bgColor }) => {
  return (
    <div
      className={`rounded-2xl py-10 px-5 flex flex-col items-center ${bgColor} relative hover:translate-y-2 transition-all duration-400 ease-in-out`}
    >
      <div className="absolute flex -top-10 bg-white w-[100px] h-[100px] items-center justify-center rounded-full shadow-md  shadow-black">
        <span className="text-4xl">{icon}</span>
      </div>
      <div className="items-start w-full leading-9">
        <p className="mt-8 text-gray-600">{description}</p>
        <h2 className="text-3xl font-medium ">{title}</h2>
        <a href="#" className="text-red-500 font-medium mt-2">
          More details...
        </a>
      </div>
    </div>
  );
};

const DonationCards = () => {
  return (
    <div className="grid py-20 px-40 grid-cols-1 md:grid-cols-4 gap-6 p-6">
      {donations.map((donation, index) => (
        <Card
          key={index}
          title={donation.title}
          description={donation.description}
          icon={donation.icon}
          bgColor={donation.bgColor}
        />
      ))}
    </div>
  );
};

export default DonationCards;
