import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const EighteenCat = () => {
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
          <Dropdown.Item href="#/action-1"> Wines & Spirits</Dropdown.Item>
          <Dropdown.Item href="#/action-2"> Tobacco</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Alcoholic Products</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Adult Books</Dropdown.Item>
          <Dropdown.Item href="#/action-3"> Erotic Movies</Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            Other restricted items
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="wines_img">
        <img src="./wines.jpg" alt="wines" />
        {/* <img src="./tobacco.jpg" alt="wines" />
        <img src="./adult.jpg" alt="wines" /> */}
      </div>
    </div>
  );
};

export default EighteenCat;
