import { useState, useEffect } from 'react';
import { BG } from '../components/bg/bg.jsx';
import { Menu } from '../components/Menu.jsx';
import { About } from '../components/About.jsx';
import { Projects } from '../components/projects.jsx';
import { Store } from './Store.jsx';
import { Contact } from '../components/Contact.jsx';
import { Footer } from '../components/Footer.jsx';

const heroLines = [
  { text: '> Hello, World.', cls: 'hero-greeting' },
  { text: 'TaQsiim', cls: 'hero-name' },
  { text: 'Full-Stack & Cross-Platform Developer', cls: 'hero-role' },
  { text: '> Based in Alexandria, Egypt', cls: 'hero-location' },
];

export const Home = () => {
  const [visible, setVisible] = useState(0);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    let idx = 0;
    const next = () => {
      if (idx < heroLines.length) {
        idx++;
        setVisible(idx);
        setTimeout(next, idx === 1 ? 300 : 420);
      } else {
        setTimeout(() => setShowCta(true), 350);
      }
    };
    const id = setTimeout(next, 300);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="home">
      <BG />
      <Menu />
      <main>
        {/* ── Hero ── */}
        <section id="hero" className="hero-section">
          <div className="hero-container">
            <div className="hero-terminal">
              {heroLines.slice(0, visible).map((line, i) => (
                <div
                  key={i}
                  className={`hero-line ${line.cls}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {line.text}
                </div>
              ))}
              {!showCta && visible < heroLines.length && (
                <span className="cursor-blink">█</span>
              )}
            </div>
            {showCta && (
              <div className="hero-cta" style={{ animation: 'slide-up 0.5s 0.1s both' }}>
                <a href="#projects" className="btn-primary">[ View Projects ]</a>
                <a href="#contact" className="btn-secondary">[ Get in Touch ]</a>
                <a href="/Abdallah-Kassem-CV.pdf" download className="btn-secondary">[ Download CV ]</a>
              </div>
            )}
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="section">
          <About />
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="section">
          <Projects />
        </section>

        {/* ── Services ── */}
        <section id="services" className="section">
          <Store />
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};
