import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className= "header_socials">
      <a href="https://linkedin.com" target="_blank" rel='nooopener noreferrer'><BsLinkedin /></a>
      <a href="https://github.com" target="_blank" rel='nooopener noreferrer'><BsGithub/></a>
      <a href="https://instagram.com" target="_blank" rel='nooopener noreferrer'><BsInstagram /></a>
      <a href="https://facebook.com" target="_blank" rel='nooopener noreferrer'><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials
