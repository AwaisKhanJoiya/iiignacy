import React from "react";
import "../DeliveryDriver";
import logo from "../../../../assets/logo.png";
import p2logo from "../../../../assets/2p.png";
import { useState } from "react";
import CarDelivery from "./CarDelivery";
import "../../DeliveryDriver/delivery.css";
import PersInfo from "./PersInfo";
import OneTimeCode from "./OneTimeCode";
import PicturesForm from "./PicturesForm";
import BillForm from "./BillForm/BillForm";
import MobileMoney from "./BillForm/MobileMoney";
import Paypal from "./BillForm/Paypal";
import Bank from "./BillForm/Bank";
// import CloseIcon from "../../../CloseIcon";

const CreateCarDelivery = () => {
  const [selected, setSelected] = useState("cdelivery");
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
      {selected === "cdelivery" && <CarDelivery setSelected={setSelected} />}
      {selected === "persinfo" && <PersInfo setSelected={setSelected} />}
      {selected === "otcode" && <OneTimeCode setSelected={setSelected} />}
      {selected === "pictures" && <PicturesForm setSelected={setSelected} />}
      {selected === "billform" && <BillForm setSelected={setSelected} />}
      {selected === "mm" && <MobileMoney setSelected={setSelected} />}
      {selected === "payp" && <Paypal setSelected={setSelected} />}
      {selected === "bank" && <Bank setSelected={setSelected} />}
      {/* {selected === "characterform" && <CharacterForm setSelected={setSelected} />} */}
    </div>
  );
};

export default CreateCarDelivery;
