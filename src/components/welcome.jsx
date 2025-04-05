import React from "react";
import about from "../assets/about.png";
import { PiLayout } from "react-icons/pi";
import { BiPlay, BiPlayCircle } from "react-icons/bi";
import about2 from "../assets/about 2.png"

function welcome() {
  return (
    <>
      <div className="flex w-full px-40 py-20 bg-white h-full flex-row justify-center items-center">
        <div className="w-1/2 relative items-end">
          <img src={about2} alt="" className="absolute right-20"/>
          <img src={about} alt=""  className="flex items-end"/>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col gap-0.5 w-[80%] leading-5">
            <h1 className="text-4xl font-light">Welcome to Jago</h1>
            <p className="text-4xl mt-10">
              <span className="font-medium">
                {" "}
                <span className="relative">
                  A world where poverty
                  <span className="absolute right-0 bottom-0 w-[35%] h-3 bg-yellow-500"></span>
                </span>{" "}
                <br />
                will not exists
              </span>{" "}
              <p className="text-2xl text-red-500">
                <br /> We are the largest crowdfunding
              </p>
            </p>
            <p className="w-[500px] text-gray-500 py-4">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a type and scrambled.
            </p>
            <p className="w-[500px] text-gray-500 py-4">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a type and scrambled.
            </p>
            <p className="w-[500px] text-gray-500 py-4">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a type and scrambled.
            </p>
            <div className="flex gap-5 mt-5">
                <button className="cursor-pointer border-1 font-normal bg-red-500 text-md text-white hover:bg-gray-900 transition-all duration-300 ease-in-out rounded-sm py-3 px-5">
                    Learn More
                </button>
                <a href="" className="flex items-center gap-2 text-red-500 font-medium">
                    <BiPlayCircle size={30} color="red" />
                    How we work
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default welcome;
