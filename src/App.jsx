import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './pages/Main'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import Skills from './components/Skills'
import { Certifications } from './components/Certifications'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/Portfolio" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
