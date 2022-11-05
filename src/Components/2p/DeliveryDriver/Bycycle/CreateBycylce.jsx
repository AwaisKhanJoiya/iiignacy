import React from "react";
import { useState } from "react";
import p2logo from "../../../../assets/2p.png";
import logo from "../../../../assets/logo.png";
import BycycleDelivery from "./BycycleDelivery";
import DocumentDetail from "./DocumentDetail";
import OtCode from "./OtCode";
import BankAccount from "./PaymentDetail/BankAccount";
import MobAccount from "./PaymentDetail/MobAccount";
import PayAccount from "./PaymentDetail/PayAccount";
import PaymentDetail from "./PaymentDetail/PaymentDetail";
import PersonaDetail from "./PersonaDetail";

const CreateBycylce = () => {
  const [selected, setSelected] = useState("bdelivery");
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
      {selected === "bdelivery" && (
        <BycycleDelivery setSelected={setSelected} />
      )}
      {selected === "pdetail" && <PersonaDetail setSelected={setSelected} />}
      {selected === "onetime" && <OtCode setSelected={setSelected} />}
      {selected === "ddetail" && <DocumentDetail setSelected={setSelected} />}
      {selected === "paydetail" && <PaymentDetail setSelected={setSelected} />}
      {selected === "mob" && <MobAccount setSelected={setSelected} />}
      {selected === "paypal" && <PayAccount setSelected={setSelected} />}
      {selected === "bankaccount" && <BankAccount setSelected={setSelected} />}
    </div>
  );
};

export default CreateBycylce;
