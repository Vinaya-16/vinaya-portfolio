import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer>
        <div className="ftr-section">
          <p>Designed & built by <b>Vinaya Patole</b> - 2026 - Frontend Developer</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
