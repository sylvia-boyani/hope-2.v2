import React from 'react'
import Nav from './nav';
import Home from './Home';
import './nav.css'
import Hero from './Hero'
import AboutR from './AboutR'
import Footer from './footer'
import ContactR from './ContactR'
import GiveR from './Give'


function Kayaba() {
  return (
    <div>
      <Nav />
      <Home />
      <Hero />
      <AboutR />
      <GiveR />
      <ContactR />
      <Footer />
    </div>
  )
}

export default Kayaba;