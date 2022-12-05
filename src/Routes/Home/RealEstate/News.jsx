import React from "react";
import news from "../../../assets/news.jpeg";

const News = () => {
  return (
    <>
      <div className="img_body" style={{ backgroundImage: `url(${news})` }}>
        <h1>NEIGHBORHOOD NEWS</h1>
      </div>{" "}
      <div className="news_detail_container">
        <div className="news_detail_box">
          <p>
            Neighborhood news is a monthly email subscription keeping you
            informed on the real estate market in your area. It is fully
            interactive with search features and the ability to change the
            subscription at any time.
          </p>
          <p>The best part? It is completely FREE.</p>
          <button className="meet_btn listings_btn m-0">SUBSCRIBE NOW</button>
        </div>
      </div>
    </>
  );
};

export default News;
