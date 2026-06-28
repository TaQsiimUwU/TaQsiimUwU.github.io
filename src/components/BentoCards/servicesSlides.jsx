import React, { useState, useEffect } from 'react';
import { Code, Paintbrush, Boxes, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Code size={20} style={{ color: 'var(--color-accent)' }} />,
    title: 'Fullstack Dev',
    desc: 'Scalable web apps built with modern frameworks.'
  },
  {
    icon: <Paintbrush size={20} style={{ color: 'var(--color-accent)' }} />,
    title: 'UI/UX Design',
    desc: 'Bespoke, user-centric, and visual-first layouts.'
  },
  {
    icon: <Boxes size={20} style={{ color: 'var(--color-accent)' }} />,
    title: 'Interactive 3D',
    desc: 'Immersive WebGL and React Three Fiber environments.'
  },
  {
    icon: <Zap size={20} style={{ color: 'var(--color-accent)' }} />,
    title: 'Perf Tuning',
    desc: 'Ultra-fast loading times and fluid interactions.'
  }
];

const ServicesSlides = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-col-between">
      <div className="flex-row-between" style={{ borderBottom: '1px solid var(--color-border-primary)', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>
        <h3 className="font-mono-custom text-accent" style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Services
        </h3>
        <span className="font-mono-custom" style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>Auto-rotating</span>
      </div>

      {/* Main List */}
      <div className="services-list">
        {services.map((srv, idx) => {
          const isActive = idx === activeIdx;
          return (
            <div 
              key={idx}
              className={`service-item-row ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <div className="service-icon-box">
                {srv.icon}
              </div>
              <div className="service-item-details">
                <h4 className="service-item-title">{srv.title}</h4>
                <p className="service-item-desc">{srv.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '1rem', paddingTop: '0.5rem', borderTop: '1px solid var(--color-border-primary-alpha-80)' }}>
        <Link 
          to="/services" 
          className="link-all-projects"
          style={{ justifyContent: 'space-between' }}
        >
          <span>Explore All Services</span>
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
};

export default ServicesSlides;
