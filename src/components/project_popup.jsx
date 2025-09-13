
import { X, Github, ExternalLink } from "lucide-react"

export const ProjectPopup = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="popup-header">
          <div className="popup-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="popup-title-section">
            <h2 className="popup-title">{project.title}</h2>
            <p className="popup-short-description">{project.shortDescription}</p>
          </div>
        </div>

        <div className="popup-body">
          <div className="popup-description">
            <h3>About This Project</h3>
            <p>{project.fullDescription}</p>
          </div>

          {project.features && (
            <div className="popup-features">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="popup-technologies">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="popup-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="popup-link github-link"
              >
                <Github size={20} />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="popup-link live-link"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
