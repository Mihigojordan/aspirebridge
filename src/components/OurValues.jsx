import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import watering from '../assets/values.jpg'

const OurValues = () => {
  const span = 'text-lg text-gray-700 font-semibold'

  const values = [
    {
      title: 'Empowerment',
      description: 'We believe in equipping people with the skills and confidence to create change in their own lives.',
    },
    {
      title: 'Sustainability',
      description: 'We focus on long-term solutions that break the cycle of poverty.',
    },
    {
      title: 'Collaboration',
      description: 'We work with local and international partners to maximize impact.',
    },
    {
      title: 'Integrity',
      description: 'We uphold transparency and accountability in all our initiatives.',
    },
    {
      title: 'Compassion',
      description: 'We are driven by a deep commitment to uplifting vulnerable populations.',
    },
    {
      title: 'Transparency',
      description: 'We operate with openness and honesty, ensuring all our actions and decisions are accountable.',
    },
    {
      title: 'Equity and inclusion',
      description:
        'We are committed to fairness and equal opportunities for all, regardless of gender, background, disability or social status.',
    },
  
  ]

  return (
    <div className="flex flex-col w-[98%] m-auto lg:flex-row-reverse py-10 gap-4 justify-center items-center">
    
    <div className="flex flex-col w-full lg:w-[50%] px-4">
  <h1 className="text-2xl xl:text-4xl font-bold mb-4">Our Values</h1>
  <div className="flex flex-col gap-2"> {/* Added gap for spacing */}
    {values.map((val, index) => (
      <div key={index} className="flex items-start text-gray-800 mb-2">
        {/* Fixed size icon with margin */}
        <CheckCircle2 className="text-blue-600 w-6 h-6 mt-0.5 flex-shrink-0 mr-2" />
        <span className="flex-1">
          <span className={span}>{val.title}:</span> {val.description}
        </span>
      </div>
    ))}
  </div>
</div>
      <div className="w-full lg:w-[45%] h-full">
        <img
          src={watering}
          alt="watering"
          className="w-full h-full max-h-[420px] object-cover rounded-2xl"
        />
      </div>
    </div>
  )
}

export default OurValues
