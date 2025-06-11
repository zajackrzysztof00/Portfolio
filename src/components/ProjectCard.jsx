import React from 'react'

export default function ProjectCard({ title, description, url, pageUrl }) {
  return (
    <div
      style={{
        border: '1px solid var(--primary)',
        padding: '1rem',
        marginBottom: '1rem',
        borderRadius: '6px',
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">View Project</a>
      {pageUrl && (
        <a href={pageUrl} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>
          View Page
        </a>
      )}
    </div>
  )
}
