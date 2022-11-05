import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../../CloseIcon";

const FleetBtns = () => {
  return (
    <div className="py-4 container ">
      <CloseIcon />
      <div
        className="d-flex align-items-center justify-content-evenly flex-wrap mt-5"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <Link to="/driver">
          <div className="c-button  ">2P Drivers</div>
        </Link>
        <Link to="/registration">
          <div className="c-button signin">Fleet Owner</div>
        </Link>
      </div>
    </div>
  );
};

export default FleetBtns;
