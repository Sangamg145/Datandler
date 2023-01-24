import React from "react";
import Card from "../../components/generic/card";
import "./style.css";
const Card3 = require("../../assest/research.png");

const DummyData = [
  {
    id:'01',
    CardImg: Card3,
    title:'Research',
    message:'It is a long established fact that a reader will be distra by the readable content of a page.'
  },
  {
    id: '02',
    CardImg: Card3,
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
    CardImg: Card3,
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
