import React from 'react';
import Header from "../components/Header";
import { CheckCircle2 } from 'lucide-react'
const GetInvolved = () => {
    const span = ' text-lg text-gray-700 font-semibold';

    return (
        <div 
            className="gap-4 flex flex-col items-center bg-cover bg-fixed relative w-[100%] m-auto rounded-lg"
            style={{ backgroundImage: `url(${Header.imageUrl})` }}  // Assuming the image is passed from the header component
        >
            <div className="absolute inset-0 bg-slate-400"></div>  {/* Dark gradient overlay */}
            
            <div className="relative z-10 p-10 text-center text-white rounded-2xl">
                <h1 className='text-3xl font-bold'>Get Involved</h1>
                <div className="flex w-full flex-col text-left lg:flex-row justify-around mt-6">
                    <div className="flex gap-2 flex-col mr-40">
                        <div className="md:flex items-center mb-5">
                            <CheckCircle2 className="text-xl mr-2 text-blue-500 " />
                            <p className={span}> Volunteer Opportunities: </p> How people can help.
                        </div>
                        <div className="md:flex items-center">
                            <CheckCircle2 className="text-xl mr-2 text-blue-500" />
                            <p className={span}> Partnership: </p> Collaborate with businesses, NGOs and Churches.
                        </div>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <div className="md:flex items-center mb-5">
                            <CheckCircle2 className="text-xl mr-2 text-blue-500" />
                            <p className={span}>Donate: </p> Support through financial contributions or sponsorships.
                        </div>
                        <div className="md:flex items-center">
                            <CheckCircle2 className="text-xl mr-2 text-blue-500" />
                            <p className={span}> Success Stories: </p> Testimonials and stories from those impacted.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInvolved;
