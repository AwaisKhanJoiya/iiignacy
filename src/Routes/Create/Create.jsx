import React from "react";
import CloseIcon from "../../Components/CloseIcon";
import { Link } from "react-router-dom";
const Create = () => {
  return (
    <div className="py-4 container">
      <CloseIcon />
      <div
        className="d-flex align-items-center justify-content-between flex-wrap mt-5"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <Link to={"seller"}>
          <div className="c-button">Start Selling</div>
        </Link>
        <Link to={"driving"}>
          <div className="c-button">Make Money Driving</div>
        </Link>
        <Link to={"services"}>
          <div className="c-button">Offer & Sell your Services</div>
        </Link>
      </div>
    </div>
  );
};

export default Create;
