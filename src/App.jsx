import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './pages/Main'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Experience } from './components/Experience'
import { Education } from './components/Education'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/Portfolio/" element={<Main />} />
            <Route path="/Portfolio/experience" element={<Experience />} />
            <Route path="/Portfolio/education" element={<Education />} />
            <Route path="/Portfolio/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
