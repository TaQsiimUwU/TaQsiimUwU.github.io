import FaultyTerminal from './FaultyTerminal.jsx';

export const BG = ({ pause = false }) => {
  return (
    <div className="bg">
      <FaultyTerminal
    pause={pause}

    scale={1.5}

    gridMul={[2, 1]}

    digitSize={1.2}

    timeScale={0.5}

    scanlineIntensity={0.5}

    glitchAmount={1}

    flickerAmount={1}

    noiseAmp={1}

    chromaticAberration={0}

    dither={0}

    curvature={0.1}

    tint="#88c0d0"

    mouseReact

    mouseStrength={0.5}

    pageLoadAnimation

    brightness={0.2}

  />
     {/* <div className="bg-grid"></div>
      <div className="scanlines"></div> */}
    </div>
  );
}
