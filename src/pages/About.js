import React from 'react'
import profile from '../images/Profile.png'

export default function About() {
  return (
    <div className='Page' id='about'>
        <h2>About Me</h2>
        <img src={profile} alt='Jordan Profile' className='Profile'/>
        <p>I am a Full Stack Software Engineer based out of New York City with skills in web design and database development. I specialize in writing clean code that is readable and easy to understand. I enjoy the challenge of thinking up new solutions within the tech industry. I attended General Assembly, a bootcamp which trained me to develop my tech skills.</p>
        <p>Some of my interest outside of tech include culture and language study. I currently speak 4 languages and on my way to learning my 5th.</p>
        <p>Current Tech Stack: JavaScript | Python | Django | React | EJS | HTML | CSS | Git | Node.js | jQuery</p>
    </div>
  )
}
