import React from 'react'
import './marrum.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const ProgramsR = () => {
  return (
    <section id ="ProgramsR">
      <h4>Our Programs</h4>
      <div className="container program_container">
        <div className="program_frontend">
          <h4>Current Projects</h4>
          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Water Tank Project</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>This Project is to supply water.</h4>
            <small className="text-light">Future</small>
           </div>
          </article>
        </div>
       
        <div className="program_backend">
        <h4>Future Projects</h4>
          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Re-start a Pre-primary School</h4>
            <small className="text-light">In Progress</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Farming and Livestock Keeping</h4>
            <small className="text-light">Started</small>
            </div>
          </article>
        </div>
      
      </div>
    </section>
  )
}

export default ProgramsR