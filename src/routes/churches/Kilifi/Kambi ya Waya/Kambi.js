import React from 'react'
import Nav from './nav';
import HomeR from './HomeR';
import './nav.css'
import Hero from './Hero'
import AboutR from './AboutR'
import Footer from './footer'
import ContactR from './ContactR'
import GiveKW from './GiveKW'


function Raila() {
  return (
    <div>
      <Nav />
      <HomeR />
      <Hero />
      <AboutR />
      <GiveKW />
      <ContactR />
      <Footer />
    </div>
  )
}

export default Raila;