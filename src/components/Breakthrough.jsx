import React from 'react'
import image from '../assets/vision-1.jpg'
import image2 from '../assets/vison-2.jpg'
import image3 from '../assets/causes-1.png'
import image4 from '../assets/causes-2.png'

export const Breakthrough = () => {
    const images = [
        image,
        image2,
        image3,
        image4,
    ]
  return (
    <div className='flex items-center justify-center flex-col py-3' >
        <div className=' flex flex-col items-center justify-center gap-3 w-full text-center md:w-8/12 p-5 ' >
            <h1 className=' font-semibold text-xl xl:text-2xl ' >Breaking Barriers, Building Opportunities, Transforming Lives.</h1>
            <p className='text-center' >Breaking Barriers, Building Opportunities, Transforming Lives.
            To equip youth and women with the knowledge, skills, and support systems necessary to break the cycle of poverty, foster entrepreneurship, and promote inclusive economic growth.</p>
        </div>
        <div className='flex' >
           {
            images.map((image , i)=>(
                <img src={image} className='w-3/12' alt="" key={i}/>
            ))
           }
        </div>
    </div>
  )
}


export default Breakthrough