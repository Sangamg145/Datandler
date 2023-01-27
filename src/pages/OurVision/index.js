import React from "react";
import Img from "../../assest/ourVision.png";
import "./style.css";
const index = () => {
  return (
    <div className="about-container">
      <div className="about-container-img">
        <img src={Img} style={{ width: "100%", height: "100%" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="about-container-2">
        <h2>\ What We Do \</h2>
        <h1
          style={{
            fontFamily: "Raleway",
            fontWeight: "700",
            fontSize: 40,
            lineHeight: "50px",
          }}
        >
          We Develope Product That People Love to Use.
        </h1>
        <p
          style={{
            fontFamily: "Raleway",
            fontWeight: "500",
            fontSize: 16,
            lineHeight: "26px",
          }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed, Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="about-container-2"
          style={{
            maxWidth: 555,
            height: 100,
            background: "#FFFFFF",
            borderRadius: 10,
            
            textAlign:'center'
          }}
        >
          <p style={{fontFamily: 'Raleway',
fontWeight: '700',
fontSize: 20,
lineHeight: '20px',
color: '#0E1F51'}}>Our Vision</p>
          <p>It is a long esta
-blished fact that</p>
        </div>
        <div
          style={{
            maxWidth: 555,
            height: 100,
            background: "#FFFFFF",
            borderRadius: 10,
            marginLeft:24,
            textAlign:'center'
          }}
        >
          <p style={{fontFamily: 'Raleway',
fontWeight: '700',
fontSize: 20,
lineHeight: '20px',
color: '#0E1F51'}}>Our Goal</p>
          <p>It is a long esta
-blished fact that</p>
        </div>
        </div>
        </div>
    </div>
  );
};

export default index;
