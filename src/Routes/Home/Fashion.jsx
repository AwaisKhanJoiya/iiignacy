import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Fashion = () => {
  return (
    <div className="e_cat_container">
      <Dropdown className="category">
        <Dropdown.Toggle
          className="dropdown_btn"
          variant="success"
          id="dropdown-basic"
        >
          Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1"> Women</Dropdown.Item>
          <Dropdown.Item href="#/action-2"> Curve</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Men</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Kids</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="fashion_img">
        <img src="./fashion.jpg" alt="wines" />
        <img src="./jewellery.jpg" alt="" />
        <img src="./fashion2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Fashion;
