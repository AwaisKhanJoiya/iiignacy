import React from "react";
import home from "../../../assets/dining.jpg";

const HomeBody = () => {
  return (
    <div className="img_body" style={{ backgroundImage: `url(${home})` }}>
      <div className="inner_text">
        <h1>ANNE MAHON</h1>
        <p>REAL ESTATE EXCELLENCE</p>
      </div>
    </div>
  );
};

export default HomeBody;
