import React from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import BackButton from "../../BackButton";
import CloseIcon from "../../CloseIcon";
const SignIn = () => {
  return (
    <div className="p-4 sign-form-container ">
      <BackButton />
      <CloseIcon />
      <form
        className="d-form s-form mt-5 m-auto p-5"
        style={{ backgroundColor: "#018abd" }}
      >
        <h3
          className="d-form-heading text-center  "
          style={{ fontWeight: "700" }}
        >
          Login
        </h3>
        <div className="my-4">
          <input
            type="email"
            placeholder="Email
            address or phone number"
            className="s-form-input signin_input my-4 "
          />
          <input
            type="password"
            placeholder="Password"
            className="s-form-input signin_input my-2 "
          />
        </div>
        <div className="btn_div">
          <button className="sign_btn">Sign In</button>
          <p className="mt-4  ">
            Don’t have an account?
            <Link to="/create/seller">
              <span className="link ms-2">Sign Up</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
