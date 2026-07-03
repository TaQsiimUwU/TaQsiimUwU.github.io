import React from 'react';
import { Mail, Linkedin, Github, Instagram, Twitter, Youtube, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import TaQsiim from '../components/BentoCards/TaQsiim';
import Beams from '../components/ReactBits/Beams';

export const Links = () => {
  const links = [
    {
      icon: <Mail size={20} />,
      label: 'Email Me',
      value: 'abdallahkassemhassan@gmail.com',
      href: 'mailto:abdallahkassemhassan@gmail.com'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: '@taqsiimTQ',
      href: 'https://github.com/taqsiimTQ'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'Abdallah Kassem',
      href: 'https://linkedin.com/in/abdallah-kassem-hassan'
    },
    {
      icon: <Instagram size={20} />,
      label: 'Instagram',
      value: '@taqsiim',
      href: 'https://instagram.com/taqsiim'
    },
    {
      icon: <img src="/socialMedia/x.svg" alt="X" style={{ width: 18, height: 18, filter: 'invert(1)' }} />,
      label: 'Twitter / X',
      value: '@taqsiim',
      href: 'https://twitter.com/taqsiim'
    },
    {
      icon: <img src="/socialMedia/threads.svg" alt="Threads" style={{ width: 20, height: 20, filter: 'invert(1)' }} />,
      label: 'Threads',
      value: '@taqsiim',
      href: 'https://threads.net/taqsiim'
    },
    {
      icon: <Youtube size={20} />,
      label: 'YouTube',
      value: 'taqsiim',
      href: 'https://youtube.com/c/taqsiim'
    }
  ];

  return (
    <div className="linktree-page" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <Beams
          beamWidth={2}
          beamHeight={25}
          beamNumber={50}
          lightColor="#ff8a8a"
          speed={10}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={116}
        />
      </div>
      <div className="linktree-container">

        {/* Header Profile Section */}
        <div className='bento-card'>
          <TaQsiim />
        </div>

        {/* Links List */}
        <div className="linktree-links">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="linktree-card"
            >
              <div className="linktree-icon">{link.icon}</div>
              <div className="linktree-label">{link.label}</div>
            </a>
          ))}
        </div>

        {/* Footer / Back */}
        <div className="linktree-footer">
        </div>

      </div>
    </div>
  );
};

export default Links;
