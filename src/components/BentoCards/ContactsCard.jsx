import { Mail, Linkedin, Phone, Github, Instagram, Twitter, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactsCard = () => {
  const { t } = useTranslation();
  const contacts = [
    {
      icon: <Mail size={16} />,
      label: 'Email',
      value: 'abdallahkassemhassan@gmail.com',
      href: 'mailto:abdallahkassemhassan@gmail.com'
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
    },
    {
      icon: <Github size={16} />,
      label: 'Github',
      value: 'taqsiimTQ',
      href: 'https://github.com/taqsiimTQ'
    },
  ];

  const socialMedia = [
    { icon: <Instagram size={18} />, label: '@taqsiim', href: 'https://instagram.com/taqsiim' },
    { icon: <img src="/socialMedia/x.svg" alt="X" style={{ width: 18, height: 18, filter: 'invert(1)' }} />, label: '@taqsiim', href: 'https://twitter.com/taqsiim' },
    { icon: <img src="/socialMedia/threads.svg" alt="Threads" style={{ width: 18, height: 18, filter: 'invert(1)' }} />, label: '@taqsiim', href: 'https://threads.net/taqsiim' },
    { icon: <Youtube size={18} />, label: 'taqsiim', href: 'https://youtube.com/c/taqsiim' },
  ];

  return (
    <div className="contacts-container">
      <div style={{ padding: '0.5rem 1rem 1rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <h3 className="font-mono-custom text-accent" style={{ margin: 0, fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('lets_build')}</h3>
      </div>
      <div className="contacts-card-flex">
        <div className="contacts-left-col" style={{ gap: '0.5rem', justifyContent: 'flex-start' }}>
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

        <div className="contacts-right-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', alignContent: 'start', padding: '0.5rem' }}>
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
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
