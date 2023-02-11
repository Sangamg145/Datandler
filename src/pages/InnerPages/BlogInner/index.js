import React from "react";
import Commonsubheader from "../../../components/generic/commonSubHeader/commonsubheader";
import Blog1stimg from "../../../assest/Blog1stImg.png";
import profileimg from "../../../assest/profileImg.png";
import OurBlog from "../../OurBlogs/index";
import "./style.css";
import BottomBAnner from "../../../components/generic/bottomBAnner";
const blogData = [
  {
    id: 1,
    Img: Blog1stimg,
    heading: "The most Popular Business Of the Year",
    ProfileImg: "",
    ProfileName: "Ranold Jeff.",
    blogDate: "May 4th, 2022",
  },
];
const data = [
  {
    id: 1,
    Img: Blog1stimg,
    heading: "The most Popular Business Of the Year",
    ProfileImg: "",
    ProfileName: "Ranold Jeff.",
    blogDate: "May 4th, 2022",
  },
  {
    id: 1,
    Img: Blog1stimg,
    heading: "The most Popular Business Of the Year",
    ProfileImg: "",
    ProfileName: "Ranold Jeff.",
    blogDate: "May 4th, 2022",
  },
];

const index = () => {
  return (
    <div>
      <Commonsubheader title={"Blogs"} subTitle={"Home / Blogs"} />
      <div style={{paddingBottom:"50px"}}>
        <div style={{ textAlign: "center" }}>
          <h2 className="portfolioSubHeading">\ Our Blog \</h2>
          <h1 className="portfolioHeading">Our Post</h1>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {blogData.map((i) => (
              <div className="blog_inner_div">
                <img src={i.Img} />
                <div>
                  <span></span>
                  <h2 className="blogInnerHeading">{i.heading}</h2>
                  <div className="blogSubDiv">
                    <img src={profileimg} alt="" />
                    <p>{i.ProfileName}</p>
                    <span>{i.blogDate}</span>
                  </div>
                </div>
              </div>
            ))}
            <div>
              {data.map((i) => (
                <div
                  style={{
                    display: "flex",
                    padding: "20px",
                    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                  }}
                >
                  <img
                    src={i.Img}
                    style={{ width: "185px", height: "185px" }}
                  />
                  <div className="blogSecondDiv">
                    <span>Apr 27th, 2022</span>
                    <h2>{i.heading}</h2>
                    <div className="blogSubDiv">
                      <img src={profileimg} alt="" />
                      <p>{i.ProfileName}</p>
                      <span>{i.blogDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <OurBlog/>
  <BottomBAnner/>
    </div>
  );
};

export default index;
