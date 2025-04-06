import React from 'react'
import HeroPage from '../components/HeroPage'
import VisionSection from '../components/VisionSection'
import Breakthrough from '../components/Breakthrough'
import GetInvolved from '../components/GetInvolved'

function Home() {
  return (
    <div className='flex flex-col gap-6'>
        <HeroPage />
        <VisionSection />
        <Breakthrough/>
        <GetInvolved />
    </div>
  )
}

export default Home