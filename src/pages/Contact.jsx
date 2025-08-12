import React from 'react'

export default function Contact() {
  return (
    <section>
      <h1>Contact Information</h1>
      <div className="contact-info">
        <div className="contact-item">
          <strong>Email:</strong> 
          <a href="mailto:zajackrzysztof00@gmail.com">zajackrzysztof00@gmail.com</a>
        </div>
        <div className="contact-item">
          <strong>Phone:</strong> 512 629 632
        </div>
        <div className="contact-item">
          <strong>Location:</strong> Kraków, Poland
        </div>
        <div className="contact-item">
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/zajackrzysztof00"
            target="_blank"
            rel="noopener noreferrer"
          >
            zajackrzysztof00
          </a>
        </div>
        <div className="contact-item">
          <strong>Portfolio:</strong>{' '}
          <a
            href="https://zajackrzysztof00.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            zajackrzysztof00.github.io/Portfolio
          </a>
        </div>
      </div>
      
      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a Software Engineer and Materials Specialist with a strong background in both 
          software development and materials engineering. Currently working as a Validation Engineer 
          at BWI Poland Technologies, where I develop automated testing solutions, implement machine 
          learning models, and create data analysis workflows.
        </p>
        <p>
          I'm passionate about combining my technical skills in programming with my scientific 
          background to solve complex engineering problems. I enjoy working with Python, databases, 
          and modern web technologies to create efficient and innovative solutions.
        </p>
      </div>
    </section>
  )
}
