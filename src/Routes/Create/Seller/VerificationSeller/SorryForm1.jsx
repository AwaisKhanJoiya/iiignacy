import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../../Components/BackButton";
import CloseIcon from "../../../../Components/CloseIcon";

const SorryForm1 = () => {
  return (
    <div className="p-4">
      <BackButton />
      <CloseIcon />
      <div className="business_form">
        <h3 className="fw-bold"> We are sorry,</h3>
        <p className="fw-bold mt-2">
          the verification option chosen{" "}
          <span className="fst-italic fs-5">
            {" "}
            (Verification at your location)
          </span>
          is not available in your city. Kindly
          <Link to="/verification"> click here </Link>
          to be redirected to the identity verification form.
        </p>
      </div>
    </div>
  );
};

export default SorryForm1;
