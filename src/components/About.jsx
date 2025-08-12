const lines = [
  "> Hello everyNyan~ ^w^",
  "> I'm Abdallah Kassem 🐱 — a Computer Science student at E-JUST.",
  "> React Front-End and Mobile App Developer using Flutter & Kotlin.",
  "> Experienced in Python, C/C++, and embedded systems.",
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

    </div>
  );
};


