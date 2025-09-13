import {Projects} from './projects.jsx';
import {Contact} from './Contact.jsx';
import {About} from './About.jsx';
import {Store} from '../pages/Store.jsx';
import {BouncingArrow} from './BouncingArrow.jsx';

export const Main_content = ({ activeSection }) => {

  const scrollToNext = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollBy({
        top: mainContent.clientHeight,
        behavior: 'smooth'
      });
    }
  };

// Function to render the correct section based on activeSection
const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'Store':
        return <Store />;
      default:
        return <About />;
    }
  };

  return (
    <div className="rendered-section">
      {/* Call the function to render the correct section */}
      {renderSection()}

      {/* Fixed bouncing arrow overlay */}
      <BouncingArrow
        currentSection={activeSection}
        onClick={scrollToNext}
      />
    </div>
  );
}
