import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Footer from './components/Footer'
import Aos from "aos";
import "aos/dist/aos.css"


const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
        <Footer />
    </>
  );
};

export default App;
