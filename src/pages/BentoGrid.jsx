import { Link } from 'react-router-dom';
import '../Styles/index.css';
import ProjectSlides from '../components/BentoCards/ProjectSlides';
import ServicesSlides from '../components/BentoCards/servicesSlides';
import Skills from '../components/BentoCards/skills';
import TaQsiim from '../components/BentoCards/TaQsiim';
import ContactsCard from '../components/BentoCards/ContactsCard';

const BentoGrid = () => {
  return (
    <div className="bento-container">
      {/* Top horizontal bar */}
      <div className="bento-header">
        <span className="bento-header-status">SYSTEM.STATUS: ONLINE</span>
        <span className="bento-header-version">PORTFOLIO v3.0</span>
      </div>

      {/* Main Grid Layout */}
      <div className="bento-grid">
        <div className="bento-card card-top-left">
          <ProjectSlides />
        </div>

        <div className="bento-card card-top-right">
          <ServicesSlides />
        </div>

        <div className="bento-card card-bottom-left">
          <Skills />
        </div>

        <div className="bento-card card-center" style={{ textDecoration: 'none', color: 'inherit' }}>
          <TaQsiim />
        </div>


        <div className="bento-card card-bottom-right" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ContactsCard />
        </div>

      </div>
    </div>
  );
};

export default BentoGrid;

