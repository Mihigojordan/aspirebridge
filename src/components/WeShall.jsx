import React from 'react'

const WeShall = () => {
  const dataz = [
    'Provide practical vocational training to help women and youth start businesses and secure sustainable income.',
    'Equip them with the knowledge to manage finances and access small business funding.',
    'Help young people in accessing the skills to improve their future prospects.',
    'Connect youth with mentors who guide them toward professional and personal success.',
    'Work to create economic opportunities through agricultural and farming programs, cooperatives and social enterprises.',
    'Create a society where women and youth can live with dignity, security and equal opportunities with no gender violence.',
  ]

  return (
    <div className="flex justify-center items-center gap-4 flex-col w-[97%] m-auto py-10">
      <h1 className="text-2xl lg:text-3xl font-semibold mb-6">We shall</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 px-4">
        {dataz.map((data, index) => (
          <div
            key={index}
            className="p-6 flex flex-col justify-between shadow-lg rounded-xl bg-white hover:shadow-2xl transition-all"
          >
            <p className="text-gray-700">{data}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeShall
