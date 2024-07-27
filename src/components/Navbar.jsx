import React from "react";
//import logo from "./data/logo.json";

const Navbar = () => {
  return (
    <>
      <div className=" nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000" 
      >
        <div className="left logo">SS
        </div>
        <div className="right ">
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
