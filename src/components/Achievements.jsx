import { motion } from 'framer-motion';
import { Users, Star } from 'lucide-react';
import './Achievements.css';

export default function Achievements() {
  const achievements = [
    {
      title: 'Member - Google Developer Groups (GDG)',
      description: 'Active member of the college GDG chapter. Engaging in tech community workshops, peer networking, and collaborative learning.',
      icon: <Users size={24} />
    },
    {
      title: 'Artist Management & Logistics Head',
      description: 'Led the logistics and artist coordination for the college Cultural Fest. Successfully managed event timelines, performer requirements, and core event operations.',
      icon: <Star size={24} />
    }
  ];

  return (
    <section className="section container" id="achievements">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span>Leadership & Clubs</span>
      </motion.h2>

      <div className="achievements-list">
        {achievements.map((item, index) => (
          <motion.div 
            key={item.title}
            className="achievement-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="achievement-icon">
              {item.icon}
            </div>
            <div className="achievement-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
