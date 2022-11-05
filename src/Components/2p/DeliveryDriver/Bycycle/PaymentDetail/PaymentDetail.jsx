import React from "react";

const PaymentDetail = ({ setSelected }) => {
  return (
    <div className="car_form p-4">
      <h2 className=" fw-bold text-center">Payment Details</h2>
      <h4 className=" fw-bold text-center ">
        We need your payment details for invoices
      </h4>
      <div className="mt-4">
        <h3 className="text-center mt-5">Payment information</h3>
        <p className="fw-bold text-center">
          You would need the following information to complete the next section
        </p>
        <div className="mt-4">
          <h4 className="fw-bold text-start ">Bank account information</h4>
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
              __ A valid PayPal account which will be used to easily deposit or
              withdraw money between your PayPal account and your iiignacy
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
            in the same name as the primary contact or business name provided to
            iiignacy.
          </p>
        </div>
        <div className="arrows_btns d-flex justify-content-between mt-4">
          <button
            onClick={() => setSelected("ddetail")}
            className="car_login_btn"
          >
            Back
          </button>
          <button onClick={() => setSelected("mob")} className="car_login_btn">
            I understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
