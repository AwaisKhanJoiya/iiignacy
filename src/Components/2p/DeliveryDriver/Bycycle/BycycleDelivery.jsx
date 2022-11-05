import React from "react";

const BycycleDelivery = ({ setSelected }) => {
  return (
    <div className="car_form text-center">
      <h4 className="car_heading">
        By clicking next you agreed to be at least 18 years old, have a
        government-issued ID, and have a social security number.
      </h4>
      <button
        onClick={() => setSelected("pdetail")}
        className="car_login_btn car_next_btn"
      >
        Next
      </button>
    </div>
  );
};

export default BycycleDelivery;
