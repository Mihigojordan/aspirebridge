import React from "react";
import { FiCheckCircle } from 'react-icons/fi';


export const FocusArea = ({ heading, listItems, img }) => {
    return (
        <div className=" flex xl:flex-row justify-center gap-7 items-center flex-col lg:flex-row md:w-full md:gap-12  ">
            <div className="xl:w-[45%] h-[350px] md:w-full ">
                <img
                    src={img}
                    alt=""
                    className="w-full h-full rounded-lg object-cover"
                />
            </div>
            <div className="w-full md:w-[45%] flex flex-col gap-5 items-start  justify-center">
                <h1 className=" font-bold  text-xl lg:text-2xl xl:text-6xl  leading-18 mb-10">
                    {heading}
                </h1>
                {
                    listItems && listItems.length > 0 && (
                        <div className="list-disc flex flex-col items-start gap-3 px-6 -mt-6 " >
                            {
                                listItems.map((item, index) => (
                                    <p key={index} className="text-base md:text-lg flex not-first: ">
                                              <FiCheckCircle className="text-blue-500 mt-1" />
                                              <span className="ml-4">{item}</span>
                                    </p>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FocusArea;
