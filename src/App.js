import LandingPage from "./LandingPage";
import "./index.css";
import Projects from "./Projects";
import NavBar from "./NavBar";
import About from "./about"


function App() {
  return (
    <div className="main">
      <NavBar />
      <LandingPage />
      <Projects />
      <About />
    </div>
    
  );
}

export default App;
