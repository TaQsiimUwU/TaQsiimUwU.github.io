import React from 'react';
import { ArrowLeft, User, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Aether Labs',
      period: '2024 - Present',
      desc: 'Leading a team of developers building 3D metaverse spaces and high-performance WebGL applications.'
    },
    {
      role: 'Frontend Engineer',
      company: 'Pixel Forge',
      period: '2022 - 2024',
      desc: 'Developed interactive custom design systems and user interfaces for enterprise SaaS applications.'
    },
    {
      role: 'Creative Web Designer',
      company: 'Self-Employed',
      period: '2020 - 2022',
      desc: 'Crafted bespoke marketing sites, branding identities, and customized Vite/React solutions.'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-inner">
        {/* Navigation / Header */}
        <header className="page-header">
          <Link 
            to="/" 
            className="back-link"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          <span className="page-meta-tag">ABOUT_ME_FILE_v1.0</span>
        </header>

        {/* Hero Section */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="page-section-tag">
            <User size={14} />
            <span>The Architect</span>
          </div>
          <h1 className="page-title-large">
            Designing digital realities with <span>intent</span> and precision.
          </h1>
          <div className="about-grid-intro">
            <div className="about-bio-paragraphs">
              <p>
                I am a multi-disciplinary developer and designer based at the intersection of aesthetic brilliance and logical architecture. I build interactive web applications that run flawlessly and captivate users visually.
              </p>
              <p>
                My work centers around modern frameworks like React and Next.js, combined with cutting-edge styling and graphics capabilities like CSS modules, canvas API, and React Three Fiber (WebGL). I believe code should not only solve problems but tell compelling stories.
              </p>
            </div>
            <div className="about-vitals-card">
              <span className="vitals-label">// Vitals</span>
              <ul className="vitals-list">
                <li><span>Name:</span> <span>TaQsiim</span></li>
                <li><span>Role:</span> <span>Full Stack Dev</span></li>
                <li><span>Focus:</span> <span>Interactive UX</span></li>
                <li><span>Status:</span> <span className="status-active">Active</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="timeline-section">
          <div className="page-section-tag" style={{ marginBottom: '2rem' }}>
            <Briefcase size={14} />
            <span>Professional Journey</span>
          </div>
          <div className="timeline-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-item-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <span className="timeline-period">
                    {exp.period}
                  </span>
                </div>
                <p className="timeline-desc">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
