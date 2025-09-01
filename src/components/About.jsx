const lines = [
  "> Hello everyNyan~ ^w^",
  "> I'm Abdallah Kassem — a Computer Science student at E-JUST.",
  "> React Front-End and Mobile App Developer using Flutter & Kotlin.",
  "> Love you <3",

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
        <img src="/spin-rei.gif" alt="Spinning Rei" className="about-gif" />
      <a className="text-container font-medium" href="/Abdallah-Kassem-CV.pdf" download>
       <button className="CV-btn">
                <span className="text">Download My CV</span>
              </button>
      </a>

    </div>
  );
};


