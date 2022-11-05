import React from "react";
import CloseIcon from "../../../CloseIcon";
import PersonalData from "../PersonalData";
import { useState } from "react";
import BillDetail from "../../Fleetowner/BillingForm/BillDetail";
import MoAccount from "../BillingForm/MoAccount";
import PayAccount from "../BillingForm/PayAccount";
import BaAccount from "../BillingForm/BaAccount";

const CreateFleetOwner = () => {
  const [selected, setSelected] = useState("pdata");

  return (
    <div className="r_container p-3">
      <div className="white-container">
        <CloseIcon />
      </div>
      {selected === "pdata" && <PersonalData setSelected={setSelected} />}
      {selected === "bill" && <BillDetail setSelected={setSelected} />}
      {selected === "maccount" && <MoAccount setSelected={setSelected} />}
      {selected === "paccount" && <PayAccount setSelected={setSelected} />}
      {selected === "baccount" && <BaAccount setSelected={setSelected} />}
    </div>
  );
};

export default CreateFleetOwner;
