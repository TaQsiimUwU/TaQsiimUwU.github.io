import React from 'react';
import { ArrowLeft, ExternalLink, MapPin, Download, Briefcase, GraduationCap, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Beams from '../components/ReactBits/Beams';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  const education = [
    {
      degree: t('about_edu_degree'),
      school: t('about_edu_uni'),
      period: t('about_edu_date')
    }
  ];

  const experiences = [
    {
      role: t('about_exp_role'),
      company: t('about_exp_company'),
      period: t('about_exp_date'),
      desc: (
        <ul style={{ paddingLeft: '1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>{t('about_exp_desc')}</li>
        </ul>
      )
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
                {t('about_summary_text')}
              </p>
            </div>
            <div className="about-vitals-card">
              <span className="vitals-label">// Vitals</span>
              <ul className="vitals-list">
                <li><span>Name:</span> <span>{t('about_name')}</span></li>
                <li><span>Role:</span> <span>{t('about_title')}</span></li>
                <li><span>Base:</span> <span>{t('about_location')}</span></li>
                <li><span>Status:</span> <span className="status-active">Active</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="timeline-section" style={{ marginBottom: '4rem' }}>
          <div className="page-section-tag" style={{ marginBottom: '2rem' }}>
            <Briefcase size={14} />
            <span>{t('about_exp_title')}</span>
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
            <span>{t('about_edu_title')}</span>
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
