import React from "react";
import "./style.css";
import MainImg from "../../assest/ImgMain.png";
const Index = () => {
  return (
    <div className="home-container">
      <div className="home-background-icon">
        <div className="home-child-conatiner">
          <div className="background-img">
         <div>
         <h2>\ We Are Here \</h2>
          <h1 className="heading2">
            Better Insights For
            <br />
            Business Growth
          </h1>
          <button className="basic-button">View More</button>
         </div>
         </div>

          <img src={MainImg} />
        </div>
      </div>
    </div>
  );
};

export default Index;
