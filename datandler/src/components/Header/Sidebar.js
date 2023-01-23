import React from "react";
import Logo from "../../assest/logoPng.png";
export default function Sidebar({open}) {
  return (
    <div className="wrapper">
      <div className={open?"sidebar-open":"sidebar"}>
        <div className="profile">
          <img src={Logo} />
        </div>

        <ul>
          <li>
            <a href="#">
              <span className="item">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">Our Services</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">Blog</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
