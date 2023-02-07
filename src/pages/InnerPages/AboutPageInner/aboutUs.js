import React from "react";
import Card from "../../../components/generic/card";
import Img from "../../../assest/About.png";
import HumanIcon from "../../../assest/humanIcon.svg";
import "./style.css";
import BottomBAnner from "../../../components/generic/bottomBAnner";
import Footer from "../../../components/generic/Footer/Footer";
import CommonSubHeader from "../../../components/generic/commonSubHeader/commonsubheader";
const AboutUs = () => {
  return (
    <>
    <CommonSubHeader title={"About"} subTitle={"Home / About"}/>
      <div className="container-aboutInner2nd">
        <img src={Img} />
        <div>
          <h2>\ About us \</h2>
          <h3>One of the Fastest Way to Business Growth</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed
          </p>
          <div className="about-containerInner3rd">
            <div>
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
              <div className="about-containerInner3rd-div">
                <p>
                  Get Instant Professional Advice
                </p>
                <p style={{ fontWeight: 500, fontSize: "16px", margin: "0" }}>
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
      <div>
        <BottomBAnner />
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
