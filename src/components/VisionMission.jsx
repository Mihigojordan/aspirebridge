import React from 'react'

import water from '../assets/water.jpeg'


const VisionMission = () => {

    

    return (
        <div className="flex  w-full gap-10 flex-col lg:flex-row justify-between h-auto lg:h-[30vh]">

            <div className="h-[20vh] sm:h-[30vh] md:h-[40vh] w-full lg:w-6/12  lg:h-full ">

                <img src={water} className='w-full h-full object-cover rounded-2xl ' alt="" />

            </div>
            <div className="flex flex-col  w-full lg:w-7/12 h-full justify-around  gap-5">
                <div className="flex flex-col h-fu gap-3">


                    <h1 className=' text-xl sm:text-2lx font-semibold '>  Our Vision</h1>
                    <p>
                        Worlds where youth and women have the tools to escape poverty, achieve self-reliance and contribute to the development of their communities.</p>
                </div>


                <div className="flex flex-col gap-3 pb-5">

                    <h1 className=' text-xl font-semibold sm:text-2lx '> Our Mission </h1>
                    <p>   to empower youth and women by providing education, skills training, entrepreneurship, advocacy and economic opportunities that foster independence and long-term financial stability we are bridging the gap between potential and success for promoting inclusive economic growth.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default VisionMission