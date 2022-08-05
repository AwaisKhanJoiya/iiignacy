import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <FontAwesomeIcon
      onClick={() => navigate(-1)}
      icon={faArrowLeft}
      className="c-close text-dark"
      style={{ float: "left" }}
    />
  );
};

export default BackButton;
