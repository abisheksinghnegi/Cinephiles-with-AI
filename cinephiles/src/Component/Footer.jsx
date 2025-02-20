import React from 'react'
import "./Footer.css"
import iglogo from "../images/instagram.png"
import fblogo from "../images/facebook.png"
import gilogo from "../images/github.png"
import ldlogo from "../images/linkedin.png"


export default function Footer() {
  return (
    <div id="footer">
      <div id='div1'>
        <div className='dib1'>
          <h1>CINEPHILE</h1>
          <h3>Front-end Project</h3>
        </div>
        <div className='dib2'>
        <h3 className='h'>FRONT-END REACT PROJECT</h3>
        <h3 className='h'> GEMINI API </h3>
        <h3 className='h'>REACT DEVELOPER</h3>
        <h3 className='h'>CSS UI DESIGN</h3>
        
      </div>
        <div id='aa' className='dib2'>
        <h3 className='h'>LINKEDIN</h3>
        <h3 className='h'>GITHUB</h3>
        <h3 className='h'>INSTAGRAM</h3>
        <h3 className='h'>FACEBOOK</h3>
      </div>
        <div id='aa2' className='dib2'>
        <h3 className='h'>API's ARE USED</h3>
        <h3 className='h'>GEMINI API</h3>
        <h3 className='h'>THE MOVIE DATABASE API</h3>
        <h3 className='h'>AXIOS FETCHED</h3>
      </div>
        <div id='aa3' className='dib2'>
        <h3 className='h'>JAVA SCRIPT</h3>
        <h3 className='h'>CSS</h3>
        <h3 className='h'>HTML</h3>
        <h3 className='h'>REACT.JS</h3>
      </div>
      </div>
      <div id='div2'>
        <div id='spng'>
          <p><a href="https://www.instagram.com/i">
             <img className='giticon1' src={iglogo} alt="W3Schools.com"/>
            </a>
          </p>
          <p><a href="https://www.facebook.com/">
             <img className='giticon1' src={fblogo} alt="W3Schools.com"/>
            </a>
          </p>
          <p><a href="https://github.com/abisheksinghnegi">
             <img className='giticon1' src={gilogo} alt="W3Schools.com"/>
            </a>
          </p>
          <p><a href="http://linkedin.com/in/abishek-singh-negi-a980222b0">
             <img className='giticon1' src={ldlogo} alt="W3Schools.com"/>
            </a>
          </p>
          
        </div>
        <h4 id='h4'> &copy; Copyright All Right Reserved</h4>
      </div>

    </div>
  )
}
