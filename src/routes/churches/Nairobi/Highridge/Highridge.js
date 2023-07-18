import React from 'react'
import Nav from './nav';
import HomeR from './HomeR';
import './nav.css'
import Hero from './Hero'
import AboutR from './AboutR'
import Footer from './footer'
import ContactR from './ContactR'
import GiveR from './Give'


function Highridge() {
  return (
    <div>
      <Nav />
      <HomeR />
      <Hero />
      <AboutR />
      <GiveR />
      <ContactR />
      <Footer />
    </div>
  )
}

export default Highridge;