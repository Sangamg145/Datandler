import React from 'react'
import "./style.css";
const commonsubheader = ({title, subTitle}) => {
  return (

<>
<div className="conatiner-Inner">
        <div>
          <h1>{title}</h1>
          <h3>{subTitle}</h3>
        </div>
      </div>
</>    )
}

export default commonsubheader