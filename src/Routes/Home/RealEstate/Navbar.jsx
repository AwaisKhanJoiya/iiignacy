import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setSelected }) => {
  return (
    <div className="rs_navbar">
      <div className="r_nav">
        <div className="text_logo">
          <span>LEADING</span>
          <span> EDGE</span>
          <p>real estate</p>
        </div>
        <div className="menu_list">
          <ul>
            <li onClick={() => setSelected("homebody")}>Home</li>
            <li onClick={() => setSelected("meet")}>Meet anne</li>
            <li onClick={() => setSelected("news")}>neighborhood news</li>
            <li onClick={() => setSelected("listings")}>listing</li>
            <li onClick={() => setSelected("buy")}>buy</li>
            <li onClick={() => setSelected("sell")}>sell</li>
            <li onClick={() => setSelected("leading")}>leading edge</li>
            <li onClick={() => setSelected("testimonial")}>testimonials</li>
          </ul>
        </div>
      </div>
      <div className="l_nav">
        <FontAwesomeIcon icon={faChild} />
      </div>
    </div>
  );
};

export default Navbar;
