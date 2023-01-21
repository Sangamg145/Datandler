import React from 'react'
import "./style.css";

const Card1 = require("../../assest/Card1.png");
const Card2 = require("../../assest/Card2.png");
const Card3 = require("../../assest/Card3.png");
const Card4 = require("../../assest/Card4.png");

const DummyData = [
  {
    id: 1,
    CardImg: Card1
  },
  {
    id: 2,
    CardImg: Card2
  },
  {
    id: 3,
    CardImg: Card3
  },
  {
    id: 4,
    CardImg: Card4
  }
]

const index = () => {
  return (
    <div className='planning-container'>
      <div className='planning-container-2'>
        <h2>\ Planning \</h2>
        <h1>Our Process</h1>
      </div>
      <div className='planning-cards'>
      {DummyData.map((item)=> 
      <img src={item.CardImg}/>)}
      </div>
    </div>
  )
}

export default index