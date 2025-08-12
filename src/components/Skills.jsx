import React from 'react'
import { skills } from '../data/cvData'

export function Skills() {
  // Technology logos using more reliable CDN sources
  const techLogos = {
    Python: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'C# (.NET)': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
    Java: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    JavaScript: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    HTML: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    CSS: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    React: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    Git: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
    GitHub: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg',
    Docker: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
    MySQL: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    PostgreSQL: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    SQLite: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg',
    MongoDB: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    DynamoDB: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png',
    Hadoop: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/hadoop/hadoop-original.svg',
    Hive: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Apache_Hive_logo.svg',
    HDFS: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/hadoop/hadoop-original.svg',
    MapReduce: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/hadoop/hadoop-original.svg',
    ETL: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    AWS: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg',
    TensorFlow: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
    Flask: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg',
    Spring: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg',
    VBA: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/VBA_Logo.svg',
    Lua: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/lua/lua-original.svg',
    LaTeX: 'https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg',
    // Software Tools
    'Microsoft Office': 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg',
    'Visual Studio': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg',
    'Visual Studio Code': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
    'IntelliJ IDEA': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg',
    PyCharm: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pycharm/pycharm-original.svg',
    MATLAB: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/matlab/matlab-original.svg',
    Blender: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/blender/blender-original.svg',
    QForm: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Cog_font_awesome.svg/1200px-Cog_font_awesome.svg.png',
  }

  // Fallback emoji icons for when images fail to load
  const fallbackIcons = {
    Python: '🐍',
    'C# (.NET)': '⚡',
    Java: '☕',
    JavaScript: '🌐',
    HTML: '📄',
    CSS: '🎨',
    React: '⚛️',
    Git: '📝',
    GitHub: '🐙',
    Docker: '🐳',
    MySQL: '🗄️',
    PostgreSQL: '🐘',
    SQLite: '💽',
    MongoDB: '🍃',
    DynamoDB: '🗄️',
    Hadoop: '🐘',
    Hive: '🐝',
    HDFS: '🗄️',
    MapReduce: '🗂️',
    ETL: '🔄',
    AWS: '☁️',
    TensorFlow: '🤖',
    Flask: '🌶️',
    Spring: '🌱',
    VBA: '📊',
    Lua: '🌙',
    LaTeX: '📚',
    // Software Tools
    'Microsoft Office': '📊',
    'Visual Studio': '🔨',
    'Visual Studio Code': '💻',
    'IntelliJ IDEA': '🧠',
    PyCharm: '🐍',
    MATLAB: '📊',
    Blender: '🎨',
    QForm: '⚙️',
  }

  const renderSkillLevel = (level) => {
    return (
      <div className="skill-level">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`skill-dot ${i < level ? 'filled' : 'empty'}`}
          />
        ))}
      </div>
    )
  }

  const getLogoForSkill = (skillName) => {
    // Clean up the skill name by removing parentheses and extra text
    const cleanSkillName = skillName.replace(/\([^)]*\)/g, '').trim()
    
    // First try exact match
    if (techLogos[skillName]) {
      return { logo: techLogos[skillName], fallback: fallbackIcons[skillName] || '💻' }
    }
    
    if (techLogos[cleanSkillName]) {
      return { logo: techLogos[cleanSkillName], fallback: fallbackIcons[cleanSkillName] || '💻' }
    }
    
    // Special handling for specific technologies
    const specialMappings = {
      'HDFS': 'Hadoop',
      'MapReduce': 'Hadoop',
      'ETL workflows using Python': 'ETL'
    }
    
    if (specialMappings[cleanSkillName]) {
      const mappedKey = specialMappings[cleanSkillName]
      return { logo: techLogos[mappedKey], fallback: fallbackIcons[mappedKey] || '💻' }
    }
    
    // Then try partial match
    const logoKey = Object.keys(techLogos).find(key => 
      cleanSkillName.toLowerCase().includes(key.toLowerCase()) || 
      key.toLowerCase().includes(cleanSkillName.toLowerCase())
    )
    
    if (logoKey) {
      return { logo: techLogos[logoKey], fallback: fallbackIcons[logoKey] || '💻' }
    }
    
    return { fallback: '💻' }
  }

  const TechIcon = ({ skillName, className = "tech-logo" }) => {
    const { logo, fallback } = getLogoForSkill(skillName)
    const [imageError, setImageError] = React.useState(false)

    if (!logo || imageError) {
      return <span className={`${className}-emoji`}>{fallback}</span>
    }

    return (
      <img 
        src={logo} 
        alt={skillName} 
        className={className}
        onError={() => setImageError(true)}
      />
    )
  }

  return (
    <section>
      <h1>Technical Skills</h1>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skill-items">
            {skills.programmingLanguages.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <div className="skill-name-with-logo">
                    <TechIcon skillName={skill.name} />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  {skill.level && renderSkillLevel(skill.level)}
                </div>
                {skill.details && (
                  <div className="skill-details">{skill.details}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Databases & Big Data</h3>
          <div className="skill-items">
            {skills.databases.map((db, index) => (
              <div key={index} className="skill-item">
                <div className="skill-name">{db.category}</div>
                <div className="skill-technologies-with-logos">
                  {db.technologies.split(', ').map((tech, techIndex) => {
                    const cleanTech = tech.replace(/\([^)]*\)/g, '').trim()
                    return (
                      <div key={techIndex} className="tech-item">
                        <TechIcon skillName={cleanTech} className="tech-logo-small" />
                        <span>{tech}</span>
                      </div>
                    )
                  })}
                </div>
                <div className="skill-details">{db.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Web & Cloud</h3>
          <div className="skill-items">
            {skills.webAndCloud.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <div className="skill-name-with-logo">
                    <TechIcon skillName={skill.name} />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  {skill.level && renderSkillLevel(skill.level)}
                </div>
                {skill.details && (
                  <div className="skill-details">{skill.details}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Version Control & DevOps</h3>
          <div className="skill-items">
            {skills.versionControl.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <div className="skill-name-with-logo">
                    <TechIcon skillName={skill.name} />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  {skill.level && renderSkillLevel(skill.level)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>CAD Tools</h3>
          <div className="skill-items">
            {skills.cadTools.map((tool, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Software Tools</h3>
          <div className="skill-items">
            {skills.softwareTools.map((tool, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <div className="skill-name-with-logo">
                    <TechIcon skillName={tool.name} />
                    <span className="skill-name">{tool.name}</span>
                  </div>
                  {tool.level && renderSkillLevel(tool.level)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Languages</h3>
          <div className="skill-items">
            {skills.languagesSpoken.map((lang, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{lang.name}</span>
                  <span className="skill-level-text">{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
