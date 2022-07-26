import React from 'react'
import Footer from '../Setup/Footer'
import {FaStarHalfAlt} from "react-icons/fa";
import gv from '../Media/Video/GalagaVid.mp4'
import dpv from '../Media/Video/death_PongVid.mp4'
import rdv from '../Media/Video/RockDodgerPresentation.mp4'
import sp from '../Media/PIcons/SoullSkull.png'

function Projects() {
  return (
    <div className='projects'>
      {/* Header */}
      <div className='projects_header'>
        <div className='projects_header_title'>Projects</div>
        <div className='projects_header_banner'>Front End Developer / CSC Major</div>

        <img className='projects_header_img' src={sp}></img>
      </div>

      {/* Body */}
      <div className='projects_body'>

        {/* Rock Dodger */}
        <div className='projects_body_child'> 
          <div className='projects_body_child_container'> 
            {/* Details */}
            <div className='projects_body_child_container_c1'>
              <div className='projects_body_child_container_c1_title'>Project III</div>
              <div className='projects_body_child_container_c1_banner'></div>

              <div className='projects_body_child_details'>
                <div className='projects_body_child_details_container'><h3>Start Date:</h3><h3 id='home_date1'>04/15/2022</h3></div>
                <div className='projects_body_child_details_container'><h3>Finish Date:</h3><h3 id='home_date2'>04/21/2022</h3></div>
                <div className='projects_body_child_details_container'>
                  <h3 className='diff'>Difficulty Lvl.:</h3>
                  <div className='star_box'>
                    <FaStarHalfAlt/><FaStarHalfAlt/><FaStarHalfAlt/><FaStarHalfAlt/><FaStarHalfAlt/>
                  </div>
                </div>
                <div className='projects_body_child_details_container'><h3>Project Type:</h3><h3 className='pt'>Javascript</h3></div>
              </div>
            </div>

            {/* Description */}
            <div className='projects_body_child_container_c1'>
              <div className='projects_body_child_container_c1_title'>Rock Dodger</div>
              <div className='projects_body_child_container_c1_banner'></div>

              <div className='projects_body_child_paragraph'>
                <h4>"This is the official first completed and developed video game I've completed. As a graphics artist myself, all of the artwork is originally made by me. This project was heavily influenced by the classic arcade game known as Galaga. The drive and motivation behind this particular project was to showcase how far I'm willing to go as a young dev/artist to fundamentally understand the core concepts of game design without using an actual game engine."</h4>
              </div>
            </div>

            {/* Video */}
            <div className='projects_body_child_container_c1'>
              <video  id='vid' src={rdv} width='100%' height='400px' controls autoPlay loop></video>
            </div>
          </div>
        </div>

        {/* Death Pong */}
        <div className='projects_body_child'> 
          <div className='projects_body_child_container'> 
            {/* Details */}
            <div className='projects_body_child_container_c1'>
              <div className='projects_body_child_container_c1_title'>Project II</div>
              <div className='projects_body_child_container_c1_banner'></div>

              <div className='projects_body_child_details'>
                <div className='projects_body_child_details_container'><h3>Start Date:</h3><h3 id='home_date1'>01/18/2022</h3></div>
                <div className='projects_body_child_details_container'><h3>Finish Date:</h3><h3 id='home_date2'>02/02/2022</h3></div>
                <div className='projects_body_child_details_container'>
                  <h3 className='diff'>Difficulty Lvl.:</h3>
                  <div className='star_box'>
                    <FaStarHalfAlt/><FaStarHalfAlt/><FaStarHalfAlt/><FaStarHalfAlt/><FaStarHalfAlt/>
                  </div>
                </div>
                <div className='projects_body_child_details_container'><h3>Project Type:</h3><h3 className='pt'>Unity</h3></div>
              </div>
            </div>

            {/* Description */}
            <div className='projects_body_child_container_c1'>
              <div className='projects_body_child_container_c1_title'>Death Pong</div>
              <div className='projects_body_child_container_c1_banner'></div>

              <div className='projects_body_child_paragraph'>
                <h4>"As a complete rookie, this project will be labeled as my introduction to using game engines. Death_Pong was developed as my first individual game created in Unity. Funny story is without prior experience and the help of Youtube, I was able to pick up C# at an efficient rate. I also learned the fundamentals of using the actual Unity game engine. Death Pong was also an assignment on my first day back to school from the winter break. I was given 2 weeks to complete, and I let my own individuality run wild with my own creativity."</h4>
              </div>
            </div>

            {/* Video */}
            <div className='projects_body_child_container_c1'>
              <video  id='vid' src={dpv} width='100%' height='400px' controls autoPlay loop></video>
            </div>
          </div>
        </div>

        {/* Galaga VII */}
        <div className='projects_body_child'> 
          <div className='projects_body_child_container'> 
            {/* Details */}
            <div className='projects_body_child_container_c1'>
              <div className='projects_body_child_container_c1_title'>Project I</div>
              <div className='projects_body_child_container_c1_banner'></div>

              <div className='projects_body_child_details'>
                <div className='projects_body_child_details_container'><h3>Start Date:</h3><h3 id='home_date1'>03/01/2021</h3></div>
                <div className='projects_body_child_details_container'><h3>Finish Date:</h3><h3 id='home_date2'>12/27/2021</h3></div>
                <div className='projects_body_child_details_container'>
                  <h3 className='diff'>Difficulty Lvl.:</h3>
                  <div className='star_box'>
                    <FaStarHalfAlt/><FaStarHalfAlt/><FaStarHalfAlt/><FaStarHalfAlt/><FaStarHalfAlt/>
                  </div>
                </div>
                <div className='projects_body_child_details_container'><h3>Project Type:</h3><h3 className='pt'>Java</h3></div>
              </div>
            </div>

            {/* Description */}
            <div className='projects_body_child_container_c1'>
              <div className='projects_body_child_container_c1_title'>Galaga VII</div>
              <div className='projects_body_child_container_c1_banner'></div>

              <div className='projects_body_child_paragraph'>
                <h4>"This is the official first completed and developed video game I've completed. As a graphics artist myself, all of the artwork is originally made by me. This project was heavily influenced by the classic arcade game known as Galaga. The drive and motivation behind this particular project was to showcase how far I'm willing to go as a young dev/artist to fundamentally understand the core concepts of game design without using an actual game engine."</h4>
              </div>
            </div>

            {/* Video */}
            <div className='projects_body_child_container_c1'>
              <video  id='vid' src={gv} width='100%' height='400px' controls autoPlay loop></video>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Projects