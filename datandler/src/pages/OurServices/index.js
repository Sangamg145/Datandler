import React from "react";
import "./style.css";

const Card1 = require("../../assest/Services1.png");
const Card2 = require("../../assest/Services2.png");
const Card3 = require("../../assest/Services3.png");

const DummyData = [
  {
    id: 1,
    CardImg: Card1,
  },
  {
    id: 2,
    CardImg: Card2,
  },
  {
    id: 3,
    CardImg: Card3,
  },
  // {
  //   id: 4,
  //   CardImg: Card4,
  // },
];

const index = () => {
  return (
    <div>
      <div className="ourservices-container-2">
        <h2>\ Services \</h2>
        <h1>Our Expertice</h1>
      </div>
      <div style={{display:"flex", flexWrap:"wrap", gap:"20px", justifyContent:"center"}}>
        {DummyData.map((item) => (
          <img src={item.CardImg} />
        ))}
      </div>
    </div>
  );
};

export default index;
