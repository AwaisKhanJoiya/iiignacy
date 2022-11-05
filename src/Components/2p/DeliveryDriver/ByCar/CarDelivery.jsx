import React from "react";

const CarDelivery = ({ setSelected }) => {
  return (
    <div className="car_form text-center">
      <h4 className="car_heading">
        By clicking next you agreed to be at least 18 years old, have a 2-doors
        or 4-doors car, have a valid driver’s licence in your name, and have a
        social security number.
      </h4>
      <button
        onClick={() => setSelected("persinfo")}
        className="car_login_btn car_next_btn"
      >
        Next
      </button>
    </div>
  );
};

export default CarDelivery;
