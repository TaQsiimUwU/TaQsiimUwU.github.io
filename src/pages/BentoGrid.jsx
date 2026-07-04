import { motion } from 'framer-motion';
import Sidebar from '../components/BentoCards/Sidebar';
import '../Styles/index.css';
import ProjectSlides from '../components/BentoCards/ProjectSlides';
import ServicesSlides from '../components/BentoCards/servicesSlides';
import Skills from '../components/BentoCards/skills';
import TaQsiim from '../components/BentoCards/TaQsiim';
import ContactsCard from '../components/BentoCards/ContactsCard';
import HoverCard from '../components/HoverCard';
import Beams from '../components/ReactBits/Beams';

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

const BentoGrid = () => {

  return (
    <motion.div
      className="bento-container"
      style={{ position: 'relative', zIndex: 1 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
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
        <motion.div className="bento-card card-top-left" style={{ textDecoration: 'none', color: 'inherit' }} variants={cardVariants}>
          <HoverCard tooltipText="About Me">
            <TaQsiim />
          </HoverCard>
        </motion.div>

        <motion.div className="card-top-right" style={{ display: 'flex' }} variants={cardVariants}>
          <ServicesSlides />
        </motion.div>

        <motion.div className="bento-card card-bottom-left" variants={cardVariants}>
          <HoverCard tooltipText="Skills">
            <Skills />
          </HoverCard>
        </motion.div>

        <motion.div className="bento-card card-center" variants={cardVariants}>
          <ProjectSlides />
        </motion.div>

        <motion.div className="bento-card card-bottom-right" style={{ textDecoration: 'none', color: 'inherit' }} variants={cardVariants}>
          <HoverCard tooltipText="Let's Get in touch" >
            <ContactsCard />
          </HoverCard>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default BentoGrid;
