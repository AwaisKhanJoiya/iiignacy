import BackButton from "../../../Components/BackButton";
import CloseIcon from "../../../Components/CloseIcon";

const Services = () => {
  return (
    <div className="p-4 s-form-container">
      <BackButton />
      <CloseIcon />
      <form className="d-form s-form mt-5 m-auto p-5">
        <h3 className="d-form-heading text-center">Join Iiignacy</h3>
        <div className="my-4">
          <input
            type="email"
            placeholder="Email"
            className="s-form-input my-2"
          />
          <input
            type="text"
            placeholder="Username"
            className="s-form-input my-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="s-form-input my-2"
          />
        </div>
        <button className="w-100 f-btn border-none outline-none text-white text-large p-2">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Services;
