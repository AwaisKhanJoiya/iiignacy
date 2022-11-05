import React from "react";

const StoreInfo = ({ setSelected }) => {
  return (
    <div>
      <div className="d-flex justify-content-between w-100 stepsContainer">
        <div className="stepBox completed ">
          <p className="stepNum">1</p>
          <span className="stepTx">Business information</span>
        </div>
        <div className="stepBox completed ">
          <p className="stepNum">2</p>
          <span className="stepTx">Seller information</span>
        </div>
        <div className="stepBox completed">
          <p className="stepNum">3</p>
          <span className="stepTx">Billing</span>
        </div>
        <div className="stepBox inProgress">
          <p className="stepNum">4</p>
          <span className="stepTx">Store</span>
        </div>
        <div className="stepBox">
          <p className="stepNum">5</p>
          <span className="stepTx">Verification</span>
        </div>
      </div>
      <div className="business_form">
        <h2 className="text-center fw-bold my-2">Store Information</h2>
        <p className="text-center fw-bold">
          Store name and products information
        </p>
        <div>
          <label className="label text-dark mt-3 fw-bold" htmlFor="">
            Store name
          </label>
        </div>
        <input
          className="s-form-input focus_input px-2"
          type="text"
          placeholder="Please enter your store name"
        />
        <div>
          <h5 className="mt-4 fw-bold text-center">
            Do you have Universal Product Codes (UPCs) for all your products?
          </h5>
          <div className="my-2">
            <input type="radio" id="yes1" className="circles" name="circle1" />
            <label htmlFor="yes1" className="m-0 fw-bold ms-3 cursor-pointer">
              Yes
            </label>
          </div>
          <div>
            <input type="radio" id="no1" className="circles" name="circle1" />
            <label htmlFor="no1" className="m-0 fw-bold ms-3 cursor-pointer">
              No
            </label>
          </div>
        </div>
        <div>
          <h5 className="mt-5 fw-bold text-center">
            Are you the manufacturer, or brand owner (or agent or representative
            of the brand) for any of the products you want to sell on iiignacy?
          </h5>
          <div className="my-2">
            <input type="radio" id="yes2" className="circles" name="circle2" />
            <label htmlFor="yes2" className="m-0 fw-bold ms-3 cursor-pointer">
              Yes
            </label>
          </div>
          <div className="my-2">
            <input type="radio" id="no2" className="circles" name="circle2" />
            <label htmlFor="no2" className="m-0 fw-bold ms-3 cursor-pointer">
              No
            </label>
          </div>
          <div>
            <input type="radio" id="some1" className="circles" name="circle2" />
            <label htmlFor="some1" className="m-0 fw-bold ms-3 cursor-pointer">
              Some of them
            </label>
          </div>
        </div>
        <div>
          <h5 className="mt-5 fw-bold text-center">
            Do you own a government-registered trademark for the branded
            products you want to sell on iiignacy?
          </h5>
          <div className="my-2">
            <input type="radio" id="yes3" className="circles" name="circle3" />
            <label htmlFor="yes3" className="m-0 fw-bold ms-3 cursor-pointer">
              Yes
            </label>
          </div>
          <div>
            <input type="radio" id="no3" className="circles" name="circle3" />
            <label htmlFor="no3" className="m-0 fw-bold ms-3 cursor-pointer">
              No
            </label>
          </div>
          <div className="my-2">
            <input type="radio" id="some2" className="circles" name="circle3" />
            <label htmlFor="some2" className="m-0 fw-bold ms-3 cursor-pointer">
              Some of them
            </label>
          </div>
        </div>
        <div className="arrows_btns d-flex justify-content-between mt-5">
          <button
            className="b_next_btn bg-dark"
            onClick={() => setSelected("ba")}
          >
            Previous
          </button>
          <button
            className="b_next_btn bg-dark"
            onClick={() => setSelected("verification")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
