import React from 'react'
import logo from '../images/logo-no-background.png'
import resume from '../images/resume.pdf'

export default function Nav() {
  return (
    <nav className='navbar navbar-dark fixed-top navbar-expand-lg bg-dark' id='main-nav'>
      <div class="container-fluid">
      <a className='navbar-brand' href='#home'><img className='logo' src={logo} alt='logo'/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a className='nav-link' href='#about'>About</a>
          <a className='nav-link' href='#projects'>Projects</a>
          <a className='nav-link' href='#contact'>Contact</a>
          <a className='nav-link' href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        </div>
      </div>
    </nav>

  )
}
