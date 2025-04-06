import React from 'react'
import HeroPage from '../components/HeroPage'
import VisionSection from '../components/VisionSection'
import Breakthrough from '../components/Breakthrough'

function Home() {
  return (
    <div className='flex flex-col gap-6'>
        <HeroPage />
        <VisionSection />
        <Breakthrough/>
    </div>
  )
}

export default Home