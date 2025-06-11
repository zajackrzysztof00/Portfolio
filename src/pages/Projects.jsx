import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'X-Ray-Diffraction',
    description: 'Analysis and visualization of X-ray diffraction data.',
    url: 'https://github.com/zajackrzysztof00/X-Ray-Diffraction',
  },
  {
    title: 'Key-words-learning-AI',
    description: 'An AI project focused on keyword learning algorithms.',
    url: 'https://github.com/zajackrzysztof00/Key-words-learning-AI',
  },
  {
    title: 'AI-Model-from-scratch',
    description: 'Building an AI model from scratch using Python.',
    url: 'https://github.com/zajackrzysztof00/AI-Model-from-scratch',
  },
  {
    title: 'Rick-and-Morty',
    description: 'React app using Rick and Morty API for character exploration.',
    url: 'https://github.com/zajackrzysztof00/Rick-and-Morty',
  },
  {
    title: 'FrontEnd-BackEnd',
    description: 'Fullstack project with React frontend and .NET backend.',
    url: 'https://github.com/zajackrzysztof00/FrontEnd-BackEnd',
  },
]

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </section>
  )
}
