import React from 'react'
import video from '../assets/video1.mp4'
import './Home.css'
import HeaderSocials from './HeaderSocials'
import Slider from '../routes/Slider.js'
//import News from './Services'
import Gallery from './Gallery'
import Footer from './footer'
import Events from '../routes/Events'
import Featured from './Featured/Featured'


function Home() { 
  return (
    <div>
     <div id='overlay'>
     <video id ="vida" src={video} autoPlay loop muted />
     
     </div>
      <div className="container header_container">
        <div classname ="header_content">
        <h5>Hello, Welcome to</h5>
        <h1>Tumaini Ministries Centre</h1>
        <h2><i>He gives hope to the poor and silences the wicked.</i></h2>
        <h2><i>JOB 5:16</i></h2>
        </div>
        <h3 className= "text-light">Needing Jesus Christ Together</h3>
        <HeaderSocials />
        <Featured />
        <Slider />
        <Events />
        <Gallery />
        {/* <News /> */}
        <Footer />
      </div>


      
    </div>
  )
}

export default Home
