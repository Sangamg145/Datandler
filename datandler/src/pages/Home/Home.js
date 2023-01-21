import React from 'react'
import { Header } from '../../components/Header/Header'
import Index from './Index'
import About from "../About/index";
import Planning from "../Planning/index";
import OurVision from "../OurVision/index";
import OurServices from "../OurServices/index"
import ContactUs from "../../components/ContactPage/index"
const Home = () => {
  return (
    <div style={{padding:"30px"}}>
      <Header/>
      <Index/>
      <About/>
      <Planning/>
      <OurVision/>
      <OurServices/>
      <ContactUs/>
    </div>
  )
}

export default Home