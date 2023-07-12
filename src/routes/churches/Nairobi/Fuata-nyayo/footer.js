import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram }from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {HashLink as Link} from 'react-router-hash-link'


const Footer = () => {
  return (
       <div className='footerR'>
      {/* <img id ="logo" src={dove} alt="" /> */}

       <ul className="permalinks">
       <li>
            <Link to="#homeR">Home</Link>
            </li>
            <li>
              <Link to="#aboutR">About</Link>
            </li>
            <li>
              <Link to="#ProgramsR">Our Programs</Link>
            </li>
            <li>
              <Link to="#teamR">Team</Link> 
            </li>
            <li>
              <Link to="#giveR">Give</Link>
            </li>
            <li>
              <Link to="#contactR">Contact</Link>
            </li>
        </ul>
        <div className="footer_socials">
          <a href="https://facebook.com"><BsFacebook /></a>
          <a href="https://facebook.com"><FiInstagram /></a>
          <a href="https://facebook.com"><BsTwitter /></a>
          <a href="https://facebook.com"><BsFacebook /></a>
        </div>

        <div className='footer_copyright'>
          <p>Location: South B in the slums of Mukuru fuatanyayo near South B Mosque</p>
         <small>&copy; 2023 TUMAINI MINISTRIES. All rights reserved.</small>
        </div>
       </div>    
  )
}

export default Footer