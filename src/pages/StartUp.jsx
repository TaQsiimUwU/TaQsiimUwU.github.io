import { useState } from 'react';
import { Home } from './Home.jsx';
import { BG } from '../components/bg/bg.jsx';
import { Name } from '../components/Name.jsx';
export const StartUp = () => {
  const [showHome, setShowHome] = useState(false);

  const handleClick = () => {
    setShowHome(true);
  };

  if (showHome) {
    return <Home />;
  }

  return (
    <div
      className="Press-to-start"
      onClick={handleClick}
    >
      <Name />
      {/** Background Effects **/}
      <BG />
      <p>Click Anywhere to Start</p>
    </div>
  );
};
