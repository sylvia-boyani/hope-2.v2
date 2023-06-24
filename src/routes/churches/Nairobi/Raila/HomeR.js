import React from 'react'
import hey from "../../../../assets/first.jpeg"
import { HashLink as Link } from 'react-router-hash-link'

function HomeR() {
  return (
    <div>
        <img className='heroImg' alt='heroImg' src={hey} />
        <div className='hero-text'>
          <h1>Come Let's Worship Together</h1>
          <p>Welcome home, Karibu Nyumabani!</p>
          <button><Link to='programs' />Let's talk</button>
        </div>
    </div>
  )
}

export default HomeR