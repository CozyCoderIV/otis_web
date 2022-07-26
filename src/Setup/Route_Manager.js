import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from '../Pages/Home'
import Resume from '../Pages/Resume'
import Projects from '../Pages/Projects'
import Error from '../Pages/Error'

function Route_Manager() {
  return (
    <div>
      <Router>

        {/* Navigator */}
        <nav className='navbar'>
          <div className='navbar_title'><div id='f_name'>Otis</div><div id='l_name'>Jackson IV</div></div>
          <div className='navbar_links'>
            <Link to={"/Home"} className='navbar_link'>Home</Link>
            <Link to={"/Resume"} className='navbar_link'>Resume</Link>
            <Link to={"/Projects"} className='navbar_link'>Projects</Link>
          </div>
        </nav>

        {/* Webpage Change */}
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/Home"} element={<Home />}></Route>
          <Route path={"/Projects"} element={<Projects />}></Route>
          <Route path={"/Resume"} element={<Resume />}></Route>
          <Route path={"*"} element={<Error />}></Route>
        </Routes>

      </Router>
    </div>
  )
}

export default Route_Manager