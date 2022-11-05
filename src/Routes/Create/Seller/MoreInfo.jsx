import { useState } from "react";
import BackButton from "../../../Components/BackButton";
import CloseIcon from "../../../Components/CloseIcon";
import BankAccount from "./BillAccount/BankAccount";
import MobileMoneyAccount from "./BillAccount/MobileMoneyAccount";
import PaypalAccount from "./BillAccount/PaypalAccount";
import BillingInfo from "./BillingInfo";
import BusinessInfo from "./BusinessInfo";
import SellerInfo from "./SellerInfo";
import StoreInfo from "./StoreInfo";
import Verification from "./Verification";

const MoreInfo = () => {
  const [selected, setSelected] = useState("business");

  return (
    <div className="minfo_page p-4">
      <BackButton />
      <CloseIcon />
      {selected === "business" && <BusinessInfo setSelected={setSelected} />}
      {selected === "sinfo" && <SellerInfo setSelected={setSelected} />}
      {selected === "billinfo" && <BillingInfo setSelected={setSelected} />}
      {selected === "mma" && <MobileMoneyAccount setSelected={setSelected} />}
      {selected === "ppa" && <PaypalAccount setSelected={setSelected} />}
      {selected === "ba" && <BankAccount setSelected={setSelected} />}
      {selected === "store" && <StoreInfo setSelected={setSelected} />}
      {selected === "verification" && (
        <Verification setSelected={setSelected} />
      )}
    </div>
  );
};

export default MoreInfo;
