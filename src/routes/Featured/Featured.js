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
         <p>Sundays 10:00AM at our Local churches</p>
        </div>
        <div className='feat-btn'>
          <button>What to expect<FaArrowRight /></button>
        </div>
      </div>
    </>
  )
}

export default Featured