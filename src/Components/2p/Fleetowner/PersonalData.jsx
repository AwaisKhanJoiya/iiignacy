import React from "react";

const PersonalData = ({ setSelected }) => {
  return (
    <div className="pdata_form">
      <h3 className="text-center m-2 my-4">Personal Information</h3>
      <label className="label mt-2" htmlFor="fname">
        First name
      </label>
      <div>
        <input type="text" className="r_input px-2" />
      </div>
      <label className="label mt-3" htmlFor="fname">
        Last name
      </label>
      <div>
        <input type="text" className="r_input px-2" />
      </div>
      <div>
        <label className="label mt-3 " htmlFor="email">
          City
        </label>
      </div>

      <select className="r_input px-2  ">
        <option value="1" selected>
          city1
        </option>
        <option value="2">city2</option>
        <option value="3">city3</option>
        <option value="4">city4</option>
      </select>
      <div>
        <label className="label mt-3 " htmlFor="email">
          Language
        </label>
      </div>
      <select className="r_input px-2 ">
        <option value="1" selected>
          English
        </option>
        <option value="2">Urdu</option>
        <option value="3">Arabic</option>
        <option value="4">Latin</option>
      </select>
      <button onClick={() => setSelected("bill")} className="r_next_btn mt-4">
        Next
      </button>
    </div>
  );
};

export default PersonalData;
