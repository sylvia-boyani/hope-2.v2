import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import img7 from '../assets/payment.png'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yd1csq6', 'template_8vyrgjd', form.current, "7hlHmFu7Nm0syOdCOq7_X")
    
    e.target.reset()
  };
  return (
    <section id = "contact">
      <h2>Support Us</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail  className='contact_option-icon' />
            <h4>Email</h4>
            <h5>sylviaboyani11@gmail.com</h5>
            <a href='mailto:sylviaboyani11@gmail.com' target="_blank" rel='noreferrer'>Send Email</a>
          </article>
          <article className='contact_option'>
            <BsTwitter  className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>sylvia-boyani</h5>
            <a href ="https://twitter.com/BoyaniSylvia" target="_blank" rel='noreferrer'>Send Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+254 791351887</h5>
            <a href='https://api.whatsapp.com/send?phone+254791351887' target="_blank" rel ="noreferrer">Send a Message</a> 
          </article>
        </div>
        {/* end of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input  type="text" name="name" placeholder="Your Full Name" required />
          <input  type="email" name="email" placeholder="Your Email" required />
          <input  type="text" name="name" placeholder='Project you want to support' required >
          {/* <select>
          <option value="grapefruit">Tumati</option>
          <option value="lime">Mabadiliko ya Wanaume</option>
          <option selected value="coconut">Tumaini Missions</option>
          <option value="mango">Tumaini Real-Estate</option>
         </select> */}
          </input>
         
        
          {/* <input  type="integer" name="integer" placeholder='Amount in USD' required /> */}
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send </button>
        </form>
      </div>
      <div className='payment'>
      We Accept :   <img src={img7} alt="method"/>
      </div>
    </section>
  )
}

export default Contact