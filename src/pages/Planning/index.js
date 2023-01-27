import React from "react";
import Card from "../../components/generic/card";
import "./style.css";
const Card1 = require("../../assest/icon10.png");
const Card2 = require("../../assest/icon1.png");
const Card3 = require("../../assest/icon9.png");
const Card4 = require("../../assest/icon2.png");
const DummyData = [
  {
    id:'01',
    CardImg: Card1,
    title:'Research',
    message:'It is a long established fact that a reader will be distra by the readable content of a page.'
  },
  {
    id: '02',
    CardImg: Card2,
    title:'Design',
    message:'It is a long established fact that a reader will be distra by the readable content of a page.'
 
  },
  {
    id:'03',
    CardImg: Card3,
    title:'Develope',
    message:'It is a long established fact that a reader will be distra by the readable content of a page.'
  },
  {
    id: '04',
    CardImg: Card4,
    title:'Test',
    message:'It is a long established fact that a reader will be distra by the readable content of a page.'
 
  },
];

const index = () => {
  return (
    <div className="planning-container">
      <div className="planning-container-2">
        <h2>\ Planning \</h2>
        <h1>Our Process</h1>
      </div>
      <div className="planning-cards">
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
