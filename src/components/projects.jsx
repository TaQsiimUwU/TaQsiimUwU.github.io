export const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      link: "https://github.com/username/portfolio"
    },
    {
      title: "Task Management App",
      description: "A full-stack task management application with user authentication.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/username/task-app"
    },
    {
      title: "E-commerce Store",
      description: "An online store with product listings and shopping cart functionality.",
      technologies: ["React", "Firebase", "Stripe API"],
      link: "https://github.com/username/ecommerce"
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Projects</h2>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-[#6165B5] p-4 rounded-sm bg-[#2a293a] hover:bg-[#30304a] transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="bg-[#6165B5] text-white text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a8b4ff] hover:text-white transition-colors"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
