import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faEuro,
  faTools,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const SellerForm = ({ setSelected }) => {
  return (
    <div className="seller-form mt-5 m-auto p-5">
      <h4 className="d-form-heading text-light text-center">
        Millions of Shoppers can’t wait to see what you have in store
      </h4>
      <button
        onClick={() => setSelected("photos")}
        className="w-100 my-3 s-btn f-btn border-none font-bold outline-none text-white text-large p-2"
      >
        <FontAwesomeIcon icon={faShop} className="me-2" />
        Open your Shop
      </button>
      <p className="d-form-heading text-light text-center mt-2">
        Join a Creative Marketplace where millions of buyers around the world
        shop for unique items
      </p>
      <div className="d-flex justify-content-between mt-5">
        <div className="d-flex flex-column s-icons">
          <FontAwesomeIcon icon={faEuro} />
          <p>Free</p>
        </div>
        <div className="d-flex flex-column s-icons align-items-center">
          <FontAwesomeIcon icon={faTools} />
          <p>Technology Windmill Icon</p>
        </div>
        <div className="d-flex flex-column s-icons align-items-center">
          <FontAwesomeIcon icon={faMessage} />
          <p>Support and Education</p>
        </div>
      </div>
    </div>
  );
};

export default SellerForm;
