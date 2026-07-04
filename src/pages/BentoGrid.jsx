import Sidebar from '../components/BentoCards/Sidebar';
import '../Styles/index.css';
import ProjectSlides from '../components/BentoCards/ProjectSlides';
import ServicesSlides from '../components/BentoCards/servicesSlides';
import Skills from '../components/BentoCards/skills';
import TaQsiim from '../components/BentoCards/TaQsiim';
import ContactsCard from '../components/BentoCards/ContactsCard';
import HoverCard from '../components/HoverCard';
import Beams from '../components/ReactBits/Beams';
import { ArrowUpRight } from 'lucide-react';
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
      <Sidebar />

      {/* Main Grid Layout */}
      <div className="bento-grid">
        <div className="bento-card card-top-left" style={{ textDecoration: 'none', color: 'inherit' }}>
          <HoverCard tooltipText="About Me">
            <TaQsiim />
          </HoverCard>
        </div>

        <div className="card-top-right" style={{ display: 'flex' }}>
          <ServicesSlides />
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
          <HoverCard tooltipText={`Let's Get in touch ${<ArrowUpRight size={14} />}`}>
            <ContactsCard />
          </HoverCard>
        </div>

      </div>
    </div>
  );
};

export default BentoGrid;

