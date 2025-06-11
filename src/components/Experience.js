// src/components/Experience.js
import { experience } from '../data/cvData';

export function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      {experience.map(({ role, company, duration, location, details }, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <h3>{role}</h3>
          <p><em>{company} | {location}</em></p>
          <p><small>{duration}</small></p>
          <ul>
            {details.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      ))}
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
