// src/components/Certifications.js
import { certifications, professionalDevelopment } from "../data/cvData";

export function Certifications() {
  return (
    <section>
      <h1>Professional Development & Certifications</h1>
      
      <div className="certifications-section">
        <h2>Certifications</h2>
        <div className="certification-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <h3>{cert.name}</h3>
              {cert.provider && <div className="cert-provider">{cert.provider}</div>}
              {cert.location && <div className="cert-location">{cert.location}</div>}
              <div className="cert-year">{cert.year}</div>
              {cert.description && (
                <div className="cert-description">{cert.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="training-section">
        <h2>Professional Training & Courses</h2>
        <div className="training-grid">
          {professionalDevelopment.map((training, index) => (
            <div key={index} className="training-card">
              <h3>{training.name}</h3>
              <div className="training-provider">{training.provider}</div>
              {training.technologies && (
                <div className="training-tech">{training.technologies}</div>
              )}
              {training.description && (
                <div className="training-description">{training.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}