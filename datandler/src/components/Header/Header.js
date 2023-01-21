import React from "react";
import "./style.css";
import Logo from "../../assest/logoPng.png"
export const Header = () => {
  return (
    <div className="nav">
      <img src={Logo}/>
      <div>
        <h2>About</h2>
        <h2>Our Services</h2>
        <h2>Portfolio</h2>
        <h2>Blog</h2>
        <h2>Contact</h2>
        <button>Get In Touch</button>
      </div>
    </div>
  );
};
