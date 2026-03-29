import { motion } from 'framer-motion';
import { Code2, Trophy, Terminal } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './CodingProfiles.css';

export default function CodingProfiles() {
  const profiles = [
    {
      platform: 'Codolio',
      username: 'dhruv10',
      stats: 'DSA & CP Portfolio Tracker',
      icon: <Code2 size={28} />,
      link: 'https://codolio.com/profile/dhruv10',
      color: '#38bdf8' 
    },
    {
      platform: 'GitHub',
      username: 'Dhruv107ag',
      stats: 'Project Contributions & Source Code',
      icon: <FaGithub size={28} />,
      link: 'https://github.com/Dhruv107ag',
      color: '#FAFAFA' 
    }
  ];

  return (
    <section className="section container" id="profiles">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span>Coding Profiles</span>
      </motion.h2>

      <div className="profiles-grid">
        {profiles.map((profile, index) => (
          <motion.a 
            href={profile.link}
            target="_blank"
            rel="noreferrer"
            key={profile.platform}
            className="profile-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: `0 10px 30px -15px ${profile.color}` }}
            style={{ '--hover-color': profile.color }}
          >
            <div className="profile-icon" style={{ color: profile.color }}>
              {profile.icon}
            </div>
            <div className="profile-info">
              <h3>{profile.platform}</h3>
              <p className="username">@{profile.username}</p>
              <p className="stats">{profile.stats}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
