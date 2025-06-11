import React from 'react'
import { Experience } from '../components/Experience'
import { experience } from '../data/cvData'
import { skills } from '../data/cvData'
import { Education } from '../components/Education'
import ProjectCard from '../components/ProjectCard'

export default function About() {
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
    pageUrl: 'https://zajackrzysztof00.github.io/Rick-and-Morty/'
  },
];
  return (
    <section>
      <h1>Krzysztof Zając</h1>
      <p>
        Validation Engineer at BWI Poland Technologies. Passionate about software development,
        data analysis, and innovative solutions.
      </p>
      <p>
      Skilled in Python, C#, SQL, Java, JavaScript and more.
      </p>
      <h1>Projects</h1>
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </section>
  )
}
