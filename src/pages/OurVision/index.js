import React from "react";
import Img from "../../assest/ourVision.png";
import "./style.css";
import Icon1st from "../../assest/ourVision1.svg";
import Icon2nd from "../../assest/ourVision2.svg";
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
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed, Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed
          </p>
        </div>
        <div className="ourvisionBox">
          <div
            className="about-container-2"
            style={{
              maxWidth: 555,
              height: 100,
              background: "#FFFFFF",
              borderRadius: 10,
              display: "flex",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                gap: "10px",
              }}
            >
              <img
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(255, 62, 84, 0.1)",
                  borderRadius: "10px",
                }}
                src={Icon2nd}
              />
              <div>
                <p
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                    fontSize: 20,
                    lineHeight: "20px",
                    color: "#FF3E54",
                    margin: 0,
                  }}
                >
                  Our Vision
                </p>
                <p style={{ fontSize: "16px", fontWeight: 500, margin: 0 }}>
                  It is a long esta -blished fact that
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              maxWidth: 555,
              height: 100,
              background: "#FFFFFF",
              borderRadius: 10,
              gap: 24,
              textAlign: "center",
              display: "flex",
              alignContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                gap: "10px",
              }}
            >
              <img
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(255, 62, 84, 0.1)",
                  borderRadius: "10px",
                }}
                src={Icon1st}
              />
              <div>
                <p
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                    fontSize: 20,
                    lineHeight: "20px",
                    color: "#FF3E54",
                    margin: 0,
                  }}
                >
                  Our Goal
                </p>
                <p style={{ fontSize: "16px", margin: 0, fontWeight: 500 }}>
                  It is a long esta -blished fact that
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
