import React from 'react'
import projects from '../allProjects'

export default function Projects() {
  return (
    <div id='projects' className='Page'>
        <h1>My Projects</h1>
        <div className='AllProjects'>
        {projects.map((project) => {
            return (
                <div className='ProjectCard'>
                  <h2>{project.name}</h2>
                  <img src={project.image} alt='Project' className='ProjectImage'/>
                  <p className='description'>{project.description}</p>
                  <p>Tech Used: {project.tech.join(' | ')}</p>
                  <div className='links'>
                    <a href={project.github}>GitHub</a>
                    <a href={project.live}>Live Site</a>
                  </div>
                </div>
            )
        })}   
        </div> 
    </div>
  )
}
