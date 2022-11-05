import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const VerifyMobileCode = ({ setSelected }) => {
  const [pin, setPin] = useState({
    pin_1: "",
    pin_2: "",
    pin_3: "",
    pin_4: "",
  });
  const handelInput = (e) => {
    const { maxLength, name, value } = e.target;
    console.log(maxLength, name, value);
    setPin({ ...pin, [name]: value });
  };
  return (
    <>
      <div className="driver_form">
        <label
          className="text-center fs-5
         fw-bold"
        >
          Enter 4-digit Pin code to verify your mobile number
        </label>
        <div className="pincode ">
          <input
            type="text"
            className="pin_input"
            name="pin_1"
            value={pin.pin_1}
            maxLength={1}
            onChange={handelInput}
            autoComplete="off"
          />
          <input
            type="text"
            className="pin_input"
            name="pin_2"
            value={pin.pin_2}
            maxLength={1}
            onChange={handelInput}
            autoComplete="off"
          />
          <input
            type="text"
            className="pin_input"
            name="pin_3"
            value={pin.pin_3}
            maxLength={1}
            onChange={handelInput}
            autoComplete="off"
          />
          <input
            type="text"
            className="pin_input"
            name="pin_4"
            value={pin.pin_4}
            maxLength={1}
            onChange={handelInput}
            autoComplete="off"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => setSelected("mobileno")}
            className="driver_btn w-25 px-0 "
          >
            <FontAwesomeIcon className="arrow_icon" icon={faArrowLeft} />
            Back
          </button>
          <button
            onClick={() => setSelected("city")}
            className="driver_btn w-25 px-0 "
          >
            Next
            <FontAwesomeIcon className="arrow_icon" icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default VerifyMobileCode;
