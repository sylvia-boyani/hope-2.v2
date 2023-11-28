import React from 'react'
import './marrum.css'
import hero1 from '../../../../assets/coast3.jpeg'
import hero2 from '../../../../assets/coast4.jpeg'
import hero3 from '../../../../assets/coast5.jpeg'
import hero4 from '../../../../assets/coast6.jpeg'

function Hero() {
  return (
    <div id="ProgramsR"><h3>HAPPENING WEEKLY</h3>
    <div className='Hero'>
    <div className='pic'>
       <img className= "hero-img" src={hero2} alt='hero'/>
       <p>SUNDAY SERVICES <br/>
           10:00 AM <br />
           Devotion/ Mafundisho <br />
           Praise & Worship<br />
           Testimonies & Prayer requests<br />
           Annoucements <br />
           Giving. Offerings & Tithes<br />
           Praise & Worship <br />
           Sermon<br />
           End of Service
           
       </p>
     </div>
     <div className='pic'>
       <img className='hero-img' src={hero3} alt='hero'/>
       <p>OTHER SERVICES <br />
         Time: 10:00 AM. <br />
         Main Sunday Services.  <br />
         Children Service/Sunday School.  <br />
         Youth Services Once per Month.  <br />
         Women Services Every third Sunday.  <br />
         Men Church Services. <br /> 
         Men Partner Programs (DADS) <br />
         Home services(Teusdays). <br/>
         Special Services.</p>
     </div>

     <div className='pic'>
       <img className='hero-img' src={hero1} alt='hero'/>
       <p>WEDNESDAY FELLOWSHIPS <br />
        House Fellowships</p>
     </div>
     
     <div className='pic'>
       <img className= "hero-img" src={hero4} alt='hero'/>
       <p>FRIDAY SERVICES <br />
        Prayer and Fasting services
       </p>
     </div>
     </div>
    </div>
  )
}

export default Hero
