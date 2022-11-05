import React from "react";

const MobileMoneyAccount = ({ setSelected }) => {
  return (
    <div className="business_form">
      <h3 className=" fw-bold text-center my-4">Add a mobile money account</h3>
      <label className="label text-dark" htmlFor="password">
        Country:
      </label>
      <input type="text" className="s-form-input" />

      <label className="label text-dark mt-4" htmlFor="password">
        Mobile institution:
      </label>
      <div>
        <select className="s-form-input cursor-pointer px-2">
          <option value="company1">company1</option>
          <option value="company2">company2</option>
          <option value="company3">company3</option>
        </select>
      </div>
      <label className="label text-dark mt-5 fw-bold" htmlFor="password">
        Mobile Number Holder name:
      </label>
      <div>
        <div className="d-flex align-items-center mb-2">
          <input type="radio" id="c1" name="circle" className="circles" />
          <label
            htmlFor="c1"
            className="text-dark m-0 fw-bold ms-4 cursor-pointer"
          >
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
      <label className="label text-dark mt-4" htmlFor="password">
        Enter your MTN mobile number
      </label>
      <div>
        <input
          type="text"
          className="s-form-input focus_input px-2"
          placeholder=" Enter your mobile number"
        />
      </div>
      <div className="warning_box">
        <h5>Warning!</h5>
        <p className="text-center">
          All disbursements to this PayPal account will be made in dollars Any
          required conversation of the funds to another currency will be carried
          out using iiignacy currency converter for sellers. Please check the
          box below to confirm that you have read and accepted the terms and
          conditions for use of iiignacy currency converter for seller.
        </p>
      </div>
      <div className="warning_box d-flex pt-0  px-2">
        <input
          type="checkbox"
          id="check"
          name="checkbox"
          className="checkbox m-0 "
        />
        <label htmlFor="check" className="fs-6 ms-3 mt-3 cursor-pointer">
          I accept the terms and conditions set forth for all payments by the
          following agreement. iiignacy currency converter for seller terms and
          conditions.
        </label>
      </div>
      <div className="arrows_btns d-flex justify-content-between mt-4">
        <button
          onClick={() => setSelected("billinfo")}
          className="b_next_btn bg-black"
        >
          Back
        </button>
        <button
          onClick={() => setSelected("ppa")}
          className="b_next_btn bg-black"
        >
          verify mobile number account
        </button>
      </div>
    </div>
  );
};

export default MobileMoneyAccount;
