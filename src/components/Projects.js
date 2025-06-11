// src/components/Projects.js
import { projects } from "../data/cvData";
export function Projects({ items }) {
  return (
    <section>
      <h2>Projects</h2>
      {items.map(({ title, organization, duration, details }, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <h3>{title}</h3>
          <p><em>{organization}</em></p>
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