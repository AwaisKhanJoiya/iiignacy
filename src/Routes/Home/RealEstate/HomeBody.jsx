import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";

const HomeBody = () => {
  return (
    <div>
      <div className="rs_navbar">
        <div className="r_nav">
          <div className="text_logo">
            <span>LEADING</span>
            <span> EDGE</span>
            <p>real estate</p>
          </div>
          <div className="menu_list">
            <ul>
              <li>Home</li>
              <li>Meet anne</li>
              <li>neighborhood news</li>
              <li>listing</li>
              <li>buy</li>
              <li>sell</li>
              <li>leading edge</li>
              <li>testimonials</li>
            </ul>
          </div>
        </div>
        <div className="l_nav">
          <FontAwesomeIcon icon={faChild} />
        </div>
      </div>
      <div className="home_body">
        <div className="inner_text">
          <h1>ANNE MAHON</h1>
          <p>REAL ESTATE EXCELLENCE</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
