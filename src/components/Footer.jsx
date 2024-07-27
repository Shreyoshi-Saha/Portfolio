import { useState, useEffect } from "react";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import 'animate.css';

const Footer = () => {
    return (
        <>
           
                <div className="footer-icon" >
                    <a href="https://www.instagram.com/_the_alphaqueen/?hl=en" target="_blank" rel="noopener noreferrer" className="items" >
                        <FaInstagram className="icons" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100069384630744" target="_blank" rel="noopener noreferrer" className="items">
                        <CiFacebook className="icons" />
                    </a>
                    <a href="https://www.linkedin.com/in/shreyoshi-saha-886351283/" target="_blank" rel="noopener noreferrer" className="items">
                        <CiLinkedin className="icons" />
                    </a>
                    <a href="https://github.com/Shreyoshi-Saha" target="_blank" rel="noopener noreferrer" className="items">
                        <FaGithubSquare className="icons" />
                    </a>
                    <a href="mailto:shreyosaha2003@gmail.com" target="_blank" rel="noopener noreferrer" className="items">
                        <SiGmail className="icons" />
                    </a>
                <p> &copy; Shreyoshi Saha 2024. All Rights Reserved.</p>
                </div>
                
        </>

    );

};

export default Footer;
