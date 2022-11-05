import React from "react";
import BackButton from "../../BackButton";
import CloseIcon from "../../CloseIcon";
import "./signup.css";

const SignUpForm = () => {
  return (
    <div className="p-4 signup-form-container">
      <BackButton />
      <CloseIcon />
      <form className="signup_form d-form mt-5 m-auto p-5">
        <h3 className="signup-form-heading">Sign up </h3>
        <div className="my-4">
          <div className="d-flex justify-content-between my-2">
            <input
              type="text"
              placeholder="First name"
              className="signup_input d-form-input me-4"
            />
            <input
              type="text"
              placeholder="Last name"
              className=" signup_input d-form-input"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="signup_input d-form-input my-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="signup_input d-form-input my-2"
          />
          <input
            type="phone"
            placeholder="Phone Number"
            className="signup_input d-form-input my-2"
          />
          <input
            type="text"
            placeholder="Address"
            className="signup_input d-form-input my-2"
          />
        </div>
        <button className="signup_btn">SignUp</button>
      </form>
    </div>
  );
};

export default SignUpForm;
