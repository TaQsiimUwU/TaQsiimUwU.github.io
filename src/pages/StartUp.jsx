import { useState, useEffect } from 'react';
import { Home } from './Home.jsx';
import { BG } from '../components/bg/bg.jsx';

const bootSequence = [
  '> Booting TaQsiim.dev [v2.0]...',
  '> arch linux :: kernel loaded',
  '> initializing cross-platform runtime...',
  '> mern stack      :: online',
  '> kotlin/kmp      :: online',
  '> flutter         :: online',
  '',
  '> system :: READY',
  '',
  '$ _press any key to continue',
];

export const StartUp = () => {
  const [lines, setLines] = useState([]);
  const [ready, setReady] = useState(false);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    let i = 0;
    const tick = () => {
      if (i < bootSequence.length) {
        const line = bootSequence[i];
        i++;
        setLines(prev => [...prev, line]);
        setTimeout(tick, line === '' ? 80 : 180);
      } else {
        setReady(true);
      }
    };
    const id = setTimeout(tick, 600);
    return () => clearTimeout(id);
  }, []);

  if (showHome) return <Home />;

  return (
    <div
      className="startup-screen"
      onClick={() => ready && setShowHome(true)}
    >
      <BG />
      <div className="terminal-boot">
        <div className="terminal-header">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
          <span className="terminal-title">taqsiim@arch: ~</span>
        </div>
        <div className="terminal-body">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`boot-line${
                line.startsWith('$') ? ' boot-prompt' : ''
              }${
                line.includes('READY') ? ' boot-ready' : ''
              }`}
            >
              {line || '\u00A0'}
            </div>
          ))}
          {ready && <span className="boot-cursor">█</span>}
        </div>
      </div>
    </div>
  );
};
