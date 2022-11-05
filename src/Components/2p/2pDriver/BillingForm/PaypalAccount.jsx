import React from "react";

const PaypalAccount = ({ setSelected }) => {
  return (
    <div className="driver_form m_account_form">
      <h3 className="fw-bold text-center my-4">Add a PayPal Account</h3>
      <label className="fw-bold mt-4" htmlFor="password">
        Country:
      </label>
      <div>
        <input type="text" className="driver_input" />
      </div>
      <label className="fw-bold mt-4" htmlFor="password">
        Email address link to your PayPal
      </label>
      <div>
        <input
          type="text"
          placeholder="kiriku-ptit333@iiignacy.com"
          className="driver_input px-2"
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
      <div className="warning_box d-flex ">
        <input
          type="checkbox"
          id="check"
          name="checkbox"
          className="checkbox m-0"
        />

        <label htmlFor="check" className="ms-3 cursor-pointer">
          I accept the terms and conditions set forth for all payments by the
          following agreement. iiignacy currency converter for seller terms and
          conditions.
        </label>
      </div>
      <div className="arrows_btns  mt-4">
        <button
          onClick={() => setSelected("money")}
          className="driver_btn px-4"
        >
          Back
        </button>
        <button onClick={() => setSelected("bank")} className="driver_btn">
          verify the pappal account
        </button>
      </div>
    </div>
  );
};

export default PaypalAccount;
