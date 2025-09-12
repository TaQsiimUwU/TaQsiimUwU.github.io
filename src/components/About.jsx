import GlareHover from "./effects/GlareHover";

const about = "> Let me tell you a bit about myself. I'm Abdallah Kassem, currently pursuing my dreams in Computer Science at E-JUST. My journey has led me to become a React Front-End developer. I've also ventured into Mobile App development using Flutter & Kotlin. I make unique websites and applications that are not only functional but also visually appealing to the eyes of the users. I'm located in the beautiful city of Alexandria, Egypt. Thanks for taking the time to read my story!";

export const About = () => {
  return (
    <div className="about-section">
      <div className="section-title ">
        <h1>About Me</h1>
      </div>
      <div className="about-content flex">
        <div className="about-line">
          {about}
        </div>
        <GlareHover
        width="200%"
        height="100%"
        glareColor="#ffffff"
        glareOpacity={0.5}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}>
        <img src="/pfp.jpg" alt="ME" className="about-image" />
        </GlareHover>
      </div>

      <a href="/Abdallah-Kassem-CV.pdf" download>
       <button className="CV-btn">
                <span className="text">Download My CV</span>
              </button>
      </a>

    </div>
  );
};


