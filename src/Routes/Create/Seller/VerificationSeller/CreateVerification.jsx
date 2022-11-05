import React from "react";
import logo from "../../../../assets/logo.png";
import BackButton from "../../../../Components/BackButton";
import CloseIcon from "../../../../Components/CloseIcon";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CreateVerification = () => {
  const [countryData, setCountryData] = useState([]);
  const url = " https://restcountries.com/v2/all";
  const getCountryData = () => {
    axios(url)
      .then((res) => setCountryData(res.data))
      .catch((error) => console.log(error));
  };
  console.log(countryData);

  useEffect(() => {
    getCountryData();
  }, []);
  return (
    <div className="seller-form-container p-4">
      <BackButton />
      <CloseIcon />

      <div className="d-flex justify-content-center">
        <img src={logo} alt="iiigancy" className="h_logo" />
        <h1 className="mt-3 ms-2">seller</h1>
      </div>
      <h4 className="text-center  mt-5 mb-3">
        Creating your iiignacy seller account
      </h4>
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
      <div className="d-flex justify-content-between box2_wrap  m-5">
        <div className="p-3">
          <h3 className="text-center fw-bold my-4">
            Your identity verification
          </h3>
          <div className="s-input-box">
            <label className="fw-bold mb-0">Enter a WhatsApp number</label>
          </div>
          <div className="s-input-box wrap_div d-flex mt-0 w-100">
            <div className="">
              <select
                className="fw-bold cursor-pointer"
                name="country"
                id="country"
              >
                {countryData.map((res, idx) => {
                  const { callingCodes } = res;
                  return (
                    <option
                      className="text-dark"
                      key={idx}
                      value={callingCodes[0]}
                    >
                      +{callingCodes}
                    </option>
                  );
                })}
              </select>
            </div>
            <input className="wrap_input" type="text" />
          </div>
          <Link to="/welcome">
            <button className="w-100 py-2 fw-bold s-btn f-btn">
              Video call me now
            </button>
          </Link>
        </div>
        <div className="p-3 mt-3">
          <h6>
            Identity verification over a live video call is a 3-step process:
          </h6>
          <div className="mt-4 ms-3">
            <span></span>
            <p>1. Enter your phone number</p>
            <p>
              2. Click “call me now” to generate the pin, after which you will
              receive a call
            </p>
            <p>3. Receive the call and enter your PIN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateVerification;
