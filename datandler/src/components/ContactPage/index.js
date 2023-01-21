import React from "react";
import "./style.css";
const index = () => {
  return (
    <div className="contact-container">
      <div>
        <h2>\ Get In Touch \</h2>
        <h1>Hey! Let’s Talk</h1>
      </div>
      <div className="contact-form">
        <div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Emial" />
          <input type="text" placeholder="Phone" />
          <textarea type="text" placeholder="Your Message" />
          <button>Send Now</button>
        </div>
        <div className="information-card">
          <div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default index;
