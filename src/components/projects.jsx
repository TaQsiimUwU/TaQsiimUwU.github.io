
export const Projects = () => {


const Card = ({ text }) => {
  return (

      <div className="outer">
        <div className="dot" />
        <div className="card">
          <div className="ray" />
          <div className="text">{text}</div>

          <div className="line topl" />
          <div className="line leftl" />
          <div className="line bottoml" />
          <div className="line rightl" />
        </div>
      </div>

  );
}




  return (
    <div className="projects-section">
      <h2 className="section-title">Projects</h2>
    <div className="projects-grid">
      <div className="project-card"><Card text="Project 1" /></div>
      <div className="project-card"><Card text="Project 2" /></div>
      <div className="project-card"><Card text="Project 3" /></div>
      <div className="project-card"><Card text="Project 4" /></div>
    </div>
  </div>
  );
}



