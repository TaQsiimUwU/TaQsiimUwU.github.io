import { Github, Linkedin, Twitter,Instagram,Phone, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <div>
      <div className="section-title">
        <h1>Contact Me</h1>
      </div>

      <div className="contact-list">
        <a href="mailto:abdallahkassemhassan@gmail.com">
          <div className="contact-item">
            <span className="contact-label">
              <Mail size={50} strokeWidth={1} />
            </span>
            <span className="contact-info">Abdallah Kassem</span>
          </div>
        </a>

        <a href="tel:+201013497030">
          <div className="contact-item">
            <span className="contact-label">
              <Phone size={50} strokeWidth={1} />
            </span>
            <span className="contact-info">+201013497030</span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/abdallah-kassem-2ba6a6294/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-item">
            <span className="contact-label">
              <Linkedin size={50} strokeWidth={1} />
            </span>
            <span className="contact-info">Abdallah Kassem</span>
          </div>
        </a>

        <a
          href="https://github.com/TaQsiimUwU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-item">
            <span className="contact-label">
              <Github size={50} strokeWidth={1} />
            </span>
            <span className="contact-info">TaQsiimUwU</span>
          </div>
        </a>

        <a
          href="https://www.instagram.com/taqsiim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-item">
            <span className="contact-label">
              <Instagram size={50} strokeWidth={1} />
            </span>
            <span className="contact-info">taqsiim</span>
          </div>
        </a>

        <a
          href="https://x.com/tq__ak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-item">
            <span className="contact-label">
              <Twitter size={50} strokeWidth={1} />
            </span>
            <span className="contact-info">taqsiim</span>
          </div>
        </a>

      </div>
    </div>
  );
};
