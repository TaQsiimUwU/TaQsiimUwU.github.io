import React from 'react';
import { Smartphone, Layout, Database, Terminal, Code, Code2, MonitorPlay, Zap, Globe, Lightbulb, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Marquee from 'react-fast-marquee';
import {
  SiKotlin, SiDart, SiPython, SiCplusplus, SiC, SiJavascript, SiHtml5,
  SiJetpackcompose, SiFlutter, SiFirebase, SiAndroidstudio,
  SiGit, SiGithub, SiArchlinux, SiAndroid
} from 'react-icons/si';

const Skills = () => {
  const { t } = useTranslation();
  const skillCategories = [
    {
      title: t('mobile_dev'),
      icon: <Smartphone size={18} style={{ color: 'var(--color-accent)' }} />,
      items: [
        { name: 'Kotlin', icon: <SiKotlin /> },
        { name: 'Dart', icon: <SiDart /> },
        { name: 'Jetpack Compose', icon: <SiJetpackcompose /> },
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'KMP', icon: <SiKotlin /> },
        { name: 'Android Studio', icon: <SiAndroidstudio /> },
        { name: 'Hilt', icon: <SiAndroid /> },
        { name: 'Room', icon: <Database size={18} /> },
        { name: 'Jetpack Nav', icon: <SiAndroid /> }
      ]
    },
    {
      title: t('web_dev'),
      icon: <Layout size={18} style={{ color: 'var(--color-accent)' }} />,
      items: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML/CSS', icon: <SiHtml5 /> }
      ]
    },
    {
      title: t('backend_apis'),
      icon: <Database size={18} style={{ color: 'var(--color-accent)' }} />,
      items: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Retrofit', icon: <Globe size={18} /> },
        { name: 'RESTful APIs', icon: <Globe size={18} /> }
      ]
    },
    {
      title: t('core_tools'),
      icon: <Terminal size={18} style={{ color: 'var(--color-accent)' }} />,
      items: [
        { name: 'Clean Architecture', icon: <Code2 size={18} /> },
        { name: 'MVVM', icon: <MonitorPlay size={18} /> },
        { name: 'Coroutines', icon: <Zap size={18} /> },
        { name: 'OOP', icon: <Code size={18} /> },
        { name: 'Agile/SDLC', icon: <Terminal size={18} /> },
        { name: 'NeoVim', icon: <Code size={18} /> },
        { name: 'Git/GitHub', icon: <SiGit /> },
        { name: 'Arch Linux btw', icon: <SiArchlinux /> }
      ]
    }
  ];

  return (
    <div className="flex-col-between" style={{ height: '100%' }}>
      <div style={{ marginBottom: '1rem', width: '100%' }}>
        <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--color-text-bright)', textAlign: 'center' }}>Mobile & Frontend Developer</h2>
      </div>

      <div className="skills-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflow: 'hidden' }}>
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skills-category" style={{ marginBottom: 0 }}>
            <div className="skills-category-title" style={{ marginBottom: '0.5rem', gap: '0.5rem' }}>
              {category.icon}
              <span style={{ fontSize: '1rem', fontWeight: 500 }}>{category.title}</span>
            </div>

            <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
              <Marquee
                gradient={false}
                speed={30 + Math.random() * 10}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                pauseOnHover={true}
              >
                <div style={{ display: 'flex', padding: '0.5rem 0' }}>
                  {category.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="skill-tag"
                      style={{
                        margin: '0 0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                  {/* Duplicate web items to ensure it scrolls properly since it only has 2 items */}
                  {category.items.length < 4 && category.items.map((skill, sIdx) => (
                    <span
                      key={`dup-${sIdx}`}
                      className="skill-tag"
                      style={{
                        margin: '0 0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Marquee>
            </div>

          </div>
        ))}
      </div>
      <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'center' }}>
        <a href="/Abdallah-Kassem-Hassan.pdf" target="_blank" rel="noopener noreferrer" className='btn-cv' style={{ width: '100%', justifyContent: 'center' }}>
          <Download size={16} /> get my Resume
        </a>
      </div>
    </div>
  );
};

export default Skills;
