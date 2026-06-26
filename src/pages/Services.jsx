import React from 'react';
import { ArrowLeft, Sparkles, Code2, Layers, Cpu, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesDetail = [
  {
    icon: <Code2 size={24} style={{ color: 'var(--color-accent)' }} />,
    title: 'Frontend Engineering',
    desc: 'Bespoke, high-performance client applications. Built with modern paradigms using React, Next.js, and TypeScript, engineered for speed and structural maintenance.',
    features: ['Single Page Apps & SSR', 'Performance Auditing', 'State Management', 'Testing Architectures']
  },
  {
    icon: <Layers size={24} style={{ color: 'var(--color-accent)' }} />,
    title: 'UI/UX & Interactive Design',
    desc: 'Visually striking layouts that capture attention. I design fluid, interactive user experiences that establish a strong brand identity and delight users.',
    features: ['Interactive Prototyping', 'Design Systems', 'Micro-animations', 'Figma to React Code']
  },
  {
    icon: <Cpu size={24} style={{ color: 'var(--color-accent)' }} />,
    title: 'WebGL & Immersive 3D',
    desc: 'Adding depth to the browser. I build immersive 3D landing pages, object configurators, and interactive environments using Three.js and React Three Fiber.',
    features: ['Custom Shaders', '3D Scene Tuning', 'Audio Particles', 'Interactive Controls']
  },
  {
    icon: <Compass size={24} style={{ color: 'var(--color-accent)' }} />,
    title: 'Technical Consulting',
    desc: 'Guidance from concepts to production launch. I help teams identify optimal tech stacks, design systems, and deployment strategies for scale.',
    features: ['Tech Stack Appraisals', 'Perf Checklists', 'SEO & Accessibility', 'CI/CD Flow Setup']
  }
];

export const Services = () => {
  return (
    <div className="page-container">
      <div className="page-inner-med">
        {/* Navigation / Header */}
        <header className="page-header">
          <Link 
            to="/" 
            className="back-link"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          <span className="page-meta-tag">SERVICES_CATALOG_v1.0</span>
        </header>

        {/* Hero Section */}
        <div className="page-intro">
          <div className="page-section-tag">
            <Sparkles size={14} />
            <span>Expertise Areas</span>
          </div>
          <h1 className="page-title-large">
            Digital <span>Services</span>.
          </h1>
          <p className="page-subtitle">
            I offer end-to-end frontend development and design services, delivering high-impact products from absolute scratch.
          </p>
        </div>

        {/* Services Catalog */}
        <div className="services-detailed-grid">
          {servicesDetail.map((srv, idx) => (
            <div 
              key={idx}
              className="service-detail-card"
            >
              <div>
                <div className="service-detail-icon-wrap">
                  {srv.icon}
                </div>
                <h3 className="service-detail-title">{srv.title}</h3>
                <p className="service-detail-desc">{srv.desc}</p>
              </div>

              <div className="service-detail-bottom">
                <p className="competencies-header">// Core Competencies</p>
                <ul className="competencies-grid">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="competency-item" title={feat}>
                      <span className="bullet-dot"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="services-cta-banner">
          <div>
            <h2 className="cta-banner-title">Have a project in mind?</h2>
            <p className="cta-banner-desc">Let's discuss details and start building your interactive web space.</p>
          </div>
          <Link 
            to="/contacts"
            className="btn-cta-collaborate"
          >
            <span>Let's Collaborate</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
