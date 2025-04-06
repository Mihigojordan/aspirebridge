import React from 'react'

const WeShall = () => {

    const dataz = [
        'Provide practical vocational training to help women and youth start businesses and secure sustainable income.',
        'Equip them with the knowledge to manage finances and access small business funding.',
        'Help young people in accessing the skills to improve their future prospects.',
        'Connect youth with mentors who guide them toward professional and personal success.',
        'Work to create economic opportunities through agricultural programs, cooperatives, and social enterprises.',
        'Create a society where women and youth can live with dignity, security, and equal opportunities with no gender violence.',


    ]
    return (
        <div className='flex justify-center items-center gap-4 flex-col'>
            <h1 className=' text-2xl lg:text-3xl font-semibold'>  We shall</h1>
            <div className="flex flex-wrap gap-4">

                {
                    dataz.map((data)=>(
                        <div className="p-4 flex-1/2 lg:flex-1/3 xl:flex-1/4 2xl:flex-1/5 border border-gray-300 rounded-md bg-gray-50">
                            <p>{data}</p>
                        </div>
                    ))
                }
             
            </div>
        </div>
    )
}

export default WeShall