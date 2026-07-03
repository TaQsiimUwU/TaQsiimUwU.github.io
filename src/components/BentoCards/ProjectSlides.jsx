import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HoverCard from '../HoverCard';
const projectsData = [
  {
    title: 'Campus Connect',
    description: 'Empowering students and club managers with a seamless, interconnected campus experience.',
    image: '/project-img/CampusConnect.png',
  },
  {
    title: 'Cardio Logic',
    description: 'heart-monitoring client that leverages (BLE) and on-device AI to perform real-time rhythm analysis.',
    image: '/project-img/CardioLogic.jpg',
  },
  {
    title: 'AnimBro',
    description: 'A complete experience to discover, track, and manage anime, with integrated profiles, watchlists.',
    image: '/project-img/AnimBro.jpg',
  },
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
    <HoverCard tooltipText={activeProject.description}>
      <Link to="/projects" className="project-slides-fullscreen">
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
      </Link>
    </HoverCard>
  );
};

export default ProjectSlides;
