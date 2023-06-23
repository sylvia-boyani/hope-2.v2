import React from 'react'
import './AboutWho.css'
//import first from '../assets/first.jpeg'
import {FaUsers} from 'react-icons/fa'
import {FcApproval} from 'react-icons/fc'
import {GiProgression} from 'react-icons/gi'

const About = () => {
  return (
    <section id= "About">
     <h5>Get to know</h5>
     <h2>About Us</h2>

     <div className="container about_container">
      <div className="about_me">
        {/* <div className="about_me-image">
          <img src={first} alt="about us" />
        </div> */}
      </div>
       <div className="about_content">
            
          <h3>Our Vision</h3>
          <p>To rehabilitate slum dwellers and train them and 
             other young people for Christian living and ministry
            through our one year Discipleship program. Offering
            additional assistance in their spiritual or secular development
            for those who left the program. 
            To have a life changing 
            impact to slum dwellers through teams of young people who
            evangelize and plant independent churches in the slums of
             nairobi.
            To establish social ministries which will meet the needs of slum 
            dwellers as an act of Christian compassion and as a means to
            reach them with the gospel.</p>
            <h3>Our Mission</h3>
            <p>To establish leader-ships and fellowships of 
               Christian believers, healthy and stable spiritually, 
              socially, physically and psychologically in the slums
              and other areas of need.</p>
        
       </div>
       <h2 className='core'>Core Values</h2>

        <div className= "about_cards">
          <article className="about_card">
            <FaUsers className="about_icon"/>
            <h5>Community</h5>
           <ul>
           <li><small>We uphold Family</small></li>
           <li><small>We value Partnership</small></li>
           <li><small>We embrace Unity</small></li>
           </ul>
          </article>

          <article className='about_card'>
            <FcApproval className="about_icon"/>
            <h5>Transformation</h5>
           <ul>
            <li><small>Intentional Discipleship</small></li>
            <li><small>Servant Leader</small></li>
            <li><small>Advocacy & Social Action</small></li>
           </ul>
          </article>

          <article className='about_card'>
            <GiProgression className="about_icon"/>
            <h5>Accountability</h5>
            <ul>
            <li><small>To God</small></li>
            <li><small>To one another</small></li>
            <li><small>To the Government</small></li>
            </ul>
          </article>

        </div>


       <p className='who-we-are'>
       <h4>Who we are:</h4>
       <ol>
        <li>A non-denominational Church Ministry totally submitted to the Blessed Holy Spirit.</li>
        <li>An English speaking Church targeting the slum-dwelling populace.</li>
        <li>Missions oriented, with an outreach to the wider community within their context.</li>
        <li>A community of believers, open to people of all tribes, races and social-strata of the community.</li>
        <li>A Church with a ministry approach that is holistic; we seek to reach out to the whole person with the life changing Gospel.</li>
       </ol>
       </p>
        
     </div>
    </section>
  )
}

export default About;