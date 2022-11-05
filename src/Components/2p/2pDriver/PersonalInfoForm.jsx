import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PersonalInfoForm = ({ setSelected }) => {
  return (
    <div className="driver_form">
      <h3 className="text-center fw-bold my-4">Personal Information</h3>
      <label className="fs-6 fw-bold" htmlFor="fname">
        First name
      </label>
      <div>
        <input type="text" className="driver_input" />
      </div>
      <div>
        <label className="fw-bold fs-6 mt-4" htmlFor="lname">
          Surname
        </label>
      </div>
      <input type="text" className="driver_input" />
      <div>
        <label className="fw-bold fs-6 mt-4" htmlFor="birth">
          Date of birth
        </label>
      </div>
      <input type="text" className="driver_input" />
      <div>
        <label className="fw-bold fs-6 mt-4" htmlFor="cbirth">
          Country of birth
        </label>
      </div>
      <input type="text" className="driver_input" />
      <div>
        <label className="fw-bold fs-6 mt-4" htmlFor="idno">
          International Passport number or National Identification Number
        </label>
      </div>
      <input type="text" className="driver_input" />
      <div className="arrows_btns mt-4">
        <button onClick={() => setSelected("password")} className="driver_btn">
          <FontAwesomeIcon className="arrow_icon" icon={faArrowLeft} />
          Back
        </button>
        <button onClick={() => setSelected("photo")} className="driver_btn">
          Next
          <FontAwesomeIcon className="arrow_icon" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
