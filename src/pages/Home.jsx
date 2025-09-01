import { useState, useEffect } from 'react';
import { SquareX } from 'lucide-react';
import { ThemeToggle } from '../components/Theme-Toggle.jsx';
import { Footer } from '../components/Footer.jsx';
import { Menu } from '../components/Menu.jsx';
import { Main_content } from '../components/Main_content.jsx';
import { BG } from '../components/bg/bg.jsx';
// import Aurora  from '../components/bg/Aurora.jsx';

export const Home = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [showMainContent, setShowMainContent] = useState(false);

  const handleMenuItemClick = (section) => {
    setActiveSection(section);
    setShowMainContent(true);
  };

  // Listen for ESC key to close main content
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setShowMainContent(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-dvh flex flex-col ">
      {/*  theme toggle*/}
      <div className="absolute top-4 left-4">
        <ThemeToggle />
      </div>
      {/* Background Effects */}
      <BG />
        {/* Content Container */}
        <div className="flex-grow flex items-center justify-center" id="content-container">
          {/* Navbar */}
          <div className="w-full max-w-4xl flex flex-col items-center" id="menu">
            <Menu onMenuItemClick={handleMenuItemClick} />
          </div>

        {/* Main content */}
          <div id="main-content-decoration" className={`${showMainContent ? 'show-main-content' : 'hide-main-content'}`}>
                <div className="outer-box">
                <div className="corner-tl"></div>
                <div className="corner-tr"></div>
                <div className="corner-bl"></div>
                <div className="corner-br"></div>
                </div>

            <div id="main-content">
              <button id="x-btn" onClick={() => setShowMainContent(false)}>
                <SquareX size={40} absoluteStrokeWidth />
              </button>
              <Main_content activeSection={activeSection} />
            </div>
          </div>
              </div>
              {/* Footer */}
      <Footer />
    </div>
  );
};
