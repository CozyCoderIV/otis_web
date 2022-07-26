import React from 'react'
import Footer from '../Setup/Footer'
import clip from '../Media/Video/GalagaVid.mp4'
import { FaReact, FaJava, FaPython, FaCuttlefish, FaJsSquare, FaStarHalfAlt} from "react-icons/fa";
import profp from '../Media/ProfPic(Web).png'

function Home() {
  return (
    <div className='home'>
      {/* Header */}
      <div className='home_header'>
          <div className='home_header_title'>Welcome, I'm Otis Jackson IV</div>
          <div className='home_header_banner'>Front End Developer / CSC Major</div>
        <div className='home_header_imgc'><img src={profp} id='home_img'></img></div>
      </div>

      {/* Body */}
      <div className='home_body'>
        
        <div className='home_body_cp'>
          <div className='home_body_cp_container1'>
            {/* Details */}
            <div className='home_body_cp_container1_c1'>
              <div className='home_body_cp_container1_c1_title'>Featured Project</div>
              <div className='home_body_cp_container1_c1_banner'></div>

              <div className='home_body_cp_details'>
                <div className='home_body_cp_details_container'><h3>Start Date:</h3><h3 id='home_date1'>03/01/2021</h3></div>
                <div className='home_body_cp_details_container'><h3>Finish Date:</h3><h3 id='home_date2'>12/27/2021</h3></div>
                <div className='home_body_cp_details_container'>
                  <h3 className='diff'>Difficulty Lvl.:</h3>
                  <div className='star_box'>
                    <FaStarHalfAlt/><FaStarHalfAlt/><FaStarHalfAlt/><FaStarHalfAlt/><FaStarHalfAlt/>
                  </div>
                </div>
                <div className='home_body_cp_details_container'><h3>Project Type:</h3><h3 className='pt'>Java</h3></div>
              </div>
            </div>

            {/* Description */}
            <div className='home_body_cp_container1_c1'>
              <div className='home_body_cp_container1_c1_title'>Galaga VII (Java Edition)</div>
              <div className='home_body_cp_container1_c1_banner'></div>
              <div className='home_body_cp_paragraph'>
                <h4>"This is the official first completed and developed video game I've completed. As a graphics artist myself, all of the artwork is originally made by me. This project was heavily influenced by the classic arcade game known as Galaga. The drive and motivation behind this particular project was to showcase how far I'm willing to go as a young dev/artist to fundamentally understand the core concepts of game design without using an actual game engine."</h4>
              </div>
            </div>

            {/* Video */}
            <div className='home_body_cp_container1_c1'>
              <video  id='vid' src={clip} width='100%' height='400px' controls autoPlay loop></video>
            </div>
          </div>
        </div>

        <div className='home_body_container2'>
          <div className='home_body_container2_c2'>
            <div className='home_body_container2_c2_title'>Educational Journey</div>
            <div className='home_body_container2_c2_banner'></div>

            <div className='home_body_container2_c2_child' id='ec_1'>
              <h3>Louisiana Sate University, LA</h3><h3>Fall of 2020-Current</h3>
            </div>
            <div className='home_body_container2_c2_child' id='ec_2'>
              <h3>Weatherford College, TX</h3><h3>Spring of 2018-Spring of 2020</h3>
            </div>
            <div className='home_body_container2_c2_child' id='ec_3'>
              <h3>Aledo High School, TX</h3><h3>Spring of 2016-Spring of 2020</h3>
            </div>
          </div>

          <div className='home_body_container2_c2'>
            <div className='home_body_container2_c2_title'>Technologies</div>
            <div className='home_body_container2_c2_banner'></div>

            <div className='home_body_container2_c2_icons'>
              <FaReact/><FaJsSquare/><FaPython id='py_icon'/><FaJava id='j_icon'/><FaCuttlefish id='c_icon'/>
            </div>
            <div className='home_body_container2_c2_techs'>
              <div>React</div>
              <div id='js_text'>Javascript</div>
              <div id='py_text'>Python</div>
              <div id='j_text'>Java</div>
              <div id='c_text'>C</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home