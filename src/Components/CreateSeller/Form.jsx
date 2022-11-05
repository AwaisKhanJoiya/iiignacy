import { Link } from "react-router-dom";

const Form = ({ setSelected }) => {
  return (
    <div className="seller-form m-auto p-3 mt-2">
      <h4 className="d-form-heading text-light text-center">
        Get started selling on iiignacy
      </h4>
      <form>
        <div className="s-input-box">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="s-input-box">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div className="s-input-box">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="At least 8 characters" />
        </div>
        <div className="s-input-box">
          <label htmlFor="">Confirm Password</label>
          <input type="password" />
        </div>
        <button
          type="submit"
          onClick={() => setSelected("otp")}
          className="s-btn f-btn w-100 py-2 mt-3 font-weight-bold"
        >
          Continue
        </button>
        <p className="mt-3">
          Already have an account?
          <Link to="/signin">
            <span className="link ms-2">Sign In</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Form;
