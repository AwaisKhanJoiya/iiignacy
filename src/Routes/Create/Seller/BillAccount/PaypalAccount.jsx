import React from "react";

const PaypalAccount = ({ setSelected }) => {
  return (
    <div className="business_form">
      <h3 className=" fw-bold text-center">Add a PayPal Account</h3>
      <label className="label text-dark" htmlFor="password">
        Country:
      </label>
      <input type="text" className="s-form-input" />

      <label className="label text-dark mt-4" htmlFor="password">
        Email address link to your PayPal
      </label>
      <div>
        <input
          type="text"
          placeholder="kiriku-ptit333@iiignacy.com"
          className="s-form-input px-2"
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

      <div className=" warning_box pt-0  px-2 d-flex ">
        <input
          type="checkbox"
          id="check"
          name="checkbox"
          className="checkbox m-0"
          placeholder="kiriku-ptit333@iiignacy.com"
        />
        <label htmlFor="check" className="ms-3 mt-4 cursor-pointer">
          I accept the terms and conditions set forth for all payments by the
          following agreement. iiignacy currency converter for seller terms and
          conditions.
        </label>
      </div>
      <div className="arrows_btns d-flex justify-content-between mt-4">
        <button
          onClick={() => setSelected("mma")}
          className="b_next_btn bg-black px-4"
        >
          Back
        </button>
        <button
          onClick={() => setSelected("ba")}
          className="b_next_btn bg-black"
        >
          verify the pappal account
        </button>
      </div>
    </div>
  );
};

export default PaypalAccount;
