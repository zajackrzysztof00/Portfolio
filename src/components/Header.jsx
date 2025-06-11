import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <NavLink to="/Portfolio/" end className={({ isActive }) => isActive ? 'active' : ''}>
        Main
      </NavLink>
      <NavLink to="/Portfolio/education" className={({ isActive }) => isActive ? 'active' : ''}>
        Education
      </NavLink>
      <NavLink to="/Portfolio/experience" className={({ isActive }) => isActive ? 'active' : ''}>
        Experience
      </NavLink>
      <NavLink to="/Portfolio/contact" className={({ isActive }) => isActive ? 'active' : ''}>
        Contact
      </NavLink>
    </nav>
  )
}
