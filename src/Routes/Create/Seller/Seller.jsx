import BackButton from "../../../Components/BackButton";
import CloseIcon from "../../../Components/CloseIcon";

import { useState } from "react";
import SellerForm from "../../../Components/SellerForm/SellerForm";
import SellerPhotos from "../../../Components/SellerPhotos/SellerPhotos";
import CreateSeller from "../../../Components/CreateSeller/CreateSeller";
import WelcomePage from "./VerificationSeller/WelcomePage";
import CreateVerification from "./VerificationSeller/CreateVerification";

const Seller = () => {
  const [selected, setSelected] = useState("form");

  return (
    <div className="p-4 seller-form-container">
      <BackButton />
      <CloseIcon />
      {selected === "form" && <SellerForm setSelected={setSelected} />}
      {selected === "photos" && <SellerPhotos setSelected={setSelected} />}
      {selected === "create" && <CreateSeller setSelected={setSelected} />}
      {/* {selected === "cveri" && <CreateVerification setSelected={setSelected} />}
      {selected === "welcome" && <WelcomePage setSelected={setSelected} />} */}
    </div>
  );
};

export default Seller;
