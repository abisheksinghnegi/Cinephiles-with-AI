import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
import oglogo from "../images/co.png"

export default function Header() {
  return (
    <>
    <div id='container'>
    <NavLink to="/"><img src={oglogo} id='oglogo' /></NavLink>
    <h1 id='appname'>CINEPHILES</h1>
      <div id='links'>
      <NavLink className="l" to="/">Home</NavLink>
      <NavLink className="l" to="movie">Movie</NavLink>
      <NavLink className="l" to="askai">Ask AI</NavLink>
      <NavLink className="l" to="about">About Us</NavLink>
      </div>
    </div>
    </>
  )
}
