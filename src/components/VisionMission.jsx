import React from 'react'

import water from '../assets/mission.jpg'


const VisionMission = () => {

    

    return (
        <div className="block md:flex justify-between gap-5 items-center bg-white shadow-lg rounded-xl overflow-hidden w-[95%]  m-auto p-10">

        
            <div className="flex flex-col  w-full lg:w-6/12 h-full justify-around  gap-5">
                <div className="flex flex-col h-fu gap-3">


                    <h1 className=' sm:text-md md:text-4xl font-semibold '>  Our Vision</h1>
                    <p className='text-xl leading-10 '>
                        Worlds where youth and women have the tools to escape poverty, achieve self-reliance and contribute to the development of their communities.</p>
                </div>


                <div className="flex flex-col gap-3 pb-5">

                    <h1 className=' sm:text-md md:text-4xl font-semibold '> Our Mission </h1>
                    <p className='text-xl leading-10 '>  To empower youth and women by providing education, entrepreneurship skills, advocacy and economic opportunities that foster independence and long-term financial stability we are bridging the gap between potential and success for promoting inclusive economic growth.
                    </p>
                </div>
                

            </div>
            <div className=" h-[420px] md:w-[45%] ">

<img src={water} className='w-full h-[100%] object-cover rounded-2xl ' alt="" />

</div>

        </div>
    )
}

export default VisionMission