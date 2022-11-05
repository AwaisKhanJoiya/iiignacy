import React from "react";
import CloseIcon from "../../../../Components/CloseIcon";
import BackButton from "../../../../Components/BackButton";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="seller-form-container p-4">
      <BackButton />
      <CloseIcon />
      <div className="welcome_form">
        <div>
          <h2 className="fw-bold">Congrats, "Store Name"</h2>
          <h3 className="text-center mt-4">
            Welcome to the iiignacy seller board
          </h3>
          <p className="fw-bold text-center">
            Your unique iiignacy seller ID is "6 unique digits"
          </p>
          <div className="text-center w-75 m-auto">
            <p>
              You may occasionally need to provide your Seller ID to verify your
              account with us. You have been granted full access to the iiignacy
              Seller central.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h5 className="fw-bold text-center">
            Enter your payment and tax information
          </h5>
          <div className="w-100 d-flex justify-content-center">
            <Link to="/tax">
              <button className="payment_btn">Now</button>
            </Link>
            <button className="payment_btn">Later</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
