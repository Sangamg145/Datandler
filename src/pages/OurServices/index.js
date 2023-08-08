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
    message:`Crafting Digital Experiences That Inspire
    Elevate your online presence with Datandler's expert web design and development services, where aesthetics meet functionality for a captivating user journey.` },
  {
    CardImg: Card2,
    title:'UI/UX Design',
    message:`Shaping User-centric Digital Interactions
    Transforming ideas into seamless interactions, our UX/UI design expertise at Datandler ensures intuitive and visually appealing designs that resonate with your audience.`  },
  {
    CardImg: Card3,
    title:'Website Migration',
    message:`Seamlessly Transitioning Your Digital Home
    Trust Datandler's seamless website migration solutions to transfer your digital assets with precision, ensuring uninterrupted performance and a smooth transition.`  },
  {
    CardImg: Card4,
    title:'App Development',
    message:`Breathing Life Into Your Mobile Visions
    From concept to code, Datandler's app development prowess delivers tailored solutions that harness the power of mobile technology to meet your business objectives.`
  },
  {
    CardImg: Card5,
    title:'HubSpot Integration',
    message:`Streamlining Operations with HubSpot Harmony
    Unlock the potential of streamlined operations through Datandler's HubSpot integration, optimizing your business processes and enhancing customer relationships.` },
  {
    CardImg: Card6,
    title:'Email Marketing',
    message:`Nurturing Connections Through Targeted Communication
    Engage and convert with Datandler's strategic email marketing solutions, where personalized communication fosters lasting connections and drives business growth.`
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
