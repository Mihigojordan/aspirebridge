import React from 'react'
import Header from '../components/Header'
import image from '../assets/image.avif'
import fabien from '../assets/fabien.jpg'
import hold from '../assets/hold.jpeg'
import one from '../assets/one.jpeg'
import wfarmer from '../assets/wfarmer.jpg'
import WhoAreWe from '../components/WhoAreWe'
import VisionMission from '../components/VisionMission'
import OurValues from '../components/OurValues'
import WhatWedo from '../components/WhatWedo'
import WeShall from '../components/WeShall'
import GetInvolved from '../components/GetInvolved'

const About = () => {

    return (
        <div className='min-h-[50vh]  flex justify-start items-center flex-col w-full'>

            <Header
                title="About Us"
                linkTitle="About"
                linkHref="/about"
                backgroundImage={image}
            />



            <div className="flex flex-col py-6 gap-7 w-11/12 md:w-10/12 xl:w-9/12 text-center lg:text-left">

                <WhoAreWe />

                <VisionMission />
                <OurValues />

                <WhatWedo />
                <WeShall />
                <GetInvolved />
            </div>

        </div>
    )
}

export default About