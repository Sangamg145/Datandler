import React from "react";
import Card from "../../components/generic/card";
import "./style.css";

const Card1 = require("../../assest/icon3.png");
const Card2 = require("../../assest/icon4.png");
const Card3 = require("../../assest/icon5.png");
const Card4 = require("../../assest/icon6.png");
const Card5 = require("../../assest/icon7.png");
const Card6 = require("../../assest/icon8.png");
const DummyData = [
  {
    CardImg: Card1,
    title:'Web Design / Development',
    message:'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
  },
  {
    CardImg: Card2,
    title:'UI/UX Design',
    message:'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
 
  },
  {
    CardImg: Card3,
    title:'Website Migration',
    message:'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
  },
  {
    CardImg: Card4,
    title:'App Development',
    message:'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
 
  },
  {
    CardImg: Card5,
    title:'HubSpot Integration',
    message:'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
  },
  {
    CardImg: Card6,
    title:'Email Marketing',
    message:'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
 
  },
];

const index = () => {
  return (
    <div>
      <div className="ourservices-container-2">
        <h2>\ Services \</h2>
        <h1>Our Expertice</h1>
      </div>
      <div className="planning-cards" style={{gridTemplateColumns:'repeat(auto-fill, minmax(330px, 1fr))'}}>
        {DummyData.map((item) => (
         <Card title={item.title} img={item.CardImg}
         count={item.id}
         message={item.message} />
        ))}
      </div>
    </div>
  );
};

export default index;
