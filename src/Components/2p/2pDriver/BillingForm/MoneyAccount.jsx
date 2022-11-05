import React from "react";

const MoneyAccount = ({ setSelected }) => {
  return (
    <div className="driver_form m_account_form ">
      <h3 className="fw-bold text-center my-4">Add a mobile money account</h3>
      <label className="fw-bold  mt-4" htmlFor="password">
        Country:
      </label>
      <div>
        <input type="text" className="driver_input" />
      </div>
      <label className="fw-bold  mt-4" htmlFor="password">
        Mobile institution:
      </label>
      <div>
        <select className="driver_input cursor-pointer px-2">
          <option value="company1">company1</option>
          <option value="company2">company2</option>
          <option value="company3">company3</option>
        </select>
      </div>
      <label className="fs-5 mt-5 mb-2 fw-bold" htmlFor="password">
        Mobile Number Holder name:
      </label>
      <div>
        <div className="d-flex align-items-center mb-2">
          <input type="radio" id="c1" name="circle" className="circles  " />
          <label htmlFor="c1" className="m-0 fw-bold ms-4 cursor-pointer">
            Store name
          </label>
        </div>
        <div className="d-flex align-items-center">
          <input type="radio" id="c2" name="circle" className="circles" />
          <label htmlFor="c2" className="m-0 fw-bold ms-4   cursor-pointer">
            Name of the primary holder of the account
          </label>
        </div>
      </div>
      <label className="fw-bold fs-5 mt-5" htmlFor="password">
        Enter your MTN mobile number
      </label>
      <div>
        <input
          type="text"
          className="driver_input px-2"
          placeholder="Enter your mobile number"
        />
      </div>
      <div className="warning_box">
        <h5>Warning!</h5>
        <p>
          All disbursements to this PayPal account will be made in dollars Any
          required conversation of the funds to another currency will be carried
          out using iiignacy currency converter for sellers. Please check the
          box below to confirm that you have read and accepted the terms and
          conditions for use of iiignacy currency converter for seller.
        </p>
      </div>
      <div className="warning_box d-flex">
        <input
          type="checkbox"
          id="check"
          name="checkbox"
          className="checkbox"
        />
        <label htmlFor="check" className="ms-3 cursor-pointer">
          I accept the terms and conditions set forth for all payments by the
          following agreement. iiignacy currency converter for seller terms and
          conditions.
        </label>
      </div>
      <div className="arrows_btns  mt-4">
        <button onClick={() => setSelected("bill")} className="driver_btn">
          Back
        </button>
        <button onClick={() => setSelected("paypal")} className="driver_btn">
          verify mobile number account
        </button>
      </div>
    </div>
  );
};

export default MoneyAccount;
