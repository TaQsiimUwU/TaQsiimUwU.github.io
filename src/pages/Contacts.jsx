import React, { useState } from 'react';
import { ArrowLeft, Mail, Github, Linkedin, MessageSquare, Send, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contacts = () => {
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

  const socials = [
    {
      icon: <Mail size={18} style={{ color: 'var(--color-accent)' }} />,
      label: 'Email Address',
      value: 'hello@taqsiim.dev',
      href: 'mailto:hello@taqsiim.dev'
    },
    {
      icon: <Github size={18} style={{ color: 'var(--color-accent)' }} />,
      label: 'Github Profile',
      value: 'github.com/taqsiimTQ',
      href: 'https://github.com/taqsiimTQ'
    },
    {
      icon: <Linkedin size={18} style={{ color: 'var(--color-accent)' }} />,
      label: 'LinkedIn Connect',
      value: 'linkedin.com/in/taqsiim',
      href: 'https://linkedin.com'
    }
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
            <div className="contacts-direct-links">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direct-channel-card"
                >
                  <div className="direct-channel-card-wrap">
                    <div className="direct-channel-icon-wrap">
                      {social.icon}
                    </div>
                    <div>
                      <p className="direct-channel-meta-label">{social.label}</p>
                      <p className="direct-channel-val">{social.value}</p>
                    </div>
                  </div>
                </a>
              ))}
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

export default Contacts;
