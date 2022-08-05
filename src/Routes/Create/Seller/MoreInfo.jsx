import { useState } from "react";
import BackButton from "../../../Components/BackButton";
import CloseIcon from "../../../Components/CloseIcon";

const MoreInfo = () => {
  return (
    <div className="p-4">
      <BackButton />
      <CloseIcon />
      <div className="container mt-5">
        <div className="d-flex justify-content-between w-100 stepsContainer">
          <div className="stepBox completed">
            <p className="stepNum">1</p>
            <span className="stepTx">Business information</span>
          </div>
          <div className="stepBox inProgress">
            <p className="stepNum">2</p>
            <span className="stepTx">Seller information</span>
          </div>
          <div className="stepBox">
            <p className="stepNum">3</p>
            <span className="stepTx">Billing</span>
          </div>
          <div className="stepBox">
            <p className="stepNum">4</p>
            <span className="stepTx">Store</span>
          </div>
          <div className="stepBox">
            <p className="stepNum">5</p>
            <span className="stepTx">Verification</span>
          </div>
        </div>
      </div>
      {/* {selected === "form" && <SellerForm setSelected={setSelected} />}
      {selected === "photos" && <SellerPhotos setSelected={setSelected} />}
      {selected === "create" && <CreateSeller setSelected={setSelected} />} */}
    </div>
  );
};

export default MoreInfo;
