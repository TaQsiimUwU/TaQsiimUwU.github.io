import '../Styles/index.css';

const BentoGrid = () => {
  return (
    <div className="bento-container">
      {/* Top horizontal bar */}
      <div className="bento-header"></div>

      {/* Main Grid Layout */}
      <div className="bento-grid">
        <div className="bento-card card-top-left">
          <h1 className="portfolio-nameplate">Project</h1>
        </div>

        <div className="bento-card card-top-right">
          <span className="portfolio-nameplate">Services</span>
        </div>

        <div className="bento-card card-bottom-left">
          <span className="portfolio-nameplate">Tools </span>
        </div>

        <div className="bento-card card-center">
          <h1 className="portfolio-nameplate">TaQsiim</h1>
        </div>

        <div className="bento-card card-bottom-right">
          <h1 className="portfolio-nameplate">Contacts</h1>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
