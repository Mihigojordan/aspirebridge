import React from 'react'

const WhoAreWe = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
                <h1 className=' text-2xl sm:text-3lx font-semibold xl:text-4xl'>  About us</h1>
                <p>  At <span className='font-semibold'>AspireBridge Rwanda</span>, we believe that every young person and woman deserves the opportunity to break free from poverty and build a better future by empowering vulnerable youth and women through education, entrepreneurship and sustainable development programs.</p>
            </div>

            <div className="flex flex-col gap-3 pb-5">

                <h1 className=' text-xl font-semibold sm:text-2lx xl:text-3xl'>  Who we are ?</h1>
                <p>   Founded in 2024, <span className='font-semibold'>AspireBridge Rwanda </span> is a non-profit organization dedicated to reducing poverty by equipping young people and women with the skills, resources and opportunities they need to thrive. We work closely with communities to provide access to vocational training, financial literacy, mentorship, and economic opportunities.</p>
            </div>

        </div>
    )
}

export default WhoAreWe