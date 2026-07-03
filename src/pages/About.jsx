import React from 'react';
import { ArrowLeft, User, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  const experiences = [
    {
      role: 'Mobile Application Development Trainee',
      company: 'Digital Egypt Pioneers Initiative (DEPI) - Egypt',
      period: 'June 2025 - Nov 2025',
      desc: (
        <ul style={{ paddingLeft: '1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Built AnimBro end-to-end as the program’s flagship deliverable — architected API integration, reactive UI in Jetpack Compose, and offline-first data layer under production code review.</li>
          <li>Applied MVVM architecture and Clean Architecture principles to ensure scalability and maintainability across all production-level applications developed during the program.</li>
        </ul>
      )
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science and Information Technology',
      school: 'Egypt-Japan University for Science and Technology - Alexandria, Egypt',
      period: 'Sep 2023 – July 2027'
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
          <span className="page-meta-tag">ABOUT_ME_FILE_v2.0</span>
        </header>

        {/* Hero Section */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="page-section-tag">
            <User size={14} />
            <span>The Developer</span>
          </div>
          <h1 className="page-title-large">
            Architecting native ecosystems with <span>performance</span> and scale.
          </h1>
          <div className="about-grid-intro">
            <div className="about-bio-paragraphs">
              <p>
                Mobile Developer with expertise in architecting high-performance native (Android/Kotlin) and cross-platform (Flutter/KMP) ecosystems.
              </p>
              <p>
                Android and Flutter developer (Kotlin, KMP) with hands-on experience shipping a BLE-connected AI health app and a 2,500-user campus platform. Passionate about on-device ML and cross-platform architecture.
              </p>
            </div>
            <div className="about-vitals-card">
              <span className="vitals-label">// Vitals</span>
              <ul className="vitals-list">
                <li><span>Name:</span> <span>Abdallah Kassem Hassan</span></li>
                <li><span>Role:</span> <span>Mobile Developer</span></li>
                <li><span>Base:</span> <span>Alexandria, Egypt</span></li>
                <li><span>Status:</span> <span className="status-active">Active</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="timeline-section" style={{ marginBottom: '4rem' }}>
          <div className="page-section-tag" style={{ marginBottom: '2rem' }}>
            <Briefcase size={14} />
            <span>Professional Experience</span>
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
                <div className="timeline-desc">
                  {exp.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="timeline-section">
          <div className="page-section-tag" style={{ marginBottom: '2rem' }}>
            <GraduationCap size={14} />
            <span>Education</span>
          </div>
          <div className="timeline-list">
            {education.map((edu, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-item-header">
                  <div>
                    <h3 className="timeline-role">{edu.degree}</h3>
                    <p className="timeline-company">{edu.school}</p>
                  </div>
                  <span className="timeline-period">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
