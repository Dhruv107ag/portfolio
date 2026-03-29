import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section container" id="home">
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <motion.p 
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I am
          </motion.p>
          
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Dhruv <span className="gradient-text">Agrawal</span>
          </motion.h1>
        
          <motion.h2 
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            2nd Year CSE Student | Web Developer
          </motion.h2>
        
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I build clean, minimal, and highly interactive web applications. 
            Passionate about writing elegant code and solving complex algorithm problems.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects <ChevronRight size={18} />
            </a>
            <a href="#resume" className="btn btn-secondary">
              Resume <Download size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, y: -150, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            type: "spring", 
            bounce: 0.6,
            duration: 1.5,
            delay: 0.8 
          }}
        >
          {/* Photo loaded from public/profile.jpg */}
          <div className="hero-image-placeholder">
            <img 
              src="/profile.jpeg" 
              alt="Dhruv Agrawal" 
              className="hero-photo"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/350x350/14141A/38bdf8?text=Add+Photo";
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div 
          className="mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
}
