import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Footer } from '../components/Footer.jsx';
import { Menu } from '../components/Menu.jsx';
import { Main_content } from '../components/Main_content.jsx';
import { BG } from '../components/bg/bg.jsx';

export const Home = () => {
  const [activeSection, setActiveSection] = useState('projects');
  const [showMainContent, setShowMainContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Common breakpoint for mobile devices
    };

    checkMobile(); // Check on initial load
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMenuItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-dvh flex flex-col ">
      {/* Background Effects */}
      <BG />
      {/* Content Container */}
      <div className="flex-grow flex items-center justify-center" id="content-container">
        {/* Navbar - hide on mobile when main content is shown */}
        <div
          className={`w-full max-w-4xl flex flex-col items-center ${isMobile && showMainContent ? 'hide' : ''}`}
          id="menu"
        >
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
              <X size={50} strokeWidth={1} />
            </button>
            <Main_content activeSection={activeSection} />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* effects */}
    </div>
  );
};

