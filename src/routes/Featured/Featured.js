import React from "react"
//import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <h1>Church Gatherings</h1>
          <h4>Sunday's 10:00 AM. At our Lcal churches</h4>
          {/* <Heading title='Featured Property Types' subtitle='Find All Type of Property.' /> */}
          {/* <FeaturedCard /> */}
        </div>
      </section>
    </>
  )
}

export default Featured