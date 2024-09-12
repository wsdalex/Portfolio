import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
