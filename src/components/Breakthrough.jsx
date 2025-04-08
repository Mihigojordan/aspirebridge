import React from 'react'
import image from '../assets/image2.jpg'
import image2 from '../assets/imag3.jpg'
import image3 from '../assets/image4.jpg'
import image4 from '../assets/image5.jpg'
import heroBackground from '../assets/vison-2.jpg'; // ✅ Update the path to match your project structure


export const Breakthrough = () => {
    const images = [
        image,
        image2,
        image3,
        image4,
    ]
  return (
    <div className='flex items-center justify-center flex-col py-3' >
          <div
      className="relative w-full min-h-[40vh] flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-0"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 w-full text-center sm:w-10/12 lg:w-10/12 md:w-9/12 p-5 text-white">
        <h1 className="font-semibold text-sm md:text-lg lg:text-lg xl:text-3xl">
          Breaking Barriers, Building Opportunities, Transforming Lives.
        </h1>
        <p className="text-center text-md">
          To equip youth and women with the knowledge, skills and support systems necessary to break the cycle of poverty, foster entrepreneurship and promote inclusive economic growth.
        </p>
      </div>
    </div>
        <div className='hidden md:flex h-72 w-[100%]' >
           {
            images.map((image , i)=>(
                <img src={image} className='w-[100%] h-[100%] object-cover' alt="" key={i}/>
            ))
           }
        </div>
    </div>
  )
}


export default Breakthrough