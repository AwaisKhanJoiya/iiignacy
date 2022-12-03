import React from "react";

const Eighteen = ({ setSelected }) => {
  return (
    <div className="e_container">
      <div className="business_form mt-0">
        <h2 className="fw-bold text-center">Personal Information</h2>
        <div className="mt-3">
          <label htmlFor="">Date of Birth</label>
          <br />
          <input className="s-form-input" type="text" />
        </div>
        <div className="mt-3">
          <label htmlFor="">Country of Birth</label>
          <br />
          <input className="s-form-input" type="text" />
        </div>
        <div className="mt-3">
          <label htmlFor="">Passport/ID </label>
          <br />
          <input className="s-form-input" type="text" />
        </div>

        <button
          onClick={() => setSelected("categury")}
          className="sms_btn e_btn mt-4"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Eighteen;
