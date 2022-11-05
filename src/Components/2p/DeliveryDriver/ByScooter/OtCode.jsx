import React from "react";
import { useState } from "react";

const OtCode = ({ setSelected }) => {
  const [ot, setOt] = useState({
    ot_1: "",
    ot_2: "",
    ot_3: "",
    ot_4: "",
  });
  const handelInput = (e) => {
    const { maxLength, name, value } = e.target;
    console.log(maxLength, name, value);
    setOt({ ...ot, [name]: value });
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
          name="code_1"
          value={ot.ot_1}
          maxLength={1}
          onChange={handelInput}
          autoComplete="off"
        />
        <input
          type="text"
          className="code_input"
          name="code_2"
          value={ot.ot_2}
          maxLength={1}
          onChange={handelInput}
          autoComplete="off"
        />
        <input
          type="text"
          className="code_input"
          name="code_3"
          value={ot.ot_3}
          maxLength={1}
          onChange={handelInput}
          autoComplete="off"
        />
        <input
          type="text"
          className="code_input"
          name="code_4"
          value={ot.ot_4}
          maxLength={1}
          onChange={handelInput}
          autoComplete="off"
        />
      </div>
      <button
        onClick={() => setSelected("pics")}
        className="car_next_btn mt-5 px-4"
      >
        Next
      </button>
    </div>
  );
};

export default OtCode;
