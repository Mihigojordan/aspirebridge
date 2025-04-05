import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import TopHeader from '../components/TopHeader'

function LandingLayout() {
  return (
    <div>
        <TopHeader />
         <Navbar />
         <Outlet />
        <Footer /> 
    </div>
  )
}

export default LandingLayout