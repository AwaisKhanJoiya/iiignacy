import React from "react";

const BillDetail = ({ setSelected }) => {
  return (
    <div className="r_form_container">
      <h2 className=" fw-bold text-white text-center mt-2">Payment Details</h2>
      <h4 className=" fw-bold text-white text-center ">
        We need your payment details for invoices
      </h4>
      <div className="r_form mt-4">
        <h3 className=" fw-bold text-white text-center mt-2">
          Payment information
        </h3>
        <p className="fw-bold text-center text-white">
          You would need the following information to complete the next section
        </p>
        <div className="mt-4">
          <h4 className="fw-bold text-start text-white ">
            Bank account information
          </h4>
          <p className="text-start text-white mt-2 fs-5">
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
          <h4 className="fw-bold text-start text-white ">
            PayPal Account Information
          </h4>
          <p className="text-start text-white mt-2 fs-5">
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
          <h4 className="fw-bold text-start text-white ">
            Mobile money information
          </h4>
          <p className="text-start text-white mt-2 fs-5">
            __ A valid mobile account number which will be used to easily
            deposit and withdraw money between your mobile money account and
            your iiignacy payment account. Your mobile money account should be
            in the same name as the primary contact or business name provided to
            iiignacy.
          </p>
        </div>
        <div className="arrows_btns d-flex justify-content-between mt-4">
          <button onClick={() => setSelected("pdata")} className="b_next_btn">
            Back
          </button>
          <button
            onClick={() => setSelected("maccount")}
            className="b_next_btn"
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillDetail;
