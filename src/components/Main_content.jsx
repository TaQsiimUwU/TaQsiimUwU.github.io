import {Projects} from './projects.jsx';
import {Contact} from './Contact.jsx';
import {About} from './About.jsx';
import {Options} from './Options.jsx';
import {NewGame} from './NewGame.jsx';
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
      case 'NewGame':
        return <NewGame />;
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
