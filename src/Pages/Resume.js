import React from 'react'
import Footer from '../Setup/Footer'
import imgA from '../Media/StreetAlley1.jpg'
import doc from '../Media/OJ-Resume_1.jpg'
import ac from '../Media/PIcons/Otis_anima.png'
import dpi from '../Media/PIcons/Death_Pong(Instruct_LR).png'
import gi from '../Media/PIcons/Galaga_Ico.png'
import rdi from '../Media/PIcons/Rock Dodger(Icon).png'

function Resume() {
  return (
    <div className='resume'>
      {/* <div className='resume_icons'></div> */}
      {/* <div className='resume_container'><img className='resume_doc' src={doc}></img></div> */}

      {/* Container */}
      <div className='resume_container'>
        <div className='resume_title'>Resume</div>
        <div className='resume_banner'>Front End Developer / CSC Major</div>

          <div className='resume_container_icons'>
            <div id='icon_b1'><img src={ac} id='ac'></img></div>
            <div id='game_icons'>
              <div id='icon_b2'><img src={gi} id='gi'></img></div>
              <div id='icon_b3'><img src={dpi} id='dpi'></img></div>
              <div id='icon_b4'><img src={rdi} id='rdi'></img></div>
            </div>
          </div>
          <div className='resume_container_doc'><img src={doc} id='resume_img'></img></div>

      </div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Resume