import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram }from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
       <footer>
      {/* <img id ="logo" src={dove} alt="" /> */}

       <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#our churches">Our Churches</a></li>
        <li><a href="#services">News & Media</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#support">Support</a></li>
        <li><a href="#careers">Careers</a></li>
        </ul>
        <div className="footer_socials">
          <a href="https://facebook.com"><BsFacebook /></a>
          <a href="https://facebook.com"><FiInstagram /></a>
          <a href="https://facebook.com"><BsTwitter /></a>
        </div>

        <div className='footer_copyright'>
         <small>&copy; 2023 TUMAINI MINISTRIES. All rights reserved.</small>
        </div>
       </footer>    
  )
}

export default Footer