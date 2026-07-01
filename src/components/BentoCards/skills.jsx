import React from 'react';
import { Cpu, Layout, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile',
      icon: <Smartphone size={14} style={{ color: 'var(--color-accent)' }} />,
      items: ['Kotlin', 'Flutter']
    },
    {
      title: 'Frontend',
      icon: <Layout size={14} style={{ color: 'var(--color-accent)' }} />,
      items: ['React.js']
    },
    {
      title: 'Backend & Tools',
      icon: <Database size={14} style={{ color: 'var(--color-accent)' }} />,
      items: ['Git', 'Figma', 'Node.js']
    }
  ];

  return (
    <div className="flex-col-between">
      <div style={{ marginBottom: '1rem' }}>
        <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--color-text-bright)' }}>Mobile & Frontend Developer</h2>
      </div>
      <div className="flex-row-between" style={{ marginBottom: '0.75rem' }}>
        <h3 className="font-mono-custom text-accent" style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          // Tech Stack & Tools
        </h3>
        <span className="font-mono-custom" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>skills.json</span>
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
