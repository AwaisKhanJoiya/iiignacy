import React from "react";
import { useState } from "react";

const OtCode = ({ setSelected }) => {
  const [otCode, setOtCode] = useState({
    otcode_1: "",
    otcode_2: "",
    otcode_3: "",
    otcode_4: "",
  });
  const handelInput = (e) => {
    const { maxLength, name, value } = e.target;
    console.log(maxLength, name, value);
    setOtCode({ ...otCode, [name]: value });
  };
  return (
    <div className="car_form text-center">
      <h4 className="fs-5  fw-bold">
        Enter 4-digit Pin code to verify your mobile number
      </h4>
      <div className="otcode ">
        <input
          type="text"
          className="code_input"
          name="otcode_1"
          value={otCode.otcode_1}
          maxLength={1}
          onChange={handelInput}
          autoComplete="off"
        />
        <input
          type="text"
          className="code_input"
          name="otcode_2"
          value={otCode.otcode_2}
          maxLength={1}
          onChange={handelInput}
          autoComplete="off"
        />
        <input
          type="text"
          className="code_input"
          name="otcode_3"
          value={otCode.code_3}
          maxLength={1}
          onChange={handelInput}
          autoComplete="off"
        />
        <input
          type="text"
          className="code_input"
          name="otcode_4"
          value={otCode.otcode_4}
          maxLength={1}
          onChange={handelInput}
          autoComplete="off"
        />
      </div>
      <button
        onClick={() => setSelected("ddetail")}
        className="car_next_btn mt-5 px-4"
      >
        Next
      </button>
    </div>
  );
};

export default OtCode;
