import React from "react";
import "./freelancer.css";
import BackButton from "../../BackButton";
import CloseIcon from "../../CloseIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faG,
  faAppleWhole,
  faF,
} from "@fortawesome/free-solid-svg-icons";

const Freelancer = () => {
  return (
    <div className="p-4 s-form-container">
      <BackButton />
      <CloseIcon />
      <form className="d-form s-form mt-5 m-auto p-5">
        <h3 className="d-form-heading text-center">Join Iiignacy</h3>
        <div className="my-4">
          <input
            type="email"
            placeholder="Email"
            className="s-form-input my-2"
          />
          <input
            type="text"
            placeholder="Username"
            className="s-form-input my-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="s-form-input my-2"
          />
        </div>
        <button className="w-100 f-btn border-none outline-none text-white text-large p-2">
          Click to Join
        </button>
        <hr className="my-4" />

        <div className="f_Form_input ">
          <h5
            className="text-center text-dark  my-2"
            style={{ fontWeight: "bold" }}
          >
            Or login with
          </h5>

          <button className=" google_btn w-100 f-btn border-none outline-none text-white text-large p-2 my-2">
            <FontAwesomeIcon className="icons" icon={faG} />
            Google
          </button>
          <button className=" google_btn w-100 f-btn border-none outline-none text-white text-large p-2 my-2 facebook_btn">
            <FontAwesomeIcon className="icons" icon={faF} />
            Facebook
          </button>

          <button className=" google_btn w-100 f-btn border-none outline-none text-white text-large p-2 my-2 apple_btn ">
            <FontAwesomeIcon className="icons" icon={faAppleWhole} />
            Apple
          </button>
        </div>
      </form>
    </div>
  );
};

export default Freelancer;
