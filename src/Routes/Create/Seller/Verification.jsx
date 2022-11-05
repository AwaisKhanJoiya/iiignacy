import React from "react";
import { Link } from "react-router-dom";

const Verification = () => {
  return (
    <div>
      {" "}
      <div className="d-flex justify-content-between w-100 stepsContainer">
        <div className="stepBox completed ">
          <p className="stepNum">1</p>
          <span className="stepTx">Business information</span>
        </div>
        <div className="stepBox completed ">
          <p className="stepNum">2</p>
          <span className="stepTx">Seller information</span>
        </div>
        <div className="stepBox completed">
          <p className="stepNum">3</p>
          <span className="stepTx">Billing</span>
        </div>
        <div className="stepBox completed">
          <p className="stepNum">4</p>
          <span className="stepTx">Store</span>
        </div>
        <div className="stepBox inProgress">
          <p className="stepNum">5</p>
          <span className="stepTx">Verification</span>
        </div>
      </div>
      <div className="business_form veri_form px-5">
        <h2 className="fw-bold text-center my-3">Identity Verification</h2>
        <p className="text-center fw-bold">
          Please choose one of the available options to connect with an iiignacy
          staff to complete your verification
        </p>
        <p className="text-center">
          (Not all options might be available at your location).
        </p>

        <div className="my-5 ">
          <Link to="/verification" target="blank">
            <div className="s-form-input ps-5">
              <div>
                <input type="radio" id="1" className="circles" name="circle3" />
                <label htmlFor="1" className="fw-bold ms-3 fs-5 cursor-pointer">
                  Over a live video call
                </label>
                <p className="fw-bold mt-2 ms-5">
                  You can join a video call from any location at a time and date
                  you choose to complete your identity verification.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/sorry1" target="blank">
            <div className="s-form-input my-5 ps-5">
              <div>
                <input type="radio" id="2" className="circles" name="circle3" />
                <label htmlFor="2" className="fw-bold fs-5 ms-3 cursor-pointer">
                  Verification at your location
                </label>
                <span>(Currently not available at your location)</span>
                <p className="ms-5 mt-2 fw-bold">
                  An iiignacy staff will visit your business address at your
                  desired date and time to help you complete the verification.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/sorry2" target="blank">
            <div className="s-form-input ps-5">
              <input type="radio" id="3" className="circles" name="circle3" />
              <label
                htmlFor="3"
                className="mt-2 fs-5 fw-bold ms-3 cursor-pointer"
              >
                Meet at the local iiignacy designated site
              </label>
              <span>(Currently not available at your location)</span>
              <div>
                <p className=" mt-2 fw-bold ms-5">
                  You can visit an iiignacy designated site near your location
                  and meet with one of our staff to complete your verification.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Verification;
