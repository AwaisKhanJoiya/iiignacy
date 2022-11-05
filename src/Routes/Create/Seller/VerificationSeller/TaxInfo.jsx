import React from "react";
import BackButton from "../../../../Components/BackButton";
import CloseIcon from "../../../../Components/CloseIcon";

const TaxInfo = () => {
  return (
    <div className="seller-form-container p-4">
      <BackButton />
      <CloseIcon />
      <div className="seller-form m-auto mt-4 p-4">
        <h2 className="text-center fw-bold mb-4">TAX INFORMATION</h2>
        <h5 className="my-3 fw-bold"> VAT Liability</h5>
        <div>
          <div className="d-flex align-items-center mb-2">
            <input type="radio" id="c1" name="circle" className="circles1" />
            <label
              htmlFor="c1"
              className="text-white m-0 fw-bold ms-4 cursor-pointer"
            >
              Company is VAT liable
            </label>
          </div>
          <div className="d-flex align-items-center">
            <input type="radio" id="c2" name="circle" className="circles1" />
            <label
              htmlFor="c2"
              className="text-white m-0 fw-bold ms-4   cursor-pointer"
            >
              Company is not VAT liable
            </label>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="" className="label mb-1">
            VAT number
          </label>
          <div className="s-input-box m-0">
            <input type="text" name="" id="" placeholder="799990" />
          </div>
          <p className="text-center fw-bold mt-1">Company’s VAT number</p>
        </div>
        <button className="s-btn f-btn w-100 fw-bold py-2 mt-2">Next</button>
      </div>
    </div>
  );
};

export default TaxInfo;
