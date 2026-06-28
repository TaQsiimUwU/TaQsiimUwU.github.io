import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const HoverCard = ({ children, tooltipText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div
      className="hover-card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}

      {isHovered && (
        <div
          className="cursor-tooltip"
          style={{
            left: `${mousePosition.x + 15}px`,
            top: `${mousePosition.y + 15}px`,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          {tooltipText}
          <ArrowUpRight size={14} />
        </div>
      )}
    </div>
  );
};

export default HoverCard;
