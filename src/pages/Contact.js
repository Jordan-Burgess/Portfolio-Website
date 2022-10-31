import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

export default function Contact() {
  return (
    <div className='HalfPage' id='contact'>
        <div>
          <h3>Jordan Burgess</h3>
          <h3>Software Engineer </h3>
        </div>
        <div>
          <p>Location: New York City, NY</p>
          <p>E-mail: alfredjordan93@gmail.com</p>
        </div>
        <div>
          <a href='https://github.com/Jordan-Burgess' target="_blank" rel="noopener noreferrer"><img src={github} alt='github' className='contactlogo git'/></a>
          <a href='https://www.linkedin.com/in/jordanburgess-ny/' target="_blank" rel="noopener noreferrer"><img src={linkedin} alt='linkedin' className='contactlogo'/></a>
        </div>

    </div>
  )
}
