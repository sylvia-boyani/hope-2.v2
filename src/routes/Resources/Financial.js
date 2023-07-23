import React from 'react'
import {HiDownload} from 'react-icons/hi'
import financial from '../../assets/Financial-docs2023.pdf'

function Financial() {
  return (
    <div>
      <h3>2021-2022 Financial Reports</h3>
      <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum."</p>
      <a href={financial} download>Download pdf<HiDownload/></a>
    </div>
  )
}

export default Financial
