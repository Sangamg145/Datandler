import React, { useState } from "react";
import Validation from "./validation";
import "./style.css";
const Index = () => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setError] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(Validation(values));
  };
  console.log("valuesvalues", values);
  return (
    <div className="contact-container">
      <div>
        <h2>\ Get In Touch \</h2>
        <h1>Hey! Let’s Talk</h1>
      </div>
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
            type="text"
            placeholder="Your Message"
            name="message"
            value={values.message}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Send Now</button>
        </div>
        <div className="information-card">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
