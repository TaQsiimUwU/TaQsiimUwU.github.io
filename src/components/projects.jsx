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
 <div class="projects-section">
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      <div class="project-card"></div>
      <div class="project-card"></div>
      <div class="project-card"></div>
      <div class="project-card"></div>
    </div>
  </div>
  );
}
