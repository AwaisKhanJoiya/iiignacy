import React from "react";
import CloseIcon from "../../Components/CloseIcon";
import { Link } from "react-router-dom";

const SignPage = () => {
  return (
    <div className="py-4 container">
      <CloseIcon />
      <div
        className="d-flex align-items-center justify-content-between flex-wrap mt-5"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <Link to="/signup">
          <div className="c-button  ">Sign Up</div>
        </Link>
        <Link to="/login">
          <div className="c-button signin">Sign In</div>
        </Link>
        <Link to="/create">
          <div className="c-button ">Seller</div>
        </Link>
        <Link to="/pbutton">
          <div className="c-button  ">Driver</div>
        </Link>
        <Link to="/freelancer">
          <div className="c-button ">Freelancer Services</div>
        </Link>
      </div>
    </div>
  );
};

export default SignPage;
