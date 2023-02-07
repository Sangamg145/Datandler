import React from "react";
import BannerImg from "../../assest/btmBanner.png";
import "./bottomStyle.css";
const BottomBAnner = () => {
  return (
    <div className="container-bottom-banner">
      <img src={BannerImg} className="conatiner-img"/>
      <div>
        <h2>
          “Some of the History of Our Company is that we are Catching up through
          Video”
        </h2>
        <button
          style={{
            color: "#fff",
            borderRadius: "5%",
            backgroundColor: "#ff3e54",
            border: "none",
            outline: "none",
            padding: "10px",
          }}
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default BottomBAnner;
