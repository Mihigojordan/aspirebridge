import React from "react";
import banner from "../assets/banner.png";

function Hero() {
  return (
    <>
      <div className="flex w-full bg-blue-100 h-full flex-row justify-center items-center">
        <div className="flex flex-col gap-3 w-[50%] leading-5">
          {/* <h1 className='text-4xl font-bold'>Welcome to <span className='text-red-500'>Charity</span></h1> */}
          <p className="text-7xl mt-10">
            <span className="font-bold">
              {" "}
              <span className="relative ">
                Share
                <span className="absolute left-0 bottom-0 w-full h-5 bg-yellow-500"></span>
              </span>{" "}
              your love to
            </span>{" "}
            <br /> make someone’s <br /> life better
          </p>
          <p className="w-[500px] text-gray-500 py-4">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a type and scrambled.
          </p>
        </div>
        <div className="py-20">
          <img src={banner} alt="" srcset="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
