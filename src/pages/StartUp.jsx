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
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Name />
      {/** Background Effects **/}
      <BG />
      <p style={{
        color: 'white',
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '1rem',
      }}>Click Anywhere to Start</p>
    </div>
  );
};
