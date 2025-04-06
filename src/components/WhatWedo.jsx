import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const WhatWedo = () => {
  const programs = [
    {
      title: "Youth Empowerment Programs",
      items: [
        "Leadership training",
        "Career development & mentorship",
        "Education",
        "Entrepreneurship and skills training",
      ],
    },
    {
      title: "Women’s Empowerment Programs",
      items: [
        "Financial literacy & entrepreneurship",
        "Health and wellness",
        "Advocacy against gender-based violence",
      ],
    },
  ]

  return (
    <div className="flex flex-col gap-5 w-[95%] m-auto p-10 bg-slate-400 rounded-md">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl lg:text-3xl font-bold text-white">What We Do</h1>
        <h2 className="text-lg lg:text-xl font-semibold text-white">
          AspireBridge Rwanda Programs & Services
        </h2>
      </div>

      <div className="flex w-full text-left flex-col gap-5 md:flex-row justify-around items-center">
        {programs.map((program, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg rounded-xl p-5 w-full md:w-1/2 gap-3"
          >
            <h2 className="text-lg font-semibold">{program.title}</h2>
            <div className="flex flex-col gap-3">
              {program.items.map((item, idx) => (
                <p key={idx} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="text-blue-600" size={20} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatWedo
