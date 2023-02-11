import React, { useState } from "react";
import "./style.css";
import Logo from "../../assest/logoPng.png";
import Sidebar from "./Sidebar";
export const Header = () => {
  const [open,setOpen] = useState(true)
  return (
    <>
      <Sidebar open={open} />
      <div className="nav">
        <img src={Logo} />
        <div className="nav-items">
          <a href="about">About</a>
          <a href="service">Our Services</a>
          <a href="Ourportfolio">Portfolio</a>
          <a href="blogs">Blog</a>
          <a href="contactUs">Contact</a>
          <button>Get In Touch</button>
        </div>
        <div className="nav-hamberger" onClick={()=>setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
