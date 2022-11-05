import React from "react";

const PhotoForm = ({ setSelected }) => {
  return (
    <div className="photo_form driver_form">
      <div className="my-2">
        <h2 className="text-center fw-bold my-2">Steps Mandatory</h2>
        <p className="text-center fw-bold">
          Here's what you need to do to set up your account
        </p>
      </div>

      <div className="photo_input m-0">
        <div>
          <button className="photo_btn ">driver’s photo</button>
          <p className="text-center">Take photo of yourself</p>
        </div>
        <div>
          <button className="photo_btn">
            Valid Insurance Policy Documents
          </button>
          <p className="text-center">
            take photo of valid Insurance Policy Document
          </p>
          {/* <input type="file" accept="image/* ;capture=camera" /> */}
        </div>
        <div>
          <button className="photo_btn">Vehicle Inspection report</button>
          <p className="text-center">Take photo of Vehicle Inspection Report</p>
        </div>
        <div>
          <button className="photo_btn">Driver’s licence</button>
          <p className="text-center fw-bold">Take photo of driver’s licence</p>
        </div>
      </div>
      <div className="arrows_btns m-auto w-75 mt-4">
        <button onClick={() => setSelected("pinfo")} className="driver_btn">
          Back
        </button>
        <button onClick={() => setSelected("bill")} className="driver_btn">
          verify mobile number account
        </button>
      </div>
      {/* <div className="arrows_btns d-flex justify-content-center  mt-4">
        <button className="driver_btn px-4 me-2">Try again</button>
        <button
          onClick={() => setSelected("bill")}
          className="driver_btn px-5 ms-2"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default PhotoForm;
