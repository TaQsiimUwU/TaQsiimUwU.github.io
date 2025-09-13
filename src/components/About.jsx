import GlareHover from "./effects/GlareHover";
import {
  Code2,
  Zap,
  FileCode,
  Palette,
  Wind,
  FileText,
  PenTool,
  Flame,
  Circle,
  Train,
  Smartphone,
  Diamond,
  GitBranch,
  Leaf,
  Target,
  Heart
} from "lucide-react";

const about = "> Let me tell you a bit about myself. I'm Abdallah Kassem, currently pursuing my dreams in Computer Science at E-JUST. My journey has led me to become a React Front-End developer. I've also ventured into Mobile App development using Flutter & Kotlin. I make unique websites and applications that are not only functional but also visually appealing to the eyes of the users. I'm located in the beautiful city of Alexandria, Egypt. Thanks for taking the time to read my story!";

const skills = [
  {
    category: "Frontend Development",
    technologies: [
      { name: "React.js", icon: Code2 },
      { name: "JavaScript", icon: Zap },
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: Palette },
      { name: "Tailwind CSS", icon: Wind },
      { name: "TypeScript", icon: FileText }
    ]
  },
  {
    category: "Backend Development",
    technologies: [
      { name: "Python", icon: PenTool },
      { name: "Flask", icon: Flame },
      { name: "Node.js", icon: Circle },
      { name: "Express.js", icon: Train }
    ]
  },
  {
    category: "Mobile Development",
    technologies: [
      { name: "Flutter", icon: Smartphone },
      { name: "Kotlin", icon: Diamond },
      { name: "React Native", icon: Smartphone }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", icon: GitBranch },
      { name: "MongoDB", icon: Leaf },
      { name: "Firebase", icon: Flame },
      { name: "Figma", icon: Target },
      { name: "VS Code", icon: Heart }
    ]
  }
];

export const About = () => {
  return (
    <div className="about-section">
      <div className="section-title ">
        <h1>About Me</h1>
      </div>
      <div className="about-content flex">
        <div className="about-line">
          {about}
        </div>
        <GlareHover
        width="200%"
        height="100%"
        glareColor="#ffffff"
        glareOpacity={0.5}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}>
        <img src="/pfp.jpg" alt="ME" className="about-image" />
        </GlareHover>
      </div>

      {/* Skills and Technologies Section */}
      <div className="skills-section">
        <h2 className="skills-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{skillCategory.category}</h3>
              <div className="technologies-list">
                {skillCategory.technologies.map((tech, techIndex) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={techIndex} className="technology-item">
                      <div className="tech-content">
                        <span className="tech-icon">
                          <IconComponent size={20} />
                        </span>
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="/Abdallah-Kassem-CV.pdf" download>
       <button className="CV-btn">
                <span className="text">Download My CV</span>
              </button>
      </a>

    </div>
  );
};


