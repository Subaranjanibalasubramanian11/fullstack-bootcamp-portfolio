import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />

    </div>
  );
}

export default App;