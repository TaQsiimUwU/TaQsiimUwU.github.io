import React from 'react';
import { Cpu, Layout, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout size={14} style={{ color: 'var(--color-accent)' }} />,
      items: ['React', 'Next.js', 'Three.js', 'Vite']
    },
    {
      title: 'Languages',
      icon: <Cpu size={14} style={{ color: 'var(--color-accent)' }} />,
      items: ['JS', 'TS', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend/Tools',
      icon: <Database size={14} style={{ color: 'var(--color-accent)' }} />,
      items: ['Node.js', 'Git', 'Webpack', 'Figma']
    }
  ];

  return (
    <div className="flex-col-between">
      <div className="flex-row-between" style={{ marginBottom: '0.75rem' }}>
        <h3 className="font-mono-custom text-accent" style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          // Tech Stack & Tools
        </h3>
        <span className="font-mono-custom" style={{ fontSize: '0.75rem', color: '#71717a' }}>skills.json</span>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skills-category">
            <div className="skills-category-title">
              {category.icon}
              <span>{category.title}</span>
            </div>
            <div className="skills-tags-grid">
              {category.items.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
