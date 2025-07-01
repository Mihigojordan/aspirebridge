import React from 'react'
import HeroPage from '../components/HeroPage'
import VisionSection from '../components/VisionSection'
import Breakthrough from '../components/Breakthrough'
import GetInvolved from '../components/GetInvolved'
import { useEffect} from 'react'

function Home() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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