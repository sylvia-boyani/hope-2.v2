import React from 'react'
import './marrum.css'
import img77 from "../../../../assets/jason.jpeg"
import img777 from "../../../../assets/ubc.jpg"
import img7777 from "../../../../assets/pst.James.jpg"
import ProgramsR from './ProgramsR'

function AboutR() {
  return (
    <div>
     <div className='abt' id='aboutR'>
     <h3>About Us</h3>
      <p>Tumaini Marram is located along Malini Lamu Road. It is just near Marereni
         trading center, about 1Km away. It is adjacent to the Kikwatani Quarry. Our church
         is in Kilifi County, Magarini sub-county, Adu ward and Marereni Location. 
      </p>
     </div>
     <div>
        <h4>Our Church</h4>
        <p>Our church land was bought by Pst Michael Ambembo through the Tumaini
         Ministries Office. He did some farming while ministering at Kibaoni Church. 
         Then after a while God enabled there to be a church, hence in the year 2016
         a church was officially opened at Marram.
         The Church started metting under a tree and this went on for about three years
         until Miller visited and provided a tempoprary structure in 2019 where they started to
         meet at. We continued worshiping God at that place until Miller supported us again through 
         Bishop Fred a new Permanent building which was built on 2022.
         Our new Church was officially opened by Miller, previous Bishop Wentindi, current Bishop Fred
         and the Tumaini Coastal Family on 27th September 2023.
        </p>
        <div><ProgramsR /></div>
     </div>
        <h2>Meet Our Church Leaders</h2>
        <div className='team' id="teamR">
        <div className='me'>
         <div data-aos="fade-right" className="about-column">
            <div className='about-img'>
               <img className="A-img" src={img77} alt="about us" />
            </div>
         </div>

         <div data-aos="fade-left" className="about-column">
            <div className='about-content'>
                  <h4>Pst Jason Thuva-Lead Pastor</h4>
                  <p>Leading a congregation of 65 members, I am .......
                  I have served God from ............We all have our 
                  strengths. I’ve perfected
                  mine so you can focus on yours. Get in touch
                  to find out how I can help.My business is more
                  than just a job. Each time I take on a new project, 
                  I make sure it aligns with my core set of values so
                  I know I can deliver great results. My curiosity makes
                  me love learning, and added with my perfectionism,
                  I am able to come up with quality work.</p>
            </div>
         </div>

         <div data-aos="fade-left" className="about-column">
            <div className='about-content'>
               <h4>Church Elder Samuel Katana</h4>
                <p>We all have our strengths. I’ve perfected
                  mine so you can focus on yours. Get in touch
                  to find out how I can help.My business is more
                  than just a job. Each time I take on a new project, 
                  I make sure it aligns with my core set of values so
                  I know I can deliver great results. My curiosity makes
                  me love learning, and added with my perfectionism,
                  I am able to come up with quality work.</p>
            </div>
         </div>

         <div data-aos="fade-right" className="about-column">
            <div className='about-img'>
               <img className="A-img" src={img777} alt="about us" />
            </div>
         </div>
      </div>
        </div>
    </div>
  )
}

export default AboutR
