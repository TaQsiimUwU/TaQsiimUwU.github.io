import React, { useState } from 'react';
import { ArrowLeft, Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Aetheria - 3D Metaverse',
    category: '3D Graphics',
    description: 'Immersive 3D multiplayer social space built with React Three Fiber, WebGL, and Socket.io. Features dynamic lighting, audio spatialization, and customizable avatars.',
    tags: ['React Three Fiber', 'Three.js', 'Socket.io', 'Node.js', 'CSS Modules'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Neon Forge - E-Commerce',
    category: 'Full Stack',
    description: 'Modern cyberpunk styled merchandise store featuring custom Stripe payment checkout, admin dashboard, inventory tracking, and fluid page transitions.',
    tags: ['Next.js', 'Stripe API', 'PostgreSQL', 'Prisma', 'Vanilla CSS'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Nova UI - Component Library',
    category: 'UI/UX',
    description: 'Highly accessible, custom-designed React design system components with physics-based spring transitions. Documented thoroughly using Storybook.',
    tags: ['React', 'Framer Motion', 'Radix Primitives', 'Vite', 'CSS Modules'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Chronos - Productivity Suite',
    category: 'Web App',
    description: 'Minimalist time blocking and scheduling application incorporating focus sessions, analytics charts, and localized local-storage configuration syncing.',
    tags: ['TypeScript', 'React', 'Zustand', 'Chart.js', 'Vite'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Pulse - Audio Visualizer',
    category: '3D Graphics',
    description: 'Real-time microphone and audio file Web Audio API visualizer rendering interactive audio-responsive particle systems with Canvas2D/WebGL.',
    tags: ['HTML5 Canvas', 'WebGL', 'JavaScript', 'Vite'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Helix - Markdown Notebook',
    category: 'Desktop App',
    description: 'Offline-first, markdown editor desktop client featuring tree navigation, syntax highlighting, export to PDF, and automatic workspace autosaves.',
    tags: ['Electron', 'React', 'Vanilla CSS', 'Marked', 'Prism.js'],
    github: '#',
    demo: '#'
  }
];

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', '3D Graphics', 'Full Stack', 'UI/UX', 'Web App', 'Desktop App'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="page-container">
      <div className="page-inner-wide">
        {/* Navigation / Header */}
        <header className="page-header">
          <Link 
            to="/" 
            className="back-link"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          <span className="page-meta-tag">PROJECTS_PORTFOLIO_v1.0</span>
        </header>

        {/* Hero Title */}
        <div className="page-intro">
          <div className="page-section-tag">
            <FolderGit2 size={14} />
            <span>Archive & Works</span>
          </div>
          <h1 className="page-title-large">
            Selected <span>Creations</span>.
          </h1>
          <p className="page-subtitle">
            A curated list of design systems, WebGL experiments, full-stack applications, and utilities built to challenge conventional UI interfaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-container">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`filter-tab-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-masonry-grid">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx}
              className="project-card-interactive"
            >
              <div>
                <div className="project-card-top">
                  <span className="project-category-badge">
                    {project.category}
                  </span>
                  <div className="project-card-links">
                    <a 
                      href={project.github} 
                      className="project-card-link-btn"
                      aria-label={`${project.title} github repository`}
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href={project.demo} 
                      className="project-card-link-btn"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="project-card-title">
                  {project.title}
                </h3>
                <p className="project-card-desc">
                  {project.description}
                </p>
              </div>

              <div className="project-card-tags">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="project-card-tag-item"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
