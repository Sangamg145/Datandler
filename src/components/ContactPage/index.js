import React, { useState } from "react";
import Validation from "./validation";
import HumanIcon from "../../assest/humanIcon.svg";
import PhoneIcon from "../../assest/phoneIcon.svg";
import MailIcon from "../../assest/mailIcon.svg";
import LocationIcon from "../../assest/locationIcon.svg";
import TwitterIcon from "../../assest/TwitterIcon.svg";
import InstaIcon from "../../assest/InstagramIcon.svg";
import FBIcon from "../../assest/FBIcon.svg";
import LinkIcon from "../../assest/LinkdlnIcon.svg";
// "LinkdlnIcon.svg"

import "./style.css";
const Index = ({background, textColor, margin,refEl}) => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    setError(Validation(values));
    // if(!errors){
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: values.email, message: values.message }),
    };
    fetch(
      "https://blogs-api-2mym.onrender.com/app/api/contact-us",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log("first", data));
    setLoading(false);
    // }
  };

  return (
    <div ref={refEl} className="contact-container" style={{backgroundColor:background, marginTop:margin}}>
      <div>
        <h2>\ Get In Touch \</h2>
        <h1 style={{color:textColor}}>Hey! Let’s Talk</h1>
      </div>
      <div className="contact-page-row">
        <div className="contact-form">
          <div>
            <input
              type="text"
              placeholder="Name"
              name="userName"
              value={values.userName}
              onChange={handleChange}
            />
            {errors.userName && (
              <p
                style={{
                  fontSize: "10px",
                  color: "red",
                  textAlign: "start",
                  margin: "0",
                }}
              >
                {errors.userName}
              </p>
            )}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p
                style={{
                  fontSize: "10px",
                  color: "red",
                  textAlign: "start",
                  margin: "0",
                }}
              >
                {errors.email}
              </p>
            )}
            <input
              type="number"
              placeholder="Phone"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p
                style={{
                  fontSize: "10px",
                  color: "red",
                  textAlign: "start",
                  margin: "0",
                }}
              >
                {errors.phoneNumber}
              </p>
            )}
            <input
              type="textArea"
              placeholder="Your Message"
              name="message"
              value={values.message}
              onChange={handleChange}
            />
            <button disabled={loading ? true : false} onClick={handleSubmit}>
              {loading ? "Loading..." : "Send Now"}
            </button>
          </div>
          <div className="information-card">
            <div></div>
          </div>
        </div>

        <div className="contact-form">
          <div className="about-containerInner3rd">
            <div>
              <div>
                <img
                  style={{
                    padding: "10px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "10px",
                  }}
                  src={PhoneIcon}
                  alt="helpLineIcon"
                />
              </div>
              <div className="about-containerInner3rd-div">
                <p style={{ color: "#FF3E54" }}>Call Anytime</p>
                <p style={{ fontWeight: 500, fontSize: "16px", margin: "0" }}>
                  + 91 2344345653, + 91 4445445565 
                </p>
              </div>
            </div>
          </div>
          <div className="about-containerInner3rd">
            <div>
              <div>
                <img
                  style={{
                    padding: "10px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "10px",
                  }}
                  src={MailIcon}
                  alt="helpLineIcon"
                />
              </div>
              <div className="about-containerInner3rd-div">
                <p style={{ color: "#FF3E54" }}>Send Email</p>
                <p style={{ fontWeight: 500, fontSize: "16px", margin: "0" }}>
                  connect@itfirms.com hello@itfirms.com
                </p>
              </div>
            </div>
          </div>
          <div className="about-containerInner3rd">
            <div>
              <div>
                <img
                  style={{
                    padding: "10px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "10px",
                  }}
                  src={LocationIcon}
                  alt="helpLineIcon"
                />
              </div>
              <div className="about-containerInner3rd-div">
                <p style={{ color: "#FF3E54" }}>Visit Us</p>
                <p style={{ fontWeight: 500, fontSize: "16px", margin: "0" }}>
                  20 Island Park Road, New Jearsy, New York, USA
                </p>
              </div>
            </div>
          </div>

          <div className="information-card">
            <div
              style={{ color: "#0E1F51", fontSize: "24px", fontWeight: 700 }}
            >
              Follow us
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 30,
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <img
                style={{
                  padding: "10px",
                  backgroundColor: "#FF3E54",
                  borderRadius: "10px",
                  width: 30,
                  height: 30,
                }}
                src={LinkIcon}
                alt="helpLineIcon"
              />
              <img
                style={{
                  padding: "10px",
                  backgroundColor: "#FF3E54",
                  borderRadius: "10px",
                  width: 30,
                  height: 30,
                }}
                src={InstaIcon}
                alt="helpLineIcon"
              />{" "}
              <img
                style={{
                  padding: "10px",
                  backgroundColor: "#FF3E54",
                  borderRadius: "10px",
                  width: 30,
                  height: 30,
                }}
                src={FBIcon}
                alt="helpLineIcon"
              />
              <a href="https://twitter.com/Datandler_SW" target="blank">
                <img
                  style={{
                    padding: "10px",
                    backgroundColor: "#FF3E54",
                    borderRadius: "10px",
                    width: 30,
                    height: 30,
                  }}
                  src={TwitterIcon}
                  alt="helpLineIcon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
