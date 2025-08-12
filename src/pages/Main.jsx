import React from 'react'
import { Experience } from '../components/Experience'
import { experience } from '../data/cvData'
import { skills } from '../data/cvData'
import { Education } from '../components/Education'

export default function About() {
  // Simple tech icon component with fallback
  const TechIcon = ({ tech, alt }) => {
    const [imageError, setImageError] = React.useState(false)
    
    const techLogos = {
      Python: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      'C#': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
      Java: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      JavaScript: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      React: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      SQL: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
      TensorFlow: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
      Docker: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg'
    }

    const fallbackEmojis = {
      Python: '🐍',
      'C#': '⚡',
      Java: '☕',
      JavaScript: '🌐',
      React: '⚛️',
      SQL: '🗄️',
      TensorFlow: '🤖',
      Docker: '🐳'
    }

    if (imageError || !techLogos[tech]) {
      return <span className="tech-emoji">{fallbackEmojis[tech] || '💻'}</span>
    }

    return (
      <img 
        src={techLogos[tech]} 
        alt={alt || tech} 
        onError={() => setImageError(true)}
      />
    )
  }

  return (
    <section>
      <div className="hero-section">
        <h1>Krzysztof Zając</h1>
        <h2>Software Engineer & Materials Specialist</h2>
        <p>
          Validation Engineer at BWI Poland Technologies with expertise in software development,
          data analysis, and automated testing solutions. Currently pursuing postgraduate studies 
          in Software Development Methods at AGH University of Science and Technology.
        </p>
        <p>
          Specialized in Python development (pandas, NumPy, TensorFlow, Keras), database technologies 
          (SQL, NoSQL, Big Data), and modern web technologies. Experienced in developing automated 
          calculation methods, test result processing systems, and implementing machine learning 
          models for data analysis.
        </p>
        
        <div className="tech-stack">
          <h3>Core Technologies</h3>
          <div className="tech-logos">
            <div className="tech-logo-item">
              <TechIcon tech="Python" alt="Python" />
              <span>Python</span>
            </div>
            <div className="tech-logo-item">
              <TechIcon tech="C#" alt="C#" />
              <span>C#</span>
            </div>
            <div className="tech-logo-item">
              <TechIcon tech="Java" alt="Java" />
              <span>Java</span>
            </div>
            <div className="tech-logo-item">
              <TechIcon tech="JavaScript" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="tech-logo-item">
              <TechIcon tech="React" alt="React" />
              <span>React</span>
            </div>
            <div className="tech-logo-item">
              <TechIcon tech="SQL" alt="SQL" />
              <span>SQL</span>
            </div>
            <div className="tech-logo-item">
              <TechIcon tech="TensorFlow" alt="TensorFlow" />
              <span>TensorFlow</span>
            </div>
            <div className="tech-logo-item">
              <TechIcon tech="Docker" alt="Docker" />
              <span>Docker</span>
            </div>
          </div>
        </div>
        
        <div className="contact-links">
          <a href="mailto:zajackrzysztof00@gmail.com">zajackrzysztof00@gmail.com</a> | 
          <a href="https://github.com/zajackrzysztof00" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
          <span> 512 629 632 | Kraków, Poland</span>
        </div>
      </div>
    </section>
  )
}
