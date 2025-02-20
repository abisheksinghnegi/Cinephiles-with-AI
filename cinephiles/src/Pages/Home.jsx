import React from 'react'
import "./Home.css"
import rb from "../images/robert.png"


export default function Home() {
  return (
    <div id='home'>
      <div id='tdiv'>
        <div>
          <img id='rb' src={rb} alt="rb" />
        </div>
        <div class="container">
            <div class="box">
              <span></span>
              <div class="content">
                <h2>WELCOME TO CINEPHILES</h2>
                <p>This app provides movie with their info,trailers,torrent download links,and a AI chat platform with whom you can ask for movie recommendation.</p>
              </div>
            </div>
          </div>

        <div id='rddiv'>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                 <i class="fab fa-facebook-f icon"></i>    </a>
              </li>
              <li>
                <a href="https://www.instagram.com/i"><i class="fab fa-instagram icon"></i></a>
              </li>
             <li>
               <a href="http://linkedin.com/in/abishek-singh-negi-a980222b0"><i class="fab fa-linkedin-in icon"></i></a></li>
              <li>
                <a href="https://github.com/abisheksinghnegi"><i class="fab fa-github icon"></i></a></li>
            </ul>
          </div>
        </div>
    </div>
  )
   
}
