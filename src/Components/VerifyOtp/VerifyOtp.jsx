import { useState } from "react";

const VerifyOtp = ({ setSelected }) => {
  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("_");
    handleOtp(e);
    // Check if they hit the max character length
    if (value.length >= maxLength) {
      // Check if it's not the last input field
      if (parseInt(fieldIndex, 10) < 4) {
        // Get the next input field
        const nextSibling = document.querySelector(
          `input[name=otp_${parseInt(fieldIndex, 10) + 1}]`
        );

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    } else {
      if (value.type !== "number") {
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) > 1) {
          // Get the next input field
          const previousSibling = document.querySelector(
            `input[name=otp_${parseInt(fieldIndex, 10) - 1}]`
          );

          // If found, focus the next field
          if (previousSibling !== null) {
            previousSibling.focus();
          }
        }
      }
    }
  };

  const [otp, setOtp] = useState({
    otp_1: "",
    otp_2: "",
    otp_3: "",
    otp_4: "",
  });
  const handleOtp = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setOtp({ ...otp, [name]: value });
  };
  return (
    <div className="seller-form m-auto p-3 mt-2">
      <h4 className="d-form-heading text-light text-center">
        Verify email address
      </h4>
      <p className="d-form-heading text-light text-center">
        To verify your email, we’ve sent a one-time password (OTP) to{" "}
        <span style={{ fontWeight: "500" }}>test@gmail.com</span>{" "}
        <span onClick={() => setSelected("form")} className="link">
          (Change)
        </span>
      </p>
      <form>
        <div className="otp d-flex justify-content-between">
          <input
            type="text"
            className="input_otp"
            name="otp_1"
            maxLength={1}
            pattern="[0-9]"
            value={otp.otp_1}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input_otp"
            name="otp_2"
            maxLength={1}
            pattern="[0-9]"
            value={otp.otp_2}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input_otp"
            name="otp_3"
            maxLength={1}
            pattern="[0-9]"
            value={otp.otp_3}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input_otp"
            name="otp_4"
            maxLength={1}
            pattern="[0-9]"
            value={otp.otp_4}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          onClick={() => setSelected("contactInfo")}
          className="s-btn f-btn w-100 py-2 mt-3 font-weight-bold"
        >
          Create your iiignacy account
        </button>
        <p className="link text-center mt-2">Resend OTP</p>
      </form>
    </div>
  );
};

export default VerifyOtp;
