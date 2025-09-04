import { useRef } from "react"
import { motion, useInView } from "framer-motion"
// import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"


  const projects = [
    {
      title: "Cross Platform Task Manager ",
      description:
        "A responsive admin dashboard for an e-commerce platform with analytics, inventory management, and order processing.",
      image: "/project-img/task-manager.jpg",
      tags: ["Python", "Psutil", "Electron", "Operating System"],
      liveUrl: "",
      githubUrl: "https://github.com/TaQsiimUwU/Task-manager-with-GUI",
    },
    {
      title: "Project U",
      description:
        "A modern travel booking application with destination search, booking management, and user authentication.",
      image: "/project-img/project-U.png",
      tags: ["Python", "Flask", "JS", "SWE"],
      liveUrl: "",
      githubUrl: "https://github.com/Amr-Ma7moud/Project_U",
    },
  ]


export const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="projects-section" ref={ref}>
      <h1 className="section-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
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
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

