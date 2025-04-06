import React from 'react'

const WhatWedo = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col items-center gap-1">

                <h1 className=' text-2xl lg:text-3xl font-bold'> What we do</h1>
                <h2 className='text-lg lg:text-xl font-semibold'>AspireBridge Rwanda Programs & Services</h2>

            </div>

            <div className=" flex w-full text-left flex-col  gap-5 md:flex-row justify-around items-center ">


                <div className="flex flex-col">
                    <h2 className='text-lg'>Youth Empowerment Programs:</h2>



                    <li>Leadership training</li>

                    <li>Career development & mentorship</li>
                    <li>Education</li>
                    <li>Entrepreneurship and skills training</li>

                </div>



                <div className="flex flex-col">

                    <h2 className='text-lg'>Women’s Empowerment Programs:</h2>

                    <li>Financial literacy & entrepreneurship</li>
                    <li>Health and wellness</li>
                    <li>Advocacy against gender-based violence</li>
                </div>





            </div>
        </div>

    )
}

export default WhatWedo