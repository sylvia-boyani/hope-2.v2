import React from 'react'
import './kiambio.css'
import hero1 from '../../../../assets/praise-raila-2.jpg'
import hero2 from '../../../../assets/raila-1.jpg'
import hero3 from '../../../../assets/praise-raila.jpg'
import hero4 from '../../../../assets/pst.James.jpg'

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
       <p>COMMUNITY OUTREACH <br />
         Time: All Day<br />
         These are special services where<br />
         the community at large is invited  <br />
         to. These happen whenever we  have <br />
         visitors from Overseas and they happen <br />
         to have gifts to give to the community.  <br />
         We also take this opportunity to evangelize.</p>
     </div>
     
     <div className='pic'>
       <img className= "hero-img" src={hero4} alt='hero'/>
       <p>NIGHT KESHA'S <br />
         Time: All Night. 9:00 PM - 5:00 AM <br />
         These are overnight services that  <br />
         that usually happen Fridays.  <br />
         These have the same structure as  <br />
         the Sunday Services but maybe with  <br />
         guests from other churches. <br />
         We also attend Other Churche's Keshas
       </p>
     </div>
     </div>
    </div>
  )
}

export default Hero
