import React, { useState } from 'react';
import { ArrowLeft, Mail, Linkedin, Phone, Github, Instagram, Twitter, Youtube, Download, MessageSquare, Send, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Links = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contacts = [
    {
      icon: <Mail size={16} />,
      label: 'Email',
      value: 'abdallahkassemhassan@gmail.com',
      href: 'mailto:abdallahkassemhassan@gmail.com'
    },
    {
      icon: <Github size={16} />,
      label: 'Github',
      value: 'taqsiimTQ',
      href: 'https://github.com/taqsiimTQ'
    },
    {
      icon: <Linkedin size={16} />,
      label: 'LinkedIn',
      value: 'in/abdallah-kassem-hassan',
      href: 'https://linkedin.com/in/abdallah-kassem-hassan'
    },
    {
      icon: <Phone size={16} />,
      label: 'Phone',
      value: '+201013497030',
      href: 'tel:+201013497030'
    }
  ];

  const socialMedia = [
    { icon: <Instagram size={18} />, label: 'Instagram', href: 'https://instagram.com/taqsiim' },
    { icon: <Twitter size={18} />, label: 'Twitter', href: 'https://twitter.com/taqsiim' },
    { icon: <img src="/socialMedia/threads.svg" alt="Threads" style={{ width: 18, height: 18, filter: 'invert(1)' }} />, label: 'Threads', href: 'https://threads.net/taqsiim' },
    { icon: <Youtube size={18} />, label: 'YouTube', href: 'https://youtube.com/c/taqsiim' }
  ];

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
          <span className="page-meta-tag">CONTACT_CHANNEL_v1.0</span>
        </header>

        {/* Hero title */}
        <div className="page-intro">
          <div className="page-section-tag">
            <MessageSquare size={14} />
            <span>Connection Portal</span>
          </div>
          <h1 className="page-title-large">
            Get in <span>Touch</span>.
          </h1>
          <p className="page-subtitle">
            Have an idea, project, or question? Send me a message using the portal below, or reach out through my direct socials.
          </p>
        </div>

        {/* Content Layout */}
        <div className="contacts-split-layout">
          {/* Social info */}
          <div className="contacts-info-section">
            <h3 className="contacts-info-title">
              Direct Channels
            </h3>

            <div className="contacts-direct-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {contacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item-link"
                >
                  <div className="social-item-icon">
                    {contact.icon}
                  </div>
                  <div className="flex-col-between" style={{ height: 'auto', gap: '0.125rem' }}>
                    <p className="social-item-label">{contact.label}</p>
                    <p className="social-item-val">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginTop: '1rem', padding: '0.5rem' }}>
              {socialMedia.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-grid-item"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', textDecoration: 'none', color: 'var(--color-text-secondary)', padding: '0.5rem', borderRadius: '0.5rem', transition: 'all 0.2s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-bg-primary)';
                    e.currentTarget.style.color = 'var(--color-text-bright)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                  }}
                >
                  <div className="social-item-icon" style={{ padding: '0.5rem', marginBottom: '0.25rem' }}>
                    {social.icon}
                  </div>
                  <span style={{ fontSize: '0.625rem', fontWeight: 500, fontFamily: 'var(--font-geist-mono), monospace' }}>{social.label}</span>
                </a>
              ))}

              <a href="/Abdallah_Kassem_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-cv">
                <Download size={16} /> My CV
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contacts-form-section">
            <h3 className="form-terminal-title">
              Transmission Terminal
            </h3>
            <form onSubmit={handleSubmit} className="transmission-form">
              <div className="form-field">
                <label htmlFor="name" className="form-field-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-field-input"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-field-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-field-input"
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-field-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-field-textarea"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className={`btn-transmit ${isSent ? 'success' : 'default'}`}
              >
                {isSent ? (
                  <>
                    <span>Message Transmitted!</span>
                    <Check size={16} />
                  </>
                ) : isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
