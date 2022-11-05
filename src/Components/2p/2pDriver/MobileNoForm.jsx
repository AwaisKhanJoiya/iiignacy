import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const MobileNoForm = ({ setSelected }) => {
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
    <div className="driver_form m_no_form">
      <label className="fs-5 mt-3 fw-bold mb-2">Enter your phone number</label>
      <div className="code_div d-flex">
        <select
          className="driver_input code_select fs-6 cursor-pointer"
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
        <div className="code_sm_div driver_input d-flex p-0">
          <span className="c_code">+{countryCode}</span>
          <input type="tel" className="codeInput" />
        </div>
      </div>
      <div className="arrows_btns  mt-4">
        <button
          onClick={() => setSelected("emailcode")}
          className="driver_btn "
        >
          <FontAwesomeIcon className="arrow_icon" icon={faArrowLeft} />
          Back
        </button>
        <button
          onClick={() => setSelected("mobilecode")}
          className="driver_btn  "
        >
          Next
          <FontAwesomeIcon className="arrow_icon mx-2" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default MobileNoForm;
