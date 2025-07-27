const lines = [
  "> Hello everyNyan~ ^w^",
  "> I'm Abdallah Kassem 🐱 — a Computer Science student at E-JUST.",
  "> React Front-End and Mobile App Developer using Flutter & Kotlin.",
  "> Experienced in Python, C/C++, and embedded systems.",
  "> ECPC problem solver. Love you <3",

];

export const About = () => {
  return (
    <div className="about-section">
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


