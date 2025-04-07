import React from "react";
import { FiCheckCircle } from 'react-icons/fi';


export const FocusArea = ({ heading,headings, listItems, img }) => {
    return (
        <div className="  flex items-center justify-center gap-12 flex-col-reverse w-full  lg:flex-row  p-0 md:p-6   ">
            <div className="xl:w-[50%] h-[300px] md:w-full ">
                <img
                    src={img}
                    alt=""
                    className="w-[100%] h-full rounded-lg object-cover"
                />
            </div>
            <div className="w-full md:w-[50%] flex flex-col gap-5 items-start  justify-center">
                <h1 className=" font-bold  text-md lg:text-2xl xl:text-4xl ">
                    {heading}
                </h1>
                <h1 className=" font-bold  text-md  lg:text-2xl xl:text-4xl mb-6 capitalize ">
                    {headings}
                </h1>
                {
                    listItems && listItems.length > 0 && (
                        <div className="list-disc flex flex-col items-start gap-3 px-6 -mt-6 " >
                            {
                                listItems.map((item, index) => (
                                    <p key={index} className="text-base md:text-lg mb-2 flex not-first: ">
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
