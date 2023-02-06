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
            // style={{
            //   fontFamily: "Raleway",
            //   fontWeight: "500",
            //   fontSize: 16,
            //   lineHeight: "26px",
            // }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed
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
                  9988987890
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
