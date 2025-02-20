import React from 'react'
import logo from "../images/git.png"
import linklogo from "../images/linkdin.png"
import avatar from "../images/avatar.jpeg"
import "./About.css"

function About() {
  return (
    <div id='about'>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">SOCIALS</div>
          <div className="card-back">
            <div className='icons'>
              <p><a href="https://github.com/abisheksinghnegi">
                  <img className='giticon' src={logo} alt="GitHub"/>
              </a></p>
              <h2 className='iconname'>GITHUB</h2>
            </div>
            <div className='icons'>
              <p><a href="http://linkedin.com/in/abishek-singh-negi-a980222b0">
                  <img className='giticon' src={linklogo} alt="LinkedIn"/>
              </a></p>
              <h2 className='iconname'>LINKEDIN</h2>
            </div>
          </div>
         </div>
       </div>
       
        <div className="card">
          <div className="card-inner">
            <div className="card-front">ABOUT SITE</div>
          <div className="card-back">
            <div id='paragraph'>
              This web app is created by a front-end React developer as a project to showcase his skills and enhance his resume. The primary purpose of this application is to provide users with a seamless and engaging platform to explore movies, discover trending titles, and receive personalized AI-powered recommendations. Whether you're a movie enthusiast looking for the latest blockbusters or searching for hidden gems, this web app has you covered.  
              This project not only demonstrates the developer's proficiency in React and front-end development.
            </div>
          </div>
         </div>
       </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">ABOUT CREATOR</div>
          <div className="card-back">
            <div id='avatarcon'>
              <img id='avatar' src={avatar} alt="Avatar"/>
            </div>
            <div id='avatardetail'>
              <div className='details'>
                 <h3 className='ad'>NAME:</h3>
                 <h3 className='ad'>SKILLS:</h3>
                 <h3 className='ad'>D.O.B:</h3>
                 <h3 className='ad'>FAV FILM:</h3>
                 <h3 className='ad'>FAV DIRECTOR:</h3>
              </div>
              <div className='details'>
                <h3 className='ad'>Abishek Singh Negi</h3>
                <h3 className='ad'>React.js, API implementation</h3>
                <h3 className='ad'>30.07.2003</h3>
                <h3 className='ad'>A Clockwork Orange 1972</h3>
                <h3 className='ad'>STANLEY KUBRICK</h3>
              </div>
            </div>
          </div>
         </div>
       </div>
    </div>
  )
}

export default About
