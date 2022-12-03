import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import p2 from "../../assets/2p.png";
import logo from "../../assets/logo.png";
import plus18 from "../../assets/18+.png";
import {
  faLocationDot,
  faCaretDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import flag from "../../assets/uk-flag.png";
import ixxi from "../../assets/ixxi.png";
import { Link } from "react-router-dom";

const Header = ({ setSelected }) => {
  return (
    <>
      <div className="header d-flex justify-content-between align-items-center h-row h-first-row py-2 px-3 flex-wrap">
        <div className="d-flex align-items-center justify-content-between">
          <Link to={"/"}>
            <img src={logo} className="h-logo" alt="iiignacy" />
          </Link>
          <div
            className="d-flex align-items-center mx-2"
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faLocationDot} className="h-icon mx-2" />
            <p className="h-location m-0">Paris, France</p>
          </div>
        </div>
        <div className="h-search-bar d-flex">
          {/* <div className="h-select-cat d-flex align-items-center px-2 cursor-pointer">
            <span className="me-2">All</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
           */}
          <select name="" id="" className="h-select-cat">
            <option value="">All</option>
            <option value="">First Cat</option>
            <option value="">Second Cat</option>
          </select>
          <input type="text" placeholder="Search..." className="p-1" />
        </div>

        <div className="h-lang d-flex align-items-center cursor-pointer justify-content-between">
          <div>
            <img src={flag} className="h-lang-icon me-2" alt="English" />
            <FontAwesomeIcon
              icon={faCaretDown}
              className="mt-2"
              style={{ fontSize: "0.8rem", color: "lightgray" }}
            />
          </div>
          <Link to="/create">
            <p className="h-btn ms-4 mx-2">Seller</p>
          </Link>
          <Link to="/signinpage">
            <p className="h-btn mx-3">SIGN IN</p>
          </Link>
          <div className="mx-3">
            <span className="h-span">Return</span>
            <p className="h-btn">& Order</p>
          </div>
          <p className="h-btn mx-3">Cart</p>
        </div>
      </div>
      <div className="d-flex align-items-center h-row h-gray-row py-2 px-3 overflowx-scroll">
        <img src={ixxi} className="h-logo" alt="ixxi" />
        <Link to="/pbutton">
          <img src={p2} className="h-logo p2 ms-2 mx-2" alt="2p" />
        </Link>
        <p className="h-btn mx-3" onClick={() => setSelected("season")}>
          Today's Deal
        </p>
        <p
          className="h-btn ms-4 mx-2"
          onClick={() => setSelected("entertainment")}
        >
          Entertainment
        </p>
        <img
          src={plus18}
          className="h-logo p2 ms-4 mx-2"
          alt="18+"
          onClick={() => setSelected("eighteen")}
        />

        <p onClick={() => setSelected("fashion")} className="h-btn ms-4 mx-2">
          Fashion
        </p>
      </div>
      <div
        className="d-flex align-items-center h-row h-gray-row py-2 px-3 overflowx-scroll"
        style={{ borderTop: "1px solid black" }}
      >
        <p className="h-btn ms-4 m-2 d-flex align-items-center">
          <FontAwesomeIcon icon={faBars} className="me-1" /> All
        </p>
        <p className="h-btn ms-4 m-2">Food</p>
        <p className="h-btn ms-4 m-2">Supermarket</p>
        <p className="h-btn ms-4 m-2">Pharmacy</p>
        <p className="h-btn ms-4 m-2">Health & Beauty</p>
        <p className="h-btn ms-4 m-2">Booking</p>
        <p className="h-btn ms-4 m-2">Professional services</p>
        <p className="h-btn ms-4 m-2">Gift Card</p>
        <p className="h-btn ms-4 m-2">Buy Again</p>
        <p className="h-btn ms-4 m-2">Refund & Return</p>
        <p className="h-btn ms-4 m-2">iiignacy Global</p>
        <p className="h-btn ms-4 m-2">Agriculture & Artisanal</p>
        <Link to="home">
          <p className="h-btn ms-4 m-2">Property & Real Estate</p>
        </Link>
      </div>
    </>
  );
};

export default Header;
