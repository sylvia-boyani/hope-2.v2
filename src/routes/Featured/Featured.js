import React from "react"
//import Heading from "./Heading"
import "./Featured.css"
//import FeaturedCard from "./FeaturedCard"
import { FaArrowRight } from "react-icons/fa";


const Featured = () => {
  return (
    <>
      <div className='featured'>
        <div className='feat-container'>
         <h1>Church Gatherings</h1>
         <h4>Sundays @ 10:00AM at our Local churches.</h4>
        </div> 
        <div className='feat-btn'>
          <button className='feat-btn'><a href="/raila" alt="churches" rel="noopener noreferrer nofollow">What to expect <span className='arrowt'>|</span><span className="arrowt"><FaArrowRight /></span></a></button>
        </div>
      </div>
    </>
  )
}

export default Featured