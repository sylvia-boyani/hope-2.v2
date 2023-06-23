import React from 'react'
import Nav from './tumati/nav'
import HeroSection from './tumati/HeroSection'
import Icons from './tumati/Icons'
import Features from './tumati/Features'
import AboutUs from './tumati/AboutUs'
import Courses from './tumati/Courses'
import ChooseUs from './tumati/ChooseUs'
import FreeCourse from './tumati/FreeCourses'
import Newsletter from './tumati/Newsletter'
import Testimonials from './tumati/Testimonial'
import Footer from './tumati/Foot'

function Tumati() {
  return (
    <div>
      <div>
        <Nav />
        <HeroSection />
        <Icons />
        <Features />
        <AboutUs />
        <Courses />
        <ChooseUs />
        <FreeCourse />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </div>
    

  )
}

export default Tumati