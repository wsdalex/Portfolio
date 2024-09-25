import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.scss";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
