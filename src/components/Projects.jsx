import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Lecture Hall Management',
      description: 'A comprehensive management system built to efficiently schedule, monitor, and organize lecture halls avoiding overlaps.',
      tech: ['React', 'Node.js', 'Express'],
      github: '#',
      live: '#'
    },
    {
      title: 'MediConnect',
      description: 'A comprehensive healthcare platform connecting doctors and patients with real-time chat, appointment scheduling, and pharmacy management.',
      tech: ['React', 'Node.js', 'Express', 'Socket.io'],
      github: 'https://github.com/Dhruv107ag/iit_delhi',
      live: 'https://iit-delhi.vercel.app/'
    },
    {
      title: 'To Do List',
      description: 'A dynamic task management application carefully designed to keep track of daily goals and improve overall productivity.',
      tech: ['React', 'Tailwind'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section className="section container" id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span>Featured Projects</span>
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
            
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
