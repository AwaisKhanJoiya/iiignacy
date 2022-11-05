import React from "react";

const MobAccount = ({ setSelected }) => {
  return (
    <div className="car_form p-4">
      <h3 className=" fw-bold text-center">Add a mobile money account</h3>
      <label className="label" htmlFor="password">
        Country:
      </label>
      <div>
        <select className="personal_next_btn px-2 cursor-pointer">
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <label className="label mt-4" htmlFor="password">
        Mobile institution:
      </label>
      <div>
        <select className="personal_next_btn px-2 cursor-pointer">
          <option value="company1">company1</option>
          <option value="company2">company2</option>
          <option value="company3">company3</option>
        </select>
      </div>
      <label className="label mt-4 fw-bold" htmlFor="password">
        Mobile Number Holder name:
      </label>
      <div>
        <div className="d-flex align-items-center mb-2">
          <input type="radio" id="c1" name="circle" className="circles" />
          <label
            htmlFor="c1"
            className="text-white m-0 fw-bold ms-4 cursor-pointer"
          >
            Store name
          </label>
        </div>
        <div className="d-flex align-items-center">
          <input type="radio" id="c2" name="circle" className="circles" />
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
          className="personal_next_btn px-2"
          placeholder=" Enter your mobile number"
        />
      </div>
      <div className="warning">
        <h5>Warning!</h5>
        <p className="text-center">
          All disbursements to this PayPal account will be made in dollars Any
          required conversation of the funds to another currency will be carried
          out using iiignacy currency converter for sellers. Please check the
          box below to confirm that you have read and accepted the terms and
          conditions for use of iiignacy currency converter for seller.
        </p>
      </div>
      <div className="warning pt-0  ps-2 pe-2 d-flex ">
        <input
          type="checkbox"
          id="check"
          name="checkbox"
          className="checkbox m-0 "
        />

        <label htmlFor="check" className="text-white  ms-3 mt-3 cursor-pointer">
          I accept the terms and conditions set forth for all payments by the
          following agreement. iiignacy currency converter for seller terms and
          conditions.
        </label>
      </div>
      <div className="arrows_btns d-flex justify-content-between mt-3">
        <button
          onClick={() => setSelected("paydetail")}
          className="car_login_btn"
        >
          Back
        </button>
        <button onClick={() => setSelected("paypal")} className="car_login_btn">
          verify mobile number account
        </button>
      </div>
    </div>
  );
};

export default MobAccount;
