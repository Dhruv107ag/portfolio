import { motion } from 'framer-motion';
import { Code, Layout, Brain } from 'lucide-react';
import './About.css';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skills = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      items: ['C++', 'JavaScript', 'TypeScript', 'Python']
    },
    {
      title: 'Web Dev',
      icon: <Layout size={24} />,
      items: ['HTML/CSS', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'GSAP']
    },
    {
      title: 'DSA',
      icon: <Brain size={24} />,
      items: ['Data Structures', 'Algorithms', 'Problem Solving', 'Competitive Programming']
    }
  ];

  return (
    <section className="section container" id="about">
      <motion.h2 
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <span>About Me</span>
      </motion.h2>

      <div className="about-content">
        <motion.div 
          className="about-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p>
            I'm a 2nd Year Computer Science Engineering student with a deep passion for 
            both building visually dynamic web applications and solving complex algorithmic challenges. 
            My journey bridges the gap between creative front-end design and rigorous backend logic.
          </p>
          <p>
            When I'm not crafting responsive interfaces, you can find me analyzing algorithms on LeetCode or participating in competitive programming contests. I fundamentally believe that a strong mathematical and data structures foundation is critical to writing brilliant software.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.title}
              className="skill-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
              }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skillGroup.icon}</span>
                <h3>{skillGroup.title}</h3>
              </div>
              <ul className="skill-list">
                {skillGroup.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
