import React from 'react'
import {HiDownload} from 'react-icons/hi'
import bylaws from '../../assets/Tumaini-bylaws.pdf'

function Bylaws() {
  return (
    <div>
      <h3>Our By-Laws</h3>
      <p>
      <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum."</p>
      <a href={bylaws} download>Download pdf<HiDownload/></a>
      </p>
    </div>
  )
}

export default Bylaws
