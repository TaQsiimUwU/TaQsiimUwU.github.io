import { MessageCircle } from 'lucide-react';

const tiers = [
  {
    tier: 'Web',
    title: 'Web Application',
    description:
      'Modern, responsive web applications built with React and the full MERN stack. From landing pages to data-driven dashboards.',
    features: [
      'React.js frontend',
      'Node.js + Express backend',
      'MongoDB database',
      'REST API design',
      'Responsive & mobile-first',
      'Deployment setup',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB'],
    price: 'From $50',
    delivery: '3–5 days',
  },
  {
    tier: 'Mobile / Desktop',
    title: 'Cross-Platform App',
    description:
      'Scalable mobile and desktop applications using Flutter or Kotlin Multiplatform, targeting Android, iOS, and desktop from a single codebase.',
    features: [
      'Flutter or KMP architecture',
      'Android & iOS targets',
      'Clean MVVM architecture',
      'REST API integration',
      'Offline-first support',
      'CI/CD pipeline setup',
    ],
    stack: ['Flutter', 'Kotlin', 'KMP'],
    price: 'From $150',
    delivery: '7–14 days',
    highlight: true,
  },
  {
    tier: 'Consultation',
    title: 'System Design & SRS',
    description:
      'Comprehensive technical documentation and system architecture planning using the SRS-first methodology — before a single line of code is written.',
    features: [
      'Software Requirements Spec (SRS)',
      'System architecture diagrams',
      'Database schema design',
      'API contract definition',
      'Tech stack recommendation',
    ],
    stack: ['SRS', 'UML', 'Architecture'],
    price: 'From $30',
    delivery: '2–4 days',
  },
];

export const Store = () => {
  return (
    <div>
      <div className="section-header">
        <div className="section-cmd">
          <span className="cmd-prompt">$ </span>cat services.json
        </div>
        <h2 className="section-title-main">
          My <span>Services</span>
        </h2>
        <div className="section-divider" />
      </div>

      <p className="services-intro">
        Based in Alexandria, Egypt — providing localized development solutions
        with global quality standards. Full project lifecycle: from SRS
        documentation and system design through to deployment and delivery.
      </p>

      <div className="services-grid">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className={`service-card${tier.highlight ? ' service-card--highlight' : ''}`}
          >
            {tier.highlight && (
              <div className="service-highlight-badge">Most Popular</div>
            )}
            <div className="service-tier">{tier.tier}</div>
            <h3 className="service-title">{tier.title}</h3>
            <p className="service-desc">{tier.description}</p>

            <ul className="service-features">
              {tier.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>

            <div className="service-stack">
              {tier.stack.map((s, j) => (
                <span key={j} className="skill-tag">{s}</span>
              ))}
            </div>

            <div className="service-bottom">
              <div className="service-price">{tier.price}</div>
              <div className="service-delivery">⏱ {tier.delivery}</div>
              <a href="#contact" className="service-cta">
                <MessageCircle
                  size={13}
                  style={{ display: 'inline', marginRight: '0.35rem', verticalAlign: 'middle' }}
                />
                Get Quote
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


