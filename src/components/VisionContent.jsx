import React from "react";

const VisionContent = ({ img, heading, paragraph }) => {

    return (
        <div className="  items-center justify-center gap-12 flex-col-reverse   lg:flex-row  p-0  " >
            <div className=" w-full xl:w-[45%] flex flex-col gap-6 " >
                <h1 className=" font-bold text-xl lg:text-xl xl:text-4xl leading-13 -mt-10 " >{heading}</h1>
                <p className=" text-lg md:text-lg leading-9 " >{paragraph}</p>

            </div>
            <div className="xl:w-[45%] h-[300px] md:w-full " >
                <img src={img} alt="" className="w-full h-full rounded-lg object-cover " />
            </div>
        </div>
    )
}

export default VisionContent