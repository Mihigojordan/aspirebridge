import React from 'react'

import watering from '../assets/watering.jpeg'


const OurValues = () => {
    const span = ' text-lg text-gray-700 font-semibold'

  return (
   
    <div className="flex flex-col lg:flex-row-reverse py-10 gap-4 justify-center items-center">

    <img src={watering} className=' w-full lg:w-1/2 rounded-2xl h-[40vh] object-cover' alt="" />


    <div className="flex flex-col gap-3 w-full lg:w-1/2">
        <h1 className=' text-2xl xl:text-3xl font-bold'>Our Values</h1>
        <div className="flex flex-col  lg:text-left gap-3">
            <div className="flex">
                <li>
                    <span className={span}>Empowerment: </span>
                    We believe in equipping people with the skills and confidence to create change in their own lives.
                </li>
            </div>
            <div className="flex">

                <li>
                    <span className={span}>Sustainability: </span>
                    We focus on long-term solutions that break the cycle of poverty.
                </li>
            </div>
            <div className="flex">

                <li>  <span className={span}>Collaboration:</span>We work with local and international partners to maximize impact.</li>
            </div>
            <div className="flex">

                <li>  <span className={span}> Integrity: </span>We uphold transparency and accountability in all our initiatives.</li>
            </div>
            <div className="flex">

                <li><span className={span}> Compassion: </span> We are driven by a deep commitment to uplifting vulnerable populations.</li>
            </div>
            <div className="flex">

                <li><span className={span}> Transparency: </span>we operate with openness and honesty, ensuring all our actions and decisions are accountable.</li>
            </div>
            <div className="flex">

                <li><span className={span}> Equity and inclusion:  </span>We are committed to fairness and equal opportunities for all, regardless of gender, background, Disability or social status.</li>
            </div>



        </div>

    </div>



</div>

  )
}

export default OurValues