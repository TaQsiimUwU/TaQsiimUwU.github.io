import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/BentoCards/Sidebar';
import '../Styles/index.css';
import ProjectSlides from '../components/BentoCards/ProjectSlides';
import ServicesSlides from '../components/BentoCards/servicesSlides';
import Skills from '../components/BentoCards/skills';
import TaQsiim from '../components/BentoCards/TaQsiim';
import ContactsCard from '../components/BentoCards/ContactsCard';
import HoverCard from '../components/HoverCard';
import Beams from '../components/ReactBits/Beams';
import { About } from './About';
import { Projects } from './Projects';

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 30,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 120,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.6,
    },
  },
};

const sidebarVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
    },
  },
};

const views = {
  about: { id: 'about', title: 'About Me', Component: About },
  services: { id: 'services', title: 'Services', Component: ServicesSlides },
  projects: { id: 'projects', title: 'Projects', Component: Projects },
};

const BentoGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeView = searchParams.get('view');

  const navigate = useNavigate();
  const closeView = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('view');
    setSearchParams(newParams);
  };
  const openView = (id) => {
    if (window.innerWidth <= 768) {
      navigate(`/${id}`);
    } else {
      setSearchParams({ view: id });
    }
  };

  const activeData = activeView && views[activeView] ? views[activeView] : null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeView) {
        closeView();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeView, searchParams]);

  return (
    <motion.div
      className="bento-container"
      style={{ position: 'relative', zIndex: 1 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="hide-on-mobile"
        style={{ position: 'fixed', inset: 0, zIndex: -1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
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
      </motion.div>

      {/* Top horizontal bar / Sidebar */}
      <motion.div variants={sidebarVariants}>
        <Sidebar />
      </motion.div>

      {/* Main Grid Layout */}
      <motion.div className="bento-grid" variants={containerVariants}>
        <motion.div
          className="bento-card card-top-left"
          style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          variants={cardVariants}
          layoutId="card-container-about"
          onClick={() => openView('about')}
        >
          <HoverCard tooltipText="About Me">
            <TaQsiim />
          </HoverCard>
        </motion.div>

        <motion.div
          className="card-top-right"
          style={{ display: 'flex', cursor: 'pointer' }}
          variants={cardVariants}
          layoutId="card-container-services"
          onClick={() => openView('services')}
        >
          <ServicesSlides />
        </motion.div>

        <motion.div
          className="bento-card card-bottom-left"
          variants={cardVariants}
          layoutId="card-container-skills"
          style={{ cursor: 'pointer' }}
        >
          <HoverCard tooltipText="Skills">
            <Skills />
          </HoverCard>
        </motion.div>

        <motion.div
          className="bento-card card-center"
          variants={cardVariants}
          layoutId="card-container-projects"
          onClick={() => openView('projects')}
          style={{ cursor: 'pointer' }}
        >
          <ProjectSlides />
        </motion.div>

        <motion.div
          className="bento-card card-bottom-right"
          style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          variants={cardVariants}
          layoutId="card-container-contact"
        >
          <HoverCard tooltipText="Let's Get in touch" >
            <ContactsCard />
          </HoverCard>
        </motion.div>

      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {activeData && (
          <div key={activeData.id}>
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeView}
            />
            <div className="modal-container">
              <motion.div
                layoutId={`card-container-${activeData.id}`}
                className="expanded-card"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.15, ease: "easeOut" }}
                  className="expanded-content"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <activeData.Component isModal={true} />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="close-button"
                  onClick={closeView}
                >
                  Close
                </motion.button>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BentoGrid;
