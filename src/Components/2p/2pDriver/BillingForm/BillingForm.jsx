import React from "react";

const BillingForm = ({ setSelected }) => {
  return (
    <div className="driver_form bill_form">
      <h2 className=" fw-bold text-center mt-4">Payment information</h2>
      <p className="fw-bold text-center mt-3  fs-5">
        You would need the following information to complete the next section
      </p>
      <div className="mt-5">
        <h4 className="fw-bold">Bank account information</h4>
        <p className="mt-2">
          <p>
            __ A valid bank account number which will be used to easily deposit
            and withdraw money between your bank account and your iiignacy
            payment account.
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
        <h4 className="fw-bold">PayPal Account Information</h4>
        <p className="mt-2">
          <p>
            __ A valid PayPal account which will be used to easily deposit or
            withdraw money between your PayPal account and your iiignacy
            payments account.
          </p>
          <p>
            __ Your PayPal account email should be the same name as the primary
            contact or business name provided to iiignacy.
          </p>
        </p>
      </div>
      <div className="mt-5">
        <h4 className="fw-bold">Mobile money information</h4>
        <p className="mt-2">
          __ A valid mobile account number which will be used to easily deposit
          and withdraw money between your mobile money account and your iiignacy
          payment account. Your mobile money account should be in the same name
          as the primary contact or business name provided to iiignacy.
        </p>
      </div>
      <div className="arrows_btns mt-4">
        <button
          onClick={() => setSelected("photo")}
          className="driver_btn"
        >
          Back
        </button>
        <button
          onClick={() => setSelected("money")}
          className="driver_btn"
        >
          I understand
        </button>
      </div>
    </div>
  );
};

export default BillingForm;
