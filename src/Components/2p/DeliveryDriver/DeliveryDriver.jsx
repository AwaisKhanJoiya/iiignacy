import React from "react";
import CloseIcon from "../../CloseIcon";
import { Link } from "react-router-dom";

const DeliveryDriver = () => {
  return (
    <div className="py-4 container">
      <CloseIcon />
      <div
        className="d-flex align-items-center justify-content-between flex-wrap mt-2"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <Link to="/car">
          <div className="c-button  ">Delivery by car</div>
        </Link>
        <Link to="/scooter">
          <div className="c-button signin">Delivery by Scooter</div>
        </Link>
        <Link to="/bycycle">
          <div className="c-button ">Delivery by Bicycle/foot</div>
        </Link>
      </div>
    </div>
  );
};

export default DeliveryDriver;
