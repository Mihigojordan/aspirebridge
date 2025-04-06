import React from 'react'

const GetInvolved = () => {
    const span = ' text-lg text-gray-700 font-semibold'

    return (
        <div className='gap-4 flex flex-col items-center'>
            <h1 className='text-3xl font-bold'>Get Involved</h1>
            <div className="flex w-full flex-col text-left lg:flex-row justify-around">
                <div className="flex gap-2  flex-col">
                    <li><span className={span}> Volunteer Opportunities: </span>How people can help.</li>
                    <li><span className={span}> Partnership: </span> Collaborate with business, NGOs, and Churches.</li>
                </div>
                <div className="flex gap-2  flex-col">
                    <li><span className={span}>Donate: </span>Support through financial contributions or sponsorships.</li>
                    <li><span className={span}> Success Stories:</span>Testimonials and stories from those impacted.</li>

                </div>
            </div>

        </div>
    )
}

export default GetInvolved