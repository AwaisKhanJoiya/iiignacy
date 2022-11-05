import React from "react";
import BackButton from "../../BackButton";
import CloseIcon from "../../CloseIcon";
import "./driver.css";
import { useState } from "react";
import EmailForm from "./EmailForm";
import VerifyEmailCode from "./VerifyEmailCode";
import MobileNoForm from "./MobileNoForm";
import VerifyMobileCode from "./VerifyMobileCode";
import PasswordForm from "./PasswordForm";
import PersonalInfoForm from "./PersonalInfoForm";
import PhotoForm from "./PhotoForm";
import BillingForm from "./BillingForm/BillingForm";
import MoneyAccount from "./BillingForm/MoneyAccount";
import PaypalAccount from "./BillingForm/PaypalAccount";
import BankAccount from "./BillingForm/BankAccount";
import CityForm from "./CityForm";
import CharacterForm from "./CharacterForm/CharacterForm";

const Driver = () => {
  const [selected, setSelected] = useState("email");

  return (
    <div className="driver_container p-4 ">
      <div className="white-container">
        <BackButton />
        <CloseIcon />
      </div>
      {selected === "email" && <EmailForm setSelected={setSelected} />}
      {selected === "emailcode" && (
        <VerifyEmailCode setSelected={setSelected} />
      )}
      {selected === "mobileno" && <MobileNoForm setSelected={setSelected} />}
      {selected === "mobilecode" && (
        <VerifyMobileCode setSelected={setSelected} />
      )}
      {selected === "city" && <CityForm setSelected={setSelected} />}

      {selected === "password" && <PasswordForm setSelected={setSelected} />}
      {selected === "pinfo" && <PersonalInfoForm setSelected={setSelected} />}
      {selected === "photo" && <PhotoForm setSelected={setSelected} />}
      {selected === "bill" && <BillingForm setSelected={setSelected} />}
      {selected === "money" && <MoneyAccount setSelected={setSelected} />}
      {selected === "paypal" && <PaypalAccount setSelected={setSelected} />}
      {selected === "bank" && <BankAccount setSelected={setSelected} />}
      {selected === "character" && <CharacterForm setSelected={setSelected} />}
    </div>
  );
};

export default Driver;
