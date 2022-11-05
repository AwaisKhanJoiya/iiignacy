import React from "react";

const ScooterDelivery = ({ setSelected }) => {
  return (
    <div className="car_form text-center">
      <h4 className="car_heading fs-4">
        By clicking next you agreed to be at least 19 years old, have a
        motorized scooter under 50cc, have a valid driver’s licence in your
        name, and have a social security number.
      </h4>
      <button
        onClick={() => setSelected("pinfo")}
        className="car_login_btn car_next_btn"
      >
        Next
      </button>
    </div>
  );
};

export default ScooterDelivery;
