import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

function Footer() {
  return (
    <div className='foot'>
      <div className='foot_icons'>
        <a href='https://github.com/CozyCoderIV' target="_blank"><FaGithub  className='foot_icon'/></a>
        <a href='https://www.instagram.com/o.j.daprince_iv/' target="_blank"><FaInstagram  className='foot_icon'/></a>
        <a href='https://www.linkedin.com/in/otis-jackson4/' target="_blank"><FaLinkedin  className='foot_icon'/></a>
      </div>
      <div className='foot_text'>
        <div className='foot_text_child1'>"Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination</div>
        <div className='foot_text_child2'>embraces the entire world, and all there ever will be to know and understand." - Albert Einstein</div>
      </div>
    </div>
  )
}

export default Footer