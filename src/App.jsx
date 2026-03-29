import Cursor from './components/Cursor';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import GuitarString from './components/GuitarString';
import CodingProfiles from './components/CodingProfiles';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Cursor />
      
      {/* Navigation could go here */}
      <nav className="navbar container">
        <div className="nav-logo">Portfolio<span>.</span></div>
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <GuitarString />
        <CodingProfiles />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
