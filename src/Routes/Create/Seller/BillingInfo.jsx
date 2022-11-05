import React from "react";

const BillingInfo = ({ setSelected }) => {
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-between w-100 stepsContainer">
          <div className="stepBox completed">
            <p className="stepNum">1</p>
            <span className="stepTx">Business information</span>
          </div>
          <div className="stepBox completed">
            <p className="stepNum">2</p>
            <span className="stepTx">Seller information</span>
          </div>
          <div className="stepBox inProgress">
            <p className="stepNum">3</p>
            <span className="stepTx">Billing</span>
          </div>
          <div className="stepBox">
            <p className="stepNum">4</p>
            <span className="stepTx">Store</span>
          </div>
          <div className="stepBox">
            <p className="stepNum">5</p>
            <span className="stepTx">Verification</span>
          </div>
        </div>
      </div>
      <div className="business_form">
        <h2 className=" fw-bold text-center mt-2">Payment Details</h2>
        <h4 className=" fw-bold text-center ">
          We need your payment details for invoices
        </h4>
        <div className="mt-4">
          <h3 className=" fw-bold text-center mt-2">Payment information</h3>
          <p className="fw-bold text-center">
            You would need the following information to complete the next
            section
          </p>
          <div className="mt-4">
            <h4 className="fw-bold text-start">Bank account information</h4>
            <p className="text-start mt-2 fs-5">
              <p>
                __ A valid bank account number which will be used to easily
                deposit and withdraw money between your bank account and your
                iiignacy payment account.
              </p>
              <p>
                __ Your bank account should be in the primary contact’s name or
                business name provided to iiignacy.
              </p>
              __ To verify your bank account, you will need your online banking
              credentials or provide iiignacy with a bank statement.
            </p>
          </div>
          <div className="mt-5">
            <h4 className="fw-bold text-start">PayPal Account Information</h4>
            <p className="text-start mt-2 fs-5">
              <p>
                __ A valid PayPal account which will be used to easily deposit
                or withdraw money between your PayPal account and your iiignacy
                payments account.
              </p>
              <p>
                __ Your PayPal account email should be the same name as the
                primary contact or business name provided to iiignacy.
              </p>
            </p>
          </div>
          <div className="mt-5">
            <h4 className="fw-bold text-start">Mobile money information</h4>
            <p className="text-start mt-2 fs-5">
              __ A valid mobile account number which will be used to easily
              deposit and withdraw money between your mobile money account and
              your iiignacy payment account. Your mobile money account should be
              in the same name as the primary contact or business name provided
              to iiignacy.
            </p>
          </div>
          <div className="arrows_btns d-flex justify-content-between mt-4">
            <button
              onClick={() => setSelected("sinfo")}
              className="b_next_btn bg-black"
            >
              Back
            </button>
            <button
              onClick={() => setSelected("mma")}
              className="b_next_btn bg-black"
            >
              I understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
