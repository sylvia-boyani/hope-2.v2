import React from 'react'
import './nambemo.css'
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
           <h4>Church Building</h4>
            <small className="text-light">Ongoing</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Maize farming on a half acre</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Teaching Women Tailoring</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Youth Empowerment Program</h4>
            <small className="text-light">Operational</small>
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
            <h4>Church Instruments</h4>
            <small className="text-light">Future</small>
            </div>
          </article>
        </div>
       
        <div className="program_backend">
        <h4>Future Projects</h4>
          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Buy land</h4>
            <small className="text-light">In Progress</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Church Block building</h4>
            <small className="text-light">Started</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Pastors Training</h4>
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