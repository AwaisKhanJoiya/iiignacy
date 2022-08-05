import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faEuro,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import PopupModal from "./PopupModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactInfo = ({ setSelected }) => {
  const [businessType, setBusinessType] = useState("");
  const [showModal, setModal] = useState(false);

  const changeBusinessType = (e) => {
    setBusinessType(e.target.value);
    setModal(true);
  };

  return (
    <div className="seller-form c-form m-auto p-3 mt-2">
      <PopupModal
        type={businessType}
        show={showModal}
        onHide={() => setModal(false)}
      />
      <h4 className="d-form-heading text-light text-center">
        Before starting, make sure you have the following handy
      </h4>
      <p className="text-center">
        We may require additional information or document later
      </p>
      <div className="d-flex justify-content-between mt-5">
        <div className="d-flex flex-column s-icons">
          <FontAwesomeIcon icon={faHome} />
          <p className="text-small">Business and contact address</p>
        </div>
        <div className="d-flex flex-column s-icons align-items-center">
          <FontAwesomeIcon icon={faPhone} />
          <p className="text-small">Mobile or telephone number</p>
        </div>
        <div className="d-flex flex-column s-icons align-items-center">
          <FontAwesomeIcon icon={faEuro} />
          <p className="text-small">
            Account number, Mobile money account, PayPal account
          </p>
        </div>
        <div className="d-flex flex-column s-icons align-items-center">
          <FontAwesomeIcon icon={faUser} />
          <p className="text-small">Identity detail</p>
        </div>
      </div>
      <form>
        <div className="s-input-box">
          <label htmlFor="">Business location</label>
          <select className="s-country">
            <option value="">United States</option>
            <option value="">Pakistan</option>
          </select>
        </div>

        <p className="text-small mt-2">
          If you don’t have business kindly enter your country of residence
        </p>
        <p className="text-small mt-1">
          Kindly note that an incorrect selection may affect the status of your
          account.
        </p>
        <div className="s-input-box">
          <label htmlFor="">Business type</label>
          <select onChange={changeBusinessType} className="s-country">
            <option value="">Select Business type</option>
            <option value="State-owned business">State-owned business</option>
            <option value="Publicly-listed business">
              Publicly-listed business
            </option>
            <option value="Privately-listed business">
              Privately-listed business
            </option>
            <option value="Charity">Charity</option>
            <option value="None, I am an individual">
              None, I am an individual
            </option>
          </select>
        </div>
        {businessType !== "" && businessType !== "None, I am an individual" && (
          <div className="s-input-box">
            <label htmlFor="">
              Business name used to register with your state or federal
              government
            </label>
            <input
              type="text"
              placeholder="Business name as it appears on the 
            business registration document"
            />
          </div>
        )}
        {businessType !== "" && businessType === "None, I am an individual" && (
          <div className="s-input-box">
            <label htmlFor="">Your Name</label>
            <div className="d-flex">
              <input type="text" placeholder="First name" className="me-3" />
              <input className="me-3" type="text" placeholder="Middle name" />
              <input type="text" placeholder="Last name" />
            </div>
          </div>
        )}
        {businessType !== "" && (
          <div className="d-flex align-items-start checkbox mt-4">
            <input type="checkbox" />
            <label>
              I confirm my business location and type are correct, I understand
              that this information cannot be changed later.
            </label>
          </div>
        )}
        <p className="m-0 mt-4">
          By clicking on agree and continue, you agree to the{" "}
          <span className="link">
            iiignacy services solutions businesses agreement
          </span>{" "}
          and the <span className="link">iiignacy Privacy Notice</span>
        </p>
        <Link to="moreinfo">
          <button
            type="submit"
            className="blue-btn f-btn w-100 py-2 mt-3 font-weight-bold"
          >
            Agree and continue
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ContactInfo;
