import React from 'react'
import './marrum.css'
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
           <h4>Farming</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Water Tanks</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Start School</h4>
            <small className="text-light">Future</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Mabadiliko ya Wanadada</h4>
            <small className="text-light">Future</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Tumaini House Rentals</h4>
            <small className="text-light">Future</small>
            </div>
          </article>
        </div>
       
        <div className="program_backend">
        <h4>Future Projects are to curb</h4>
          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Children strating school late.</h4>
            <small className="text-light">In Progress</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Support Church financially.</h4>
            <small className="text-light">Started</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Teaching Materials</h4>
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