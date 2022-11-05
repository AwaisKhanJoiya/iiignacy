import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../CloseIcon";
const Pbutton = () => {
  return (
    <div className="py-4 container">
      <CloseIcon />
      <div
        className="d-flex align-items-center justify-content-between flex-wrap mt-5"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <Link to="/pbutton/fleetowner">
          <div className="c-button  ">2P Driver & Fleet Owner</div>
        </Link>
        <Link to="/delivery">
          <div className="c-button signin">Delivery Driver</div>
        </Link>
        <Link to="">
          <div className="c-button ">Car Rental Companies</div>
        </Link>
        <Link to="">
          <div className="c-button  ">Transit Companies</div>
        </Link>
        <Link to="">
          <div className="c-button ">Logistics Companies</div>
        </Link>
      </div>
    </div>
  );
};

export default Pbutton;
