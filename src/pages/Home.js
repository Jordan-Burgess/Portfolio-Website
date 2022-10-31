import React from 'react'
import logo from '../images/logo-no-background.png'

export default function Home() {
  return (
    <div className='Page' id='home'>
        <img src={logo} alt='logo' className='MainLogo'/>
        <div className='info'>
          <h1>Software Engineer - Making applications that change lives</h1>
          <p>Specializing in Full-Stack Development using JavaScript, Python, Django, and React.js</p>
        </div>
    </div>
  )
}
