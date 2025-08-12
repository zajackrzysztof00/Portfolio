import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <NavLink to="/Portfolio" end className={({ isActive }) => isActive ? 'active' : ''}>
        Home
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
        Projects
      </NavLink>
      <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>
        Experience
      </NavLink>
      <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>
        Education
      </NavLink>
      <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>
        Skills
      </NavLink>
      <NavLink to="/certifications" className={({ isActive }) => isActive ? 'active' : ''}>
        Certifications
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
        Contact
      </NavLink>
    </nav>
  )
}
