import React from "react";

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
                <h1 className=" font-bold text-center text-xl lg:text-2xl xl:text-3xl ">
                    {heading}
                </h1>
                {
                    listItems && listItems.length > 0 && (
                        <ul className="list-disc flex flex-col items-start gap-3 px-6 " >
                            {
                                listItems.map((item, index) => (
                                    <li key={index} className="text-base md:text-lg">
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    );
};

export default FocusArea;
