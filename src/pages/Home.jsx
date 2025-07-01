import { useState } from 'react';
import { ThemeToggle } from '../components/Theme-Toggle.jsx';
import { Footer } from '../components/Footer.jsx';
import { Menu } from '../components/Menu.jsx';
import { Main_content } from './Main_content.jsx';

export const Home = () => {
  const [activeSection, setActiveSection] = useState('about');
  const handleMenuItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen overflow-x-hidden ">
      {/*  theme toggle*/}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      {/* Background Effects */}

        {/* Content Container */}
        <div className="flex">
          {/* Navbar */}
          <div className="w-full">
            <Menu onMenuItemClick={handleMenuItemClick} />
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center py-6 flex-grow w-full">
            <Main_content activeSection={activeSection} />
          </div>

        </div>
        {/* Footer */}
      <Footer />
    </div>
  );
};
