import React from "react";

const PayAccount = ({ setSelected }) => {
  return (
    <div className="pdata_form">
      <h3 className=" fw-bold text-white text-center my-4">
        Add a PayPal Account
      </h3>
      <label className="label" htmlFor="password">
        Country:
      </label>
      <input type="text" className="r_input" />
      <label className="label mt-4" htmlFor="password">
        Email address link to your PayPal
      </label>
      <div>
        <input type="text" className="r_input px-2" />
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
          className="checkbox m-0"
          placeholder="kiriku-ptit333@iiignacy.com"
        />
        <label htmlFor="check" className="text-white  ms-3 cursor-pointer">
          I accept the terms and conditions set forth for all payments by the
          following agreement. iiignacy currency converter for seller terms and
          conditions.
        </label>
      </div>
      <div className="arrows_btns d-flex justify-content-between  mt-4">
        <button onClick={() => setSelected("maccount")} className="b_next_btn">
          Back
        </button>
        <button onClick={() => setSelected("baccount")} className="b_next_btn">
          verify the pappal account
        </button>
      </div>
    </div>
  );
};

export default PayAccount;
