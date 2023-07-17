import React from 'react'
import './raila.css'
import img77 from "../../../../assets/city.jpg"
import img777 from "../../../../assets/ubc.jpg"
import img7777 from "../../../../assets/pst.James.jpg"
import ProgramsR from './ProgramsR'

function AboutR() {
  return (
    <div>
     <div className='abt' id='aboutR'>
     <h3>About Us</h3>
      <p>Tumaini Langata was founded by Pst Jackton
        and Bishop Fred Ogutu. The church originated from 
        Tumaini Kibera with Pst Jackton from Tumaini Kibera and 
        Bishop form Tumaini Gitwamba"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
        <h4>Our Church</h4>
        <p>Our church has a few programs that it runs.
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
           in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
                  <h4>Pst Joseph Wanyama (Senior Pastor)</h4>
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
               <h4>Pst Wilson Omondi</h4>
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
               <img className="A-img" src={img7777} alt="about us" />
            </div>
         </div>

         <div data-aos="fade-left" className="about-column">
            <div className='about-content'>
               <h4>Pst James Wanyama</h4>
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
        </div>
    </div>
  )
}

export default AboutR
