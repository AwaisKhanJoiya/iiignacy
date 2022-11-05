import React from "react";
import CloseIcon from "../../../CloseIcon";
import BackButton from "../../../BackButton";

const CompletedForm = () => {
  return (
    <div className="complete_container p-4">
      <div className="white-container">
        <BackButton />
        <CloseIcon />
      </div>
      <div className="comp_s_container">
        <h1 className="fw-bold m-4 text-center">Registration Completed</h1>
        <h2 className="fw-bold text-center"> Welcome!</h2>
        <h4 className="fw-bold mt-4 text-center">
          Kindly use the one-time password sent to your phone and email number
          to access your dashboard.
        </h4>
        <h2 className="fw-bold text-center mt-5">Thank You</h2>
        <p className="mt-2 text-center fs-5">
          Note that your account will be blocked if we find any problem with
          your documents.
        </p>
      </div>
    </div>
  );
};

export default CompletedForm;
