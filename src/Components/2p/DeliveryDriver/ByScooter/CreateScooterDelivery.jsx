import React from "react";
import { useState } from "react";
import p2logo from "../../../../assets/2p.png";
import logo from "../../../../assets/logo.png";
import BankAccount from "./Billinginformation/BankAccount";
import BillForm from "./Billinginformation/BillForm";
import MobileAccount from "./Billinginformation/MobileAccount";
import PaypalAccount from "./Billinginformation/PaypalAccount";
import DocumentPics from "./DocumentPics";
import OtCode from "./OtCode";
import PersonalInf from "./PersonalInf";
import ScooterDelivery from "./ScooterDelivery";

const CreateScooterDelivery = () => {
  const [selected, setSelected] = useState("sdelivery");
  return (
    <div className="car_container py-2 px-4">
      <div className="car_navbar d-flex justify-content-between">
        <div>
          <img src={p2logo} className="r_p2logo" alt="2plogo" />
          <img src={logo} className="r_logo" alt="iiigancy" />
        </div>
        <div>
          <button className="car_login_btn ">Login</button>
        </div>
      </div>
      {selected === "sdelivery" && (
        <ScooterDelivery setSelected={setSelected} />
      )}
      {selected === "pinfo" && <PersonalInf setSelected={setSelected} />}
      {selected === "ot" && <OtCode setSelected={setSelected} />}
      {selected === "pics" && <DocumentPics setSelected={setSelected} />}
      {selected === "bill" && <BillForm setSelected={setSelected} />}
      {selected === "mobaccount" && <MobileAccount setSelected={setSelected} />}
      {selected === "payaccount" && <PaypalAccount setSelected={setSelected} />}
      {selected === "bankaccount" && <BankAccount setSelected={setSelected} />}
    </div>
  );
};

export default CreateScooterDelivery;
