import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import logo from '../assets/new-logo.png'
import './FooMain.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">

       <div className="footer-logo">
        <img src={logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Jesus is the Way, the Truth and Life.&quot;</p>
        {/* <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} /> */}
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div> 
      
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">About</h1>
        <p className="p__opensans">Mission & Belief</p>
        <p className="p__opensans">Meet Our Team</p>
        <p className="p__opensans">Church Planting</p>
        <p className="p__opensans">Statement of faith</p>
        <p className="p__opensans">Contact Us</p>
      </div>

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Ministries</h1>
        <p className="p__opensans">Men & Women</p>
        <p className="p__opensans">Children & Youth</p>
        <p className="p__opensans">Our Schools</p>
        <p className="p__opensans">Prayer Ministry</p>
        <p className="p__opensans">Counselling and Therapy</p>
      </div>

     

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Next Steps</h1>
        <p className="p__opensans">Baptism</p>
        <p className="p__opensans">Partnership</p>
        <p className="p__opensans">Tumaini Connect</p>
        <p className="p__opensans">Give/Support</p>
        <p className="p__opensans">Join Our Felloeship</p>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">HQ Lucky Summer, Nairobi</p>
        <p className="p__opensans">KENYA  AFRICA</p>
        <p className="p__opensans">+254 791351887</p>
        <p className="p__opensans">+254 743691780</p>
        <p className="p__opensans">tumaini.ministries@gmail.com</p>
      </div>
    </div>
    

    <div className="footer__copyright">
      <p className="p__opensans"><small>&copy;2023 Tumaini Ministries Centre. All Rights reserved.  Site by Boyani Codes</small></p>
    </div>

  </div>
);

export default Footer;