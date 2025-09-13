import { ArrowDown, ArrowUp } from "lucide-react";

export const BouncingArrow = ({ className = "", onClick, currentSection }) => {
  // Only show arrow on sections that have a next section
  const shouldShow = currentSection === 'about' || currentSection === 'projects' || currentSection === 'contact';

  // Determine if we're at the bottom section and should show arrow up
  const isLastSection = currentSection === 'contact'; // Assuming 'contact' is your last section

  if (!shouldShow) return null;

  const handleClick = () => {
    if (onClick) {
      onClick(isLastSection); // Pass whether we're scrolling up to the onClick handler
    }
  };

  return (
    <div className={`bouncing-arrow ${className}`} onClick={handleClick}>
      {isLastSection ? <ArrowUp size={24} /> : <ArrowDown size={24} />}
    </div>
  );
};
