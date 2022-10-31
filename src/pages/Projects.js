import React from 'react'
import projects from '../allProjects'

export default function Projects() {
  return (
    <div id='projects'>
        {projects.map((project) => {
            return (
                <div className='Page'>
                  <h2>{project.name}</h2>
                  <img src={project.image} alt='Project' className='ProjectImage'/>
                  <a href={project.github}>GitHub</a>
                  <a href={project.live}>Live Site</a>
                </div>
            )
        })}    
    </div>
  )
}
