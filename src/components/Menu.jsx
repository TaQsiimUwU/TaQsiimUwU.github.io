export const Menu = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo">
          <span className="bracket">{'{'}</span>
          <span className="logo-icon">▣</span>
          <span className="bracket">{'}'}</span>
          <span className="logo-text">TaQsiim</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
