import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const SellerInfo = ({ setSelected }) => {
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
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-between w-100 stepsContainer">
          <div className="stepBox completed">
            <p className="stepNum">1</p>
            <span className="stepTx">Business information</span>
          </div>
          <div className="stepBox inProgress">
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
      <div className="business_form sellinfo_form">
        <h3 className="text-center my-4">
          Personal information for
          <span className="fw-bold fs-2"> Nana Yon Lolo</span>
        </h3>
        <div>
          <label className="fw-bold mb-2" htmlFor="">
            Country of citizenship
          </label>
        </div>
        <select
          className="s-form-input w-100 cursor-pointer"
          name="country"
          id="country"
        >
          <option value="">...Select country...</option>
          {countryData.map((res, idx) => {
            const { name } = res;
            return (
              <option key={idx} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        <div className="wrap_div d-flex mt-5">
          <div className="me-4">
            <div>
              <label className="fw-bold mb-2" htmlFor="">
                Country of Birth
              </label>
            </div>
            <select
              className="s-form-input w-100 cursor-pointer"
              name="country"
              id="country"
            >
              <option value="">...Select country...</option>
              {countryData.map((res, idx) => {
                const { name } = res;
                return (
                  <option key={idx} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <div>
              <label className="fw-bold wrap_input mb-2" htmlFor="">
                Date of Birth
              </label>
            </div>
            <div className="d-flex">
              <input
                className="s-form-input"
                type="text"
                name=""
                id=""
                placeholder="Day"
              />
              <input
                className="s-form-input ms-2 me-2"
                type="text"
                name=""
                id=""
                placeholder="Month"
              />
              <input
                className="s-form-input"
                type="text"
                name=""
                id=""
                placeholder="Year"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <label className="fw-bold mb-2" htmlFor="">
              Proof of Identity
            </label>
          </div>
          <div className="wrap_div d-flex ">
            <select
              className="s-form-input me-2 w-100 cursor-pointer"
              name=""
              id=""
            >
              <option value="Passport">...Select Identity...</option>

              <option value="Passport">Passport</option>
              <option value="ID Card">ID Card</option>
            </select>
            <input
              type="text"
              className="s-form-input wrap_input ms-2 w-100"
              placeholder="Enter Passport or ID Card"
            />
          </div>
        </div>
        <div className="mt-4">
          <div>
            <label className="mb-2" htmlFor="">
              Date of Expiry
            </label>
          </div>
          <div className="d-flex">
            <input
              className="s-form-input"
              type="text"
              name=""
              id=""
              placeholder="Day"
            />
            <input
              className="s-form-input ms-2 me-2"
              type="text"
              name=""
              id=""
              placeholder="Month"
            />
            <input
              className="s-form-input"
              type="text"
              name=""
              id=""
              placeholder="Year"
            />
          </div>
        </div>
        <div className="mt-4">
          <div>
            <label className="mb-2" htmlFor="">
              Country of Issue
            </label>
          </div>
          <select
            className="s-form-input w-100 cursor-pointer"
            name="country"
            id="country"
          >
            <option value="">...Select country...</option>
            {countryData.map((res, idx) => {
              const { name } = res;
              return (
                <option key={idx} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mt-4">
          <div>
            <label className="fw-bold mb-2" htmlFor="">
              Residential address
            </label>
          </div>

          <input
            className="s-form-input"
            type="text"
            name=""
            id=""
            placeholder="FR, 13011, Marseille, Montée des Camoins, Montée des Camoins"
          />
        </div>
        <Link to="">
          <p className="text-end mt-1">Add another address</p>
        </Link>
        <div>
          <label className="fw-bold mb-2" htmlFor="">
            Mobile Number
          </label>
        </div>
        <input className="s-form-input" type="text" name="" id="" />
        <Link to="">
          <p className="text-end mt-1">Add a new mobile number</p>
        </Link>
        <div>
          <div className=" mb-2 ms-5 fw-bold fs-4">
            <label htmlFor="">Nana Yon Lolo</label>
          </div>
          <div className="d-flex checkbox ">
            <input type="checkbox" id="check1" className="me-2" />
            <label htmlFor="check1" className="w-50 fs-5">
              is a beneficial owner of the business
            </label>
          </div>
          <div className="d-flex checkbox ">
            <input type="checkbox" id="check2" className="me-2 " />
            <label htmlFor="check2" className="w-50 fs-5">
              is a legal representative
            </label>
          </div>
          <p className="fw-bold text-center">
            I have added all the beneficial owners of the business
          </p>
          <div className="d-flex justify-content-center">
            <input type="radio" id="c1" name="circle" className="circles" />
            <label htmlFor="c1" className="fw-bold ms-2 me-3 cursor-pointer">
              Yes
            </label>
            <input
              type="radio"
              id="c2"
              name="circle"
              className="circles ms-3 "
            />
            <label htmlFor="c2" className="fw-bold ms-2 cursor-pointer">
              No
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <div className="w-50 me-2">
            <button onClick={() => setSelected("business")} className="sms_btn">
              previous
            </button>
          </div>
          <div className="w-50 ms-2">
            <button onClick={() => setSelected("billinfo")} className="sms_btn">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
