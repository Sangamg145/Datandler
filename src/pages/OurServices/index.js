import React from "react";
import Card from "../../components/generic/card";
import "./style.css";

const Card1 = require("../../assest/Services1.png");
const Card2 = require("../../assest/Services2.png");
const Card3 = require("../../assest/Services3.png");

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
    CardImg: Card1,
    title:'Website Migration',
    message:'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
  },
  {
    CardImg: Card2,
    title:'App Development',
    message:'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
 
  },
  {
    CardImg: Card1,
    title:'HubSpot Integration',
    message:'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
  },
  {
    CardImg: Card2,
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
