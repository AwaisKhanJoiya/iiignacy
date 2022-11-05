import BackButton from "../BackButton";
import CloseIcon from "../CloseIcon";
import { useParams } from "react-router-dom";

const DrivingForm = () => {
  const { type } = useParams();
  console.log(type);
  return (
    <div className="p-4 d-form-container">
      <BackButton />
      <CloseIcon />
      <form className="d-form mt-5 m-auto p-5">
        <h3 className="d-form-heading">Sign up now</h3>
        <div className="my-4">
          <div className="d-flex justify-content-between my-2">
            <input
              type="text"
              placeholder="First name"
              className="d-form-input me-4"
            />
            <input
              type="text"
              placeholder="Last name"
              className="d-form-input"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="d-form-input my-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="d-form-input my-2"
          />
          <input
            type="phone"
            placeholder="Phone Number"
            className="d-form-input my-2"
          />
          <input
            type="text"
            placeholder="Address"
            className="d-form-input my-2"
            defaultValue={"Multan, Pakistan"}
          />
        </div>
        <button
          className="border-none outline-none bg-dark text-white text-large py-1 px-2"
          style={{ fontSize: "1.1rem", borderRadius: "10px" }}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default DrivingForm;
