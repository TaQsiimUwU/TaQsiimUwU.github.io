// filepath: g:\programming\my_website\portofolio-V1.0\src\pages\Home.jsx
import { useState } from 'react';
import { ThemeToggle } from '../components/Theme-Toggle.jsx';
import { Main_content } from '../components/Main_content.jsx';
import Aurora from '../components/bg/Aurora.jsx';
import { SquareX } from 'lucide-react';
export const Home = () => {
  const [activeSection, setActiveSection] = useState('projects');
  const [showMainContent, setShowMainContent] = useState(false);

  const handleMenuItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#1f1e2e]">
      {/*  theme toggle */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 opacity-20">
        <Aurora
          colorStops={["#5227FF", "#7cff67", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content Container */}
      <div className="flex-grow flex flex-col md:flex-row items-stretch relative z-10 mt-8 mx-4 md:mx-12">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center px-4 py-6 md:py-12">
          <div className="mb-8 md:mb-16">
            <h1 className="text-5xl md:text-6xl font-mono text-white">TaQsiim</h1>
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
              <button onClick={() => setShowMainContent(false)}>
                <SquareX size={40} absoluteStrokeWidth />
              </button>
              <Main_content activeSection={activeSection} />
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

