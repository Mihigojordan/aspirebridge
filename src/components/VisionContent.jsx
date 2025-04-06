import React from "react";

const VisionContent = ({ img, heading, paragraph }) => {
    const buttonStyle = " bg-black p-3 px-5 flex-auto xl:flex-none cursor-pointer text-white rounded-lg capitalize "
    return (
        <div className=" flex items-center justify-center gap-12 flex-col-reverse w-full  lg:flex-row  p-0 md:p-6  " >
            <div className=" w-full xl:w-[45%] flex flex-col gap-6 " >
                <h1 className=" font-bold text-xl lg:text-2xl xl:text-5xl leading-15 mb-10 " >{heading}</h1>
                <p className=" text-lg -mt-10" >{paragraph}</p>

            </div>
            <div className="xl:w-[45%] h-[350px] md:w-full " >
                <img src={img} alt="" className="w-full h-full rounded-lg object-cover " />
            </div>
        </div>
    )
}

export default VisionContent