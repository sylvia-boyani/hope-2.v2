import React from 'react'
import './kibaoni.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const ProgramsR = () => {
  return (
    <section id ="ProgramsR">
      <h4>Our Current and Future Programs</h4>
      <div className="container program_container">
        <div className="program_frontend">
          <h4>Current Projects</h4>
          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Farming </h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Salt Production</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Chicken Farming</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Sunday school Instruments</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Mabadiliko ya Wanadada</h4>
            <small className="text-light">Operational</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Tumaini House Rentals</h4>
            <small className="text-light">Operational</small>
            </div>
          </article>
        </div>
       
        <div className="program_backend">
        <h4>Future Projects</h4>
          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Elderly Support project</h4>
            <small className="text-light">In Progress</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Tents & Chairs for hire</h4>
            <small className="text-light">Started</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Church Instruments acquisition</h4>
            <small className="text-light">Future</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Mabadiliko ya Wanaume</h4>
            <small className="text-light">Future</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Discipleship Programs</h4>
            <small className="text-light">Future</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Family Counselling</h4>
            <small className="text-light">Future</small>
            </div>
          </article>
        </div>
      
      </div>
    </section>
  )
}

export default ProgramsR