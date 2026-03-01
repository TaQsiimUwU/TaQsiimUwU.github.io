export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-prompt">$</span>
        <span className="footer-version">TaQsiim.dev</span>
        <span className="footer-sep">—</span>
        <span>v2.0</span>
      </div>
      <span>© {new Date().getFullYear()} TaQsiim. All rights reserved.</span>
    </footer>
  );
}
