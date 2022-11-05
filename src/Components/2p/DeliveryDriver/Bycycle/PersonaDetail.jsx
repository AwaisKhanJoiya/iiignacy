import React from "react";

const PersonaDetail = ({ setSelected }) => {
  return (
    <div className="car_form">
      <h3 className="text-center fw-bold m-0">Personal Information</h3>
      <div>
        <label className="label mb-1 mt-3 " htmlFor="email">
          Language
        </label>
      </div>
      <select className="personal_next_btn px-2 cursor-pointer ">
        <option value="1" selected>
          English
        </option>
        <option value="2">Urdu</option>
        <option value="3">Arabic</option>
        <option value="4">Latin</option>
      </select>
      <label className="label mb-1 mt-3" htmlFor="fname">
        First name
      </label>
      <div>
        <input type="text" className="personal_next_btn px-2" />
      </div>
      <label className="label mb-1 mt-3" htmlFor="fname">
        Surname
      </label>
      <div>
        <input type="text" className="personal_next_btn px-2" />
      </div>
      <div>
        <label className="label mb-1 mt-3" htmlFor="email">
          Country
        </label>
      </div>
      <select className="personal_next_btn px-2 mb-2  cursor-pointer ">
        <option value="1" selected>
          country1
        </option>
        <option value="2">country2</option>
        <option value="3">country3</option>
        <option value="4">country4</option>
      </select>
      <select className="personal_next_btn px-2  my-2  cursor-pointer ">
        <option value="1" selected>
          city1
        </option>
        <option value="2">city2</option>
        <option value="3">city3</option>
        <option value="4">city4</option>
      </select>
      <select className="personal_next_btn px-2  my-2  cursor-pointer">
        <option value="1" selected>
          street1
        </option>
        <option value="2">street2</option>
        <option value="3">street3</option>
        <option value="4">street4</option>
      </select>
      <select className="personal_next_btn px-2  my-2  cursor-pointer">
        <option value="1" selected>
          adress1
        </option>
        <option value="2">adress2</option>
        <option value="3">adress3</option>
        <option value="4">adress4</option>
      </select>
      <div>
        <label className="label mb-1" htmlFor="email">
          Phone
        </label>
      </div>
      <div className="d-flex">
        <select className="personal_next_btn me-4  cursor-pointer">
          <option value="1" selected>
            code1
          </option>
          <option value="2">code2</option>
          <option value="3">code3</option>
          <option value="4">code3</option>
        </select>
        <input className="personal_next_btn" type="tel" />
      </div>
      <div>
        <label className="label mb-1 mt-3" htmlFor="email">
          E-mail
        </label>
      </div>
      <input
        type="text"
        placeholder="2p@iiignacy.com"
        className="personal_next_btn"
      />
      <div>
        <label className="label mb-1 mt-3" htmlFor="email">
          Create your password
        </label>
      </div>
      <input
        type="text"
        placeholder="2p@iiignacy.com"
        className="personal_next_btn"
      />
      <div>
        <label className="label mb-1 mt-3" htmlFor="email">
          Confirm your password
        </label>
      </div>
      <input type="text" className="personal_next_btn" />
      <button
        onClick={() => setSelected("onetime")}
        className="personal_next_btn  px-4 mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default PersonaDetail;
