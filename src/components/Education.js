// src/components/Education.js
import { education } from "../data/cvData";

export function Education() {
  return (
    <section>
      <h2>Education</h2>
      {education.map(({ degree, institution, duration, thesis }, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <h3>{degree}</h3>
          <p><em>{institution}</em></p>
          <p><small>{duration}</small></p>
          {thesis && <p><strong>Thesis:</strong> {thesis}</p>}
        </div>
      ))}
    </section>
  );
}