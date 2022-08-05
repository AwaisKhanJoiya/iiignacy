import { Modal } from "react-bootstrap";

const PopupModal = ({ show, onHide, type }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <div className="p-4">
        {type === "State-owned business" && (
          <h5>
            Please ensure your business type selection is correct. You have
            selected that you are registering as a {type} which is a business
            that is either wholly or partially owned and operated by the
            government.{" "}
            <span className="text-danger">
              An incorrect selection may affect the status of your account
            </span>
          </h5>
        )}
        {type === "Publicly-listed business" && (
          <h5>
            Please ensure your business type selection is correct. You have
            selected to register as a Publicly listed business with shares
            listed on a stock exchange for public trading.{" "}
            <span className="text-danger">
              An incorrect selection may affect the status of your account
            </span>
          </h5>
        )}
        {type === "Privately-listed business" && (
          <h5>
            Please ensure your business type selection is correct. You have
            selected to register as a Privately-owned business which is
            controlled and operated by private individuals. The business seller
            is registered in the context of commercial or professional activity.{" "}
            <span className="text-danger">
              An incorrect selection may affect the status of your account
            </span>
          </h5>
        )}
        {type === "Charity" && (
          <h5>
            The pop-up message in the big square box should be: “Please ensure
            your business type selection is correct. You have selected to
            register as a charity which is an incorporated or non-incorporated
            tax-exempt body which:{" "}
            <ol>
              <li>
                <h5>Is created and operated for charitable purposes only.</h5>
              </li>
              <li>
                <h5>
                  Employs all its resources to those charitable activities that
                  are under its direct control.
                </h5>
              </li>
              <li>
                <h5>
                  Does not distribute any part of the income generated for the
                  benefit of any trustee, trustor, member or another private
                  individual.
                </h5>
              </li>
              <li>
                <h5>
                  Does not contribute to or associate with political
                  organisations.
                </h5>
              </li>
            </ol>
            <span className="text-danger">
              An incorrect selection may affect the status of your account
            </span>
          </h5>
        )}

        {type === "None, I am an individual" && (
          <>
            <h3>Please ensure your business type selection is correct.</h3>
            <h5>
              An individual sells in a private context. An individual does not
              sell a product to a company/charity and does not operate in a
              business or professional context.
              <br />
              <span className="text-danger">
                An incorrect selection may affect the status of your account
              </span>
            </h5>
          </>
        )}
        <button
          type="submit"
          onClick={onHide}
          className="blue-btn f-btn w-100 py-2 mt-3 font-weight-bold"
        >
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default PopupModal;
