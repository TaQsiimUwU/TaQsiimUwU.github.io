import React from 'react';
import { Smartphone, Layout, Layers, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Smartphone size={24} style={{ color: 'var(--color-accent)' }} />,
    title: 'Mobile Dev',
    desc: 'High-performance native-like apps.',
    price: '400'
  },
  {
    icon: <Layout size={24} style={{ color: 'var(--color-accent)' }} />,
    title: 'Web Dev',
    desc: 'Responsive, dynamic, scalable web apps.',
    price: '300'
  },
  {
    icon: <Layers size={24} style={{ color: 'var(--color-accent)' }} />,
    title: 'Full System',
    desc: 'End-to-end solutions. Frontend & backend.',
    price: '1000'
  }
];

const ServicesSlides = () => {
  const { t } = useTranslation();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', gap: '1rem' }}>
      <h3 className="font-mono-custom text-accent" style={{ fontSize: '1.5rem', textAlign: 'center', fontWeight: 600, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {t('what_i_offer')}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1, width: '100%' }}>
        {services.map((svc, idx) => (
          <div key={idx} className="bento-card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', flex: 1, textDecoration: 'none', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
              {svc.icon}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <h4 style={{ margin: 0, color: 'var(--color-text-bright)', fontSize: '0.875rem' }}>{svc.title}</h4>
                <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.7rem' }}>{svc.desc}</p>
              </div>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.5rem', background: 'var(--color-accent-alpha-10)', borderRadius: '2rem', border: '1px solid var(--color-accent-border)', color: 'var(--color-text-bright)', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>
              <DollarSign size={12} style={{ color: 'var(--color-accent)' }} />
              {svc.price}+
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSlides;
