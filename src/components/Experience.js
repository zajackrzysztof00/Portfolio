// src/components/Experience.js
import { experience } from '../data/cvData';

export function Experience() {
  return (
    <section>
      <h1>Professional Experience</h1>
      <div className="experience-timeline">
        {experience.map(({ role, company, duration, location, details }, i) => (
          <div key={i} className="experience-card">
            <div className="experience-header">
              <div className="experience-title-section">
                <h3 className="experience-role">{role}</h3>
                <div className="experience-company">{company}</div>
                <div className="experience-meta">
                  <span className="experience-duration">{duration}</span>
                  <span className="experience-location">📍 {location}</span>
                </div>
              </div>
              <div className="experience-icon">
                💼
              </div>
            </div>
            <div className="experience-details">
              <ul>
                {details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// src/components/Skills.js
export function Skills({ skills }) {
  return (
    <section>
      <h2>Skills</h2>
      <h3>CAD Tools</h3>
      <ul>
        {skills.cadTools.map((tool, i) => <li key={i}>{tool}</li>)}
      </ul>

      <h3>Programming Languages</h3>
      <ul>
        {skills.programmingLanguages.map(({ name, level }) => (
          <li key={name}>
            {name} - Level: {level}/5
          </li>
        ))}
      </ul>

      <h3>Languages</h3>
      <ul>
        {skills.languagesSpoken.map(({ name, level }) => (
          <li key={name}>
            {name} - Level: {level}/5
          </li>
        ))}
      </ul>

      <h3>Software Tools</h3>
      <ul>
        {skills.softwareTools.map((tool, i) => <li key={i}>{tool}</li>)}
      </ul>
    </section>
  );
}

// src/components/Strengths.js
export function Strengths({ strengths }) {
  return (
    <section>
      <h2>Strengths</h2>
      <ul>
        {strengths.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  );
}

// src/components/Certifications.js
export function Certifications({ items }) {
  return (
    <section>
      <h2>Certifications & Licences</h2>
      {items.map(({ name, location, year }, i) => (
        <div key={i} style={{ marginBottom: "0.5rem" }}>
          <strong>{name}</strong> — {location} ({year})
        </div>
      ))}
    </section>
  );
}
