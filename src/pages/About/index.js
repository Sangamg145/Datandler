import React from "react";
import Img from "../../assest/About.png";
import "./style.css";
const index = () => {
  return (
    <div className="about-container">
      <div className="about-container-img">
        <img src={Img} style={{width:'100%',height:'100%'}}  />
      </div>
      <div className="about-container-2">
        <h2>\ About us \</h2>
        <h1>
          One of the Fastest Way to <br />
          Business Growth
        </h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed
        </p>
      </div>
    </div>
  );
};

export default index;
