import { Server, Globe, FileText, Terminal } from 'lucide-react';

const bio = `I am TaQsiim, a full-stack software developer based in Alexandria, Egypt. With a strong foundation in the MERN stack and deep expertise in cross-platform technologies like Kotlin Multiplatform (KMP), Flutter, and Python, I build resilient and scalable applications.

My approach to software engineering is rooted in strong system fundamentals. As a dedicated Arch Linux user, I am highly comfortable navigating complex system architectures, troubleshooting deep-level technical issues, and optimizing environments for peak performance. I value the entire software development lifecycle — heavily emphasizing thorough system design and comprehensive technical documentation (SRS) before writing a single line of code.`;

const skillGroups = [
  {
    title: 'Full-Stack Web',
    Icon: Globe,
    items: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
  },
  {
    title: 'Cross-Platform',
    Icon: Server,
    items: ['Kotlin', 'Kotlin Multiplatform', 'Flutter', 'Python'],
  },
  {
    title: 'System & DevOps',
    Icon: Terminal,
    items: ['Arch Linux', 'Git', 'Docker', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Planning & Design',
    Icon: FileText,
    items: ['SRS Documentation', 'System Architecture', 'API Design', 'UML'],
  },
];

export const About = () => {
  return (
    <div>
      <div className="section-header">
        <div className="section-cmd">
          <span className="cmd-prompt">$ </span>cat about.txt
        </div>
        <h2 className="section-title-main">
          About <span>Me</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="about-bio">{bio}</div>

      <div className="skills-header">
        <div className="section-cmd">
          <span className="cmd-prompt">$ </span>ls ./skills/
        </div>
      </div>

      <div className="skills-container">
        {skillGroups.map(({ title, Icon, items }, i) => (
          <div key={i} className="skill-group">
            <div className="skill-group-title">
              <Icon size={13} style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: 'middle' }} />
              {title}
            </div>
            <div className="skill-tags">
              {items.map((item, j) => (
                <span key={j} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
