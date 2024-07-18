import React from "react";
//import logo from "./data/logo.json";

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000" 
      >
        <div className="left logo">SS
        {/* <img src={`/assets/${logo.imgSrc}`} className="logo" alt="logo" /> */}
        </div>
        <div className="right nav_items">
          <a href="#home" className="nav_items">
            Home
          </a>
          <a href="#education" className="nav_items">
            Education
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#projects" className="nav_items">
            Projects
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
