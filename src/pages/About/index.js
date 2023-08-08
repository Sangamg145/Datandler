import React from "react";
import Img from "../../assest/About.png";
import HumanIcon from "../../assest/humanIcon.svg";
import "./style.css";
const index = () => {
  return (
    <div className="about-container">
      <div className="about-container-img">
        <img src={Img} style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="about-container-div">
        <div className="about-container-2">
          <h2>\ About us \</h2>
          <h1>
            One of the Fastest Way to <br />
            Business Growth
          </h1>
          <p
            style={{
              fontFamily: "Raleway",
              fontWeight: "500",
              fontSize: 16,
              lineHeight: "32px",
            }}
          >
            At Datandler, we are more than just a software solution company – we are the architects of innovation.
             With a passionate team driven by creativity and technology, we thrive on transforming ideas into tangible realities.
              Our journey is defined by a commitment to excellence, where we constantly push boundaries to deliver solutions that empower businesses and individuals alike.
               By blending expertise with a customer-centric approach, we create meaningful and lasting partnerships that drive success. Discover the essence of Datandler – a hub of innovation, collaboration, and boundless possibilities.
             Welcome to our world, where the future is coded, designed, and realized.
          </p>
        </div>
        <div
          className="about-container-3"
          // style={{
          //   maxWidth: 555,
          //   height: 100,
          //   background: "#FFFFFF",
          //   borderRadius: 10,

          //   textAlign: "center",
          // }}
        >
          <div className="about-Bottom-helpCard">
            <div>
              <img
                style={{
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                }}
                src={HumanIcon}
                alt="helpLineIcon"
              />
            </div>
            <div>
              <p>
                Get Instant Professional Advice
              </p>
              <p style={{ fontWeight: 500, fontSize: "16px" }}>
                Ready to Help :{" "}
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#FF3E54",
                  }}
                >
                  9756068029
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
