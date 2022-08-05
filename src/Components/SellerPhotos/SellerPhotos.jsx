import React from "react";
import first from "../../assets/boxes/1.png";
import second from "../../assets/boxes/2.png";
import third from "../../assets/boxes/3.png";
import fourth from "../../assets/boxes/4.png";
import five from "../../assets/boxes/5.png";
import six from "../../assets/boxes/6.png";

const SellerPhotos = ({ setSelected }) => {
  return (
    <div className="sp-container mt-5 p-4 container d-flex justify-content-between align-items-center">
      <div className="col-md-6">
        <h2 className="d-form-heading">Sell on iiignacy</h2>
        <h4 className="d-form-heading my-3 text-light">
          Become an iiignacy Seller
        </h4>
        <p className="text-light">
          More than half the units sold on iiignacy are from independent sellers
        </p>
        <button
          onClick={() => setSelected("create")}
          className="s-btn f-btn py-1 px-5 mt-3 font-weight-bold"
        >
          Sign Up
        </button>
      </div>
      <div>
        <div className="box_img d-flex">
          <img src={first} alt="first" />
          <img src={second} alt="second" />
        </div>
        <div className="box_img d-flex">
          <img src={third} alt="third" />
          <img src={fourth} alt="fourth" />
        </div>
        <div className="box_img d-flex">
          <img src={five} alt="five" />
          <img src={six} alt="six" />
        </div>
      </div>
    </div>
  );
};

export default SellerPhotos;
