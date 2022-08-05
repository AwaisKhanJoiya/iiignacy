import { useState } from "react";
import logo from "../../assets/logo.png";
import VerifyOtp from "../VerifyOtp/VerifyOtp";
import ContactInfo from "./ContactInfo";
import Form from "./Form";

const CreateSeller = () => {
  const [selected, setSelected] = useState("form");
  return (
    <div className="mt-5">
      <div className="m-auto d-flex align-items-center justify-content-center">
        <img src={logo} className="h-logo s-logo" alt="iiignacy" />
        <h3 className="ms-2 mt-3">Seller</h3>
      </div>
      {selected === "form" && <Form setSelected={setSelected} />}
      {selected === "otp" && <VerifyOtp setSelected={setSelected} />}
      {selected === "contactInfo" && <ContactInfo setSelected={setSelected} />}
    </div>
  );
};

export default CreateSeller;
