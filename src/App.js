import LandingPage from "./LandingPage";
import "./index.css";
import "./about.css";
import "./contact.css";
import Projects from "./Projects";
import NavBar from "./NavBar";
import About from "./about"
import Contact from "./contact"


function App() {
  return (
    <div className="main">
      <NavBar />
      <LandingPage />
      <Projects />
      <About />
      <Contact />
    </div>
    
  );
}

export default App;
