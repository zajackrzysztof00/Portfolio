// src/components/Certifications.js
import { certifications } from "../data/cvData";

export function Certifications() {
  return (
    <section>
      <h2>Certifications & Licences</h2>
      {certifications.map(({ name, location, year }, i) => (
        <div key={i} style={{ marginBottom: "0.5rem" }}>
          <strong>{name}</strong> — {location} ({year})
        </div>
      ))}
    </section>
  );
}