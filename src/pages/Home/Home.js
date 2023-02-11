import React from 'react'
import Index from './Index'
import About from "../About/index";
import Planning from "../Planning/index";
import OurVision from "../OurVision/index";
import OurServices from "../OurServices/index"
import ContactUs from "../../components/ContactPage/index"
import OurBlogs from "../OurBlogs/index"
import BottomBAnner from '../../components/generic/bottomBAnner';
const Home = () => {
  return (
    <div>
      <Index/>
      <About/>
      <Planning/>
      <OurVision/>
      <OurServices/>
      <ContactUs/>
      <OurBlogs/>
      <BottomBAnner/>
    </div>
  )
}

export default Home