import React from 'react'
import Navbar from '../../Navigation/Navbar'
import Herosection from '../../HeroSection/Herosection'
import Features from '../../../Features/Features'
import CardComponent from '../../Price/CardComponent'
import CallToAction from '../../CallToAction/CallToAction'
import Review from '../../Review/Review'
import Footer from '../../Footer/Footer'

function HomePage() {
  return (
    <>
      <Navbar/>
      <Herosection/>
      <Features/>
      <CardComponent/>
      <CallToAction/>
      <Review/>
      <Footer/>
    </>
    
  )
}

export default HomePage