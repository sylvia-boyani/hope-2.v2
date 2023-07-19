 import {useRef} from 'react'
 import emailjs from 'emailjs-com'
 import './nambemo.css'
 
 const ContactR = () => {
  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3byi8rg', 'template_t76ku5u', form.current, 'PXsguSKj47C94MnW6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  
   return (
     <section>
      <div className='contact-form' id='ContactR'>
        <h2 className='--text-center'>Contact Us</h2>
        <div></div>
        <form ref={form} onSubmit= {sendEmail} className='--form-control
        --card --flex-center --dir-column'>
           <input type='text' placeholder='Full Name' name='user_name' required></input>
           <input type='email' placeholder='Email' name='user_email' required></input>
           <input type='text' placeholder='Subject' name='subject' required></input>
           <textarea name='message' cols='30' rows="10"></textarea>
           <button type='submit' className='contact-btn'>Send Message</button>
        </form>
      </div> 
     </section>
   )
 }
 
 export default ContactR
 