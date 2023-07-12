import React from 'react'
import './raila.css'
import img77 from "../../../../assets/Pst shadrack.jpg"
import img777 from "../../../../assets/ubc.jpg"
//import img7777 from "../../../../assets/pst.James.jpg"
import ProgramsR from './ProgramsR'

function AboutR() {
  return (
    <div>
     <div className='abt' id='aboutR'>
     <h3>About Us</h3>
      <p>Tumaini Fuata Nyayo was founded after the Mother church Grogon.
         And as the swahili term means "following the steps" of the mother
         church. Founded on 1994 by the retired Bishop Alfred Wetindi, with
         five members."Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum."
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum."</p>
     </div>
     <div>
       <br/>
        <h4>Our Church</h4>
        <p>Our Church comprises of 120 members run by the leadership 
         of the Local Church Counsil comprisisng of 10 members.
         Our church has various departments that it runs. These are 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
           in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div><ProgramsR /></div>
     </div>
        <h3>Meet Our Church Leaders</h3>
        <div className='team' id="teamR">
        <div className='me'>
         <div data-aos="fade-right" className="about-column">
            <div className='about-img'>
               <img className="A-img" src={img77} alt="about us" />
            </div>
         </div>

         <div data-aos="fade-left" className="about-column">
            <div className='about-content'>
                  <h4>Pst Shadrack Kiima</h4>
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

         <div data-aos="fade-left" className="about-column">
            <div className='about-content'>
               <h4>Church Elder 1</h4>
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

         <div data-aos="fade-right" className="about-column">
            <div className='about-img'>
               <img className="A-img" src={img777} alt="about us" />
            </div>
         </div>

         <div data-aos="fade-left" className="about-column">
            <div className='about-content'>
               <h4>Church Elder 2</h4>
               <p>
               We all have our strengths. I’ve perfected
                  mine so you can focus on yours. Get in touch
                  to find out how I can help.My business is more
                  than just a job. Each time I take on a new project, 
                  I make sure it aligns with my core set of values so
                  I know I can deliver great results. My curiosity makes
                  me love learning, and added with my perfectionism,
                  I am able to come up with quality work.</p>
            </div>
         </div>
      </div>
        <div className='choir'>
         <h4>See some of our Choirs Songs</h4>
         <div class="ratio ratio-16x9">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/u9Qxd8xLCVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
             <a  className='vid1-btn' href='https://www.youtube.com/@tumainifuatanyayochoirsout6126'
              alt='vid1' target='_blank'  rel="noreferrer noopener">See more</a>
             
          </div>
        </div>
    </div>
  )
}

export default AboutR
