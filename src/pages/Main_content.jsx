import {Projects} from '../components/projects.jsx';
import {Contact} from '../components/Contact.jsx';
import {About} from '../components/About.jsx';
import {Options} from '../components/Options.jsx';

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
      case 'options':
        return <Options />;
      default:
        return <About />;
    }
  };

  return (
    <div className="">
      {/* Call the function to render the correct section */}
      {renderSection()}
    </div>
  );
}
