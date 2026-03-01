import { Github, Linkedin, Twitter, Instagram, Phone, Mail } from 'lucide-react';

const contacts = [
  {
    label: 'Email',
    display: 'abdallahkassemhassan@gmail.com',
    href: 'mailto:abdallahkassemhassan@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Phone',
    display: '+20 101 349 7030',
    href: 'tel:+201013497030',
    Icon: Phone,
  },
  {
    label: 'GitHub',
    display: 'github.com/TaQsiimUwU',
    href: 'https://github.com/TaQsiimUwU',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    display: 'in/abdallah-kassem-hassan',
    href: 'https://www.linkedin.com/in/abdallah-kassem-hassan/',
    Icon: Linkedin,
  },
  {
    label: 'Instagram',
    display: '@taqsiim',
    href: 'https://www.instagram.com/taqsiim/',
    Icon: Instagram,
  },
  {
    label: 'Twitter / X',
    display: '@tq__ak',
    href: 'https://x.com/tq__ak',
    Icon: Twitter,
  },
];

export const Contact = () => {
  return (
    <div>
      <div className="section-header">
        <div className="section-cmd">
          <span className="cmd-prompt">$ </span>cat contact.json
        </div>
        <h2 className="section-title-main">
          Get in <span>Touch</span>
        </h2>
        <div className="section-divider" />
      </div>

      <p className="services-intro">
        Available for freelance projects, consultations, and full-time opportunities.
        Based in Alexandria, Egypt — response within 24 hours.
      </p>

      <div className="contact-grid">
        {contacts.map(({ label, display, href, Icon }, i) => (
          <a
            key={i}
            href={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <Icon size={20} strokeWidth={1.5} />
            </div>
            <div className="contact-card-body">
              <div className="contact-card-label">{label}</div>
              <div className="contact-card-value">{display}</div>
            </div>
            <div className="contact-card-arrow">→</div>
          </a>
        ))}
      </div>
    </div>
  );
};

