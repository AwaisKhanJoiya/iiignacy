import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PasswordForm = ({ setSelected }) => {
  return (
    <div className="driver_form">
      <h3 className="text-center fw-bold m-2">Create your Password</h3>
      <p className="text-center mb-4">
        The password should be at least 8 characters with at least 1 capital
        later, 1 small later, and 1 number, the password shouldn’t contain
        special characters
      </p>
      <label className="label text-dark fw-bold" htmlFor="password">
        Password:
      </label>
      <div>
        <input type="text" className="driver_input" />
      </div>

      <div>
        <label
          className="label text-dark fw-bold mt-4"
          htmlFor="confirm password"
        >
          Confirm Password:
        </label>
      </div>
      <input type="text" className="driver_input " />
      <div className="arrows_btns mt-4">
        <button onClick={() => setSelected("city")} className="driver_btn">
          <FontAwesomeIcon className="arrow_icon" icon={faArrowLeft} />
          Back
        </button>
        <button onClick={() => setSelected("pinfo")} className="driver_btn">
          Next
          <FontAwesomeIcon className="arrow_icon" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default PasswordForm;
