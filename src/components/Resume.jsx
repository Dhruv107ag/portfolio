import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';
import './Resume.css';

export default function Resume() {
  return (
    <section className="section container" id="resume">
      <motion.div 
        className="resume-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="resume-content">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            <span>My Resume</span>
          </h2>
          <p className="resume-desc">
            Get a detailed overview of my education, experience, technical skills, and projects. 
            Available in PDF format for clean printing and offline reading.
          </p>
          
          <div className="resume-actions">
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Dhruv_Agrawal_Resume.pdf" className="btn btn-primary">
              <Download size={20} /> Download PDF
            </a>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Eye size={20} /> Preview Online
            </a>
          </div>
        </div>
        
        <div className="resume-preview">
          <div className="mock-resume">
            <div className="mock-header"></div>
            <div className="mock-body">
              <div className="mock-sidebar">
                <div className="mock-line short"></div>
                <div className="mock-line"></div>
                <div className="mock-line"></div>
                
                <div className="mock-line short" style={{marginTop: '2rem'}}></div>
                <div className="mock-line"></div>
                <div className="mock-line"></div>
              </div>
              <div className="mock-main">
                <div className="mock-line title"></div>
                <div className="mock-line"></div>
                <div className="mock-line"></div>
                <div className="mock-line" style={{ width: '80%'}}></div>
                
                <div className="mock-line title" style={{marginTop: '2rem'}}></div>
                <div className="mock-line"></div>
                <div className="mock-line"></div>
                <div className="mock-line" style={{ width: '60%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
