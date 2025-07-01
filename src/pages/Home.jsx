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
    <div className="min-h-screen overflow-x-hidden">
      {/*  theme toggle*/}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      {/* Background Effects */}

      {/*  Navbar*/}
      <Menu onMenuItemClick={handleMenuItemClick} />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center py-6 w-full h-full">
        <Main_content activeSection={activeSection} />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
