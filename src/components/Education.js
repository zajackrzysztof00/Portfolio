// src/components/Education.js
import { education } from "../data/cvData";

export function Education() {
  return (
    <section>
      <h1>Education</h1>
      <div className="education-timeline">
        {education.map(({ degree, institution, faculty, duration, thesis }, i) => (
          <div key={i} className="education-card">
            <div className="education-header">
              <div className="education-title-section">
                <h3 className="education-degree">{degree}</h3>
                <div className="education-institution">{institution}</div>
                {faculty && <div className="education-faculty">{faculty}</div>}
                <div className="education-duration">📅 {duration}</div>
              </div>
              <div className="education-icon">
                🎓
              </div>
            </div>
            {thesis && (
              <div className="education-thesis">
                <strong>Thesis:</strong> {thesis}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}