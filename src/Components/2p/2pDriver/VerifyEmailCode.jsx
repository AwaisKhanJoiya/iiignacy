import React, { useState } from "react";

const VerifyEmailCode = ({ setSelected }) => {
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
      <form className="driver_form e_code_form">
        <h4 className="fw-bold text-center mt-2">
          Enter 4-digit Pin code to verify your email adress
        </h4>
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

        <buttton onClick={() => setSelected("mobileno")} className="driver_btn">
          Continue
        </buttton>
      </form>
    </>
  );
};

export default VerifyEmailCode;
