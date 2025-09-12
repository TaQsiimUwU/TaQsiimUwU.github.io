
  const projects = [
    {
      title: "Cross Platform Task Manager ",
      description:
        "A cross-platform desktop application that provides real-time monitoring of system resources, including CPU, memory, disk usage, and running processes.",
      image: "/project-img/task-manager.jpg",
      tags: ["Python", "Psutil", "Electron", "Operating System"],
      githubUrl: "https://github.com/TaQsiimUwU/Task-manager-with-GUI",
    },
    {
      title: "Project U",
      description:
        "A website for students who just finished there exams to help them choose their university and track their application status.",
      image: "/project-img/project-U.png",
      tags: ["Python", "Flask", "JS"],
      githubUrl: "https://github.com/Amr-Ma7moud/Project_U",
    },
      {
      title: "Gesture-controlled ESP",
      description:
        "Created a gesture-controlled multi-game system to deliver an interactive user experience using Python on PC and an ESP32 microcontroller",
      image: "/project-img/ESP32.webp",
      tags: ["Python", "ESP 32", "Arduino IDE"],
      githubUrl: "https://github.com/Amr-Ma7moud/Project_U",
    },
  ]







export const projectpopup = () => {
  return (
    <div className="project-popup">
      {projects.map((project, index) => (
          <div className="project-content" key={index} >
             <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
      ))}
    </div>
  );
}
