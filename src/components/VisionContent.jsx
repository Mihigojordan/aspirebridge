import React from "react";

const VisionContent = ({ img, heading, paragraph }) => {
    const buttonStyle = " bg-black p-3 px-5 flex-auto xl:flex-none cursor-pointer text-white rounded-lg capitalize "
    return (
        <div className=" flex items-center justify-center gap-12 flex-col-reverse w-full  lg:flex-row  p-0 md:p-6  " >
            <div className=" w-full xl:w-[45%] flex flex-col gap-6 " >
                <h1 className=" font-bold text-xl lg:text-2xl xl:text-3xl " >{heading}</h1>
                <p className=" text-lg" >{paragraph}</p>
                <div className=" flex items-center flex-wrap  md:flex-nowrap gap-2  xl:gap-3 justify-between xl:justify-start  " >
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