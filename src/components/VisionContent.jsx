import React from "react";

const VisionContent = ({ img , heading , paragraph }) =>{
    const buttonStyle = " bg-black p-4 text-white rounded-xl "
    return(
        <div className=" flex  justify-center gap-12 md:flex-col-reverse md:w-full  lg:flex-row xl:flex-row p-6  " >
            <div className="xl:w-[45%] sm:w-full md:w-full lg:w-full flex flex-col gap-6 " >
                <h1 className=" font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl " >{heading}</h1>
                <p className=" text-lg" >{paragraph}</p>
                <div className=" flex items-center  gap-24 md:justify-between xl:justify-start  " >
                    <button className={buttonStyle} >explore more</button>
                    <button className={buttonStyle} >contact us</button>
                </div>
            </div>
           <div className="xl:w-[45%] h-[350px] md:w-full " >
            <img src={img} alt="" className="w-full h-full rounded-lg object-cover " />
           </div>
        </div>
    )
}

export default VisionContent