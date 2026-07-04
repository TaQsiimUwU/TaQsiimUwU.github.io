import React, { useState, useEffect } from 'react';
import { ArrowLeft, Github, ExternalLink, FolderGit2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Beams from '../components/ReactBits/Beams';
const projects = [
  {
    title: 'AnimBro',
    category: 'Mobile App',
    description: 'A complete experience to discover, track, and manage anime, with integrated profiles, watchlists. Built end-to-end with reactive UI in Jetpack Compose and offline-first data layer.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MyAnimeList API', 'Retrofit'],
    github: 'https://github.com/AhmedAbdElrahman117/animebro',
    demo: '#',
    image: '/project-img/AnimBro.jpg',
    bullets: [
      'Developed a comprehensive Android application for anime discovery and tracking, utilizing Jetpack Compose for a modern, reactive, and highly responsive user interface.',
      'Integrated MyAnimeList v2 API using Retrofit and OkHttp to sync user watchlists, ratings, and statuses (Completed, Dropped, Plan to Watch) in real-time.',
      'Engineered a local data persistence layer to manage favorites and wishlists, ensuring a seamless user experience even with intermittent network connectivity.'
    ]
  },
  {
    title: 'Cardio Logic',
    category: 'Health Tech',
    description: 'Heart-monitoring client that leverages Bluetooth Low Energy (BLE) and on-device AI to perform real-time rhythm analysis.',
    tags: ['Kotlin', 'Jetpack Compose', 'Bluetooth Low Energy (BLE)'],
    github: 'https://github.com/TaQsiimUwU/CardioLogic',
    demo: '#',
    image: '/project-img/CardioLogic.jpg',
    bullets: [
      'Shipped on-device ECG rhythm classification at <45ms inference latency lower battery draw than baseline, enabling real-time cardiac monitoring without cloud dependency.',
      'Engineered a fault-tolerant Bluetooth Low Energy (BLE) communication layer, mitigating hardware MTU limitations and achieving a success rate in continuous data telemetry.',
      'Designed a custom byte-buffering algorithm to reconstruct truncated hardware packets on the fly, eliminating data fragmentation and improving signal accuracy for the AI model.'
    ]
  },
  {
    title: 'Campus Connect',
    category: 'Full Stack',
    description: 'Empowering students and club managers with a seamless, interconnected campus experience. Scaled to a 2,500-user platform.',
    tags: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Firebase', 'MVVM'],
    github: 'https://github.com/TaQsiimUwU/CompusConnect-Android',
    demo: '#',
    image: '/project-img/CampusConnect.png',
    bullets: [
      'Architected a multi-role mobile platform for campus management, scaling the application state management to seamlessly support concurrent users with low response times.',
      'Implemented unidirectional data flow using MVVM, which cut UI state-related bugs and accelerated the deployment of new manager workflows.',
      'Engineered specialized, real-time Firebase synchronization pipelines for administrative users, boosting event check-in efficiency and eliminating race conditions.'
    ]
  }
];

export const Projects = ({ isModal = false }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={isModal ? "" : "page-container"}>
      {!isModal && (
        <div className="hide-on-mobile" style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
          <Beams
            beamWidth={2}
            beamHeight={25}
            beamNumber={50}
            lightColor="#ff8a8a"
            speed={10}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={116}
          />
        </div>
      )}

      <div className={isModal ? "" : "page-inner-wide"}>
        {/* Navigation / Header */}
        {!isModal && (
          <header className="page-header">
            <Link
              to="/"
              className="back-link"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </header>
        )}

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

        {/* Projects Grid */}
        <div className="projects-masonry-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card-interactive"
              onClick={() => openModal(project)}
              style={{ cursor: 'pointer' }}
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

        {/* Modal */}
        {selectedProject && (
          <div className="project-modal-backdrop" onClick={closeModal} style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)',
            zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem'
          }}>
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()} style={{
              background: 'var(--color-bg-primary)', border: '1px solid var(--color-glass-border)',
              borderRadius: '16px', maxWidth: '800px', width: '100%', maxHeight: '90vh',
              overflowY: 'auto', position: 'relative', display: 'flex', flexDirection: 'column'
            }}>
              <button onClick={closeModal} style={{
                position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.5)',
                border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex',
                alignItems: 'center', justifyContent: 'center', color: '#fff',
                cursor: 'pointer', zIndex: 10
              }}>
                <X size={18} />
              </button>

              <div style={{ width: '100%', height: '300px', flexShrink: 0, overflow: 'hidden', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
                <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h2 className="font-retro" style={{ margin: 0, fontSize: '2rem', color: 'var(--color-text-bright)' }}>{selectedProject.title}</h2>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-cv" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', background: 'var(--color-accent-alpha-10)', border: '1px solid var(--color-accent)', borderRadius: '8px', color: 'var(--color-text-bright)', textDecoration: 'none', fontWeight: 600 }}>
                      <Github size={18} /> View on GitHub
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', background: 'var(--color-accent-alpha-10)', border: '1px solid var(--color-accent)', borderRadius: '20px', color: 'var(--color-text-bright)', fontFamily: 'var(--font-geist-mono)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem', margin: 0, lineHeight: 1.6 }}>
                  {selectedProject.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
