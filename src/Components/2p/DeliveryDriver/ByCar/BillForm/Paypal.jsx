import React from "react";

const Paypal = ({ setSelected }) => {
  return (
    <div className="car_form p-4">
      <h3 className=" fw-bold text-center">Add a PayPal Account</h3>
      <label className="label" htmlFor="password">
        Country:
      </label>
      <select className="personal_next_btn cursor-pointer px-2">
        <option value="India">India</option>
        <option value="Pakistan">Pakistan</option>
        <option value="USA">USA</option>
      </select>
      <label className="label mt-4" htmlFor="password">
        Email address link to your PayPal
      </label>
      <div>
        <input
          type="text"
          placeholder="kiriku-ptit333@iiignacy.com"
          className="personal_next_btn px-2"
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

      <div className=" warning pt-0  ps- 2 pe-2 d-flex ">
        <input
          type="checkbox"
          id="check"
          name="checkbox"
          className="checkbox m-0"
          placeholder="kiriku-ptit333@iiignacy.com"
        />
        <label htmlFor="check" className="text-white  ms-3 mt-4 cursor-pointer">
          I accept the terms and conditions set forth for all payments by the
          following agreement. iiignacy currency converter for seller terms and
          conditions.
        </label>
      </div>
      <div className="arrows_btns d-flex justify-content-between mt-3">
        <button
          onClick={() => setSelected("mm")}
          className="car_login_btn px-4"
        >
          Back
        </button>
        <button onClick={() => setSelected("bank")} className="car_login_btn">
          verify the pappal account
        </button>
      </div>
    </div>
  );
};

export default Paypal;
