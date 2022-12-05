import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import Flag from "react-world-flags";

const Booking = () => {
  return (
    <div>
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
            <Dropdown.Item href="#/action-1"> Beauty</Dropdown.Item>
            <Dropdown.Item href="#/action-2"> Hotel</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Professional servicess
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Gym</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="booking_imgs d-flex justify-content-end w-100">
          <img src="./beauty.jpg" alt="beauty" />
          <img src="./gym.webp" alt="gym" />
          <img src="./hotel.jpg" alt="hotel" />
        </div>
      </div>
    </div>
  );
};

export default Booking;
