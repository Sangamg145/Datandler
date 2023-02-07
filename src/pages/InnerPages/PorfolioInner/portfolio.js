import React from "react";
import Commonsubheader from "../../../components/generic/commonSubHeader/commonsubheader";
import FirstPortFolioImg from "../../../assest/porfolio1st.png";
import SecondPorfolioImg from "../../../assest/porfolio2nd.png";
import ThirdPorfolioImg from "../../../assest/porfolio3rd.png";
import FourthPortFolioImg from "../../../assest/porfolio4th.png";
import FifthPortFolioImg from "../../../assest/porfolio5th.png";

import "./style.css";
import BottomBAnner from "../../../components/generic/bottomBAnner";
const Porfolio = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div>
      <Commonsubheader title={"Portfolio"} subTitle={"Home / Portfolio"} />
      <div className="portfolio">
        <div style={{ textAlign: "center" }}>
          <h2 className="portfolioSubHeading">\ Portfolio \</h2>
          <h1 className="portfolioHeading">Our Work</h1>
        </div>
        <div className="tabs-container">
          <div
            className={activeTab === 0 ? "active-blog" : "unactive-tab"}
            onClick={() => setActiveTab(0)}
          >
            ALL
          </div>
          <div
            className={activeTab === 1 ? "active-blog" : "unactive-tab"}
            onClick={() => setActiveTab(1)}
          >
            LIFE
          </div>
          <div
            className={activeTab === 2 ? "active-blog" : "unactive-tab"}
            onClick={() => setActiveTab(2)}
          >
            MOMENT
          </div>
          <div
            className={activeTab === 3 ? "active-blog" : "unactive-tab"}
            onClick={() => setActiveTab(3)}
          >
            NATURE
          </div>
          <div
            className={activeTab === 4 ? "active-blog" : "unactive-tab"}
            onClick={() => setActiveTab(4)}
          >
            STORIES
          </div>
          <div
            className={activeTab === 4 ? "active-blog" : "unactive-tab"}
            onClick={() => setActiveTab(4)}
          >
            TRAVEL
          </div>
        </div>
        {activeTab === 0 ? (
          <div>
            <div
              style={{
                padding: "50px",
                display: "flex",
                gap: "30px",
                justifyContent: "space-around",
              }}
            >
              <img src={FirstPortFolioImg} alt="porfolio images" />
              <img src={SecondPorfolioImg} alt="porfolio images" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <img src={ThirdPorfolioImg} alt="porfolio images" />
              <img src={FourthPortFolioImg} alt="porfolio images" />
              <img src={FifthPortFolioImg} alt="porfolio images" />
            </div>
          </div>
        ) : activeTab === 1 ? (
          <p>SECOND CARD</p>
        ) : (
          ""
        )}
        <div>
          <BottomBAnner/>
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
