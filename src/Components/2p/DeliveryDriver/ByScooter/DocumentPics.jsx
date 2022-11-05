import React from "react";

const DocumentPics = ({ setSelected }) => {
  return (
    <div className="pictures_form">
      <div>
        <h3 className="text-center fw-bold">Steps Mandatory</h3>
        <p className=" fw-bold text-center fs-4">
          Here's what you need to do to set up your account
        </p>
      </div>

      <div className=" photo_input m-0">
        <div>
          <button className="picture_btn ">driver’s photo</button>
          <p className="text-center fw-bold">Take photo of yourself</p>
        </div>
        <div>
          <button className="picture_btn">
            Valid Insurance Policy Documents
          </button>
          <p className="text-center fw-bold">
            take photo of Insurance Policy Document
          </p>
          {/* <input type="file" accept="image/* ;capture=camera" /> */}
        </div>
        <div>
          <button className="picture_btn">Vehicle Inspection report</button>
          <p className="text-center fw-bold">
            Take photo of Vehicle Inspection Report
          </p>
        </div>
        <div>
          <button className="picture_btn">Driver’s permit</button>
          <p className="text-center fw-bold">Take photo of driver’s permit</p>
        </div>
        <div className="arrows_btns m-auto w-75 d-flex justify-content-between">
          <button
            onClick={() => setSelected("ot")}
            title="If You click Go back you will have to fill this form again"
            className="car_login_btn picbtns"
          >
            go Back
          </button>
          <button
            onClick={() => setSelected("bill")}
            className="car_login_btn picbtns"
          >
            Next
          </button>
        </div>
      </div>

      {/* <div className="d-flex justify-content-center  mt-2">
        <button className="car_login_btn">Try again</button>
        <button
          className=" px-4 car_login_btn"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default DocumentPics;
