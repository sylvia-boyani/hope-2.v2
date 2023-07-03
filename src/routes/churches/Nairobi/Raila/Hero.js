import React from 'react'
import './raila.css'
import hero1 from '../../../../assets/praise-raila-2.jpg'
import hero2 from '../../../../assets/raila-1.jpg'
import hero3 from '../../../../assets/praise-raila.jpg'
import hero4 from '../../../../assets/pst.James.jpg'

function Hero() {
  return (
    <div><h3>HAPPENING WEEKLY</h3>
    <div className='Hero'>
  
     <div className='pic1'>
       <img className='hero-img' src={hero1} alt='hero'/>
       <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
     </div>
     
     <div className='pic2'>
       <img className= "hero-img" src={hero2} alt='hero'/>
       <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
     </div>

     <div className='pic1'>
       <img className='hero-img' src={hero3} alt='hero'/>
       <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
     </div>
     
     <div className='pic2'>
       <img className= "hero-img" src={hero4} alt='hero'/>
       <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
     </div>
     </div>
    </div>
  )
}

export default Hero
