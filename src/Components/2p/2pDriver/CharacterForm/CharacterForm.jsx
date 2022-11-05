import React from "react";
import { Link } from "react-router-dom";

const CharacterForm = () => {
  return (
    <div>
      <div className="driver_form character_form">
        <h1 className=" my-3">Investigation of scenarios</h1>
        <h4 className="fw-bold mb-4">
          To continue the registration process you must complete the quiz. This
          quiz should take you less than 10 minutes.
        </h4>
        <Link to="/quizform">
          <button className="driver_btn w-50">Complete the quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterForm;
