import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        
        "Hi! This is Shreyoshi Saha",
        "I'm a Programmer",
        "I'm a Web Designer",
        "I'm a Full Stack Developer",
        "I'm an Android Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
          <div className="  about">
            <p> As an enthusiastic and dedicated Information Technology student, I am passionate about exploring innovative technologies and solving complex problems. 
              With a keen eye for detail and a commitment to continuous learning, I am eager to contribute my skills in real-world projects, bringing creativity and technical expertise to any team I join.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
