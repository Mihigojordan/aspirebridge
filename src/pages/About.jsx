import React from 'react'
import Header from '../components/Header'
import image from '../assets/image.avif'
import fabien from '../assets/fabien.jpg'
import hold from '../assets/hold.jpeg'
import one from '../assets/one.jpeg'
import wfarmer from '../assets/wfarmer.jpg'
import WhoAreWe from '../components/WhoAreWe'
import VisionMission from '../components/VisionMission'

import GetInvolved from '../components/GetInvolved'

const About = () => {

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