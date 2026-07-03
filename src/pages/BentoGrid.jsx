import { MapPin, Globe, Moon } from 'lucide-react';
import '../Styles/index.css';
import ProjectSlides from '../components/BentoCards/ProjectSlides';
import ServicesSlides from '../components/BentoCards/servicesSlides';
import Skills from '../components/BentoCards/skills';
import TaQsiim from '../components/BentoCards/TaQsiim';
import ContactsCard from '../components/BentoCards/ContactsCard';
import HoverCard from '../components/HoverCard';
import Beams from '../components/ReactBits/Beams';

const BentoGrid = () => {

  return (
    <div className="bento-container" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
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

      {/* Top horizontal bar / Sidebar */}
      <div className="bento-header" style={{ justifyContent: 'space-between', padding: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'inherit', gap: '1.5rem', alignItems: 'center' }}>
          <HoverCard tooltipText="Toggle Theme">
            <Moon size={18} style={{ color: 'var(--color-text-secondary)', cursor: 'crosshair' }} />
          </HoverCard>
          <HoverCard tooltipText="Language (AR/EN)">
            <Globe size={18} style={{ color: 'var(--color-text-secondary)', cursor: 'crosshair' }} />
          </HoverCard>
        </div>

        <div style={{ display: 'flex', flexDirection: 'inherit', gap: '1.5rem', alignItems: 'center' }}>
          <HoverCard tooltipText="Alexandria, Egypt">
            <MapPin size={18} style={{ color: 'var(--color-text-secondary)', cursor: 'crosshair' }} />
          </HoverCard>
          <HoverCard tooltipText="Open to Work">
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', cursor: 'crosshair' }}>
              <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--color-success)', borderRadius: '50%', zIndex: 2 }}></div>
              <div className="pulse-ring" style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', backgroundColor: 'var(--color-success)', opacity: 0.4 }}></div>
            </div>
          </HoverCard>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="bento-grid">
        <div className="bento-card card-top-left" style={{ textDecoration: 'none', color: 'inherit' }}>
          <HoverCard tooltipText="About Me">
            <TaQsiim />
          </HoverCard>
        </div>

        <div className="bento-card card-top-right">
          <HoverCard tooltipText="Services">
            <ServicesSlides />
          </HoverCard>
        </div>

        <div className="bento-card card-bottom-left">
          <HoverCard tooltipText="Skills">
            <Skills />
          </HoverCard>
        </div>

        <div className="bento-card card-center">
          <ProjectSlides />
        </div>


        <div className="bento-card card-bottom-right" style={{ textDecoration: 'none', color: 'inherit' }}>
          <HoverCard tooltipText="Let's Get in touch">
            <ContactsCard />
          </HoverCard>
        </div>

      </div>
    </div>
  );
};

export default BentoGrid;

