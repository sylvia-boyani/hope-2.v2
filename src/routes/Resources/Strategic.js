import React from 'react'
import {HiDownload} from 'react-icons/hi'
import strategic from '../../assets/strategic-plan.pdf'

function Strategic() {
  return (
    <div className=''>
      <h3>Strategic Plan</h3>
      <h5>Strategic Plan</h5>
      <a href={strategic} download className='btn'>Download pdf<HiDownload/></a>
    </div>
  )
}

export default Strategic
