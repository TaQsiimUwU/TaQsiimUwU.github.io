import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Social Media Aggregator',
    description:
      'A centralized platform designed to pull in and unify feeds from multiple social media sources. The desktop architecture is built using Kotlin Multiplatform (KMP) — a major technical undertaking and potential graduation project.',
    tags: ['Kotlin', 'KMP', 'Cross-Platform', 'MERN'],
    github: 'https://github.com/TaQsiimUwU',
    live: null,
    status: 'In Development',
    badge: 'Graduation Project',
  },
  {
    id: '02',
    title: 'Freelance Dev Agency',
    description:
      'A personal agency providing localized development solutions in Egypt. This portfolio itself acts as the storefront, highlighting service tiers, pricing models, and full-stack capabilities for local clients.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Full-Stack'],
    github: null,
    live: '#hero',
    status: 'Active',
    badge: 'This Portfolio',
  },
  {
    id: '03',
    title: 'Cardiologic',
    description:
      'A specialized healthcare software project. Developed comprehensive Software Requirements Specification (SRS) documents, showcasing deep ability in system design, planning, and technical documentation.',
    tags: ['SRS', 'System Design', 'Documentation', 'Healthcare'],
    github: 'https://github.com/TaQsiimUwU',
    live: null,
    status: 'Documented',
    badge: 'SRS Focus',
  },
];

export const Projects = () => {
  return (
    <div>
      <div className="section-header">
        <div className="section-cmd">
          <span className="cmd-prompt">$ </span>ls -la ./projects/
        </div>
        <h2 className="section-title-main">
          Featured <span>Projects</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-top">
              <span className="project-id">// {project.id}</span>
              <span className="project-badge">{project.badge}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">{tag}</span>
              ))}
            </div>

            <div className="project-footer">
              <span className="project-status">
                <span className="status-dot"></span>
                {project.status}
              </span>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

