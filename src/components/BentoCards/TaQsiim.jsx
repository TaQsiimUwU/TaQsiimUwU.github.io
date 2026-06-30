import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HoverCard from '../HoverCard';
const AnimatedName = ({ names, typingSpeed = 100, deleteSpeed = 60, pauseDuration = 2500 }) => {
  const [displayText, setDisplayText] = useState('');
  const [nameIndex, setNameIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentName = names[nameIndex];

    let timeout;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentName.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentName.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing — pause then start deleting
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Finished deleting — move to next name
        setIsDeleting(false);
        setNameIndex((prev) => (prev + 1) % names.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, nameIndex, names, typingSpeed, deleteSpeed, pauseDuration]);

  return (
    <span className="typewriter-name">
      <span className="typewriter-text">{displayText}</span>
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

const TaQsiim = () => {
  const names = ['TaQsiim', 'Abdallah Kassem'];

  return (

    <HoverCard tooltipText="About Me" >
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', width: '100%', height: '100%' }}>
          <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--color-text-secondary)' }}>
            <ArrowUpRight size={20} className="taqsiim-arrow" />
          </div>

          <img
            src="/Logo colored.svg"
            alt="TaQsiim Logo"
            style={{ width: '100px', height: 'auto', display: 'block', flexShrink: 0 }}
          />
          <div>
            <h2 className="taqsiim-name" style={{ margin: 0, textAlign: 'center' }}>
              <AnimatedName names={names} />
            </h2>
          </div>
        </div>
      </Link>

    </HoverCard >
  );
};

export default TaQsiim;
