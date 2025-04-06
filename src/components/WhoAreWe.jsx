import React from 'react'
import aboutImg from '../assets/about.jpg'
import whoWeAreImg from '../assets/whoweare.jpg'

const WhoAreWe = () => {
  return (
    <div className="flex flex-col gap-10 pt-10">
      {/* About Us Section */}
      <div className="block md:flex justify-between gap-5 items-center bg-white shadow-lg rounded-xl overflow-hidden w-[95%] m-auto">
        <div className=" p-6 md:w-[45%] leading-10 ">
          <h1 className="text-2xl sm:text-3xl font-semibold xl:text-4xl mb-3">About Us</h1>
          <p>
            At <span className="font-semibold">AspireBridge Rwanda</span>, we believe that every young person and woman deserves the opportunity to break free from poverty and build a better future by empowering vulnerable youth and women through education, entrepreneurship, and sustainable development programs.
          </p>
        </div>
        <div className=" p-2 md:w-[50%] h-[370px]">
          <img
            src={aboutImg}
            alt="About AspireBridge"
            className="w-full h-[100%] object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="block md:flex justify-between gap-5 items-center bg-white shadow-lg rounded-xl overflow-hidden w-[95%] m-auto">
      <div className="p-2 md:w-[50%] h-[460px]">
          <img
            src={whoWeAreImg}
            alt="Who We Are"
             className="w-full h-[100%] object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="p-6 md:w-[45%] leading-10 ">
          <h1 className="text-xl font-semibold sm:text-2xl xl:text-5xl mb-6">Who we are?</h1>
          <p>
            Founded in 2024, <span className="font-semibold">AspireBridge Rwanda</span> is a non-profit organization dedicated to reducing poverty by equipping young people and women with the skills, resources and opportunities they need to thrive. We work closely with communities to provide access to vocational training, financial literacy, mentorship, and economic opportunities.
          </p>
        </div>
   
      </div>
    </div>
  )
}

export default WhoAreWe
