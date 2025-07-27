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
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About</h2>

      <div className="bg-[#2a293a] border border-[#6165B5] p-6 rounded-sm">
        <div className="terminal-text font-mono text-green-400">
          {lines.map((line, idx) => (
            <div key={idx} className="about-line mb-3 terminal-animation" style={{ animationDelay: `${idx * 200}ms` }}>
              {line}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['JavaScript', 'React', 'Flutter', 'Kotlin', 'Python', 'C/C++'].map((skill, idx) => (
              <div key={idx} className="bg-[#3a3950] text-white py-2 px-3 rounded-sm text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


