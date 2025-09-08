const lines = [
  "> Let me tell you a bit about myself. I'm Abdallah Kassem, currently pursuing my dreams in Computer Science at E-JUST.",
  "> My journey has led me to become a React Front-End developer.",
  "> I've also ventured into Mobile App development using Flutter & Kotlin.",
  "> I'm located in the beautiful city of Alexandria, Egypt.",
  "> Thanks for taking the time to read my story!",
];

export const About = () => {
  return (
    <div className="about-section">
      <div className="section-title ">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        {lines.map((line, idx) => (
          <div key={idx} className="about-line">
            {line}
          </div>
        ))}
      </div>
      {/* <div className="button-borders">
        <a href="/Abdallah-Kassem-CV.pdf" download>
          <button className="primary-button">Download My CV</button>
        </a>
      </div> */}
        {/* <img src="/spin-rei.gif" alt="Spinning Rei" className="about-gif" /> */}

        {/* cool cube  */}
    {/* <div class="cube-container">

        <div class="cube">
            <div class="face right"></div>
            <div class="face front"></div>
            <div class="face top"></div>
            <div class="face back"></div>
            <div class="face bottom"></div>

        </div>
      </div> */}

      <a className="text-container font-medium" href="/Abdallah-Kassem-CV.pdf" download>
       <button className="CV-btn">
                <span className="text">Download My CV</span>
              </button>
      </a>

    </div>
  );
};


