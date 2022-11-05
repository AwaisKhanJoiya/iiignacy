import React from "react";
import { useState } from "react";

const OneTimeCode = ({ setSelected }) => {
  const [code, setCode] = useState({
    code_1: "",
    code_2: "",
    code_3: "",
    code_4: "",
  });
  const handelInput = (e) => {
    const { maxLength, name, value } = e.target;
    console.log(maxLength, name, value);
    setCode({ ...code, [name]: value });
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
          value={code.code_1}
          maxLength={1}
          onChange={handelInput}
          autoComplete="off"
        />
        <input
          type="text"
          className="code_input"
          name="code_2"
          value={code.code_2}
          maxLength={1}
          onChange={handelInput}
          autoComplete="off"
        />
        <input
          type="text"
          className="code_input"
          name="code_3"
          value={code.code_3}
          maxLength={1}
          onChange={handelInput}
          autoComplete="off"
        />
        <input
          type="text"
          className="code_input"
          name="code_4"
          value={code.code_4}
          maxLength={1}
          onChange={handelInput}
          autoComplete="off"
        />
      </div>
      <button
        onClick={() => setSelected("pictures")}
        className="car_next_btn mt-5 px-4"
      >
        Next
      </button>
    </div>
  );
};

export default OneTimeCode;
