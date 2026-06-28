import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HoverCard from '../HoverCard';

const projectsData = [
  {
    title: 'Project U',
    description: 'A university management platform for students and faculty.',
    image: '/project-img/project-U.png',
  },
  {
    title: 'ESP32 IoT System',
    description: 'IoT monitoring system powered by ESP32 microcontrollers.',
    image: '/project-img/ESP32.jpg',
  },
  {
    title: 'Task Manager',
    description: 'A productivity app for organizing and tracking tasks.',
    image: '/project-img/task-manager.jpg',
  },
  {
    title: 'Task Manager looks like shit',
    description: 'A productivity app for organizing and tracking tasks.',
    image: '/project-img/task-manager.jpg',
  }
];

const ProjectSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % projectsData.length);
        setIsTransitioning(false);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const activeProject = projectsData[currentIndex];

  return (
    <Link to="/projects" className="project-slides-fullscreen">
      <HoverCard tooltipText={activeProject.description}>
        {/* Background image */}
        <div
          className={`project-slide-bg ${isTransitioning ? 'fade-out' : 'fade-in'}`}
          style={{ backgroundImage: `url(${activeProject.image})` }}
        />

        {/* Dark overlay for readability */}
        <div className="project-slide-overlay" />

        {/* Centered project name */}
        <div className={`project-slide-content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          <h3 className="project-slide-title">{activeProject.title}</h3>
        </div>

        {/* Bottom bar */}
        <div className="project-slide-bottom">
          <div className="project-slide-dots">
            {projectsData.map((_, idx) => (
              <span
                key={idx}
                className={`project-dot ${idx === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          <div className="project-slide-cta">
            <span>All Projects</span>
            <ArrowRight size={12} />
          </div>
        </div>
      </HoverCard>
    </Link>
  );
};

export default ProjectSlides;
