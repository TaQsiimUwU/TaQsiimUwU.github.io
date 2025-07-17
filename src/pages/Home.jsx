import { useState, useEffect } from 'react';
import { SquareX } from 'lucide-react';
import { ThemeToggle } from '../components/Theme-Toggle.jsx';
import { Footer } from '../components/Footer.jsx';
import { Menu } from '../components/Menu.jsx';
import { Main_content } from '../components/Main_content.jsx';
import Aurora  from '../components/bg/Aurora.jsx';

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
    <div className="min-h-screen flex flex-col overflow-x-hidden ">
      {/*  theme toggle*/}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      {/* Background Effects */}

     {/*
      <Aurora

        colorStops={["#FFFFFF", "#000000", "#FFFFFF"]}

        blend={0.5}

        amplitude={1.0}

        speed={0.5}

      />
      */}
        {/* Content Container */}
        <div className="flex-grow flex items-center justify-center" id="content-container">
          {/* Navbar */}
          <div className="w-full max-w-4xl flex flex-col items-center" id="menu">
            <Menu onMenuItemClick={handleMenuItemClick} />
          </div>

        {/* Main content */}
        <div
          className={`${showMainContent ? 'show-main-content' : 'hide-main-content'}`}
          id="main-content"
        >
          <button onClick={() => setShowMainContent(false)}>
            <SquareX size={40} absoluteStrokeWidth />
          </button>
          <Main_content activeSection={activeSection} />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
