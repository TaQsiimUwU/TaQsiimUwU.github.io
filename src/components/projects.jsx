import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"


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
      image: "/project-img/ESP32.jpg",
      tags: ["Python", "ESP 32", "Arduino IDE"],
      githubUrl: "https://github.com/Amr-Ma7moud/Project_U",
    },
  ]


export const Projects = () => {
  const ref = useRef(null)
  // const isInView = useInView(ref, { once: true })

  return (
    <div className="projects-section" ref={ref}>
      <h1 className="section-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-tooltip={project.title}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            {/* <span >Learn More <ArrowRight/></span> */}

          </div>
        ))}
      </div>
    </div>
  )
}

