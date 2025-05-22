import "./App.css";
import AboutMe from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact></Contact>
    </div>
  );
}

export default App;
