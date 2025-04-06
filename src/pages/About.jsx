import React from 'react'
import Header from '../components/Header'
import image from '../assets/image.avif'
import water from '../assets/water.jpeg'
import fabien from '../assets/fabien.jpg'
import hold from '../assets/hold.jpeg'
import one from '../assets/one.jpeg'
import watering from '../assets/watering.jpeg'


const About = () => {
    return (
        <div className='min-h-[50vh] flex justify-start items-center flex-col w-full'>

            <Header
                title="About Us"
                linkTitle="About"
                linkHref="/about"
                backgroundImage={image}
            />



            <div className="flex flex-col py-6 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 ">

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <h1 className=' text-xl sm:text-2lx font-semibold xl:text-3xl'>  About us</h1>
                        <p>  At <span className='font-semibold'>AspireBridge Rwanda</span>, we believe that every young person and woman deserves the opportunity to break free from poverty and build a better future by empowering vulnerable youth and women through education, entrepreneurship and sustainable development programs.</p>
                    </div>

                    <div className="flex flex-col gap-3 pb-5">

                        <h1 className=' text-xl font-semibold sm:text-2lx xl:text-3xl'>  Who we are ?</h1>
                        <p>   Founded in 2024, <span className='font-semibold'>AspireBridge Rwanda </span> is a non-profit organization dedicated to reducing poverty by equipping young people and women with the skills, resources and opportunities they need to thrive. We work closely with communities to provide access to vocational training, financial literacy, mentorship, and economic opportunities.</p>
                    </div>

                </div>



                <div className="flex items-start w-full gap-10   justify-between h-[30vh]">

                    <div className="h-full w-full lg:w-5/12    ">

                        <img src={water} className='w-full h-full object-cover rounded-2xl ' alt="" />

                    </div>
                    <div className="flex flex-col  w-full lg:w-7/12 justify-around h-1/2 gap-5">
                        <div className="flex flex-col gap-3">
                            

                            <h1 className=' text-xl sm:text-2lx font-semibold '>  Our Vision</h1>
                            <p>  
                            Worlds where youth and women have the tools to escape poverty, achieve self-reliance and contribute to the development of their communities.</p>
                        </div>
           

                        <div className="flex flex-col gap-3 pb-5">

                            <h1 className=' text-xl font-semibold sm:text-2lx '> Our Mission </h1>
                            <p>   o empower youth and women by providing education, skills training, entrepreneurship, advocacy and economic opportunities that foster independence and long-term financial stability we are bridging the gap between potential and success for promoting inclusive economic growth.
                            </p>
                        </div>

                    </div>

                </div>





            </div>

        </div>
    )
}

export default About