import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    title: 'Aetheria - 3D Metaverse',
    description: 'Immersive 3D multiplayer social space built with React Three Fiber, WebGL, and Socket.io.',
    tags: ['R3F', 'Three.js', 'React', 'Socket.io'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Neon Forge - E-Commerce',
    description: 'Modern cyberpunk styled merchandise store featuring custom Stripe integration and CSS modules.',
    tags: ['Next.js', 'Stripe', 'CSS Modules', 'PostgreSQL'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Nova UI - Component Library',
    description: 'Highly accessible, customizable React design system components with physics-based transitions.',
    tags: ['React', 'Framer Motion', 'Radix', 'Vite'],
    github: '#',
    demo: '#'
  }
];

const ProjectSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const activeProject = projectsData[currentIndex];

  return (
    <div className="flex-col-between">
      <div className="flex-row-between" style={{ borderBottom: '1px solid #2c2c2e', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: 'var(--color-accent)' }}></span>
          <h3 className="font-mono-custom text-accent" style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Featured Projects
          </h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <button 
            onClick={handlePrev}
            className="carousel-nav-btn"
            aria-label="Previous Project"
          >
            <ChevronLeft size={14} />
          </button>
          <span className="font-mono-custom" style={{ fontSize: '10px', color: '#71717a', padding: '0 0.25rem' }}>
            {currentIndex + 1} / {projectsData.length}
          </span>
          <button 
            onClick={handleNext}
            className="carousel-nav-btn"
            aria-label="Next Project"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100px' }}>
        <div>
          <h4 className="project-carousel-title">
            {activeProject.title}
          </h4>
          <p className="card-body-text" style={{ marginTop: '0.375rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {activeProject.description}
          </p>
          <div className="tag-list">
            {activeProject.tags.map((tag, idx) => (
              <span key={idx} className="carousel-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-row-between" style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(44, 44, 46, 0.8)' }}>
        <div className="footer-link-group">
          <a 
            href={activeProject.github} 
            className="footer-action-link"
            aria-label="Github repository"
          >
            <Github size={16} />
          </a>
          <a 
            href={activeProject.demo} 
            className="footer-action-link"
            aria-label="Live demo"
          >
            <ExternalLink size={16} />
          </a>
        </div>
        <Link 
          to="/projects" 
          className="link-all-projects"
        >
          <span>All Projects</span>
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectSlides;
