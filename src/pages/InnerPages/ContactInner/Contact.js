import React from 'react'
import Commonsubheader from "../../../components/generic/commonSubHeader/commonsubheader";
import ContactPage from "../../../components/ContactPage/index"
import BottomBAnner from '../../../components/generic/bottomBAnner';
const Contact = () => {
  return (
    <div>
      <Commonsubheader title={"Contact"} subTitle={"Home / Contact"}/>
      <ContactPage background={"rgba(255, 62, 84, 0.05)"} textColor={"#0E1F51"} margin={0}/>
      <BottomBAnner/>
    </div>
  )
}

export default Contact