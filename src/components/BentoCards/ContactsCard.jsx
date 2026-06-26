import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactsCard = () => {
  const socials = [
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
    }
  ];

  return (
    <div className="contacts-card-flex">
      <div className="contacts-left-col">
        <div>
          <h3 className="font-mono-custom text-accent" style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Get In Touch
          </h3>
          <h4 className="contacts-cta-title">
            Let's build something epic together.
          </h4>
        </div>
        <div style={{ marginTop: '0.75rem' }}>
          <Link
            to="/contacts"
            className="btn-message-me"
          >
            <span>Message Me</span>
            <Send size={12} />
          </Link>
        </div>
      </div>

      <div className="contacts-right-col">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-item-link"
          >
            <div className="social-item-icon">
              {social.icon}
            </div>
            <div className="flex-col-between" style={{ height: 'auto', gap: '0.125rem' }}>
              <p className="social-item-label">{social.label}</p>
              <p className="social-item-val">{social.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactsCard;
