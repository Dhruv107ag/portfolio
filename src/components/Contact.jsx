import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section container" id="contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span>Get In Touch</span>
      </motion.h2>
      
      <p className="contact-subtitle">
        I am currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I will try my best to get back to you!
      </p>

      <div className="contact-grid">
        <motion.a 
          href="mailto:dhruvagrawal1616100@gmail.com"
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="contact-icon">
            <Mail size={32} />
          </div>
          <h3>Email Me</h3>
          <p>dhruvagrawal1616100@gmail.com</p>
        </motion.a>

        <motion.a 
          href="tel:+919528783250"
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="contact-icon">
            <Phone size={32} />
          </div>
          <h3>Call Me</h3>
          <p>+91 9528783250</p>
        </motion.a>

        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="contact-icon">
            <MapPin size={32} />
          </div>
          <h3>Location</h3>
          <p>Jaipur, India</p>
        </motion.div>
      </div>
    </section>
  );
}
