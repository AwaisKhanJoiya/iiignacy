import React from "react";
import BackButton from "../../../Components/BackButton";
import CloseIcon from "../../../Components/CloseIcon";
import { Link } from "react-router-dom";

const Driving = () => {
  return (
    <div className="py-4 container">
      <BackButton />
      <CloseIcon />
      <div
        className="d-flex align-items-center justify-content-between flex-wrap mt-5"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <Link to="deliveries">
          <div className="c-button">Deliveries</div>
        </Link>
        <Link to="transit">
          <div className="c-button">Transit</div>
        </Link>
        <Link to={"bus-tickets"}>
          <div className="c-button">Bus tickets Vendors</div>
        </Link>
        <Link to={"train-tickets"}>
          <div className="c-button">Train Ticket Vendors</div>
        </Link>
        <Link to={"logistics"}>
          <div className="c-button">Logistics</div>
        </Link>
        <Link to={"car-rental"}>
          <div className="c-button">Car Rental</div>
        </Link>
      </div>
    </div>
  );
};

export default Driving;
