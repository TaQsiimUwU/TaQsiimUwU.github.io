import {Projects} from './projects.jsx';
import {Contact} from './Contact.jsx';
import {About} from './About.jsx';
import {Store} from '../pages/Store.jsx';
export const Main_content = ({ activeSection }) => {

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
    <div>
      {/* Call the function to render the correct section */}
      {renderSection()}
    </div>
  );
}
