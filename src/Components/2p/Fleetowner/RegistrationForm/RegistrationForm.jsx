import React from "react";
import logo from "../../../../assets/logo.png";
import p2logo from "../../../../assets/2p.png";
import CloseIcon from "../../../CloseIcon";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const RegistrationForm = () => {
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
    <div className="r_container p-3">
      <div className="white-container">
        <CloseIcon />
      </div>

      <div>
        <img src={p2logo} className="r_p2logo" alt="2plogo" />
        <img src={logo} className="r_logo" alt="iiigancy" />
        <button className="r_login_btn ">Login</button>
      </div>
      <div className="r_form_container">
        <div className="fw-bold text-center">
          <h2 className="r_heading">Add your Fleet to 2P</h2>
          <p>Manage drivers, vehicles, and documents.</p>
        </div>

        <div className="r_form">
          <h3 className="fw-bold mt-3 text-center ">Fleet owners:</h3>
          <p className="cursor-pointer text-center fw-bold">
            Sign up here if you have multiple Vehicles to add to the 2P
            platform.
          </p>
          <div>
            <p className="text-center">
              If you are an individual driver,
              <span className="fw-bold">signup as a driver here</span>
            </p>
            <Link to="/signup">
              <button className="r_signup">signup as a driver here</button>
            </Link>
          </div>
          <div>
            <label className="label mb-0 mt-3" htmlFor="email">
              E-mail
            </label>
          </div>
          <input
            type="text"
            placeholder="2p@iiignacy.com"
            className="r_input"
          />
          <div>
            <label className="label mb-0" htmlFor="email">
              Phone
            </label>
          </div>
          <div className="w-100 d-flex">
            <div className="w-25">
              <select
                className="r_input fw-bold cursor-pointer"
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
            <input
              className="r_input w-75  ms-2"
              type="tel"
              placeholder="0008863455"
            />
          </div>
          <div>
            <label className="label mb-0" htmlFor="vehicles">
              Vehicles in your fleet
            </label>
          </div>
          <div>
            <select className="r_input cursor-pointer">
              <option value="1">1-10</option>
              <option value="2">10-50</option>
              <option value="3">50-100</option>
              <option value="4">100-200</option>
              <option value="5">200-1000</option>
            </select>
          </div>
          <div className="d-flex mt-3">
            <input
              type="checkbox"
              id="check"
              name="checkbox"
              className="checkbox me-3 "
            />
            <label htmlFor="check" className="cursor-pointer">
              By signing up, you accept our terms of service and privacy policy
            </label>
          </div>
          <Link to="/createfleet">
            <button className="r_next_btn px-4">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
