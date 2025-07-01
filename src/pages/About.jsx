import React from 'react'
import Header from '../components/Header'
import image from '../assets/women.jpg'
import WhoAreWe from '../components/WhoAreWe'
import VisionMission from '../components/VisionMission'

import GetInvolved from '../components/GetInvolved'
import { useEffect } from 'react'
const About = () => {

        useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className=''>

            <Header
                title="About Us"
                linkTitle="About Us"
                linkHref="/about "
                backgroundImage={image}
            />



            <div className="">

                <WhoAreWe />

                <VisionMission />
              
                <GetInvolved />
            </div>

        </div>
    )
}

export default About