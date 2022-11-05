import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const BusinessInfo = ({ setSelected }) => {
  const [countryData, setCountryData] = useState([]);
  const [countryCode, setCountryCode] = useState("");
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
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-between w-100 stepsContainer">
          <div className="stepBox inProgress">
            <p className="stepNum">1</p>
            <span className="stepTx">Business information</span>
          </div>
          <div className="stepBox ">
            <p className="stepNum">2</p>
            <span className="stepTx">Seller information</span>
          </div>
          <div className="stepBox">
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
        <h2 className="text-center fw-bold my-3">
          Business information for Tito
        </h2>
        <div>
          <label className="label text-dark" htmlFor="">
            Company registration Number
          </label>
        </div>
        <input
          className="s-form-input focus_input"
          type="text"
          placeholder="Please your company registration number"
        />
        <div>
          <label className="label text-dark mt-4" htmlFor="">
            Registered business address
          </label>
        </div>
        <textarea
          rows="3"
          className="s-form-input large_input"
          type="text"
          placeholder="We may verify this address sending you a postcard containing a verification code. Ensure the address you entered is correct because you cannot change it until you complete registration."
        />
        <div className="d-flex w-100 mt-4">
          <div className="w-50 me-2">
            <div>
              <label className=" fw-bold" htmlFor="">
                Country
              </label>
            </div>
            <input type="text" className="s-form-input focus_input mt-2" />
          </div>
          <div className="w-50 ms-2">
            <div>
              <label className="fw-bold" htmlFor="">
                Zip/Postal code
              </label>
            </div>
            <input className="s-form-input focus_input mt-2 " type="text" />
          </div>
        </div>
        <div className="d-flex w-100 mt-4">
          <div className="w-50 me-2">
            <div>
              <label className="fw-bold" htmlFor="">
                State/Region
              </label>
            </div>
            <input type="text" className="s-form-input focus_input mt-2" />
          </div>
          <div className="w-50 ms-2">
            <div>
              <label className="fw-bold" htmlFor="">
                City/Town
              </label>
            </div>
            <input className="s-form-input focus_input mt-2 " type="text" />
          </div>
        </div>
        <div className="d-flex w-100 mt-4">
          <div className="w-50 me-2">
            <div>
              <label className="fw-bold" htmlFor="">
                Address Line 1
              </label>
            </div>
            <input type="text" className="s-form-input focus_input  mt-2" />
          </div>
          <div className="w-50 ms-2">
            <div>
              <label className="fw-bold" htmlFor="">
                Address Line 2
              </label>
            </div>
            <input className="s-form-input focus_input mt-2" type="text" />
          </div>
        </div>

        <div className="d-flex align-items-start checkbox mt-4">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="mt-1 fw-bold cursor-pointer">
            I confirm my address is correct, I understand that this information
            cannot be changed till address verification is completed.
          </label>
        </div>
        <div className="text-center mt-4">
          <label className="label text-dark fw-bold fs-4" htmlFor="">
            Receive pin trough
          </label>
          <div>
            <input type="radio" id="c1" name="circle" className="circles" />
            <label htmlFor="c1" className="fw-bold ms-2 me-3 cursor-pointer">
              SMS
            </label>
            <input
              type="radio"
              id="c2"
              name="circle"
              className="circles ms-3 "
            />
            <label htmlFor="c2" className="fw-bold ms-2 cursor-pointer">
              Call
            </label>
          </div>
        </div>
        <div className=" fs-5 mb-2 mt-5">
          <label htmlFor="number">Please Number for verification</label>
        </div>
        <div className="wrap_div d-flex mt-1 ">
          <div>
            <select
              className="s-form-input  w-100 fw-bold cursor-pointer"
              name="country"
              id="country"
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="">...Select country...</option>
              {countryData.map((res, idx) => {
                const { name, flag, callingCodes } = res;
                return (
                  <option key={idx} value={callingCodes[0]}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="s-form-input wrap_input focus_input d-flex p-0 ms-4">
            <span className="country_code">+{countryCode}</span>
            <input type="text" className="codeInput" />
          </div>
        </div>
        <div className="fs-5 mb-2 m-0 mt-5">
          <label htmlFor="">SMS verification Language</label>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <div className="w-50 me-2">
            <select className="sms_btn cursor-pointer " name="" id="">
              <option value="">...Select Language...</option>

              <option value="">Francais</option>
              <option value="">English</option>
            </select>
          </div>
          <div className="w-50 ms-2">
            <button className="sms_btn">Send SMS or Call</button>
          </div>
        </div>
        <h4 className=" text-center fw-bold my-4 mt-5">
          Primary Contact Person
        </h4>
        <div className="d-flex">
          <input
            className="s-form-input focus_input"
            type="text"
            placeholder="First Name"
          />
          <input
            className="s-form-input focus_input mx-2"
            type="text"
            placeholder="Middle Name"
          />
          <input
            className="s-form-input focus_input"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="text-center mt-1 fw-bold ">
          <label htmlFor="">Enter your complete name...</label>
        </div>
        <div className="w-50 mx-auto mt-4">
          <button onClick={() => setSelected("sinfo")} className="sms_btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
