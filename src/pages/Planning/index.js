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
    message:`Unveiling Insights for Innovation
Dive into the depths of innovation as we explore, analyze, and uncover the crucial insights that fuel our software solutions at Datandler.`
  },
  {
    id: '02',
    CardImg: Card2,
    title:'Design',
    message:`Crafting Tomorrow's User Experience
Transforming ideas into intuitive interfaces, our design experts at Datandler weave creativity and functionality into every pixel and enhancing user experiences.`
  },
  {
    id:'03',
    CardImg: Card3,
    title:'Develope',
    message:`Code that Shapes Possibilities
At Datandler, we bring concepts to life through meticulous coding, building robust and scalable software solutions that cater to diverse business needs.` },
  {
    id: '04',
    CardImg: Card4,
    title:'Test',
    message:`Precision in every Pixel, Line, and Byte
Our rigorous testing process at Datandler ensures that every aspect of our software solutions is finely tuned, providing reliability and quality that exceeds expectations.`
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
