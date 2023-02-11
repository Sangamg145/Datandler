import React from "react";
import "./style.css";
import Logo from "../../assest/logoPng.png";
import Sidebar from "./Sidebar";
export const Header = ({open,setOpen,setGoto}) => {
  return (
    <>
      <Sidebar open={open} />
      <div className="nav">
      <a href="/"> <img src={Logo} /></a>
        <div className="nav-items">
          <a href="about">About</a>
          <a href="service">Our Services</a>
          <a href="Ourportfolio">Portfolio</a>
          <a href="blogs">Blog</a>
          <a href="contactUs">Contact</a>
          <button onClick={()=>setGoto(1)} style={{cursor:'pointer'}}>Get In Touch</button>
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
