import React from "react";
import "./style.css";
import Blog1stimg from "../../assest/Blog1stImg.png";
import Blog2ndimg from "../../assest/Blog2ndImg.png";
import Blog3rdimg from "../../assest/Blog3rdImg.png";
import profileimg from "../../assest/profileImg.png";

const index = () => {
  const BlogData = [
    {
      id: 1,
      Img: Blog1stimg,
      heading: "The most Popular Business Of the Year",
      ProfileImg: "",
      ProfileName: "Ranold Jeff.",
      blogDate: "May 4th, 2022",
    },
    {
      id: 2,
      Img: Blog2ndimg,
      heading: "The most Popular Business Of the Year",
      ProfileImg: "",
      ProfileName: "Patricia",
      blogDate: "May 4th, 2022",
    },
    {
      id: 3,
      Img: Blog3rdimg,
      heading: "The most Popular Business Of the Year",
      ProfileImg: "",
      ProfileName: "Patricia",
      blogDate: "May 4th, 2022",
    }
  ];

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <div className="ourservices-container-2">
        <h2 style={{ margin: 0, padding: "20px" }}>\ Our Blog \</h2>
        <h1 style={{ margin: 0 }}>Latest Post</h1>
        <div className="blogCard">
          {BlogData.map((i) => (
            <div>
              <img src={i.Img} />
              <h2>{i.heading}</h2>
              <div className="blogSubDiv">
                <img src={profileimg} alt="" />
                <p>{i.ProfileName}</p>
                <span>{i.blogDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
