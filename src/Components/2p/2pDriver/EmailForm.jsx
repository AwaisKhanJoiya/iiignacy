import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const EmailForm = ({ setSelected }) => {
  return (
    <div className="driver_form ">
      <label className="fs-5 fw-bold mb-1">Enter your Email:</label>
      <input type="text" placeholder="Email.." className="driver_input" />
      <div className="arrows_btns mt-4">
        <button className="driver_btn">
          <FontAwesomeIcon className="arrow_icon" icon={faArrowLeft} />
          Back
        </button>
        <button onClick={() => setSelected("emailcode")} className="driver_btn">
          Next
          <FontAwesomeIcon className="arrow_icon" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default EmailForm;
