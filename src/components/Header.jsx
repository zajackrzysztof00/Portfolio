import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
        Main
      </NavLink>
      <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>
        Education
      </NavLink>
      <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>
        Experience
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
        Contact
      </NavLink>
    </nav>
  )
}
