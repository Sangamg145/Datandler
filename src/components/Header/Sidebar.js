import React from "react";
import Logo from "../../assest/logoPng.png";
export default function Sidebar({open}) {
  return (
    <div className="wrapper">
      <div className={open?"sidebar-open":"sidebar"}>
        <div className="profile">
          <img style={{  width: 100,
  height: 100,
  objectFit: 'contain'}} src={Logo} />
        </div>

        <ul>
          <li>
            <a href="/">
              <span className="item">Home</span>
            </a>
          </li>
          <li>
            <a href="about">
              <span className="item">About</span>
            </a>
          </li>
          <li>
            <a href="service">
              <span className="item">Our Services</span>
            </a>
          </li>
          <li>
            <a href="Ourportfolio">
              <span className="item">Portfolio</span>
            </a>
          </li>
          <li>
            <a href="blogs">
              <span className="item">Blog</span>
            </a>
          </li>
          <li>
            <a href="contactUs">
              <span className="item">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
