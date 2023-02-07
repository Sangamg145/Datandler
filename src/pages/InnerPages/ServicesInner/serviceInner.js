import React from 'react'
import CommonSubHeader from "../../../components/generic/commonSubHeader/commonsubheader";
import OurVision from "../../../pages/OurVision/index";
import OurServices from "../../../pages/OurServices/index"
import BottomBAnner from '../../../components/generic/bottomBAnner';
const serviceInner = () => {
  return (
    <>
      <CommonSubHeader title={"Services"} subTitle={"Home / Services"}/>
      <OurVision/>
      <OurServices/>
      <BottomBAnner/>
    </>
  )
}

export default serviceInner