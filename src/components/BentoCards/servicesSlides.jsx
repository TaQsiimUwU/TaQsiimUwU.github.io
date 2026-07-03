import React, { useState, useEffect } from 'react';
import { Smartphone, Layout, Layers, ArrowRight, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Smartphone size={48} style={{ color: 'var(--color-accent)', filter: 'drop-shadow(0 0 8px var(--color-accent-alpha-20))' }} />,
    title: 'Mobile Dev',
    desc: 'High-performance native-like apps for iOS & Android. Modern UI and smooth animations.',
    price: '400'
  },
  {
    icon: <Layout size={48} style={{ color: 'var(--color-accent)', filter: 'drop-shadow(0 0 8px var(--color-accent-alpha-20))' }} />,
    title: 'Web Dev',
    desc: 'Responsive, dynamic, and scalable web apps. Crafted with modern aesthetics and speed.',
    price: '300'
  },
  {
    icon: <Layers size={48} style={{ color: 'var(--color-accent)', filter: 'drop-shadow(0 0 8px var(--color-accent-alpha-20))' }} />,
    title: 'Full System',
    desc: 'End-to-end solutions. Beautiful frontend, robust backend APIs, secure DB design.',
    price: '1000'
  }
];

const ServicesSlides = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % services.length);
        setIsTransitioning(false);
      }, 400);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeService = services[activeIdx];

  return (
    <div className="project-slides-fullscreen" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2, width: '100%' }}>
        <h3 className="font-mono-custom text-accent" style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Services
        </h3>
        <span className="font-mono-custom" style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>Auto-rotating</span>
      </div>

      {/* Main Content Centered */}
      <div className={isTransitioning ? 'fade-out' : 'fade-in'} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '0.75rem', zIndex: 2 }}>
        {activeService.icon}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text-bright)' }}>{activeService.title}</h2>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.4, padding: '0 0.25rem' }}>
            {activeService.desc}
          </p>
        </div>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.75rem', background: 'var(--color-accent-alpha-10)', borderRadius: '2rem', border: '1px solid var(--color-accent-border)', color: 'var(--color-text-bright)', fontSize: '0.875rem', fontWeight: 700, marginTop: '0.25rem' }}>
          <DollarSign size={14} style={{ color: 'var(--color-accent)' }} />
          {activeService.price}+
        </div>
      </div>

      {/* Bottom bar */}
      <div className="project-slide-bottom" style={{ zIndex: 2 }}>
        <div className="project-slide-dots">
          {services.map((_, idx) => (
            <span
              key={idx}
              className={`project-dot ${idx === activeIdx ? 'active' : ''}`}
            />
          ))}
        </div>
        <a href="mailto:abdallahkassemhassan@gmail.com?subject=Service Inquiry" className="project-slide-cta" style={{ textDecoration: 'none', color: 'var(--color-text-bright)' }}>
          <span>Request</span>
          <ArrowRight size={12} />
        </a>
      </div>

    </div>
  );
};

export default ServicesSlides;
