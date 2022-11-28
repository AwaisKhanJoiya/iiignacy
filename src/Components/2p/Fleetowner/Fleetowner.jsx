import React from "react";
import p2logo from "../../../assets/2p.png";
import ladycar from "../../../assets/ladycar.png";
import { Link } from "react-router-dom";
import CloseIcon from "../../CloseIcon";

const Fleetowner = () => {
  return (
    <div className="fowner_container p-4">
      <div>
        <CloseIcon />
      </div>
      <div className=" d-flex">
        <div className=" my-2" style={{ width: "8vw", height: "8vh" }}>
          <img
            src={p2logo}
            alt="2plogo"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="lady_img" style={{ height: "85vh", width: "100vw" }}>
          <img
            src={ladycar}
            alt="ladyimg"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
      <h2
        className="f_owner_heading text-center  "
        style={{ fontSize: "2.6em", fontWeight: "600" }}
      >
        Welcome to the 2P for drivers and Fleet owners
      </h2>
      <div className="f_owner_buttons d-flex justify-content-center my-4">
        <Link to="/fleetowner/fleetbtns">
          <button
            className=" bg-black text-white py-2 px-5 mx-4"
            style={{
              borderRadius: "10px",
              fontSize: "1.2rem",
              fontWeight: "600",
              outline: "none",
              border: "none",
            }}
          >
            Continue
          </button>
        </Link>
        <Link to="/">
          <button
            className=" bg-black text-white py-2 px-4 mx-4"
            style={{
              borderRadius: "10px",
              fontSize: "1.2rem",
              fontWeight: "600",
              outline: "none",
              border: "none",
            }}
          >
            Or ride with 2P
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Fleetowner;
