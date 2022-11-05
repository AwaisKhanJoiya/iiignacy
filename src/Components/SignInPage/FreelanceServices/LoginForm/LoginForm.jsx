import React from "react";
import BackButton from "../../../BackButton";
import CloseIcon from "../../../CloseIcon";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="p-4 sign-form-container ">
      <BackButton />
      <CloseIcon />
      <form className=" signup_form d-form s-form mt-5 m-auto p-5">
        <h3 className="d-form-heading text-center ">Login</h3>
        <div className="my-4">
          <input
            type="email"
            placeholder="Email
            address or phone number"
            className="s-form-input my-4 "
          />
          <input
            type="password"
            placeholder="Password"
            className="s-form-input my-2 "
          />
        </div>
        <div className="l_btn_div">
          <button className="l_btn">Sign In</button>
          <p className="mt-4 text-center ">
            Don’t have an account?
            <Link to="/signup">
              <span className="link ms-2">Sign Up</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
