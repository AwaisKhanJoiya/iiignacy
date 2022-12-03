import React, { useState } from "react";
import third from "../../../assets/slider/third.jpg";
import dress from "../../../assets/items/dress.jpg";
import gaming from "../../../assets/items/gaming.jpg";
import itemData from "./Api";

const SeasonalPage = () => {
  const [data, getData] = useState(itemData);
  return (
    <div className="seasonal_container">
      <div className="third_img">
        <img src={third} />
      </div>
      <div className="cat-container ">
        <div className="d-flex flex-wrap cat-container-inner px-3 ">
          {data.map((curElem) => {
            const { id, img, title } = curElem;
            return (
              <div className="cat-card" style={{ height: "24rem" }} key={id}>
                <div className="cat-card-inner d-flex flex-column p-3">
                  <h2 className="cat-title">{title}</h2>
                  <img
                    src={img}
                    style={{ height: "80%", objectFit: "contain" }}
                    alt="gaming"
                    className="cat-img"
                  />
                  <span className="cat-btn">Shop now</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeasonalPage;
