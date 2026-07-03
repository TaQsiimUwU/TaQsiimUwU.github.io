import React, { useState } from 'react';
import { ArrowLeft, Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'AnimBro',
    category: 'Mobile App',
    description: 'A complete experience to discover, track, and manage anime, with integrated profiles, watchlists. Built end-to-end with reactive UI in Jetpack Compose and offline-first data layer.',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Cardio Logic',
    category: 'Health Tech',
    description: 'Heart-monitoring client that leverages Bluetooth Low Energy (BLE) and on-device AI to perform real-time rhythm analysis.',
    tags: ['Flutter', 'Kotlin', 'BLE', 'On-device ML'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Campus Connect',
    category: 'Full Stack',
    description: 'Empowering students and club managers with a seamless, interconnected campus experience. Scaled to a 2,500-user platform.',
    tags: ['Mobile Development', 'Backend API', 'Cross-platform'],
    github: '#',
    demo: '#'
  }
];

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Mobile App', 'Health Tech', 'Full Stack'];
  
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
