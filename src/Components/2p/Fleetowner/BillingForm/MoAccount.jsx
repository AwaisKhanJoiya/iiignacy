import React from "react";

const MoAccount = ({ setSelected }) => {
  return (
    <div className="pdata_form">
      <h3 className=" fw-bold text-white text-center my-4">
        Add a mobile money account
      </h3>
      <label className="label" htmlFor="password">
        Country:
      </label>
      <div>
        <input type="text" className="r_input px-2" />
      </div>
      <label className="label mt-4" htmlFor="password">
        Mobile institution:
      </label>
      <div>
        <select className="r_input px-2">
          <option value="company1">company1</option>
          <option value="company2">company2</option>
          <option value="company3">company3</option>
        </select>
      </div>
      <label className="label mt-5 fw-bold" htmlFor="password">
        Mobile Number Holder name:
      </label>
      <div>
        <div className="arrow_btns d-flex align-items-center mb-2">
          <input type="radio" id="c1" name="circle" className="circles1" />
          <label
            htmlFor="c1"
            className="text-white m-0 fw-bold ms-4 cursor-pointer"
          >
            Store name
          </label>
        </div>
        <div className="d-flex align-items-center">
          <input type="radio" id="c2" name="circle" className="circles1" />
          <label
            htmlFor="c2"
            className="text-white m-0 fw-bold ms-4   cursor-pointer"
          >
            Name of the primary holder of the account
          </label>
        </div>
      </div>
      <label className="label mt-4" htmlFor="password">
        Enter your MTN mobile number
      </label>
      <div>
        <input
          type="text"
          className="r_input px-2"
          placeholder=" Enter your mobile number"
        />
      </div>
      <div className="warning_white">
        <h5 className="fw-bold">Warning!</h5>
        <p>
          All disbursements to this PayPal account will be made in dollars Any
          required conversation of the funds to another currency will be carried
          out using iiignacy currency converter for sellers. Please check the
          box below to confirm that you have read and accepted the terms and
          conditions for use of iiignacy currency converter for seller.
        </p>
      </div>
      <div className="warning_white d-flex ">
        <input
          type="checkbox"
          id="check"
          name="checkbox"
          className="checkbox m-0 "
        />
        <label htmlFor="check" className="text-white ms-3 cursor-pointer">
          I accept the terms and conditions set forth for all payments by the
          following agreement. iiignacy currency converter for seller terms and
          conditions.
        </label>
      </div>
      <div className="arrows_btns d-flex justify-content-between mt-4">
        <button onClick={() => setSelected("bill")} className="b_next_btn">
          Back
        </button>
        <button onClick={() => setSelected("paccount")} className="b_next_btn">
          verify mobile number account
        </button>
      </div>
    </div>
  );
};

export default MoAccount;
