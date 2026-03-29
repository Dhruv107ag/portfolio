import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">Portfolio<span>.</span></div>
          <p>Designed and built with precision.</p>
        </div>
        
        <div className="footer-socials">
          <a href="https://github.com/Dhruv107ag" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/dhruv-agrawal-a92a44316/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {year} Built for Dhruv Agrawal. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
