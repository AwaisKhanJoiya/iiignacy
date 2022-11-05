import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CityForm = ({ setSelected }) => {
  return (
    <div className="driver_form ">
      <h5 className="fw-bold mb-3">Enter City name where you want to drive</h5>
      <input type="text" className="driver_input" />
      <div className="arrows_btns mt-4">
        <button
          onClick={() => setSelected("mobilecode")}
          className="driver_btn"
        >
          <FontAwesomeIcon className="arrow_icon" icon={faArrowLeft} />
          Back
        </button>
        <button onClick={() => setSelected("password")} className="driver_btn">
          Next
          <FontAwesomeIcon className="arrow_icon" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default CityForm;
