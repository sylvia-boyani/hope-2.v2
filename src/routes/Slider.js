import React from 'react'
import './Slider.css'
import Tumahouse from '../assets/tuma-house.jpeg';
import board from '../assets/board.jpeg'
import men from '../assets/mens.jpeg'
import women from '../assets/women.jpeg'
import agm from '../assets/agm.jpeg'
import youth from '../assets/youth.jpeg'

// import Swiper core and required modules
import { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Slider = () => {
  return (
    <section id='testimonials'>
      <Swiper className='container_testimonials-container'
            
       modules={[ Autoplay]} 
       spaceBetween={40} 
       slidesPerView={1} 
       autoplay={true}
      
      >     

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={Tumahouse} alt="" />
          </div>
            <h5 className='client_name'>Tumaini House</h5>
            <small className='client_review'>
            
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={board} alt="" />
          </div>
            <h5 className='client_name'>Executive Board Members</h5>
            <small className='client_review'>
            
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={men} alt="" />
          </div>
            <h5 className='client_name'>Bishop with Coastal region Pastors</h5>
            <small className='client_review'>
            
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={women} alt="" />
          </div>
            <h5 className='client_name'>Women in Ministry</h5>
            <small className='client_review'>
            
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={agm} alt="" />
          </div>
            <h5 className='client_name'>Annual General Meeting</h5>
            <small className='client_review'>
            
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">

      

          <div className='client_avatar'>
            <img src={youth} alt="" />
          </div>
            <h5 className='client_name'>Our Youth</h5>
            <small className='client_review'>
            
            </small>
          
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Slider;