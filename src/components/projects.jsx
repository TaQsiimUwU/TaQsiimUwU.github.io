import { useRef } from "react"
import { motion, useInView } from "framer-motion"
// import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"


  const projects = [
    {
      title: "Cross Platform Task Manager ",
      description:
        "A cross-platform desktop application that provides real-time monitoring of system resources, including CPU, memory, disk usage, and running processes.",
      image: "/project-img/task-manager.jpg",
      tags: ["Python", "Psutil", "Electron", "Operating System"],
      liveUrl: "",
      githubUrl: "https://github.com/TaQsiimUwU/Task-manager-with-GUI",
    },
    {
      title: "Project U",
      description:
        "A website for students who just finished there exams to help them choose their university and track their application status.",
      image: "/project-img/project-U.png",
      tags: ["Python", "Flask", "JS"],
      liveUrl: "",
      githubUrl: "https://github.com/Amr-Ma7moud/Project_U",
    },
      {
      title: "Gesture-controlled ESP",
      description:
        "Created a gesture-controlled multi-game system to deliver an interactive user experience using Python on PC and an ESP32 microcontroller",
      image: "/project-img/ESP32.webp",
      tags: ["Python", "ESP 32", "Arduino IDE"],
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
          <div
            key={index}
            className="project-card"
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
          </div>
        ))}
      </div>
    </div>
  )
}

