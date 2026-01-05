import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ScrollProgress from "./Components/ScrollProgress";


function App() {
  return (
    <>
      <ScrollProgress/>
      <Navbar/>
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
