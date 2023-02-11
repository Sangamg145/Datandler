import React, { useRef, useState,useEffect } from 'react'
import Index from './Index'
import About from "../About/index";
import Planning from "../Planning/index";
import OurVision from "../OurVision/index";
import OurServices from "../OurServices/index"
import ContactUs from "../../components/ContactPage/index"
import OurBlogs from "../OurBlogs/index"
import BottomBAnner from '../../components/generic/bottomBAnner';
const Home = ({goto,setGoto}) => {
  const scollToRef = useRef();

  useEffect(() => {
    if (goto) {
      setGoto(scollToRef.current.scrollIntoView({behavior:'smooth'}))
    }
  }, [goto])
  
  return (
    <div>
      <Index/>
      <About/>
      <Planning/>
      <OurVision/>
      <OurServices/>
      <ContactUs refEl={scollToRef} />
      <OurBlogs/>
      <BottomBAnner setGoto={setGoto} />
    </div>
  )
}

export default Home