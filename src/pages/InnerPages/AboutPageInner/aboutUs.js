import React from "react";
import Card from "../../../components/generic/card";
import Img from "../../../assest/About.png";
import HumanIcon from "../../../assest/humanIcon.svg";
import "./style.css";
import BottomBAnner from "../../../components/generic/bottomBAnner";
import CommonSubHeader from "../../../components/generic/commonSubHeader/commonsubheader";
import AboutUsPage from "../../About"
const AboutUs = () => {
  return (
    <>
    <CommonSubHeader title={"About"} subTitle={"Home / About"}/>
     <AboutUsPage />
      <div>
        <BottomBAnner />
      </div>
    </>
  );
};

export default AboutUs;
