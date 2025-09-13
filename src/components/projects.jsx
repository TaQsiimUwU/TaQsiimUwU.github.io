import { useRef, useState } from "react"
// import { motion, useInView } from "framer-motion"
// import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { ProjectPopup } from "./project_popup"


  const projects = [
    {
      id: 1,
      title: "Cross Platform Task Manager",
      shortDescription: "A cross-platform desktop application that provides real-time monitoring of system resources, including CPU, memory, disk usage, and running processes.",
      fullDescription: "This comprehensive task manager application was built using Python and provides real-time monitoring capabilities for system resources. The application features a modern GUI built with Electron, allowing it to run seamlessly across different operating systems. Key features include process monitoring, resource usage tracking, system performance metrics, and the ability to manage running applications. The application uses the Psutil library for system monitoring and provides detailed insights into CPU usage, memory consumption, disk I/O, and network activity.",
      image: "/project-img/task-manager.jpg",
      tags: ["Python", "Psutil", "Electron", "Operating System"],
      githubUrl: "https://github.com/TaQsiimUwU/Task-manager-with-GUI",
      liveUrl: null,
      features: [
        "Real-time system monitoring",
        "Process management",
        "Resource usage visualization",
        "Cross-platform compatibility",
        "Modern GUI interface"
      ],
      technologies: ["Python", "Psutil", "Electron", "JavaScript", "HTML/CSS"]
    },
    {
      id: 2,
      title: "Project U",
      shortDescription: "A website for students who just finished their exams to help them choose their university and track their application status.",
      fullDescription: "Project U is a comprehensive web platform designed to assist students in their university selection process. Built with Python Flask backend and JavaScript frontend, this application provides students with tools to research universities, compare programs, track application deadlines, and monitor their application status. The platform includes detailed university profiles, admission requirements, scholarship information, and a personalized dashboard for each student to manage their university applications efficiently.",
      image: "/project-img/project-U.png",
      tags: ["Python", "Flask", "JavaScript"],
      githubUrl: "https://github.com/Amr-Ma7moud/Project_U",
      liveUrl: null,
      features: [
        "University search and comparison",
        "Application tracking system",
        "Scholarship information",
        "Admission requirements database",
        "Personalized student dashboard"
      ],
      technologies: ["Python", "Flask", "JavaScript", "HTML/CSS", "SQLite"]
    },
    {
      id: 3,
      title: "Gesture-controlled ESP",
      shortDescription: "Created a gesture-controlled multi-game system to deliver an interactive user experience using Python on PC and an ESP32 microcontroller.",
      fullDescription: "This innovative project combines computer vision, machine learning, and embedded systems to create a gesture-controlled gaming platform. Using Python for computer vision processing and an ESP32 microcontroller for hardware control, the system recognizes hand gestures through a camera and translates them into game controls. The project features multiple games that can be controlled entirely through hand movements, providing an immersive and interactive gaming experience without traditional input devices.",
      image: "/project-img/ESP32.jpg",
      tags: ["Python", "ESP32", "Arduino IDE"],
      githubUrl: "https://github.com/Amr-Ma7moud/Project_U",
      liveUrl: null,
      features: [
        "Hand gesture recognition",
        "Multiple interactive games",
        "Real-time computer vision processing",
        "Wireless communication with ESP32",
        "Customizable gesture commands"
      ],
      technologies: ["Python", "OpenCV", "ESP32", "Arduino IDE", "C++", "Computer Vision"]
    },
  ]


export const Projects = () => {
  const ref = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
    setSelectedProject(null)
  }

  return (
    <div className="projects-section" ref={ref}>
      <h1 className="section-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-tooltip={project.title}
            onClick={() => handleProjectClick(project)}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-overlay">
              <span className="learn-more">
                Learn More <ArrowRight size={20} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {showPopup && selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={closePopup}
        />
      )}
    </div>
  )
}

