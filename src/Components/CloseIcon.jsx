import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CloseIcon = () => {
  return (
    <Link to="/">
      <FontAwesomeIcon icon={faXmark} className="c-close text-dark" />
    </Link>
  );
};

export default CloseIcon;
