import React from "react";

const BankAccount = ({ setSelected }) => {
  return (
    <div className="driver_form m_account_form">
      <h3 className="fw-bold text-center my-4">Add a bank account</h3>
      <div className="d-flex">
        <div className="me-1">
          <label className="fw-bold mb-1" htmlFor="password">
            Country:
          </label>
          <div>
            <input type="text" className="driver_input" />
          </div>
        </div>
        <div className="ms-1">
          <label className="fw-bold mb-1" htmlFor="password">
            Financial institution Name
          </label>
          <select className="driver_input cursor-pointer px-2">
            <option value="Financial1">Financial1</option>
            <option value="Financial2">Financial2</option>
            <option value="Financial3">Financial3</option>
          </select>
        </div>
      </div>
      <label className="mb-1 mt-4 fw-bold" htmlFor="password">
        Bank account Holder name:
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
      <label className="fw-bold mt-5 mb-1" htmlFor="password">
        Enter your access bank account number
      </label>
      <div>
        <input
          type="text"
          className="driver_input px-2"
          placeholder="Enter account number"
        />
      </div>
      <label className="fw-bold mb-1 mt-4" htmlFor="password">
        BIC
      </label>
      <div>
        <input
          type="text"
          className="driver_input px-2"
          placeholder="8 or 11 characters"
        />
      </div>
      <label className="fw-bold mb-1 mt-4" htmlFor="password">
        IBAN
      </label>
      <div>
        <input
          type="text"
          className="driver_input px-2"
          placeholder="Up to 34 characters"
        />
      </div>
      <label className="fw-bold mb-1 mt-4" htmlFor="password">
        Re-Type IBAN
      </label>
      <div>
        <input type="text" className="driver_input px-2" />
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
          className="checkbox m-0 "
        />
        <label htmlFor="check" className="ms-3 cursor-pointer">
          I accept the terms and conditions set forth for all payments by the
          following agreement. iiignacy currency converter for seller terms and
          conditions.
        </label>
      </div>
      <div className="arrows_btns  mt-4">
        <button onClick={() => setSelected("paypal")} className="driver_btn">
          Back
        </button>
        <button onClick={() => setSelected("character")} className="driver_btn">
          verify the bank account
        </button>
      </div>
    </div>
  );
};

export default BankAccount;
